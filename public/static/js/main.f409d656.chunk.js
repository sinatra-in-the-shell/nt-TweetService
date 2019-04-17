(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){e.exports=a(284)},284:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),l=a.n(i),o=a(132),c=a(285),s=a(286),m=a(287),u=a(44),p={isLoggedIn:function(){return localStorage.getItem("isLoggedIn")&&sessionStorage.setItem("isLoggedIn",!0),sessionStorage.getItem("isLoggedIn")},login:function(e){sessionStorage.setItem("isLoggedIn",!0),e&&localStorage.setItem("isLoggedIn",!0)},logout:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];sessionStorage.removeItem("isLoggedIn"),localStorage.removeItem("isLoggedIn"),jt.push({pathname:"/login",state:{from:jt.location}})}},h=a(21),d=a(22),g=a(24),f=a(23),E=a(25),b=a(18),w=a(17),v=a(28),y=a.n(v),O=a(33),x=a.n(O),j=a(32),k=a.n(j),S=a(34),N=a.n(S),C=a(116),T=a.n(C),I=a(117),L=a.n(I),M=a(38),R=a.n(M),F=a(37),P=a.n(F),D=a(30),_=a.n(D),A=a(10),W=a.n(A),B=a(5),G=a.n(B);function q(e){return e.json().then(function(t){if(e.ok)return t;if(401===e.status)return p.logout();throw new Error(t.errors)})}var U={signup:function(e){return fetch("/api/register",{method:"POST",body:e}).then(q)},login:function(e){return fetch("/api/login",{method:"POST",body:e}).then(q)},logout:function(){return fetch("/api/logout",{method:"DELETE"}).then(q)},userProfile:function(e){return fetch("/api/users/"+e,{method:"GET"}).then(q)},timeline:function(){return fetch("/api/timeline",{method:"GET"}).then(q)},userTweets:function(e){return fetch("/api/users/"+e+"/tweets",{method:"GET"}).then(q)},postTweets:function(e){return fetch("/api/tweets",{method:"POST",body:e}).then(q)},followings:function(){return fetch("/api/follows/followings",{method:"GET"}).then(q)},follow:function(e){var t=new FormData;return t.append("to_user_id",e),fetch("/api/follows",{method:"POST",body:t}).then(q)},unfollow:function(e){var t=new FormData;return t.append("to_user_id",e),fetch("/api/follows",{method:"DELETE",body:t}).then(q)},search:function(e){return fetch("/api/search/tweets?keyword="+e+"&maxresults=100",{method:"GET"}).then(q)}},z=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={redirectToReferrer:!1,rememberMe:!1},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleRemember",value:function(){this.setState({rememberMe:!this.state.rememberMe})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=this;t.append("remember_me",this.state.rememberMe),U.login(t).then(function(e){p.login(a.state.rememberMe),a.setState({redirectToReferrer:!0})}).catch(function(e){alert("login failed!\n"+e.message)})}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(m.a,{to:"/"}):r.a.createElement("main",{className:t.main},r.a.createElement(k.a,null),r.a.createElement(_.a,{className:t.paper},r.a.createElement(y.a,{className:t.avatar}),r.a.createElement(W.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:this.handleSubmit},r.a.createElement(N.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(P.a,{htmlFor:"email"},"Email Address"),r.a.createElement(R.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(N.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(P.a,{htmlFor:"password"},"Password"),r.a.createElement(R.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(T.a,{control:r.a.createElement(L.a,{value:"remember",color:"primary",onChange:function(t){t.preventDefault(),e.handleRemember()}}),label:"Remember me"}),r.a.createElement(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign in"))))}}]),t}(r.a.Component),J=G()(function(e){return{main:Object(w.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(z),Y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={redirectToReferrer:!1},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=this;U.signup(t).then(function(e){p.login(),a.setState({redirectToReferrer:!0})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(m.a,{to:"/"}):r.a.createElement("main",{className:e.main},r.a.createElement(k.a,null),r.a.createElement(_.a,{className:e.paper},r.a.createElement(y.a,{className:e.avatar}),r.a.createElement(W.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(N.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(P.a,{htmlFor:"email"},"Email Address"),r.a.createElement(R.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(N.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(P.a,{htmlFor:"username"},"Your Username"),r.a.createElement(R.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0})),r.a.createElement(N.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(P.a,{htmlFor:"display_name"},"Your Display Name"),r.a.createElement(R.a,{id:"display_name",name:"display_name",autoComplete:"display_name",autoFocus:!0})),r.a.createElement(N.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(P.a,{htmlFor:"password"},"Password"),r.a.createElement(R.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Register"))))}}]),t}(r.a.Component),H=G()(function(e){return{main:Object(w.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(Y),Q=a(19),K=a(11),V=a.n(K),X=a(118),Z=a.n(X),$=a(119),ee=a.n($),te=a(26),ae=a.n(te),ne=a(62),re=a.n(ne),ie=a(50),le=a.n(ie),oe=a(39),ce=a.n(oe),se=a(83),me=a.n(se),ue=a(43),pe=a(120),he=a.n(pe),de=a(121),ge=a.n(de),fe=a(86),Ee=a.n(fe),be=a(84),we=a.n(be),ve=a(85),ye=a.n(ve),Oe=a(65),xe=a.n(Oe),je=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,mobileMoreAnchorEl:null},a.handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.handleSignOut=function(){a.handleMenuClose(),U.logout().then(function(e){p.logout()}).catch(function(e){alert("Fail!")})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,i=Boolean(t),l=Boolean(a),o=r.a.createElement(me.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose},r.a.createElement(ce.a,{onClick:this.handleMenuClose},"Profile"),r.a.createElement(ce.a,{onClick:this.handleMenuClose},"My account"),r.a.createElement(ce.a,{onClick:this.handleSignOut},"Sign out")),c=r.a.createElement(me.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleMenuClose},r.a.createElement(ce.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ae.a,{color:"inherit"},r.a.createElement(le.a,{badgeContent:4,color:"secondary"},r.a.createElement(we.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(ce.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ae.a,{color:"inherit"},r.a.createElement(le.a,{badgeContent:11,color:"secondary"},r.a.createElement(ye.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(ce.a,{onClick:this.handleProfileMenuOpen},r.a.createElement(ae.a,{color:"inherit"},r.a.createElement(Ee.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:n.root},r.a.createElement(Z.a,{position:"static"},r.a.createElement(ee.a,null,r.a.createElement(ae.a,{className:n.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(he.a,null)),r.a.createElement(W.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(ge.a,null)),r.a.createElement(re.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput}})),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.sectionDesktop},r.a.createElement(ae.a,{color:"inherit"},r.a.createElement(le.a,{badgeContent:4,color:"secondary"},r.a.createElement(we.a,null))),r.a.createElement(ae.a,{color:"inherit"},r.a.createElement(le.a,{badgeContent:17,color:"secondary"},r.a.createElement(ye.a,null))),r.a.createElement(ae.a,{"aria-owns":i?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},r.a.createElement(Ee.a,null))),r.a.createElement("div",{className:n.sectionMobile},r.a.createElement(ae.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(xe.a,null))))),o,c)}}]),t}(r.a.Component),ke=Object(Q.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(w.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(w.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ue.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ue.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(w.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(w.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(w.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(je),Se=a(66),Ne=a.n(Se),Ce=a(122),Te=a.n(Ce),Ie=a(49),Le=a.n(Ie),Me=a(123),Re=a.n(Me),Fe=a(64),Pe=a.n(Fe);var De=function(e){return r.a.createElement("span",{onClick:function(){return jt.push(e.to)}},e.children)},_e=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={userid:"Loading",username:"Loading",displayname:"Loading",tweets:"Loading",followers:"Loading",followings:"Loading",followed:"Loading"},a.fetchProfile=a.fetchProfile.bind(Object(b.a)(Object(b.a)(a))),a.checkFollow=a.checkFollow.bind(Object(b.a)(Object(b.a)(a))),a.handleFollow=a.handleFollow.bind(Object(b.a)(Object(b.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchProfile()}},{key:"fetchProfile",value:function(){var e=this.props.sourceAPI,t=this;e(this.props.username).then(function(e){var a=e.data;t.setState({userid:a.id,username:a.username,displayname:a.display_name,tweets:a.tweet_number,followers:a.follower_number,followings:a.following_number}),t.checkFollow(t.state.userid)}).catch(function(e){alert(e.message)})}},{key:"checkFollow",value:function(e){var t=this;U.followings().then(function(a){a.data.map(function(e){return e.id}).includes(e)?t.setState({followed:!0}):t.setState({followed:!1})}).catch(function(e){"not found"===e.message?t.setState({followed:!1}):alert(e.message)})}},{key:"handleFollow",value:function(){var e=this;e.state.followed?U.unfollow(e.state.userid).then(function(t){e.setState({followed:!1})}).catch(function(e){alert(e.message)}):U.follow(e.state.userid).then(function(t){e.setState({followed:!0})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){var e,t=this.props.classes;return e="Loading"===this.state.followed?r.a.createElement(x.a,{variant:"contained",color:"primary",disabled:!0,className:t.button},"Loading"):r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:this.handleFollow,className:t.button},this.state.followed?"Unfollow":"Follow"),r.a.createElement(Ne.a,{className:this.props.className},r.a.createElement(Te.a,null,r.a.createElement(Re.a,{className:t.media,image:"",title:"User banner"}),r.a.createElement(Le.a,null,r.a.createElement(V.a,{container:!0,spacing:0},r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(y.a,{alt:"username",src:"https://material-ui.com/static/images/avatar/1.jpg",className:this.props.classes.bigAvatar})),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(W.a,{variant:"title"},r.a.createElement(De,{to:"/u/"+this.state.username},this.state.displayname)),r.a.createElement(W.a,{gutterBottom:!0,variant:"caption"},r.a.createElement(De,{to:"/u/"+this.state.username},this.state.username))),r.a.createElement(V.a,{item:!0,xs:2,md:2,lg:2},e)),r.a.createElement(V.a,{container:!0,spacing:8,className:t.infobox},r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(W.a,{gutterBottom:!0,variant:"caption"},"Tweets"),r.a.createElement(W.a,{variant:"title",className:t.link},this.state.tweets)),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(W.a,{gutterBottom:!0,variant:"caption"},"Followers"),r.a.createElement(W.a,{variant:"title",className:t.link},this.state.followers)),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(W.a,{gutterBottom:!0,variant:"caption"},"Following"),r.a.createElement(W.a,{variant:"title",className:t.link},this.state.followings))))))}}]),t}(r.a.Component),Ae=Object(Q.withStyles)(function(e){return{media:{height:110,backgroundColor:Pe.a[500]},bigAvatar:{marginTop:-53,width:75,height:75,border:"3px solid #ffffff"},infobox:{marginTop:10},link:{color:Pe.a[400]}}})(_e),We=a(6),Be=a.n(We),Ge=a(124),qe=a.n(Ge),Ue=a(125),ze=a.n(Ue),Je=a(129),Ye=a.n(Je),He=a(81),Qe=a.n(He),Ke=a(126),Ve=a.n(Ke),Xe=a(127),Ze=a.n(Xe),$e=a(128),et=a.n($e),tt=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.state={expanded:!1},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ne.a,{className:this.props.className},r.a.createElement(qe.a,{avatar:r.a.createElement(y.a,{"aria-label":"Recipe",className:e.avatar},"R"),action:r.a.createElement(ae.a,null,r.a.createElement(xe.a,null)),title:r.a.createElement(De,{to:"/u/"+this.props.username},this.props.userDisplayname),subheader:this.props.createdAt}),r.a.createElement(Le.a,null,r.a.createElement(W.a,{component:"p"},this.props.text)),r.a.createElement(ze.a,{className:e.actions,disableActionSpacing:!0},r.a.createElement(ae.a,{"aria-label":"Add to favorites"},r.a.createElement(Ve.a,null)),r.a.createElement(ae.a,{"aria-label":"Share"},r.a.createElement(Ze.a,null)),r.a.createElement(ae.a,{className:Be()(e.expand,Object(w.a)({},e.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(et.a,null))),r.a.createElement(Ye.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(Le.a,null)))}}]),t}(r.a.Component),at=Object(Q.withStyles)(function(e){return{media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Qe.a[500]}}})(tt),nt=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={tweets:[]},a.fetchTweets(),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"fetchTweets",value:function(){var e=this.props.sourceAPI,t=this.props.classes,a=this;e().then(function(e){var n=e.data.map(function(e){return r.a.createElement(at,{className:t.paper,text:e.text,username:e.user.username,userDisplayname:e.user.display_name,createdAt:e.created_at})});a.setState({tweets:n})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},this.state.tweets)}}]),t}(r.a.Component),rt=Object(Q.withStyles)(function(e){return{root:{flexGrow:1,overflow:"hidden",padding:"0 ".concat(3*e.spacing.unit,"px")},paper:{margin:"".concat(e.spacing.unit,"px auto"),padding:2*e.spacing.unit}}})(nt),it=a(130),lt=a.n(it),ot=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={text:""},a.handleTextChange=a.handleTextChange.bind(Object(b.a)(Object(b.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=this;t.append("tweet_type","tweet"),U.postTweets(t).then(function(e){a.setState({text:""}),alert("Success")}).catch(function(e){alert(e.message)})}},{key:"handleTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(_.a,{className:this.props.className},r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(N.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(lt.a,{name:"text",multiline:!0,rows:"3",placeholder:"Tweet comes here",className:e.textField,margin:"normal",value:this.state.text,onChange:this.handleTextChange})),r.a.createElement("div",{className:e.buttons},r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",className:e.submit},"Post"))))}}]),t}(r.a.Component),ct=G()(function(e){return{main:Object(w.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},form:{width:"100%",padding:"".concat(2*e.spacing.unit,"px")},buttons:{display:"flex",justifyContent:"flex-end"},submit:{marginTop:e.spacing.unit,marginLeft:e.spacing.unit}}})(ot),st=a(82),mt=a.n(st),ut=a(48),pt=a.n(ut),ht=a(68),dt=a.n(ht),gt=a(67),ft=a.n(gt);var Et=Object(Q.withStyles)(function(e){return{root:{width:"100%",maxWidth:360},inline:{display:"inline"},title:{paddingTop:2*e.spacing.unit,paddingLeft:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(_.a,{className:e.className},r.a.createElement(W.a,{className:t.title,component:"h1",variant:"h5"},"Recommendations"),r.a.createElement(mt.a,{className:t.root},r.a.createElement(pt.a,{alignItems:"flex-start"},r.a.createElement(ft.a,null,r.a.createElement(y.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})),r.a.createElement(dt.a,{primary:"Brunch this weekend?",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{component:"span",className:t.inline,color:"textPrimary"},"Ali Connors")," \u2014 I'll be in your neighborhood doing errands this\u2026")})),r.a.createElement(pt.a,{alignItems:"flex-start"},r.a.createElement(ft.a,null,r.a.createElement(y.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})),r.a.createElement(dt.a,{primary:"Summer BBQ",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{component:"span",className:t.inline,color:"textPrimary"},"to Scott, Alex, Jennifer")," \u2014 Wish I could come, but I'm out of town this\u2026")})),r.a.createElement(pt.a,{alignItems:"flex-start"},r.a.createElement(ft.a,null,r.a.createElement(y.a,{alt:"Remy Sharp",src:"/static/images/avatar/3.jpg"})),r.a.createElement(dt.a,{primary:"Oui Oui",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{component:"span",className:t.inline,color:"textPrimary"},"Sandra Adams")," \u2014 Do you have Paris recommendations? Have you ever\u2026")}))))});var bt=Object(Q.withStyles)(function(e){return{navbar:{position:"relative"},profile:{width:"100%",maxWidth:400},layout:Object(w.a)({width:"auto",marginTop:1*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1800+3*e.spacing.unit*2),{width:1800,marginLeft:"auto",marginRight:"auto"}),editor:{marginTop:0,margin:"".concat(e.spacing.unit,"px auto")},tcollection:{flexGrow:1}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null),r.a.createElement(ke,{position:"static"}),r.a.createElement("main",{className:t.layout},r.a.createElement(V.a,{container:!0,className:t.root,spacing:24},r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:3},r.a.createElement(Ae,{className:t.profile,sourceAPI:U.userProfile,username:"i"})),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:6},r.a.createElement(ct,{className:t.editor}),r.a.createElement(rt,{className:t.tcollection,sourceAPI:U.timeline})),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:3},r.a.createElement(Et,null)))))});var wt=Object(Q.withStyles)(function(e){return{navbar:{position:"relative"},profile:{width:"100%",maxWidth:400},layout:Object(w.a)({width:"auto",marginTop:1*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1800+3*e.spacing.unit*2),{width:1800,marginLeft:"auto",marginRight:"auto"}),editor:{marginTop:0,margin:"".concat(e.spacing.unit,"px auto")},tcollection:{flexGrow:1}}})(function(e){var t=e.classes,a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null),r.a.createElement(ke,{position:"static"}),r.a.createElement("main",{className:t.layout},r.a.createElement(V.a,{container:!0,className:t.root,spacing:24},r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:3},r.a.createElement(Ae,{className:t.profile,sourceAPI:U.userProfile,username:a.params.username})),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:6},r.a.createElement(rt,{className:t.tcollection,sourceAPI:function(){return U.userTweets(a.params.username)}})),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:3}))))}),vt=a(131),yt={pathparams:function(){return jt.location.pathname.split("/")},lastPathparam:function(){return this.pathparams().slice(-1)[0]},searchparams:function(){var e=jt.location.search.substr(1).split("&").map(function(e){return e.split("=")});return Object.assign.apply(Object,Object(vt.a)(e.map(function(e){return Object(w.a)({},e[0],e[1])})))}};var Ot=Object(Q.withStyles)(function(e){return{navbar:{position:"relative"},profile:{width:"100%",maxWidth:400},layout:Object(w.a)({width:"auto",marginTop:1*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1800+3*e.spacing.unit*2),{width:1800,marginLeft:"auto",marginRight:"auto"}),editor:{marginTop:0,margin:"".concat(e.spacing.unit,"px auto")},tcollection:{flexGrow:1}}})(function(e){var t=e.classes,a=yt.searchparams().search;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null),r.a.createElement(ke,{position:"static"}),r.a.createElement("main",{className:t.layout},r.a.createElement(V.a,{container:!0,className:t.root,spacing:24},r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:3}),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:6},r.a.createElement(rt,{className:t.tcollection,sourceAPI:function(){return U.search(a)}})),r.a.createElement(V.a,{item:!0,xs:4,md:4,lg:3}))))}),xt=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={status:{test_id:0,user_count:0,follow_count:0,tweet_count:0}},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;return fetch("/api/status").then(function(e){return e.json()}).then(function(t){e.setState({status:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.status;return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Test User ID: ",e.test_id),r.a.createElement("li",null,"User Count: ",e.user_count),r.a.createElement("li",null,"Follow Count: ",e.follow_count),r.a.createElement("li",null,"Tweet Count: ",e.tweet_count)))}}]),t}(r.a.Component),jt=Object(u.a)();function kt(e){var t=e.component,a=Object(o.a)(e,["component"]);return r.a.createElement(s.a,Object.assign({},a,{render:function(e){return p.isLoggedIn()?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var St=function(){return console.log(jt),r.a.createElement(c.a,{history:jt},r.a.createElement("div",null,r.a.createElement(kt,{exact:!0,path:"/",component:bt}),r.a.createElement(kt,{path:"/u/:username",component:wt}),r.a.createElement(kt,{path:"/search",component:Ot}),r.a.createElement(s.a,{path:"/login",component:J}),r.a.createElement(s.a,{path:"/register",component:H}),r.a.createElement(s.a,{path:"/test/status",component:xt})))};l.a.render(r.a.createElement(St,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.f409d656.chunk.js.map