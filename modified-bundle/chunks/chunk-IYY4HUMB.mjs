import { $ as _, H as z, V as R, X as t, _ as X, j as Q, l as V, n as d, q as C, r as b, s as T, v as O, y as L } from "./chunk-U7QGETIO.mjs"; import { b as r } from "./chunk-ELYU6EKT.mjs"; var ee = { position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, Ce = { ...ee, borderRadius: 6, background: "rgba(136, 85, 255, 0.3)", color: "#85F", border: "1px dashed #85F", flexDirection: "column" }, U = { onClick: { type: t.EventHandler }, onMouseEnter: { type: t.EventHandler }, onMouseLeave: { type: t.EventHandler } }, be = { type: t.Number, title: "Font Size", min: 2, max: 200, step: 1, displayStepper: !0 }, ve = { font: { type: t.Boolean, title: "Font", defaultValue: !1, disabledTitle: "Default", enabledTitle: "Custom" }, fontFamily: { type: t.String, title: "Family", placeholder: "Inter", hidden: ({ font: e }) => !e }, fontWeight: { type: t.Enum, title: "Weight", options: [100, 200, 300, 400, 500, 600, 700, 800, 900], optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"], hidden: ({ font: e }) => !e } }; function N(e, o) { return te(!0, e, o) } function $(e, o) { return te(!1, e, o) } function te(e, o, l = !0) { let c = _(); d(() => { l && c === e && o() }, [c]) } var xe = () => { if (typeof r < "u") { let e = r.userAgent.toLowerCase(); return (e.indexOf("safari") > -1 || e.indexOf("framermobile") > -1 || e.indexOf("framerx") > -1) && e.indexOf("chrome") < 0 } else return !1 }, j = () => C(() => xe(), []); function H() { return C(() => R.current() === R.canvas, []) } function K(e) { let { borderRadius: o, isMixedBorderRadius: l, topLeftRadius: c, topRightRadius: f, bottomRightRadius: p, bottomLeftRadius: n } = e; return C(() => l ? `${c}px ${f}px ${p}px ${n}px` : `${o}px`, [o, l, c, f, p, n]) } var D = { borderRadius: { title: "Radius", type: t.FusedNumber, toggleKey: "isMixedBorderRadius", toggleTitles: ["Radius", "Radius per corner"], valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"], valueLabels: ["TL", "TR", "BR", "BL"], min: 0 } }; var Me = { padding: { type: t.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0, title: "Padding" } }; var oe; (function (e) { e.Fill = "fill", e.Contain = "contain", e.Cover = "cover", e.None = "none", e.ScaleDown = "scale-down" })(oe || (oe = {})); var re; (function (e) { e.Video = "Upload", e.Url = "URL" })(re || (re = {})); function Re(e) { let { width: o, height: l, topLeft: c, topRight: f, bottomRight: p, bottomLeft: n, id: g, children: h, ...u } = e; return u } function G(e) { let o = Re(e); return O(ke, { ...o }) } function _e(e) { let o = _(), l = b(!1), c = V(n => { if (!e.current) return; let g = (n === 1 ? .999 : n) * e.current.duration, h = Math.abs(e.current.currentTime - g) < .1; e.current.duration > 0 && !h && (e.current.currentTime = g) }, []), f = V(() => { let n = e.current; if (!n) return; n.preload = "auto", !(n.currentTime > 0 && n.onplaying && !n.paused && !n.ended && n.readyState > n.HAVE_CURRENT_DATA) && n && !l.current && o && (l.current = !0, n.play().catch(h => { }).finally(() => l.current = !1)) }, []), p = V(() => { !e.current || l.current || e.current.pause() }, []); return { play: f, pause: p, setProgress: c } } function Fe({ playingProp: e, muted: o, loop: l, playsinline: c, controls: f }) { let [p] = T(() => e), [n, g] = T(!1); e !== p && !n && g(!0); let h = p && o && l && c && !f && !n, u; return h ? u = "on-viewport" : p ? u = "on-mount" : u = "no-autoplay", u } var ae = !1, ke = Q(function (o) { let { srcType: l, srcFile: c, srcUrl: f, playing: p, muted: n, playsinline: g, controls: h, progress: u, objectFit: se, backgroundColor: le, onSeeked: F, onPause: k, onPlay: E, onEnd: P, onClick: W, onMouseEnter: ue, onMouseLeave: ce, onMouseDown: de, onMouseUp: pe, poster: me, posterEnabled: q, startTime: Y, volume: M, loop: w } = o, m = b(), fe = j(), A = b(null), Z = b(null), v = H(), ge = K(o), S = v ? "no-autoplay" : Fe({ playingProp: p, muted: n, loop: w, playsinline: g, controls: h }), J = v ? !0 : z(m), ye = v ? !1 : z(m, { margin: "100px", once: !0 }), y = Y === 100 ? 99.9 : Y, { play: x, pause: I, setProgress: B } = _e(m); d(() => { v || (p ? x() : I()) }, [p]), d(() => { v || S === "on-viewport" && (J ? x() : I()) }, [S, J]), d(() => { if (!ae) { ae = !0; return } let a = L(u) ? u.get() : (u ?? 0) * .01; B((a ?? 0) || (y ?? 0) / 100) }, [y, c, f, u]), d(() => { if (L(u)) return u.on("change", a => B(a)) }, [u]), N(() => { A.current !== null && m.current && (!Z && w || !A.current) && x() }), $(() => { m.current && (Z.current = m.current.ended, A.current = m.current.paused, I()) }); let he = C(() => { let a = ""; if (l === "URL") return f + a; if (l === "Upload") return c + a }, [l, c, f, y]); return d(() => { fe && m.current && S === "on-mount" && setTimeout(() => x(), 50) }, []), d(() => { m.current && !n && (m.current.volume = (M ?? 0) / 100) }, [M]), O("video", { onClick: W, onMouseEnter: ue, onMouseLeave: ce, onMouseDown: de, onMouseUp: pe, src: he, loop: w, ref: m, onSeeked: a => F?.(a), onPause: a => k?.(a), onPlay: a => E?.(a), onEnded: a => P?.(a), autoPlay: S === "on-mount", preload: S !== "on-mount" && q && !ye ? "none" : "metadata", poster: q ? me : void 0, onLoadedData: () => { let a = m.current; a && (a.currentTime < .3 && y > 0 && B((y ?? 0) * .01), S === "on-mount" && x()) }, controls: h, muted: v ? !0 : n, playsInline: g, style: { cursor: W ? "pointer" : "auto", width: "100%", height: "100%", borderRadius: ge, display: "block", objectFit: se, backgroundColor: le, objectPosition: "50% 50%" } }) }); G.displayName = "Video"; G.defaultProps = { srcType: "URL", srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4", srcFile: "", posterEnabled: !1, controls: !1, playing: !0, loop: !0, muted: !0, playsinline: !0, restartOnEnter: !1, objectFit: "cover", backgroundColor: "rgba(0,0,0,0)", radius: 0, volume: 25, startTime: 0 }; var Ee = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu; function Pe(e) { return e.charAt(0).toUpperCase() + e.slice(1) } function we(e) { return (e.match(Ee) || []).map(Pe).join(" ") } var ie = ["cover", "fill", "contain", "scale-down", "none"]; X(G, { srcType: { type: t.Enum, displaySegmentedControl: !0, title: "Source", options: ["URL", "Upload"] }, srcUrl: { type: t.String, title: "URL", placeholder: "../example.mp4", hidden(e) { return e.srcType === "Upload" }, description: "Hosted video file URL. For YouTube, use the YouTube component." }, srcFile: { type: t.File, title: "File", allowedFileTypes: ["mp4", "webm"], hidden(e) { return e.srcType === "URL" } }, playing: { type: t.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No" }, posterEnabled: { type: t.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No" }, poster: { type: t.Image, title: " ", hidden: ({ posterEnabled: e }) => !e }, backgroundColor: { type: t.Color, title: "Background" }, ...D, startTime: { title: "Start Time", type: t.Number, min: 0, max: 100, step: .1, unit: "%" }, loop: { type: t.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No" }, objectFit: { type: t.Enum, title: "Fit", options: ie, optionTitles: ie.map(we) }, controls: { type: t.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide" }, muted: { type: t.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No" }, volume: { type: t.Number, max: 100, min: 0, unit: "%", hidden: ({ muted: e }) => e }, onEnd: { type: t.EventHandler }, onSeeked: { type: t.EventHandler }, onPause: { type: t.EventHandler }, onPlay: { type: t.EventHandler }, ...U }); export { G as a };
//# sourceMappingURL=chunk-IYY4HUMB.mjs.map