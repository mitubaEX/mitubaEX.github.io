(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(144),l=a(151),o=a(149);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Technique of mitubaEX"}),r.a.createElement("h1",null,"Technique of mitubaEX"),r.a.createElement("h3",null,"Environment"),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"OS: Mac OS, Arch Linux"),r.a.createElement("li",null,"Shell: Zsh"),r.a.createElement("li",null,"Editor: Neovim"),r.a.createElement("li",null,"Other: Alacritty, tmux"),r.a.createElement("li",null,"dotfiles:"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mitubaEX/dotfiles"},"dotfiles")))),r.a.createElement("h3",null,"Language"),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"JavaScript(React)"),r.a.createElement("li",null,"Go"),r.a.createElement("li",null,"Rust"),r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"Shell Script"),r.a.createElement("li",null,"Haskell"))),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(143),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(145),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"mitubaEX's Page"}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(51),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},148:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),l=a(4),o=a.n(l),u=a(152),c=a.n(u),s=a(144);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var m="1025518380"},150:function(e){e.exports={data:{site:{siteMetadata:{title:"mitubaEX's Page",description:"mitubaEX is engineer.",author:"@mitubaEX"}}}}},151:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),l=a(4),o=a.n(l),u=a(144),c=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#FFC300",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var s=c,d=(a(148),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});d.propTypes={children:o.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-technique-of-mituba-ex-js-49ef4264a4a58e0d3da7.js.map