webpackJsonp([1],{"5vs5":function(t,e){},"7TZm":function(t,e){},"7zck":function(t,e){},D7N1:function(t,e){},DfBh:function(t,e){},EroU:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("mtWM"),i=s.n(a),r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,feeds:[],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js",hackerNewsUserData:{}}},created:function(){this.loadFeedList()},methods:{loadFeedList:function(){var t=this;i.a.get("http://localhost:9000/feeds").then(function(e){return t.feeds=e.data})},loadHNUser:function(){var t=this;this.axios.get("https://hacker-news.firebaseio.com/v0/user/"+this.$store.state.hackerNews.currentUser+".json").then(function(e){t.hackerNewsUserData=e.data})}},watch:{"$store.state.hackerNews.currentUser":function(){this.loadHNUser()}},name:"App"},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{dark:""}},[s("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",[t._l(t.$store.state.sideMenu.items,function(e,n){return s("v-list-tile",{key:n,attrs:{value:"true",to:e.path},on:{click:function(e){t.drawer=!1}}},[s("v-list-tile-action",[s("v-list-tile-avatar")],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",{staticClass:"black--text"},[t._v(t._s(e.title))])],1)],1)}),t._v(" "),s("div",{staticClass:"pa-2 mt-3"},[s("span",{staticClass:"hn-username"},[t._v(t._s(t.$store.state.hackerNews.currentUser))]),t._v(" "),s("div",[t._v(t._s(t.hackerNewsUserData.karma))]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.hackerNewsUserData.about)}})])],2)],1),t._v(" "),s("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[s("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.$router.go(-1)}}},[s("v-icon",[t._v("chevron_left")])],1),t._v(" "),s("v-toolbar-title",{domProps:{textContent:t._s(t.$store.state.pageTitle)}}),t._v(" "),s("v-spacer")],1),t._v(" "),s("v-content",[s("transition",{attrs:{name:"fade"}},[s("keep-alive",[s("router-view")],1)],1)],1),t._v(" "),s("v-footer",{attrs:{fixed:t.fixed,app:""}},[s("span",[t._v("© 2017")])])],1)},staticRenderFns:[]};var l=s("VU/8")(r,o,!1,function(t){s("5vs5")},null,null).exports,c=s("/ocq"),d={name:"reddit",props:["subreddit"],data:function(){return{posts:[],afterId:null,beforeId:null}},mounted:function(){this.loadPosts()},watch:{$route:function(t,e){this.loadPosts("new")}},methods:{loadPosts:function(t){var e=this,s="";switch(s=this.$route.params.sub?this.$route.params.sub:this.subreddit,this.$store.state.pageTitle=s,t){case"next":var n="";this.afterId&&(n="?after="+this.afterId),i.a.get("https://old.reddit.com/r/"+s+"/new/.json"+n).then(function(t){e.posts=t.data.data.children,e.afterId=t.data.data.after,e.beforeId=t.data.data.before});break;case"prev":var a="";this.beforeId&&(a="?before="+this.beforeId),i.a.get("https://old.reddit.com/r/"+s+"/new/.json"+a).then(function(t){e.posts=t.data.data.children,e.beforeId=t.data.data.before,e.afterId=t.data.data.after});break;default:i.a.get("https://old.reddit.com/r/"+s+"/new/.json").then(function(t){e.posts=t.data.data.children,e.afterId=t.data.data.after})}},loadPost:function(t){var e="";this.$store.state.reddit.scrollPosition=window.scrollY,e=this.$route.params.sub?this.$route.params.sub:this.subreddit,this.$router.push("/reddit/"+e+"/"+t)},loadComments:function(t){t.url.split(".").pop(),i.a.get(t.url+"/.json").then(function(e){t.title="foo"})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"pa-2"},[s("v-card",{attrs:{flat:""}},[s("v-list",{attrs:{"two-line":""}},[s("transition-group",{attrs:{name:"fade"}},[t._l(t.posts,function(e,n){return[s("v-list-tile",{key:n,attrs:{avatar:""},on:{click:function(s){t.loadPost(e.data.id)}}},[s("v-list-tile-avatar",[t._v("\n                            "+t._s(e.data.score)+"\n                        ")]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.data.title)+" -\n                                "),s("small",[t._v(t._s(e.data.domain))])]),t._v(" "),s("v-list-tile-sub-title",[t._v(t._s(e.data.num_comments)+" Comments")])],1)],1)]})],2)],1),t._v(" "),s("v-btn",{attrs:{small:""},on:{click:function(e){t.loadPosts("prev")}}},[t._v("Back")]),t._v(" "),s("v-btn",{attrs:{small:""},on:{click:function(e){t.loadPosts("next")}}},[t._v("Next")])],1)],1)},staticRenderFns:[]};var m=s("VU/8")(d,u,!1,function(t){s("zmoD")},"data-v-5409cc19",null).exports,h={name:"Home",components:{RedditPosts:m},mounted:function(){this.$store.state.pageTitle="Home"}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{md4:"",xs12:""}},[e("div",{staticClass:"posts-list"},[e("h3",[this._v("Casual UK")]),this._v(" "),e("reddit-posts",{attrs:{subreddit:"CasualUk"}})],1)]),this._v(" "),e("v-flex",{attrs:{md4:"",xs12:""}},[e("div",{staticClass:"posts-list"},[e("reddit-posts",{attrs:{subreddit:"London"}})],1)]),this._v(" "),e("v-flex",{attrs:{md4:"",xs12:""}},[e("div",{staticClass:"posts-list"},[e("reddit-posts",{attrs:{subreddit:"BritishProblems"}})],1)])],1)],1)},staticRenderFns:[]};var v=s("VU/8")(h,p,!1,function(t){s("q9/Q")},null,null).exports,f={name:"child-comment",props:["comment"],data:function(){return{replies:[]}},created:function(){void 0!==this.comment.data.replies.data&&console.log("Commnet",this.comment.data.replies.data)},computed:{commentHtml:function(){if(void 0!==this.comment.data)return this.decodeHTMLEntities(this.comment.data.body_html)}},methods:{decodeHTMLEntities:function(t){if(t){var e={amp:"&",apos:"'",lt:"<",gt:">",quot:'"',nbsp:" "};return t.replace(/&([a-z]+);/gi,function(t,s){return s=s.toLowerCase(),e.hasOwnProperty(s)?e[s]:t})}return""}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{domProps:{innerHTML:this._s(this.commentHtml)}}),this._v(" "),e("child-comment",{attrs:{comment:this.replies}})],1)},staticRenderFns:[]};var g={name:"op-comment",components:{ChildComment:s("VU/8")(f,_,!1,function(t){s("D7N1")},"data-v-1b297fea",null).exports},props:["comment"],data:function(){return{replies:[]}},computed:{commentHtml:function(){return this.decodeHTMLEntities(this.comment.data.body_html)}},created:function(){void 0!==this.comment.data.replies.data&&(this.replies=this.comment.data.replies.data.children,console.log(this.comment.data.replies.data.children))},methods:{decodeHTMLEntities:function(t){if(t){var e={amp:"&",apos:"'",lt:"<",gt:">",quot:'"',nbsp:" "};return t.replace(/&([a-z]+);/gi,function(t,s){return s=s.toLowerCase(),e.hasOwnProperty(s)?e[s]:t})}return""}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"blue-grey lighten-5 pa-1 mb-2",domProps:{innerHTML:this._s(this.commentHtml)}}),this._v(" "),this._l(this.replies,function(t,s){return e("child-comment",{key:s,attrs:{comment:t}})})],2)},staticRenderFns:[]};var b=s("VU/8")(g,w,!1,function(t){s("v2k7")},"data-v-2d04b367",null).exports,k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        "+t._s(t.article.title)+"\n    ")]),t._v(" "),s("v-card-text",[s("img",{attrs:{src:t.article.image,width:"400"}}),t._v(" "),s("p",[s("span",{domProps:{innerHTML:t._s(t.article.description)}})]),t._v(" "),s("p",[s("span",{domProps:{innerHTML:t._s(t.article.body)}})])])],1)},staticRenderFns:[]};var C=s("VU/8")({name:"article-reader",data:function(){return{}},props:["article"],created:function(){}},k,!1,function(t){s("fZ27")},"data-v-2729cf86",null).exports,x={name:"reddit-comments",components:{OpComment:b,ArticleReader:C},data:function(){return{post:{},rootComments:[],comments:null,depth:0,url:"",isImage:!1,imageUrl:"",showingArticle:!1,currentArticle:null}},computed:{indent:function(){return{transform:"translate("+50*this.depth+"px)"}}},created:function(){this.loadPost()},watch:{$route:function(t,e){this.loadPost()}},methods:{loadPost:function(){var t=this;i.a.get("https://old.reddit.com/r/"+this.$route.params.sub+"/"+this.$route.params.postId+"/.json").then(function(e){t.post=e.data[0].data.children[0].data,""!==t.post.url&&console.log("URL ",t.parseUrl(t.post.url)),t.post.content=t.post.selftext.replace(/(?:\r\n|\r|\n)/g,"<br>"),t.rootComments=e.data[1].data.children,t.comments=t.getCommentsFromArray(e.data[1].data.children)})},getCommentsFromArray:function(t){var e=this,s="";return t.forEach(function(t){if(void 0!==t)if(0===t.data.depth?s+='<div class="pa-1 mb-3">':s+='<div class="pa-1">',s+='\n                  <div class="">\n                  <b>'+t.data.author+"</b>\n                  "+t.data.ups+"</div>\n                  "+e.decodeHTMLEntities(t.data.body_html)+"\n                  </div>",void 0!==t.data.replies&&""!==t.data.replies){e.depth++;var n=10*e.depth;s+='<div style="padding-left: '+n+'px"> '+e.getCommentsFromArray(t.data.replies.data.children)+"</div>"}else e.depth=0}),s},loadUrl:function(t){var e=this;i.a.get("http://localhost:9000/link?url="+t.url).then(function(t){e.currentArticle=t.data,e.showingArticle=!0,console.log(e.currentArticle.title)})},parseUrl:function(t){var e=new RegExp("^https?://(.*)/(.*)$","i"),s=t.match(e),n=t.split(".").pop();switch(console.log("Ext",n),this.imageUrl="",n){case"png":case"jpg":case"jpeg":this.isImage=!0,this.imageUrl=t}this.isImage||(this.url=s[1],this.url.match(/imgur/)?(this.getImageFromImgur(t),this.isImage=!0):this.url="")},getImageFromImgur:function(t){var e=this;i.a.get("http://localhost:9000/imgur/image?url="+t).then(function(t){e.imageUrl=t.data.url})},decodeHTMLEntities:function(t){if(t){var e={amp:"&",apos:"'",lt:"<",gt:">",quot:'"',nbsp:" "};return t.replace(/&([a-z]+);/gi,function(t,s){return s=s.toLowerCase(),e.hasOwnProperty(s)?e[s]:t})}return""}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-2"},[s("div",{staticClass:"mt-2 mb-3"},[s("h3",[t._v(t._s(t.post.title)+"\n            "),s("small",{staticClass:"teal pa-1"},[t._v(t._s(t.post.author))])])]),t._v(" "),t.isImage?s("img",{attrs:{src:t.imageUrl,width:"500"}}):t._e(),t._v(" "),s("div",{staticClass:"mb-2",domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),s("div",{staticClass:"pa-2 mb-2"},[s("a",{on:{click:function(e){t.loadUrl(t.post)}}},[t._v(t._s(t._f("getDomain")(t.post.url)))]),t._v(" "),s("a",{attrs:{href:t.post.url,target:"_blank"}},[s("v-icon",{attrs:{small:""}},[t._v("link")])],1)]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.comments)}}),t._v(" "),s("v-dialog",{attrs:{width:"950"},model:{value:t.showingArticle,callback:function(e){t.showingArticle=e},expression:"showingArticle"}},[s("article-reader",{attrs:{article:t.currentArticle}})],1)],1)},staticRenderFns:[]};var A=s("VU/8")(x,P,!1,function(t){s("7TZm")},"data-v-78c6ad20",null).exports,U={name:"evening-telegraph",components:{ArticleReader:C},data:function(){return{feeds:[],currentArticle:{},showingArticle:!1}},created:function(){var t=this;console.log("Loaded ET"),i.a.get("http://localhost:9000/feeds/et").then(function(e){return t.feeds=e.data})},methods:{loadArticle:function(t){var e=this;i.a.get("http://localhost:9000/link?url="+t.link).then(function(t){e.currentArticle=t.data,e.showingArticle=!0,console.log(e.currentArticle.title)})}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list",{attrs:{"two-line":""}},[t._l(t.feeds,function(e,n){return[s("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(s){t.loadArticle(e)}}},[s("v-list-tile-avatar",[s("img",{attrs:{src:e.image}})]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title)+" - "),s("small",[t._v(t._s(t._f("moment")(e.date,"HH:mm")))])]),t._v(" "),s("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.content)}})],1)],1)]})],2),t._v(" "),s("v-dialog",{attrs:{width:"950"},model:{value:t.showingArticle,callback:function(e){t.showingArticle=e},expression:"showingArticle"}},[s("article-reader",{attrs:{article:t.currentArticle}})],1)],1)},staticRenderFns:[]};var H=s("VU/8")(U,y,!1,function(t){s("qBDp")},"data-v-79fd5d2c",null).exports,$=s("Dd8w"),T=s.n($),L={methods:{extractHostname:function(t){return(t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0]).split(":")[0].split("?")[0]},getDomainName:function(t){var e=this.extractHostname(t),s=e.split("."),n=s.length;return n>2&&(e=s[n-2]+"."+s[n-1],2==s[n-2].length&&2==s[n-1].length&&(e=s[n-3]+"."+e)),e}}},I={name:"hacker-news",mixins:[L],data:function(){return{posts:[],currentPosition:0,postsPerLoad:30}},created:function(){this.loadPosts()},methods:{loadPosts:function(){var t=this;this.axios.get("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(e){e.data.slice(t.currentPosition,t.currentPosition+t.postsPerLoad).forEach(function(e){t.axios.get("https://hacker-news.firebaseio.com/v0/item/"+e+".json").then(function(s){t.posts.push(T()({},s.data,{path:"/hn/post/"+e}))})}),t.currentPosition+=t.postsPerLoad})}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"pa-2 fluid",attrs:{fluid:""}},[s("v-card",{attrs:{flat:""}},[s("v-list",{attrs:{"two-line":""}},[s("transition-group",{attrs:{name:"fade"}},[t._l(t.posts,function(e,n){return[s("v-list-tile-avatar",[t._v("\n                        "+t._s(e.score)+"\n                    ")]),t._v(" "),s("v-list-tile",{key:n,attrs:{avatar:"",to:e.path}},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title)+"\n                            ")]),t._v(" "),s("v-list-tile-sub-title",[t._v(t._s(e.descendants)+" Comments by "+t._s(e.by)+" -\n                                "),s("small",[t._v(t._s(t.getDomainName(e.url)))])])],1)],1)]})],2)],1),t._v(" "),s("v-btn",{on:{click:t.loadPosts}},[t._v("Load More")])],1)],1)},staticRenderFns:[]};var N=s("VU/8")(I,E,!1,function(t){s("EroU")},"data-v-9cef20c6",null).exports,M={name:"hacker-news-comment",components:{},props:["commentId","isChild"],data:function(){return{comment:{},showChildren:!0}},created:function(){this.loadComment()},methods:{loadComment:function(){var t=this;this.axios.get("https://hacker-news.firebaseio.com/v0/item/"+this.commentId+".json").then(function(e){t.comment=e.data})}},computed:{secondsAgo:function(){var t=(new Date).getTime()/1e3;return console.log("Now",t),console.log("Then",this.comment.time),(new Date).getTime()-1e3*this.comment.time}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-2",class:{"grey lighten-5":!t.isChild,white:t.isChild}},[s("div",{staticClass:"mb-2"},[s("span",{staticClass:"comment-by mr-2"},[s("a",{on:{click:function(e){t.$store.state.hackerNews.currentUser=t.comment.by}}},[t._v(t._s(t.comment.by))])]),t._v(" "),s("small",[t._v(" "+t._s(t._f("duration")(t.secondsAgo,"humanize"))+" ago")]),t._v(" "),s("span",{staticClass:"ml-2",on:{click:function(e){t.showChildren=!t.showChildren}}},[t._v(t._s(t.comment.kids.length)+" replies")]),t._v(" "),s("v-icon",[t._v("remove_red_eye")])],1),t._v(" "),s("div",{staticClass:"pa-2",class:{"teal lighten-3":t.comment.by===t.$store.state.hackerNews.currentUser},domProps:{innerHTML:t._s(t.comment.text)}}),t._v(" "),t._l(t.comment.kids,function(t,e){return s("hacker-news-comment",{key:e,staticClass:"ml-1",attrs:{isChild:!0,commentId:t}})})],2)},staticRenderFns:[]};var F={name:"hacker-news-post",components:{HackerNewsComment:s("VU/8")(M,D,!1,function(t){s("T9+x")},"data-v-109f82d0",null).exports,ArticleReader:C},mixins:[L],props:[],data:function(){return{post:{},showingArticle:!1,currentArticle:{},isChild:!1}},created:function(){this.loadPost()},methods:{loadPost:function(){var t=this;this.axios.get("https://hacker-news.firebaseio.com/v0/item/"+this.$route.params.postId+".json").then(function(e){t.post=e.data})},loadArticle:function(t){var e=this;this.axios.get("http://localhost:9000/link?url="+t).then(function(t){e.currentArticle=t.data,e.showingArticle=!0})}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-2"},[s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"text-xs-center align-center",attrs:{xs1:""}},[s("strong",[t._v(t._s(t.post.score))])]),t._v(" "),s("v-flex",{staticClass:" align-center",attrs:{xs6:""}},[s("h2",[t._v(t._s(t.post.title))]),t._v(" "),s("div",[t._v("\n\n                "+t._s(t.post.descendants)+" comments by "+t._s(t.post.by)+"\n            ")]),t._v(" "),s("div",[s("a",{on:{click:function(e){t.loadArticle(t.post.url)}}},[t._v(t._s(t.post.url))]),t._v(" "),s("a",{attrs:{href:t.post.url,target:"_blank"}},[s("v-icon",{attrs:{small:""}},[t._v("link")])],1)])])],1),t._v(" "),s("transition-group",{attrs:{name:"fade"}},t._l(t.post.kids,function(e,n){return t.post?s("hacker-news-comment",{key:n,attrs:{isChild:!1,commentId:e}}):t._e()})),t._v(" "),s("v-dialog",{attrs:{width:"950"},model:{value:t.showingArticle,callback:function(e){t.showingArticle=e},expression:"showingArticle"}},[s("article-reader",{attrs:{article:t.currentArticle}})],1)],1)},staticRenderFns:[]};var V=s("VU/8")(F,R,!1,function(t){s("DfBh")},"data-v-f828d5a4",null).exports;n.default.use(c.a);var j=new c.a({routes:[{path:"/",name:"Home",component:v},{path:"/hn",name:"Hacker News",component:N},{path:"/hn/post/:postId",name:"Hacker News Post",component:V},{path:"/reddit/:sub",name:"Reddit",component:m},{path:"/reddit/:sub/:postId",name:"Reddit",component:A},{path:"/et",name:"ET",component:H}]}),O=s("NYxO");n.default.use(O.a);var B=new O.a.Store({state:{pageTitle:"Homepage",sideMenu:{items:[{title:"Hacker News",path:"/hn",image:"/assets/hn.png"},{title:"Casual UK",path:"/reddit/CasualUk",image:"/assets/reddit.png"},{title:"London",path:"/reddit/London",image:"/assets/reddit.png"},{title:"British Success",path:"/reddit/BritishSuccess",image:"/assets/reddit.png"},{title:"British Problems",path:"/reddit/BritishProblems",image:"/assets/reddit.png"},{title:"Vue",path:"/reddit/VueJs",image:"/assets/reddit.png"},{title:"Cable Porn",path:"/reddit/CablePorn",image:"/assets/reddit.png"},{title:"Food Porn",path:"/reddit/FoodPorn",image:"/assets/reddit.png"},{title:"Odds",path:"/reddit/NeverTellMeTheOdds",image:"/assets/reddit.png"},{title:"Evening Telegraph",path:"/et",image:"/assets/et.png"}]},reddit:{scrollPosition:0},hackerNews:{currentUser:null},currentPost:{},currentComment:{}},actions:{},mutations:{}}),z=s("3EgV"),q=s.n(z);s("7zck");n.default.filter("getDomain",function(t){return function(t){var e=function(t){var e=void 0;e=t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0];return e=(e=e.split(":")[0]).split("?")[0]}(t),s=e.split("."),n=s.length;n>2&&(e=s[n-2]+"."+s[n-1],2==s[n-2].length&&2==s[n-1].length&&(e=s[n-3]+"."+e));return e}(t)});var W=s("9JMe"),Z=s("Rf8U"),J=s.n(Z);n.default.use(s("8AgW")),Object(W.sync)(B,j),n.default.use(J.a,i.a),n.default.use(s("8AgW")),n.default.use(q.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:j,store:B,components:{App:l},template:"<App/>"})},"T9+x":function(t,e){},fZ27:function(t,e){},"q9/Q":function(t,e){},qBDp:function(t,e){},v2k7:function(t,e){},zmoD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5a48f9eb3dc1a110822a.js.map