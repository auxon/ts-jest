(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<i;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(133)),s={id:"using-with-monorepo",title:"Using with monorepo"},c={unversionedId:"guides/using-with-monorepo",id:"version-26.5/guides/using-with-monorepo",isDocsHomePage:!1,title:"Using with monorepo",description:"To use ts-jest in a project with monorepo structure, you'll need to use Jest projects configuration.",source:"@site/versioned_docs/version-26.5/guides/using-with-monorepo.md",slug:"/guides/using-with-monorepo",permalink:"/ts-jest/docs/guides/using-with-monorepo",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-26.5/guides/using-with-monorepo.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"Using with React Native",permalink:"/ts-jest/docs/guides/react-native"},next:{title:"Troubleshooting",permalink:"/ts-jest/docs/guides/troubleshooting"}},a=[],u={toc:a};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," in a project with monorepo structure, you'll need to use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/next/configuration#projects-arraystring--projectconfig"}),"Jest projects configuration"),"."),Object(i.b)("p",null,"When using Jest ",Object(i.b)("inlineCode",{parentName:"p"},"projects")," configuration, Jest will run ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," against each project which is defined in the configuration."),Object(i.b)("p",null,"One should not be confused between the term ",Object(i.b)("strong",{parentName:"p"},"monorepo")," vs TypeScript ",Object(i.b)("strong",{parentName:"p"},"project references"),". These are 2 different terms."))}p.isMDXComponent=!0}}]);