(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a(18)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(6),o=a.n(c),i=(a(13),a(14),a(7)),s=a(1),p=a(2),l=a(4),m=a(3),u=(a(15),function(e){Object(l.a)(a,e);var n=Object(m.a)(a);function a(){return Object(s.a)(this,a),n.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e,n=this.props,a="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=n.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},n.name),r.a.createElement("div",{className:"Pokecard-img"},r.a.createElement("img",{src:a,alt:"props.name"})),r.a.createElement("div",{className:"Pokecard-data"},"TYPE: ",n.type),r.a.createElement("div",{className:"Pokecard-data"},"EXP: ",n.exp))}}]),a}(r.a.Component)),d=(a(16),function(e){Object(l.a)(a,e);var n=Object(m.a)(a);function a(){return Object(s.a)(this,a),n.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-Winner"},"Winning Hand"):r.a.createElement("h1",{className:"Pokedex-Loser"},"Losing Hand"),r.a.createElement("div",{className:"Pokedex"},e,r.a.createElement("h4",null,"Total Experience:",this.props.exp),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}}]),a}(r.a.Component)),h=(a(17),function(e){Object(l.a)(a,e);var n=Object(m.a)(a);function a(){return Object(s.a)(this,a),n.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){for(var e=[],n=Object(i.a)(this.props.pokemon);e.length<n.length;){var a=Math.floor(Math.random()*n.length),t=n.splice(a,1)[0];e.push(t)}var c=e.reduce((function(e,n){return e+n.base_experience}),0),o=n.reduce((function(e,n){return e+n.base_experience}),0);return console.log(e),console.log(n),r.a.createElement("div",null,r.a.createElement(d,{pokemon:e,exp:c,isWinner:c>o}),r.a.createElement(d,{pokemon:n,exp:o,isWinner:c<o}))}}]),a}(r.a.Component));h.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var f=h;var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.bf0933e3.chunk.js.map