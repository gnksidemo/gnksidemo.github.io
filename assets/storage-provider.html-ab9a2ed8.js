import{_ as s,W as a,X as e,a1 as n}from"./framework-a045178c.js";const t={},i=n(`<h1 id="storage-provider" tabindex="-1"><a class="header-anchor" href="#storage-provider" aria-hidden="true">#</a> Storage Provider</h1><p>The SP module is responsible for managing and maintaining all storage providers in the Greenfield network. It provides basic functions such as joining, depositing, editing, and etc.</p><h2 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> QuickStart</h2><p>To begin, start a local cluster with m validator and n storage provider</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> ./deployment/localup/localup.sh all <span class="token number">3</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above command will create a local Greenfield chain network, which initializes three validators and seven storage providers.</p><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h2><p>The CLI <code>query</code> commands allow users to query <code>sp</code> state. You can use it to query the status of the storage provider, where params include minimum bond, bond denom, etc.; storage-provider can query the SP at a specific address; storage-providers can query all SPs.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./build/bin/gnfd query sp <span class="token builtin class-name">help</span>
Querying commands <span class="token keyword">for</span> the sp module

Usage:
  gnfd query sp <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
  gnfd query sp <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  params            Shows the parameters of the module
  storage-provider  Query storage-provider with specify address
  storage-providers Query StorageProviders

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-storage-provider" tabindex="-1"><a class="header-anchor" href="#create-storage-provider" aria-hidden="true">#</a> Create Storage Provider</h2><h3 id="_1-prepare-4-account-addresses-in-advance" tabindex="-1"><a class="header-anchor" href="#_1-prepare-4-account-addresses-in-advance" aria-hidden="true">#</a> 1. Prepare 4 account addresses in advance</h3><p>Each storage provider will hold 4 different accounts serving different purposes:</p><ul><li>Operator Address: Used to edit the information of the StorageProvider.</li><li>Funding Address: Used to deposit staking tokens and receive earnings. It is important to ensure that there is enough money in this account, and the user must submit a deposit as a guarantee.</li><li>Seal Address: Used to seal the user&#39;s object.</li><li>Approval Address: Used to approve user&#39;s requests.</li></ul><h3 id="_2-deduct-tokens-authorization" tabindex="-1"><a class="header-anchor" href="#_2-deduct-tokens-authorization" aria-hidden="true">#</a> 2. Deduct Tokens Authorization</h3><p>Before creating the storage provider, it is necessary to allow the module account of the gov module to deduct the tokens from the funding account specified by the SP, because the addition of CreateStorageProvider requires submitting a proposal to the gov module, and only after enough validators approve can the SP be truly created on the chain and provide services externally. &quot;The address of the gov module account is <code>0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd tx sp grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 --spend-limit 1000000bnb <span class="token parameter variable">--SPAddress</span> 0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC <span class="token parameter variable">--from</span> sp0_fund <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above command requires the funding account of the SP to send the transaction to allow the gov module to have the permission to deduct tokens from the funding account of SP which specified by operator address</p><h3 id="_3-submit-proposal" tabindex="-1"><a class="header-anchor" href="#_3-submit-proposal" aria-hidden="true">#</a> 3. submit-proposal</h3><p>The SP needs to initiate an on-chain proposal that specifies the Msg information to be automatically executed after the vote is approved. In this case, the Msg is <code>MsgCreateStorageProvider</code>. It&#39;s worth noting that the deposit tokens needs to be greater than the minimum deposit tokens specified on the chain.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd tx gov submit-proposal ./deployment/localup/create_sp.json <span class="token parameter variable">--from</span> sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0  <span class="token parameter variable">--node</span> http://localhost:26750

<span class="token comment"># create_sp.json</span>
./create_sp.json
<span class="token punctuation">{</span>
  <span class="token string">&quot;messages&quot;</span>:<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;@type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;/bnbchain.greenfield.sp.MsgCreateStorageProvider&quot;</span>,
    <span class="token string">&quot;description&quot;</span>:<span class="token punctuation">{</span>
      <span class="token string">&quot;moniker&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sp0&quot;</span>,
      <span class="token string">&quot;identity&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;security_contact&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;details&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;sp_address&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC&quot;</span>,
    <span class="token string">&quot;funding_address&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0x1d05CCD43A6c27fBCdfE6Ac727B0e9B889AAbC3B&quot;</span>,
    <span class="token string">&quot;seal_address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC&quot;</span>,
    <span class="token string">&quot;approval_address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC&quot;</span>,
    <span class="token string">&quot;endpoint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sp0.greenfield.io&quot;</span>,
    <span class="token string">&quot;deposit&quot;</span>:<span class="token punctuation">{</span>
      <span class="token string">&quot;denom&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;bnb&quot;</span>,
      <span class="token string">&quot;amount&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;10000&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;creator&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>,
  <span class="token string">&quot;metadata&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4pIMOgIGx1vZGU=&quot;</span>,
  <span class="token string">&quot;deposit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1bnb&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-deposit-tokens-to-the-proposal" tabindex="-1"><a class="header-anchor" href="#_4-deposit-tokens-to-the-proposal" aria-hidden="true">#</a> 4. deposit tokens to the proposal</h3><p>Each proposal needs to have enough tokens deposited to enter the voting stage.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd tx gov deposit <span class="token number">1</span> 10000bnb <span class="token parameter variable">--from</span> sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0  <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-validator-voting" tabindex="-1"><a class="header-anchor" href="#_5-validator-voting" aria-hidden="true">#</a> 5. Validator voting</h3><p>Validators are required to send transactions to vote. Only after more than 2/3 of the validators vote in favor can this proposal pass.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd tx gov deposit <span class="token number">1</span> 10000bnb <span class="token parameter variable">--from</span> sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0  <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-wait-for-the-voting-results" tabindex="-1"><a class="header-anchor" href="#_6-wait-for-the-voting-results" aria-hidden="true">#</a> 6. Wait for the voting results</h3><p>Generally, each proposal has a voting window period, which can be viewed in the on-chain configuration. The default is 300 seconds. After the voting period ends, it will be determined whether enough validators have voted in favor. You can check the on-chain SP information to confirm whether the SP has been successfully created.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd query sp storage-providers <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternatively, you can check the proposal to know about its execution status.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd query proposal <span class="token punctuation">{</span>proposal_id<span class="token punctuation">}</span> <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="deposit" tabindex="-1"><a class="header-anchor" href="#deposit" aria-hidden="true">#</a> Deposit</h2><p>This command is used for the SP to supplement collateral, because if the service status of the SP is not good during operation, it will be slashed by users, resulting in the deduction of its deposit tokens.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd tx sp deposit <span class="token punctuation">[</span>sp-address<span class="token punctuation">]</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="editstorageprovider" tabindex="-1"><a class="header-anchor" href="#editstorageprovider" aria-hidden="true">#</a> EditStorageProvider</h2><p>This command is used to edit the information of the SP, including endpoint, description and .etc.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd tx sp edit-storage-provider <span class="token punctuation">[</span>sp-address<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,37),o=[i];function r(d,l){return a(),e("div",null,o)}const c=s(t,[["render",r],["__file","storage-provider.html.vue"]]);export{c as default};