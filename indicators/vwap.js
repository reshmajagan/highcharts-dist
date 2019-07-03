/*
 Highstock JS v7.1.2-modified (2019-07-03)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Dalek

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/vwap",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,h,b,k){a.hasOwnProperty(h)||(a[h]=k.apply(null,b))}a=a?a._modules:{};b(a,"indicators/vwap.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,b){var h=b.isArray;
b=a.seriesType;b("vwap","sma",{params:{period:30,volumeSeriesID:"volume"}},{getValues:function(b,l){var d=b.chart,e=b.xData;b=b.yData;var k=l.period,m=!0,f;if(!(f=d.get(l.volumeSeriesID)))return a.error("Series "+l.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,d);h(b[0])||(m=!1);return this.calculateVWAPValues(m,e,b,f,k)},calculateVWAPValues:function(a,b,d,e,h){var m=e.yData,f=e.xData.length,c=b.length;e=[];var k=[],l=[],r=[],p=[],g,q,n,f=c<=f?c:f;for(n=c=0;c<f;c++)g=a?(d[c][1]+d[c][2]+
d[c][3])/3:d[c],g*=m[c],g=n?e[c-1]+g:g,q=n?k[c-1]+m[c]:m[c],e.push(g),k.push(q),p.push([b[c],g/q]),l.push(p[c][0]),r.push(p[c][1]),n++,n===h&&(n=0);return{values:p,xData:l,yData:r}}})});b(a,"masters/indicators/vwap.src.js",[],function(){})});
//# sourceMappingURL=vwap.js.map