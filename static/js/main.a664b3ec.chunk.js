(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,t){e.exports=t(39)},32:function(e,n,t){},33:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),i=t.n(o),c=(t(32),t(33),t(7)),s=t(8),l=t(11),u=t(10),p=t(9),m=t(12),h=t(5),f="CHANGETEMP",d="CHANGESTRAIN";function b(e){return{type:d,name:e}}function C(e){return console.log(e),{type:f,temp:e}}var y=t(1),g=t(24),v=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleChange=function(e){t.props.changeTemp(e)},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=this.props.strain,t=this.props.temperature;return r.a.createElement("div",null,r.a.createElement(g.a,{value:t,min:200,max:500,step:1,onChange:this.handleChange}),r.a.createElement("button",{type:"button",onClick:function(){e.props.changeStrain("Blue Dream")}},"Blue Dream"),r.a.createElement("button",{type:"button",onClick:function(){e.props.changeStrain("Charlotte's Web")}},"Charlotte's Web"),r.a.createElement("button",{type:"button",onClick:function(){e.props.changeStrain("Jack Herer")}},"Jack Herer"),r.a.createElement("button",{type:"button",onClick:function(){e.props.changeStrain("Granddaddy Purple")}},"Granddaddy Purple"),r.a.createElement("button",{type:"button",onClick:function(){e.props.changeStrain("OG Kush")}},"OG Kush"),r.a.createElement("p",null," Active strain: ",n.name," at ",t))}}]),n}(r.a.Component);var E=Object(h.b)(function(e){return{strain:e.strain,temperature:e.temperature}},function(e){return Object(y.b)({changeStrain:b,changeTemp:C},e)})(v);var O=function(e){var n="";return 0===e.length?"nothing":(1===e.length?n=e[0]:2===e.length?n=e.join(" and "):e.length>2&&(n=e.slice(0,-1).join(", ")+", and "+e.slice(-1)),n)},j=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=[],n=[],t=[],a=[],o=this.props.strain.cans,i=this.props.strain.terps,c=this.props.temperature;return Object.keys(o).forEach(function(t){c>=o[t].bp&&(e.push(o[t].name),o[t].effects.forEach(function(e){n.push(e)}))}),Object.keys(i).forEach(function(e){c>=i[e].bp&&(t.push(i[e].name),i[e].effects.forEach(function(e){a.push(e)}))}),r.a.createElement("div",null,r.a.createElement("p",null," At ",c,", you will release the cannabinoids ",O(e)," and feel ",O(n)),r.a.createElement("p",null," You will release the terpenes ",O(t)," and feel ",O(a)))}}]),n}(r.a.Component);var H=Object(h.b)(function(e){return{strain:e.strain,temperature:e.temperature}},function(e){return Object(y.b)({},e)})(j);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"display-2"},"Better Temp Tool"),r.a.createElement("p",null),r.a.createElement("h1",{className:"display-4"},"A prototype tool by Neil to help medical cannabis patients optimize their vaporizer use."),r.a.createElement("p",null),r.a.createElement(E,null),r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=t(23),w={THC:{name:"Tetrahydrocannabidiol",bp:315,effects:["high","heightened senses"]},CBG:{name:"Cannabigerol",bp:428,effects:["reduced intraocular pressure","decreased inflammation"]},CBD:{name:"Cannabidiol",bp:356,effects:["less anxious","less dizzy"]},CBC:{name:"Cannabichromene",bp:428,effects:["less stress","uplifted"]},CBN:{name:"Cannabinol",bp:365,effects:["mentally sharper","more appetite","relaxed"]},"THC-V":{name:"Tetrahydrocannabivarin",bp:428,effects:["reduced intraocular pressure","decreased inflammation"]},"THC-A":{name:"Tetrahydrocannabinolic Acid",bp:315,effects:["less inflamed","less itchy","fewer spasms"]}},k={Linalool:{name:"Linalool",bp:388.4,effects:["less anxious","uplifted"],percentage:2.84},Pienene:{name:"Alpha Pienene",bp:311,effects:["alert","less anxious"],percentage:.72},Myrcene:{name:"Myrcene",bp:331,effects:["sleepy"]},Humulene:{name:"Humulene",bp:223,effects:["less appetite","less inflamed"]},Caryophyllene:{name:"Caryophyllene",bp:266,effects:["pain relief","decreased inflammation","less anxious"]},Limonene:{name:"Limonene",bp:349,effects:["elevated mood","stress relief","relieved heartburn"]}},A={"Charlotte's Web":{name:"Charlotte's Web",cans:[w["CBG-A"],w.CBD,w.THC],terps:[k.Linalool,k.Pienene]},"Blue Dream":{name:"Blue Dream",cans:[w.THC,w["THC-A"],w.CBD,w.CBC],terps:[k.Caryophyllene,k.Humulene,k.Linalool,k.Limonene]},"Granddaddy Purple":{name:"Granddaddy Purple",cans:[w.THC,w.CBD,w["THC-A"],w.CBG],terps:[k.Linalool,k.Pienene,k.Caryophyllene,k.Humulene,k.Myrcene]},"Jack Herer":{name:"Jack Herer",cans:[w.THC,w["THC-A"]],terps:[k.Myrcene,k.Pienene,k.Humulene,k.Limonene]},"OG Kush":{name:"OG Kush",cans:[w.THC,w.CBN,w.CBC,w.CBG],terps:[k.Myrcene,k.Caryophyllene,k.Limonene]}},G=(Object.keys(A),{strain:{name:"No",cans:{"No cannabinoids":{name:"Not a cannabinoid",bp:250,effects:["press one of the buttons","watch the magic happen"]}},terps:{"No Terps":{name:"Not a Terpene",bp:300,effects:["see above","don't forget to bring a towel"]}}},temperature:200}),N=Object(y.c)({strain:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return A[n.name];default:return e}},temperature:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return n.temp;default:return e}}});i.a.render(r.a.createElement(h.a,{store:Object(y.d)(N,G,Object(y.a)(B.a))},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.a664b3ec.chunk.js.map