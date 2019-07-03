/*
 Highstock JS v7.1.2-modified (2019-07-03)

 Indicator series type for Highstock

 (c) 2010-2019 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define("highcharts/indicators/ichimoku-kinko-hyo",["highcharts","highcharts/modules/stock"],function(n){d(n);d.Highcharts=n;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function n(d,w,n,z){d.hasOwnProperty(w)||(d[w]=z.apply(null,n))}d=d?d._modules:{};n(d,"indicators/ichimoku-kinko-hyo.src.js",[d["parts/Globals.js"],d["parts/Utilities.js"]],
function(d,n){function w(a){return a.reduce(function(a,b){return Math.max(a,b[1])},-Infinity)}function z(a){return a.reduce(function(a,b){return Math.min(a,b[2])},Infinity)}function B(a){return{high:w(a),low:z(a)}}function G(a){var c,b,d,l,k;a.series.forEach(function(a){if(a.xData)for(l=a.xData,k=b=a.xIncrement?1:l.length-1;0<k;k--)if(d=l[k]-l[k-1],c===q||d<c)c=d});return c}function H(a,c,b,d){if(a&&c&&b&&d){var l=c.plotX-a.plotX;c=c.plotY-a.plotY;var k=d.plotX-b.plotX;d=d.plotY-b.plotY;var r=a.plotX-
b.plotX,g=a.plotY-b.plotY;b=(-c*r+l*g)/(-k*c+l*d);k=(k*g-d*r)/(-k*c+l*d);if(0<=b&&1>=b&&0<=k&&1>=k)return{plotX:a.plotX+k*l,plotY:a.plotY+k*c}}return!1}function E(a){var c=a.indicator;c.points=a.points;c.nextPoints=a.nextPoints;c.color=a.color;c.options=C(a.options.senkouSpan.styles,a.gap);c.graph=a.graph;c.fillGraph=!0;y.prototype.drawGraph.call(c)}var I=n.isArray,q;n=d.seriesType;var C=d.merge,D=d.color,F=d.defined,y=d.seriesTypes.sma;d.approximations["ichimoku-averages"]=function(){var a=[],c;
[].forEach.call(arguments,function(b,r){a.push(d.approximations.average(b));c=!c&&void 0===a[r]});return c?void 0:a};n("ikh","sma",{params:{period:26,periodTenkan:9,periodSenkouSpanB:52},marker:{enabled:!1},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eTENKAN SEN: {point.tenkanSen:.3f}\x3cbr/\x3eKIJUN SEN: {point.kijunSen:.3f}\x3cbr/\x3eCHIKOU SPAN: {point.chikouSpan:.3f}\x3cbr/\x3eSENKOU SPAN A: {point.senkouSpanA:.3f}\x3cbr/\x3eSENKOU SPAN B: {point.senkouSpanB:.3f}\x3cbr/\x3e'},
tenkanLine:{styles:{lineWidth:1,lineColor:void 0}},kijunLine:{styles:{lineWidth:1,lineColor:void 0}},chikouLine:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanA:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanB:{styles:{lineWidth:1,lineColor:void 0}},senkouSpan:{styles:{fill:"rgba(255, 0, 0, 0.5)"}},dataGrouping:{approximation:"ichimoku-averages"}},{pointArrayMap:["tenkanSen","kijunSen","chikouSpan","senkouSpanA","senkouSpanB"],pointValKey:"tenkanSen",nameComponents:["periodSenkouSpanB","period",
"periodTenkan"],init:function(){y.prototype.init.apply(this,arguments);this.options=C({tenkanLine:{styles:{lineColor:this.color}},kijunLine:{styles:{lineColor:this.color}},chikouLine:{styles:{lineColor:this.color}},senkouSpanA:{styles:{lineColor:this.color,fill:D(this.color).setOpacity(.5).get()}},senkouSpanB:{styles:{lineColor:this.color,fill:D(this.color).setOpacity(.5).get()}},senkouSpan:{styles:{fill:D(this.color).setOpacity(.2).get()}}},this.options)},toYData:function(a){return[a.tenkanSen,a.kijunSen,
a.chikouSpan,a.senkouSpanA,a.senkouSpanB]},translate:function(){var a=this;y.prototype.translate.apply(a);a.points.forEach(function(c){a.pointArrayMap.forEach(function(b){F(c[b])&&(c["plot"+b]=a.yAxis.toPixels(c[b],!0),c.plotY=c["plot"+b],c.tooltipPos=[c.plotX,c["plot"+b]],c.isNull=!1)})})},drawGraph:function(){var a=this,c=a.points,b=c.length,r=a.options,l=a.graph,k=a.color,n={options:{gapSize:r.gapSize}},g=a.pointArrayMap.length,p=[[],[],[],[],[],[]],m={tenkanLine:p[0],kijunLine:p[1],chikouLine:p[2],
senkouSpanA:p[3],senkouSpanB:p[4],senkouSpan:p[5]},x=[],f=a.options.senkouSpan,t=f.color||f.styles.fill,u=f.negativeColor,e=[[],[]],q=[[],[]],w=0,h,v,z,A;for(a.ikhMap=m;b--;){h=c[b];for(v=0;v<g;v++)f=a.pointArrayMap[v],F(h[f])&&p[v].push({plotX:h.plotX,plotY:h["plot"+f],isNull:!1});u&&b!==c.length-1&&(f=m.senkouSpanB.length-1,h=H(m.senkouSpanA[f-1],m.senkouSpanA[f],m.senkouSpanB[f-1],m.senkouSpanB[f]),v={plotX:h.plotX,plotY:h.plotY,isNull:!1,intersectPoint:!0},h&&(m.senkouSpanA.splice(f,0,v),m.senkouSpanB.splice(f,
0,v),x.push(f)))}d.objectEach(m,function(b,c){r[c]&&"senkouSpan"!==c&&(a.points=p[w],a.options=C(r[c].styles,n),a.graph=a["graph"+c],a.fillGraph=!1,a.color=k,y.prototype.drawGraph.call(a),a["graph"+c]=a.graph);w++});a.graphCollection&&a.graphCollection.forEach(function(b){a[b].destroy();delete a[b]});a.graphCollection=[];if(u&&m.senkouSpanA[0]&&m.senkouSpanB[0]){x.unshift(0);x.push(m.senkouSpanA.length-1);for(g=0;g<x.length-1;g++){f=x[g];h=x[g+1];b=m.senkouSpanB.slice(f,h+1);f=m.senkouSpanA.slice(f,
h+1);if(1<=Math.floor(b.length/2))if(h=Math.floor(b.length/2),b[h].plotY===f[h].plotY){for(A=v=h=0;A<b.length;A++)h+=b[A].plotY,v+=f[A].plotY;h=h>v?0:1}else h=b[h].plotY>f[h].plotY?0:1;else h=b[0].plotY>f[0].plotY?0:1;e[h]=e[h].concat(b);q[h]=q[h].concat(f)}["graphsenkouSpanColor","graphsenkouSpanNegativeColor"].forEach(function(b,c){e[c].length&&q[c].length&&(z=0===c?t:u,E({indicator:a,points:e[c],nextPoints:q[c],color:z,options:r,gap:n,graph:a[b]}),a[b]=a.graph,a.graphCollection.push(b))})}else E({indicator:a,
points:m.senkouSpanB,nextPoints:m.senkouSpanA,color:t,options:r,gap:n,graph:a.graphsenkouSpan}),a.graphsenkouSpan=a.graph;delete a.nextPoints;delete a.fillGraph;a.points=c;a.options=r;a.graph=l},getGraphPath:function(a){var c,b,d=[];a=a||this.points;if(this.fillGraph&&this.nextPoints){b=y.prototype.getGraphPath.call(this,this.nextPoints);b[0]="L";c=y.prototype.getGraphPath.call(this,a);b=b.slice(0,c.length);for(var l=b.length-1;0<l;l-=3)d.push(b[l-2],b[l-1],b[l]);c=c.concat(d)}else c=y.prototype.getGraphPath.apply(this,
arguments);return c},getValues:function(a,c){var b=c.period,d=c.periodTenkan;c=c.periodSenkouSpanB;var l=a.xData,k=a.yData,n=k&&k.length||0;a=G(a.xAxis);var g=[],p=[],m,x,f,t,u,e,w;if(l.length<=b||!I(k[0])||4!==k[0].length)return!1;m=l[0]-b*a;for(e=0;e<b;e++)p.push(m+e*a);for(e=0;e<n;e++)e>=d&&(f=k.slice(e-d,e),f=B(f),f=(f.high+f.low)/2),e>=b&&(t=k.slice(e-b,e),t=B(t),t=(t.high+t.low)/2,w=(f+t)/2),e>=c&&(u=k.slice(e-c,e),u=B(u),u=(u.high+u.low)/2),m=k[e][3],x=l[e],g[e]===q&&(g[e]=[]),g[e+b]===q&&
(g[e+b]=[]),g[e+b][0]=f,g[e+b][1]=t,g[e+b][2]=q,g[e][2]=m,e<=b&&(g[e+b][3]=q,g[e+b][4]=q),g[e+2*b]===q&&(g[e+2*b]=[]),g[e+2*b][3]=w,g[e+2*b][4]=u,p.push(x);for(e=1;e<=b;e++)p.push(x+e*a);return{values:g,xData:p,yData:g}}})});n(d,"masters/indicators/ichimoku-kinko-hyo.src.js",[],function(){})});
//# sourceMappingURL=ichimoku-kinko-hyo.js.map