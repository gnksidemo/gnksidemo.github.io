import{_ as n,W as e,X as s,a1 as a}from"./framework-a045178c.js";const t={},i=a(`<h1 id="simple-storage-service-model" tabindex="-1"><a class="header-anchor" href="#simple-storage-service-model" aria-hidden="true">#</a> Simple Storage Service Model</h1><p>Greenfield provides developers with similar API primitives and models as the most popular Web2 cloud storage: AWS s3.</p><h2 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> Abstract</h2><p>Below are the basic data models for Greenfield storage:</p><ul><li>Bucket</li><li>Object</li><li>Group</li><li>Permission</li></ul><p>These metadata are stored as blockchain state into the persistent storage of the Greenfield blockchain.</p><h2 id="models" tabindex="-1"><a class="header-anchor" href="#models" aria-hidden="true">#</a> Models</h2><h3 id="bucket" tabindex="-1"><a class="header-anchor" href="#bucket" aria-hidden="true">#</a> Bucket</h3><p>A bucket is a logical container for storing objects in Greenfield. Each bucket has a unique name that is assigned by the user when the bucket is created. Bucket names must be globally unique within the Greenfield namespace, which means that no two buckets can have the same name. The name must also comply with DNS naming conventions, which requires that it be a series of one or more labels separated by periods.</p><p>Once a bucket has been created, objects can be uploaded to it using various methods such as the gnfd cmd or SDKs. Objects within a bucket can be organized and managed like folders (also called &quot;prefixes&quot;). Additionally, each object can be given a unique key (a string value) that identifies it within the bucket.</p><p>Every user account can create several buckets. The account will become the &quot;owner&quot; of the bucket.</p><p>Each bucket should be associated with its own Primary SP, and the payment accounts for Read and Store. The owner&#39;s address will be the default payment account.</p><p>The prototype definition of a bucket:</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">BucketInfo</span> <span class="token punctuation">{</span>
  <span class="token comment">// owner is the account address of bucket creator, it is also the bucket owner.</span>
  <span class="token builtin">string</span> owner<span class="token punctuation">;</span>
  <span class="token comment">// bucket_name is a globally unique name of bucket</span>
  <span class="token builtin">string</span> bucket_name<span class="token punctuation">;</span>
  <span class="token comment">// is_public define the highest permissions for bucket. When the bucket is public, everyone can get the object in it.</span>
  <span class="token builtin">bool</span> is_public<span class="token punctuation">;</span>
  <span class="token comment">// id is the unique identification for bucket.</span>
  <span class="token builtin">string</span> id<span class="token punctuation">;</span>
  <span class="token comment">// source_type define the source of the bucket</span>
  <span class="token positional-class-name class-name">SourceType</span> source_type<span class="token punctuation">;</span>
  <span class="token comment">// create_at define the block number when the bucket created.</span>
  <span class="token builtin">int64</span> create_at<span class="token punctuation">;</span>
  <span class="token comment">// payment_address is the address of the payment account</span>
  <span class="token builtin">string</span> payment_address<span class="token punctuation">;</span>
  <span class="token comment">// primary_sp_address is the address of the primary sp. Objects belongs to this bucket will never</span>
  <span class="token comment">// leave this SP, unless you explicitly shift them to another SP.</span>
  <span class="token builtin">string</span> primary_sp_address<span class="token punctuation">;</span>
  <span class="token comment">// read_quota defines the traffic quota for read</span>
  <span class="token positional-class-name class-name">ReadQuota</span> read_quota<span class="token punctuation">;</span>
  <span class="token builtin">int64</span> payment_price_time<span class="token punctuation">;</span>
  <span class="token comment">// payment_out_flows, for billing;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">payment<span class="token punctuation">.</span>OutFlowInUSD</span> payment_out_flows<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3><p>An object is a fundamental unit of storage in Greenfield, which represents a file consisting of data and its associated metadata. Each object is uniquely identified within a bucket by its object name (a string value). While objects are commonly used to store files, they can contain any type of data, including text, images, videos, and program binaries.</p><p>Users can upload objects to Greenfield using various methods, including the gnfd cmd and SDKs. They can also download, copy, or move objects to and from in a similar way.</p><p>Objects in Greenfield have several important characteristics, including:</p><ul><li>name and ID</li><li>owner</li><li>bucket that hosts it</li><li>size and timestamps</li><li>content type</li><li>checkSums for the storage pieces</li><li>storage status</li><li>associated SP information</li></ul><p>Object metadata is stored with the bucket name as the prefix of the key. It is possible to iterate through all objects under the same bucket, but it may be a heavy-lifting job for a large bucket with lots of objects.</p><p>The prototype definition of an object:</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code>
<span class="token keyword">message</span> <span class="token class-name">ObjectInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> owner<span class="token punctuation">;</span>
  <span class="token comment">// bucket_name is the name of the bucket</span>
  <span class="token builtin">string</span> bucket_name<span class="token punctuation">;</span>
  <span class="token comment">// object_name is the name of object</span>
  <span class="token builtin">string</span> object_name<span class="token punctuation">;</span>
  <span class="token comment">// id is the unique identifier of object</span>
  <span class="token builtin">string</span> id<span class="token punctuation">;</span>
  <span class="token comment">// payloadSize is the total size of the object payload</span>
  <span class="token builtin">uint64</span> payload_size<span class="token punctuation">;</span>
  <span class="token comment">// is_public define the highest permissions for object. When the object is public, everyone can access it.</span>
  <span class="token builtin">bool</span> is_public<span class="token punctuation">;</span>
  <span class="token comment">// content_type define the format of the object which should be a standard MIME type.</span>
  <span class="token builtin">string</span> content_type<span class="token punctuation">;</span>
  <span class="token comment">// create_at define the block number when the object created</span>
  <span class="token builtin">int64</span> create_at<span class="token punctuation">;</span>
  <span class="token comment">// object_status define the upload status of the object.</span>
  <span class="token positional-class-name class-name">ObjectStatus</span> object_status<span class="token punctuation">;</span>
  <span class="token comment">// redundancy_type define the type of the redundancy which can be multi-replication or EC.</span>
  <span class="token positional-class-name class-name">RedundancyType</span> redundancy_type<span class="token punctuation">;</span>
  <span class="token comment">// source_type define the source of the object.</span>
  <span class="token positional-class-name class-name">SourceType</span> source_type<span class="token punctuation">;</span>
  <span class="token comment">// checksums define the root hash of the pieces which stored in a SP.</span>
  <span class="token keyword">repeated</span> <span class="token builtin">bytes</span> checksums<span class="token punctuation">;</span>
  <span class="token comment">// secondary_sp_addresses define the addresses of secondary_sps</span>
  <span class="token keyword">repeated</span> <span class="token builtin">string</span> secondary_sp_addresses <span class="token punctuation">;</span>
  <span class="token comment">// lockedBalance</span>
  <span class="token builtin">string</span> lockedBalance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> Group</h3><p>A Group is a collection of accounts with the same permissions. The group name is not allowed to be duplicated under the same user. However, a group can not create or own any resource. A group can not be a member of another group either.</p><p>A resource can only have a limited number of groups associated with it for permissions. This ensures that the on-chain permission check can be finished within a constant time.</p><p>The prototype definition of a group:</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">GroupInfo</span> <span class="token punctuation">{</span>
  <span class="token comment">// owner is the owner of the group. It can not changed once created.</span>
  <span class="token builtin">string</span> owner <span class="token punctuation">;</span>
  <span class="token comment">// group_name is the name of group which is unique under an account.</span>
  <span class="token builtin">string</span> group_name<span class="token punctuation">;</span>
  <span class="token comment">// source_type</span>
  <span class="token positional-class-name class-name">SourceType</span> source_type<span class="token punctuation">;</span>
  <span class="token comment">// id is the unique identifier of group</span>
  <span class="token builtin">string</span> id<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[i];function c(l,p){return e(),s("div",null,o)}const r=n(t,[["render",c],["__file","simple-storage-svc-model .html.vue"]]);export{r as default};
