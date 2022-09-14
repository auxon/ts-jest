"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1367],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(4137));const o={id:"version-checking",title:"Version checking"},s=void 0,a={unversionedId:"getting-started/version-checking",id:"version-26.5/getting-started/version-checking",title:"Version checking",description:"By default, ts-jest supports a range of versions for jest/typescript. One uses incompatible versions will receive a warning",source:"@site/versioned_docs/version-26.5/getting-started/version-checking.md",sourceDirName:"getting-started",slug:"/getting-started/version-checking",permalink:"/ts-jest/docs/26.5/getting-started/version-checking",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/version-checking.md",tags:[],version:"26.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1663178398,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{id:"version-checking",title:"Version checking"},sidebar:"version-26.5-docs",previous:{title:"Paths mapping",permalink:"/ts-jest/docs/26.5/getting-started/paths-mapping"},next:{title:"ESM Support",permalink:"/ts-jest/docs/26.5/guides/esm-support"}},c={},p=[{value:"Note",id:"note",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," supports a range of versions for ",(0,i.kt)("inlineCode",{parentName:"p"},"jest"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"typescript"),". One uses incompatible versions will receive a warning\nmessage while running tests. This warning message can be opt-out by setting environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux/MacOS")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export TS_JEST_DISABLE_VER_CHECKER=true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set TS_JEST_DISABLE_VER_CHECKER=true\n")),(0,i.kt)("h3",{id:"note"},"Note"),(0,i.kt)("p",null,"As long as the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER")," stays, the warning message will no longer show.\nThis can lead to unexpected errors due to the usage of incompatible versions' dependencies. Use this environment variable with precautions."))}u.isMDXComponent=!0}}]);