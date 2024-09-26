var background = function () { "use strict"; function L(t) { return t == null || typeof t == "function" ? { main: t } : t } const B = L(() => { chrome.runtime.onMessage.addListener(async (t, $, T) => { t.action === "insertResponse" && chrome.tabs.query({ active: !0, currentWindow: !0 }, f => { var b; if (!((b = f[0]) != null && b.id)) return -1; const P = f[0].id, u = t.response; chrome.scripting.executeScript({ target: { tabId: P, allFrames: !0 }, function: x => { const w = document.getElementById("ai-icon"); if (w) { const h = w.parentElement; if (!h) return { message: "Parent element not found!" }; const a = h.querySelector("div[contenteditable='true']"); if (console.log("Attempting to insert message:", x), console.log("Editable div:", a), !a) return console.error("Contenteditable div not found!"), { message: "Contenteditable div not found!" }; if (a) { const S = document.createTextNode(x), y = document.createElement("p"); y.appendChild(S), a.removeChild(a == null ? void 0 : a.firstChild), a.appendChild(y); const d = document.getElementsByClassName("msg-form__placeholder")[0]; d && d.classList.remove("msg-form__placeholder"), h.removeChild(w) } else console.error("Contenteditable div not found!"); return { message: "Response inserted!" } } }, args: [u] }, x => { console.log("Response from executeScript", x) }) }) }) }); function D() { } var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, O = { exports: {} }; (function (t, $) { (function (T, f) { f(t) })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : j, function (T) { if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension."); if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id) T.exports = globalThis.browser; else { const f = "The message port closed before a response was received.", P = u => { const b = { alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } }, bookmarks: { create: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, getChildren: { minArgs: 1, maxArgs: 1 }, getRecent: { minArgs: 1, maxArgs: 1 }, getSubTree: { minArgs: 1, maxArgs: 1 }, getTree: { minArgs: 0, maxArgs: 0 }, move: { minArgs: 2, maxArgs: 2 }, remove: { minArgs: 1, maxArgs: 1 }, removeTree: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 }, update: { minArgs: 2, maxArgs: 2 } }, browserAction: { disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 }, enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 }, getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 }, getBadgeText: { minArgs: 1, maxArgs: 1 }, getPopup: { minArgs: 1, maxArgs: 1 }, getTitle: { minArgs: 1, maxArgs: 1 }, openPopup: { minArgs: 0, maxArgs: 0 }, setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }, setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }, setIcon: { minArgs: 1, maxArgs: 1 }, setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }, setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 } }, browsingData: { remove: { minArgs: 2, maxArgs: 2 }, removeCache: { minArgs: 1, maxArgs: 1 }, removeCookies: { minArgs: 1, maxArgs: 1 }, removeDownloads: { minArgs: 1, maxArgs: 1 }, removeFormData: { minArgs: 1, maxArgs: 1 }, removeHistory: { minArgs: 1, maxArgs: 1 }, removeLocalStorage: { minArgs: 1, maxArgs: 1 }, removePasswords: { minArgs: 1, maxArgs: 1 }, removePluginData: { minArgs: 1, maxArgs: 1 }, settings: { minArgs: 0, maxArgs: 0 } }, commands: { getAll: { minArgs: 0, maxArgs: 0 } }, contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } }, cookies: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 1, maxArgs: 1 }, getAllCookieStores: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } }, devtools: { inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } }, panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } } }, downloads: { cancel: { minArgs: 1, maxArgs: 1 }, download: { minArgs: 1, maxArgs: 1 }, erase: { minArgs: 1, maxArgs: 1 }, getFileIcon: { minArgs: 1, maxArgs: 2 }, open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }, pause: { minArgs: 1, maxArgs: 1 }, removeFile: { minArgs: 1, maxArgs: 1 }, resume: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 }, show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 } }, extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } }, history: { addUrl: { minArgs: 1, maxArgs: 1 }, deleteAll: { minArgs: 0, maxArgs: 0 }, deleteRange: { minArgs: 1, maxArgs: 1 }, deleteUrl: { minArgs: 1, maxArgs: 1 }, getVisits: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 } }, i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } }, identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } }, idle: { queryState: { minArgs: 1, maxArgs: 1 } }, management: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, getSelf: { minArgs: 0, maxArgs: 0 }, setEnabled: { minArgs: 2, maxArgs: 2 }, uninstallSelf: { minArgs: 0, maxArgs: 1 } }, notifications: { clear: { minArgs: 1, maxArgs: 1 }, create: { minArgs: 1, maxArgs: 2 }, getAll: { minArgs: 0, maxArgs: 0 }, getPermissionLevel: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } }, pageAction: { getPopup: { minArgs: 1, maxArgs: 1 }, getTitle: { minArgs: 1, maxArgs: 1 }, hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }, setIcon: { minArgs: 1, maxArgs: 1 }, setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }, setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }, show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 } }, permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } }, runtime: { getBackgroundPage: { minArgs: 0, maxArgs: 0 }, getPlatformInfo: { minArgs: 0, maxArgs: 0 }, openOptionsPage: { minArgs: 0, maxArgs: 0 }, requestUpdateCheck: { minArgs: 0, maxArgs: 0 }, sendMessage: { minArgs: 1, maxArgs: 3 }, sendNativeMessage: { minArgs: 2, maxArgs: 2 }, setUninstallURL: { minArgs: 1, maxArgs: 1 } }, sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } }, storage: { local: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } }, managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } }, sync: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } } }, tabs: { captureVisibleTab: { minArgs: 0, maxArgs: 2 }, create: { minArgs: 1, maxArgs: 1 }, detectLanguage: { minArgs: 0, maxArgs: 1 }, discard: { minArgs: 0, maxArgs: 1 }, duplicate: { minArgs: 1, maxArgs: 1 }, executeScript: { minArgs: 1, maxArgs: 2 }, get: { minArgs: 1, maxArgs: 1 }, getCurrent: { minArgs: 0, maxArgs: 0 }, getZoom: { minArgs: 0, maxArgs: 1 }, getZoomSettings: { minArgs: 0, maxArgs: 1 }, goBack: { minArgs: 0, maxArgs: 1 }, goForward: { minArgs: 0, maxArgs: 1 }, highlight: { minArgs: 1, maxArgs: 1 }, insertCSS: { minArgs: 1, maxArgs: 2 }, move: { minArgs: 2, maxArgs: 2 }, query: { minArgs: 1, maxArgs: 1 }, reload: { minArgs: 0, maxArgs: 2 }, remove: { minArgs: 1, maxArgs: 1 }, removeCSS: { minArgs: 1, maxArgs: 2 }, sendMessage: { minArgs: 2, maxArgs: 3 }, setZoom: { minArgs: 1, maxArgs: 2 }, setZoomSettings: { minArgs: 1, maxArgs: 2 }, update: { minArgs: 1, maxArgs: 2 } }, topSites: { get: { minArgs: 0, maxArgs: 0 } }, webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } }, webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } }, windows: { create: { minArgs: 0, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 2 }, getAll: { minArgs: 0, maxArgs: 1 }, getCurrent: { minArgs: 0, maxArgs: 1 }, getLastFocused: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, update: { minArgs: 2, maxArgs: 2 } } }; if (Object.keys(b).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill"); class x extends WeakMap { constructor(r, n = void 0) { super(n), this.createItem = r } get(r) { return this.has(r) || this.set(r, this.createItem(r)), super.get(r) } } const w = e => e && typeof e == "object" && typeof e.then == "function", h = (e, r) => (...n) => { u.runtime.lastError ? e.reject(new Error(u.runtime.lastError.message)) : r.singleCallbackArg || n.length <= 1 && r.singleCallbackArg !== !1 ? e.resolve(n[0]) : e.resolve(n) }, a = e => e == 1 ? "argument" : "arguments", S = (e, r) => function (g, ...m) { if (m.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${m.length}`); if (m.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${m.length}`); return new Promise((o, A) => { if (r.fallbackToNoCallback) try { g[e](...m, h({ resolve: o, reject: A }, r)) } catch (s) { console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, s), g[e](...m), r.fallbackToNoCallback = !1, r.noCallback = !0, o() } else r.noCallback ? (g[e](...m), o()) : g[e](...m, h({ resolve: o, reject: A }, r)) }) }, y = (e, r, n) => new Proxy(r, { apply(g, m, o) { return n.call(m, e, ...o) } }); let d = Function.call.bind(Object.prototype.hasOwnProperty); const v = (e, r = {}, n = {}) => { let g = Object.create(null), m = { has(A, s) { return s in e || s in g }, get(A, s, l) { if (s in g) return g[s]; if (!(s in e)) return; let i = e[s]; if (typeof i == "function") if (typeof r[s] == "function") i = y(e, e[s], r[s]); else if (d(n, s)) { let p = S(s, n[s]); i = y(e, e[s], p) } else i = i.bind(e); else if (typeof i == "object" && i !== null && (d(r, s) || d(n, s))) i = v(i, r[s], n[s]); else if (d(n, "*")) i = v(i, r[s], n["*"]); else return Object.defineProperty(g, s, { configurable: !0, enumerable: !0, get() { return e[s] }, set(p) { e[s] = p } }), i; return g[s] = i, i }, set(A, s, l, i) { return s in g ? g[s] = l : e[s] = l, !0 }, defineProperty(A, s, l) { return Reflect.defineProperty(g, s, l) }, deleteProperty(A, s) { return Reflect.deleteProperty(g, s) } }, o = Object.create(e); return new Proxy(o, m) }, M = e => ({ addListener(r, n, ...g) { r.addListener(e.get(n), ...g) }, hasListener(r, n) { return r.hasListener(e.get(n)) }, removeListener(r, n) { r.removeListener(e.get(n)) } }), W = new x(e => typeof e != "function" ? e : function (n) { const g = v(n, {}, { getContent: { minArgs: 0, maxArgs: 0 } }); e(g) }), _ = new x(e => typeof e != "function" ? e : function (n, g, m) { let o = !1, A, s = new Promise(k => { A = function (c) { o = !0, k(c) } }), l; try { l = e(n, g, A) } catch (k) { l = Promise.reject(k) } const i = l !== !0 && w(l); if (l !== !0 && !i && !o) return !1; const p = k => { k.then(c => { m(c) }, c => { let N; c && (c instanceof Error || typeof c.message == "string") ? N = c.message : N = "An unexpected error occurred", m({ __mozWebExtensionPolyfillReject__: !0, message: N }) }).catch(c => { console.error("Failed to send onMessage rejected reply", c) }) }; return p(i ? l : s), !0 }), I = ({ reject: e, resolve: r }, n) => { u.runtime.lastError ? u.runtime.lastError.message === f ? r() : e(new Error(u.runtime.lastError.message)) : n && n.__mozWebExtensionPolyfillReject__ ? e(new Error(n.message)) : r(n) }, F = (e, r, n, ...g) => { if (g.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${g.length}`); if (g.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${g.length}`); return new Promise((m, o) => { const A = I.bind(null, { resolve: m, reject: o }); g.push(A), n.sendMessage(...g) }) }, U = { devtools: { network: { onRequestFinished: M(W) } }, runtime: { onMessage: M(_), onMessageExternal: M(_), sendMessage: F.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) }, tabs: { sendMessage: F.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) } }, R = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } }; return b.privacy = { network: { "*": R }, services: { "*": R }, websites: { "*": R } }, v(u, U, b) }; T.exports = P(chrome) } }) })(O); function C(t, ...$) { } const q = { debug: (...t) => C(console.debug, ...t), log: (...t) => C(console.log, ...t), warn: (...t) => C(console.warn, ...t), error: (...t) => C(console.error, ...t) }; let E; try { E = B.main(), E instanceof Promise && console.warn("The background's main() function return a promise, but it must be synchronous") } catch (t) { throw q.error("The background crashed on startup!"), t } return E }();
background;
