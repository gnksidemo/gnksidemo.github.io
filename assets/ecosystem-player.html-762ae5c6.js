import{_ as n,W as o,X as s,Y as a,$ as r,a0 as i,Z as e,a1 as l,C as d}from"./framework-a045178c.js";const h={},c=l('<h1 id="ecosystem-players" tabindex="-1"><a class="header-anchor" href="#ecosystem-players" aria-hidden="true">#</a> Ecosystem Players</h1><p>From storage provider and BNB staker to developers, there are a variety of individuals and entities that play a critical role in the growth and success of Greenfield. We&#39;ll dive into the unique contributions and responsibilities of each group, and explore how they work together to shape the future of Greenfield.</p><h3 id="greenfield-validators" tabindex="-1"><a class="header-anchor" href="#greenfield-validators" aria-hidden="true">#</a> Greenfield Validators</h3><p>The Greenfield blockchain operates as a Proof-of-Stake (PoS) blockchain and has its own set of validators that are chosen through an election process based on PoS logic.</p><p>The validators play a crucial role in ensuring the security of the Greenfield blockchain and are actively involved in the governance and staking of the blockchain. They also form a peer-to-peer network that functions similarly to other PoS blockchain networks.</p><p>In addition to their governance responsibilities, validators also accept and process transactions, which enables users to operate on the objects stored on the Greenfield blockchain. They are responsible for maintaining the metadata of Greenfield and ensure that the blockchain state acts as a control panel for both Storage Providers (SPs) and users. Both parties rely on the validators to accurately update and utilize this state in order to operate, store, and access their object storage.</p><h3 id="storage-providers-sps" tabindex="-1"><a class="header-anchor" href="#storage-providers-sps" aria-hidden="true">#</a> Storage Providers (SPs)</h3><p>Storage Providers (SPs) are an essential component of the Greenfield blockchain, providing storage service infrastructures that can be offered by both individuals and organizations. SPs utilize the Greenfield blockchain as the ledger and single source of truth to maintain secure and reliable storage.</p><p>Each SP is responsible for processing user requests to upload and download data, acting as the gatekeeper for user rights and authentications. As a result, they play a critical role in ensuring that user data remains secure and accessible at all times.</p><h3 id="greenfield-dapps" tabindex="-1"><a class="header-anchor" href="#greenfield-dapps" aria-hidden="true">#</a> Greenfield dApps</h3><p>Greenfield dApps are applications that leverage the unique features of the Greenfield blockchain to solve various problems for their users. These dApps are designed to utilize Greenfield storage and related economic traits, providing a reliable and secure platform for creating and managing data.</p><p>Users can interact with the BNB Greenfield Core Infrastructure through the use of BNB Greenfield dApps, which are decentralized applications that enable seamless interaction with the Greenfield ecosystem. Furthermore, the Greenfield blockchain provides an intuitive smart contract library on the cross-chain facility, making it easy for dApp developers to integrate these features into their applications. This user-friendly approach allows developers to efficiently build and deploy dApps that can solve real-world problems.</p><h3 id="greenfield-relayers" tabindex="-1"><a class="header-anchor" href="#greenfield-relayers" aria-hidden="true">#</a> Greenfield Relayers</h3><p>The Greenfield Relayer is a powerful bi-directional relaying service designed to facilitate seamless communication between Greenfield and BSC. It can only be operated by Greenfield validators and functions as a standalone process.</p><p>This innovative system independently monitors and tracks cross-chain events that take place on both the Greenfield and BSC networks, storing this data securely in a database. When an event is confirmed, the relayer generates a BLS signed message that is then shared through the P2P network on the Greenfield network, known as &quot;the vote&quot;.</p><p>As more votes are collected, the Greenfield Relayer assembles the necessary cross-chain package transaction and submits it to either the BSC or Greenfield network. This streamlined process ensures that communication between the two networks is efficient and error-free.</p><h3 id="challenge-verifier" tabindex="-1"><a class="header-anchor" href="#challenge-verifier" aria-hidden="true">#</a> Challenge Verifier</h3><p>Challenge Verifier is an off-chain service that verifies data availability, data integrity and service quality by accessing the storage provider. This mechanism works by penalizing and gradually eliminating storage providers with poor service quality, in order to ensure the good performance and reliability of the entire network.</p><p>To elaborate, Challenge Verifier constantly checks the storage providers in the network by tasking them with challenges to prove their reliability. The challenges may include storing specific pieces of data or responding to requests within a certain time limit. Providers that fail these challenges will be punished by slash their staked BNB.</p><p>By using Challenge Verifier, the network can ensure that only reliable and trustworthy storage providers are allowed to participate, protecting the network from any potential data loss, corruption, or low-quality service. Additionally, Challenge Verifier creates a competitive environment for storage providers, motivating them to continuously improve their services to avoid penalties and stay in the network.</p><p>Challenge Verifier can only be operated by Greenfield validators right now, and will open to public in the future.</p><h2 id="how-to-participate-in-the-ecosystem" tabindex="-1"><a class="header-anchor" href="#how-to-participate-in-the-ecosystem" aria-hidden="true">#</a> How to Participate in the Ecosystem</h2>',22);function p(f,u){const t=d("RouterLink");return o(),s("div",null,[c,a("ul",null,[a("li",null,[r(t,{to:"/docs/greenfield-blockchain/cli/validator-staking.html"},{default:i(()=>[e("Become A Validator")]),_:1}),e(": validators secure the Greenfield by validating and relaying transactions, proposing, verifying and finalizing blocks.")]),a("li",null,[r(t,{to:"/docs/greenfield-blockchain/cli/storage-provider.html"},{default:i(()=>[e("Become A Storage Provider")]),_:1}),e(": SPs store the objects' real data, i.e. the payload data. and get paid by providing storage services.")]),a("li",null,[r(t,{to:"/docs/greenfield-blockchain/cli/storage.html"},{default:i(()=>[e("Store Data")]),_:1}),e(": store and manage your data in a decentralized way, control and own it all by yourself.")])])])}const y=n(h,[["render",p],["__file","ecosystem-player.html.vue"]]);export{y as default};
