import { createContext as D, createElement as v, Fragment as d } from '../preact.js';
import { useContext as F } from '../preact/hooks.js';
import { x } from '../common/compat.module-a3e8ee54.js';

const p=D({}),c=e=>t=>{const r=a(t.components);return v(e,Object.assign({},t,{components:r}))},a=e=>{const n=F(p);return "function"==typeof e?e(n):{...n,...e}},i=({components:e,children:t,disableParentContext:r})=>{let o=a(e);return r&&(o=e),v(p.Provider,{value:o},t)},l={inlineCode:"code",wrapper:({children:e})=>v(d,{},e)},s=x((e,t)=>{const{components:r,mdxType:o,originalType:p,parentName:c,...i}=e,s=a(r);return v(s[`${c}.${o}`]||s[o]||l[o]||p,r?{ref:t,...i,components:r}:{ref:t,...i})});function m(e,t){const r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){const p=r.length,c=new Array(p);c[0]=s;const a={};for(let e in t)hasOwnProperty.call(t,e)&&(a[e]=t[e]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(let e=2;e<p;e++)c[e]=r[e];return v.apply(null,c)}return v.apply(null,r)}s.displayName="MDXCreateElement";

export { p as MDXContext, i as MDXProvider, m as mdx, a as useMDXComponents, c as withMDXComponents };
