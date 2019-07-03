/*
 Highstock JS v7.1.2-modified (2019-07-03)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/bollinger-bands",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,g,c,n){a.hasOwnProperty(g)||(a[g]=n.apply(null,c))}a=a?a._modules:{};c(a,"mixins/multipe-lines.js",[a["parts/Globals.js"]],function(a){var g=a.each,c=a.merge,n=a.error,
m=a.defined,p=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(b){var a=[];g(this.pointArrayMap,function(d){d!==b&&a.push("plot"+d.charAt(0).toUpperCase()+d.slice(1))});return a},toYData:function(b){var a=[];g(this.pointArrayMap,function(d){a.push(b[d])});return a},translate:function(){var b=this,a=b.pointArrayMap,d=[],c,d=b.getTranslatedLinesNames();p.prototype.translate.apply(b,arguments);g(b.points,function(h){g(a,
function(a,g){c=h[a];null!==c&&(h[d[g]]=b.yAxis.toPixels(c,!0))})})},drawGraph:function(){var a=this,A=a.linesApiNames,d=a.points,u=d.length,h=a.options,B=a.graph,r={options:{gapSize:h.gapSize}},f=[],k=a.getTranslatedLinesNames(a.pointValKey),e;g(k,function(a,b){for(f[b]=[];u--;)e=d[u],f[b].push({x:e.x,plotX:e.plotX,plotY:e[a],isNull:!m(e[a])});u=d.length});g(A,function(b,d){f[d]?(a.points=f[d],h[b]?a.options=c(h[b].styles,r):n('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),
a.graph=a["graph"+b],p.prototype.drawGraph.call(a),a["graph"+b]=a.graph):n('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=d;a.options=h;a.graph=B;p.prototype.drawGraph.call(a)}}});c(a,"indicators/bollinger-bands.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"],a["mixins/multipe-lines.js"]],function(a,c,z){var g=c.isArray,m=a.merge,p=a.seriesTypes.sma;a.seriesType("bb","sma",{params:{period:20,standardDeviation:2,
index:3},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e\x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eTop: {point.top}\x3cbr/\x3eMiddle: {point.middle}\x3cbr/\x3eBottom: {point.bottom}\x3cbr/\x3e'},marker:{enabled:!1},dataGrouping:{approximation:"averages"}},a.merge(z,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameComponents:["period","standardDeviation"],
linesApiNames:["topLine","bottomLine"],init:function(){p.prototype.init.apply(this,arguments);this.options=m({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,c){var d=c.period,b=c.standardDeviation,h=a.xData,n=(a=a.yData)?a.length:0,r=[],f,k,e,q,m=[],w=[],x,l;if(h.length<d)return!1;x=g(a[0]);for(l=d;l<=n;l++){q=h.slice(l-d,l);k=a.slice(l-d,l);f=p.prototype.getValues.call(this,{xData:q,yData:k},c);q=f.xData[0];f=f.yData[0];e=0;
for(var y=k.length,t=0,v;t<y;t++)v=(x?k[t][c.index]:k[t])-f,e+=v*v;e=Math.sqrt(e/(y-1));k=f+b*e;e=f-b*e;r.push([q,k,f,e]);m.push(q);w.push([k,f,e])}return{values:r,xData:m,yData:w}}}))});c(a,"masters/indicators/bollinger-bands.src.js",[],function(){})});
//# sourceMappingURL=bollinger-bands.js.map