!function(e) {
     // First-party cookie name prefix
    var  configCookieNamePrefix = '_bpm_',
         connectUrl='/snc-apm/agent/bpm/',
         configAgentType,
         configVersion,
         configClientId,
         sessionId,
         domainHash,
         hash = sha1,
        configCookieDomain,
        configCookiePath,
         documentAlias = document,
          windowAlias = window,
         locationArray = urlFixup(documentAlias.domain, windowAlias.location.href, getReferrer()),
         domainAlias = domainFixup(locationArray[0]),
          urldecode = unescape,
            /* encode */
        encodeWrapper = windowAlias.encodeURIComponent,
        /* decode */
        decodeWrapper = windowAlias.decodeURIComponent;

    updateDomainHash();

   

    /*
     * 跨浏览器的事件绑定
     */
    function addEventListener(element, eventType, eventHandler, useCapture) {
        if (element.addEventListener) {
            element.addEventListener(eventType, eventHandler, useCapture);

            return true;
        }

        if (element.attachEvent) {
            return element.attachEvent('on' + eventType, eventHandler);
        }

        element['on' + eventType] = eventHandler;
    }
   //监控浏览器，加载完再发送数据
 /*    addEventListener(window, "load",function(){
             var e = {
                    session_id:getSessionId(),
                    client_id:getClientId(),
                    url: c,
                    domain: s,
                    uri: d,
                    navigationTiming: p.getNavigationTiming(),
                    resourceTiming: p.getResourceTiming(),
                    error_list: [],
                    sc_time: o.time || p.getNavigationTiming().loadEventStart || +new Date,
                    sc_width: o.width,
                    sc_height: o.height
            };
            r(e);
       
    },false);*/

    function t() {
        if (0 != l.events.length) {
            var o = h.getInfo();
            var e = {
                    session_id:getSessionId(),
                    client_id:getClientId(),
                    url: c,
                    domain: s,
                    uri: d,
                    events: l.events.splice(0, l.events.length),
                    sc_time: o.time || p.getNavigationTiming().loadEventStart || +new Date
            };
           
            jsinterface.ajaxsend(JSON.stringify(e));
           // l.events = null;

        }
    }

    function n() {
        var e = m.getError();
        var o = h.getInfo();
        if (e.length > 0) {
            var t = {
                    session_id:getSessionId(),
                    client_id:getClientId(),
                    url: c,
                    domain: s,
                    uri: d,
                    navigationTiming: {},
                    resourceTiming: [],
                    error_list: e,
                    sc_time: o.time || p.getNavigationTiming().loadEventStart || +new Date
            };
           
            jsinterface.errsend(JSON.stringify(t));

        }
    }
    
    /*
     * ressend
     */
    function r(e) {
    	
        jsinterface.ressend(JSON.stringify(e))
    }

    function i() {
    	
        function i() {
            l && (l = !1, u(), t(), n())
        }
        if (e.CloudwisePageMonitorStart) return !1;
        e.CloudwisePageMonitorStart = !0;
        var o = h.getInfo();
     /*   setTimeout(function() {
            var e = {
                    session_id:getSessionId(),
                    client_id:getClientId(),
                    url: c,
                    domain: s,
                    uri: d,
                    navigationTiming: p.getNavigationTiming(),
                    resourceTiming: p.getResourceTiming(),
                    error_list: [],
                    sc_time: o.time || p.getNavigationTiming().loadEventStart || +new Date,
                    sc_width: o.width,
                    sc_height: o.height
            };
            r(e)
        }, 0);*/
        var u = function() {
            var e = p.getResourceTiming();
            if (e.length > 0) {
                var t = {
                        session_id:getSessionId(),
                        client_id:getClientId(),
                        url: c,
                        domain: s,
                        uri: d,
                        navigationTiming: p.getNavigationTiming(),
                        resourceTiming: e,
                        error_list: [],
                        sc_time: o.time || p.getNavigationTiming().loadEventStart || +new Date                    
                };
                //ressend
                r(t);
            }
        };
       
        e.setInterval(function() {
            u(), t(), n()
        }, a);
        var l = !0;
        f.addEvent(e, "beforeunload", i), f.addEvent(e, "unload", i)
    }

    function o(e, t, n) {
        return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n), this
    }

   


    if (e.CloudwiseVersion) return !1;
    e.CloudwiseVersion = "1.2.0";
    // a =3000ms 3秒钟执行
    var a = 3e3,
        c = e.location.href,
        s = e.location.hostname,
        d = e.location.pathname,
        u = e.location.host,
        l = {
            base: {},
            events: []
        },
        f = function() {
            function t(e, t) {
                if (Object.defineProperty && Object.keys) try {
                    var n = Object.keys(e);
                    return n.forEach(function(n) {
                        Object.defineProperty(t, n, {
                            get: function() {
                                return e[n]
                            },
                            set: function(t) {
                                return e[n] = t, t
                            }
                        })
                    }), t
                } catch (r) {}
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }

            function n(e) {
                return !(e && "function" == typeof e && e.apply && !e[l])
            }

            function r(e, t) {
                f[e] = i(e).concat(t)
            }

            function i(e) {
                return void 0 != e ? f[e] || [] : f
            }

            function o(e, t) {
                for (var n = i(e), r = n.length, o = 0; o < r; o++) "function" == typeof n[o] && n[o].apply(this, t)
            }

            function a(t, n, r) {
                e.addEventListener ? t.addEventListener(n, r, !1) : t.attachEvent("on" + n, r)
            }

            function c(t, n, r) {
                e.addEventListener ? t.removeEventListener(n, r, !1) : t.detachEvent("on" + n, r)
            }

            function s(e, r, i) {
                function a() {
                    try {
                        var t = this,
                            n = Array.prototype.slice.call(arguments);
                        return o(r + (i || "") + "start", [t, n]), e.apply(t, n)
                    } catch (a) {
                        throw a
                    } finally {
                        o(r + (i || "") + "end", [t, n])
                    }
                }
                return n(e) ? e : (t(e, a), a[l] = !0, e.cloudwise_wrapped = a, a)
            }

            function d(e, t, r) {
                for (var i = 0, o = t.length; i < o; i++) {
                    var a = t[i],
                        c = e[a];
                    n(c) || (e[a] = s(c, a, r))
                }
            }

            function u(e) {
                for (var t = 0, n = 0; n < e.length; n++) e.charCodeAt(n) > 127 || 94 == e.charCodeAt(n) ? t += 2 : t++;
                return t
            }
            var l = "cloudwise_wrapper",
                f = {},
                m = function() {
                    function t() {
                        o || a || (a = !0, e.addEventListener ? document.addEventListener("DOMContentLoaded", r, !1) : e.attachEvent && n())
                    }

                    function n() {
                        try {
                            document.documentElement.doScroll("left")
                        } catch (e) {
                            return setTimeout(n, 20)
                        }
                        r()
                    }

                    function r() {
                        if (!o) {
                            o = !0;
                            for (var t = 0; t < i.length; t++) i[t].call(e);
                            i = []
                        }
                    }
                    var i = [],
                        o = !1,
                        a = !1;
                    return function(n) {
                        o ? n.call(e) : i.push(n), t()
                    }
                }();
            return {
                on: r,
                listener: i,
                emit: o,
                addEvent: a,
                removeEvent: c,
                eventsWrapper: s,
                eventLisenerWrapper: d,
                lenReg: u,
                domReady: m
            }
        }();
    ! function() {
        var t = ["onreadystatechange", "onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"];
        if (XMLHttpRequest) {
            var n = XMLHttpRequest;
            XMLHttpRequest = function() {
                var e = new n(arguments);
                return f.emit("new-xhr", [e]), e.onreadystatechange = function() {}, n.prototype.addEventListener && (e.addEventListener("readystatechange", function() {
                    f.eventLisenerWrapper(this, t, "-xhr-")
                }), f.eventLisenerWrapper(e, ["addEventListener", "removeEventListener"], "-xhr-"), e.addEventListener("loadstart", function() {}, !1)), e
            }, XMLHttpRequest.cloudwise_original = n, XMLHttpRequest.prototype = n.prototype, f.eventLisenerWrapper(XMLHttpRequest.prototype, ["open", "send"], "-xhr-"), f.on("open-xhr-start", function(e, n) {
                f.eventLisenerWrapper(e, t, "-xhr-")
            }), f.on("send-xhr-start", function(e, n) {
                f.eventLisenerWrapper(e, t, "-xhr-")
            })
        }
        if (e.fetch) {
            var r = "cloudwise_wrapper",
                i = e.fetch;
            i[r] || (e.fetch = function() {
                var e = Array.prototype.slice.call(arguments),
                    t = i.apply(this, e);
                f.emit("fetch-start", [t, e]);
                var n = t.then;
                return t.then = function() {
                    for (var e = Array.prototype.slice.call(arguments), r = 0, i = e.length; r < i; r++) {
                        var o = e[r];
                        "function" == typeof o && (e[r] = function(e) {
                            return function() {
                                try {
                                    var n = Array.prototype.slice.call(arguments);
                                    return t.__cloudwise_fetch || f.emit("fetch-then-start", [t, n]), e.apply(this, n)
                                } catch (r) {
                                    throw r
                                } finally {
                                    t.__cloudwise_fetch || f.emit("fetch-then-end", [t])
                                }
                            }
                        }(o))
                    }
                    return n.apply(this, e)
                }, t.then(function() {}), t
            }, e.fetch[r] = !0)
        }
    }(),
    function() {
        function t(e) {
            if ("string" == typeof e) return f.lenReg(e);
            if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength) return e.byteLength;
            if ("undefined" != typeof Blob && e instanceof Blob && e.size) return e.size;
            try {
                return f.lenReg(JSON.stringify(e))
            } catch (t) {
                return 0
            }
            return 0
        }

        function n(e) {
            var n = "";
            switch (e.responseType) {
                case "arraybuffer":
                case "blob":
                    n = e.response;
                    break;
                default:
                    n = e.responseText
            }
            return t(n)
        }

        function r(e) {
            3 == e.readyState && (e.cloudwise_metrics.firstbyte_time = (new Date).getTime()), 4 == e.readyState && e.cloudwise_metrics && (e.cloudwise_metrics.res_time = e.cloudwise_metrics.cb_start_time = e.cloudwise_metrics.lastbyte_time = (new Date).getTime(), e.cloudwise_metrics.rep_code = e.status, e.cloudwise_metrics.code_text = e.statusText, e.cloudwise_metrics.rep_size = n(e), e.cloudwise_metrics.timeout = e.timeout, e.cloudwise_metrics.is_err = e.status < 400 ? 0 : 1)
        }

        function i(e) {
          //过滤agent请求服务端的异步请求
            if(e.cloudwise_metrics&&e.cloudwise_metrics.req_url&&e.cloudwise_metrics.req_url.indexOf(connectUrl)==-1){
                4 == e.readyState && e.cloudwise_metrics && (e.cloudwise_metrics.cb_end_time = (new Date).getTime(),
             l.events.push(e.cloudwise_metrics), e.cloudwise_metrics = null)
            }
            
        }
        XMLHttpRequest && (f.on("new-xhr", function(e, t) {
            e.cloudwise_metrics = {
                eve_type: "ajax"
            }
        }), f.on("open-xhr-start", function(e, t) {
           if(t[1]!=''){
              e.cloudwise_metrics.req_url = t[1], e.cloudwise_metrics.req_metnod = t[0].toLocaleLowerCase(), e.cloudwise_metrics.is_asyn = t[2]
           }
           
        }), f.on("send-xhr-start", function(e, n) {
            e.cloudwise_metrics.req_time = (new Date).getTime(), e.cloudwise_metrics.req_size = t(n[0])
        }), f.on("onreadystatechange-xhr-start", function(e, t) {
            r(e)
        }), f.on("onreadystatechange-xhr-end", function(e, t) {
            i(e)
        }), f.on("onload-xhr-start", function(e, t) {
            r(e)
        }), f.on("onload-xhr-end", function(e, t) {
            i(e)
        }), f.on("addEventListener-xhr-start", function(e, t) {
            var n = t[1];
            "function" == typeof n && (t[1] = n.cloudwise_wrapped || f.eventsWrapper(n, "eventListener-xhr-fn-"))
        }), f.on("removeEventListener-xhr-start", function(e, t) {
            var n = t[1].cloudwise_wrapped;
            n && (t[1] = n)
        }), f.on("eventListener-xhr-fn-start", function(e, t) {
            var n = t[0];
            "readystatechange" != n.type && "load" != n.type || r(e)
        }), f.on("eventListener-xhr-fn-end", function(e, t) {
            var n = t[0];
            "readystatechange" != n.type && "load" != n.type || i(e)
        })), e.fetch && (f.on("fetch-start", function(e, n) {
            e.cloudwise_metrics = {
                eve_type: "ajax",
                is_asyn: !0,
                req_metnod: "get",
                req_time: (new Date).getTime(),
                req_size: 0,
                timeout: 0
            }, "string" == typeof n[0] ? e.cloudwise_metrics.req_url = n[0] : n[0] instanceof Request && (e.cloudwise_metrics.req_url = n[0].url, e.cloudwise_metrics.req_metnod = n[0].method.toLocaleLowerCase()), n.length > 1 && (e.cloudwise_metrics.req_size = t(n[1].body), n[1].method && (e.cloudwise_metrics.req_metnod = n[1].method.toLocaleLowerCase()))
        }), f.on("fetch-then-start", function(e, t) {
            if (t[0] instanceof Response) {
                var n = t[0].clone();
                e.cloudwise_metrics.rep_code = n.status,
                 e.cloudwise_metrics.code_text = n.statusText, 
                 e.cloudwise_metrics.is_err = n.status < 400 ? 0 : 1, 
                 n.blob().then(function(t) {
                    e.cloudwise_metrics.rep_size = t.size || 0;
                   //过滤agent请求服务端的异步请求
                   
                    if(e.cloudwise_metrics.req_url.indexOf(connectUrl)==-1){
                         e.__cloudwise_fetch && l.events.push(e.cloudwise_metrics);
                    }
                   
                    e.__cloudwise_fetch = !0
                }),
                 e.cloudwise_metrics.res_time = e.cloudwise_metrics.cb_start_time = e.cloudwise_metrics.lastbyte_time = e.cloudwise_metrics.firstbyte_time = (new Date).getTime()
            }
        }), f.on("fetch-then-end", function(e) {
            e.cloudwise_metrics.cb_end_time = (new Date).getTime();
             //过滤agent请求服务端的异步请求
          
             if(e.cloudwise_metrics.req_url.indexOf(connectUrl)==-1){
                 e.__cloudwise_fetch && l.events.push(e.cloudwise_metrics);
             }
           
            e.__cloudwise_fetch = !0
        }))
    }();
    var m = function() {
            var t = [];
            return e.addEventListener && e.addEventListener("error", function(e) {
                var n = {};
                n.time = e.timeStamp || (new Date).getTime(), n.url = e.filename, n.msg = e.message, n.line = e.lineno, n.column = e.colno, e.error ? (n.type = e.error.name, n.stack = e.error.stack) : (n.msg.indexOf("Uncaught ") > -1 ? n.stack = n.msg.split("Uncaught ")[1] + " at " + n.url + ":" + n.line + ":" + n.column : n.stack = n.msg + " at " + n.url + ":" + n.line + ":" + n.column, n.type = n.stack.slice(0, n.stack.indexOf(":"))), n.type.toLowerCase().indexOf("script error") > -1 && (n.type = "ScriptError"), t.push(n)
            }, !1), {
                getError: function() {
                    return t.splice(0, t.length)
                }
            }
        }(),
        p = function() {
            function t() {
                if (!e.performance || !e.performance.timing) return {};
                var t = e.performance.timing;
                return {
                    navigationStart: t.navigationStart,
                    redirectStart: t.redirectStart,
                    redirectEnd: t.redirectEnd,
                    fetchStart: t.fetchStart,
                    domainLookupStart: t.domainLookupStart,
                    domainLookupEnd: t.domainLookupEnd,
                    connectStart: t.connectStart,
                    secureConnectionStart: t.secureConnectionStart ? t.secureConnectionStart : t.connectEnd - t.secureConnectionStart,
                    connectEnd: t.connectEnd,
                    requestStart: t.requestStart,
                    responseStart: t.responseStart,
                    responseEnd: t.responseEnd,
                    unloadEventStart: t.unloadEventStart,
                    unloadEventEnd: t.unloadEventEnd,
                    domLoading: t.domLoading,
                    domInteractive: t.domInteractive,
                    domContentLoadedEventStart: t.domContentLoadedEventStart,
                    domContentLoadedEventEnd: t.domContentLoadedEventEnd,
                    domComplete: t.domComplete,
                    loadEventStart: t.loadEventStart,
                    loadEventEnd: t.loadEventEnd?t.loadEventEnd:t.loadEventStart
                }
            }

            function n() {
                if (!e.performance || !e.performance.getEntriesByType) return [];
                   
                for (var t = e.performance.getEntriesByType("resource"), n = [], r = 0; r < t.length; r++) {
                  if(t[r].initiatorType!='xmlhttprequest'){
                  
                    var i = t[r].secureConnectionStart==0 ? 0 : t[r].connectEnd - t[r].secureConnectionStart,
                         o = {
                            duration: Math.round(t[r].duration),
                            entryType: t[r].entryType,
                            initiatorType: t[r].initiatorType,
                            name: t[r].name,
                            startTime: Math.round(t[r].startTime),
                            sslTime:Math.round(i),
                            tcpTime:Math.round(t[r].connectEnd-t[r].connectStart),
                            dnsTime:Math.round(t[r].domainLookupEnd-t[r].domainLookupStart),
                            requestTime: Math.round(t[r].responseStart-t[r].requestStart),
                            responseTime: Math.round(t[r].responseEnd-t[r].responseStart)
                        };
                    n.push(o);
                    }
                }
                return n
            }
            return {
                cacheResourceTimingLength: 0,
                getNavigationTiming: function() {
                    return t()
                },
                getResourceTiming: function() {
                    var e = n(),
                        t = e.length;
                    return e.length != this.cacheResourceTimingLength ? (e = e.slice(this.cacheResourceTimingLength, t), this.cacheResourceTimingLength = t, e) : []
                }
            }
        }(),
        h = function() {
            function t(t) {
                var n = 0;
                n = e.pageYOffset ? e.pageYOffset : document.documentElement.scrollTop;
                try {
                    n += t.getBoundingClientRect().top
                } catch (r) {} finally {
                    return n
                }
            }

            function n() {
                this.removeEventListener ? this.removeEventListener("load", n, !1) : this.attachEvent && this.detachEvent("onreadystatechange", n);
                var e = +new Date,
                    r = t(this);
                r < i && (o = e > o ? e : o)
            }
            var r = document.documentElement.clientWidth,
                i = document.documentElement.clientHeight,
                o = 0;
            return document.addEventListener("DOMContentLoaded", function() {
                for (var e = document.getElementsByTagName("img"), t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.addEventListener ? r.complete || r.addEventListener("load", n, !1) : r.attachEvent && r.attachEvent("onreadystatechange", function() {
                        "complete" == r.readyState && n.call(r)
                    })
                }
            }), {
                getInfo: function() {
                    return {
                        height: i,
                        width: r,
                        time: o
                    }
                }
            }
        }();
    e.likevStartPageMonitor = i;
    for (var v = 0, g = !1, y = ["iPad", "iPhone", "iPod"]; v < y.length; v++)
        if (navigator.platform.indexOf(y[v]) >= 0) {
            g = !0;
            break;
        }
    var E = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        w = navigator.userAgent.toLowerCase().indexOf("android") > -1,
        _ = {
            callbacks: {},
            send: function(e, t) {
                this.dispatchMessage("event", e, t)
            },
            sendCallback: function(e) {
                var t = L.createEnvelope(e);
                this.dispatchMessage("callback", t, function() {})
            },
            triggerCallback: function(e) {
                var t = this;
                setTimeout(function() {
                    t.callbacks[e] && t.callbacks[e]()
                }, 0)
            },
            dispatchMessage: function(e, t, n) {
            
                var r = this;
                if (this.callbacks[t.id] = function() {
                    n(), delete r.callbacks[t.id]
                }, E) {
                    var i = "cloudwise://" + e + "/" + t.id + "?" + encodeURIComponent(JSON.stringify(t)),
                        o = document.createElement("iframe");
                    o.setAttribute("src", i), document.documentElement.appendChild(o), o.parentNode.removeChild(o), o = null
                } else w && jsinterface.send(JSON.stringify(t))
            }
        },
        L = {
            listeners: {},
            dispatcher: null,
            messageCount: 0,
            on: function(e, t) {
                (!this.listeners.hasOwnProperty(e) || !this.listeners[e] instanceof Array) && (this.listeners[e] = []), this.listeners[e].push(t)
            },
            off: function(e) {
                (!this.listeners.hasOwnProperty(e) || !this.listeners[e] instanceof Array) && (this.listeners[e] = []), this.listeners[e] = []
            },
            send: function(e, t, n) {
                t instanceof Function && (n = t, t = null), t = t || {}, n = n || function() {};
                var r = this.createEnvelope(this.messageCount, e, t);
                this.dispatcher.send(r, n), this.messageCount += 1
            },
            trigger: function(e, t, n) {
                for (var r = this, i = this.listeners[e] || [], o = 0, a = function() {
                    o += 1, o >= i.length && r.dispatcher.sendCallback(t)
                }, c = 0; c < i.length; c++) {
                    var s = i[c];
                    s.length <= 1 ? (s(n), a()) : s(n, a)
                }
            },
            triggerCallback: function(e) {
                this.dispatcher.triggerCallback(e)
            },
            createEnvelope: function(e, t, n) {
                return {
                    id: e,
                    type: t,
                    host: u,
                    payload: n
                }
            }
        },
        S = {
            send: function(e, t) {
                t()
            },
            triggerCallback: function() {},
            sendCallback: function() {}
        };
    g && E || w ? L.dispatcher = _ : L.dispatcher = S, e.Cloudwise = L, e.CloudwiseAddEvent = function() {
        function t(e) {
            function t(e) {
                var r = e.nodeName.toLocaleLowerCase();
                "body" != r && "a" != r && t(e.parentNode), "a" == r && (n = !0)
            }
            var n = !1;
            return t(e.parentNode), n
        }
        if (e.CloudwiseEventStart) return !1;
        e.CloudwiseEventStart = !0;
        for (var n = document.getElementsByTagName("a"), r = 0, i = n.length; r < i; r++) o(n[r], "click", function(e) {
            var t = this.innerText,
                n = this.href;
            t = t.replace(/<.*[^>]*>/g, ""), L.send("onclick", {
                linkText: t.replace(/[\\r\\n]/g, ""),
                linkUrl: n
            })
        });
        e.onclick = function(e) {
            var n = e.target,
                r = t(n);
            if (!r && "a" != n.nodeName.toLocaleLowerCase()) {
                var i = n.innerHTML;
                i ? i = i.replace(/<.*[^>]*>/g, "") : "img" == n.tagName.toLocaleLowerCase() && (i = n.alt || ""), L.send("onclick", {
                    linkText: i.replace(/[\\r\\n]/g, ""),
                    linkUrl: ""
                })
            }
        }
    }

     /**
         * 获取用户id，单个用户的唯一标识
         * @return {String} uuid
         */
        function getClientId() {
            var client_id = configClientId || getCookie(getCookieName('client_id'));
            if (!client_id) {
                client_id = uuid();
                setCookie(getCookieName('client_id'), client_id);
            }
            return client_id;
        }

        /**
         * 获取当前session id ,确定同一个html页面请求
         * 
         * @return {String} session id
         */
        function getSessionId() {

               if (!sessionId) {
                sessionId = uuid();
            } 
         
            return sessionId;
        }
        
        /*
         * Set cookie value
         */
        function setCookie(cookieName, value, msToExpire, path, domain, secure) {
            var expiryDate;

            // relative time to expire in milliseconds
            if (msToExpire) {
                expiryDate = new Date();
                expiryDate.setTime(expiryDate.getTime() + msToExpire);
            }

            documentAlias.cookie = cookieName + '=' + encodeWrapper(value) +
                (msToExpire ? ';expires=' + expiryDate.toGMTString() : '') +
                ';path=' + (path || '/') +
                (domain ? ';domain=' + domain : '') +
                (secure ? ';secure' : '');
        }
          /*
         * Get cookie value
         */
        function getCookie(cookieName) {
            var cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'),
                cookieMatch = cookiePattern.exec(documentAlias.cookie);

            return cookieMatch ? decodeWrapper(cookieMatch[2]) : 0;
        }

        /*
         * Get cookie name with prefix and domain hash
         */
        function getCookieName(baseName) {
            return configCookieNamePrefix + baseName + '.' + configAgentType + '.' + domainHash;
        }
         function updateDomainHash() {
            domainHash = hash((configCookieDomain || domainAlias) + (configCookiePath || '/')).slice(0, 4); // 4 hexits = 16 bits
        }

            /*
             * 当页面来源是搜素引擎或翻译页面的话，对URL进行修正
             */
            function urlFixup(hostName, href, referrer) {
                if (hostName === 'translate.googleusercontent.com') { // Google
                    if (referrer === '') {
                        referrer = href;
                    }

                    href = getParameter(href, 'u');
                    hostName = getHostName(href);
                } else if (hostName === 'cc.bingj.com' || // Bing
                    hostName === 'webcache.googleusercontent.com' || // Google
                    hostName.slice(0, 5) === '74.6.') { // Yahoo (via Inktomi 74.6.0.0/16)
                    href = documentAlias.links[0].href;
                    hostName = getHostName(href);
                }

                return [hostName, href, referrer];
            }
                /*
                 * Fix-up domain
                 */
                function domainFixup(domain) {
                    var dl = domain.length;
                    
                    // remove trailing '.'
                    if (domain.charAt(--dl) === '.') {
                        domain = domain.slice(0, dl);
                    }

                    // remove leading '*'
                    if (domain.slice(0, 2) === '*.') {
                        domain = domain.slice(1);
                    }

        return domain;
    }
            /*
         * 获取页面referrer
         */
        function getReferrer() {
            var referrer = '';

            try {
                referrer = windowAlias.top.document.referrer;
            } catch (e) {
                if (windowAlias.parent) {
                    try {
                        referrer = windowAlias.parent.document.referrer;
                    } catch (e2) {
                        referrer = '';
                    }
                }
            }

            if (referrer === '') {
                referrer = documentAlias.referrer;
            }

            return referrer;
        }
          /*
     * 从URL中抓出host
     */
    function getHostName(url) {
        // scheme : // [username [: password] @] hostame [: port] [/ [path] [? query] [# fragment]]
        var e = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'),
            matches = e.exec(url);

        return matches ? matches[1] : url;
    }

    /*
     * 从URL抓出参数
     */
    function getParameter(url, name) {
        var regexSearch = "[\\?&#]" + name + "=([^&#]*)";
        var regex = new RegExp(regexSearch);
        var results = regex.exec(url);
        return results ? decodeWrapper(results[1]) : '';
    }

      /*
     * UTF-8 encoding
     */
    function utf8_encode(argString) {
        return urldecode(encodeWrapper(argString));
    }


          /************************************************************
     * uuid
     ************************************************************/
    function uuid() {
        var _rnds = new Array(16);
        var _rng = function() {
            for (var i = 0, r; i < 16; i++) {
                if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
                _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
            }

            return _rnds;
        };

        // Maps for number <-> hex string conversion
        var _byteToHex = [];
        for (var i = 0; i < 256; i++) {
            _byteToHex[i] = (i + 0x100).toString(16).substr(1);
        }

        // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
        function unparse(buf, offset) {
            var i = offset || 0,
                bth = _byteToHex;
            return bth[buf[i++]] + bth[buf[i++]] +
                bth[buf[i++]] + bth[buf[i++]] + '-' +
                bth[buf[i++]] + bth[buf[i++]] + '-' +
                bth[buf[i++]] + bth[buf[i++]] + '-' +
                bth[buf[i++]] + bth[buf[i++]] + '-' +
                bth[buf[i++]] + bth[buf[i++]] +
                bth[buf[i++]] + bth[buf[i++]] +
                bth[buf[i++]] + bth[buf[i++]];
        }

        var rnds = _rng();

        // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
        rnds[6] = (rnds[6] & 0x0f) | 0x40;
        rnds[8] = (rnds[8] & 0x3f) | 0x80;

        return unparse(rnds);
    }

    //end uuid

        /************************************************************
     * sha1
     * - based on sha1 from http://phpjs.org/functions/sha1:512 (MIT / GPL v2)
     ************************************************************/

    function sha1(str) {
        // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
        // + namespaced by: Michael White (http://getsprink.com)
        // +      input by: Brett Zamir (http://brett-zamir.me)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   jslinted by: Anthon Pang (http://piwik.org)

        var
            rotate_left = function(n, s) {
                return (n << s) | (n >>> (32 - s));
            },

            cvt_hex = function(val) {
                var strout = '',
                    i,
                    v;

                for (i = 7; i >= 0; i--) {
                    v = (val >>> (i * 4)) & 0x0f;
                    strout += v.toString(16);
                }

                return strout;
            },

            blockstart,
            i,
            j,
            W = [],
            H0 = 0x67452301,
            H1 = 0xEFCDAB89,
            H2 = 0x98BADCFE,
            H3 = 0x10325476,
            H4 = 0xC3D2E1F0,
            A,
            B,
            C,
            D,
            E,
            temp,
            str_len,
            word_array = [];

        str = utf8_encode(str);
        str_len = str.length;

        for (i = 0; i < str_len - 3; i += 4) {
            j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 |
                str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
            word_array.push(j);
        }

        switch (str_len & 3) {
            case 0:
                i = 0x080000000;
                break;
            case 1:
                i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
                break;
            case 2:
                i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
                break;
            case 3:
                i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) << 8 | 0x80;
                break;
        }

        word_array.push(i);

        while ((word_array.length & 15) !== 14) {
            word_array.push(0);
        }

        word_array.push(str_len >>> 29);
        word_array.push((str_len << 3) & 0x0ffffffff);

        for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
            for (i = 0; i < 16; i++) {
                W[i] = word_array[blockstart + i];
            }

            for (i = 16; i <= 79; i++) {
                W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
            }

            A = H0;
            B = H1;
            C = H2;
            D = H3;
            E = H4;

            for (i = 0; i <= 19; i++) {
                temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }

            for (i = 20; i <= 39; i++) {
                temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }

            for (i = 40; i <= 59; i++) {
                temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }

            for (i = 60; i <= 79; i++) {
                temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp;
            }

            H0 = (H0 + A) & 0x0ffffffff;
            H1 = (H1 + B) & 0x0ffffffff;
            H2 = (H2 + C) & 0x0ffffffff;
            H3 = (H3 + D) & 0x0ffffffff;
            H4 = (H4 + E) & 0x0ffffffff;
        }

        temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

        return temp.toLowerCase();
    }

    /************************************************************
     * end sha1
     ************************************************************/
}(this);


