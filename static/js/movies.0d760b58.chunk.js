"use strict";(self.webpackChunkfilm_search=self.webpackChunkfilm_search||[]).push([[936],{5058:function(t,e,n){n.d(e,{Z:function(){return c}});n(2791);var r=n(1523),i=n(8931),a={marcupList:"marcup_marcupList__1nkrq",link:"marcup_link__pX1J-"},u=n(184),c=(0,i.EN)((function(t){var e=t.films,n=t.location;return(0,u.jsx)("ul",{className:a.marcupList,children:e.map((function(t){var e=t.title,i=t.id;return(0,u.jsx)("li",{className:a.marcupItem,children:(0,u.jsx)(r.OL,{to:{pathname:"/movies/".concat(i),state:{from:n}},className:a.link,children:e})},i)}))})}))},4140:function(t,e,n){var r=n(4569),i=n.n(r),a={getTrendFilms:function(){return i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=b8071974481c60cf154163a6bdc34d3f").then((function(t){return t.data.results}))},getRequestedFilms:function(t){return i().get("https://api.themoviedb.org/3/search/movie?api_key=b8071974481c60cf154163a6bdc34d3f&query=".concat(t)).then((function(t){return t.data.results}))},getRequestedMovie:function(t){return i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=b8071974481c60cf154163a6bdc34d3f")).then((function(t){return t.data}))},getFilmReviews:function(t){return i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=b8071974481c60cf154163a6bdc34d3f")).then((function(t){return t.data.results}))},getFilmCast:function(t){return i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=b8071974481c60cf154163a6bdc34d3f")).then((function(t){return t.data.cast}))}};e.Z=a},9775:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(5671),i=n(3144),a=n(136),u=n(2882),c=n(2791),s="form_input__KgJfO",o="form_button__V3efB",f=n(184),m=function(t){(0,a.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return(t=e.call.apply(e,[this].concat(a))).state={input:""},t.handleInput=function(e){t.setState({input:e.target.value})},t.handleSubmit=function(e){var n=t.state.input;e.preventDefault(),t.props.onFormSubmit(n),t.setState({input:""})},t}return(0,i.Z)(n,[{key:"render",value:function(){return(0,f.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,f.jsx)("input",{type:"text",value:this.state.input,onChange:this.handleInput,className:s}),(0,f.jsx)("button",{type:"submit",className:o,children:"Search"})]})}}]),n}(c.Component),l=m,h=n(5058),p=n(4140),d=function(t){(0,a.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return(t=e.call.apply(e,[this].concat(a))).state={films:[]},t.onFormSubmit=function(e){p.Z.getRequestedFilms(e).then((function(e){return t.setState({films:e})}))},t}return(0,i.Z)(n,[{key:"render",value:function(){var t=this.state.films;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Movies"}),(0,f.jsx)(l,{onFormSubmit:this.onFormSubmit}),(0,f.jsx)(h.Z,{films:t})]})}}]),n}(c.Component),v=d}}]);
//# sourceMappingURL=movies.0d760b58.chunk.js.map