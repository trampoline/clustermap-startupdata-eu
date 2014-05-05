// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34728_34732 = cljs.core.seq.call(null,keys);var chunk__34729_34733 = null;var count__34730_34734 = 0;var i__34731_34735 = 0;while(true){
if((i__34731_34735 < count__34730_34734))
{var k_34736 = cljs.core._nth.call(null,chunk__34729_34733,i__34731_34735);var obj_34737 = (js_index[k_34736]);var geom_34738 = (obj_34737["geojson"]);var feature_34739 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_34737["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_34737["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_34737["compact_name"])], null)], null));var __34740__$1 = (feature_34739["geometry"] = geom_34738);features.push(feature_34739);
{
var G__34741 = seq__34728_34732;
var G__34742 = chunk__34729_34733;
var G__34743 = count__34730_34734;
var G__34744 = (i__34731_34735 + 1);
seq__34728_34732 = G__34741;
chunk__34729_34733 = G__34742;
count__34730_34734 = G__34743;
i__34731_34735 = G__34744;
continue;
}
} else
{var temp__4092__auto___34745 = cljs.core.seq.call(null,seq__34728_34732);if(temp__4092__auto___34745)
{var seq__34728_34746__$1 = temp__4092__auto___34745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34728_34746__$1))
{var c__4189__auto___34747 = cljs.core.chunk_first.call(null,seq__34728_34746__$1);{
var G__34748 = cljs.core.chunk_rest.call(null,seq__34728_34746__$1);
var G__34749 = c__4189__auto___34747;
var G__34750 = cljs.core.count.call(null,c__4189__auto___34747);
var G__34751 = 0;
seq__34728_34732 = G__34748;
chunk__34729_34733 = G__34749;
count__34730_34734 = G__34750;
i__34731_34735 = G__34751;
continue;
}
} else
{var k_34752 = cljs.core.first.call(null,seq__34728_34746__$1);var obj_34753 = (js_index[k_34752]);var geom_34754 = (obj_34753["geojson"]);var feature_34755 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_34753["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_34753["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_34753["compact_name"])], null)], null));var __34756__$1 = (feature_34755["geometry"] = geom_34754);features.push(feature_34755);
{
var G__34757 = cljs.core.next.call(null,seq__34728_34746__$1);
var G__34758 = null;
var G__34759 = 0;
var G__34760 = 0;
seq__34728_34732 = G__34757;
chunk__34729_34733 = G__34758;
count__34730_34734 = G__34759;
i__34731_34735 = G__34760;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"w","w",1013904361),0,new cljs.core.Keyword(null,"h","h",1013904346),0], null)));return cljs.core.filter.call(null,(function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
