/*
 Highmaps JS v7.1.2-modified (2019-07-03)

 (c) 2009-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/heatmap",["highcharts"],function(l){c(l);c.Highcharts=l;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function l(b,c,l,g){b.hasOwnProperty(c)||(b[c]=g.apply(null,l))}c=c?c._modules:{};l(c,"parts-map/ColorAxis.js",[c["parts/Globals.js"],c["parts/Utilities.js"]],function(b,c){var l=c.isNumber;c=b.addEvent;var g=b.Axis,
q=b.Chart,m=b.color,n,p=b.extend,e=b.Legend,k=b.LegendSymbolMixin,v=b.noop,u=b.merge,r=b.pick;n=b.ColorAxis=function(){this.init.apply(this,arguments)};p(n.prototype,g.prototype);p(n.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup",
"legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(g.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,h;this.coll="colorAxis";h=this.buildOptions.call(a,this.defaultColorAxisOptions,d);g.prototype.init.call(this,a,h);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,h=0,b=d.options.chart.colorCount,e=this.options,k=a.dataClasses.length;
this.dataClasses=f=[];this.legendItems=[];a.dataClasses.forEach(function(a,t){a=u(a);f.push(a);if(d.styledMode||!a.color)"category"===e.dataClassColor?(d.styledMode||(t=d.options.colors,b=t.length,a.color=t[h]),a.colorIndex=h,h++,h===b&&(h=0)):a.color=m(e.minColor).tweenTo(m(e.maxColor),2>k?.5:t/(k-1))})},hasData:function(){return!(!this.tickPositions||!this.tickPositions.length)},setTickPositions:function(){if(!this.dataClasses)return g.prototype.setTickPositions.call(this)},initStops:function(){this.stops=
this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=m(a[1])})},buildOptions:function(a,d){var f=this.options.legend,h="vertical"!==f.layout;return u(a,{side:h?2:1,reversed:!h},d,{opposite:!h,showEmpty:!1,title:null,visible:f.enabled})},setOptions:function(a){g.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,f=d.options.legend||{},h,b;a?(this.left=f=
a.attr("x"),this.top=h=a.attr("y"),this.width=b=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-b,this.bottom=d.chartHeight-h-a,this.len=this.horiz?b:a,this.pos=this.horiz?f:h):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,h,b,e=this.dataClasses,k,c;if(e)for(c=e.length;c--;){if(k=e[c],h=k.from,f=k.to,
(void 0===h||a>=h)&&(void 0===f||a<=f)){b=k.color;d&&(d.dataClass=c,d.colorIndex=k.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&!(a>f[c][0]););h=f[c]||f[c+1];f=f[c+1]||h;a=1-(f[0]-a)/(f[0]-h[0]||1);b=h.color.tweenTo(f.color,a)}return b},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,g.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=
d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,h=a.options,b=this.horiz,e=r(h.symbolWidth,b?this.defaultLegendLength:12),k=r(h.symbolHeight,b?12:this.defaultLegendLength),c=r(h.labelPadding,b?16:30),h=r(h.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,e,k).attr({zIndex:1}).add(d.legendGroup);
this.legendItemWidth=e+f+(b?h:c);this.legendItemHeight=k+f+(b?c:0)},setState:function(a){this.series.forEach(function(d){d.setState(a)})},visible:!0,setVisible:v,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=d&&d.plotX,b=d&&d.plotY,e,k=this.pos,c=this.len;
d&&(e=this.toPixels(d[d.series.colorKey]),e<k?e=k-2:e>k+c&&(e=k+c+2),d.plotX=e,d.plotY=this.len-e,g.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a){var d=a.translatedValue;return l(d)?this.horiz?["M",d-4,this.top-6,"L",d+4,this.top-
6,d,this.top,"Z"]:["M",this.left,d,"L",this.left-6,d+6,this.left-6,d-6,"Z"]:g.prototype.getPlotLinePath.apply(this,arguments)},update:function(a,d){var f=this.chart,b=f.legend,e=this.buildOptions.call(f,{},a);this.series.forEach(function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(b.allItems.forEach(function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),f.isDirtyLegend=!0);f.options[this.coll]=u(this.userOptions,e);g.prototype.update.call(this,e,d);this.legendItem&&(this.setLegendColor(),
b.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);g.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,d=this.chart,f=this.legendItems,e=d.options.legend,c=e.valueDecimals,m=e.valueSuffix||"",g;f.length||this.dataClasses.forEach(function(e,h){var q=!0,l=e.from,n=e.to;g="";void 0===l?g="\x3c ":void 0===n&&(g="\x3e ");void 0!==l&&(g+=b.numberFormat(l,c)+m);void 0!==l&&void 0!==n&&(g+=" - ");void 0!==n&&(g+=b.numberFormat(n,c)+
m);f.push(p({chart:d,name:g,options:{},drawLegendSymbol:k.drawRectangle,visible:!0,setState:v,isDataClass:!0,setVisible:function(){q=this.visible=!q;a.series.forEach(function(a){a.points.forEach(function(a){a.dataClass===h&&a.setVisible(q)})});d.legend.colorizeItem(this,q)}},e))});return f},name:""});["fill","stroke"].forEach(function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,m(this.start).tweenTo(m(this.end),this.pos),null,!0)}});c(q,"afterGetAxes",function(){var a=this.options.colorAxis;
this.colorAxis=[];a&&new n(this,a)});c(e,"afterGetAllItems",function(a){var d=[],e=this.chart.colorAxis[0];e&&e.options&&e.options.showInLegend&&(e.options.dataClasses?d=e.getDataClassLegendSymbols():d.push(e),e.series.forEach(function(d){b.erase(a.allItems,d)}));for(e=d.length;e--;)a.allItems.unshift(d[e])});c(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})});c(e,"afterUpdate",function(a,d,e){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},
e)})});l(c,"parts-map/ColorSeriesMixin.js",[c["parts/Globals.js"]],function(b){var c=b.defined,l=b.noop,g=b.seriesTypes;b.colorPointMixin={dataLabelOnNull:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(b){var c=this,g=b?"show":"hide";c.visible=!!b;["graphic","dataLabel"].forEach(function(b){if(c[b])c[b][g]()})},setState:function(c){b.Point.prototype.setState.call(this,c);this.graphic&&this.graphic.attr({zIndex:"hover"===c?1:0})}};
b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:l,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:g.column.prototype.pointAttribs,translateColors:function(){var b=this,c=this.options.nullColor,g=this.colorAxis,l=this.colorKey;this.data.forEach(function(e){var k=e[l];if(k=e.options.color||(e.isNull?c:g&&void 0!==k?g.toColor(k,e):e.color||b.color))e.color=k})},
colorAttribs:function(b){var g={};c(b.color)&&(g[this.colorProp||"fill"]=b.color);return g}}});l(c,"parts-map/HeatmapSeries.js",[c["parts/Globals.js"]],function(b){var c=b.colorPointMixin,l=b.merge,g=b.noop,q=b.pick,m=b.Series,n=b.seriesType,p=b.seriesTypes;n("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},
states:{hover:{halo:!1,brightness:.2}}},l(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var e;p.scatter.prototype.init.apply(this,arguments);e=this.options;e.pointRange=q(e.pointRange,e.colsize||1);this.yAxis.axisPointRange=e.rowsize||1},translate:function(){var e=this.options,b=this.xAxis,c=this.yAxis,g=e.pointPadding||0,l=function(a,b,e){return Math.min(Math.max(b,a),e)},a=this.pointPlacementToXValue();this.generatePoints();
this.points.forEach(function(d){var f=(e.colsize||1)/2,k=(e.rowsize||1)/2,m=l(Math.round(b.len-b.translate(d.x-f,0,1,0,1,-a)),-b.len,2*b.len),f=l(Math.round(b.len-b.translate(d.x+f,0,1,0,1,-a)),-b.len,2*b.len),n=l(Math.round(c.translate(d.y-k,0,1,0,1)),-c.len,2*c.len),k=l(Math.round(c.translate(d.y+k,0,1,0,1)),-c.len,2*c.len),p=q(d.pointPadding,g);d.plotX=d.clientX=(m+f)/2;d.plotY=(n+k)/2;d.shapeType="rect";d.shapeArgs={x:Math.min(m,f)+p,y:Math.min(n,k)+p,width:Math.max(Math.abs(f-m)-2*p,0),height:Math.max(Math.abs(k-
n)-2*p,0)}});this.translateColors()},drawPoints:function(){var b=this.chart.styledMode?"css":"animate";p.column.prototype.drawPoints.call(this);this.points.forEach(function(e){e.graphic[b](this.colorAttribs(e))},this)},hasData:function(){return!!this.processedXData.length},getValidPoints:function(b,c){return m.prototype.getValidPoints.call(this,b,c,!0)},animate:g,getBox:g,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:p.column.prototype.alignDataLabel,getExtremes:function(){m.prototype.getExtremes.call(this,
this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;m.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},c))});l(c,"masters/modules/heatmap.src.js",[],function(){})});
//# sourceMappingURL=heatmap.js.map