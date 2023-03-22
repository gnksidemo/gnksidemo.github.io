import{_ as a,W as d,X as l,Y as t,Z as e,$ as n,a0 as c,a1 as r,C as i}from"./framework-a045178c.js";const h={},p=r('<h1 id="greenfield-blockchain-grpc-rest-and-tendermint-endpoints" tabindex="-1"><a class="header-anchor" href="#greenfield-blockchain-grpc-rest-and-tendermint-endpoints" aria-hidden="true">#</a> Greenfield Blockchain GRPC, REST, and Tendermint Endpoints</h1><p>This document presents an overview of all the endpoints a node exposes: gRPC, REST as well as some other endpoints.</p><h2 id="an-overview-of-all-endpoints" tabindex="-1"><a class="header-anchor" href="#an-overview-of-all-endpoints" aria-hidden="true">#</a> An Overview of All Endpoints</h2><p>Each node exposes the following endpoints for users to interact with a node, each endpoint is served on a different port. Details on how to configure each endpoint is provided in the endpoint&#39;s own section.</p><ul><li>the gRPC server (default port: <code>9090</code>),</li><li>the REST server (default port: <code>1317</code>),</li><li>the Tendermint RPC endpoint (default port: <code>26657</code>).</li></ul>',5),u={class:"hint-container tip"},f=t("p",{class:"hint-container-title"},"Tips",-1),g={href:"https://docs.tendermint.com/master/nodes/metrics.html#metrics",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#configuration",target:"_blank",rel:"noopener noreferrer"},b=t("h2",{id:"grpc-server",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#grpc-server","aria-hidden":"true"},"#"),e(" gRPC Server")],-1),_={href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"},v=r('<p>The <code>grpc.Server</code> is a concrete gRPC server, which spawns and serves all gRPC query requests and a broadcast transaction request. This server can be configured inside <code>~/.gnfd/config/app.toml</code>:</p><ul><li><code>grpc.enable = true|false</code> field defines if the gRPC server should be enabled. Defaults to <code>true</code>.</li><li><code>grpc.address = {string}</code> field defines the address (really, the port, since the host should be kept at <code>0.0.0.0</code>) the server should bind to. Defaults to <code>0.0.0.0:9090</code>.</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p><code>~/.gnfd</code> is the directory where the node&#39;s configuration and databases are stored.</p></div>',3),w=r('<h2 id="rest-server" tabindex="-1"><a class="header-anchor" href="#rest-server" aria-hidden="true">#</a> REST Server</h2><p>Greenfield supports REST routes via gRPC-gateway.</p><p>All routes are configured under the following fields in <code>~/.gnfd/config/app.toml</code>:</p><ul><li><code>api.enable = true|false</code> field defines if the REST server should be enabled. Defaults to <code>false</code>.</li><li><code>api.address = {string}</code> field defines the address (really, the port, since the host should be kept at <code>0.0.0.0</code>) the server should bind to. Defaults to <code>tcp://0.0.0.0:1317</code>.</li><li>some additional API configuration options are defined in <code>~/.gnfd/config/app.toml</code>, along with comments, please refer to that file directly.</li></ul><h3 id="swagger" tabindex="-1"><a class="header-anchor" href="#swagger" aria-hidden="true">#</a> Swagger</h3>',5),P={href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"/swagger",-1),T=t("p",null,[e("Enabling the "),t("code",null,"/swagger"),e(" endpoint is configurable inside "),t("code",null,"~/.gnfd/config/app.toml"),e(" via the "),t("code",null,"api.swagger"),e(" field, which is set to true by default.")],-1),R=t("h2",{id:"tendermint-rpc",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tendermint-rpc","aria-hidden":"true"},"#"),e(" Tendermint RPC")],-1),C=t("code",null,"rpc",-1),x=t("code",null,"~/.gnfd/config/config.toml",-1),S=t("code",null,"tcp://0.0.0.0:26657",-1),k={href:"https://docs.tendermint.com/master/rpc/",target:"_blank",rel:"noopener noreferrer"},E=r('<p>Some Tendermint RPC endpoints are directly related to the Cosmos SDK:</p><ul><li><code>/abci_query</code>: this endpoint will query the application for state. As the <code>path</code> parameter, you can send the following strings: <ul><li>any Protobuf fully-qualified service method, such as <code>/cosmos.bank.v1beta1.QueryAllBalances</code>. The <code>data</code> field should then include the method&#39;s request parameter(s) encoded as bytes using Protobuf.</li><li><code>/app/simulate</code>: this will simulate a transaction, and return some information such as gas used.</li><li><code>/app/version</code>: this will return the application&#39;s version.</li><li><code>/store/{path}</code>: this will query the store directly.</li><li><code>/p2p/filter/addr/{port}</code>: this will return a filtered list of the node&#39;s P2P peers by address port.</li><li><code>/p2p/filter/id/{id}</code>: this will return a filtered list of the node&#39;s P2P peers by ID.</li></ul></li><li><code>/broadcast_tx_{aync,async,commit}</code>: these 3 endpoint will broadcast a transaction to other peers. CLI, gRPC and REST expose a way to broadcast transactions, but they all use these 3 Tendermint RPCs under the hood.</li></ul><h2 id="comparison-table" tabindex="-1"><a class="header-anchor" href="#comparison-table" aria-hidden="true">#</a> Comparison Table</h2><table><thead><tr><th>Name</th><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody><tr><td>gRPC</td><td>- can use code-generated stubs in various languages<br>- supports streaming and bidirectional communication (HTTP2)<br>- small wire binary sizes, faster transmission</td><td>- based on HTTP2, not available in browsers<br>- learning curve (mostly due to Protobuf)</td></tr><tr><td>REST</td><td>- ubiquitous<br>- client libraries in all languages, faster implementation<br></td><td>- only supports unary request-response communication (HTTP1.1)<br>- bigger over-the-wire message sizes (JSON)</td></tr><tr><td>Tendermint RPC</td><td>- easy to use</td><td>- bigger over-the-wire message sizes (JSON)</td></tr></tbody></table>',4);function A(I,q){const o=i("ExternalLinkIcon"),s=i("RouterLink");return d(),l("div",null,[p,t("div",u,[f,t("p",null,[e("The node also exposes some other endpoints, such as the Tendermint P2P endpoint, or the "),t("a",g,[e("Prometheus endpoint"),n(o)]),e(", which are not directly related to the Cosmos SDK. Please refer to the "),t("a",m,[e("Tendermint documentation"),n(o)]),e(" for more information about these endpoints.")])]),b,t("p",null,[e("In the Greenfield, Protobuf is the main encoding library. This brings a wide range of Protobuf-based tools that can be plugged. One such tool is "),t("a",_,[e("gRPC"),n(o)]),e(", a modern open-source high performance RPC framework that has decent client support in several languages.")]),v,t("p",null,[e("Once the gRPC server is started, you can send requests to it using a gRPC client. Some examples are given in our "),n(s,{to:"/docs/greenfield-blockchain/run-node/interact-node.html#using-grpc"},{default:c(()=>[e("Interact with the Node")]),_:1}),e(" tutorial.")]),w,t("p",null,[e("A "),t("a",P,[e("Swagger"),n(o)]),e(" (or OpenAPIv2) specification file is exposed under the "),y,e(" route on the API server. Swagger is an open specification describing the API endpoints a server serves, including description, input arguments, return types and much more about each endpoint.")]),T,R,t("p",null,[e("Independently of the Cosmos SDK, Tendermint also exposes an RPC server. This RPC server can be configured by tuning parameters under the "),C,e(" table in the "),x,e(", the default listening address is "),S,e(". An OpenAPI specification of all Tendermint RPC endpoints is available "),t("a",k,[e("here"),n(o)]),e(".")]),E])}const N=a(h,[["render",A],["__file","grpc_rest.html.vue"]]);export{N as default};