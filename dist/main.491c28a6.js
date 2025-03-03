// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "/* \u4F60\u597D\uFF5E\u6211\u662F\u5C0F\u5218\n * \u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n * \u63A5\u4E0B\u6765\u6211\u6765\u6F14\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n * \u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv*/\n#div1{\n    border:3px solid red;\n    width:200px;\n    height:200px;\n}\n/* \u63A5\u4E0B\u6765\u6211\u8981\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u9996\u5148\u7B2C\u4E00\u6B65\u8BA9div\u53D8\u6210\u4E00\u4E2A\u5706 */\n#div1{\n   border-radius:50%;\n   box-shadow: 0 0 10px rgba(0,0,0,0.5);\n   border:none; \n}\n/* \u516B\u5366\u56FE\u4E3A\u4E00\u9ED1\u4E00\u767D\n * \u6211\u4EEC\u6765\u5B9E\u73B0\u8FD9\u4E2A\u6548\u679C*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\u516B\u5366\u56FE\u7684\u4E00\u9ED1\u4E00\u767D\u53EF\u4E0D\u662F\u7B14\u76F4\u7684\u4E00\u6761\u7EBF\u5206\u5F00\n *\u63A5\u4E0B\u6765\u6211\u80FD\u5C31\u8BA9\u5B83\u518D\u53D8\u5316\u4E00\u4E0B\n *\u53D8\u6210S\u578B\u7684\u5206\u754C\u7EBF\uFF5E*/\n #div1::before{\n    width:100px;\n    height:100px;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    background:#000;\n    border-radius:50%;\n }\n #div1::after{\n    width:100px;\n    height:100px;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    background:#fff;\n    border-radius:50%;\n }\n /*\u516B\u5366\u56FE\u7684\u4E0A\u4E0B\u8FD8\u6709\u4E24\u4E2A\u4E0D\u4E00\u6837\u7684\u5C0F\u5706\u70B9\uFF5E\n  *\u8FD9\u53EF\u662F\u70B9\u775B\u4E4B\u7B14\n  *\u5F53\u7136\u4E5F\u4E0D\u80FD\u5FD8\u8BB0*/\n #div1::before{\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);\n }\n #div1::after{\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n }\n";

var string2 = '';
var n = 0;

var step = function step() {
    setTimeout(function () {

        if (string[n] === "\n") {
            string2 += "<br>"; //如果是回车就把回车换成<br>
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n]; //如果不是回车就照搬
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            //如果n不是最后一个就继续执行
            n = n + 1;
            step();
        }
    }, 20);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.491c28a6.map