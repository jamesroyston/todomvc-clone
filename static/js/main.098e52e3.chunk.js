(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),l=n.n(o),i=(n(16),n(1)),r=n(2),s=n(5),u=n(3),d=n(4),h=(n(17),n(7)),m=n(6),b=(n(18),function(e){return c.a.createElement("td",{className:"TodoItem"},c.a.createElement("span",{onClick:e.handleDelete,className:"deleteButton"}),c.a.createElement("span",{className:"content"},e.children.desc))}),p=(n(19),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",placeholder:"what needs doing?",className:"InputField",onChange:e.handleChange}))}),f=(n(20),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.clearInputField=n.clearInputField.bind(Object(m.a)(n)),n.handleDelete=n.handleDelete.bind(Object(m.a)(n)),n.state={todos:[{desc:"do laundry",complete:!1,id:3},{desc:"budget",complete:!1,id:2},{desc:"water the plants",complete:!1,id:1}]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"clearInputField",value:function(){document.getElementById("input").reset(),this.setState({newTodo:""})}},{key:"handleDelete",value:function(){var e=Object(h.a)(this.state.todos);e=e.id.indexOf(this.id).splice(),this.setState({todos:Object(h.a)(e)})}},{key:"handleChange",value:function(e){this.setState({newTodo:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.todos.length;this.setState({todos:[{desc:this.state.newTodo,complete:!1,id:t+1}].concat(Object(h.a)(this.state.todos))}),this.clearInputField()}},{key:"render",value:function(){var e,t=this;return e=this.state.todos.map(function(e){return c.a.createElement(b,{onClick:t.handleDelete,key:e.id.toString()},e)}),c.a.createElement("div",null,c.a.createElement("form",{id:"input",className:"form",onSubmit:this.handleSubmit},c.a.createElement(p,{handleChange:this.handleChange})),c.a.createElement("table",{className:"TodoList"},c.a.createElement("tbody",null,c.a.createElement("tr",null,e))))}}]),t}(a.Component)),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"Header"},"Todo MVC Clone"))}}]),t}(a.Component),O=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("a",{href:"https://jamesroyston.dev"},"see my portfolio")," | ",c.a.createElement("a",{href:"https://github.com/jamesroyston"},"peep that github"))}}]),t}(a.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(f,null),c.a.createElement(O,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.098e52e3.chunk.js.map