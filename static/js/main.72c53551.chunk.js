(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),r=a.n(c),i=(a(22),a(12)),u=a(13),l=a(16),s=a(15),h=a(14),m=a.n(h),d=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getNewQuote=function(){n.getQuote()},n.state={quote:"",author:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var e=this;m.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){var a=t.data.quotes,n=a[Math.floor(Math.random()*a.length)];console.log(n),e.setState({quote:n.quote,author:n.author})}))}},{key:"render",value:function(){var e=this.state.quote,t=this.state.author;return o.a.createElement("div",{id:"wrapper"},o.a.createElement("h1",{className:"title"},"Random Quote Machine"),o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{id:"text"},o.a.createElement("p",null,e)),o.a.createElement("div",{id:"author"},o.a.createElement("h5",null,t)),o.a.createElement("div",{id:"buttons"},o.a.createElement("a",{id:"tweet-quote",href:'https://twitter.com/intent/tweet?text="'.concat(e,'"   ').concat(t),target:"_blank",title:"Post this quote on twitter!"},o.a.createElement("span",null,o.a.createElement("i",{className:"fab fa-twitter twiiter-icon"}))),o.a.createElement("button",{className:"buttons",id:"new-quote",onClick:this.getNewQuote},"New Quote"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.72c53551.chunk.js.map