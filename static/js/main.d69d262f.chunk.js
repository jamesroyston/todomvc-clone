(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),l=n.n(o),i=(n(16),n(1)),r=n(2),s=n(5),u=n(3),d=n(4),m=(n(17),n(7)),h=n(6),p=(n(18),function(e){return c.a.createElement("td",{className:"TodoItem"},c.a.createElement("span",{className:"circle-loader",onClick:e.markDone},c.a.createElement("div",{className:e.children.complete?"checkmark draw":""})),c.a.createElement("span",{className:e.children.complete?"content complete":"content",onDoubleClick:e.update},e.children.desc))}),b=(n(19),function(e){return c.a.createElement("form",{id:"input",className:"form",onSubmit:e.handleSubmit},c.a.createElement("input",{type:"text",placeholder:"what needs doing?",className:"InputField",onChange:e.handleChange}))}),f=(n(20),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.clearInputField=n.clearInputField.bind(Object(h.a)(n)),n.state={todos:[{desc:"do laundry",complete:!1,id:1,classList:"",edit:!1},{desc:"budget",complete:!0,id:2,classList:"",edit:!1},{desc:"water the plants",complete:!0,id:3,classList:"",edit:!1}]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"clearInputField",value:function(){document.getElementById("input").reset(),this.setState({newTodo:""})}},{key:"update",value:function(e){console.log("update",e)}},{key:"markDone",value:function(e){var t=Object(m.a)(this.state.todos);t=t.filter(function(n){return n.id===e&&(n.complete=!n.complete),t}),this.setState({todos:Object(m.a)(t)})}},{key:"handleChange",value:function(e){this.setState({newTodo:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.todos.length;this.setState({todos:[].concat(Object(m.a)(this.state.todos),[{desc:this.state.newTodo,complete:!1,id:t+1}])}),this.clearInputField()}},{key:"render",value:function(){var e,t=this;return e=this.state.todos.map(function(e){return c.a.createElement(p,{markDone:t.markDone.bind(t,e.id),update:t.update.bind(t,e.id),key:e.id.toString(),id:e.id},e)}),c.a.createElement("div",null,c.a.createElement(b,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),c.a.createElement("table",{className:"TodoList"},c.a.createElement("tbody",null,c.a.createElement("tr",null,e))))}}]),t}(a.Component)),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"Header"},c.a.createElement("em",null,"Todos")))}}]),t}(a.Component),v=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("a",{href:"https://jamesroyston.dev"},"portfolio")," | ",c.a.createElement("a",{href:"https://github.com/jamesroyston"},"github"))}}]),t}(a.Component)),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(f,null),c.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.d69d262f.chunk.js.map