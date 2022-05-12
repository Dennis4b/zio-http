"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[959],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4602:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={},c="HTTP Client",l={unversionedId:"v1.x/examples/zio-http-basic-examples/http_client",id:"v1.x/examples/zio-http-basic-examples/http_client",isDocsHomePage:!1,title:"HTTP Client",description:"",source:"@site/docs/v1.x/examples/zio-http-basic-examples/http_client.md",sourceDirName:"v1.x/examples/zio-http-basic-examples",slug:"/v1.x/examples/zio-http-basic-examples/http_client",permalink:"/zio-http/docs/v1.x/examples/zio-http-basic-examples/http_client",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Work in progress",permalink:"/zio-http/docs/v1.x/integrations/index"},next:{title:"HTTP Server",permalink:"/zio-http/docs/v1.x/examples/zio-http-basic-examples/http_server"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-client"},"HTTP Client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http.Headers\nimport zhttp.service.{ChannelFactory, Client, EventLoopGroup}\nimport zio._\n\nobject SimpleClient extends App {\n  val env     = ChannelFactory.auto ++ EventLoopGroup.auto()\n  val url     = "http://sports.api.decathlon.com/groups/water-aerobics"\n  val headers = Headers.host("sports.api.decathlon.com")\n\n  val program = for {\n    res  <- Client.request(url, headers)\n    data <- res.bodyAsString\n    _    <- console.putStrLn { data }\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    program.exitCode.provideCustomLayer(env)\n\n}\n')))}m.isMDXComponent=!0}}]);