var jsinterface ={
		ajaxsend:function(e){
			
			//console.log("ajax="+e);
		    var applicationid = SNCBPM.info.applicationid;
            var domain = SNCBPM.info.domain;
            var url =domain+'/snc-apm/agent/bpm/ajaxData.shtml?applicationid='+applicationid;
            console.log('ajax');
             sendLikevData(url,"resend="+escape(e));
		},
		errsend: function(e){
		//	console.log("errsend:"+e);
            var applicationid = SNCBPM.info.applicationid;
            var domain = SNCBPM.info.domain;
            var url =domain+'/snc-apm/agent/bpm/pageData.shtml?applicationid='+applicationid;
            console.log('errsend');
          sendLikevData(url,"resend="+escape(e));
		},
		ressend:function(e){
			console.log("ressend:"+e);
            var applicationid = SNCBPM.info.applicationid;
            var domain = SNCBPM.info.domain;
            var url =domain+'/snc-apm/agent/bpm/pageData.shtml?applicationid='+applicationid;
            console.log('ressend');
           sendLikevData(url,"resend="+escape(e));
			
		},
		send:function(e){
			//console.log("send:"+e);
              var applicationid = SNCBPM.info.applicationid;
            var domain = SNCBPM.info.domain;
            var url =domain+'/snc-apm/agent/bpm/pageData.shtml?applicationid='+applicationid;
            console.log('send');
          sendLikevData(url,"resend="+escape(e));
		}
		
}




