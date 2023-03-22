import{_ as o,W as i,X as r,Y as t,Z as e,$ as s,a1 as a,C as d}from"./framework-a045178c.js";const l={},c=t("h1",{id:"key-management",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#key-management","aria-hidden":"true"},"#"),e(" Key Management")],-1),h={href:"https://eips.ethereum.org/EIPS/eip-712",target:"_blank",rel:"noopener noreferrer"},p={href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26",target:"_blank",rel:"noopener noreferrer"},g=a('<h2 id="eip-712-support" tabindex="-1"><a class="header-anchor" href="#eip-712-support" aria-hidden="true">#</a> EIP-712 Support</h2><p>The greenfield chain supports and only supports EIP-712 structured transaction. These enable the existing wallet infrastructure to interact with Greenfield at the beginning naturally.</p><p>To achieve this, the following changes have been made.</p><ol><li>An Ethereum-compatible RPC backend. Be noted that we only support necessary methods to connect a wallet(<code>eth_chainId</code>, <code>eth_networkId</code>, <code>eth_blockNumber</code>, <code>eth_getBlockByNumber</code> and <code>eth_getBalance</code>). Other RPC methods are not implemented.</li><li>Same signing algorithm(<code>eth_scep256k1</code>) as Ethereum.</li></ol>',4),m={href:"https://github.com/bnb-chain/greenfield-go-sdk",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/bnb-chain/greenfield-js-sdk",target:"_blank",rel:"noopener noreferrer"},f=a('<h2 id="keyring-interface" tabindex="-1"><a class="header-anchor" href="#keyring-interface" aria-hidden="true">#</a> Keyring Interface</h2><p>The <code>Keyring</code> interface is the primary interface for key management in the greenfield-cosmos-sdk. It defines the methods that a type needs to implement to be used as a key storage backend. These methods include:</p><ul><li><code>Get</code>: retrieves a key by name.</li><li><code>List</code>: lists all keys stored in the keyring.</li><li><code>Delete</code>: deletes a key by name.</li><li><code>Sign</code>: signs a message using a key.</li></ul><p>By implementing these methods, you can create a custom key storage backend that meets the specific needs of your application.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>It means you don&#39;t have to follow the <code>Keyring</code> interface to manage your key, any existing Ethereum wallets are applicable to Greenfield as well.</p></div><h2 id="backend-options" tabindex="-1"><a class="header-anchor" href="#backend-options" aria-hidden="true">#</a> Backend Options</h2><p>The greenfield-cosmos-sdk provides several backend options for key storage. Each backend has its own strengths and weaknesses, and the choice of backend will depend on your specific use case. Here are the available options:</p><ol><li><p><strong>os</strong>: The os backend uses the operating system&#39;s default credentials store to handle key storage operations securely. The keyring may be kept unlocked for the whole duration of the user session.</p></li><li><p><strong>file</strong>: This backend more closely resembles the previous keyring storage used prior to cosmos-sdk v0.38.1. It stores the keyring encrypted within the app&#39;s configuration directory. This keyring will request a password each time it is accessed, which may occur multiple times in a single command resulting in repeated password prompts.</p></li><li><p><strong>kwallet</strong>: This backend uses the KDE Wallet Manager as a credentials management application.</p></li><li><p><strong>pass</strong>: This backend uses the <code>pass</code> command line utility to store and retrieve keys.</p></li><li><p><strong>test</strong>: This backend stores keys insecurely to disk. It does not prompt for a password to be unlocked and should only be used for testing purposes.</p></li><li><p><strong>memory</strong>: This backend uses a transient storage. Keys are discarded when the process terminates or the type instance is garbage collected.</p></li></ol><h2 id="supported-sign-algorithms" tabindex="-1"><a class="header-anchor" href="#supported-sign-algorithms" aria-hidden="true">#</a> Supported Sign Algorithms</h2><p>The greenfield-cosmos-sdk supports as many sign algorithms as users want, but in Greenfield context, we only support <code>eth_secp256k1</code> and <code>ed25519</code>. These algorithms were chosen for their security and compatibility with the Ethereum and Tendermint ecosystems.</p>',10);function k(y,b){const n=d("ExternalLinkIcon");return i(),r("div",null,[c,t("p",null,[e("Greenfield blockchain is an application-specific chain without EVM, the transaction data structure and API are different from BSC. Greenfield will not support full functions in existing wallets, e.g. Transfer, Send Transactions, etc. But it will enable the existing wallets to sign transactions with the "),t("a",h,[e("EIP712"),s(n)]),e(" standard. This standard allows wallets to display data in signing prompts in a structured and readable format. This is an "),t("a",p,[e("example"),s(n)]),e(" of how to use it in Metamask. Eventually, wallets will start supporting Greenfield directly.")]),g,t("p",null,[e("For developers, they can refer to "),t("a",m,[e("greenfield-go-sdk"),s(n)]),e(" and "),t("a",u,[e("greenfield-js-sdk"),s(n)]),e(" for easy integration.")]),f])}const w=o(l,[["render",k],["__file","key-management.html.vue"]]);export{w as default};
