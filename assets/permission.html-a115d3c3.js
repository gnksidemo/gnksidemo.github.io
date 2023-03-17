import{_ as s,W as n,X as e,a1 as a}from"./framework-a045178c.js";const t={},o=a(`<h1 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> Permission</h1><p>The permission module serves as the foundation for basic permission control management in the Greenfield Storage Network.</p><p>All data resources, such as objects, buckets, payment accounts, and groups, require specific permissions to be accessed. These authorizations dictate the actions that can be taken by each account.</p><p>Groups are collections of accounts that share the same permissions, allowing them to be handled as a single entity. Examples of permissions include:</p><ul><li>Put, List, Get, Delete, Copy, and Execute data objects;</li><li>Create, Delete, and List buckets</li><li>Create, Delete, ListMembers, Leave groups</li><li>Create, Associate payment accounts</li><li>Grant, Revoke the above permissions</li></ul><p>These permissions are linked to both the data resources and the accounts or groups authorized to access them. The group definitions are publicly stored on the Greenfield blockchain, and are currently in plain text. However, a privacy mode utilizing Zero Knowledge Proof technology is planned for future implementation.</p><p>Notably, permission operations can be directly executed from BSC, whether through smart contracts or an EOA, further enhancing their convenience.</p><p>Overall, the interface semantics of the permission module are similar to S3.</p><h2 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts" aria-hidden="true">#</a> Concepts</h2><h3 id="terminology" tabindex="-1"><a class="header-anchor" href="#terminology" aria-hidden="true">#</a> Terminology</h3><ul><li><strong>Resources</strong>: Buckets, objects, and groups are the primary resources within the Greenfield network that require permission authorization. These resources are identified through the Greenfield Resource Name (GRN) in policies.</li><li><strong>Actions</strong>: Each resource within Greenfield has a designated set of operations that can be performed on it. To specify which actions are allowed or denied, an action enum value must be provided.</li><li><strong>Principals</strong>: Accounts or groups that are granted permission to access specific resources and actions can be identified in the policy.</li><li><strong>Statements</strong>: Policies outline the specific details of permissions, including the Effect, ActionList, and Resources.</li><li><strong>Effect</strong>: The Effect sets the outcome when a user requests a particular action, and can be configured as either allow or deny.</li></ul><h3 id="resource" tabindex="-1"><a class="header-anchor" href="#resource" aria-hidden="true">#</a> Resource</h3><p>Greenfield utilizes resources, which are the main entities that can be manipulated. Buckets, objects, and groups are all considered resources, and each has its own set of subresources.</p><p>Bucket subresources consist of the following:</p><ul><li><strong>BucketInfo</strong>: Allows for modification of specific fields in a bucket, such as <code>IsPublic</code>, <code>ReadQuota</code>, <code>paymentAccount</code>, etc.</li><li><strong>Policy</strong>: Stores permissions information for the bucket.</li><li><strong>Objects</strong>: Every object must be stored within a bucket.</li><li><strong>Object ownership</strong>: Newly uploaded objects are automatically transferred to the bucket owner, regardless of who uploaded them.</li></ul><p>Object subresources consist of the following:</p><ul><li><strong>ObjectInfo</strong>: Allows for modification of certain fields within an object, such as <code>IsPublic</code>, etc.</li><li><strong>Policy</strong>: Stores access permissions information for the object.</li></ul><p>Group subresources consist of the following:</p><ul><li><strong>GroupInfo</strong>: Allows for modification of specific fields within a group, such as members, user-meta, etc.</li><li><strong>Policy</strong>: Stores access permissions information for the group.</li><li><strong>GroupMember</strong>: Any account in Greenfield has the ability to join a group, but a group cannot become a member of another group.</li></ul><h3 id="ownership" tabindex="-1"><a class="header-anchor" href="#ownership" aria-hidden="true">#</a> Ownership</h3><p>The resources owner refers to the account that creates the resource. By default, only the resource owner has permission to access its resources.</p><ul><li>The resource creator owns the resource.</li><li>Each resource only has one owner and the ownership cannot be transferred once the resource is created.</li><li>There are features that allow an account to &quot;approve&quot; another account to create and upload objects to be owned by the approver, as long as it is within limits.</li><li>The owner or payment account of the owner pays for the resource.</li></ul><h3 id="definitions" tabindex="-1"><a class="header-anchor" href="#definitions" aria-hidden="true">#</a> Definitions</h3><ul><li><strong>Ownership Permission</strong>: By default, the owner has all permissions to the resource.</li><li><strong>Public or Private Permission</strong>: By default, the resource is private, only the owner can access the resource. If a resource is public, anyone can access it.</li><li><strong>Shared Permission</strong>: These permissions are managed by the permission module. It usually manages who has permission for which resources.</li></ul><p>There are two types of shared permissions: Single Account Permission and Group Permission, which are stored in different formats in the blockchain state.</p><h3 id="revoke" tabindex="-1"><a class="header-anchor" href="#revoke" aria-hidden="true">#</a> Revoke</h3><p>Users can assign one or more permissions as needed. However, when a resource is deleted, its associated permissions should also be removed, even if the user does not initiate the deletion – this can be managed through clean-up mechanisms. If too many accounts have permission to delete an object, the processing time required may become excessively lengthy for a single transaction to handle.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>Let&#39;s say Greenfield has two accounts, Bob(0x1110) and Alice(0x1111). A basic example scenario would be:</p><ul><li>Bob uploaded a picture named avatar.jpg into a bucket named &quot;profile&quot;;</li><li>Bob grants the GetObject action permission for the object avatar.jpg to Alice, it will store a key 0x11 | ResourceID( profile_avatar.jpg) | Address(Alice) into a permission state tree.</li><li>when Alice wants to read the avatar.jpg, the SP should check the Greenfield blockchain that whether the key Prefix( ObjectPermission) | ResourceID(profile_avatar.jpg) | Address(Alice) existed in the permission state tree, and whether the action list contains GetObject.</li></ul><p>Let&#39;s move on to more complex scenarios:</p><ul><li>Bob created a bucket named &quot;profile&quot;</li><li>Bob grants the PutObject action permission for the bucket &quot;profile&quot; to Alice, the key 0x10 | ResourceID(profile) | Address(Alice) will be put into the permission state tree.</li><li>When Alice wants to upload an object named avatar.jpg into the bucket profile, it creates a PutObject transaction and will be executed on the chain.</li><li>The Greenfield blockchain needs to confirm that Alice has permission to operate, so it checks whether the key 0x10 | ResourceID(profile) | Address(Alice) existed in the permission state tree and got the permission information if it existed.</li><li>If the permission info shows that Alice has the PutObject action permission of the bucket profile, then she can do PutObject operation.</li></ul><p>Another more complex scenario that contains groups:</p><ul><li>Bob creates a group named &quot;Games&quot;, and creates a bucket named &quot;profile&quot;.</li><li>Bob adds Alice to the Games group, the key 0x12 | ResourceID(Games) | Address(Alice) will be put into the permission state tree</li><li>Bob put a picture avatar.jpg to the bucket profile and grants the CopyObject action permission to the group Games</li><li>When Alice wants to copy the object avatar.jpg . First, Greenfield blockchain checks whether she has permission via the key 0x11 | ResourceID(avatar.jpg) | Address(Alice); if it is a miss, Greenfield will iterate all groups that the object avatar.jpg associates and check whether Alice is a member of one of these groups by checking, e.g. if the key 0x21 | ResourceID(group, e.g. Games) existed, then iterate the permissionInfo map, and determine if Alice is in a group which has the permission to do CopyObject operation via the key 0x12| ResourceID(Games) | Address(Alice)</li></ul><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2><p>The permission module keeps state of the following primary objects.</p><ol><li><code>Policy</code>: The owner account of the resource grant its specify permission to another account</li><li><code>PolicyGroup</code>: A limited list of <code>Policy</code>, and each <code>Policy</code> items defines the owner account of the resource grant its specify permission to a group</li></ol><p>These primary objects should be primarily stored and accessed by the <code>ID</code> which is an auto-incremented sequence. An additional indices are maintained per primary objects in order to compatibility with the S3 object storage.</p><ul><li>BucketPolicyForAccount: <code>0x11 | BigEndian(BucketID) | AccAddress -&gt; BigEndian(PolicyID)</code></li><li>ObjectPolicyForAccount: <code>0x12 | BigEndian(ObjectID) | AccAddress -&gt; BigEndian(PolicyID)</code></li><li>GroupPolicyForAccount: <code>0x13 | BigEndian(GroupID) | AccAddress -&gt; BigEndian(PolicyID)</code></li><li>BucketPolicyForGroup: <code>0x21 | BigEndian(BucketID) -&gt; ProtoBuf(PolicyGroup)</code></li><li>ObjectPolicyForGroup: <code>0x22 | BigEndian(ObjectID) -&gt; ProtoBuf(PolicyGroup)</code></li><li>PolicyByID: <code>0x31 | BigEndian(PolicyID) -&gt; ProtoBuf(Policy)</code></li></ul><h3 id="policy" tabindex="-1"><a class="header-anchor" href="#policy" aria-hidden="true">#</a> Policy</h3><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Policy</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>cosmos_proto<span class="token punctuation">.</span>scalar<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;cosmos.Uint&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>customtype<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;Uint&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>nullable<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">permission<span class="token punctuation">.</span>Principal</span> principal <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">resource<span class="token punctuation">.</span>ResourceType</span> resource_type <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> resource_id <span class="token operator">=</span> <span class="token number">4</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>cosmos_proto<span class="token punctuation">.</span>scalar<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;cosmos.Uint&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>customtype<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;Uint&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>nullable<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">permission<span class="token punctuation">.</span>Statement</span> statements <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">permission<span class="token punctuation">.</span>Statement</span> member_statement <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="policygroup" tabindex="-1"><a class="header-anchor" href="#policygroup" aria-hidden="true">#</a> PolicyGroup</h3><p>Each resource can only grant permissions to a limited number of groups and limited number is defined by <code>MaximumGroupNum</code> in module params.</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">PolicyGroup</span> <span class="token punctuation">{</span>
  <span class="token keyword">message</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> policy_id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span>
      <span class="token punctuation">(</span>cosmos_proto<span class="token punctuation">.</span>scalar<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;cosmos.Uint&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>customtype<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;Uint&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>nullable<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> group_id <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">[</span>
      <span class="token punctuation">(</span>cosmos_proto<span class="token punctuation">.</span>scalar<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;cosmos.Uint&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>customtype<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;Uint&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>nullable<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">Item</span> items <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// Params defines the parameters for the module.</span>
<span class="token keyword">message</span> <span class="token class-name">Params</span> <span class="token punctuation">{</span>
  <span class="token keyword">option</span> <span class="token punctuation">(</span>gogoproto<span class="token punctuation">.</span>goproto_stringer<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token builtin">uint64</span> maximum_statements_num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> maximum_group_num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h2><blockquote><p>Notice: Permission-related messages are defined in the storage module</p></blockquote><h3 id="putpolicy" tabindex="-1"><a class="header-anchor" href="#putpolicy" aria-hidden="true">#</a> PutPolicy</h3><p>Use to create a policy for the resource.</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">MsgPutPolicy</span> <span class="token punctuation">{</span>
  <span class="token keyword">option</span> <span class="token punctuation">(</span>cosmos<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>v1<span class="token punctuation">.</span>signer<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;operator&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// operator defines the granter who grant the permission to another principal</span>
  <span class="token builtin">string</span> operator <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>cosmos_proto<span class="token punctuation">.</span>scalar<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;cosmos.AddressString&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// Principal define the roles that can grant permissions. Currently, it can be account or group.</span>
  <span class="token positional-class-name class-name">permission<span class="token punctuation">.</span>Principal</span> principal <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token comment">// resource define a greenfield standard resource name that can be generated by GRN structure</span>
  <span class="token builtin">string</span> resource <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

  <span class="token comment">// statements define a list of individual statement which describe the detail rules of policy</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">permission<span class="token punctuation">.</span>Statement</span> statements <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deletepolicy" tabindex="-1"><a class="header-anchor" href="#deletepolicy" aria-hidden="true">#</a> DeletePolicy</h3><p>Use to delete the policy which associate with an account or a group and a resource.</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">MsgDeletePolicy</span> <span class="token punctuation">{</span>
  <span class="token keyword">option</span> <span class="token punctuation">(</span>cosmos<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>v1<span class="token punctuation">.</span>signer<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;operator&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// operator defines the granter who grant the permission to another principal</span>
  <span class="token builtin">string</span> operator <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>cosmos_proto<span class="token punctuation">.</span>scalar<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;cosmos.AddressString&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// Principal define the roles that can grant permissions. Currently, it can be account or group.</span>
  <span class="token positional-class-name class-name">permission<span class="token punctuation">.</span>Principal</span> principal <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token comment">// resource define a greenfield standard resource name that can be generated by GRN structure</span>
  <span class="token builtin">string</span> resource <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2>`,55),i=[o];function c(p,r){return n(),e("div",null,i)}const u=s(t,[["render",c],["__file","permission.html.vue"]]);export{u as default};