(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(20),i=a.n(s),o=(a(68),a(10)),c=a(11),l=a(13),p=a(12),m=a(14),u=a(61),h=(a(69),a(5)),d=a(28),f=a.n(d),g=a(29),y=a.n(g),v=a(7),b=a.n(v),w=Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1}})(function(e){var t=e.classes;return n.a.createElement("div",{className:t.root},n.a.createElement(f.a,{position:"fixed"},n.a.createElement(y.a,null,n.a.createElement(b.a,{variant:"h5",color:"secondary",className:t.grow},"Score: ",e.state.score),n.a.createElement(b.a,{variant:"h5",color:"secondary",className:t.grow},"Top Score: ",e.state.topScore))))});var x=Object(h.withStyles)(function(e){return{appBar:{top:"auto",bottom:0,display:"flex",alignItems:"center"},toolbar:{alignItems:"center",justifyContent:"space-between"},root:{flexGrow:1},grow:{flexGrow:1}}})(function(e){var t=e.classes;return n.a.createElement(f.a,{position:"fixed",color:"primary",className:t.appBar},n.a.createElement(y.a,{className:t.toolbar},n.a.createElement(b.a,{variant:"h5",color:"secondary",className:t.grow},e.state.message)))}),O=a(27),S=a(30),C=a.n(S),j=a(41),E=a.n(j),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={elevationVal:2},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement(C.a,{item:!0,xs:3},n.a.createElement(E.a,{className:t.paper,elevation:this.state.elevationVal,onMouseOver:function(){e.setState({elevationVal:20})},onMouseOut:function(){e.setState({elevationVal:2})},onClick:function(){if(e.props.disableClick)return!1;e.props.character.hasClicked?e.props.resetGame():(e.setState({hasClicked:!0}),e.props.turn(e.props.character._id))}},n.a.createElement("img",{className:t.imgCard,alt:this.props.character.image,src:"/images/".concat(this.props.character.image)})))}}]),t}(r.Component),_=Object(h.withStyles)(function(e){return{paper:{padding:"2px",width:"120px",height:"105px",cursor:"pointer",border:"4px solid lightgray"},imgCard:{width:"100%",height:"100%"}}})(k),T=(a(139),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={},a.myRef={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(){for(var e in this.myRef){var t=i.a.findDOMNode(this.myRef[e]).getBoundingClientRect();this.setState(Object(O.a)({},e,t))}}},{key:"componentDidUpdate",value:function(){var e=this,t=function(t){var a=i.a.findDOMNode(e.myRef[t]),r=a.getBoundingClientRect(),n=e.state[t],s=n.left-r.left,o=n.top-r.top;requestAnimationFrame(function(){a.style.transform="translate(".concat(s,"px, ").concat(o,"px)"),a.style.transition="transform 0s",requestAnimationFrame(function(){a.style.transform="",a.style.transition="transform 500ms"})})};for(var a in this.myRef)t(a)}},{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement("div",{className:t.root},n.a.createElement(C.a,{container:!0,spacing:24,direction:"row",justify:"space-around",alignItems:"center",className:this.props.error},this.props.characters.map(function(t){return n.a.createElement(_,{ref:function(a){return e.myRef[t._id]=a},key:t._id,character:t,resetGame:e.props.resetGame,turn:e.props.turn,disableClick:e.props.disableClick})})))}}]),t}(r.Component)),N=Object(h.withStyles)({root:{width:"680px",margin:"5% auto"}})(T),R=function(e,t){var a=0;return function r(){a<t.length&&(e.textContent+=t.charAt(a),a++,setTimeout(r,60))}()},G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).myRef=n.a.createRef(),a.renderText=function(){a.props.state.newGame&&R(a.myRef.current,a.props.state.headerText)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){R(this.myRef.current,this.props.state.headerText)}},{key:"componentDidUpdate",value:function(){this.renderText()}},{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.root},n.a.createElement(b.a,{className:e.text,variant:this.props.state.winText?"h2":"h5"},n.a.createElement("p",{ref:this.myRef,id:"headerText"},this.props.state.winText)))}}]),t}(r.Component),M=Object(h.withStyles)({root:{paddingTop:"60px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px"},text:{color:"#FFFFFF",width:"800px",paddingTop:"40px",textTransform:"uppercase"}})(G),A=a(42),F=a.n(A),B=Object(h.createMuiTheme)({palette:{primary:{main:"#000000"},secondary:{main:"#eeeeee"}},typography:{fontFamily:"Roboto",fontSize:12}}),D=[{_id:1,image:"CL.png"},{_id:2,image:"TL.png"},{_id:3,image:"DT.png"},{_id:4,image:"V.png"},{_id:5,image:"KD.png"},{_id:6,image:"MT.png"},{_id:7,image:"Mel.png"},{_id:8,image:"OT.png"},{_id:9,image:"ES.png"},{_id:10,image:"HS.png"},{_id:11,image:"Ned.png"},{_id:12,image:"RB.png"},{_id:13,image:"JS.png"},{_id:14,image:"CS.png"},{_id:15,image:"PB.png"},{_id:16,image:"SC.png"},{_id:17,image:"SS.png"},{_id:18,image:"AS.png"}],I=function(){return D.filter(function(e,t){return t<12}).map(function(e){return Object(u.a)({},e,{hasClicked:!1})})},V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={headerText:"Click on an image to earn points, but don't click it more than once!",winText:"",message:"",disableClick:!1,error:"",topScore:0,score:0,characters:I()},a.shuffleCards=function(){for(var e,t,r=a.state.characters.slice(),n=r.length;0!==n;)e=Math.floor(Math.random()*n),t=r[n-=1],r[n]=r[e],r[e]=t;a.setState({characters:r})},a.turn=function(e){11===a.state.score?a.setState({winText:"Congratulations!",headerText:"",message:"",topScore:0,newGame:!1,score:0,winState:!0}):(a.setState({error:"",message:"",newGame:!1,score:a.state.score+1,characters:a.state.characters.map(function(t){return t._id===e?(t.hasClicked=!0,t):t})}),a.shuffleCards())},a.resetGame=function(){a.setState({error:"shake",message:"You already clicked this one! Start Over!",topScore:a.state.score>a.state.topScore?a.state.score:a.state.topScore,score:0,disableClick:!1,characters:I()})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(F.a,{theme:B},n.a.createElement(w,{state:this.state}),n.a.createElement(x,{state:this.state}),n.a.createElement(M,{state:this.state}),this.state.winState?n.a.createElement(b.a,{variant:"h5",color:"secondary"},n.a.createElement("p",{className:"winGame"},"YOU WON!")):n.a.createElement(N,{characters:this.state.characters,error:this.state.error,disableClick:this.state.disableClick,shuffleCards:this.shuffleCards,resetGame:this.resetGame,turn:this.turn})))}}]),t}(r.Component);i.a.render(n.a.createElement(V,null),document.getElementById("root"))},63:function(e,t,a){e.exports=a(140)},68:function(e,t,a){},69:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.5f31ece3.chunk.js.map