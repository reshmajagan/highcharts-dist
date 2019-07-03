/*
 Highstock JS v7.1.2-modified (2019-07-03)

 Indicator series type for Highstock

 (c) 2010-2019 Kamil Kulig

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/regressions",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,c,n,b){a.hasOwnProperty(c)||(a[c]=b.apply(null,n))}a=a?a._modules:{};c(a,"indicators/regressions.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,c){var n=
c.isArray;a=a.seriesType;a("linearRegression","sma",{params:{xAxisUnit:void 0},tooltip:{valueDecimals:4}},{nameBase:"Linear Regression Indicator",getRegressionLineParameters:function(b,a){var p=this.options.params.index,d=function(b,a){return n(b)?b[a]:b},e=b.reduce(function(b,a){return a+b},0),f=a.reduce(function(b,a){return d(a,p)+b},0),e=e/b.length,f=f/a.length,g,c,h=0,k=0,l;for(l=0;l<b.length;l++)g=b[l]-e,c=d(a[l],p)-f,h+=g*c,k+=Math.pow(g,2);b=k?h/k:0;return{slope:b,intercept:f-b*e}},getEndPointY:function(b,
a){return b.slope*a+b.intercept},transformXData:function(b,a){var e=b[0];return b.map(function(b){return(b-e)/a})},findClosestDistance:function(b){var a,c,d;for(d=1;d<b.length-1;d++)a=b[d]-b[d-1],0<a&&(void 0===c||a<c)&&(c=a);return c},getValues:function(a,c){var b=a.xData;a=a.yData;c=c.period;var d,e,f,g,m={xData:[],yData:[],values:[]},h,k=this.options.params.xAxisUnit||this.findClosestDistance(b);for(e=c-1;e<=b.length-1;e++)f=e-c+1,g=e+1,h=b[e],d=b.slice(f,g),f=a.slice(f,g),g=this.transformXData(d,
k),d=this.getRegressionLineParameters(g,f),f=this.getEndPointY(d,g[g.length-1]),m.values.push({regressionLineParameters:d,x:h,y:f}),m.xData.push(h),m.yData.push(f);return m}});a("linearRegressionSlope","linearRegression",{},{nameBase:"Linear Regression Slope Indicator",getEndPointY:function(a){return a.slope}});a("linearRegressionIntercept","linearRegression",{},{nameBase:"Linear Regression Intercept Indicator",getEndPointY:function(a){return a.intercept}});a("linearRegressionAngle","linearRegression",
{tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e{series.name}: \x3cb\x3e{point.y}\u00b0\x3c/b\x3e\x3cbr/\x3e'}},{nameBase:"Linear Regression Angle Indicator",slopeToAngle:function(a){return 180/Math.PI*Math.atan(a)},getEndPointY:function(a){return this.slopeToAngle(a.slope)}})});c(a,"masters/indicators/regressions.src.js",[],function(){})});
//# sourceMappingURL=regressions.js.map