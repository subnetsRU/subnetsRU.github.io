(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{34:function(e,a,t){e.exports=t(74)},39:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),r=t(6),d=t.n(r),n=(t(39),t(23)),i=t(24),l=t(33),o=t(32),m=t(31),u=(t(73),"./cards/blank.png"),p=[],f={dialer:{},table:{},user:{}},h=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={commandString:"HEY!",test:"",cards:f},s}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;function a(e){var a=e.map((function(e){return c.a.createElement("li",{key:parseInt((new Date).getTime()/1e3)+"."+(new Date).getMilliseconds()},JSON.stringify(e))}));return c.a.createElement("ul",null,a)}var t,s,r={},d={},n=(t=function(){return r},s=function(){return d},Object(m.a)({getState:t,getRecoveryState:s}));n.on("start",(function(){console.log("start"),p.push({state:"ready"}),e.setState({commandString:a(p),test:""})})),n.on("data",(function(a){console.log("command: ".concat(JSON.stringify(a))),p.push(a),console.log("memory",p),"undefined"!=typeof a.smart_app_data&&(f=Object.assign({},e.state.cards),"undefined"!=typeof a.smart_app_data.dialer&&(f.dialer=a.smart_app_data.dialer,console.log("cards.dialer",f.dialer)),"undefined"!=typeof a.smart_app_data.table&&(f.table=a.smart_app_data.table,console.log("cards.table",f.table)),"undefined"!=typeof a.smart_app_data.table&&(f.table=a.smart_app_data.table,console.log("cards.table",f.table)),"undefined"!=typeof a.smart_app_data.user&&(f.user=a.smart_app_data.user),e.setState({cards:f}),console.log("this: cards",e.state.cards),console.log("cards",f))}))}},{key:"render",value:function(){return c.a.createElement("div",{id:"wrapper"},c.a.createElement("div",{id:"cards"},c.a.createElement("div",{className:"dialer_cards"},c.a.createElement("div",{id:"dialer_card_1",className:"undefined"!=typeof this.state.cards.dialer.c1?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.dialer.c1?"./cards/"+this.state.cards.dialer.c1+".png":u})),c.a.createElement("div",{id:"dialer_card_2",className:"undefined"!=typeof this.state.cards.dialer.c2?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.dialer.c2?"./cards/"+this.state.cards.dialer.c2+".png":u}))),c.a.createElement("div",{className:"table_cards"},c.a.createElement("div",{id:"table_card_1",className:"undefined"!=typeof this.state.cards.table.c1?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.table.c1?"./cards/"+this.state.cards.table.c1+".png":u})),c.a.createElement("div",{id:"table_card_2",className:"undefined"!=typeof this.state.cards.table.c2?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.table.c2?"./cards/"+this.state.cards.table.c2+".png":u})),c.a.createElement("div",{id:"table_card_3",className:"undefined"!=typeof this.state.cards.table.c3?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.table.c3?"./cards/"+this.state.cards.table.c3+".png":u})),c.a.createElement("div",{id:"table_card_4",className:"undefined"!=typeof this.state.cards.table.c4?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.table.c4?"./cards/"+this.state.cards.table.c4+".png":u})),c.a.createElement("div",{id:"table_card_5",className:"undefined"!=typeof this.state.cards.table.c5?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.table.c5?"./cards/"+this.state.cards.table.c5+".png":u}))),c.a.createElement("div",{className:"user_cards"},c.a.createElement("div",{id:"user_card_1",className:"undefined"!=typeof this.state.cards.user.c1?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.user.c1?"./cards/"+this.state.cards.user.c1+".png":u})),c.a.createElement("div",{id:"user_card_2",className:"undefined"!=typeof this.state.cards.user.c2?"card":"card notvis"},c.a.createElement("img",{alt:"card",src:"undefined"!=typeof this.state.cards.user.c2?"./cards/"+this.state.cards.user.c2+".png":u})))),c.a.createElement("div",{id:"messages"}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2f6976bb.chunk.js.map