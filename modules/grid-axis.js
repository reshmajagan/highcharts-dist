/*
 Highcharts Gantt JS v7.1.2-modified (2019-07-03)

 GridAxis

 (c) 2016-2019 Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/grid-axis",["highcharts"],function(p){e(p);e.Highcharts=p;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function p(g,e,p,u){g.hasOwnProperty(e)||(g[e]=u.apply(null,p))}e=e?e._modules:{};p(e,"parts-gantt/GridAxis.js",[e["parts/Globals.js"],e["parts/Utilities.js"]],function(g,e){var p=e.isArray,u=e.isNumber,q=g.addEvent,
D=g.dateFormat,t=g.defined,l=function(a){return g.isObject(a,!0)},w=g.merge,x=g.pick,A=g.wrap;e=g.Chart;var f=g.Axis,E=g.Tick,F=function(a){var b=a.options,c=b&&l(b.grid)?b.grid:{},d=25/11,k=a.chart.renderer.fontMetrics(b.labels.style.fontSize);b.labels||(b.labels={});b.labels.align=x(b.labels.align,"center");a.categories||(b.showLastLabel=!1);a.horiz&&(b.tickLength=c.cellHeight||k.h*d);a.labelRotation=0;b.labels.rotation=0},y={top:0,right:1,bottom:2,left:3,0:"top",1:"right",2:"bottom",3:"left"};
f.prototype.isOuterAxis=function(){var a=this,b=a.columnIndex,c=a.linkedParent&&a.linkedParent.columns||a.columns,d=b?a.linkedParent:a,k=-1,h=0;a.chart[a.coll].forEach(function(b,c){b.side!==a.side||b.options.isInternal||(h=c,b===d&&(k=c))});return h===k&&(u(b)?c.length===b:!0)};f.prototype.getMaxLabelDimensions=function(a,b){var c={width:0,height:0};b.forEach(function(b){b=a[b];var d;l(b)&&(d=l(b.label)?b.label:{},b=d.getBBox?d.getBBox().height:0,d.textStr&&!u(d.textPxLength)&&(d.textPxLength=d.getBBox().width),
d=u(d.textPxLength)?d.textPxLength:0,c.height=Math.max(b,c.height),c.width=Math.max(d,c.width))});return c};g.dateFormats.W=function(a){a=new Date(a);var b;a.setHours(0,0,0,0);a.setDate(a.getDate()-(a.getDay()||7));b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};g.dateFormats.E=function(a){return D("%a",a,!0).charAt(0)};q(E,"afterGetLabelPosition",function(a){var b=this.label,c=this.axis,d=c.reversed,k=c.chart,h=c.options,v=h&&l(h.grid)?h.grid:{},h=c.options.labels,B=h.align,
m=y[c.side],n=a.tickmarkOffset,e=c.tickPositions,g=this.pos-n,e=u(e[a.index+1])?e[a.index+1]-n:c.max+n,r=c.tickSize("tick",!0),n=p(r)?r[0]:0,r=r&&r[1]/2,f;!0===v.enabled&&("top"===m?(v=c.top+c.offset,f=v-n):"bottom"===m?(f=k.chartHeight-c.bottom+c.offset,v=f+n):(v=c.top+c.len-c.translate(d?e:g),f=c.top+c.len-c.translate(d?g:e)),"right"===m?(m=k.chartWidth-c.right+c.offset,d=m+n):"left"===m?(d=c.left+c.offset,m=d-n):(m=Math.round(c.left+c.translate(d?e:g))-r,d=Math.round(c.left+c.translate(d?g:e))-
r),this.slotWidth=d-m,a.pos.x="left"===B?m:"right"===B?d:m+(d-m)/2,a.pos.y=f+(v-f)/2,k=k.renderer.fontMetrics(h.style.fontSize,b.element),b=b.getBBox().height,h.useHTML?a.pos.y+=k.b+-(b/2):(b=Math.round(b/k.h),a.pos.y+=(k.b-(k.h-k.f))/2+-((b-1)*k.h/2)),a.pos.x+=c.horiz&&h.x||0)});q(f,"afterTickSize",function(a){var b=this.maxLabelDimensions,c=this.options;!0===(c&&l(c.grid)?c.grid:{}).enabled&&(c=2*Math.abs(this.defaultLeftAxisOptions.labels.x),b=c+(this.horiz?b.height:b.width),p(a.tickSize)?a.tickSize[0]=
b:a.tickSize=[b])});q(f,"afterGetTitlePosition",function(a){var b=this.options;if(!0===(b&&l(b.grid)?b.grid:{}).enabled){var c=this.axisTitle,d=c&&c.getBBox().width,k=this.horiz,h=this.left,e=this.top,g=this.width,m=this.height,n=b.title,b=this.opposite,f=this.offset,z=this.tickSize()||[0],r=n.x||0,p=n.y||0,q=x(n.margin,k?5:10),c=this.chart.renderer.fontMetrics(n.style&&n.style.fontSize,c).f,z=(k?e+m:h)+z[0]/2*(b?-1:1)*(k?1:-1)+(this.side===y.bottom?c:0);a.titlePosition.x=k?h-d/2-q+r:z+(b?g:0)+f+
r;a.titlePosition.y=k?z-(b?m:0)+(b?c:-c)/2+f+p:e-q+p}});A(f.prototype,"unsquish",function(a){var b=this.options;return!0===(b&&l(b.grid)?b.grid:{}).enabled&&this.categories?this.tickInterval:a.apply(this,Array.prototype.slice.call(arguments,1))});q(f,"afterSetOptions",function(a){var b=this.options;a=a.userOptions;var c,d=b&&l(b.grid)?b.grid:{};!0===d.enabled&&(c=w(!0,{className:"highcharts-grid-axis "+(a.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b",
"%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},a),"xAxis"===this.coll&&(t(a.linkedTo)&&!t(a.tickPixelInterval)&&(c.tickPixelInterval=350),t(a.tickPixelInterval)||!t(a.linkedTo)||t(a.tickPositioner)||t(a.tickInterval)||(c.tickPositioner=
function(a,b){var d=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(d){var e,k,h,f,l=c.units;for(f=0;f<l.length;f++)if(l[f][0]===d.unitName){e=f;break}if(l[e][1])return l[e+1]&&(h=l[e+1][0],k=(l[e+1][1]||[1])[0]),d=g.timeUnits[h],this.tickInterval=d*k,this.getTimeTicks({unitRange:d,count:k,unitName:h},a,b,this.options.startOfWeek)}})),w(!0,this.options,c),this.horiz&&(b.minPadding=x(a.minPadding,0),b.maxPadding=x(a.maxPadding,0)),u(b.grid.borderWidth)&&
(b.tickWidth=b.lineWidth=d.borderWidth))});q(f,"afterSetAxisTranslation",function(){var a=this.options,b=a&&l(a.grid)?a.grid:{},c=this.tickPositions&&this.tickPositions.info,d=this.userOptions.labels||{};this.horiz&&(!0===b.enabled&&this.series.forEach(function(a){a.options.pointRange=0}),c&&(!1===a.dateTimeLabelFormats[c.unitName].range||1<c.count)&&!t(d.align)&&(a.labels.align="left",t(d.x)||(a.labels.x=3)))});q(f,"trimTicks",function(){var a=this.options,b=a&&l(a.grid)?a.grid:{},c=this.categories,
d=this.tickPositions,e=d[0],h=d[d.length-1],f=this.linkedParent&&this.linkedParent.min||this.min,g=this.linkedParent&&this.linkedParent.max||this.max,m=this.tickInterval;!0!==b.enabled||c||!this.horiz&&!this.isLinked||(e<f&&e+m>f&&!a.startOnTick&&(d[0]=f),h>g&&h-m<g&&!a.endOnTick&&(d[d.length-1]=g))});q(f,"afterRender",function(){var a=this.options,b=a&&l(a.grid)?a.grid:{},c,d,e,h,f,g,m=this.chart.renderer,n=this.horiz;if(!0===b.enabled){b=2*Math.abs(this.defaultLeftAxisOptions.labels.x);this.maxLabelDimensions=
this.getMaxLabelDimensions(this.ticks,this.tickPositions);b=this.maxLabelDimensions.width+b;c=a.lineWidth;this.rightWall&&this.rightWall.destroy();d=this.axisGroup.getBBox();if(this.isOuterAxis()&&this.axisLine&&(n&&(b=d.height-1),c)){d=this.getLinePath(c);f=d.indexOf("M")+1;g=d.indexOf("L")+1;e=d.indexOf("M")+2;h=d.indexOf("L")+2;if(this.side===y.top||this.side===y.left)b=-b;n?(d[e]+=b,d[h]+=b):(d[f]+=b,d[g]+=b);this.axisLineExtra?this.axisLineExtra.animate({d:d}):this.axisLineExtra=m.path(d).attr({stroke:a.lineColor,
"stroke-width":c,zIndex:7}).addClass("highcharts-axis-line").add(this.axisGroup);this.axisLine[this.showAxis?"show":"hide"](!0)}(this.columns||[]).forEach(function(a){a.render()})}});var C={afterGetOffset:function(){(this.columns||[]).forEach(function(a){a.getOffset()})},afterInit:function(){var a=this.chart,b=this.userOptions,c=this.options,c=c&&l(c.grid)?c.grid:{};c.enabled&&(F(this),A(this,"labelFormatter",function(a){var b=this.axis,c=b.tickPositions,d=this.value,e=(b.isLinked?b.linkedParent:
b).series[0],f=d===c[0],c=d===c[c.length-1],e=e&&g.find(e.options.data,function(a){return a[b.isXAxis?"x":"y"]===d});this.isFirst=f;this.isLast=c;this.point=e;return a.call(this)}));if(c.columns)for(var d=this.columns=[],e=this.columnIndex=0;++e<c.columns.length;){var h=w(b,c.columns[c.columns.length-e-1],{linkedTo:0,type:"category"});delete h.grid.columns;h=new f(this.chart,h,!0);h.isColumn=!0;h.columnIndex=e;g.erase(a.axes,h);g.erase(a[this.coll],h);d.push(h)}},afterSetOptions:function(a){a=(a=
a.userOptions)&&l(a.grid)?a.grid:{};var b=a.columns;a.enabled&&b&&w(!0,this.options,b[b.length-1])},afterSetScale:function(){(this.columns||[]).forEach(function(a){a.setScale()})},destroy:function(a){(this.columns||[]).forEach(function(b){b.destroy(a.keepEvents)})},init:function(a){var b=(a=a.userOptions)&&l(a.grid)?a.grid:{};b.enabled&&t(b.borderColor)&&(a.tickColor=a.lineColor=b.borderColor)}};Object.keys(C).forEach(function(a){q(f,a,C[a])});q(e,"afterSetChartSize",function(){this.axes.forEach(function(a){(a.columns||
[]).forEach(function(a){a.setAxisSize();a.setAxisTranslation()})})})});p(e,"masters/modules/grid-axis.src.js",[],function(){})});
//# sourceMappingURL=grid-axis.js.map