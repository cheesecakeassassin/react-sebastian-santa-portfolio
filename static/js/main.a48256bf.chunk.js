(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),s=(t(14),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),h=t(6),p=["I am Sebastian Santa.","Yo soy Sebasti\xe1n Santa.","\u79c1\u306f\u30bb\u30d0\u30b9\u30c1\u30e3\u30f3\u3067\u3059\u3002"],d=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={index:0,interval:0},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=250*p[this.state.index].length,t=setInterval(function(){e.setState(function(e){return Object(h.a)({},e,{index:e.index+1<p.length?e.index+1:0})})},a);this.setState(function(e){return Object(h.a)({},e,{interval:t})})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval)}},{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#skills"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("div",{className:"typewriter"},l.a.createElement("h1",{key:p[this.state.index]},p[this.state.index])),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,". ",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"lichess"===e.name?l.a.createElement("svg",{className:e.className,viewBox:"-0.692 0.5 51.573 52.285",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},l.a.createElement("path",{d:"M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084S-.506 27.392 4.683 17.567C9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z",strokeLinejoin:"round"})):l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"four columns",style:{paddingTop:"50px"}},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"eight columns main-col"},l.a.createElement("h2",null,"About Me"," ",l.a.createElement("span",{role:"img","aria-label":"palm tree"},"\ud83c\udf34")),l.a.createElement("p",null,"I'm currently a senior at Florida International University and pursuing my Bachelor's in Computer Science for the end of Fall 2022. I'm a recent Full-Stack Web Development graduate from Rutgers Coding Bootcamp. American-born but also proud of my Colombian ancestry!"),l.a.createElement("p",null,"Skills in Java, Kotlin, Python, C#, C, JavaScript, React.js, Vue 3, object-oriented programming, and Scrum development and strengths in adapting to new frameworks and languages. Passionate about writing clean code, debugging applications, and innovating solutions with outside-the-box thinking."),l.a.createElement("p",null,"Find out more below!"))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"skills"},l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",null,l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",null),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any inquires!"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email:",l.a.createElement("a",{href:"mailto:santa.sebastian@outlook.com"}," santa.sebastian@outlook.com")),l.a.createElement("h4",null,"Phone #: ",l.a.createElement("a",{href:"tel:786-566-3177",cm_dontconvertlink:!0},"(786)566-3177"))))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"lichess"===e.name?l.a.createElement("svg",{className:e.className,viewBox:"-0.692 0.5 51.573 52.285",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22"},l.a.createElement("path",{d:"M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084S-.506 27.392 4.683 17.567C9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z",stroke:"#525252",fill:"#525252","stroke-linejoin":"round"})):l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),k={imagebaseurl:"https://sebastiansanta.dev/",name:"Sebastian Santa",role:"Software Engineer",twitterid:"cheesecakesanta",roleDescription:"I love learning about new technologies and challenging myself every day. When I'm not coding, I'm either playing guitar, piano, or chess!",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sebastian-santa/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/cheesecakeassassin",className:"fa fa-github"},{name:"lichess",url:"https://lichess.org/@/cheesecake_assassin",className:"lichess"}],skillsDescription:"Skills I've obtained over the years",skills:[{skillname:"Java"},{skillname:"Python"},{skillname:"C"}],portfolio:[{name:"Project 1",description:"Android App",imgurl:"images/portfolio/origami.jpg"},{name:"Project 2",description:"React.js Web App",imgurl:"images/portfolio/console.jpg"},{name:"Project 3",description:"Vue 3 App",imgurl:"images/portfolio/coffee.jpg"},{name:"Project 4",description:"Python Flask API",imgurl:"images/portfolio/retrocam.jpg"}]},w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:k}),l.a.createElement(E,{resumeData:k}),l.a.createElement(f,{resumeData:k}),l.a.createElement(v,{resumeData:k}),l.a.createElement(b,{resumeData:k}),l.a.createElement(g,{resumeData:k}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.a48256bf.chunk.js.map