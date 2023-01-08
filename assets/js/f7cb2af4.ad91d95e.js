"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4985],{4137:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var s=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,s,o=function(t,e){if(null==t)return{};var n,s,o={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=s.createContext({}),p=function(t){var e=s.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return s.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?s.createElement(f,r(r({ref:e},c),{},{components:n})):s.createElement(f,r({ref:e},c))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},425:(t,e,n)=>{n.d(e,{Z:()=>r});var s=n(7294),o=n(6010);const a="tabItem_Ymn6";function r(t){let{children:e,hidden:n,className:r}=t;return s.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,r),hidden:n},e)}},4259:(t,e,n)=>{n.d(e,{Z:()=>d});var s=n(7462),o=n(7294),a=n(6010),r=n(1048),i=n(3609),l=n(1943),p=n(2957);const c="tabList__CuJ",m="tabItem_LNqP";function u(t){const{lazy:e,block:n,defaultValue:r,values:u,groupId:d,className:f}=t,g=o.Children.map(t.children,(t=>{if((0,o.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),j=u??g.map((t=>{let{props:{value:e,label:n,attributes:s}}=t;return{value:e,label:n,attributes:s}})),b=(0,i.l)(j,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===r?r:r??g.find((t=>t.props.default))?.props.value??g[0].props.value;if(null!==h&&!j.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${j.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,l.U)(),[v,x]=(0,o.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=d){const t=y[d];null!=t&&t!==v&&j.some((e=>e.value===t))&&x(t)}const N=t=>{const e=t.currentTarget,n=w.indexOf(e),s=j[n].value;s!==v&&(T(e),x(s),null!=d&&k(d,String(s)))},C=t=>{let e=null;switch(t.key){case"Enter":N(t);break;case"ArrowRight":{const n=w.indexOf(t.currentTarget)+1;e=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(t.currentTarget)-1;e=w[n]??w[w.length-1];break}}e?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},j.map((t=>{let{value:e,label:n,attributes:r}=t;return o.createElement("li",(0,s.Z)({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:t=>w.push(t),onKeyDown:C,onClick:N},r,{className:(0,a.Z)("tabs__item",m,r?.className,{"tabs__item--active":v===e})}),n??e)}))),e?(0,o.cloneElement)(g.filter((t=>t.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==v})))))}function d(t){const e=(0,r.Z)();return o.createElement(u,(0,s.Z)({key:String(e)},t))}},8602:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var s=n(7462),o=(n(7294),n(4137)),a=n(4259),r=n(425);const i={title:"TypeScript Config option"},l=void 0,p={unversionedId:"getting-started/options/tsconfig",id:"getting-started/options/tsconfig",title:"TypeScript Config option",description:"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.",source:"@site/docs/getting-started/options/tsconfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/tsconfig",permalink:"/ts-jest/docs/next/getting-started/options/tsconfig",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/tsconfig.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1673192490,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{title:"TypeScript Config option"}},c={},m=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}],u={toc:m};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," option allows you to define which ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," JSON file to use. An inline ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," object can also be specified instead of a file path."),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. If it cannot find one, it will use the default TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options"),"; except, ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2015")," is used as ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ES5"),"."),(0,o.kt)("p",null,"If you need to use defaults and force ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," to use the defaults even if there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project, you can set this option to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"path-to-a-tsconfig-file"},"Path to a ",(0,o.kt)("inlineCode",{parentName:"h4"},"tsconfig")," file"),(0,o.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"<rootDir>")," in the path to start from the project root dir."),(0,o.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(r.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": "tsconfig.test.json"\n        }\n      ]\n    }\n  }\n}\n')))),(0,o.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,o.kt)("p",null,"Refer to the TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," for reference.\nIt's basically the same object you'd put in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"compilerOptions"),"."),(0,o.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(r.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "importHelpers": true\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,o.kt)("h4",{id:"disable-auto-lookup"},"Disable auto-lookup"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(r.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "tsconfig": false\n          }\n        }\n      ]\n    }\n  }\n}\n')))))}d.isMDXComponent=!0}}]);