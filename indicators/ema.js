/*
 Highstock JS v7.1.2-modified (2019-07-03)

 Indicator series type for Highstock

 (c) 2010-2019 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/ema",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,g,b,h){a.hasOwnProperty(g)||(a[g]=h.apply(null,b))}a=a?a._modules:{};b(a,"indicators/ema.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,b){var g=b.isArray;
b=a.seriesType;var h=a.correctFloat;b("ema","sma",{params:{index:3,period:9}},{accumulatePeriodPoints:function(a,l,c){for(var b=0,d=0,e;d<a;)e=0>l?c[d]:c[d][l],b+=e,d++;return b},calculateEma:function(a,b,c,k,m,e,g){a=a[c-1];b=0>e?b[c-1]:b[c-1][e];k=void 0===m?g:h(b*k+m*(1-k));return[a,k]},getValues:function(a,b){var c=b.period,k=a.xData,m=(a=a.yData)?a.length:0,e=2/(c+1),d=[],h=[],l=[],n=-1,f;if(m<c)return!1;g(a[0])&&(n=b.index?b.index:0);for(b=this.accumulatePeriodPoints(c,n,a)/c;c<m+1;c++)f=this.calculateEma(k,
a,c,e,f,n,b),d.push(f),h.push(f[0]),l.push(f[1]),f=f[1];return{values:d,xData:h,yData:l}}})});b(a,"masters/indicators/ema.src.js",[],function(){})});
//# sourceMappingURL=ema.js.map