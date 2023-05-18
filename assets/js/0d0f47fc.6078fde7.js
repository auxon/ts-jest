"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6233],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||s;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),s=n(6010),i=n(2957),l=n(6775),o=n(5238),d=n(3609),p=n(2560);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,d]=k({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),N=(()=>{const e=o??m;return c({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{N&&l(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var N=n(1048);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==l&&(m(t),o(a))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:u},i,{className:(0,s.Z)("tabs__item",g,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(j,(0,a.Z)({},e,t)))}function h(e){const t=(0,N.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},4472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(4137)),s=n(3992),i=n(425);const l={id:"presets",title:"Presets"},o=void 0,d={unversionedId:"getting-started/presets",id:"version-29.0/getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-29.0/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/ts-jest/docs/getting-started/presets",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/presets.md",tags:[],version:"29.0",lastUpdatedBy:"Ahn",lastUpdatedAt:1684420988,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{id:"presets",title:"Presets"},sidebar:"version-29.0-docs",previous:{title:"Installation",permalink:"/ts-jest/docs/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/getting-started/options"}},p={},m=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"the-presets"},"The presets"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Starting from ",(0,r.kt)("strong",{parentName:"p"},"v28.0.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," will gradually opt in adoption of ",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"swc")," more to improve the performance. To make the transition smoothly, we introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy")," presets as a fallback when the new codes don't work yet.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using custom ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," config, please remove ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," from your Jest config to avoid issues that Jest doesn't transform files correctly.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," comes with several presets, covering most of the project's base configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default"),(0,r.kt)("br",null),"or ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-legacy"),(0,r.kt)("br",null),"or ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm-legacy"),(0,r.kt)("br",null)," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm-legacy")," (",(0,r.kt)("strong",{parentName:"td"},"LEGACY"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")))),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"In most cases, simply setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,r.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n\nexport default jestConfig\n"))),(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," presets use ",(0,r.kt)("inlineCode",{parentName:"p"},"testMatch"),", like Jest does in its defaults. If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"testRegex")," instead in your configuration, you MUST set ",(0,r.kt)("inlineCode",{parentName:"p"},"testMatch")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or Jest will bail."),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"),(0,r.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets';\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets';\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets';\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets';\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default jestConfig\n")))))}c.isMDXComponent=!0}}]);