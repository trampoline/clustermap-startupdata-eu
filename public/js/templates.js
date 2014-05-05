(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("index.static", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};

buf.push("<!DOCTYPE html><html lang=\"en\"><head><title>EU Startup Data</title><meta charset=\"utf-8\"><!--if IEmeta(http-equiv=\"X-UA-Compatible\", content=\"IE=edge,chrome=1\")--><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link type=\"text/css\" rel=\"stylesheet\" href=\"/css/app.css\"><!--if lte IE 8<script type=\"text/javascript\" src=\"/js/html5.js\"></script>\n--><script type=\"text/javascript\" src=\"/js/vendor.js\"></script><!--begin-static-app-config--><script type=\"text/javascript\">window.config={\"api\":{\"prefix\": \"\"}}</script><!--end-static-app-config--><!--app-config<script type=\"text/javascript\">window.config={{{app-config}}}</script>\n--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\nif (window.config.ua && window.config.ua.code) {\n  ga('create', window.config.ua.code, 'trampolinesystems.com');\n  ga('send', 'pageview');\n}\n</script></head><body class=\"view-map\"><div id=\"page-info\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>EU Startup Data</h4></div><div class=\"modal-body\"><p>EU Startup Data\n</p></div></div></div></div><div id=\"page-methodology\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>Methodology</h4></div><div class=\"modal-body\"><p>Methodology\n</p></div></div></div></div><div id=\"wrap\"><aside id=\"nav\"><ul><!-- li.search(data-toggle='tooltip' data-placement='right' title='Search for a Constituency or Company'): a(href='#') Search--><!-- li.map.active(data-toggle='tooltip' data-placement='right' title='View on map'): a(href='#') Map--><!-- li.lists(data-toggle='tooltip' data-placement='right' title='View full report'): a(href='#') Full Report--><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"More Information\" class=\"info\"><a data-toggle=\"modal\" data-target=\"#page-info\">Info</a></li><!-- li.method(data-toggle='tooltip' data-placement='right' title='Methodology')--><!--   a(data-toggle='modal' data-target='#page-methodology') Methodology--><li class=\"logo\"><a href=\"#\">EU</a></li></ul></aside><section id=\"main\"><div class=\"container\"><header id=\"main-header\"><!-- #search-component--><!--   #search--><!--     div.tbl--><!--       div.tbl-cell(style='width: 100%')--><!--         input(type='text', placeholder='Search')--><!--       //- NEW: width increased--><!--       div.tbl-cell(style='width: 38px')--><!--         button(type='reset').btn-clear &times;--><!--       //- NEW: Button moved below to \"header.secondary\"--><!--       //- div.tbl-cell(style='width: 136px')--><!--       //-   button(type='reset').btn-reset Reset to UK wide--><!--     #search-results.hide--><!--       ul--><!--         li--><!--           a(href='#')--><!--             | ---><!--             small Constituency--><!--         li--><!--           a(href='#')--><!--             | ---><!--             small Investor--><!--         li--><!--           a(href='#')--><!--             | ---><!--             small Investor-backed company--><!-- #page-title-component--><!--   #page-title--><!--     button(type='button').btn View on map--><!--     // button(type='reset').btn.btn-link.btn-reset Reset to UK wide--><!--     h2 ---><!--     h3 ---></header><div id=\"main-content\"><div id=\"page-map\"><div id=\"map-report\" class=\"open\"><a href=\"#\"><i>Show / hide</i></a><aside><header class=\"primary\"><h1>EU Startup Data</h1><h2>View startups across EU</h2></header><div id=\"map-report-component\"><!-- header.secondary--><!--   h2 ---><!--   h3 ---><!--   // button(type='reset').btn-reset Reset to UK wide--><!-- ul--><!--   li--><!--     | ---><!--     small Investor-backed companies--><!--   li--><!--     | ---><!--     small Investors--><!--   li--><!--     | ---><!--     small Constituencies--><!--   li--><!--     | ---><!--     small Total revenue--><!--   li--><!--     | ---><!--     small Total employees--><!-- a(href='#')--><!--   button(type='button').btn--><!--     i.icon-lists-sm--><!--     | Full report--></div></aside></div><div id=\"map-component\"></div></div><div id=\"page-lists\"><div class=\"inner\"><div class=\"div-scroll\"><div class=\"div-fixed\"><div id=\"full-report-component\"></div></div></div></div></div></div><footer id=\"main-footer\"><div class=\"inner\"><div class=\"trampoline\"><p>Produced by&nbsp;<a href=\"http://www.trampolinesystems.com/\">Trampoline Systems</a>&nbsp;and&nbsp;<a href=\"http://www.grantthornton.com/\">Grant Thornton</a></p></div></div></footer></div></section></div><!--begin-static-base-js--><script type=\"text/javascript\" src=\"cljs/goog/base.js\"></script><!--end-static-base-js--><!--base-js{{{base-js}}}\n--><!--begin-dynamic-js--><script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script><!--end-dynamic-js--><!--dynamic-js<!-- <script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script> -->\n--><!--begin-static-repl-js--><!--end-static-repl-js--><!--repl-js<script type=\"text/javascript\">{{{repl-js}}}</script>\n--></body></html><!--end-->");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=templates.js.map