/*
 Highcharts Gantt JS v7.1.2-modified (2019-07-03)

 StaticScale

 (c) 2016-2019 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/static-scale",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,c,b,g){a.hasOwnProperty(c)||(a[c]=g.apply(null,b))}a=a?a._modules:{};b(a,"modules/static-scale.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,c){var b=c.isNumber;c=a.Chart;var g=
a.pick;a.addEvent(a.Axis,"afterSetOptions",function(){var a=this.chart.options&&this.chart.options.chart;!this.horiz&&b(this.options.staticScale)&&(!a.height||a.scrollablePlotArea&&a.scrollablePlotArea.minHeight)&&(this.staticScale=this.options.staticScale)});c.prototype.adjustHeight=function(){"adjustHeight"!==this.redrawTrigger&&((this.axes||[]).forEach(function(b){var d=b.chart,c=!!d.initiatedScale&&d.options.animation,e=b.options.staticScale,f;b.staticScale&&a.defined(b.min)&&(f=g(b.unitLength,
b.max+b.tickInterval-b.min)*e,f=Math.max(f,e),e=f-d.plotHeight,1<=Math.abs(e)&&(d.plotHeight=f,d.redrawTrigger="adjustHeight",d.setSize(void 0,d.chartHeight+e,c)),b.series.forEach(function(a){(a=a.sharedClipKey&&d[a.sharedClipKey])&&a.attr({height:d.plotHeight})}))}),this.initiatedScale=!0);this.redrawTrigger=null};a.addEvent(c,"render",c.prototype.adjustHeight)});b(a,"masters/modules/static-scale.src.js",[],function(){})});
//# sourceMappingURL=static-scale.js.map