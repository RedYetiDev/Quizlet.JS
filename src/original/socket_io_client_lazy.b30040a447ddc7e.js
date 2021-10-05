(window.QJP = window.QJP || []).push([
    ["socket_io_client_lazy"], {
        "0z79": function(t, e, r) {
            r("zKZe");
            var n = r("AdPF"),
                o = r("CUme"),
                s = r("cpc2"),
                {
                    pick: i,
                    installTimerFunctions: a
                } = r("Eexf"),
                c = r("2UHX"),
                h = r("HjK1")("engine.io-client:polling-xhr");

            function u() {}
            var f = null != new n({
                xdomain: !1
            }).responseType;
            class p extends s {
                constructor(t, e) {
                    super(), a(this, e), this.opts = e, this.method = e.method || "GET", this.uri = t, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.create()
                }
                create() {
                    var t = i(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
                    var e = this.xhr = new n(t);
                    try {
                        h("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
                        try {
                            if (this.opts.extraHeaders)
                                for (var r in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.opts.extraHeaders[r])
                        } catch (o) {}
                        if ("POST" === this.method) try {
                            e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (o) {}
                        try {
                            e.setRequestHeader("Accept", "*/*")
                        } catch (o) {}
                        "withCredentials" in e && (e.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout), this.hasXDR() ? (e.onload = () => {
                            this.onLoad()
                        }, e.onerror = () => {
                            this.onError(e.responseText)
                        }) : e.onreadystatechange = () => {
                            4 === e.readyState && (200 === e.status || 1223 === e.status ? this.onLoad() : this.setTimeoutFn((() => {
                                this.onError("number" == typeof e.status ? e.status : 0)
                            }), 0))
                        }, h("xhr data %s", this.data), e.send(this.data)
                    } catch (o) {
                        return void this.setTimeoutFn((() => {
                            this.onError(o)
                        }), 0)
                    }
                    "undefined" != typeof document && (this.index = p.requestsCount++, p.requests[this.index] = this)
                }
                onSuccess() {
                    this.emit("success"), this.cleanup()
                }
                onData(t) {
                    this.emit("data", t), this.onSuccess()
                }
                onError(t) {
                    this.emit("error", t), this.cleanup(!0)
                }
                cleanup(t) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = u : this.xhr.onreadystatechange = u, t) try {
                            this.xhr.abort()
                        } catch (e) {}
                        "undefined" != typeof document && delete p.requests[this.index], this.xhr = null
                    }
                }
                onLoad() {
                    var t = this.xhr.responseText;
                    null !== t && this.onData(t)
                }
                hasXDR() {
                    return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
                }
                abort() {
                    this.cleanup()
                }
            }
            if (p.requestsCount = 0, p.requests = {}, "undefined" != typeof document)
                if ("function" == typeof attachEvent) attachEvent("onunload", l);
                else if ("function" == typeof addEventListener) {
                addEventListener("onpagehide" in c ? "pagehide" : "unload", l, !1)
            }

            function l() {
                for (var t in p.requests) p.requests.hasOwnProperty(t) && p.requests[t].abort()
            }
            t.exports = class extends o {
                constructor(t) {
                    if (super(t), "undefined" != typeof location) {
                        var e = "https:" === location.protocol,
                            r = location.port;
                        r || (r = e ? 443 : 80), this.xd = "undefined" != typeof location && t.hostname !== location.hostname || r !== t.port, this.xs = t.secure !== e
                    }
                    var n = t && t.forceBase64;
                    this.supportsBinary = f && !n
                }
                request(t) {
                    return void 0 === t && (t = {}), Object.assign(t, {
                        xd: this.xd,
                        xs: this.xs
                    }, this.opts), new p(this.uri(), t)
                }
                doWrite(t, e) {
                    var r = this.request({
                        method: "POST",
                        data: t
                    });
                    r.on("success", e), r.on("error", (t => {
                        this.onError("xhr post error", t)
                    }))
                }
                doPoll() {
                    h("xhr poll");
                    var t = this.request();
                    t.on("data", this.onData.bind(this)), t.on("error", (t => {
                        this.onError("xhr poll error", t)
                    })), this.pollXhr = t
                }
            }, t.exports.Request = p
        },
        "2UHX": function(t, e) {
            t.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")()
        },
        "2pII": function(t, e, r) {
            r("zKZe"), r("rB9j"), r("UxlC");
            var n = r("akSB"),
                o = r("cpc2"),
                s = r("HjK1")("engine.io-client:socket"),
                i = r("KoVT"),
                a = r("Uxeu"),
                c = r("TypT"),
                {
                    installTimerFunctions: h
                } = r("Eexf");
            class u extends o {
                constructor(t, e) {
                    void 0 === e && (e = {}), super(), t && "object" == typeof t && (e = t, t = null), t ? (t = a(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = a(e.host).host), h(this, e), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.transports = e.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
                        path: "/engine.io",
                        agent: !1,
                        withCredentials: !1,
                        upgrade: !0,
                        jsonp: !0,
                        timestampParam: "t",
                        rememberUpgrade: !1,
                        rejectUnauthorized: !0,
                        perMessageDeflate: {
                            threshold: 1024
                        },
                        transportOptions: {},
                        closeOnBeforeunload: !0
                    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", "string" == typeof this.opts.query && (this.opts.query = c.decode(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (this.opts.closeOnBeforeunload && addEventListener("beforeunload", (() => {
                        this.transport && (this.transport.removeAllListeners(), this.transport.close())
                    }), !1), "localhost" !== this.hostname && (this.offlineEventListener = () => {
                        this.onClose("transport close")
                    }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
                }
                createTransport(t) {
                    s('creating transport "%s"', t);
                    var e = function(t) {
                        var e = {};
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                        return e
                    }(this.opts.query);
                    e.EIO = i.protocol, e.transport = t, this.id && (e.sid = this.id);
                    var r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
                        query: e,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    });
                    return s("options: %j", r), new n[t](r)
                }
                open() {
                    var t;
                    if (this.opts.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                    else {
                        if (0 === this.transports.length) return void this.setTimeoutFn((() => {
                            this.emit("error", "No transports available")
                        }), 0);
                        t = this.transports[0]
                    }
                    this.readyState = "opening";
                    try {
                        t = this.createTransport(t)
                    } catch (e) {
                        return s("error while creating transport: %s", e), this.transports.shift(), void this.open()
                    }
                    t.open(), this.setTransport(t)
                }
                setTransport(t) {
                    s("setting transport %s", t.name), this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (() => {
                        this.onClose("transport close")
                    }))
                }
                probe(t) {
                    s('probing transport "%s"', t);
                    var e = this.createTransport(t, {
                            probe: 1
                        }),
                        r = !1;
                    u.priorWebsocketSuccess = !1;
                    var n = () => {
                        r || (s('probe transport "%s" opened', t), e.send([{
                            type: "ping",
                            data: "probe"
                        }]), e.once("packet", (n => {
                            if (!r)
                                if ("pong" === n.type && "probe" === n.data) {
                                    if (s('probe transport "%s" pong', t), this.upgrading = !0, this.emit("upgrading", e), !e) return;
                                    u.priorWebsocketSuccess = "websocket" === e.name, s('pausing current transport "%s"', this.transport.name), this.transport.pause((() => {
                                        r || "closed" !== this.readyState && (s("changing transport and sending upgrade packet"), f(), this.setTransport(e), e.send([{
                                            type: "upgrade"
                                        }]), this.emit("upgrade", e), e = null, this.upgrading = !1, this.flush())
                                    }))
                                } else {
                                    s('probe transport "%s" failed', t);
                                    var o = new Error("probe error");
                                    o.transport = e.name, this.emit("upgradeError", o)
                                }
                        })))
                    };

                    function o() {
                        r || (r = !0, f(), e.close(), e = null)
                    }
                    var i = r => {
                        var n = new Error("probe error: " + r);
                        n.transport = e.name, o(), s('probe transport "%s" failed because of error: %s', t, r), this.emit("upgradeError", n)
                    };

                    function a() {
                        i("transport closed")
                    }

                    function c() {
                        i("socket closed")
                    }

                    function h(t) {
                        e && t.name !== e.name && (s('"%s" works - aborting "%s"', t.name, e.name), o())
                    }
                    var f = () => {
                        e.removeListener("open", n), e.removeListener("error", i), e.removeListener("close", a), this.removeListener("close", c), this.removeListener("upgrading", h)
                    };
                    e.once("open", n), e.once("error", i), e.once("close", a), this.once("close", c), this.once("upgrading", h), e.open()
                }
                onOpen() {
                    if (s("socket open"), this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) {
                        s("starting upgrade probes");
                        for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                    }
                }
                onPacket(t) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (s('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                        case "open":
                            this.onHandshake(JSON.parse(t.data));
                            break;
                        case "ping":
                            this.resetPingTimeout(), this.sendPacket("pong"), this.emit("ping"), this.emit("pong");
                            break;
                        case "error":
                            var e = new Error("server error");
                            e.code = t.data, this.onError(e);
                            break;
                        case "message":
                            this.emit("data", t.data), this.emit("message", t.data)
                    } else s('packet received with socket readyState "%s"', this.readyState)
                }
                onHandshake(t) {
                    this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                }
                resetPingTimeout() {
                    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((() => {
                        this.onClose("ping timeout")
                    }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                }
                onDrain() {
                    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                }
                flush() {
                    "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                }
                write(t, e, r) {
                    return this.sendPacket("message", t, e, r), this
                }
                send(t, e, r) {
                    return this.sendPacket("message", t, e, r), this
                }
                sendPacket(t, e, r, n) {
                    if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                        (r = r || {}).compress = !1 !== r.compress;
                        var o = {
                            type: t,
                            data: e,
                            options: r
                        };
                        this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush()
                    }
                }
                close() {
                    var t = () => {
                            this.onClose("forced close"), s("socket closing - telling transport to close"), this.transport.close()
                        },
                        e = () => {
                            this.removeListener("upgrade", e), this.removeListener("upgradeError", e), t()
                        },
                        r = () => {
                            this.once("upgrade", e), this.once("upgradeError", e)
                        };
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (() => {
                        this.upgrading ? r() : t()
                    })) : this.upgrading ? r() : t()), this
                }
                onError(t) {
                    s("socket error %j", t), u.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
                }
                onClose(t, e) {
                    "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (s('socket close with reason: "%s"', t), this.clearTimeoutFn(this.pingIntervalTimer), this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0)
                }
                filterUpgrades(t) {
                    for (var e = [], r = 0, n = t.length; r < n; r++) ~this.transports.indexOf(t[r]) && e.push(t[r]);
                    return e
                }
            }
            u.priorWebsocketSuccess = !1, u.protocol = i.protocol, t.exports = u
        },
        "49sm": function(t, e) {
            var r = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == r.call(t)
            }
        },
        "5M3R": function(t, e, r) {
            (function(n) {
                var o;
                r("rB9j"), r("Rm1S"), r("TWNs"), r("JfAA"), r("UxlC"), e.formatArgs = function(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
                    var r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    var n = 0,
                        o = 0;
                    e[0].replace(/%[a-zA-Z%]/g, (t => {
                        "%%" !== t && (n++, "%c" === t && (o = n))
                    })), e.splice(o, 0, r)
                }, e.save = function(t) {
                    try {
                        t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
                    } catch (r) {}
                }, e.load = function() {
                    var t;
                    try {
                        t = e.storage.getItem("debug")
                    } catch (r) {}!t && void 0 !== n && "env" in n && (t = n.env.DEBUG);
                    return t
                }, e.useColors = function() {
                    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }, e.storage = function() {
                    try {
                        return localStorage
                    } catch (t) {}
                }(), e.destroy = (o = !1, () => {
                    o || (o = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {}), t.exports = r("9JTh")(e);
                var {
                    formatters: s
                } = t.exports;
                s.j = function(t) {
                    try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }).call(this, r("8oxB"))
        },
        "9JTh": function(t, e, r) {
            r("rB9j"), r("UxlC"), r("EnZy"), r("TWNs"), r("JfAA"), r("4mDm"), r("3bBZ"), t.exports = function(t) {
                function e(t) {
                    var r, o = null;

                    function s() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if (s.enabled) {
                            var i = s,
                                a = Number(new Date),
                                c = a - (r || a);
                            i.diff = c, i.prev = r, i.curr = a, r = a, n[0] = e.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                            var h = 0;
                            n[0] = n[0].replace(/%([a-zA-Z%])/g, ((t, r) => {
                                if ("%%" === t) return "%";
                                h++;
                                var o = e.formatters[r];
                                if ("function" == typeof o) {
                                    var s = n[h];
                                    t = o.call(i, s), n.splice(h, 1), h--
                                }
                                return t
                            })), e.formatArgs.call(i, n);
                            var u = i.log || e.log;
                            u.apply(i, n)
                        }
                    }
                    return s.namespace = t, s.useColors = e.useColors(), s.color = e.selectColor(t), s.extend = n, s.destroy = e.destroy, Object.defineProperty(s, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null === o ? e.enabled(t) : o,
                        set: t => {
                            o = t
                        }
                    }), "function" == typeof e.init && e.init(s), s
                }

                function n(t, r) {
                    var n = e(this.namespace + (void 0 === r ? ":" : r) + t);
                    return n.log = this.log, n
                }

                function o(t) {
                    return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return e.debug = e, e.default = e, e.coerce = function(t) {
                    if (t instanceof Error) return t.stack || t.message;
                    return t
                }, e.disable = function() {
                    var t = [...e.names.map(o), ...e.skips.map(o).map((t => "-" + t))].join(",");
                    return e.enable(""), t
                }, e.enable = function(t) {
                    var r;
                    e.save(t), e.names = [], e.skips = [];
                    var n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                        o = n.length;
                    for (r = 0; r < o; r++) n[r] && ("-" === (t = n[r].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
                }, e.enabled = function(t) {
                    if ("*" === t[t.length - 1]) return !0;
                    var r, n;
                    for (r = 0, n = e.skips.length; r < n; r++)
                        if (e.skips[r].test(t)) return !1;
                    for (r = 0, n = e.names.length; r < n; r++)
                        if (e.names[r].test(t)) return !0;
                    return !1
                }, e.humanize = r("FGiv"), e.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(t).forEach((r => {
                    e[r] = t[r]
                })), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function(t) {
                    for (var r = 0, n = 0; n < t.length; n++) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
                    return e.colors[Math.abs(r) % e.colors.length]
                }, e.enable(e.load()), e
            }
        },
        AdPF: function(t, e, r) {
            var n = r("yeub"),
                o = r("2UHX");
            t.exports = function(t) {
                var e = t.xdomain,
                    r = t.xscheme,
                    s = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!e || n)) return new XMLHttpRequest
                } catch (i) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !r && s) return new XDomainRequest
                } catch (i) {}
                if (!e) try {
                    return new(o[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (i) {}
            }
        },
        Aplp: function(t, e, r) {
            "use strict";
            r("rB9j"), r("EnZy");
            var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                s = {},
                i = 0,
                a = 0;

            function c(t) {
                var e = "";
                do {
                    e = o[t % 64] + e, t = Math.floor(t / 64)
                } while (t > 0);
                return e
            }

            function h() {
                var t = c(+new Date);
                return t !== n ? (i = 0, n = t) : t + "." + c(i++)
            }
            for (; a < 64; a++) s[o[a]] = a;
            h.encode = c, h.decode = function(t) {
                var e = 0;
                for (a = 0; a < t.length; a++) e = 64 * e + s[t.charAt(a)];
                return e
            }, t.exports = h
        },
        Byvj: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.on = void 0, e.on = function(t, e, r) {
                return t.on(e, r),
                    function() {
                        t.off(e, r)
                    }
            }
        },
        C2QD: function(t, e) {
            function r(t) {
                t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
            }
            t.exports = r, r.prototype.duration = function() {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random(),
                        r = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r
                }
                return 0 | Math.min(t, this.max)
            }, r.prototype.reset = function() {
                this.attempts = 0
            }, r.prototype.setMin = function(t) {
                this.ms = t
            }, r.prototype.setMax = function(t) {
                this.max = t
            }, r.prototype.setJitter = function(t) {
                this.jitter = t
            }
        },
        CIKq: function(t, e, r) {
            (function(e) {
                var n = r("Gbct"),
                    o = r("KoVT"),
                    s = r("TypT"),
                    i = r("Aplp"),
                    {
                        pick: a
                    } = r("Eexf"),
                    {
                        WebSocket: c,
                        usingBrowserWebSocket: h,
                        defaultBinaryType: u,
                        nextTick: f
                    } = r("X071"),
                    p = r("HjK1")("engine.io-client:websocket"),
                    l = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
                class d extends n {
                    constructor(t) {
                        super(t), this.supportsBinary = !t.forceBase64
                    }
                    get name() {
                        return "websocket"
                    }
                    doOpen() {
                        if (this.check()) {
                            var t = this.uri(),
                                e = this.opts.protocols,
                                r = l ? {} : a(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                            this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
                            try {
                                this.ws = h && !l ? e ? new c(t, e) : new c(t) : new c(t, e, r)
                            } catch (n) {
                                return this.emit("error", n)
                            }
                            this.ws.binaryType = this.socket.binaryType || u, this.addEventListeners()
                        }
                    }
                    addEventListeners() {
                        this.ws.onopen = () => {
                            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
                        }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = t => this.onData(t.data), this.ws.onerror = t => this.onError("websocket error", t)
                    }
                    write(t) {
                        var r = this;
                        this.writable = !1;
                        for (var n = function(n) {
                                var s = t[n],
                                    i = n === t.length - 1;
                                o.encodePacket(s, r.supportsBinary, (t => {
                                    var n = {};
                                    h || (s.options && (n.compress = s.options.compress), r.opts.perMessageDeflate && ("string" == typeof t ? e.byteLength(t) : t.length) < r.opts.perMessageDeflate.threshold && (n.compress = !1));
                                    try {
                                        h ? r.ws.send(t) : r.ws.send(t, n)
                                    } catch (o) {
                                        p("websocket closed before onclose event")
                                    }
                                    i && f((() => {
                                        r.writable = !0, r.emit("drain")
                                    }), r.setTimeoutFn)
                                }))
                            }, s = 0; s < t.length; s++) n(s)
                    }
                    onClose() {
                        n.prototype.onClose.call(this)
                    }
                    doClose() {
                        void 0 !== this.ws && (this.ws.close(), this.ws = null)
                    }
                    uri() {
                        var t = this.query || {},
                            e = this.opts.secure ? "wss" : "ws",
                            r = "";
                        return this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (r = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = i()), this.supportsBinary || (t.b64 = 1), (t = s.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + t
                    }
                    check() {
                        return !(!c || "__initialize" in c && this.name === d.prototype.name)
                    }
                }
                t.exports = d
            }).call(this, r("HDXh").Buffer)
        },
        CUme: function(t, e, r) {
            var n = r("Gbct"),
                o = r("TypT"),
                s = r("KoVT"),
                i = r("Aplp"),
                a = r("HjK1")("engine.io-client:polling");
            t.exports = class extends n {
                get name() {
                    return "polling"
                }
                doOpen() {
                    this.poll()
                }
                pause(t) {
                    this.readyState = "pausing";
                    var e = () => {
                        a("paused"), this.readyState = "paused", t()
                    };
                    if (this.polling || !this.writable) {
                        var r = 0;
                        this.polling && (a("we are currently polling - waiting to pause"), r++, this.once("pollComplete", (function() {
                            a("pre-pause polling complete"), --r || e()
                        }))), this.writable || (a("we are currently writing - waiting to pause"), r++, this.once("drain", (function() {
                            a("pre-pause writing complete"), --r || e()
                        })))
                    } else e()
                }
                poll() {
                    a("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
                }
                onData(t) {
                    a("polling got data %s", t);
                    s.decodePayload(t, this.socket.binaryType).forEach((t => {
                        if ("opening" === this.readyState && "open" === t.type && this.onOpen(), "close" === t.type) return this.onClose(), !1;
                        this.onPacket(t)
                    })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : a('ignoring poll - transport state "%s"', this.readyState))
                }
                doClose() {
                    var t = () => {
                        a("writing close packet"), this.write([{
                            type: "close"
                        }])
                    };
                    "open" === this.readyState ? (a("transport open - closing"), t()) : (a("transport not open - deferring close"), this.once("open", t))
                }
                write(t) {
                    this.writable = !1, s.encodePayload(t, (t => {
                        this.doWrite(t, (() => {
                            this.writable = !0, this.emit("drain")
                        }))
                    }))
                }
                uri() {
                    var t = this.query || {},
                        e = this.opts.secure ? "https" : "http",
                        r = "";
                    return !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = i()), this.supportsBinary || t.sid || (t.b64 = 1), t = o.encode(t), this.opts.port && ("https" === e && 443 !== Number(this.opts.port) || "http" === e && 80 !== Number(this.opts.port)) && (r = ":" + this.opts.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + t
                }
            }
        },
        Cl5A: function(t, e, r) {
            r("rB9j"), r("UxlC");
            var n, o = r("CUme"),
                s = r("2UHX"),
                i = /\n/g,
                a = /\\n/g;
            t.exports = class extends o {
                constructor(t) {
                    super(t), this.query = this.query || {}, n || (n = s.___eio = s.___eio || []), this.index = n.length, n.push(this.onData.bind(this)), this.query.j = this.index
                }
                get supportsBinary() {
                    return !1
                }
                doClose() {
                    this.script && (this.script.onerror = () => {}, this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), super.doClose()
                }
                doPoll() {
                    var t = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = t => {
                        this.onError("jsonp poll error", t)
                    };
                    var e = document.getElementsByTagName("script")[0];
                    e ? e.parentNode.insertBefore(t, e) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && this.setTimeoutFn((function() {
                        var t = document.createElement("iframe");
                        document.body.appendChild(t), document.body.removeChild(t)
                    }), 100)
                }
                doWrite(t, e) {
                    var r;
                    if (!this.form) {
                        var n = document.createElement("form"),
                            o = document.createElement("textarea"),
                            s = this.iframeId = "eio_iframe_" + this.index;
                        n.className = "socketio", n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px", n.target = s, n.method = "POST", n.setAttribute("accept-charset", "utf-8"), o.name = "d", n.appendChild(o), document.body.appendChild(n), this.form = n, this.area = o
                    }

                    function c() {
                        h(), e()
                    }
                    this.form.action = this.uri();
                    var h = () => {
                        if (this.iframe) try {
                            this.form.removeChild(this.iframe)
                        } catch (e) {
                            this.onError("jsonp polling iframe removal error", e)
                        }
                        try {
                            var t = '<iframe src="javascript:0" name="' + this.iframeId + '">';
                            r = document.createElement(t)
                        } catch (e) {
                            (r = document.createElement("iframe")).name = this.iframeId, r.src = "javascript:0"
                        }
                        r.id = this.iframeId, this.form.appendChild(r), this.iframe = r
                    };
                    h(), t = t.replace(a, "\\\n"), this.area.value = t.replace(i, "\\n");
                    try {
                        this.form.submit()
                    } catch (u) {}
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = () => {
                        "complete" === this.iframe.readyState && c()
                    } : this.iframe.onload = c
                }
            }
        },
        Eexf: function(t, e, r) {
            r("E9XD");
            var n = r("2UHX");
            t.exports.pick = function(t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                return r.reduce(((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e)), {})
            };
            var o = setTimeout,
                s = clearTimeout;
            t.exports.installTimerFunctions = (t, e) => {
                e.useNativeTimers ? (t.setTimeoutFn = o.bind(n), t.clearTimeoutFn = s.bind(n)) : (t.setTimeoutFn = setTimeout.bind(n), t.clearTimeoutFn = clearTimeout.bind(n))
            }
        },
        FGiv: function(t, e, r) {
            r("rB9j");
            var n = 1e3,
                o = 60 * n,
                s = 60 * o,
                i = 24 * s,
                a = 7 * i,
                c = 365.25 * i;

            function h(t, e, r, n) {
                var o = e >= 1.5 * r;
                return Math.round(t / r) + " " + n + (o ? "s" : "")
            }
            t.exports = function(t, e) {
                e = e || {};
                var r = typeof t;
                if ("string" === r && t.length > 0) return function(t) {
                    if ((t = String(t)).length > 100) return;
                    var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                    if (!e) return;
                    var r = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return r * c;
                        case "weeks":
                        case "week":
                        case "w":
                            return r * a;
                        case "days":
                        case "day":
                        case "d":
                            return r * i;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return r * s;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return r * o;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return r * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return r;
                        default:
                            return
                    }
                }(t);
                if ("number" === r && isFinite(t)) return e.long ? function(t) {
                    var e = Math.abs(t);
                    if (e >= i) return h(t, e, i, "day");
                    if (e >= s) return h(t, e, s, "hour");
                    if (e >= o) return h(t, e, o, "minute");
                    if (e >= n) return h(t, e, n, "second");
                    return t + " ms"
                }(t) : function(t) {
                    var e = Math.abs(t);
                    if (e >= i) return Math.round(t / i) + "d";
                    if (e >= s) return Math.round(t / s) + "h";
                    if (e >= o) return Math.round(t / o) + "m";
                    if (e >= n) return Math.round(t / n) + "s";
                    return t + "ms"
                }(t);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
            }
        },
        Gbct: function(t, e, r) {
            r("4Brf");
            var n = r("KoVT"),
                o = r("cpc2"),
                {
                    installTimerFunctions: s
                } = r("Eexf"),
                i = r("HjK1")("engine.io-client:transport");
            t.exports = class extends o {
                constructor(t) {
                    super(), s(this, t), this.opts = t, this.query = t.query, this.readyState = "", this.socket = t.socket
                }
                onError(t, e) {
                    var r = new Error(t);
                    return r.type = "TransportError", r.description = e, this.emit("error", r), this
                }
                open() {
                    return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                }
                close() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                }
                send(t) {
                    "open" === this.readyState ? this.write(t) : i("transport is not open, discarding packets")
                }
                onOpen() {
                    this.readyState = "open", this.writable = !0, this.emit("open")
                }
                onData(t) {
                    var e = n.decodePacket(t, this.socket.binaryType);
                    this.onPacket(e)
                }
                onPacket(t) {
                    this.emit("packet", t)
                }
                onClose() {
                    this.readyState = "closed", this.emit("close")
                }
            }
        },
        H7XF: function(t, e, r) {
            "use strict";
            r("4mDm"), r("rOQg"), r("XMab"), r("IZzc"), r("s5qe"), e.byteLength = function(t) {
                var e = h(t),
                    r = e[0],
                    n = e[1];
                return 3 * (r + n) / 4 - n
            }, e.toByteArray = function(t) {
                var e, r, n = h(t),
                    i = n[0],
                    a = n[1],
                    c = new s(function(t, e, r) {
                        return 3 * (e + r) / 4 - r
                    }(0, i, a)),
                    u = 0,
                    f = a > 0 ? i - 4 : i;
                for (r = 0; r < f; r += 4) e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], c[u++] = e >> 16 & 255, c[u++] = e >> 8 & 255, c[u++] = 255 & e;
                2 === a && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, c[u++] = 255 & e);
                1 === a && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, c[u++] = e >> 8 & 255, c[u++] = 255 & e);
                return c
            }, e.fromByteArray = function(t) {
                for (var e, r = t.length, o = r % 3, s = [], i = 16383, a = 0, c = r - o; a < c; a += i) s.push(u(t, a, a + i > c ? c : a + i));
                1 === o ? (e = t[r - 1], s.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], s.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
                return s.join("")
            };
            for (var n = [], o = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = i.length; a < c; ++a) n[a] = i[a], o[i.charCodeAt(a)] = a;

            function h(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
            }

            function u(t, e, r) {
                for (var o, s, i = [], a = e; a < r; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), i.push(n[(s = o) >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
                return i.join("")
            }
            o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
        },
        HDXh: function(t, e, r) {
            "use strict";
            (function(t) {
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <http://feross.org>
                 * @license  MIT
                 */
                r("4mDm"), r("rOQg"), r("XMab"), r("IZzc"), r("s5qe"), r("wZ/5"), r("4Brf"), r("JfAA"), r("rB9j"), r("Rm1S"), r("JTJg"), r("vxnP"), r("UxlC"), r("SYor");
                var n = r("H7XF"),
                    o = r("kVK+"),
                    s = r("49sm");

                function i() {
                    return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function a(t, e) {
                    if (i() < e) throw new RangeError("Invalid typed array length");
                    return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
                }

                function c(t, e, r) {
                    if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, r);
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return f(this, t)
                    }
                    return h(this, t, e, r)
                }

                function h(t, e, r, n) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
                        if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                        e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
                        c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = p(t, e);
                        return t
                    }(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
                        "string" == typeof r && "" !== r || (r = "utf8");
                        if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                        var n = 0 | d(e, r),
                            o = (t = a(t, n)).write(e, r);
                        o !== n && (t = t.slice(0, o));
                        return t
                    }(t, e, r) : function(t, e) {
                        if (c.isBuffer(e)) {
                            var r = 0 | l(e.length);
                            return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);
                            if ("Buffer" === e.type && s(e.data)) return p(t, e.data)
                        }
                        var n;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function u(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function f(t, e) {
                    if (u(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !c.TYPED_ARRAY_SUPPORT)
                        for (var r = 0; r < e; ++r) t[r] = 0;
                    return t
                }

                function p(t, e) {
                    var r = e.length < 0 ? 0 : 0 | l(e.length);
                    t = a(t, r);
                    for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
                    return t
                }

                function l(t) {
                    if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                    return 0 | t
                }

                function d(t, e) {
                    if (c.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var r = t.length;
                    if (0 === r) return 0;
                    for (var n = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return Y(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return q(t).length;
                        default:
                            if (n) return Y(t).length;
                            e = ("" + e).toLowerCase(), n = !0
                    }
                }

                function g(t, e, r) {
                    var n = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return P(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return x(this, e, r);
                        case "ascii":
                            return _(this, e, r);
                        case "latin1":
                        case "binary":
                            return B(this, e, r);
                        case "base64":
                            return k(this, e, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return S(this, e, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), n = !0
                    }
                }

                function y(t, e, r) {
                    var n = t[e];
                    t[e] = t[r], t[r] = n
                }

                function m(t, e, r, n, o) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                        if (o) return -1;
                        r = t.length - 1
                    } else if (r < 0) {
                        if (!o) return -1;
                        r = 0
                    }
                    if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, r, n, o);
                    if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : v(t, [e], r, n, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function v(t, e, r, n, o) {
                    var s, i = 1,
                        a = t.length,
                        c = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        i = 2, a /= 2, c /= 2, r /= 2
                    }

                    function h(t, e) {
                        return 1 === i ? t[e] : t.readUInt16BE(e * i)
                    }
                    if (o) {
                        var u = -1;
                        for (s = r; s < a; s++)
                            if (h(t, s) === h(e, -1 === u ? 0 : s - u)) {
                                if (-1 === u && (u = s), s - u + 1 === c) return u * i
                            } else -1 !== u && (s -= s - u), u = -1
                    } else
                        for (r + c > a && (r = a - c), s = r; s >= 0; s--) {
                            for (var f = !0, p = 0; p < c; p++)
                                if (h(t, s + p) !== h(e, p)) {
                                    f = !1;
                                    break
                                } if (f) return s
                        }
                    return -1
                }

                function C(t, e, r, n) {
                    r = Number(r) || 0;
                    var o = t.length - r;
                    n ? (n = Number(n)) > o && (n = o) : n = o;
                    var s = e.length;
                    if (s % 2 != 0) throw new TypeError("Invalid hex string");
                    n > s / 2 && (n = s / 2);
                    for (var i = 0; i < n; ++i) {
                        var a = parseInt(e.substr(2 * i, 2), 16);
                        if (isNaN(a)) return i;
                        t[r + i] = a
                    }
                    return i
                }

                function b(t, e, r, n) {
                    return K(Y(e, t.length - r), t, r, n)
                }

                function w(t, e, r, n) {
                    return K(function(t) {
                        for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                        return e
                    }(e), t, r, n)
                }

                function E(t, e, r, n) {
                    return w(t, e, r, n)
                }

                function A(t, e, r, n) {
                    return K(q(e), t, r, n)
                }

                function F(t, e, r, n) {
                    return K(function(t, e) {
                        for (var r, n, o, s = [], i = 0; i < t.length && !((e -= 2) < 0); ++i) n = (r = t.charCodeAt(i)) >> 8, o = r % 256, s.push(o), s.push(n);
                        return s
                    }(e, t.length - r), t, r, n)
                }

                function k(t, e, r) {
                    return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
                }

                function x(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var n = [], o = e; o < r;) {
                        var s, i, a, c, h = t[o],
                            u = null,
                            f = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                        if (o + f <= r) switch (f) {
                            case 1:
                                h < 128 && (u = h);
                                break;
                            case 2:
                                128 == (192 & (s = t[o + 1])) && (c = (31 & h) << 6 | 63 & s) > 127 && (u = c);
                                break;
                            case 3:
                                s = t[o + 1], i = t[o + 2], 128 == (192 & s) && 128 == (192 & i) && (c = (15 & h) << 12 | (63 & s) << 6 | 63 & i) > 2047 && (c < 55296 || c > 57343) && (u = c);
                                break;
                            case 4:
                                s = t[o + 1], i = t[o + 2], a = t[o + 3], 128 == (192 & s) && 128 == (192 & i) && 128 == (192 & a) && (c = (15 & h) << 18 | (63 & s) << 12 | (63 & i) << 6 | 63 & a) > 65535 && c < 1114112 && (u = c)
                        }
                        null === u ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), o += f
                    }
                    return function(t) {
                        var e = t.length;
                        if (e <= T) return String.fromCharCode.apply(String, t);
                        var r = "",
                            n = 0;
                        for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += T));
                        return r
                    }(n)
                }
                e.Buffer = c, e.SlowBuffer = function(t) {
                    +t != t && (t = 0);
                    return c.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (e) {
                        return !1
                    }
                }(), e.kMaxLength = i(), c.poolSize = 8192, c._augment = function(t) {
                    return t.__proto__ = c.prototype, t
                }, c.from = function(t, e, r) {
                    return h(null, t, e, r)
                }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                    value: null,
                    configurable: !0
                })), c.alloc = function(t, e, r) {
                    return function(t, e, r, n) {
                        return u(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e)
                    }(null, t, e, r)
                }, c.allocUnsafe = function(t) {
                    return f(null, t)
                }, c.allocUnsafeSlow = function(t) {
                    return f(null, t)
                }, c.isBuffer = function(t) {
                    return !(null == t || !t._isBuffer)
                }, c.compare = function(t, e) {
                    if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var r = t.length, n = e.length, o = 0, s = Math.min(r, n); o < s; ++o)
                        if (t[o] !== e[o]) {
                            r = t[o], n = e[o];
                            break
                        } return r < n ? -1 : n < r ? 1 : 0
                }, c.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, c.concat = function(t, e) {
                    if (!s(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return c.alloc(0);
                    var r;
                    if (void 0 === e)
                        for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                    var n = c.allocUnsafe(e),
                        o = 0;
                    for (r = 0; r < t.length; ++r) {
                        var i = t[r];
                        if (!c.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                        i.copy(n, o), o += i.length
                    }
                    return n
                }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                    return this
                }, c.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                    return this
                }, c.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                    return this
                }, c.prototype.toString = function() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : g.apply(this, arguments)
                }, c.prototype.equals = function(t) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === c.compare(this, t)
                }, c.prototype.inspect = function() {
                    var t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
                }, c.prototype.compare = function(t, e, r, n, o) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                    if (n >= o && e >= r) return 0;
                    if (n >= o) return -1;
                    if (e >= r) return 1;
                    if (this === t) return 0;
                    for (var s = (o >>>= 0) - (n >>>= 0), i = (r >>>= 0) - (e >>>= 0), a = Math.min(s, i), h = this.slice(n, o), u = t.slice(e, r), f = 0; f < a; ++f)
                        if (h[f] !== u[f]) {
                            s = h[f], i = u[f];
                            break
                        } return s < i ? -1 : i < s ? 1 : 0
                }, c.prototype.includes = function(t, e, r) {
                    return -1 !== this.indexOf(t, e, r)
                }, c.prototype.indexOf = function(t, e, r) {
                    return m(this, t, e, r, !0)
                }, c.prototype.lastIndexOf = function(t, e, r) {
                    return m(this, t, e, r, !1)
                }, c.prototype.write = function(t, e, r, n) {
                    if (void 0 === e) n = "utf8", r = this.length, e = 0;
                    else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                    }
                    var o = this.length - e;
                    if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var s = !1;;) switch (n) {
                        case "hex":
                            return C(this, t, e, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, t, e, r);
                        case "ascii":
                            return w(this, t, e, r);
                        case "latin1":
                        case "binary":
                            return E(this, t, e, r);
                        case "base64":
                            return A(this, t, e, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return F(this, t, e, r);
                        default:
                            if (s) throw new TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), s = !0
                    }
                }, c.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var T = 4096;

                function _(t, e, r) {
                    var n = "";
                    r = Math.min(t.length, r);
                    for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
                    return n
                }

                function B(t, e, r) {
                    var n = "";
                    r = Math.min(t.length, r);
                    for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                    return n
                }

                function P(t, e, r) {
                    var n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    for (var o = "", s = e; s < r; ++s) o += M(t[s]);
                    return o
                }

                function S(t, e, r) {
                    for (var n = t.slice(e, r), o = "", s = 0; s < n.length; s += 2) o += String.fromCharCode(n[s] + 256 * n[s + 1]);
                    return o
                }

                function R(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
                }

                function O(t, e, r, n, o, s) {
                    if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > o || e < s) throw new RangeError('"value" argument is out of bounds');
                    if (r + n > t.length) throw new RangeError("Index out of range")
                }

                function N(t, e, r, n) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var o = 0, s = Math.min(t.length - r, 2); o < s; ++o) t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
                }

                function j(t, e, r, n) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var o = 0, s = Math.min(t.length - r, 4); o < s; ++o) t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255
                }

                function I(t, e, r, n, o, s) {
                    if (r + n > t.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range")
                }

                function U(t, e, r, n, s) {
                    return s || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4
                }

                function D(t, e, r, n, s) {
                    return s || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8
                }
                c.prototype.slice = function(t, e) {
                    var r, n = this.length;
                    if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), c.TYPED_ARRAY_SUPPORT)(r = this.subarray(t, e)).__proto__ = c.prototype;
                    else {
                        var o = e - t;
                        r = new c(o, void 0);
                        for (var s = 0; s < o; ++s) r[s] = this[s + t]
                    }
                    return r
                }, c.prototype.readUIntLE = function(t, e, r) {
                    t |= 0, e |= 0, r || R(t, e, this.length);
                    for (var n = this[t], o = 1, s = 0; ++s < e && (o *= 256);) n += this[t + s] * o;
                    return n
                }, c.prototype.readUIntBE = function(t, e, r) {
                    t |= 0, e |= 0, r || R(t, e, this.length);
                    for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;
                    return n
                }, c.prototype.readUInt8 = function(t, e) {
                    return e || R(t, 1, this.length), this[t]
                }, c.prototype.readUInt16LE = function(t, e) {
                    return e || R(t, 2, this.length), this[t] | this[t + 1] << 8
                }, c.prototype.readUInt16BE = function(t, e) {
                    return e || R(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, c.prototype.readUInt32LE = function(t, e) {
                    return e || R(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, c.prototype.readUInt32BE = function(t, e) {
                    return e || R(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, c.prototype.readIntLE = function(t, e, r) {
                    t |= 0, e |= 0, r || R(t, e, this.length);
                    for (var n = this[t], o = 1, s = 0; ++s < e && (o *= 256);) n += this[t + s] * o;
                    return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n
                }, c.prototype.readIntBE = function(t, e, r) {
                    t |= 0, e |= 0, r || R(t, e, this.length);
                    for (var n = e, o = 1, s = this[t + --n]; n > 0 && (o *= 256);) s += this[t + --n] * o;
                    return s >= (o *= 128) && (s -= Math.pow(2, 8 * e)), s
                }, c.prototype.readInt8 = function(t, e) {
                    return e || R(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, c.prototype.readInt16LE = function(t, e) {
                    e || R(t, 2, this.length);
                    var r = this[t] | this[t + 1] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, c.prototype.readInt16BE = function(t, e) {
                    e || R(t, 2, this.length);
                    var r = this[t + 1] | this[t] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, c.prototype.readInt32LE = function(t, e) {
                    return e || R(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, c.prototype.readInt32BE = function(t, e) {
                    return e || R(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, c.prototype.readFloatLE = function(t, e) {
                    return e || R(t, 4, this.length), o.read(this, t, !0, 23, 4)
                }, c.prototype.readFloatBE = function(t, e) {
                    return e || R(t, 4, this.length), o.read(this, t, !1, 23, 4)
                }, c.prototype.readDoubleLE = function(t, e) {
                    return e || R(t, 8, this.length), o.read(this, t, !0, 52, 8)
                }, c.prototype.readDoubleBE = function(t, e) {
                    return e || R(t, 8, this.length), o.read(this, t, !1, 52, 8)
                }, c.prototype.writeUIntLE = function(t, e, r, n) {
                    (t = +t, e |= 0, r |= 0, n) || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                    var o = 1,
                        s = 0;
                    for (this[e] = 255 & t; ++s < r && (o *= 256);) this[e + s] = t / o & 255;
                    return e + r
                }, c.prototype.writeUIntBE = function(t, e, r, n) {
                    (t = +t, e |= 0, r |= 0, n) || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                    var o = r - 1,
                        s = 1;
                    for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) this[e + o] = t / s & 255;
                    return e + r
                }, c.prototype.writeUInt8 = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, c.prototype.writeUInt16LE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
                }, c.prototype.writeUInt16BE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
                }, c.prototype.writeUInt32LE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : j(this, t, e, !0), e + 4
                }, c.prototype.writeUInt32BE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
                }, c.prototype.writeIntLE = function(t, e, r, n) {
                    if (t = +t, e |= 0, !n) {
                        var o = Math.pow(2, 8 * r - 1);
                        O(this, t, e, r, o - 1, -o)
                    }
                    var s = 0,
                        i = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++s < r && (i *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / i >> 0) - a & 255;
                    return e + r
                }, c.prototype.writeIntBE = function(t, e, r, n) {
                    if (t = +t, e |= 0, !n) {
                        var o = Math.pow(2, 8 * r - 1);
                        O(this, t, e, r, o - 1, -o)
                    }
                    var s = r - 1,
                        i = 1,
                        a = 0;
                    for (this[e + s] = 255 & t; --s >= 0 && (i *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / i >> 0) - a & 255;
                    return e + r
                }, c.prototype.writeInt8 = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, c.prototype.writeInt16LE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
                }, c.prototype.writeInt16BE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
                }, c.prototype.writeInt32LE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : j(this, t, e, !0), e + 4
                }, c.prototype.writeInt32BE = function(t, e, r) {
                    return t = +t, e |= 0, r || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
                }, c.prototype.writeFloatLE = function(t, e, r) {
                    return U(this, t, e, !0, r)
                }, c.prototype.writeFloatBE = function(t, e, r) {
                    return U(this, t, e, !1, r)
                }, c.prototype.writeDoubleLE = function(t, e, r) {
                    return D(this, t, e, !0, r)
                }, c.prototype.writeDoubleBE = function(t, e, r) {
                    return D(this, t, e, !1, r)
                }, c.prototype.copy = function(t, e, r, n) {
                    if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                    var o, s = n - r;
                    if (this === t && r < e && e < n)
                        for (o = s - 1; o >= 0; --o) t[o + e] = this[o + r];
                    else if (s < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < s; ++o) t[o + e] = this[o + r];
                    else Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
                    return s
                }, c.prototype.fill = function(t, e, r, n) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
                            var o = t.charCodeAt(0);
                            o < 256 && (t = o)
                        }
                        if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                        if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                    } else "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                    if (r <= e) return this;
                    var s;
                    if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                        for (s = e; s < r; ++s) this[s] = t;
                    else {
                        var i = c.isBuffer(t) ? t : Y(new c(t, n).toString()),
                            a = i.length;
                        for (s = 0; s < r - e; ++s) this[s + e] = i[s % a]
                    }
                    return this
                };
                var L = /[^+\/0-9A-Za-z-_]/g;

                function M(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function Y(t, e) {
                    var r;
                    e = e || 1 / 0;
                    for (var n = t.length, o = null, s = [], i = 0; i < n; ++i) {
                        if ((r = t.charCodeAt(i)) > 55295 && r < 57344) {
                            if (!o) {
                                if (r > 56319) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                if (i + 1 === n) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                o = r;
                                continue
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && s.push(239, 191, 189), o = r;
                                continue
                            }
                            r = 65536 + (o - 55296 << 10 | r - 56320)
                        } else o && (e -= 3) > -1 && s.push(239, 191, 189);
                        if (o = null, r < 128) {
                            if ((e -= 1) < 0) break;
                            s.push(r)
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            s.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else {
                            if (!(r < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        }
                    }
                    return s
                }

                function q(t) {
                    return n.toByteArray(function(t) {
                        if ((t = function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                            }(t).replace(L, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function K(t, e, r, n) {
                    for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
                    return o
                }
            }).call(this, r("yLpj"))
        },
        HjK1: function(t, e, r) {
            (function(n) {
                var o;
                r("rB9j"), r("Rm1S"), r("TWNs"), r("JfAA"), r("UxlC"), e.formatArgs = function(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
                    var r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    var n = 0,
                        o = 0;
                    e[0].replace(/%[a-zA-Z%]/g, (t => {
                        "%%" !== t && (n++, "%c" === t && (o = n))
                    })), e.splice(o, 0, r)
                }, e.save = function(t) {
                    try {
                        t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
                    } catch (r) {}
                }, e.load = function() {
                    var t;
                    try {
                        t = e.storage.getItem("debug")
                    } catch (r) {}!t && void 0 !== n && "env" in n && (t = n.env.DEBUG);
                    return t
                }, e.useColors = function() {
                    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }, e.storage = function() {
                    try {
                        return localStorage
                    } catch (t) {}
                }(), e.destroy = (o = !1, () => {
                    o || (o = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {}), t.exports = r("utJY")(e);
                var {
                    formatters: s
                } = t.exports;
                s.j = function(t) {
                    try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }).call(this, r("8oxB"))
        },
        KFhd: function(t, e, r) {
            r("wZ/5"), r("rOQg"), r("rB9j"), r("EnZy");
            var {
                PACKET_TYPES: n
            } = r("gC2B"), o = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), s = "function" == typeof ArrayBuffer, i = (t, e) => {
                var r = new FileReader;
                return r.onload = function() {
                    var t = r.result.split(",")[1];
                    e("b" + t)
                }, r.readAsDataURL(t)
            };
            t.exports = (t, e, r) => {
                var a, {
                    type: c,
                    data: h
                } = t;
                return o && h instanceof Blob ? e ? r(h) : i(h, r) : s && (h instanceof ArrayBuffer || (a = h, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(a) : a && a.buffer instanceof ArrayBuffer)) ? e ? r(h instanceof ArrayBuffer ? h : h.buffer) : i(new Blob([h]), r) : r(n[c] + (h || ""))
            }
        },
        KoVT: function(t, e, r) {
            r("rB9j"), r("EnZy");
            var n = r("KFhd"),
                o = r("fP3r"),
                s = String.fromCharCode(30);
            t.exports = {
                protocol: 4,
                encodePacket: n,
                encodePayload: (t, e) => {
                    var r = t.length,
                        o = new Array(r),
                        i = 0;
                    t.forEach(((t, a) => {
                        n(t, !1, (t => {
                            o[a] = t, ++i === r && e(o.join(s))
                        }))
                    }))
                },
                decodePacket: o,
                decodePayload: (t, e) => {
                    for (var r = t.split(s), n = [], i = 0; i < r.length; i++) {
                        var a = o(r[i], e);
                        if (n.push(a), "error" === a.type) break
                    }
                    return n
                }
            }
        },
        L8wN: function(t, e, r) {
            r("rB9j"), r("UxlC"), r("EnZy"), r("TWNs"), r("JfAA"), r("4mDm"), r("3bBZ"), t.exports = function(t) {
                function e(t) {
                    var r, o = null;

                    function s() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if (s.enabled) {
                            var i = s,
                                a = Number(new Date),
                                c = a - (r || a);
                            i.diff = c, i.prev = r, i.curr = a, r = a, n[0] = e.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                            var h = 0;
                            n[0] = n[0].replace(/%([a-zA-Z%])/g, ((t, r) => {
                                if ("%%" === t) return "%";
                                h++;
                                var o = e.formatters[r];
                                if ("function" == typeof o) {
                                    var s = n[h];
                                    t = o.call(i, s), n.splice(h, 1), h--
                                }
                                return t
                            })), e.formatArgs.call(i, n);
                            var u = i.log || e.log;
                            u.apply(i, n)
                        }
                    }
                    return s.namespace = t, s.useColors = e.useColors(), s.color = e.selectColor(t), s.extend = n, s.destroy = e.destroy, Object.defineProperty(s, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null === o ? e.enabled(t) : o,
                        set: t => {
                            o = t
                        }
                    }), "function" == typeof e.init && e.init(s), s
                }

                function n(t, r) {
                    var n = e(this.namespace + (void 0 === r ? ":" : r) + t);
                    return n.log = this.log, n
                }

                function o(t) {
                    return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return e.debug = e, e.default = e, e.coerce = function(t) {
                    if (t instanceof Error) return t.stack || t.message;
                    return t
                }, e.disable = function() {
                    var t = [...e.names.map(o), ...e.skips.map(o).map((t => "-" + t))].join(",");
                    return e.enable(""), t
                }, e.enable = function(t) {
                    var r;
                    e.save(t), e.names = [], e.skips = [];
                    var n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                        o = n.length;
                    for (r = 0; r < o; r++) n[r] && ("-" === (t = n[r].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
                }, e.enabled = function(t) {
                    if ("*" === t[t.length - 1]) return !0;
                    var r, n;
                    for (r = 0, n = e.skips.length; r < n; r++)
                        if (e.skips[r].test(t)) return !1;
                    for (r = 0, n = e.names.length; r < n; r++)
                        if (e.names[r].test(t)) return !0;
                    return !1
                }, e.humanize = r("FGiv"), e.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(t).forEach((r => {
                    e[r] = t[r]
                })), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function(t) {
                    for (var r = 0, n = 0; n < t.length; n++) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
                    return e.colors[Math.abs(r) % e.colors.length]
                }, e.enable(e.load()), e
            }
        },
        PVQj: function(t, e, r) {
            "use strict";
            r("4mDm"), r("3bBZ"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Manager = void 0;
            var n = r("lKxJ"),
                o = r("eFEk"),
                s = r("cpc2"),
                i = r("ggWO"),
                a = r("Byvj"),
                c = r("C2QD"),
                h = r("x7D4")("socket.io-client:manager");
            e.Manager = class extends s {
                constructor(t, e) {
                    super(), this.nsps = {}, this.subs = [], t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new c({
                        min: this.reconnectionDelay(),
                        max: this.reconnectionDelayMax(),
                        jitter: this.randomizationFactor()
                    }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this._readyState = "closed", this.uri = t;
                    var r = e.parser || i;
                    this.encoder = new r.Encoder, this.decoder = new r.Decoder, this._autoConnect = !1 !== e.autoConnect, this._autoConnect && this.open()
                }
                reconnection(t) {
                    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
                }
                reconnectionAttempts(t) {
                    return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
                }
                reconnectionDelay(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this)
                }
                randomizationFactor(t) {
                    var e;
                    return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this)
                }
                reconnectionDelayMax(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this)
                }
                timeout(t) {
                    return arguments.length ? (this._timeout = t, this) : this._timeout
                }
                maybeReconnectOnOpen() {
                    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                }
                open(t) {
                    if (h("readyState %s", this._readyState), ~this._readyState.indexOf("open")) return this;
                    h("opening %s", this.uri), this.engine = n(this.uri, this.opts);
                    var e = this.engine,
                        r = this;
                    this._readyState = "opening", this.skipReconnect = !1;
                    var o = a.on(e, "open", (function() {
                            r.onopen(), t && t()
                        })),
                        s = a.on(e, "error", (e => {
                            h("error"), r.cleanup(), r._readyState = "closed", super.emit("error", e), t ? t(e) : r.maybeReconnectOnOpen()
                        }));
                    if (!1 !== this._timeout) {
                        var i = this._timeout;
                        h("connect attempt will timeout after %d", i), 0 === i && o();
                        var c = setTimeout((() => {
                            h("connect attempt timed out after %d", i), o(), e.close(), e.emit("error", new Error("timeout"))
                        }), i);
                        this.subs.push((function() {
                            clearTimeout(c)
                        }))
                    }
                    return this.subs.push(o), this.subs.push(s), this
                }
                connect(t) {
                    return this.open(t)
                }
                onopen() {
                    h("open"), this.cleanup(), this._readyState = "open", super.emit("open");
                    var t = this.engine;
                    this.subs.push(a.on(t, "ping", this.onping.bind(this)), a.on(t, "data", this.ondata.bind(this)), a.on(t, "error", this.onerror.bind(this)), a.on(t, "close", this.onclose.bind(this)), a.on(this.decoder, "decoded", this.ondecoded.bind(this)))
                }
                onping() {
                    super.emit("ping")
                }
                ondata(t) {
                    this.decoder.add(t)
                }
                ondecoded(t) {
                    super.emit("packet", t)
                }
                onerror(t) {
                    h("error", t), super.emit("error", t)
                }
                socket(t, e) {
                    var r = this.nsps[t];
                    return r || (r = new o.Socket(this, t, e), this.nsps[t] = r), r
                }
                _destroy(t) {
                    var e = Object.keys(this.nsps);
                    for (var r of e) {
                        if (this.nsps[r].active) return void h("socket %s is still active, skipping close", r)
                    }
                    this._close()
                }
                _packet(t) {
                    h("writing packet %j", t);
                    for (var e = this.encoder.encode(t), r = 0; r < e.length; r++) this.engine.write(e[r], t.options)
                }
                cleanup() {
                    h("cleanup"), this.subs.forEach((t => t())), this.subs.length = 0, this.decoder.destroy()
                }
                _close() {
                    h("disconnect"), this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close()
                }
                disconnect() {
                    return this._close()
                }
                onclose(t) {
                    h("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", super.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
                }
                reconnect() {
                    if (this._reconnecting || this.skipReconnect) return this;
                    var t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), super.emit("reconnect_failed"), this._reconnecting = !1;
                    else {
                        var e = this.backoff.duration();
                        h("will wait %dms before reconnect attempt", e), this._reconnecting = !0;
                        var r = setTimeout((() => {
                            t.skipReconnect || (h("attempting reconnect"), super.emit("reconnect_attempt", t.backoff.attempts), t.skipReconnect || t.open((e => {
                                e ? (h("reconnect attempt error"), t._reconnecting = !1, t.reconnect(), super.emit("reconnect_error", e)) : (h("reconnect success"), t.onreconnect())
                            })))
                        }), e);
                        this.subs.push((function() {
                            clearTimeout(r)
                        }))
                    }
                }
                onreconnect() {
                    var t = this.backoff.attempts;
                    this._reconnecting = !1, this.backoff.reset(), super.emit("reconnect", t)
                }
            }
        },
        TypT: function(t, e, r) {
            r("rB9j"), r("EnZy"), e.encode = function(t) {
                var e = "";
                for (var r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                return e
            }, e.decode = function(t) {
                for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
                    var s = r[n].split("=");
                    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
                }
                return e
            }
        },
        Uxeu: function(t, e, r) {
            r("rB9j"), r("UxlC"), r("EnZy");
            var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            t.exports = function(t) {
                var e = t,
                    r = t.indexOf("["),
                    s = t.indexOf("]"); - 1 != r && -1 != s && (t = t.substring(0, r) + t.substring(r, s).replace(/:/g, ";") + t.substring(s, t.length));
                for (var i, a, c = n.exec(t || ""), h = {}, u = 14; u--;) h[o[u]] = c[u] || "";
                return -1 != r && -1 != s && (h.source = e, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), h.pathNames = function(t, e) {
                    var r = /\/{2,9}/g,
                        n = e.replace(r, "/").split("/");
                    "/" != e.substr(0, 1) && 0 !== e.length || n.splice(0, 1);
                    "/" == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1);
                    return n
                }(0, h.path), h.queryKey = (i = h.query, a = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(t, e, r) {
                    e && (a[e] = r)
                })), a), h
            }
        },
        X071: function(t, e, r) {
            r("5s+n");
            var n = r("2UHX"),
                o = "function" == typeof Promise && "function" == typeof Promise.resolve ? t => Promise.resolve().then(t) : (t, e) => e(t, 0);
            t.exports = {
                WebSocket: n.WebSocket || n.MozWebSocket,
                usingBrowserWebSocket: !0,
                defaultBinaryType: "arraybuffer",
                nextTick: o
            }
        },
        akSB: function(t, e, r) {
            var n = r("AdPF"),
                o = r("0z79"),
                s = r("Cl5A"),
                i = r("CIKq");
            e.polling = function(t) {
                var e = !1,
                    r = !1,
                    i = !1 !== t.jsonp;
                if ("undefined" != typeof location) {
                    var a = "https:" === location.protocol,
                        c = location.port;
                    c || (c = a ? 443 : 80), e = t.hostname !== location.hostname || c !== t.port, r = t.secure !== a
                }
                if (t.xdomain = e, t.xscheme = r, "open" in new n(t) && !t.forceJSONP) return new o(t);
                if (!i) throw new Error("JSONP disabled");
                return new s(t)
            }, e.websocket = i
        },
        eFEk: function(t, e, r) {
            "use strict";
            r("U3f4"), r("4mDm"), r("3bBZ"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Socket = void 0;
            var n = r("ggWO"),
                o = r("cpc2"),
                s = r("Byvj"),
                i = r("x7D4")("socket.io-client:socket"),
                a = Object.freeze({
                    connect: 1,
                    connect_error: 1,
                    disconnect: 1,
                    disconnecting: 1,
                    newListener: 1,
                    removeListener: 1
                });
            e.Socket = class extends o {
                constructor(t, e, r) {
                    super(), this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = e, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, r && r.auth && (this.auth = r.auth), this.io._autoConnect && this.open()
                }
                subEvents() {
                    if (!this.subs) {
                        var t = this.io;
                        this.subs = [s.on(t, "open", this.onopen.bind(this)), s.on(t, "packet", this.onpacket.bind(this)), s.on(t, "error", this.onerror.bind(this)), s.on(t, "close", this.onclose.bind(this))]
                    }
                }
                get active() {
                    return !!this.subs
                }
                connect() {
                    return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                }
                open() {
                    return this.connect()
                }
                send() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return e.unshift("message"), this.emit.apply(this, e), this
                }
                emit(t) {
                    if (a.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name');
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
                    r.unshift(t);
                    var s = {
                        type: n.PacketType.EVENT,
                        data: r,
                        options: {}
                    };
                    s.options.compress = !1 !== this.flags.compress, "function" == typeof r[r.length - 1] && (i("emitting packet with ack id %d", this.ids), this.acks[this.ids] = r.pop(), s.id = this.ids++);
                    var c = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                    return this.flags.volatile && (!c || !this.connected) ? i("discard packet as the transport is not currently writable") : this.connected ? this.packet(s) : this.sendBuffer.push(s), this.flags = {}, this
                }
                packet(t) {
                    t.nsp = this.nsp, this.io._packet(t)
                }
                onopen() {
                    i("transport is open - connecting"), "function" == typeof this.auth ? this.auth((t => {
                        this.packet({
                            type: n.PacketType.CONNECT,
                            data: t
                        })
                    })) : this.packet({
                        type: n.PacketType.CONNECT,
                        data: this.auth
                    })
                }
                onerror(t) {
                    this.connected || super.emit("connect_error", t)
                }
                onclose(t) {
                    i("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, super.emit("disconnect", t)
                }
                onpacket(t) {
                    if (t.nsp === this.nsp) switch (t.type) {
                        case n.PacketType.CONNECT:
                            if (t.data && t.data.sid) {
                                var e = t.data.sid;
                                this.onconnect(e)
                            } else super.emit("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case n.PacketType.EVENT:
                        case n.PacketType.BINARY_EVENT:
                            this.onevent(t);
                            break;
                        case n.PacketType.ACK:
                        case n.PacketType.BINARY_ACK:
                            this.onack(t);
                            break;
                        case n.PacketType.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case n.PacketType.CONNECT_ERROR:
                            var r = new Error(t.data.message);
                            r.data = t.data.data, super.emit("connect_error", r)
                    }
                }
                onevent(t) {
                    var e = t.data || [];
                    i("emitting event %j", e), null != t.id && (i("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
                }
                emitEvent(t) {
                    if (this._anyListeners && this._anyListeners.length) {
                        var e = this._anyListeners.slice();
                        for (var r of e) r.apply(this, t)
                    }
                    super.emit.apply(this, t)
                }
                ack(t) {
                    var e = this,
                        r = !1;
                    return function() {
                        if (!r) {
                            r = !0;
                            for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
                            i("sending ack %j", s), e.packet({
                                type: n.PacketType.ACK,
                                id: t,
                                data: s
                            })
                        }
                    }
                }
                onack(t) {
                    var e = this.acks[t.id];
                    "function" == typeof e ? (i("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : i("bad ack %s", t.id)
                }
                onconnect(t) {
                    i("socket connected with id %s", t), this.id = t, this.connected = !0, this.disconnected = !1, super.emit("connect"), this.emitBuffered()
                }
                emitBuffered() {
                    this.receiveBuffer.forEach((t => this.emitEvent(t))), this.receiveBuffer = [], this.sendBuffer.forEach((t => this.packet(t))), this.sendBuffer = []
                }
                ondisconnect() {
                    i("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
                }
                destroy() {
                    this.subs && (this.subs.forEach((t => t())), this.subs = void 0), this.io._destroy(this)
                }
                disconnect() {
                    return this.connected && (i("performing disconnect (%s)", this.nsp), this.packet({
                        type: n.PacketType.DISCONNECT
                    })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                }
                close() {
                    return this.disconnect()
                }
                compress(t) {
                    return this.flags.compress = t, this
                }
                get volatile() {
                    return this.flags.volatile = !0, this
                }
                onAny(t) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
                }
                prependAny(t) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
                }
                offAny(t) {
                    if (!this._anyListeners) return this;
                    if (t) {
                        for (var e = this._anyListeners, r = 0; r < e.length; r++)
                            if (t === e[r]) return e.splice(r, 1), this
                    } else this._anyListeners = [];
                    return this
                }
                listenersAny() {
                    return this._anyListeners || []
                }
            }
        },
        f7yz: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.url = void 0;
            var n = r("Uxeu"),
                o = r("x7D4")("socket.io-client:url");
            e.url = function(t, e, r) {
                void 0 === e && (e = "");
                var s = t;
                r = r || "undefined" != typeof location && location, null == t && (t = r.protocol + "//" + r.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? r.protocol + t : r.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== r ? r.protocol + "//" + t : "https://" + t), o("parse %s", t), s = n(t)), s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")), s.path = s.path || "/";
                var i = -1 !== s.host.indexOf(":") ? "[" + s.host + "]" : s.host;
                return s.id = s.protocol + "://" + i + ":" + s.port + e, s.href = s.protocol + "://" + i + (r && r.port === s.port ? "" : ":" + s.port), s
            }
        },
        fP3r: function(t, e, r) {
            r("wZ/5"), r("rOQg");
            var n, {
                PACKET_TYPES_REVERSE: o,
                ERROR_PACKET: s
            } = r("gC2B");
            "function" == typeof ArrayBuffer && (n = r("g5Dd"));
            var i = (t, e) => {
                    if (n) {
                        var r = n.decode(t);
                        return a(r, e)
                    }
                    return {
                        base64: !0,
                        data: t
                    }
                },
                a = (t, e) => {
                    switch (e) {
                        case "blob":
                            return t instanceof ArrayBuffer ? new Blob([t]) : t;
                        case "arraybuffer":
                        default:
                            return t
                    }
                };
            t.exports = (t, e) => {
                if ("string" != typeof t) return {
                    type: "message",
                    data: a(t, e)
                };
                var r = t.charAt(0);
                return "b" === r ? {
                    type: "message",
                    data: i(t.substring(1), e)
                } : o[r] ? t.length > 1 ? {
                    type: o[r],
                    data: t.substring(1)
                } : {
                    type: o[r]
                } : s
            }
        },
        g5Dd: function(t, e, r) {
            r("4mDm"), r("rOQg"), r("XMab"), r("IZzc"), r("s5qe"), r("wZ/5"),
                function(t) {
                    "use strict";
                    e.encode = function(e) {
                        var r, n = new Uint8Array(e),
                            o = n.length,
                            s = "";
                        for (r = 0; r < o; r += 3) s += t[n[r] >> 2], s += t[(3 & n[r]) << 4 | n[r + 1] >> 4], s += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], s += t[63 & n[r + 2]];
                        return o % 3 == 2 ? s = s.substring(0, s.length - 1) + "=" : o % 3 == 1 && (s = s.substring(0, s.length - 2) + "=="), s
                    }, e.decode = function(e) {
                        var r, n, o, s, i, a = .75 * e.length,
                            c = e.length,
                            h = 0;
                        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                        var u = new ArrayBuffer(a),
                            f = new Uint8Array(u);
                        for (r = 0; r < c; r += 4) n = t.indexOf(e[r]), o = t.indexOf(e[r + 1]), s = t.indexOf(e[r + 2]), i = t.indexOf(e[r + 3]), f[h++] = n << 2 | o >> 4, f[h++] = (15 & o) << 4 | s >> 2, f[h++] = (3 & s) << 6 | 63 & i;
                        return u
                    }
                }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        },
        gC2B: function(t, e) {
            var r = Object.create(null);
            r.open = "0", r.close = "1", r.ping = "2", r.pong = "3", r.message = "4", r.upgrade = "5", r.noop = "6";
            var n = Object.create(null);
            Object.keys(r).forEach((t => {
                n[r[t]] = t
            }));
            t.exports = {
                PACKET_TYPES: r,
                PACKET_TYPES_REVERSE: n,
                ERROR_PACKET: {
                    type: "error",
                    data: "parser error"
                }
            }
        },
        ggWO: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0;
            var n, o = r("cpc2"),
                s = r("qKib"),
                i = r("ymUC"),
                a = r("5M3R")("socket.io-parser");
            e.protocol = 5,
                function(t) {
                    t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK"
                }(n = e.PacketType || (e.PacketType = {}));
            e.Encoder = class {
                encode(t) {
                    return a("encoding packet %j", t), t.type !== n.EVENT && t.type !== n.ACK || !i.hasBinary(t) ? [this.encodeAsString(t)] : (t.type = t.type === n.EVENT ? n.BINARY_EVENT : n.BINARY_ACK, this.encodeAsBinary(t))
                }
                encodeAsString(t) {
                    var e = "" + t.type;
                    return t.type !== n.BINARY_EVENT && t.type !== n.BINARY_ACK || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data)), a("encoded %j as %s", t, e), e
                }
                encodeAsBinary(t) {
                    var e = s.deconstructPacket(t),
                        r = this.encodeAsString(e.packet),
                        n = e.buffers;
                    return n.unshift(r), n
                }
            };
            class c extends o {
                constructor() {
                    super()
                }
                add(t) {
                    var e;
                    if ("string" == typeof t)(e = this.decodeString(t)).type === n.BINARY_EVENT || e.type === n.BINARY_ACK ? (this.reconstructor = new h(e), 0 === e.attachments && super.emit("decoded", e)) : super.emit("decoded", e);
                    else {
                        if (!i.isBinary(t) && !t.base64) throw new Error("Unknown type: " + t);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, super.emit("decoded", e))
                    }
                }
                decodeString(t) {
                    var e = 0,
                        r = {
                            type: Number(t.charAt(0))
                        };
                    if (void 0 === n[r.type]) throw new Error("unknown packet type " + r.type);
                    if (r.type === n.BINARY_EVENT || r.type === n.BINARY_ACK) {
                        for (var o = e + 1;
                            "-" !== t.charAt(++e) && e != t.length;);
                        var s = t.substring(o, e);
                        if (s != Number(s) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
                        r.attachments = Number(s)
                    }
                    if ("/" === t.charAt(e + 1)) {
                        for (var i = e + 1; ++e;) {
                            if ("," === t.charAt(e)) break;
                            if (e === t.length) break
                        }
                        r.nsp = t.substring(i, e)
                    } else r.nsp = "/";
                    var h = t.charAt(e + 1);
                    if ("" !== h && Number(h) == h) {
                        for (var u = e + 1; ++e;) {
                            var f = t.charAt(e);
                            if (null == f || Number(f) != f) {
                                --e;
                                break
                            }
                            if (e === t.length) break
                        }
                        r.id = Number(t.substring(u, e + 1))
                    }
                    if (t.charAt(++e)) {
                        var p = function(t) {
                            try {
                                return JSON.parse(t)
                            } catch (e) {
                                return !1
                            }
                        }(t.substr(e));
                        if (!c.isPayloadValid(r.type, p)) throw new Error("invalid payload");
                        r.data = p
                    }
                    return a("decoded %s as %j", t, r), r
                }
                static isPayloadValid(t, e) {
                    switch (t) {
                        case n.CONNECT:
                            return "object" == typeof e;
                        case n.DISCONNECT:
                            return void 0 === e;
                        case n.CONNECT_ERROR:
                            return "string" == typeof e || "object" == typeof e;
                        case n.EVENT:
                        case n.BINARY_EVENT:
                            return Array.isArray(e) && e.length > 0;
                        case n.ACK:
                        case n.BINARY_ACK:
                            return Array.isArray(e)
                    }
                }
                destroy() {
                    this.reconstructor && this.reconstructor.finishedReconstruction()
                }
            }
            e.Decoder = c;
            class h {
                constructor(t) {
                    this.packet = t, this.buffers = [], this.reconPack = t
                }
                takeBinaryData(t) {
                    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                        var e = s.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), e
                    }
                    return null
                }
                finishedReconstruction() {
                    this.reconPack = null, this.buffers = []
                }
            }
        },
        jifJ: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Socket = e.io = e.Manager = e.protocol = void 0;
            var n = r("f7yz"),
                o = r("PVQj"),
                s = r("eFEk");
            Object.defineProperty(e, "Socket", {
                enumerable: !0,
                get: function() {
                    return s.Socket
                }
            });
            var i = r("x7D4")("socket.io-client");
            t.exports = e = c;
            var a = e.managers = {};

            function c(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, s = n.url(t, e.path),
                    c = s.source,
                    h = s.id,
                    u = s.path,
                    f = a[h] && u in a[h].nsps;
                return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (i("ignoring socket cache for %s", c), r = new o.Manager(c, e)) : (a[h] || (i("new io instance for %s", c), a[h] = new o.Manager(c, e)), r = a[h]), s.query && !e.query && (e.query = s.queryKey), r.socket(s.path, e)
            }
            e.io = c;
            var h = r("ggWO");
            Object.defineProperty(e, "protocol", {
                enumerable: !0,
                get: function() {
                    return h.protocol
                }
            }), e.connect = c;
            var u = r("PVQj");
            Object.defineProperty(e, "Manager", {
                enumerable: !0,
                get: function() {
                    return u.Manager
                }
            })
        },
        "kVK+": function(t, e) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            e.read = function(t, e, r, n, o) {
                var s, i, a = 8 * o - n - 1,
                    c = (1 << a) - 1,
                    h = c >> 1,
                    u = -7,
                    f = r ? o - 1 : 0,
                    p = r ? -1 : 1,
                    l = t[e + f];
                for (f += p, s = l & (1 << -u) - 1, l >>= -u, u += a; u > 0; s = 256 * s + t[e + f], f += p, u -= 8);
                for (i = s & (1 << -u) - 1, s >>= -u, u += n; u > 0; i = 256 * i + t[e + f], f += p, u -= 8);
                if (0 === s) s = 1 - h;
                else {
                    if (s === c) return i ? NaN : 1 / 0 * (l ? -1 : 1);
                    i += Math.pow(2, n), s -= h
                }
                return (l ? -1 : 1) * i * Math.pow(2, s - n)
            }, e.write = function(t, e, r, n, o, s) {
                var i, a, c, h = 8 * s - o - 1,
                    u = (1 << h) - 1,
                    f = u >> 1,
                    p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    l = n ? 0 : s - 1,
                    d = n ? 1 : -1,
                    g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, i = u) : (i = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -i)) < 1 && (i--, c *= 2), (e += i + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) * c >= 2 && (i++, c /= 2), i + f >= u ? (a = 0, i = u) : i + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), i += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), i = 0)); o >= 8; t[r + l] = 255 & a, l += d, a /= 256, o -= 8);
                for (i = i << o | a, h += o; h > 0; t[r + l] = 255 & i, l += d, i /= 256, h -= 8);
                t[r + l - d] |= 128 * g
            }
        },
        lKxJ: function(t, e, r) {
            var n = r("2pII");
            t.exports = (t, e) => new n(t, e), t.exports.Socket = n, t.exports.protocol = n.protocol, t.exports.Transport = r("Gbct"), t.exports.transports = r("akSB"), t.exports.parser = r("KoVT")
        },
        qKib: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.reconstructPacket = e.deconstructPacket = void 0;
            var n = r("ymUC");

            function o(t, e) {
                if (!t) return t;
                if (n.isBinary(t)) {
                    var r = {
                        _placeholder: !0,
                        num: e.length
                    };
                    return e.push(t), r
                }
                if (Array.isArray(t)) {
                    for (var s = new Array(t.length), i = 0; i < t.length; i++) s[i] = o(t[i], e);
                    return s
                }
                if ("object" == typeof t && !(t instanceof Date)) {
                    var a = {};
                    for (var c in t) t.hasOwnProperty(c) && (a[c] = o(t[c], e));
                    return a
                }
                return t
            }

            function s(t, e) {
                if (!t) return t;
                if (t && t._placeholder) return e[t.num];
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++) t[r] = s(t[r], e);
                else if ("object" == typeof t)
                    for (var n in t) t.hasOwnProperty(n) && (t[n] = s(t[n], e));
                return t
            }
            e.deconstructPacket = function(t) {
                var e = [],
                    r = t.data,
                    n = t;
                return n.data = o(r, e), n.attachments = e.length, {
                    packet: n,
                    buffers: e
                }
            }, e.reconstructPacket = function(t, e) {
                return t.data = s(t.data, e), t.attachments = void 0, t
            }
        },
        utJY: function(t, e, r) {
            r("rB9j"), r("UxlC"), r("EnZy"), r("TWNs"), r("JfAA"), r("4mDm"), r("3bBZ"), t.exports = function(t) {
                function e(t) {
                    var r, o = null;

                    function s() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        if (s.enabled) {
                            var i = s,
                                a = Number(new Date),
                                c = a - (r || a);
                            i.diff = c, i.prev = r, i.curr = a, r = a, n[0] = e.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                            var h = 0;
                            n[0] = n[0].replace(/%([a-zA-Z%])/g, ((t, r) => {
                                if ("%%" === t) return "%";
                                h++;
                                var o = e.formatters[r];
                                if ("function" == typeof o) {
                                    var s = n[h];
                                    t = o.call(i, s), n.splice(h, 1), h--
                                }
                                return t
                            })), e.formatArgs.call(i, n);
                            var u = i.log || e.log;
                            u.apply(i, n)
                        }
                    }
                    return s.namespace = t, s.useColors = e.useColors(), s.color = e.selectColor(t), s.extend = n, s.destroy = e.destroy, Object.defineProperty(s, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null === o ? e.enabled(t) : o,
                        set: t => {
                            o = t
                        }
                    }), "function" == typeof e.init && e.init(s), s
                }

                function n(t, r) {
                    var n = e(this.namespace + (void 0 === r ? ":" : r) + t);
                    return n.log = this.log, n
                }

                function o(t) {
                    return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return e.debug = e, e.default = e, e.coerce = function(t) {
                    if (t instanceof Error) return t.stack || t.message;
                    return t
                }, e.disable = function() {
                    var t = [...e.names.map(o), ...e.skips.map(o).map((t => "-" + t))].join(",");
                    return e.enable(""), t
                }, e.enable = function(t) {
                    var r;
                    e.save(t), e.names = [], e.skips = [];
                    var n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                        o = n.length;
                    for (r = 0; r < o; r++) n[r] && ("-" === (t = n[r].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
                }, e.enabled = function(t) {
                    if ("*" === t[t.length - 1]) return !0;
                    var r, n;
                    for (r = 0, n = e.skips.length; r < n; r++)
                        if (e.skips[r].test(t)) return !1;
                    for (r = 0, n = e.names.length; r < n; r++)
                        if (e.names[r].test(t)) return !0;
                    return !1
                }, e.humanize = r("FGiv"), e.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(t).forEach((r => {
                    e[r] = t[r]
                })), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function(t) {
                    for (var r = 0, n = 0; n < t.length; n++) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
                    return e.colors[Math.abs(r) % e.colors.length]
                }, e.enable(e.load()), e
            }
        },
        x7D4: function(t, e, r) {
            (function(n) {
                var o;
                r("rB9j"), r("Rm1S"), r("TWNs"), r("JfAA"), r("UxlC"), e.formatArgs = function(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
                    var r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    var n = 0,
                        o = 0;
                    e[0].replace(/%[a-zA-Z%]/g, (t => {
                        "%%" !== t && (n++, "%c" === t && (o = n))
                    })), e.splice(o, 0, r)
                }, e.save = function(t) {
                    try {
                        t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
                    } catch (r) {}
                }, e.load = function() {
                    var t;
                    try {
                        t = e.storage.getItem("debug")
                    } catch (r) {}!t && void 0 !== n && "env" in n && (t = n.env.DEBUG);
                    return t
                }, e.useColors = function() {
                    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }, e.storage = function() {
                    try {
                        return localStorage
                    } catch (t) {}
                }(), e.destroy = (o = !1, () => {
                    o || (o = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {}), t.exports = r("L8wN")(e);
                var {
                    formatters: s
                } = t.exports;
                s.j = function(t) {
                    try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }).call(this, r("8oxB"))
        },
        yeub: function(t, e) {
            try {
                t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (r) {
                t.exports = !1
            }
        },
        ymUC: function(t, e, r) {
            "use strict";
            r("wZ/5"), r("rOQg"), r("vxnP"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hasBinary = e.isBinary = void 0;
            var n = "function" == typeof ArrayBuffer,
                o = Object.prototype.toString,
                s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
                i = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);

            function a(t) {
                return n && (t instanceof ArrayBuffer || (t => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer)(t)) || s && t instanceof Blob || i && t instanceof File
            }
            e.isBinary = a, e.hasBinary = function t(e, r) {
                if (!e || "object" != typeof e) return !1;
                if (Array.isArray(e)) {
                    for (var n = 0, o = e.length; n < o; n++)
                        if (t(e[n])) return !0;
                    return !1
                }
                if (a(e)) return !0;
                if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return t(e.toJSON(), !0);
                for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s) && t(e[s])) return !0;
                return !1
            }
        }
    }
]);