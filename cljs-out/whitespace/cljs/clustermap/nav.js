// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
} else
{return null;
}
}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__34667_34673 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__34668_34674 = null;var count__34669_34675 = 0;var i__34670_34676 = 0;while(true){
if((i__34670_34676 < count__34669_34675))
{var vec__34671_34677 = cljs.core._nth.call(null,chunk__34668_34674,i__34670_34676);var v_34678 = cljs.core.nth.call(null,vec__34671_34677,0,null);var body_class_34679 = cljs.core.nth.call(null,vec__34671_34677,1,null);if(cljs.core._EQ_.call(null,v_34678,view))
{domina.add_class_BANG_.call(null,body,body_class_34679);
} else
{domina.remove_class_BANG_.call(null,body,body_class_34679);
}
{
var G__34680 = seq__34667_34673;
var G__34681 = chunk__34668_34674;
var G__34682 = count__34669_34675;
var G__34683 = (i__34670_34676 + 1);
seq__34667_34673 = G__34680;
chunk__34668_34674 = G__34681;
count__34669_34675 = G__34682;
i__34670_34676 = G__34683;
continue;
}
} else
{var temp__4092__auto___34684 = cljs.core.seq.call(null,seq__34667_34673);if(temp__4092__auto___34684)
{var seq__34667_34685__$1 = temp__4092__auto___34684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34667_34685__$1))
{var c__4189__auto___34686 = cljs.core.chunk_first.call(null,seq__34667_34685__$1);{
var G__34687 = cljs.core.chunk_rest.call(null,seq__34667_34685__$1);
var G__34688 = c__4189__auto___34686;
var G__34689 = cljs.core.count.call(null,c__4189__auto___34686);
var G__34690 = 0;
seq__34667_34673 = G__34687;
chunk__34668_34674 = G__34688;
count__34669_34675 = G__34689;
i__34670_34676 = G__34690;
continue;
}
} else
{var vec__34672_34691 = cljs.core.first.call(null,seq__34667_34685__$1);var v_34692 = cljs.core.nth.call(null,vec__34672_34691,0,null);var body_class_34693 = cljs.core.nth.call(null,vec__34672_34691,1,null);if(cljs.core._EQ_.call(null,v_34692,view))
{domina.add_class_BANG_.call(null,body,body_class_34693);
} else
{domina.remove_class_BANG_.call(null,body,body_class_34693);
}
{
var G__34694 = cljs.core.next.call(null,seq__34667_34685__$1);
var G__34695 = null;
var G__34696 = 0;
var G__34697 = 0;
seq__34667_34673 = G__34694;
chunk__34668_34674 = G__34695;
count__34669_34675 = G__34696;
i__34670_34676 = G__34697;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34704 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__34705 = null;var count__34706 = 0;var i__34707 = 0;while(true){
if((i__34707 < count__34706))
{var vec__34708 = cljs.core._nth.call(null,chunk__34705,i__34707);var v = cljs.core.nth.call(null,vec__34708,0,null);var _ = cljs.core.nth.call(null,vec__34708,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__34704,chunk__34705,count__34706,i__34707,vec__34708,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__34704,chunk__34705,count__34706,i__34707,vec__34708,v,_))
);
{
var G__34710 = seq__34704;
var G__34711 = chunk__34705;
var G__34712 = count__34706;
var G__34713 = (i__34707 + 1);
seq__34704 = G__34710;
chunk__34705 = G__34711;
count__34706 = G__34712;
i__34707 = G__34713;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34704);if(temp__4092__auto__)
{var seq__34704__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34704__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__34704__$1);{
var G__34714 = cljs.core.chunk_rest.call(null,seq__34704__$1);
var G__34715 = c__4189__auto__;
var G__34716 = cljs.core.count.call(null,c__4189__auto__);
var G__34717 = 0;
seq__34704 = G__34714;
chunk__34705 = G__34715;
count__34706 = G__34716;
i__34707 = G__34717;
continue;
}
} else
{var vec__34709 = cljs.core.first.call(null,seq__34704__$1);var v = cljs.core.nth.call(null,vec__34709,0,null);var _ = cljs.core.nth.call(null,vec__34709,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__34704,chunk__34705,count__34706,i__34707,vec__34709,v,_,seq__34704__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__34704,chunk__34705,count__34706,i__34707,vec__34709,v,_,seq__34704__$1,temp__4092__auto__))
);
{
var G__34718 = cljs.core.next.call(null,seq__34704__$1);
var G__34719 = null;
var G__34720 = 0;
var G__34721 = 0;
seq__34704 = G__34718;
chunk__34705 = G__34719;
count__34706 = G__34720;
i__34707 = G__34721;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
