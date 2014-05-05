// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$317,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23819_23823 = cljs.core.seq(keys);var chunk__23820_23824 = null;var count__23821_23825 = 0;var i__23822_23826 = 0;while(true){
if((i__23822_23826 < count__23821_23825))
{var k_23827 = chunk__23820_23824.cljs$core$IIndexed$_nth$arity$2(null,i__23822_23826);var obj_23828 = (js_index[k_23827]);var geom_23829 = (obj_23828["geojson"]);var feature_23830 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$317,"Feature",cljs.core.constant$keyword$471,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$313,(obj_23828["id"]),cljs.core.constant$keyword$388,(obj_23828["id"]),cljs.core.constant$keyword$389,(obj_23828["compact_name"])], null)], null));var __23831__$1 = (feature_23830["geometry"] = geom_23829);features.push(feature_23830);
{
var G__23832 = seq__23819_23823;
var G__23833 = chunk__23820_23824;
var G__23834 = count__23821_23825;
var G__23835 = (i__23822_23826 + 1);
seq__23819_23823 = G__23832;
chunk__23820_23824 = G__23833;
count__23821_23825 = G__23834;
i__23822_23826 = G__23835;
continue;
}
} else
{var temp__4092__auto___23836 = cljs.core.seq(seq__23819_23823);if(temp__4092__auto___23836)
{var seq__23819_23837__$1 = temp__4092__auto___23836;if(cljs.core.chunked_seq_QMARK_(seq__23819_23837__$1))
{var c__4189__auto___23838 = cljs.core.chunk_first(seq__23819_23837__$1);{
var G__23839 = cljs.core.chunk_rest(seq__23819_23837__$1);
var G__23840 = c__4189__auto___23838;
var G__23841 = cljs.core.count(c__4189__auto___23838);
var G__23842 = 0;
seq__23819_23823 = G__23839;
chunk__23820_23824 = G__23840;
count__23821_23825 = G__23841;
i__23822_23826 = G__23842;
continue;
}
} else
{var k_23843 = cljs.core.first(seq__23819_23837__$1);var obj_23844 = (js_index[k_23843]);var geom_23845 = (obj_23844["geojson"]);var feature_23846 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$317,"Feature",cljs.core.constant$keyword$471,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$313,(obj_23844["id"]),cljs.core.constant$keyword$388,(obj_23844["id"]),cljs.core.constant$keyword$389,(obj_23844["compact_name"])], null)], null));var __23847__$1 = (feature_23846["geometry"] = geom_23845);features.push(feature_23846);
{
var G__23848 = cljs.core.next(seq__23819_23837__$1);
var G__23849 = null;
var G__23850 = 0;
var G__23851 = 0;
seq__23819_23823 = G__23848;
chunk__23820_23824 = G__23849;
count__23821_23825 = G__23850;
i__23822_23826 = G__23851;
continue;
}
}
} else
{}
}
break;
}
rtree.geoJSON(js_feature_coll);
return rtree;
});
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$472,x,cljs.core.constant$keyword$473,y,cljs.core.constant$keyword$474,0,cljs.core.constant$keyword$475,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$317,"Point",cljs.core.constant$keyword$476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
