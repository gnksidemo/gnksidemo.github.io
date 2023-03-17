import{_ as a,W as e,X as s,a1 as n}from"./framework-a045178c.js";const r={},d=n(`<h1 id="cross-chain-transfer" tabindex="-1"><a class="header-anchor" href="#cross-chain-transfer" aria-hidden="true">#</a> Cross Chain Transfer</h1><h2 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> Abstract</h2><p>The bridge module is responsible for handling the BNB transfers between greenfield and BSC.</p><p>Users can transfer BNB to BSC via gnfd command, and query the relayer fee for the cross-chain transfers.</p><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## Start a local cluster
$ bash ./deployment/localup/localup.sh all 3
$ alias gnfd=&quot;./build/bin/gnfd&quot;
$ receiver=0x32Ff14Fa1547314b95991976DB432F9Aa648A423
## send 500BNB to the receiver (note the decimal of BNB is 18)
$ gnfd tx bridge transfer-out validator0 $receiver 500000000000000000000BNB --home ./deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -b block  -y
## query the relayer fees for crosschain transfers
$ gnfd q bridge params --node tcp://127.0.0.1:26750 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detailed-cli" tabindex="-1"><a class="header-anchor" href="#detailed-cli" aria-hidden="true">#</a> Detailed CLI</h2><p>A user can query and interact with the <code>bridge</code> module using the CLI.</p><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h3><p>The <code>query</code> commands allow users to query the params of the <code>bridge</code> module.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd query bridge <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h4><p>The <code>params</code> command allows users to query the params of the <code>bridge</code> module.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd query bridge params <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd query bridge params <span class="token parameter variable">--node</span> http://localhost:26750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">params</span><span class="token punctuation">:</span>
  <span class="token key atrule">transfer_out_ack_relayer_fee</span><span class="token punctuation">:</span> <span class="token string">&quot;0&quot;</span>
  <span class="token key atrule">transfer_out_relayer_fee</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transactions" tabindex="-1"><a class="header-anchor" href="#transactions" aria-hidden="true">#</a> Transactions</h3><p>The <code>tx</code> commands allow users to interact with the <code>bridge</code> module.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd tx bridge <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="transfer-out" tabindex="-1"><a class="header-anchor" href="#transfer-out" aria-hidden="true">#</a> transfer-out</h4><p>The <code>transfer-out</code> command allows users to send funds between accounts from greenfield to BSC.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd tx bridge transfer-out <span class="token punctuation">[</span>from_key_or_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>to_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>amount<span class="token punctuation">]</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gnfd tx bridge transfer-out validator0 0x32Ff14Fa1547314b95991976DB432F9Aa648A423 500000000000000000000BNB <span class="token parameter variable">--home</span> ./deployment/localup/.local/validator0 --keyring-backend <span class="token builtin class-name">test</span> <span class="token parameter variable">--node</span> http://localhost:26750 <span class="token parameter variable">-b</span> block  <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),t=[d];function i(l,c){return e(),s("div",null,t)}const u=a(r,[["render",i],["__file","bridge.html.vue"]]);export{u as default};