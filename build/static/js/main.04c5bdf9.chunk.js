(this.webpackJsonpreact4games=this.webpackJsonpreact4games||[]).push([[0],[,,,,,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a,i,o=n(0),r=n.n(o),s=n(3),c=n.n(s);n(11),n(12);!function(t){t.LEFT="ArrowLeft",t.RIGHT="ArrowRight",t.UP="ArrowUp",t.DOWN="ArrowDown"}(a||(a={})),function(t){t.HERO="hero",t.ENEMY="enemy"}(i||(i={}));var u,l=n(1);!function(t){t[t.FLOOR=0]="FLOOR",t[t.WALL=1]="WALL",t[t.DOOR=2]="DOOR",t[t.TRAP=3]="TRAP",t[t.MINIDEMON=4]="MINIDEMON",t[t.DEMON=5]="DEMON",t[t.CHEST=6]="CHEST",t[t.HERO=7]="HERO"}(u||(u={}));var d=u.FLOOR,p=u.WALL,O=u.DOOR,v=u.TRAP,f=u.MINIDEMON,h=u.DEMON,E=u.CHEST,m=[[p,p,p,p,p,p,p,p,p,p,p,p,p,O,O,p,p,p,p,p],[p,p,p,p,p,p,p,p,p,p,p,p,p,O,O,p,p,p,p,p],[p,d,d,p,d,d,d,d,p,d,d,d,d,d,d,d,p,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,v,d,d,d,d,E,d,d,d,d,d,d,d,f,d,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,d,d,v,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,f,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,d,d,d,h,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,f,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,E,d,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,d,d,d,v,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,u.HERO,d,d,d,d,d,d,d,d,d,d,d,d,d,d,v,d,d,p],[p,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,p],[p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p]];function x(t,e){var n=m[t.y][t.x];return e===i.HERO?function(t){return{valid:t===u.FLOOR||t===u.CHEST||t===u.TRAP||t===u.MINIDEMON||t===u.DEMON,dead:t===u.TRAP||t===u.MINIDEMON||t===u.DEMON,chest:t===u.CHEST,door:t===u.DOOR}}(n):function(t){return{valid:t===u.FLOOR||t===u.HERO,dead:t===u.HERO,chest:!1,door:!1}}(n)}var R=r.a.createContext({canvas:[],updateCanvas:function(t,e,n){return null}});var g=function(t){var e=r.a.useState({canvas:m,updateCanvas:function(t,e,n){var i=function(t,e){switch(t){case a.LEFT:return{x:e.x-1,y:e.y};case a.RIGHT:return{x:e.x+1,y:e.y};case a.DOWN:return{x:e.x,y:e.y+1};case a.UP:return{x:e.x,y:e.y-1}}}(t,e),r=x(i,n);return r.valid&&o((function(t){var n=Object.assign([],t.canvas),a=n[e.y][e.x];return n[e.y][e.x]=u.FLOOR,n[i.y][i.x]=a,{canvas:n,updateCanvas:t.updateCanvas}})),{nextPosition:i,nextMove:r}}}),n=Object(l.a)(e,2),i=n[0],o=n[1];return r.a.createElement(R.Provider,{value:i},t.children)},C=(n(13),n(4)),y=r.a.createContext({totalChests:0,openedChests:{total:0,position:[]},updateOpenedChests:function(t){return null}});var P=function(t){var e=r.a.useState({totalChests:2,openedChests:{total:0,position:[]},updateOpenedChests:function(t){i((function(e){return{totalChests:e.totalChests,openedChests:{total:e.openedChests.total+1,position:e.openedChests.position.concat(t)},updateOpenedChests:e.updateOpenedChests}}))}}),n=Object(l.a)(e,2),a=n[0],i=n[1];return r.a.createElement(y.Provider,{value:a},t.children)};var b=function(t){var e=r.a.useContext(R),n=r.a.useContext(y),o=r.a.useState(t),s=Object(l.a)(o,2),c=s[0],u=s[1],d=r.a.useState(a.RIGHT),p=Object(l.a)(d,2),O=p[0],v=p[1];return Object(C.a)("keydown",(function(t){var a=t.key;if(-1!==a.indexOf("Arrow")){var o=e.updateCanvas(a,c,i.HERO),r=o.nextMove,s=o.nextPosition;r.valid&&(u(s),v(a)),r.dead&&(setTimeout((function(){alert("Morreu! \ud83d\udc7b")})),window.location.reload()),r.chest&&n.updateOpenedChests(s),n.totalChests===n.openedChests.total&&r.door&&alert("Venceu! \ud83d\ude80")}})),{position:c,direction:O}},M=function(t){var e=b(t.initialPosition),n=e.position,i=e.direction;return r.a.createElement("div",{style:{position:"absolute",top:48*n.y-12,left:48*n.x,width:48,height:60,backgroundImage:"url(./build/assets/HERO.png)",backgroundRepeat:"no-repeat",backgroundPosition:"0px -".concat(36,"px"),animation:"hero-animation 1s steps(4) infinite",transform:"scaleX(".concat(i===a.RIGHT?1:-1,")"),zIndex:1}})},I=(n(15),n(5));var N=function(t){var e=r.a.useContext(R),n=r.a.useState(t),o=Object(l.a)(n,2),s=o[0],c=o[1],u=r.a.useState(a.RIGHT),d=Object(l.a)(u,2),p=d[0],O=d[1];return Object(I.a)((function(){var t=Math.floor(4*Math.random()),n=Object.values(a)[t],o=e.updateCanvas(n,s,i.ENEMY);o.nextMove.valid&&(O(n),c(o.nextPosition)),o.nextMove.dead&&(alert("voce foi morto!"),window.location.reload())}),2e3),{position:s,direction:p}},H=function(t){var e=N(t.initialPosition);return r.a.createElement("div",{style:{position:"absolute",top:48*e.position.y-12,left:48*e.position.x,width:48,height:60,backgroundImage:"url(./build/assets/MINI-DEMON.png)",backgroundRepeat:"no-repeat",backgroundPosition:"0px -".concat(36,"px"),animation:"mini-demon-animation 1s steps(4) infinite",transform:"scaleX(".concat(e.direction===a.RIGHT?1:-1,")")}})},T=(n(16),function(t){var e=N(t.initialPosition);return r.a.createElement("div",{style:{position:"absolute",top:48*e.position.y,left:48*e.position.x,width:96,height:96,backgroundImage:"url(./build/assets/DEMON.png)",backgroundRepeat:"no-repeat",animation:"demon-animation 1s steps(4) infinite",transform:"scaleX(".concat(e.direction===a.RIGHT?1:-1,")")}})}),w=(n(17),function(t){var e=r.a.useContext(y).openedChests.position.find((function(e){return t.initialPosition.y===e.y&&t.initialPosition.x===e.x}));return r.a.createElement("div",{style:{position:"absolute",top:48*t.initialPosition.y,left:48*t.initialPosition.x,width:48,height:100,backgroundImage:"url(./build/assets/CHEST.png)",backgroundRepeat:"no-repeat",animation:e&&"chest-animation 1s steps(2) forwards"}})}),D=(n(18),function(t){return r.a.createElement("div",{style:{position:"absolute",top:48*t.initialPosition.y,left:48*t.initialPosition.x,width:48,height:100,backgroundImage:"url(./build/assets/TRAP.png)",backgroundRepeat:"no-repeat",animation:"trap-animation 1s steps(8) infinite"}})});var k=function(){for(var t=[],e=0;e<m.length;e++)for(var n=m[e],a=0;a<n.length;a++){var i=n[a],o={x:a,y:e},s=m[e][a]||i,c="".concat(a,"-").concat(e);s===u.TRAP&&t.push(r.a.createElement(D,{key:c,initialPosition:o})),s===u.MINIDEMON&&t.push(r.a.createElement(H,{key:c,initialPosition:o})),s===u.DEMON&&t.push(r.a.createElement(T,{key:c,initialPosition:o})),s===u.CHEST&&t.push(r.a.createElement(w,{key:c,initialPosition:o})),s===u.HERO&&t.push(r.a.createElement(M,{key:c,initialPosition:o}))}return t}(),A=function(){var t=r.a.useContext(y);return r.a.createElement("div",null,k,t.totalChests===t.openedChests.total&&r.a.createElement("img",{src:"./build/assets/DOOR-OPEN.png",alt:"door opened",style:{position:"absolute",top:0,left:"578px"}}),r.a.createElement("img",{src:"./build/assets/tileset.gif",alt:"",width:960,height:960}))};var L=function(){return r.a.createElement(g,null,r.a.createElement(P,null,r.a.createElement(A,null)))};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{position:"relative",width:960,height:960}},r.a.createElement(L,null)))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.04c5bdf9.chunk.js.map