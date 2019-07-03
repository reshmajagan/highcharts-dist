/*
 Highcharts JS v7.1.2-modified (2019-07-03)

 Bullet graph series type for Highcharts

 (c) 2010-2019 Kacper Madej

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/bullet",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,k,b,l){a.hasOwnProperty(k)||(a[k]=l.apply(null,b))}a=a?a._modules:{};b(a,"modules/bullet.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,b){var p=b.isNumber,l=a.pick,k=a.relativeLength;
b=a.seriesType;var g=a.seriesTypes.column.prototype;b("bullet","column",{targetOptions:{width:"140%",height:3,borderWidth:0},tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e. Target: \x3cb\x3e{point.target}\x3c/b\x3e\x3cbr/\x3e'}},{pointArrayMap:["y","target"],parallelArrays:["x","y","target"],drawPoints:function(){var c=this,b=c.chart,r=c.options,v=r.animationLimit||250;g.drawPoints.apply(this);c.points.forEach(function(d){var g=
d.options,h,e=d.targetGraphic,m=d.target,n=d.y,q,t,f,u;p(m)&&null!==m?(f=a.merge(r.targetOptions,g.targetOptions),t=f.height,h=d.shapeArgs,q=k(f.width,h.width),u=c.yAxis.translate(m,!1,!0,!1,!0)-f.height/2-.5,h=c.crispCol.apply({chart:b,borderWidth:f.borderWidth,options:{crisp:r.crisp}},[h.x+h.width/2-q/2,u,q,t]),e?(e[b.pointCount<v?"animate":"attr"](h),p(n)&&null!==n?e.element.point=d:e.element.point=void 0):d.targetGraphic=e=b.renderer.rect().attr(h).add(c.group),b.styledMode||e.attr({fill:l(f.color,
g.color,c.zones.length&&(d.getZone.call({series:c,x:d.x,y:m,options:{}}).color||c.color)||void 0,d.color,c.color),stroke:l(f.borderColor,d.borderColor,c.options.borderColor),"stroke-width":f.borderWidth}),p(n)&&null!==n&&(e.element.point=d),e.addClass(d.getClassName()+" highcharts-bullet-target",!0)):e&&(d.targetGraphic=e.destroy())})},getExtremes:function(a){var b=this.targetData,c;g.getExtremes.call(this,a);b&&b.length&&(a=this.dataMax,c=this.dataMin,g.getExtremes.call(this,b),this.dataMax=Math.max(this.dataMax,
a),this.dataMin=Math.min(this.dataMin,c))}},{destroy:function(){this.targetGraphic&&(this.targetGraphic=this.targetGraphic.destroy());g.pointClass.prototype.destroy.apply(this,arguments)}})});b(a,"masters/modules/bullet.src.js",[],function(){})});
//# sourceMappingURL=bullet.js.map