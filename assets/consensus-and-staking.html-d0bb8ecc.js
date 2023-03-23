import{_ as i,W as r,X as o,Y as e,Z as a,$ as n,a1 as s,C as d}from"./framework-a045178c.js";const l={},h=s('<h1 id="consensus-and-staking" tabindex="-1"><a class="header-anchor" href="#consensus-and-staking" aria-hidden="true">#</a> Consensus and Staking</h1><p>The BNB Greenfield blockchain places a strong emphasis on network security, which is achieved through a Proof-of-Stake (PoS) consensus mechanism based on Tendermint. Validators play a crucial role in this process, with a new block being created every 2 seconds by a group of elected validators. Notably, BNB serves as the staking token on this blockchain.</p><p>Upon genesis state, a set of validators will be established, with their staked BNB locked in the Binance Smart Chain (BSC) side. Other validators can apply to become part of the network by submitting a create-validator proposal. Should a validator fail to uphold their responsibilities, they can be impeached. If the impeach-validator proposal is approved, the validator is removed and jailed permanently.</p><p>It is important to note that validators are distinct from storage providers within the Greenfield ecosystem. While validators are responsible for generating blocks, ensuring data availability, and managing cross-chain communication, storage providers focus on storing data objects. Though their roles are closely related, there is no stringent binding relationship between the two.</p><p>Overall, the Greenfield blockchain&#39;s PoS consensus mechanism, Validator set, and impeachment process serve to maintain network security and ensure the integrity of the ecosystem. The separation of duties between validators and storage providers enables a more efficient and streamlined network architecture.</p><h2 id="create-validator" tabindex="-1"><a class="header-anchor" href="#create-validator" aria-hidden="true">#</a> Create Validator</h2><p>To become a validator, a create-validator proposal should be submitted and adopted by the majority of the current validators. Meanwhile, in the early stage, only self delegation is allowed, and in the further open delegation can be supported. Here are the steps for becoming a new validator:</p><ul><li><p>Self delegator of the new validator grants the delegate authorization to the gov module account.</p></li><li><p>The new validator should initiate a create-validator proposal.</p></li><li><p>Wait for the current validators to vote on this proposal.</p></li><li><p>Once the proposal is passed, the new validator would be created automatically.</p></li></ul><h2 id="edit-validator" tabindex="-1"><a class="header-anchor" href="#edit-validator" aria-hidden="true">#</a> Edit Validator</h2><p>There are several fields that validators can edit after they have been created. Including description, commission rate, min-self-delegation, relayer address, and relayer bls public key. All these fields can be edited by submitting an edit-validator transaction.</p><h2 id="impeach-validator" tabindex="-1"><a class="header-anchor" href="#impeach-validator" aria-hidden="true">#</a> Impeach Validator</h2><p>If a validator behaves badly, anyone can submit a proposal to impeach the validator, and if the proposal is passed, the validator would be jailed forever. Here are the steps for impeaching a validator:</p><ul><li><p>Initiate an impeach-validator proposal.</p></li><li><p>Wait for the current validators to vote on this proposal.</p></li><li><p>Once the proposal is passed, the validator would be jailed forever automatically, that means it can’t become an active validator anymore.</p></li></ul><h2 id="staking-reward-distribution" tabindex="-1"><a class="header-anchor" href="#staking-reward-distribution" aria-hidden="true">#</a> Staking Reward Distribution</h2><p>In the BNB Greenfield blockchain, validators receive rewards from transaction fees. To ensure fairness, the fee distribution module allocates these rewards to the validators&#39; delegators in a proportional and transparent manner.</p><p>Rewards are calculated over specific periods, which are updated every time there is a change in a validator&#39;s delegation, such as when a new delegation is received. To determine the rewards for a validator during a particular period, their total rewards from the previous period are subtracted from the current total rewards.</p><p>When a validator is removed or requests a withdrawal, their commission is paid based on the accumulated fee amounts calculated and updated with each <code>BeginBlock</code> operation.</p><p>Delegators receive their rewards either when they change or remove their delegation, or when they request a withdrawal. Before distributing the rewards, any penalties imposed on the validator for that delegation period are taken into account.</p>',18),c={href:"https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/spec/fee_distribution/f1_fee_distr.pdf",target:"_blank",rel:"noopener noreferrer"};function p(u,v){const t=d("ExternalLinkIcon");return r(),o("div",null,[h,e("p",null,[a("The detailed fee distribution rules is "),e("a",c,[a("described here"),n(t)])])])}const f=i(l,[["render",p],["__file","consensus-and-staking.html.vue"]]);export{f as default};
