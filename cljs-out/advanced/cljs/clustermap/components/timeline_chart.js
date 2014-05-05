// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('clustermap.formats.number');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__23675){var map__23677 = p__23675;var map__23677__$1 = ((cljs.core.seq_QMARK_(map__23677))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23677):map__23677);var opts = map__23677__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23677__$1,cljs.core.constant$keyword$438);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23677__$1,cljs.core.constant$keyword$439);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$440,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$441,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats){
return (function (p1__23669_SHARP_){return clustermap.formats.number.round_decimal(p1__23669_SHARP_,0);
});})(x_labels,stats))
,((function (x_labels,stats){
return (function (p1__23670_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__23670_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$441,cljs.core.constant$keyword$442], null));
});})(x_labels,stats))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median){
return (function (p1__23671_SHARP_){return clustermap.formats.number.round_decimal(p1__23671_SHARP_,0);
});})(x_labels,stats,y_median))
,((function (x_labels,stats,y_median){
return (function (p1__23672_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__23672_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$441,cljs.core.constant$keyword$417], null));
});})(x_labels,stats,y_median))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean){
return (function (p1__23673_SHARP_){return clustermap.formats.number.round_decimal(p1__23673_SHARP_,0);
});})(x_labels,stats,y_median,y_mean))
,((function (x_labels,stats,y_median,y_mean){
return (function (p1__23674_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__23674_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$441,cljs.core.constant$keyword$412], null));
});})(x_labels,stats,y_median,y_mean))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$443,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$448,null,cljs.core.constant$keyword$449,300], null),cljs.core.constant$keyword$444,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$450,null], null),cljs.core.constant$keyword$445,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$451,x_labels,cljs.core.constant$keyword$452,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$453,270], null)], null),cljs.core.constant$keyword$446,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$444,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$450,y0_title], null),cljs.core.constant$keyword$454,0,cljs.core.constant$keyword$452,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$455,(function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$361,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$447,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$327,[cljs.core.str("Total "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$317,"line",cljs.core.constant$keyword$446,0,cljs.core.constant$keyword$433,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__23678){var map__23683 = p__23678;var map__23683__$1 = ((cljs.core.seq_QMARK_(map__23683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23683):map__23683);var opts = map__23683__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,cljs.core.constant$keyword$313);if(typeof clustermap.components.timeline_chart.t23684 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t23684 = (function (id,opts,map__23683,p__23678,owner,data,timeline_chart,meta23685){
this.id = id;
this.opts = opts;
this.map__23683 = map__23683;
this.p__23678 = p__23678;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta23685 = meta23685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t23684.cljs$lang$type = true;
clustermap.components.timeline_chart.t23684.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t23684";
clustermap.components.timeline_chart.t23684.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.timeline-chart/t23684");
});
clustermap.components.timeline_chart.t23684.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t23684.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t23684.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t23684.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
}));
});
clustermap.components.timeline_chart.t23684.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t23684.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t23684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23686){var self__ = this;
var _23686__$1 = this;return self__.meta23685;
});
clustermap.components.timeline_chart.t23684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23686,meta23685__$1){var self__ = this;
var _23686__$1 = this;return (new clustermap.components.timeline_chart.t23684(self__.id,self__.opts,self__.map__23683,self__.p__23678,self__.owner,self__.data,self__.timeline_chart,meta23685__$1));
});
clustermap.components.timeline_chart.__GT_t23684 = (function __GT_t23684(id__$1,opts__$1,map__23683__$2,p__23678__$1,owner__$1,data__$1,timeline_chart__$1,meta23685){return (new clustermap.components.timeline_chart.t23684(id__$1,opts__$1,map__23683__$2,p__23678__$1,owner__$1,data__$1,timeline_chart__$1,meta23685));
});
}
return (new clustermap.components.timeline_chart.t23684(id,opts,map__23683__$1,p__23678,owner,data,timeline_chart,null));
});
