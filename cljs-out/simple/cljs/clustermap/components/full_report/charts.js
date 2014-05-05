// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.charts');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clustermap.components.timeline_chart');
goog.require('om.core');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
clustermap.components.full_report.charts.charts = (function charts(data,owner){if(typeof clustermap.components.full_report.charts.t11978 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.charts.t11978 = (function (owner,data,charts,meta11979){
this.owner = owner;
this.data = data;
this.charts = charts;
this.meta11979 = meta11979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.charts.t11978.cljs$lang$type = true;
clustermap.components.full_report.charts.t11978.cljs$lang$ctorStr = "clustermap.components.full-report.charts/t11978";
clustermap.components.full_report.charts.t11978.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.charts/t11978");
});
clustermap.components.full_report.charts.t11978.prototype.om$core$IRender$ = true;
clustermap.components.full_report.charts.t11978.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs11981 = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(temp__4090__auto__))
{var timelines = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",1323787765),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl","div.tbl",2686480467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell.charts","div.tbl-cell.charts",2527561447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl","div.tbl",2686480467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-row","div.tbl-row",1065043552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",2598766144),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box.box-first","div.box.box-first",2223624352),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",4087600639),"Revenue"], null),om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"turnover-timeline-chart",new cljs.core.Keyword(null,"y0-title","y0-title",2489744212),"Revenue",new cljs.core.Keyword(null,"y1-title","y1-title",3377247893),"# Filings"], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"turnover-timeline-chart"], null))], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
})();if(cljs.core.map_QMARK_.call(null,attrs11981))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-charts"], null)], null),attrs11981)),null);
} else
{return React.DOM.div({"className": "full-report-charts"},sablono.interpreter.interpret.call(null,attrs11981));
}
});
clustermap.components.full_report.charts.t11978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11980){var self__ = this;
var _11980__$1 = this;return self__.meta11979;
});
clustermap.components.full_report.charts.t11978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11980,meta11979__$1){var self__ = this;
var _11980__$1 = this;return (new clustermap.components.full_report.charts.t11978(self__.owner,self__.data,self__.charts,meta11979__$1));
});
clustermap.components.full_report.charts.__GT_t11978 = (function __GT_t11978(owner__$1,data__$1,charts__$1,meta11979){return (new clustermap.components.full_report.charts.t11978(owner__$1,data__$1,charts__$1,meta11979));
});
}
return (new clustermap.components.full_report.charts.t11978(owner,data,charts,null));
});
