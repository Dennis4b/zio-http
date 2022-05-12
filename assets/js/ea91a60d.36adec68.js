"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[324],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4330:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={},p="Concrete Enity",s={unversionedId:"v1.x/examples/advanced-examples/concrete-entity",id:"v1.x/examples/advanced-examples/concrete-entity",isDocsHomePage:!1,title:"Concrete Enity",description:"",source:"@site/docs/v1.x/examples/advanced-examples/concrete-entity.md",sourceDirName:"v1.x/examples/advanced-examples",slug:"/v1.x/examples/advanced-examples/concrete-entity",permalink:"/zio-http/docs/v1.x/examples/advanced-examples/concrete-entity",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/zio-http/docs/v1.x/examples/advanced-examples/authentication"},next:{title:"Basic Authentication",permalink:"/zio-http/docs/v1.x/examples/advanced-examples/middleware_basic_auth"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concrete-enity"},"Concrete Enity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zhttp.http._\nimport zhttp.service.Server\nimport zio._\n\n/**\n * Example to build app on concrete entity\n */\nobject ConcreteEntity extends App {\n  // Request\n  case class CreateUser(name: String)\n\n  // Response\n  case class UserCreated(id: Long)\n\n  val user: Http[Any, Nothing, CreateUser, UserCreated] =\n    Http.collect[CreateUser] { case CreateUser(_) =>\n      UserCreated(2)\n    }\n\n  val app: HttpApp[Any, Nothing] =\n    user\n      .contramap[Request](req => CreateUser(req.path.toString))   // Http[Any, Nothing, Request, UserCreated]\n      .map(userCreated => Response.text(userCreated.id.toString)) // Http[Any, Nothing, Request, Response]\n\n  // Run it like any simple app\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app).exitCode\n}\n\n")))}d.isMDXComponent=!0}}]);