/*
 * ajax通信
 */
var sendLikevData=function(url,data)
{
   //获取ajax对象
       url = url+'&_t='+(new Date()).getTime();
       
       var xhr = new XMLHttpRequest();
                if('withCredentials' in xhr){
                    xhr.open('post', url, true);
                }else if(typeof XDomainRequest != 'undefined'){
                    var xhr = new XDomainRequest();
                    xhr.open('post', url, true);
                }else{
                    xhr = null;
                }
        if(xhr){
            // if (xhr.setRequestHeader) {
            //     xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            // } else {
            //     xhr.contentType = "text/plain";
            // }
            // xhr.onload = function(){
            //    console.log("callback");
            // };
        
            // xhr.send(data);


            if (xhr.setRequestHeader) {
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhr.onload = function(){
                    console.log("callback");
                 };
             
                 xhr.send(data);
            } else {
                simulateForm(url, data);
            }
            
     }
}

function simulateForm(url, data) {
    var div = createElem("div", {
        style: "display:none"
    });
    var iframe = createElem("iframe", {
        name: "snc_form",
        width: 0,
        height: 0,
        style: "display:none"
    });
    var form = createElem("form", {
        style: "display:none",
        action: url,
        enctype: "application/x-www-form-urlencoded",
        method: "post",
        target: "snc_form"
    });
    var input = createElem("input", {
        name: "data",
        type: "hidden"
    }, true);
    input.value = JSON.stringify(data);
    form.appendChild(input);
    div.appendChild(iframe);
    div.appendChild(form);
    document.body.appendChild(div);
    form.submit();
    iframe.onreadystatechange = function() {
        iframe.readyState !== "complete" && 4 !== iframe.readyState || (document.body.removeChild(div))
    }
};

function createElem(elemName, attrs, isSingle) {
    var elem = document.createElement(elemName);
    try {
        for (var i in attrs) elem[i] = attrs[i];
    } catch (err) {
        elem = "<" + elemName;
        for (i in attrs) elem += " " + i + '="' + attrs[i] + '"';
        elem += ">";
        isSingle || (elem += "</" + elemName + ">");
        elem = document.createElement(elem)
    }
    return elem
}
