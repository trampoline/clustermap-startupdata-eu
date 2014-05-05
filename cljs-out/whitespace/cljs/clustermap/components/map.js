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
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,clustermap.components.map.initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3441__auto__ = (function (){var G__34036 = config;var G__34036__$1 = (((G__34036 == null))?null:G__34036.components);var G__34036__$2 = (((G__34036__$1 == null))?null:G__34036__$1.map);var G__34036__$3 = (((G__34036__$2 == null))?null:G__34036__$2.api_key);return G__34036__$3;
})();if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
window.map = m;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",512369281),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3429__auto__ = s;if(cljs.core.truth_(and__3429__auto__))
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
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty.call(null,all_bounds)))
{var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__34037){
var m = cljs.core.first(arglist__34037);
var all_bounds = cljs.core.rest(arglist__34037);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs34040 = cljs.core.map.call(null,(function (site){return [cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site),new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null))),cljs.core.str(">"),cljs.core.str((function (){var attrs34041 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_.call(null,attrs34041))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs34041))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs34041)),cljs.core.str("</li>")].join('');
}
})()),cljs.core.str("</a>")].join('');
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs34040))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),"map-marker-popup-location-list"], null),attrs34040))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs34040)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__34044 = location_sites;var G__34044__$1 = (((G__34044 == null))?null:cljs.core.first.call(null,G__34044));var G__34044__$2 = (((G__34044__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__34044__$1));var G__34044__$3 = (((G__34044__$2 == null))?null:cljs.core.reverse.call(null,G__34044__$2));var G__34044__$4 = (((G__34044__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__34044__$3));return G__34044__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",4570914700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",4290568192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,14], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",1041293811),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-8], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1017130987),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4339__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_34045_34046 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4340__auto__){return sb__4339__auto__.append(x__4340__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34045_34046;
}return [cljs.core.str(sb__4339__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__34051 = cljs.core.seq.call(null,remove_marker_keys);var chunk__34052 = null;var count__34053 = 0;var i__34054 = 0;while(true){
if((i__34054 < count__34053))
{var k = cljs.core._nth.call(null,chunk__34052,i__34054);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__34055 = seq__34051;
var G__34056 = chunk__34052;
var G__34057 = count__34053;
var G__34058 = (i__34054 + 1);
seq__34051 = G__34055;
chunk__34052 = G__34056;
count__34053 = G__34057;
i__34054 = G__34058;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34051);if(temp__4092__auto__)
{var seq__34051__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34051__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__34051__$1);{
var G__34059 = cljs.core.chunk_rest.call(null,seq__34051__$1);
var G__34060 = c__4189__auto__;
var G__34061 = cljs.core.count.call(null,c__4189__auto__);
var G__34062 = 0;
seq__34051 = G__34059;
chunk__34052 = G__34060;
count__34053 = G__34061;
i__34054 = G__34062;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__34051__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__34063 = cljs.core.next.call(null,seq__34051__$1);
var G__34064 = null;
var G__34065 = 0;
var G__34066 = 0;
seq__34051 = G__34063;
chunk__34052 = G__34064;
count__34053 = G__34065;
i__34054 = G__34066;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__34075 = cljs.core.js__GT_clj.call(null,envelope);var map__34075__$1 = ((cljs.core.seq_QMARK_.call(null,map__34075))?cljs.core.apply.call(null,cljs.core.hash_map,map__34075):map__34075);var clj_envelope = map__34075__$1;var vec__34076 = cljs.core.get.call(null,map__34075__$1,"coordinates");var vec__34077 = cljs.core.nth.call(null,vec__34076,0,null);var vec__34078 = cljs.core.nth.call(null,vec__34077,0,null);var miny0 = cljs.core.nth.call(null,vec__34078,0,null);var minx0 = cljs.core.nth.call(null,vec__34078,1,null);var vec__34079 = cljs.core.nth.call(null,vec__34077,1,null);var maxy1 = cljs.core.nth.call(null,vec__34079,0,null);var minx1 = cljs.core.nth.call(null,vec__34079,1,null);var vec__34080 = cljs.core.nth.call(null,vec__34077,2,null);var maxy2 = cljs.core.nth.call(null,vec__34080,0,null);var maxx2 = cljs.core.nth.call(null,vec__34080,1,null);var vec__34081 = cljs.core.nth.call(null,vec__34077,3,null);var miny3 = cljs.core.nth.call(null,vec__34081,0,null);var maxx3 = cljs.core.nth.call(null,vec__34081,1,null);var vec__34082 = cljs.core.nth.call(null,vec__34077,4,null);var miny4 = cljs.core.nth.call(null,vec__34082,0,null);var minx4 = cljs.core.nth.call(null,vec__34082,1,null);var inner = vec__34077;var coords = vec__34076;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3441__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,zoom,new cljs.core.Keyword(null,"min-zoom","min-zoom",3894785504),7);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__34083){var map__34085 = p__34083;var map__34085__$1 = ((cljs.core.seq_QMARK_.call(null,map__34085))?cljs.core.apply.call(null,cljs.core.hash_map,map__34085):map__34085);var highlighted = cljs.core.get.call(null,map__34085__$1,new cljs.core.Keyword(null,"highlighted","highlighted",3500421061));var selected = cljs.core.get.call(null,map__34085__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));if(cljs.core.truth_((function (){var and__3429__auto__ = selected;if(cljs.core.truth_(and__3429__auto__))
{return highlighted;
} else
{return and__3429__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#003399",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#003399",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1108746965),"#000000",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#003399",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),0,new cljs.core.Keyword(null,"fill","fill",1017047285),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__34086){var map__34088 = p__34086;var map__34088__$1 = ((cljs.core.seq_QMARK_.call(null,map__34088))?cljs.core.apply.call(null,cljs.core.hash_map,map__34088):map__34088);var path_attrs = map__34088__$1;var selected = cljs.core.get.call(null,map__34088__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",1013907597),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895),tolerance,new cljs.core.Keyword(null,"selected","selected",2205476365),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__34090 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__34090,0,null);var js_boundaryline = cljs.core.nth.call(null,vec__34090,1,null);return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__34091,path_attrs){var map__34094 = p__34091;var map__34094__$1 = ((cljs.core.seq_QMARK_.call(null,map__34094))?cljs.core.apply.call(null,cljs.core.hash_map,map__34094):map__34094);var path = map__34094__$1;var boundaryline_id = cljs.core.get.call(null,map__34094__$1,new cljs.core.Keyword(null,"id","id",1013907597));var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__34095 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__34095,0,null);var js_boundaryline = cljs.core.nth.call(null,vec__34095,1,null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["geocommons_world_countries__be",null,"geocommons_world_countries__fi",null,"geocommons_world_countries__sw",null,"geocommons_world_countries__gm",null,"geocommons_world_countries__fr",null,"geocommons_world_countries__uk",null,"geocommons_world_countries__sp",null], null), null);var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",3500421061),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.call(null,paths,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",3500421061),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__34102 = cljs.core.seq.call(null,delete_path_keys);var chunk__34103 = null;var count__34104 = 0;var i__34105 = 0;while(true){
if((i__34105 < count__34104))
{var k = cljs.core._nth.call(null,chunk__34103,i__34105);var temp__4090__auto___34108 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4090__auto___34108))
{var path_34109 = temp__4090__auto___34108;clustermap.components.map.delete_path.call(null,leaflet_map,path_34109);
} else
{}
{
var G__34110 = seq__34102;
var G__34111 = chunk__34103;
var G__34112 = count__34104;
var G__34113 = (i__34105 + 1);
seq__34102 = G__34110;
chunk__34103 = G__34111;
count__34104 = G__34112;
i__34105 = G__34113;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34102);if(temp__4092__auto__)
{var seq__34102__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34102__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__34102__$1);{
var G__34114 = cljs.core.chunk_rest.call(null,seq__34102__$1);
var G__34115 = c__4189__auto__;
var G__34116 = cljs.core.count.call(null,c__4189__auto__);
var G__34117 = 0;
seq__34102 = G__34114;
chunk__34103 = G__34115;
count__34104 = G__34116;
i__34105 = G__34117;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__34102__$1);var temp__4090__auto___34118 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4090__auto___34118))
{var path_34119 = temp__4090__auto___34118;clustermap.components.map.delete_path.call(null,leaflet_map,path_34119);
} else
{}
{
var G__34120 = cljs.core.next.call(null,seq__34102__$1);
var G__34121 = null;
var G__34122 = 0;
var G__34123 = 0;
seq__34102 = G__34120;
chunk__34103 = G__34121;
count__34104 = G__34122;
i__34105 = G__34123;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_){
return (function (m,p__34106){var map__34107 = p__34106;var map__34107__$1 = ((cljs.core.seq_QMARK_.call(null,map__34107))?cljs.core.apply.call(null,cljs.core.hash_map,map__34107):map__34107);var path = map__34107__$1;var id = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref.call(null,paths_atom);var path_selections = cljs.core.deref.call(null,path_selections_atom);if(cljs.core.empty_QMARK_.call(null,path_selections))
{return clustermap.components.map.locate_map.call(null,leaflet_map);
} else
{if(cljs.core.empty_QMARK_.call(null,paths))
{return om.core.set_state.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),true);
} else
{if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121))))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),false);
} else
{}
var temp__4090__auto__ = (function (){var G__34125 = cljs.core.select_keys.call(null,paths,path_selections);var G__34125__$1 = (((G__34125 == null))?null:cljs.core.vals.call(null,G__34125));var G__34125__$2 = (((G__34125__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__34125__$1));var G__34125__$3 = (((G__34125__$2 == null))?null:cljs.core.not_empty.call(null,G__34125__$2));return G__34125__$3;
})();if(cljs.core.truth_(temp__4090__auto__))
{var bounds = temp__4090__auto__;return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show.call(null,clustermap.components.map.initial_bounds);
}
}
}
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = (function (){var G__34129 = constituency;var G__34129__$1 = (((G__34129 == null))?null:G__34129.properties);var G__34129__$2 = (((G__34129__$1 == null))?null:G__34129__$1.id);return G__34129__$2;
})();var bl_name = (function (){var G__34130 = constituency;var G__34130__$1 = (((G__34130 == null))?null:G__34130.properties);var G__34130__$2 = (((G__34130__$1 == null))?null:G__34130__$1.compact_name);return G__34130__$2;
})();return [cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),bl_name], null)),new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null))),cljs.core.str(">"),cljs.core.str((function (){var attrs34131 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs34131))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),"map-marker-constituency-name"], null),attrs34131))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p class=\"map-marker-constituency-name\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs34131)),cljs.core.str("</p>")].join('');
}
})()),cljs.core.str("</a>")].join('');
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__34132,owner){var map__34151 = p__34132;var map__34151__$1 = ((cljs.core.seq_QMARK_.call(null,map__34151))?cljs.core.apply.call(null,cljs.core.hash_map,map__34151):map__34151);var app_state = map__34151__$1;var selection = cljs.core.get.call(null,map__34151__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t34152 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t34152 = (function (selection,app_state,map__34151,owner,p__34132,map_component,meta34153){
this.selection = selection;
this.app_state = app_state;
this.map__34151 = map__34151;
this.owner = owner;
this.p__34132 = p__34132;
this.map_component = map_component;
this.meta34153 = meta34153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t34152.cljs$lang$type = true;
clustermap.components.map.t34152.cljs$lang$ctorStr = "clustermap.components.map/t34152";
clustermap.components.map.t34152.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map/t34152");
});
clustermap.components.map.t34152.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t34152.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__34155,p__34156){var self__ = this;
var map__34157 = p__34155;var map__34157__$1 = ((cljs.core.seq_QMARK_.call(null,map__34157))?cljs.core.apply.call(null,cljs.core.hash_map,map__34157):map__34157);var next_selection = cljs.core.get.call(null,map__34157__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var next_locations = cljs.core.get.call(null,map__34157__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var next_uk_constituencies = cljs.core.get.call(null,map__34157__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var next_uk_constituencies_rtree = cljs.core.get.call(null,map__34157__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600));var next_boundarylines = cljs.core.get.call(null,map__34157__$1,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847));var next_zoom = cljs.core.get.call(null,map__34157__$1,new cljs.core.Keyword(null,"zoom","zoom",1017648965));var map__34158 = p__34156;var map__34158__$1 = ((cljs.core.seq_QMARK_.call(null,map__34158))?cljs.core.apply.call(null,cljs.core.hash_map,map__34158):map__34158);var next_path_highlights = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));var this$__$1 = this;var map__34159 = om.core.get_props.call(null,self__.owner);var map__34159__$1 = ((cljs.core.seq_QMARK_.call(null,map__34159))?cljs.core.apply.call(null,cljs.core.hash_map,map__34159):map__34159);var uk_constituencies_rtree = cljs.core.get.call(null,map__34159__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600));var map__34160 = om.core.get_shared.call(null,self__.owner);var map__34160__$1 = ((cljs.core.seq_QMARK_.call(null,map__34160))?cljs.core.apply.call(null,cljs.core.hash_map,map__34160):map__34160);var path_fn = cljs.core.get.call(null,map__34160__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__34160__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var fetch_boundaryline_fn = cljs.core.get.call(null,map__34160__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934));var comm = cljs.core.get.call(null,map__34160__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__34161 = om.core.get_state.call(null,self__.owner);var map__34161__$1 = ((cljs.core.seq_QMARK_.call(null,map__34161))?cljs.core.apply.call(null,cljs.core.hash_map,map__34161):map__34161);var map__34162 = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__34162__$1 = ((cljs.core.seq_QMARK_.call(null,map__34162))?cljs.core.apply.call(null,cljs.core.hash_map,map__34162):map__34162);var path_selections = cljs.core.get.call(null,map__34162__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__34162__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__34162__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__34162__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var pan_pending = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121));var path_highlights = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));var mousemove_listener = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",3228037661));var click_listener = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"click-listener","click-listener",1807691467));clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.call(null,next_uk_constituencies_rtree,uk_constituencies_rtree))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",3228037661),(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.call(null,((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_ids = cljs.core.set.call(null,cljs.core.take.call(null,1,hit_path_ids));var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));if(cljs.core.truth_((function (){var and__3429__auto__ = highlight_hit;if(cljs.core.truth_(and__3429__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",4726192654))));
} else
{return and__3429__auto__;
}
})()))
{var G__34163_34169 = L.popup();G__34163_34169.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__34163_34169.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__34163_34169.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745),highlight_path_ids);
}));
if(cljs.core.truth_(mousemove_listener))
{leaflet_map.off("mousemove",mousemove_listener);
} else
{}
leaflet_map.on("mousemove",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",3228037661)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"click-listener","click-listener",1807691467),(function (e){var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.call(null,((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),cljs.core.first.call(null,hit_path_ids)], null)], null));
}));
if(cljs.core.truth_(click_listener))
{leaflet_map.off("click",click_listener);
} else
{}
leaflet_map.on("click",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-listener","click-listener",1807691467)));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths.call(null,comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3441__auto__ = pan_pending;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not_EQ_.call(null,next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t34152.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t34152.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__34164 = clustermap.components.map.create_map.call(null,node);var map__34164__$1 = ((cljs.core.seq_QMARK_.call(null,map__34164))?cljs.core.apply.call(null,cljs.core.hash_map,map__34164):map__34164);var map = map__34164__$1;var path = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"path","path",1017337751));var markers = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"app-state","app-state",1424976215)),cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
}));
leaflet_map.on("popupopen",(function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > 0))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",4726192654),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",(function (e__$1){e__$1.preventDefault();
return false;
}));
}));
leaflet_map.on("popupclose",(function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",4726192654),null);
}));
jayq.core.$.call(null,document).on("clustermap-change-view",(function (e){var map__34165 = om.core.get_state.call(null,self__.owner);var map__34165__$1 = ((cljs.core.seq_QMARK_.call(null,map__34165))?cljs.core.apply.call(null,cljs.core.hash_map,map__34165):map__34165);var map__34166 = cljs.core.get.call(null,map__34165__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__34166__$1 = ((cljs.core.seq_QMARK_.call(null,map__34166))?cljs.core.apply.call(null,cljs.core.hash_map,map__34166):map__34166);var path_selections = cljs.core.get.call(null,map__34166__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__34166__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.call(null,self__.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
});
clustermap.components.map.t34152.prototype.om$core$IRender$ = true;
clustermap.components.map.t34152.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t34152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34154){var self__ = this;
var _34154__$1 = this;return self__.meta34153;
});
clustermap.components.map.t34152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34154,meta34153__$1){var self__ = this;
var _34154__$1 = this;return (new clustermap.components.map.t34152(self__.selection,self__.app_state,self__.map__34151,self__.owner,self__.p__34132,self__.map_component,meta34153__$1));
});
clustermap.components.map.__GT_t34152 = (function __GT_t34152(selection__$1,app_state__$1,map__34151__$2,owner__$1,p__34132__$1,map_component__$1,meta34153){return (new clustermap.components.map.t34152(selection__$1,app_state__$1,map__34151__$2,owner__$1,p__34132__$1,map_component__$1,meta34153));
});
}
return (new clustermap.components.map.t34152(selection,app_state,map__34151__$1,owner,p__34132,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),cljs.core.merge.call(null,shared,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),app_state,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847))], null)),new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
