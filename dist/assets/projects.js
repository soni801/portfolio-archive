// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/projects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projects = void 0;
var projects = {
  "school": [{
    "image": "/assets/images/projects/school/weather-station.jpg",
    "subject": "Konseptutvikling og programmering + Teknologiforståelse",
    "title": "Værstasjon",
    "content": "Her skulle vi måle forskjellige værdata som temperatur, lufttrykk og luftfuktighet, og laste det opp til en database.",
    "date": "26. apr. 2021"
  }, {
    "image": "/assets/images/projects/school/app.jpg?v=2",
    "subject": "Konseptutvikling og programmering",
    "title": "App",
    "content": "Vi skulle utvikle en app for en valgfri kunde. Vi valgte å lage en app for Kaffe Diem, en kaffebar på skolen.",
    "date": "26. mar. 2021"
  }, {
    "image": "/assets/images/projects/school/raspberry-pi.jpg?v=2",
    "subject": "Teknologiforståelse",
    "title": "Raspberry Pi",
    "content": "Her skulle vi sette opp og teste forskjellige ting med en Raspberry Pi minidatamaskin. Vi koblet for eksempel opp lys og programmerte de til å lyse forskjellig over tid eller hvis man trykket på knapper.",
    "date": "26. feb 2021"
  }, {
    "image": "/assets/images/projects/school/database.jpg",
    "subject": "Konseptutvikling og programmering",
    "title": "Database",
    "content": "Dette var en oppgave om å lage en database og kjøre den lokalt, og å kunne legge inn og hente ut informasjon fra den.",
    "date": "22. feb. 2021"
  }, {
    "image": "/assets/images/projects/school/covid-diary.jpg?v=2",
    "subject": "Produksjon og historiefortelling",
    "title": "Koronadagbok",
    "content": "Vi skulle lage en film der vi dokumenterte livet vårt gjennom en uke under koronasituasjonen. Den inkluderer skolehverdagen, praksis i bedrift, og hva jeg gjør på fritiden.",
    "date": "8. jan. 2021"
  }, {
    "image": "/assets/images/projects/school/mindstorms.jpg?v=2",
    "subject": "Konseptutvikling og programmering",
    "title": "LEGO Mindstorms",
    "content": "Dette var et prosjekt der vi ble delt inn i grupper og fikk i oppgave å programmere en LEGO-robot til å gjøre forskjellige oppgaver. Dette var ting som å bevege seg på en spesiell måte eller spille av en spesifik lyd.",
    "date": "10. des. 2020"
  }, {
    "image": "/assets/images/projects/school/stream.jpg",
    "subject": "Konseptutvikling og programmering",
    "title": "Veldedighetsstream",
    "content": "Her skulle vi planlegge og gjennomføre en veldedighetsstream for å samle inn penger til Bring Children From Streets. Her gjorde vi mye forskjellig. Hovedsakelig gaming, men også kommentering, giveaways og spesielle ting når vi nådde et donasjonsmål.",
    "date": "9. des. 2020"
  }, {
    "image": "/assets/images/projects/school/advertisement.jpg?v=2",
    "subject": "Konseptutvikling og programmering + Produksjon og historiefortelling",
    "title": "Reklamefilm",
    "content": "Vi skulle lage en reklamefilm for å reklamere for linjen vi går på. Her viste vi fram litt fra hvert fag, litt fra skolefrokosten og litt fra Kaffe Diem. Vi gjorde også et par intervuer med elever i klassen.",
    "date": "17. nov. 2020"
  }, {
    "image": "/assets/images/projects/school/superfood.jpg",
    "subject": "Naturfag",
    "title": "Supermat",
    "content": "Her skulle vi lage en fiksjonell \"supermat\" som inneholdt akkurat riktig mengde næringsstoffer og mineraler, og som var bærekraftig. Jeg lagde min 'råbar'.",
    "date": "30. okt. 2020"
  }, {
    "image": "/assets/images/projects/school/photo-series.jpg",
    "subject": "Teknologiforståelse + Produksjon og historiefortelling",
    "title": "Bildeserie",
    "content": "Denne oppgaven gikk ut på å fortelle en historie ved hjelp av bilder. Vi skulle både ta og redigere 4 bilder for å kunne fortelle en meningsfull historie ut i fra dem. Jeg ville prøve å fortelle en historie om forsøpling, men det er selvfølgelig opp til enkeltpersonen å tolke historien.",
    "date": "18. sep. 2020"
  }, {
    "image": "/assets/images/projects/school/website.jpg?v=2",
    "subject": "Konseptutvikling og programmering",
    "title": "Nettside",
    "content": "Vi skulle lage en nettside for å vise hva vi gjør på linjen, som en litt annerledes skrivebok. Det er den nettsiden du er på nå. Denne nettsiden har gått gjennom mange iterasjoner og har til slutt landet på det den er i dag. Dette er høyst sannsynlig det skolerelaterte prosjektet jeg har jobbet mest på.",
    "date": "20. aug. 2020"
  }],
  "personal": [{
    "image": "/assets/images/projects/personal/graphide.jpg?v=2",
    "title": "graphide studios",
    "content": "graphide studios er et lite programvareutviklingsstudio som jeg og noen venner laget."
  }, {
    "image": "/assets/images/projects/personal/redsea.jpg?v=2",
    "title": "Redsea",
    "content": "Redsea Productions er et lite programvareutviklingsstudio som jeg og noen venner laget."
  }, {
    "image": "/assets/images/projects/personal/linerider.jpg",
    "title": "Line Rider",
    "content": "Line Rider er et spill der man produserer videoer av en person som kjører på kjelke på linjer man selv har tegnet. Du kan finne mine Line Rider videoer på min YouTube-kanal."
  }, {
    "image": "/assets/images/projects/personal/cubing.jpg",
    "title": "Kubing",
    "content": "Kubing går ut på å løse en Rubik's kube så fort som mulig. Min rekord er 12.89 sekunder."
  }]
};
exports.projects = projects;
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49796" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/projects.js"], null)
//# sourceMappingURL=/assets/projects.js.map