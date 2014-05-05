// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.map.initial_bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [72.0,43.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [29.0,-14.0], null)], null);
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(clustermap.components.map.initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3441__auto__ = (function (){var G__23127 = config;var G__23127__$1 = (((G__23127 == null))?null:G__23127.components);var G__23127__$2 = (((G__23127__$1 == null))?null:G__23127__$1.map);var G__23127__$3 = (((G__23127__$2 == null))?null:G__23127__$2.api_key);return G__23127__$3;
})();if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
window.map = m;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$489,m,cljs.core.constant$keyword$490,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$491,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$492,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3429__auto__ = s;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = w;if(cljs.core.truth_(and__3429__auto____$1))
{var and__3429__auto____$2 = n;if(cljs.core.truth_(and__3429__auto____$2))
{return e;
} else
{return and__3429__auto____$2;
}
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty(all_bounds)))
{var fb = cljs.core.first(all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest(all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__23128){
var m = cljs.core.first(arglist__23128);
var all_bounds = cljs.core.rest(arglist__23128);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs23131 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$318,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$488,cljs.core.constant$keyword$362,site) : path_fn.call(null,cljs.core.constant$keyword$488,cljs.core.constant$keyword$362,site)),cljs.core.constant$keyword$313,null,cljs.core.constant$keyword$307,null], null))),cljs.core.str(">"),cljs.core.str((function (){var attrs23132 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs23132))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,null,cljs.core.constant$keyword$307,null], null),attrs23132], 0)))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html(attrs23132)),cljs.core.str("</li>")].join('');
}
})()),cljs.core.str("</a>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs23131))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,null,cljs.core.constant$keyword$307,"map-marker-popup-location-list"], null),attrs23131], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html(attrs23131)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__23135 = location_sites;var G__23135__$1 = (((G__23135 == null))?null:cljs.core.first(G__23135));var G__23135__$2 = (((G__23135__$1 == null))?null:cljs.core.constant$keyword$493.cljs$core$IFn$_invoke$arity$1(G__23135__$1));var G__23135__$3 = (((G__23135__$2 == null))?null:cljs.core.reverse(G__23135__$2));var G__23135__$4 = (((G__23135__$3 == null))?null:cljs.core.clj__GT_js(G__23135__$3));return G__23135__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$309,"map-marker",cljs.core.constant$keyword$494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),cljs.core.constant$keyword$495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,14], null),cljs.core.constant$keyword$496,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-8], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$497,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4339__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_23136_23137 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4340__auto__){return sb__4339__auto__.append(x__4340__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23136_23137;
}return [cljs.core.str(sb__4339__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__23142 = cljs.core.seq(remove_marker_keys);var chunk__23143 = null;var count__23144 = 0;var i__23145 = 0;while(true){
if((i__23145 < count__23144))
{var k = chunk__23143.cljs$core$IIndexed$_nth$arity$2(null,i__23145);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__23146 = seq__23142;
var G__23147 = chunk__23143;
var G__23148 = count__23144;
var G__23149 = (i__23145 + 1);
seq__23142 = G__23146;
chunk__23143 = G__23147;
count__23144 = G__23148;
i__23145 = G__23149;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23142);if(temp__4092__auto__)
{var seq__23142__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23142__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__23142__$1);{
var G__23150 = cljs.core.chunk_rest(seq__23142__$1);
var G__23151 = c__4189__auto__;
var G__23152 = cljs.core.count(c__4189__auto__);
var G__23153 = 0;
seq__23142 = G__23150;
chunk__23143 = G__23151;
count__23144 = G__23152;
i__23145 = G__23153;
continue;
}
} else
{var k = cljs.core.first(seq__23142__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__23154 = cljs.core.next(seq__23142__$1);
var G__23155 = null;
var G__23156 = 0;
var G__23157 = 0;
seq__23142 = G__23154;
chunk__23143 = G__23155;
count__23144 = G__23156;
i__23145 = G__23157;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_(markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0)));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__23166 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__23166__$1 = ((cljs.core.seq_QMARK_(map__23166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23166):map__23166);var clj_envelope = map__23166__$1;var vec__23167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23166__$1,"coordinates");var vec__23168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23167,0,null);var vec__23169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23169,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23169,1,null);var vec__23170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23170,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23170,1,null);var vec__23171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171,1,null);var vec__23172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172,1,null);var vec__23173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23173,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23173,1,null);var inner = vec__23168;var coords = vec__23167;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3441__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$306,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$306,7));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__23174){var map__23176 = p__23174;var map__23176__$1 = ((cljs.core.seq_QMARK_(map__23176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23176):map__23176);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.constant$keyword$498);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23176__$1,cljs.core.constant$keyword$332);if(cljs.core.truth_((function (){var and__3429__auto__ = selected;if(cljs.core.truth_(and__3429__auto__))
{return highlighted;
} else
{return and__3429__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$499,"#003399",cljs.core.constant$keyword$500,2,cljs.core.constant$keyword$501,1,cljs.core.constant$keyword$502,true,cljs.core.constant$keyword$503,0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$499,"#003399",cljs.core.constant$keyword$500,2,cljs.core.constant$keyword$501,1,cljs.core.constant$keyword$502,true,cljs.core.constant$keyword$503,0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$499,"#000000",cljs.core.constant$keyword$500,2,cljs.core.constant$keyword$501,1,cljs.core.constant$keyword$502,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$499,"#003399",cljs.core.constant$keyword$500,2,cljs.core.constant$keyword$501,0,cljs.core.constant$keyword$502,false,cljs.core.constant$keyword$503,0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__23177){var map__23179 = p__23177;var map__23179__$1 = ((cljs.core.seq_QMARK_(map__23179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23179):map__23179);var path_attrs = map__23179__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,cljs.core.constant$keyword$332);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$364,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$313,boundaryline_id,cljs.core.constant$keyword$504,tolerance,cljs.core.constant$keyword$332,selected,cljs.core.constant$keyword$505,leaflet_path,cljs.core.constant$keyword$506,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__23181 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23181,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23181,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$505.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__23182,path_attrs){var map__23185 = p__23182;var map__23185__$1 = ((cljs.core.seq_QMARK_(map__23185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23185):map__23185);var path = map__23185__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.constant$keyword$313);var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__23186 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23186,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23186,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$504.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$505.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$505.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["geocommons_world_countries__be",null,"geocommons_world_countries__fi",null,"geocommons_world_countries__sw",null,"geocommons_world_countries__gm",null,"geocommons_world_countries__fr",null,"geocommons_world_countries__uk",null,"geocommons_world_countries__sp",null], null), null);var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$332,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$498,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$332,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$498,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__23193 = cljs.core.seq(delete_path_keys);var chunk__23194 = null;var count__23195 = 0;var i__23196 = 0;while(true){
if((i__23196 < count__23195))
{var k = chunk__23194.cljs$core$IIndexed$_nth$arity$2(null,i__23196);var temp__4090__auto___23199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___23199))
{var path_23200 = temp__4090__auto___23199;clustermap.components.map.delete_path(leaflet_map,path_23200);
} else
{}
{
var G__23201 = seq__23193;
var G__23202 = chunk__23194;
var G__23203 = count__23195;
var G__23204 = (i__23196 + 1);
seq__23193 = G__23201;
chunk__23194 = G__23202;
count__23195 = G__23203;
i__23196 = G__23204;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23193);if(temp__4092__auto__)
{var seq__23193__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23193__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__23193__$1);{
var G__23205 = cljs.core.chunk_rest(seq__23193__$1);
var G__23206 = c__4189__auto__;
var G__23207 = cljs.core.count(c__4189__auto__);
var G__23208 = 0;
seq__23193 = G__23205;
chunk__23194 = G__23206;
count__23195 = G__23207;
i__23196 = G__23208;
continue;
}
} else
{var k = cljs.core.first(seq__23193__$1);var temp__4090__auto___23209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___23209))
{var path_23210 = temp__4090__auto___23209;clustermap.components.map.delete_path(leaflet_map,path_23210);
} else
{}
{
var G__23211 = cljs.core.next(seq__23193__$1);
var G__23212 = null;
var G__23213 = 0;
var G__23214 = 0;
seq__23193 = G__23211;
chunk__23194 = G__23212;
count__23195 = G__23213;
i__23196 = G__23214;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_){
return (function (m,p__23197){var map__23198 = p__23197;var map__23198__$1 = ((cljs.core.seq_QMARK_(map__23198))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23198):map__23198);var path = map__23198__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,cljs.core.constant$keyword$313);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(path_selections))
{return clustermap.components.map.locate_map(leaflet_map);
} else
{if(cljs.core.empty_QMARK_(paths))
{return (om.core.set_state.cljs$core$IFn$_invoke$arity$3 ? om.core.set_state.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$507,true) : om.core.set_state.call(null,owner,cljs.core.constant$keyword$507,true));
} else
{if(cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$507)))
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$507,false);
} else
{}
var temp__4090__auto__ = (function (){var G__23216 = cljs.core.select_keys(paths,path_selections);var G__23216__$1 = (((G__23216 == null))?null:cljs.core.vals(G__23216));var G__23216__$2 = (((G__23216__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$506,G__23216__$1));var G__23216__$3 = (((G__23216__$2 == null))?null:cljs.core.not_empty(G__23216__$2));return G__23216__$3;
})();if(cljs.core.truth_(temp__4090__auto__))
{var bounds = temp__4090__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show(clustermap.components.map.initial_bounds);
}
}
}
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = (function (){var G__23220 = constituency;var G__23220__$1 = (((G__23220 == null))?null:G__23220.properties);var G__23220__$2 = (((G__23220__$1 == null))?null:G__23220__$1.id);return G__23220__$2;
})();var bl_name = (function (){var G__23221 = constituency;var G__23221__$1 = (((G__23221 == null))?null:G__23221.properties);var G__23221__$2 = (((G__23221__$1 == null))?null:G__23221__$1.compact_name);return G__23221__$2;
})();return [cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$318,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$488,cljs.core.constant$keyword$364,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$388,bl_id,cljs.core.constant$keyword$389,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$488,cljs.core.constant$keyword$364,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$388,bl_id,cljs.core.constant$keyword$389,bl_name], null))),cljs.core.constant$keyword$313,null,cljs.core.constant$keyword$307,null], null))),cljs.core.str(">"),cljs.core.str((function (){var attrs23222 = bl_name;if(cljs.core.map_QMARK_(attrs23222))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,null,cljs.core.constant$keyword$307,"map-marker-constituency-name"], null),attrs23222], 0)))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p class=\"map-marker-constituency-name\">"),cljs.core.str(hiccups.runtime.render_html(attrs23222)),cljs.core.str("</p>")].join('');
}
})()),cljs.core.str("</a>")].join('');
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__23223,owner){var map__23242 = p__23223;var map__23242__$1 = ((cljs.core.seq_QMARK_(map__23242))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23242):map__23242);var app_state = map__23242__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23242__$1,cljs.core.constant$keyword$373);if(typeof clustermap.components.map.t23243 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t23243 = (function (selection,app_state,map__23242,owner,p__23223,map_component,meta23244){
this.selection = selection;
this.app_state = app_state;
this.map__23242 = map__23242;
this.owner = owner;
this.p__23223 = p__23223;
this.map_component = map_component;
this.meta23244 = meta23244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t23243.cljs$lang$type = true;
clustermap.components.map.t23243.cljs$lang$ctorStr = "clustermap.components.map/t23243";
clustermap.components.map.t23243.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map/t23243");
});
clustermap.components.map.t23243.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t23243.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__23246,p__23247){var self__ = this;
var map__23248 = p__23246;var map__23248__$1 = ((cljs.core.seq_QMARK_(map__23248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23248):map__23248);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$373);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$508);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$509);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$510);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$419);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23248__$1,cljs.core.constant$keyword$511);var map__23249 = p__23247;var map__23249__$1 = ((cljs.core.seq_QMARK_(map__23249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23249):map__23249);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23249__$1,cljs.core.constant$keyword$512);var this$__$1 = this;var map__23250 = om.core.get_props(self__.owner);var map__23250__$1 = ((cljs.core.seq_QMARK_(map__23250))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23250):map__23250);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23250__$1,cljs.core.constant$keyword$510);var map__23251 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__23251__$1 = ((cljs.core.seq_QMARK_(map__23251))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23251):map__23251);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251__$1,cljs.core.constant$keyword$365);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251__$1,cljs.core.constant$keyword$383);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251__$1,cljs.core.constant$keyword$513);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251__$1,cljs.core.constant$keyword$366);var map__23252 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__23252__$1 = ((cljs.core.seq_QMARK_(map__23252))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23252):map__23252);var map__23253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,cljs.core.constant$keyword$488);var map__23253__$1 = ((cljs.core.seq_QMARK_(map__23253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23253):map__23253);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253__$1,cljs.core.constant$keyword$492);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253__$1,cljs.core.constant$keyword$491);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253__$1,cljs.core.constant$keyword$490);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23253__$1,cljs.core.constant$keyword$489);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,cljs.core.constant$keyword$507);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,cljs.core.constant$keyword$512);var mousemove_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,cljs.core.constant$keyword$514);var click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,cljs.core.constant$keyword$515);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$514,(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first(hits);var highlight_path_ids = cljs.core.set(cljs.core.take(1,hit_path_ids));var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$512);if(cljs.core.truth_((function (){var and__3429__auto__ = highlight_hit;if(cljs.core.truth_(and__3429__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$516)));
} else
{return and__3429__auto__;
}
})()))
{var G__23254_23260 = L.popup();G__23254_23260.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__23254_23260.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__23254_23260.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$512,highlight_path_ids);
}));
if(cljs.core.truth_(mousemove_listener))
{leaflet_map.off("mousemove",mousemove_listener);
} else
{}
leaflet_map.on("mousemove",om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$514));
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$515,(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$364,cljs.core.first(hit_path_ids)], null)], null));
}));
if(cljs.core.truth_(click_listener))
{leaflet_map.off("click",click_listener);
} else
{}
leaflet_map.on("click",om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$515));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3441__auto__ = pan_pending;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t23243.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t23243.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__23255 = clustermap.components.map.create_map(node);var map__23255__$1 = ((cljs.core.seq_QMARK_(map__23255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23255):map__23255);var map = map__23255__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$340);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$490);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$489);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$488,map);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$512,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$517),cljs.core.assoc,cljs.core.constant$keyword$511,leaflet_map.getZoom());
}));
leaflet_map.on("popupopen",(function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > 0))
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$516,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",(function (e__$1){e__$1.preventDefault();
return false;
}));
}));
leaflet_map.on("popupclose",(function (e){return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$516,null);
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){var map__23256 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__23256__$1 = ((cljs.core.seq_QMARK_(map__23256))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23256):map__23256);var map__23257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256__$1,cljs.core.constant$keyword$488);var map__23257__$1 = ((cljs.core.seq_QMARK_(map__23257))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23257):map__23257);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23257__$1,cljs.core.constant$keyword$492);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23257__$1,cljs.core.constant$keyword$491);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$511,leaflet_map.getZoom());
});
clustermap.components.map.t23243.prototype.om$core$IRender$ = true;
clustermap.components.map.t23243.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t23243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23245){var self__ = this;
var _23245__$1 = this;return self__.meta23244;
});
clustermap.components.map.t23243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23245,meta23244__$1){var self__ = this;
var _23245__$1 = this;return (new clustermap.components.map.t23243(self__.selection,self__.app_state,self__.map__23242,self__.owner,self__.p__23223,self__.map_component,meta23244__$1));
});
clustermap.components.map.__GT_t23243 = (function __GT_t23243(selection__$1,app_state__$1,map__23242__$2,owner__$1,p__23223__$1,map_component__$1,meta23244){return (new clustermap.components.map.t23243(selection__$1,app_state__$1,map__23242__$2,owner__$1,p__23223__$1,map_component__$1,meta23244));
});
}
return (new clustermap.components.map.t23243(selection,app_state,map__23242__$1,owner,p__23223,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$352,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$517,app_state,cljs.core.constant$keyword$513,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$419)], null)], 0)),cljs.core.constant$keyword$357,document.getElementById(elem_id)], null));
});
