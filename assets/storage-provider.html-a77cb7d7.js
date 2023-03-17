import{_ as s,W as a,X as n,a1 as e}from"./framework-a045178c.js";const t={},i=e(`<h1 id="storage-provider" tabindex="-1"><a class="header-anchor" href="#storage-provider" aria-hidden="true">#</a> Storage Provider</h1><h2 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> QuickStart</h2><p>Start a local chain with 1 validator and 1 Storage provider</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> ./deployment/localup/localup.sh all <span class="token number">1</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Export the accounts private key of sp</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> ./deployment/localup/localup.sh export_sp_privkey <span class="token number">1</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="create-storage-provider" tabindex="-1"><a class="header-anchor" href="#create-storage-provider" aria-hidden="true">#</a> Create Storage Provider</h2><h3 id="prepare-4-account-addresses-in-advance" tabindex="-1"><a class="header-anchor" href="#prepare-4-account-addresses-in-advance" aria-hidden="true">#</a> Prepare 4 account addresses in advance</h3><p>Each storage provide will hold 4 account which for different uses.</p><ul><li>OperatorAddress: For edit the information of the StorageProvider</li><li>FundingAddress: For deposit staking tokens and receive earnings</li><li>SealAddress: For seal user&#39;s object</li><li>ApprovalAddress: For approve user&#39;s requests.</li></ul><h3 id="authorize-the-gov-module-account-to-debit-tokens-from-the-funding-account-of-sp" tabindex="-1"><a class="header-anchor" href="#authorize-the-gov-module-account-to-debit-tokens-from-the-funding-account-of-sp" aria-hidden="true">#</a> Authorize the Gov Module Account to debit tokens from the Funding account of SP</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Gov module account is 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 by default</span>
./build/bin/gnfd tx sp grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 --spend-limit 1000000bnb <span class="token parameter variable">--SPAddress</span> 0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC <span class="token parameter variable">--from</span> sp0_fund <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>submit-proposal</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd tx gov submit-proposal ./deployment/localup/create_sp.json <span class="token parameter variable">--from</span> sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0  <span class="token parameter variable">--node</span> http://localhost:26750

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>deposit tokens to the proposal</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd tx gov deposit <span class="token number">1</span> 10000bnb <span class="token parameter variable">--from</span> sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0  <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>voted by validator</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd tx gov deposit <span class="token number">1</span> 10000bnb <span class="token parameter variable">--from</span> sp0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--home</span> ./deployment/localup/.local/sp0  <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>wait a VOTE_PERIOD(300s), and the check the status of sp</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./build/bin/gnfd query sp storage-providers <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="deposit" tabindex="-1"><a class="header-anchor" href="#deposit" aria-hidden="true">#</a> Deposit</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd tx sp deposit <span class="token punctuation">[</span>sp-address<span class="token punctuation">]</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="editstorageprovider" tabindex="-1"><a class="header-anchor" href="#editstorageprovider" aria-hidden="true">#</a> EditStorageProvider</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd tx sp edit-storage-provider <span class="token punctuation">[</span>sp-address<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),l=[i];function o(p,r){return a(),n("div",null,l)}const c=s(t,[["render",o],["__file","storage-provider.html.vue"]]);export{c as default};
