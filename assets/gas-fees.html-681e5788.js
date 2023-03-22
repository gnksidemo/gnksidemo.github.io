import{_ as t,W as e,X as d,a1 as a}from"./framework-a045178c.js";const s={},n=a(`<h1 id="gas-and-fees" tabindex="-1"><a class="header-anchor" href="#gas-and-fees" aria-hidden="true">#</a> Gas and Fees</h1><p>This document describes how Greenfield charge fee to different transaction types.</p><h2 id="introduction-to-gas-and-fees" tabindex="-1"><a class="header-anchor" href="#introduction-to-gas-and-fees" aria-hidden="true">#</a> Introduction to <code>Gas</code> and <code>Fees</code></h2><p>In the Cosmos SDK, <code>gas</code> unit is designated to track resource consumption during execution.</p><p>On application-specific blockchains such as Greenfield, computational cost of storage is no longer the main factor in determining transaction fees, but rather, it is the incentive mechanism of Greenfield. For instance, creating and deleting a storage object use similar I/O and computational resources, but Greenfield encourages users to delete unused storage objects to optimize storage space, resulting in lower transaction fees.</p><p><strong>As a result, Greenfield Blockchain has deviated from the gas meter design in Cosmos SDK and re-engineered the gashub module to calculate gas consumption based on the transaction type and content, rather than just storage and computational resource consumption.</strong></p><p>Unlike networks like Ethereum, Greenfield transactions do not feature a gas price field. Instead, they consist of a fee and a gas wanted field. The gas price is inferred during the execution process and competes for entry into the transaction pool based on the gas price.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p><strong>This means that Greenfield does not refund any excess gas fees to the transaction sender. Therefore, when constructing transactions, it is important to exercise caution when specifying the fees.</strong></p></div><h2 id="gashub" tabindex="-1"><a class="header-anchor" href="#gashub" aria-hidden="true">#</a> GasHub</h2><p>All transaction types need to register their gas calculation logic to gashub. Currently, four types of calculation logic are supported:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MsgGasParams_FixedType <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	FixedType <span class="token operator">*</span>MsgGasParams_FixedGasParams 
<span class="token punctuation">}</span>
<span class="token keyword">type</span> MsgGasParams_GrantType <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	GrantType <span class="token operator">*</span>MsgGasParams_DynamicGasParams 
<span class="token punctuation">}</span>
<span class="token keyword">type</span> MsgGasParams_MultiSendType <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	MultiSendType <span class="token operator">*</span>MsgGasParams_DynamicGasParams 
<span class="token punctuation">}</span>
<span class="token keyword">type</span> MsgGasParams_GrantAllowanceType <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	GrantAllowanceType <span class="token operator">*</span>MsgGasParams_DynamicGasParams 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="block-gas-meter" tabindex="-1"><a class="header-anchor" href="#block-gas-meter" aria-hidden="true">#</a> Block Gas Meter</h3><p><code>ctx.BlockGasMeter()</code> serves as the gas meter designed to monitor and restrict gas consumption per block.</p><p>However, certain types of transactions may incur a high cost in Greenfield, leading to significant gas consumption. Consequently, Greenfield refrains from imposing any gas usage constraints on a block. Instead, Greenfield sets a block size limit, preventing blocks from exceeding 1MB in size and mitigating the risk of excessively large blocks.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>There is no gas limitation of a block on Greenfield Blockchain.</p></div><h2 id="fee-table" tabindex="-1"><a class="header-anchor" href="#fee-table" aria-hidden="true">#</a> Fee Table</h2><p>Please note that the following information can be updated at any time and may not be immediately reflected in the documentation.</p><table><thead><tr><th>Msg Type</th><th>Gas Used</th><th>Gas Price</th><th>Expected Fee(assuming BNB $300)</th></tr></thead><tbody><tr><td>authz.MsgExec</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>authz.MsgRevoke</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>bank.MsgSend</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>distribution.MsgSetWithdrawAddress</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>distribution.MsgWithdrawDelegatorReward</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>distribution.MsgWithdrawValidatorCommission</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>feegrant.MsgRevokeAllowance</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>gov.MsgDeposit</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>gov.MsgSubmitProposal</td><td>2.00E+08</td><td>5 gwei</td><td>$300</td></tr><tr><td>gov.MsgVote</td><td>2.00E+07</td><td>5 gwei</td><td>$30</td></tr><tr><td>gov.MsgVoteWeighted</td><td>2.00E+07</td><td>5 gwei</td><td>$30</td></tr><tr><td>oracle.MsgClaim</td><td>1.00E+03</td><td>5 gwei</td><td>$0.0015</td></tr><tr><td>slashing.MsgUnjail</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>staking.MsgBeginRedelegate</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>staking.MsgCancelUnbondingDelegation</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>staking.MsgCreateValidator</td><td>2.00E+08</td><td>5 gwei</td><td>$300</td></tr><tr><td>staking.MsgDelegate</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>staking.MsgEditValidator</td><td>2.00E+07</td><td>5 gwei</td><td>$30</td></tr><tr><td>staking.MsgUndelegate</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>bridge.MsgTransferOut</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>sp.MsgDeposit</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>sp.MsgEditStorageProvider</td><td>2.00E+07</td><td>5 gwei</td><td>$30</td></tr><tr><td>staking.MsgCreateStorageProvider</td><td>2.00E+08</td><td>5 gwei</td><td>$300</td></tr><tr><td>storage.MsgCopyObject</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgDeleteObject</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgCreateBucket</td><td>2.40E+04</td><td>10 gwei</td><td>$0.036</td></tr><tr><td>storage.MsgCreateGroup</td><td>2.40E+04</td><td>10 gwei</td><td>$0.036</td></tr><tr><td>storage.MsgCreateObject</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgDeleteBucket</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgDeleteGroup</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgLeaveGroup</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgRejectSealObject</td><td>1.20E+05</td><td>50 gwei</td><td>$0.18</td></tr><tr><td>storage.MsgSealObject</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgUpdateGroupMember</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgCreatePaymentAccount</td><td>2.00E+06</td><td>5 gwei</td><td>$3</td></tr><tr><td>storage.MsgPutPolicy</td><td>2.40E+04</td><td>10 gwei</td><td>$0.036</td></tr><tr><td>storage.MsgDeletePolicy</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgWithdraw</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>storage.MsgDisableRefund</td><td>1.20E+04</td><td>5 gwei</td><td>$0.018</td></tr><tr><td>authz.MsgGrant</td><td>8e3 + 8e3 per item</td><td>5 gwei</td><td>$0.012 per item</td></tr><tr><td>bank.MsgMultiSend</td><td>8e3 + 8e3 per item</td><td>5 gwei</td><td>$0.012 per item</td></tr><tr><td>feegrant.MsgGrantAllowance</td><td>8e3 + 8e3 per item</td><td>5 gwei</td><td>$0.012 per item</td></tr></tbody></table>`,18),r=[n];function i(o,c){return e(),d("div",null,r)}const l=t(s,[["render",i],["__file","gas-fees.html.vue"]]);export{l as default};