import{_ as s,W as n,X as a,a1 as e}from"./framework-a045178c.js";const t={},i=e(`<h1 id="on-chain-governance" tabindex="-1"><a class="header-anchor" href="#on-chain-governance" aria-hidden="true">#</a> On-chain Governance</h1><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><p>Start a local cluster:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## Start a local cluster</span>
$ <span class="token function">bash</span> ./deployment/localup/localup.sh all <span class="token number">3</span>
$ <span class="token builtin class-name">alias</span> <span class="token assign-left variable">gnfd</span><span class="token operator">=</span><span class="token string">&quot;./build/bin/gnfd&quot;</span>

<span class="token comment">## Create a proposal</span>
$ gnfd tx gov submit-proposal  /path/to/your_file.json  <span class="token parameter variable">--from</span> 0x7224A7Ad3c484814165baf1d51D1356B014a659B  <span class="token parameter variable">--home</span> ./deployment/localup/.local/validator0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--node</span> http://localhost:26750 <span class="token parameter variable">-b</span> block

<span class="token comment">## Make a deposit </span>
$ gnfd tx gov deposit <span class="token number">1</span> 1000000000000000000BNB  <span class="token parameter variable">--from</span> 0x7224A7Ad3c484814165baf1d51D1356B014a659B  <span class="token parameter variable">--home</span> ./deployment/localup/.local/validator0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--node</span> http://localhost:26750 <span class="token parameter variable">-b</span> block

<span class="token comment">## Vote the proposal from validator1</span>
gnfd tx gov vote <span class="token number">1</span>  <span class="token function">yes</span> <span class="token parameter variable">--from</span> 0x029dF90943a668560529666FEC22e28E40e83c4c  <span class="token parameter variable">--home</span> ./deployment/localup/.local/validator1 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--node</span> http://localhost:26750 <span class="token parameter variable">-b</span> block

<span class="token comment">## Query the proposal details</span>
gnfd query gov proposal <span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h2><p>The CLI <code>query</code> commands allow users to query <code>gov</code> state.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="deposit" tabindex="-1"><a class="header-anchor" href="#deposit" aria-hidden="true">#</a> deposit</h3><p>The <code>deposit</code> command allows users to query a deposit for a given proposal from a given depositor.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$  gnfd query gov deposit <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>depositer-addr<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov deposit <span class="token number">4</span> 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>amount:
- amount: <span class="token string">&quot;200&quot;</span>
  denom: BNB
depositor: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78
proposal_id: <span class="token string">&quot;4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deposits" tabindex="-1"><a class="header-anchor" href="#deposits" aria-hidden="true">#</a> deposits</h3><p>The <code>deposits</code> command allows users to query all deposits for a given proposal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov deposits <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov deposits <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>deposits:
- amount:
  - amount: <span class="token string">&quot;200&quot;</span>
    denom: BNB
  depositor: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78
  proposal_id: <span class="token string">&quot;4&quot;</span>
pagination:
  next_key: null
  total: <span class="token string">&quot;0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="param" tabindex="-1"><a class="header-anchor" href="#param" aria-hidden="true">#</a> param</h3><p>The <code>param</code> command allows users to query a given parameter for the <code>gov</code> module.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov param <span class="token punctuation">[</span>param-type<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov param deposit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>max_deposit_period: <span class="token string">&quot;300000000000&quot;</span>
min_deposit:
- amount: <span class="token string">&quot;1000000000000000000&quot;</span>
  denom: BNB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3><p>The <code>params</code> command allows users to query all parameters for the <code>gov</code> module.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov params <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov params
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>deposit_params:
  max_deposit_period: <span class="token string">&quot;300000000000&quot;</span>
  min_deposit:
  - amount: <span class="token string">&quot;1000000000000000000&quot;</span>
    denom: BNB
tally_params:
  quorum: <span class="token string">&quot;0.334000000000000000&quot;</span>
  threshold: <span class="token string">&quot;0.500000000000000000&quot;</span>
  veto_threshold: <span class="token string">&quot;0.334000000000000000&quot;</span>
voting_params:
  voting_period: <span class="token string">&quot;300000000000&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proposal" tabindex="-1"><a class="header-anchor" href="#proposal" aria-hidden="true">#</a> proposal</h3><p>The <code>proposal</code> command allows users to query a given proposal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov proposal <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov proposal <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>deposit_end_time: <span class="token string">&quot;2023-02-21T11:30:01.519490Z&quot;</span>
final_tally_result:
  abstain_count: <span class="token string">&quot;0&quot;</span>
  no_count: <span class="token string">&quot;0&quot;</span>
  no_with_veto_count: <span class="token string">&quot;0&quot;</span>
  yes_count: <span class="token string">&quot;10000000000000000000000000&quot;</span>
id: <span class="token string">&quot;6&quot;</span>
messages:
- <span class="token string">&#39;@type&#39;</span><span class="token builtin class-name">:</span> /cosmos.gov.v1.MsgExecLegacyContent
  authority: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2
  content:
    <span class="token string">&#39;@type&#39;</span><span class="token builtin class-name">:</span> /cosmos.params.v1beta1.ParameterChangeProposal
    changes:
    - key: RelayerTimeout
      subspace: oracle
      value: <span class="token string">&#39;&quot;100&quot;&#39;</span>
    description: change
    title: <span class="token builtin class-name">test</span> change params
metadata: <span class="token string">&quot;&quot;</span>
status: PROPOSAL_STATUS_PASSED
submit_time: <span class="token string">&quot;2023-02-21T11:25:01.519490Z&quot;</span>
total_deposit:
- amount: <span class="token string">&quot;1000000000000000200&quot;</span>
  denom: BNB
voting_end_time: <span class="token string">&quot;2023-02-21T11:30:36.733936Z&quot;</span>
voting_start_time: <span class="token string">&quot;2023-02-21T11:25:36.733936Z&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proposals" tabindex="-1"><a class="header-anchor" href="#proposals" aria-hidden="true">#</a> proposals</h3><p>The <code>proposals</code> command allows users to query all proposals with optional filters.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov proposals <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov proposals
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pagination:
  next_key: null
  total: <span class="token string">&quot;0&quot;</span>
proposals:
- deposit_end_time: <span class="token string">&quot;2023-02-21T10:43:28.710910Z&quot;</span>
  final_tally_result:
    abstain_count: <span class="token string">&quot;0&quot;</span>
    no_count: <span class="token string">&quot;0&quot;</span>
    no_with_veto_count: <span class="token string">&quot;0&quot;</span>
    yes_count: <span class="token string">&quot;10000000000000000000000000&quot;</span>
  id: <span class="token string">&quot;1&quot;</span>
  messages:
  - <span class="token string">&#39;@type&#39;</span><span class="token builtin class-name">:</span> /bnbchain.greenfield.sp.MsgCreateStorageProvider
    approval_address: 0x7aFEf7876FE8bf0b805d8dF9d6bE0dD1CD798E29
    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2
    deposit:
      amount: <span class="token string">&quot;10000000000000000000000&quot;</span>
      denom: BNB
    description:
      details: <span class="token string">&quot;&quot;</span>
      identity: <span class="token string">&quot;&quot;</span>
      moniker: sp0
      security_contact: <span class="token string">&quot;&quot;</span>
      website: <span class="token string">&quot;&quot;</span>
    endpoint: sp0.greenfield.io
    funding_address: 0x0ffF366CccF2FD21445ACe1f19d316951F4144CC
    seal_address: 0x7Bc6Eb822b7B8419037cce5F4Cb50209Dfc7CDbD
    sp_address: 0xba73b99Bfba6B3df6398c7c4C2c916A28c26d100
  metadata: <span class="token assign-left variable">4pIMOgIGx1vZGU</span><span class="token operator">=</span>
  status: PROPOSAL_STATUS_PASSED
  submit_time: <span class="token string">&quot;2023-02-21T10:38:28.710910Z&quot;</span>
  total_deposit:
  - amount: <span class="token string">&quot;2000000000000000000&quot;</span>
    denom: BNB
  voting_end_time: <span class="token string">&quot;2023-02-21T10:43:28.710910Z&quot;</span>
  voting_start_time: <span class="token string">&quot;2023-02-21T10:38:28.710910Z&quot;</span>
- deposit_end_time: <span class="token string">&quot;2023-02-21T10:43:58.917763Z&quot;</span>
  final_tally_result:
    abstain_count: <span class="token string">&quot;0&quot;</span>
    no_count: <span class="token string">&quot;0&quot;</span>
    no_with_veto_count: <span class="token string">&quot;0&quot;</span>
    yes_count: <span class="token string">&quot;10000000000000000000000000&quot;</span>
  id: <span class="token string">&quot;2&quot;</span>
  messages:
  - <span class="token string">&#39;@type&#39;</span><span class="token builtin class-name">:</span> /bnbchain.greenfield.sp.MsgCreateStorageProvider
    approval_address: 0x3CE5E18B05Fd349801DBa9e98E0aB694E2B8C985
    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2
    deposit:
      amount: <span class="token string">&quot;10000000000000000000000&quot;</span>
      denom: BNB
    description:
      details: <span class="token string">&quot;&quot;</span>
      identity: <span class="token string">&quot;&quot;</span>
      moniker: sp1
      security_contact: <span class="token string">&quot;&quot;</span>
      website: <span class="token string">&quot;&quot;</span>
    endpoint: sp1.greenfield.io
    funding_address: 0xa2D705f57D4c50F5c7694590187A62171a149836
    seal_address: 0x53ADC854036F14E0bb989F4Ba3104d66A95FB7C4
    sp_address: 0x93B6cFf6EdB72Fd15ff32DAbC6cd6F9b17C51bd8
  metadata: <span class="token assign-left variable">4pIMOgIGx1vZGU</span><span class="token operator">=</span>
  status: PROPOSAL_STATUS_PASSED
  submit_time: <span class="token string">&quot;2023-02-21T10:38:58.917763Z&quot;</span>
  total_deposit:
  - amount: <span class="token string">&quot;2000000000000000000&quot;</span>
    denom: BNB
  voting_end_time: <span class="token string">&quot;2023-02-21T10:43:58.917763Z&quot;</span>
  voting_start_time: <span class="token string">&quot;2023-02-21T10:38:58.917763Z&quot;</span>
- deposit_end_time: <span class="token string">&quot;2023-02-21T10:44:29.103061Z&quot;</span>
  final_tally_result:
    abstain_count: <span class="token string">&quot;0&quot;</span>
    no_count: <span class="token string">&quot;0&quot;</span>
    no_with_veto_count: <span class="token string">&quot;0&quot;</span>
    yes_count: <span class="token string">&quot;10000000000000000000000000&quot;</span>
  id: <span class="token string">&quot;3&quot;</span>
  messages:
  - <span class="token string">&#39;@type&#39;</span><span class="token builtin class-name">:</span> /bnbchain.greenfield.sp.MsgCreateStorageProvider
    approval_address: 0x8AFa83E423fb3C0D1ED30761730b742963897C8c
    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2
    deposit:
      amount: <span class="token string">&quot;10000000000000000000000&quot;</span>
      denom: BNB
    description:
      details: <span class="token string">&quot;&quot;</span>
      identity: <span class="token string">&quot;&quot;</span>
      moniker: sp2
      security_contact: <span class="token string">&quot;&quot;</span>
      website: <span class="token string">&quot;&quot;</span>
    endpoint: sp2.greenfield.io
    funding_address: 0xf54B0622BbA7eE596E688A0a993267583078327f
    seal_address: 0xb6eCa481Cb3C1861aD9f4D65F5a014aAcD0ebbc5
    sp_address: 0xc52E29c12a16f9CC37Ef1728C05b0129187564d2
  metadata: <span class="token assign-left variable">4pIMOgIGx1vZGU</span><span class="token operator">=</span>
  status: PROPOSAL_STATUS_PASSED
  submit_time: <span class="token string">&quot;2023-02-21T10:39:29.103061Z&quot;</span>
  total_deposit:
  - amount: <span class="token string">&quot;2000000000000000000&quot;</span>
    denom: BNB
  voting_end_time: <span class="token string">&quot;2023-02-21T10:44:29.103061Z&quot;</span>
  voting_start_time: <span class="token string">&quot;2023-02-21T10:39:29.103061Z&quot;</span>
- deposit_end_time: <span class="token string">&quot;2023-02-21T11:30:01.519490Z&quot;</span>
  final_tally_result:
    abstain_count: <span class="token string">&quot;0&quot;</span>
    no_count: <span class="token string">&quot;0&quot;</span>
    no_with_veto_count: <span class="token string">&quot;0&quot;</span>
    yes_count: <span class="token string">&quot;10000000000000000000000000&quot;</span>
  id: <span class="token string">&quot;6&quot;</span>
  messages:
  - <span class="token string">&#39;@type&#39;</span><span class="token builtin class-name">:</span> /cosmos.gov.v1.MsgExecLegacyContent
    authority: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2
    content:
      <span class="token string">&#39;@type&#39;</span><span class="token builtin class-name">:</span> /cosmos.params.v1beta1.ParameterChangeProposal
      changes:
      - key: RelayerTimeout
        subspace: oracle
        value: <span class="token string">&#39;&quot;100&quot;&#39;</span>
      description: change
      title: <span class="token builtin class-name">test</span> change params
  metadata: <span class="token string">&quot;&quot;</span>
  status: PROPOSAL_STATUS_PASSED
  submit_time: <span class="token string">&quot;2023-02-21T11:25:01.519490Z&quot;</span>
  total_deposit:
  - amount: <span class="token string">&quot;1000000000000000200&quot;</span>
    denom: BNB
  voting_end_time: <span class="token string">&quot;2023-02-21T11:30:36.733936Z&quot;</span>
  voting_start_time: <span class="token string">&quot;2023-02-21T11:25:36.733936Z&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proposer" tabindex="-1"><a class="header-anchor" href="#proposer" aria-hidden="true">#</a> proposer</h3><p>The <code>proposer</code> command allows users to query the proposer for a given proposal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov proposer <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov proposer <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proposal_id: <span class="token string">&quot;6&quot;</span>
proposer: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tally" tabindex="-1"><a class="header-anchor" href="#tally" aria-hidden="true">#</a> tally</h5><p>The <code>tally</code> command allows users to query the tally of a given proposal vote.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov tally <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov tally <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abstain_count: <span class="token string">&quot;0&quot;</span>
no_count: <span class="token string">&quot;0&quot;</span>
no_with_veto_count: <span class="token string">&quot;0&quot;</span>
yes_count: <span class="token string">&quot;10000000000000000000000000&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vote" tabindex="-1"><a class="header-anchor" href="#vote" aria-hidden="true">#</a> vote</h3><p>The <code>vote</code> command allows users to query a vote for a given proposal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov vote <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>voter-addr<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov vote <span class="token number">7</span> 0x8313D43DdA0958e11Fb8840DC75540d0755859F3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>metadata: <span class="token string">&quot;&quot;</span>
options:
- option: VOTE_OPTION_YES
  weight: <span class="token string">&quot;1.000000000000000000&quot;</span>
proposal_id: <span class="token string">&quot;7&quot;</span>
voter: 0x8313D43DdA0958e11Fb8840DC75540d0755859F3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="votes" tabindex="-1"><a class="header-anchor" href="#votes" aria-hidden="true">#</a> votes</h3><p>The <code>votes</code> command allows users to query all votes for a given proposal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov votes <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd query gov votes <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pagination:
  next_key: null
  total: <span class="token string">&quot;0&quot;</span>
votes:
- metadata: <span class="token string">&quot;&quot;</span>
  options:
  - option: VOTE_OPTION_YES
    weight: <span class="token string">&quot;1.000000000000000000&quot;</span>
  proposal_id: <span class="token string">&quot;7&quot;</span>
  voter: 0x8313D43DdA0958e11Fb8840DC75540d0755859F3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transactions" tabindex="-1"><a class="header-anchor" href="#transactions" aria-hidden="true">#</a> Transactions</h2><p>The <code>tx</code> commands allow users to interact with the <code>gov</code> module.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd tx gov <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="deposit-1" tabindex="-1"><a class="header-anchor" href="#deposit-1" aria-hidden="true">#</a> deposit</h3><p>The <code>deposit</code> command allows users to deposit tokens for a given proposal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd tx gov deposit <span class="token punctuation">[</span>proposal-id<span class="token punctuation">]</span> <span class="token punctuation">[</span>deposit<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd tx gov deposit <span class="token number">1</span> 1000000000000000000BNB <span class="token parameter variable">--from</span> 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="draft-proposal" tabindex="-1"><a class="header-anchor" href="#draft-proposal" aria-hidden="true">#</a> draft-proposal</h3><p>The <code>draft-proposal</code> creates a draft for any type of proposal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd tx gov draft-proposal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="submit-proposal" tabindex="-1"><a class="header-anchor" href="#submit-proposal" aria-hidden="true">#</a> submit-proposal</h3><p>The <code>submit-proposal</code> submits a governance proposal along with messages and metadata defined in json file</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd tx gov submit-proposal <span class="token punctuation">[</span>path-to-proposal-json<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><h4 id="greenfield-module-parameter-change-proposal" tabindex="-1"><a class="header-anchor" href="#greenfield-module-parameter-change-proposal" aria-hidden="true">#</a> Greenfield module parameter change proposal</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gnfd tx gov submit-proposal /path/to/proposal.json <span class="token parameter variable">--from</span> 0x2737dca53A25120358f4811c762f71712eF23aFE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cosmos.gov.v1.MsgExecLegacyContent&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cosmos.params.v1beta1.ParameterChangeProposal&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Oracle params change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;changes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;subspace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;oracle&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RelayerTimeout&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;100\\&quot;&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4pIMOgIGx1vZGU=&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;deposit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000000000000000000BNB&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bsc-smart-contract-parameter-change-proposal" tabindex="-1"><a class="header-anchor" href="#bsc-smart-contract-parameter-change-proposal" aria-hidden="true">#</a> BSC smart contract parameter change proposal</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cosmos.gov.v1.MsgExecLegacyContent&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cosmos.params.v1beta1.ParameterChangeProposal&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BSC smart contract parameter change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;change contract parameter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;changes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;subspace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BSC&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;batchSizeForOracle&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000000000000000000000000000000000000000000000000000000000000033&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cross_chain&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;addresses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0x6c615C766EE6b7e69275b0D070eF50acc93ab880&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4pIMOgIGx1vZGU=&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;deposit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000000000000000000BNB&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bsc-smart-contract-upgrade-proposal" tabindex="-1"><a class="header-anchor" href="#bsc-smart-contract-upgrade-proposal" aria-hidden="true">#</a> BSC smart contract upgrade proposal</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cosmos.gov.v1.MsgExecLegacyContent&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/cosmos.params.v1beta1.ParameterChangeProposal&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;upgrade GovHub and CrossChain&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;upgrade GovHub and CrossChain&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;changes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;subspace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BSC&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;subspace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BSC&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x9d4454B023096f34B160D6B654540c56A1F81688&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cross_chain&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;addresses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;0x6c615C766EE6b7e69275b0D070eF50acc93ab880&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;0x04ED4ad3cDe36FE8ba944E3D6CFC54f7Fe6c3C72&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4pIMOgIGx1vZGU=&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;deposit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000000000000000000BNB&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,99),o=[i];function l(p,d){return n(),a("div",null,o)}const c=s(t,[["render",l],["__file","governance.html.vue"]]);export{c as default};
