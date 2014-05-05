// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__27866__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__27865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27865,0,null);var body = cljs.core.nthnext(vec__27865,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27866 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27866__delegate.call(this,args);};
G__27866.cljs$lang$maxFixedArity = 0;
G__27866.cljs$lang$applyTo = (function (arglist__27867){
var args = cljs.core.seq(arglist__27867);
return G__27866__delegate(args);
});
G__27866.cljs$core$IFn$_invoke$arity$variadic = G__27866__delegate;
return G__27866;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__27872(s__27873){return (new cljs.core.LazySeq(null,(function (){var s__27873__$1 = s__27873;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27873__$1);if(temp__4092__auto__)
{var s__27873__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27873__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__27873__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__27875 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__27874 = 0;while(true){
if((i__27874 < size__4157__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__27874);cljs.core.chunk_append(b__27875,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27876 = (i__27874 + 1);
i__27874 = G__27876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27875),iter__27872(cljs.core.chunk_rest(s__27873__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27875),null);
}
} else
{var args = cljs.core.first(s__27873__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27872(cljs.core.rest(s__27873__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__27877_SHARP_){return cljs.core.reset_BANG_(html,p1__27877_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__27882(s__27883){return (new cljs.core.LazySeq(null,(function (){var s__27883__$1 = s__27883;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27883__$1);if(temp__4092__auto__)
{var s__27883__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27883__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__27883__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__27885 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__27884 = 0;while(true){
if((i__27884 < size__4157__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__27884);cljs.core.chunk_append(b__27885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$317,"text/css",cljs.core.constant$keyword$318,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$319,"stylesheet"], null)], null));
{
var G__27886 = (i__27884 + 1);
i__27884 = G__27886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27885),iter__27882(cljs.core.chunk_rest(s__27883__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27885),null);
}
} else
{var style = cljs.core.first(s__27883__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$317,"text/css",cljs.core.constant$keyword$318,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$319,"stylesheet"], null)], null),iter__27882(cljs.core.rest(s__27883__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__27887){
var styles = cljs.core.seq(arglist__27887);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to27888 = (function() { 
var link_to27888__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$318,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to27888 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27888__delegate.call(this,url,content);};
link_to27888.cljs$lang$maxFixedArity = 1;
link_to27888.cljs$lang$applyTo = (function (arglist__27889){
var url = cljs.core.first(arglist__27889);
var content = cljs.core.rest(arglist__27889);
return link_to27888__delegate(url,content);
});
link_to27888.cljs$core$IFn$_invoke$arity$variadic = link_to27888__delegate;
return link_to27888;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27888);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27890 = (function() { 
var mail_to27890__delegate = function (e_mail,p__27891){var vec__27893 = p__27891;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$318,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27890 = function (e_mail,var_args){
var p__27891 = null;if (arguments.length > 1) {
  p__27891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27890__delegate.call(this,e_mail,p__27891);};
mail_to27890.cljs$lang$maxFixedArity = 1;
mail_to27890.cljs$lang$applyTo = (function (arglist__27894){
var e_mail = cljs.core.first(arglist__27894);
var p__27891 = cljs.core.rest(arglist__27894);
return mail_to27890__delegate(e_mail,p__27891);
});
mail_to27890.cljs$core$IFn$_invoke$arity$variadic = mail_to27890__delegate;
return mail_to27890;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27890);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27895 = (function unordered_list27895(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,(function (){var iter__4158__auto__ = (function iter__27900(s__27901){return (new cljs.core.LazySeq(null,(function (){var s__27901__$1 = s__27901;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27901__$1);if(temp__4092__auto__)
{var s__27901__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27901__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__27901__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__27903 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__27902 = 0;while(true){
if((i__27902 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__27902);cljs.core.chunk_append(b__27903,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,x], null));
{
var G__27904 = (i__27902 + 1);
i__27902 = G__27904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27903),iter__27900(cljs.core.chunk_rest(s__27901__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27903),null);
}
} else
{var x = cljs.core.first(s__27901__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,x], null),iter__27900(cljs.core.rest(s__27901__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27895);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27905 = (function ordered_list27905(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$323,(function (){var iter__4158__auto__ = (function iter__27910(s__27911){return (new cljs.core.LazySeq(null,(function (){var s__27911__$1 = s__27911;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27911__$1);if(temp__4092__auto__)
{var s__27911__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27911__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__27911__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__27913 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__27912 = 0;while(true){
if((i__27912 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__27912);cljs.core.chunk_append(b__27913,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,x], null));
{
var G__27914 = (i__27912 + 1);
i__27912 = G__27914;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27913),iter__27910(cljs.core.chunk_rest(s__27911__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27913),null);
}
} else
{var x = cljs.core.first(s__27911__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,x], null),iter__27910(cljs.core.rest(s__27911__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27905);
/**
* Create an image element.
*/
sablono.core.image27915 = (function() {
var image27915 = null;
var image27915__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$325,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27915__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$325,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$326,alt], null)], null);
});
image27915 = function(src,alt){
switch(arguments.length){
case 1:
return image27915__1.call(this,src);
case 2:
return image27915__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27915.cljs$core$IFn$_invoke$arity$1 = image27915__1;
image27915.cljs$core$IFn$_invoke$arity$2 = image27915__2;
return image27915;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27915);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27916_SHARP_,p2__27917_SHARP_){return [cljs.core.str(p1__27916_SHARP_),cljs.core.str("["),cljs.core.str(p2__27917_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27918_SHARP_,p2__27919_SHARP_){return [cljs.core.str(p1__27918_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27919_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$317,type,cljs.core.constant$keyword$327,sablono.core.make_name(name),cljs.core.constant$keyword$313,sablono.core.make_id(name),cljs.core.constant$keyword$278,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27920 = (function() {
var hidden_field27920 = null;
var hidden_field27920__1 = (function (name){return hidden_field27920.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27920__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27920 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27920__1.call(this,name);
case 2:
return hidden_field27920__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27920.cljs$core$IFn$_invoke$arity$1 = hidden_field27920__1;
hidden_field27920.cljs$core$IFn$_invoke$arity$2 = hidden_field27920__2;
return hidden_field27920;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27920);
/**
* Creates a new text input field.
*/
sablono.core.text_field27921 = (function() {
var text_field27921 = null;
var text_field27921__1 = (function (name){return text_field27921.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27921__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27921 = function(name,value){
switch(arguments.length){
case 1:
return text_field27921__1.call(this,name);
case 2:
return text_field27921__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27921.cljs$core$IFn$_invoke$arity$1 = text_field27921__1;
text_field27921.cljs$core$IFn$_invoke$arity$2 = text_field27921__2;
return text_field27921;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27921);
/**
* Creates a new password field.
*/
sablono.core.password_field27922 = (function() {
var password_field27922 = null;
var password_field27922__1 = (function (name){return password_field27922.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27922__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27922 = function(name,value){
switch(arguments.length){
case 1:
return password_field27922__1.call(this,name);
case 2:
return password_field27922__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27922.cljs$core$IFn$_invoke$arity$1 = password_field27922__1;
password_field27922.cljs$core$IFn$_invoke$arity$2 = password_field27922__2;
return password_field27922;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27922);
/**
* Creates a new email input field.
*/
sablono.core.email_field27923 = (function() {
var email_field27923 = null;
var email_field27923__1 = (function (name){return email_field27923.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27923__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27923 = function(name,value){
switch(arguments.length){
case 1:
return email_field27923__1.call(this,name);
case 2:
return email_field27923__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27923.cljs$core$IFn$_invoke$arity$1 = email_field27923__1;
email_field27923.cljs$core$IFn$_invoke$arity$2 = email_field27923__2;
return email_field27923;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27923);
/**
* Creates a check box.
*/
sablono.core.check_box27924 = (function() {
var check_box27924 = null;
var check_box27924__1 = (function (name){return check_box27924.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27924__2 = (function (name,checked_QMARK_){return check_box27924.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27924__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$317,"checkbox",cljs.core.constant$keyword$327,sablono.core.make_name(name),cljs.core.constant$keyword$313,sablono.core.make_id(name),cljs.core.constant$keyword$278,value,cljs.core.constant$keyword$328,checked_QMARK_], null)], null);
});
check_box27924 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27924__1.call(this,name);
case 2:
return check_box27924__2.call(this,name,checked_QMARK_);
case 3:
return check_box27924__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27924.cljs$core$IFn$_invoke$arity$1 = check_box27924__1;
check_box27924.cljs$core$IFn$_invoke$arity$2 = check_box27924__2;
check_box27924.cljs$core$IFn$_invoke$arity$3 = check_box27924__3;
return check_box27924;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27924);
/**
* Creates a radio button.
*/
sablono.core.radio_button27925 = (function() {
var radio_button27925 = null;
var radio_button27925__1 = (function (group){return radio_button27925.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27925__2 = (function (group,checked_QMARK_){return radio_button27925.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27925__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$317,"radio",cljs.core.constant$keyword$327,sablono.core.make_name(group),cljs.core.constant$keyword$313,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$278,value,cljs.core.constant$keyword$328,checked_QMARK_], null)], null);
});
radio_button27925 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27925__1.call(this,group);
case 2:
return radio_button27925__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27925__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27925.cljs$core$IFn$_invoke$arity$1 = radio_button27925__1;
radio_button27925.cljs$core$IFn$_invoke$arity$2 = radio_button27925__2;
radio_button27925.cljs$core$IFn$_invoke$arity$3 = radio_button27925__3;
return radio_button27925;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27925);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27926 = (function() {
var select_options27926 = null;
var select_options27926__1 = (function (coll){return select_options27926.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27926__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__27935(s__27936){return (new cljs.core.LazySeq(null,(function (){var s__27936__$1 = s__27936;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27936__$1);if(temp__4092__auto__)
{var s__27936__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27936__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__27936__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__27938 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__27937 = 0;while(true){
if((i__27937 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__27937);cljs.core.chunk_append(b__27938,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27941 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27941,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27941,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$330,text], null),select_options27926.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$331,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,val,cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$331,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27943 = (i__27937 + 1);
i__27937 = G__27943;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27938),iter__27935(cljs.core.chunk_rest(s__27936__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27938),null);
}
} else
{var x = cljs.core.first(s__27936__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27942 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$330,text], null),select_options27926.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$331,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,val,cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$331,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27935(cljs.core.rest(s__27936__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
});
select_options27926 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27926__1.call(this,coll);
case 2:
return select_options27926__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27926.cljs$core$IFn$_invoke$arity$1 = select_options27926__1;
select_options27926.cljs$core$IFn$_invoke$arity$2 = select_options27926__2;
return select_options27926;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27926);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27944 = (function() {
var drop_down27944 = null;
var drop_down27944__2 = (function (name,options){return drop_down27944.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27944__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$333,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,sablono.core.make_name(name),cljs.core.constant$keyword$313,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27944 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27944__2.call(this,name,options);
case 3:
return drop_down27944__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27944.cljs$core$IFn$_invoke$arity$2 = drop_down27944__2;
drop_down27944.cljs$core$IFn$_invoke$arity$3 = drop_down27944__3;
return drop_down27944;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27944);
/**
* Creates a text area element.
*/
sablono.core.text_area27945 = (function() {
var text_area27945 = null;
var text_area27945__1 = (function (name){return text_area27945.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27945__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$314,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$327,sablono.core.make_name(name),cljs.core.constant$keyword$313,sablono.core.make_id(name),cljs.core.constant$keyword$278,value], null)], null);
});
text_area27945 = function(name,value){
switch(arguments.length){
case 1:
return text_area27945__1.call(this,name);
case 2:
return text_area27945__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27945.cljs$core$IFn$_invoke$arity$1 = text_area27945__1;
text_area27945.cljs$core$IFn$_invoke$arity$2 = text_area27945__2;
return text_area27945;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27945);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27946 = (function file_upload27946(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27946);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27947 = (function label27947(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$330,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$310,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27947);
/**
* Creates a submit button.
*/
sablono.core.submit_button27948 = (function submit_button27948(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$317,"submit",cljs.core.constant$keyword$278,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27948);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27949 = (function reset_button27949(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$317,"reset",cljs.core.constant$keyword$278,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27949);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27950 = (function() { 
var form_to27950__delegate = function (p__27951,body){var vec__27953 = p__27951;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27953,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27953,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$334,null,cljs.core.constant$keyword$335,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$336,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$337,method_str,cljs.core.constant$keyword$338,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$336,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$337,"POST",cljs.core.constant$keyword$338,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27950 = function (p__27951,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27950__delegate.call(this,p__27951,body);};
form_to27950.cljs$lang$maxFixedArity = 1;
form_to27950.cljs$lang$applyTo = (function (arglist__27954){
var p__27951 = cljs.core.first(arglist__27954);
var body = cljs.core.rest(arglist__27954);
return form_to27950__delegate(p__27951,body);
});
form_to27950.cljs$core$IFn$_invoke$arity$variadic = form_to27950__delegate;
return form_to27950;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27950);
