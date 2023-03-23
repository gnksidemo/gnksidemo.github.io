import{_ as n,W as r,X as s,Y as e,Z as a,$ as i,a0 as o,C as l}from"./framework-a045178c.js";const d={},c=e("h1",{id:"data-integrity-and-availability",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-integrity-and-availability","aria-hidden":"true"},"#"),a(" Data Integrity and Availability")],-1),h=e("p",null,"There are three crucial aspects of data management: integrity, availability, and redundancy. Below are some key points to ensure each aspect is met:",-1),u=e("ul",null,[e("li",null,"The primary storage provider must correctly store the object uploaded by the user."),e("li",null,"The assigned data segments in both primary and secondary storage providers must be free of any loss, corruption, or counterfeit data."),e("li",null,"Erasure coding pieces in secondary providers should enable recovery of the original data in the primary storage provider.")],-1),p=e("p",null,"To ensure data integrity and redundancy, checksum and redundancy setups must be established for objects. These setups constitute part of the objects' metadata and must be verified by the storage providers and users upon creating objects. The metadata will be stored on the Greenfield blockchain.",-1),f=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,[a('"Proof-of-Challenge" is proposed based on the assumptions: '),e("strong",null,"Greenfield is a self-sustained, service-oriented ecosystem.")])],-1),g=e("strong",null,"off-chain audit",-1),m=e("p",null,"Data that failed to pass a challenge will not face another challenge for a specific time to allow storage providers to restore the data.",-1);function v(y,b){const t=l("RouterLink");return r(),s("div",null,[c,h,u,p,e("p",null,[a("Collaboration between Greenfield and storage providers is essential in ensuring data integrity and availability, especially for aspect #2. To enhance user confidence that data is being stored as promised, a "),i(t,{to:"/docs/greenfield-blockchain/modules/data-availability-challenge.html"},{default:o(()=>[a('"Proof-of-Challenge"')]),_:1}),a(" approach is introduced.")]),f,e("p",null,[a("Stakeholders can trigger challenges in various ways, such as through user or via random events on the Greenfield blockchain. Following a challenge, "),i(t,{to:"/docs/introduction/ecosystem-player.html#challenge-verifier"},{default:o(()=>[a("Challenge Verifier")]),_:1}),a(" must conduct an "),g,a(" of challenged data from storage providers. Verifier Consortium will vote on the challenge results, and the failed outcomes will reduce the corresponding storage providers' staked BNB. Participants who submitted the challenge and the verifier receive rewards for their involvement in this process.")]),m,e("p",null,[i(t,{to:"/docs/greenfield-blockchain/modules/data-availability-challenge.html"},{default:o(()=>[a("Data challenger module")]),_:1}),a(" will elaborate further on challenges associated with data availability.")])])}const w=n(d,[["render",v],["__file","data-availability.html.vue"]]);export{w as default};