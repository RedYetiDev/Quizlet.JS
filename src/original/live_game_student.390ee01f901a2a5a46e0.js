(window.QJP = window.QJP || []).push([
    ["live_game_student"], {
        "+P0L": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "c", (function() {
                return A
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "d", (function() {
                return l
            }));
            n("zKZe");
            var a = n("znmY"),
                r = n("GCXI"),
                i = n("uAcY"),
                o = e => ({
                    answer_side: Object(i.a)(e),
                    answer_type: r.g.TEAM_MULTIPLE_CHOICE,
                    prompt_side: Object(i.l)(e),
                    promptTermId: Object(i.k)(e).get("id")
                }),
                s = e => {
                    var {
                        answer: t
                    } = e;
                    return (e, n) => {
                        var i = n();
                        Object(a.a)(i).logQuestionEvent(r.Z.ANSWER, Object.assign({}, o(i), {
                            answeredTermId: t.termId,
                            correctness: t.isCorrect ? r.p.CORRECT : r.p.INCORRECT,
                            participation: r.Yb.TEAM_ANSWERER
                        }))
                    }
                },
                A = () => (e, t) => {
                    var n = t(),
                        s = Object(i.c)(n);
                    if (s) {
                        var A = s.get("id");
                        Object(a.a)(n).logQuestionEvent(r.Z.VIEW_START, Object.assign({}, o(n), {
                            participation: r.Yb.TEAM_PARTICIPANT,
                            promptTermId: A
                        }))
                    }
                },
                c = () => (e, t) => {
                    var n = t();
                    Object(a.a)(n).logQuestionEvent(r.Z.VIEW_END, Object.assign({}, o(n), {
                        participation: r.Yb.TEAM_PARTICIPANT,
                        promptTermId: Object(i.k)(n).get("id")
                    }))
                },
                l = e => (t, n) => {
                    var i = n();
                    Object(a.a)(i).logQuestionEvent(r.Z.VIEW_CORRECT_ANSWER, Object.assign({}, o(i), {
                        participation: r.Yb.TEAM_PARTICIPANT,
                        promptTermId: e
                    }))
                }
        },
        "/LOw": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n("q1tI"),
                r = n.n(a);

            function i(e) {
                var {
                    children: t,
                    header: n
                } = e;
                return r.a.createElement("div", {
                    className: "StudentLayout"
                }, n, r.a.createElement("section", {
                    className: "StudentLayout-content"
                }, t))
            }
        },
        "/u/z": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return i
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "a", (function() {
                return s
            })), n.d(t, "g", (function() {
                return A
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "i", (function() {
                return m
            }));
            var a = n("lKDL"),
                r = n("peh1"),
                i = e => e.get("gameState"),
                o = Object(r.createSelector)(i, (e => null == e ? void 0 : e.get("type"))),
                s = Object(r.createSelector)(i, (e => null == e ? void 0 : e.get("id"))),
                A = (Object(r.createSelector)(i, (e => null == e ? void 0 : e.get("gameInstanceId"))), e => e.get("initialGameCode")),
                c = Object(r.createSelector)(i, (e => null == e ? void 0 : e.get("statuses"))),
                l = Object(r.createSelector)(c, (e => null == e ? void 0 : e.last())),
                u = Object(r.createSelector)(l, (e => e === a.e.ENDED)),
                d = (Object(r.createSelector)(l, (e => e === a.e.READY)), Object(r.createSelector)(i, (e => !(null == e || !e.getIn(["options", "termAudio"]))))),
                m = Object(r.createSelector)(i, (e => null == e ? void 0 : e.get("mascotLang")))
        },
        "0muR": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n("4mDm"), n("3bBZ");
            var a = n("q1tI"),
                r = n.n(a),
                i = n("TSYQ"),
                o = n.n(i);
            class s extends r.a.PureComponent {
                constructor() {
                    super(...arguments), this.isFlipped = () => this.props.isFlipped && this.props.isCurrent, this.navigationClasses = e => {
                        var {
                            isCurrent: t,
                            isNext: n,
                            isPrevious: a
                        } = this.props;
                        return {
                            current: t,
                            next: n,
                            previous: a,
                            finished: n,
                            showing: a || t || n,
                            [e]: a || t || n && !this.props.showBoth
                        }
                    }
                }
                render() {
                    var e = this.isFlipped() ? "showing-second" : "showing-first",
                        t = o()("CardsItem", {
                            "CardsItem--lastCard": this.props.isLast,
                            "CardsItem--hidden": this.props.shouldBeHidden,
                            "CardsItem--autoplay": this.props.autoplay
                        }, this.navigationClasses(e));
                    return r.a.createElement("section", {
                        "aria-hidden": !this.props.isCurrent,
                        className: t,
                        "data-testid": "Card"
                    }, this.props.children)
                }
            }
            s.defaultProps = {
                autoplay: !1,
                isFlipped: !1,
                isLast: !1,
                isNext: !1,
                isPrevious: !1,
                showBoth: !1
            }
        },
        "13SJ": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n("5s+n");

            function a(e, t) {
                return void 0 === t && (t = 5e3), new Promise(((n, a) => {
                    var r = new Image,
                        i = window.setTimeout((() => {
                            a(new Error("Domain " + e + " timed out"))
                        }), t);
                    r.onabort = () => {
                        clearTimeout(i), a(new Error("Domain " + e + " aborted"))
                    }, r.onerror = () => {
                        clearTimeout(i), a(new Error("Domain " + e + " errored"))
                    }, r.onload = () => {
                        clearTimeout(i), n()
                    }, r.src = e + "/favicon.ico"
                }))
            }
        },
        "2h2r": function(e, t, n) {
            "use strict";
            var a = n("baRz"),
                r = n("QImf"),
                i = n("eTK3");
            t.a = Object(a.styled)("article")({
                name: "StudyCardLayout0",
                class: "s1jdq21",
                vars: {
                    "s1jdq21-3": [e => e.bottomBarShown ? i.a : 0],
                    "s1jdq21-13": [e => e.isMobileCard ? r.a.Medium : "initial"]
                }
            }), n("ByUA")
        },
        "317o": function(e, t, n) {
            "use strict";
            n("4mDm"), n("5s+n"), n("3bBZ");
            var a = n("mr8R");
            t.a = Object(a.default)((() => Promise.all([n.e("immutable"), n.e("quizlet_shared_kotlin"), n.e("progress"), n.e("common"), n.e("question_hint_container_lazy")]).then(n.bind(null, "z6kU"))))
        },
        "3aqK": function(e, t, n) {
            "use strict";
            n.r(t)
        },
        "4+fi": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return o
            }));
            n("JTJg");
            var a, r = n("GCXI");
            ! function(e) {
                e.HANDWRITING = "handwriting", e.VOICE_SPEAKING = "voice_speaking", e.VOICE_SPEED = "voice_speed"
            }(a || (a = {}));
            var i = [r.D.JAPANESE, r.D.JAPANESE_ROMAJI, r.D.JAPANESE_KANA, r.D.CHINESE_SIMPLIFIED, r.D.CHINESE_PINYIN, r.D.CHINESE_TRADITIONAL];

            function o(e, t, n) {
                return e.find((e => function(e, t, n) {
                    switch (e) {
                        case a.HANDWRITING:
                            var r = i.includes(n.defLang) || i.includes(n.wordLang);
                            return !!t && !t._isUnderAge && r;
                        case a.VOICE_SPEAKING:
                            return !!t && !t._isUnderAge && n.wordLang !== n.defLang;
                        case a.VOICE_SPEED:
                            return !!t && !t._isUnderAge;
                        default:
                            return !0
                    }
                }(e, t, n))) || null
            }
        },
        "445u": function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return s
            })), n.d(t, "d", (function() {
                return A
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "g", (function() {
                return m
            })), n.d(t, "a", (function() {
                return p
            }));
            var a = n("GCXI"),
                r = n("/u/z"),
                i = n("peh1"),
                o = n("EFuM"),
                s = e => e.get("studyablePath"),
                A = e => !!e.get("isEligibleForFreeTrial"),
                c = e => !!e.get("isPaidTeacher"),
                l = Object(i.createSelector)([r.f, c], ((e, t) => t && e !== a.E.INDIVIDUAL_COMPETITION)),
                u = e => e.get("isNativeApp"),
                d = e => e.get("defaultAvatar"),
                m = Object(i.createSelector)(u, (e => !e && (Object(o.f)() || Object(o.b)()))),
                p = e => e.get("shouldShowFormativeAssessment")
        },
        "4FeO": function(e, t, n) {
            "use strict";
            n("JfAA");
            t.a = e => {
                var t = e.toString();
                return t.slice(0, 3) + " - " + t.slice(3, 6)
            }
        },
        "4IVF": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("baRz"),
                r = n("a4W4"),
                i = n("uyLA"),
                o = n("VW3V"),
                s = n("q1tI"),
                A = Object(a.styled)("div")({
                    name: "LiveLogoWrapper",
                    class: "l1bna12x"
                }),
                c = Object(a.styled)("h4")({
                    name: "StudyModeName",
                    class: "s1ssat4n"
                });

            function l(e) {
                var {
                    activityType: t = null
                } = e, {
                    t: n
                } = Object(i.a)(), a = () => {
                    switch (t) {
                        case o.a.CHECKPOINT:
                            return n("study_mode.name.live_checkpoint");
                        case o.a.CLASSIC:
                            return n("study_mode.name.live_classic");
                        default:
                            return n("study_mode.name.multiplayer")
                    }
                };
                return s.createElement(A, null, s.createElement(r.b, {
                    alt: a(),
                    icon: t === o.a.CHECKPOINT ? "mode-live-checkpoint" : "mode-live-sober",
                    size: r.a.Medium
                }), s.createElement(c, null, a()))
            }
            n("F9/U")
        },
        "4juH": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n("TSYQ"),
                r = n.n(a),
                i = n("q1tI"),
                o = n.n(i),
                s = {
                    b1: "UIText--bodyOne",
                    b2: "UIText--bodyTwo",
                    b3: "UIText--bodyThree",
                    b3s: "UIText--bodyThreeSpaced",
                    b4: "UIText--bodyFour",
                    l1: "UIText--linkOne",
                    ln: "UIText--linkNav",
                    l2: "UIText--linkTwo",
                    s1: "UIText--specialOne",
                    s2: "UIText--specialTwo",
                    s3: "UIText--specialThree",
                    s4: "UIText--specialFour",
                    s5: "UIText--specialFive",
                    s6: "UIText--specialSix"
                };
            class A extends o.a.PureComponent {
                render() {
                    var e = r()("UIText", s[this.props.type]);
                    return o.a.createElement("span", {
                        className: e
                    }, this.props.children)
                }
            }
        },
        "5Hwc": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            }));
            var a = n("peh1"),
                r = e => e.get("gameInstance"),
                i = e => e.get("previousGameInstance"),
                o = Object(a.createSelector)(r, (e => null == e ? void 0 : e.get("userId")))
        },
        "5Mwv": function(e, t, n) {
            "use strict";
            var a, r, i;
            n.d(t, "a", (function() {
                    return i
                })),
                function(e) {
                    e.FILL_IN_THE_BLANK_QUESTION_CONFIG = "FillInTheBlankQuestionConfig"
                }(a || (a = {})),
                function(e) {
                    e.EXPECTED_WRITTEN_ANSWER = "ExpectedWrittenAnswer"
                }(r || (r = {})),
                function(e) {
                    e.N_SIDED_CARD_ANSWER = "NSidedCardAnswer", e.MCQ_ANSWER = "McqAnswer"
                }(i || (i = {}))
        },
        "5Mxy": function(e, t, n) {
            "use strict";
            n("SsNa")
        },
        "68zn": function(e, t, n) {
            "use strict";
            n.r(t)
        },
        "6dIC": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("GCXI"),
                r = [a.kc.WORD, a.kc.DEFINITION, a.kc.LOCATION]
        },
        "6gon": function(e, t, n) {
            "use strict";
            n("4mDm"), n("3bBZ");
            var a = n("q1tI");
            t.a = (e, t) => {
                var [n, r] = Object(a.useState)(!1);
                return Object(a.useEffect)((() => {
                    e && n && t()
                }), [n, t, e]), {
                    setEmptyAd: r
                }
            }
        },
        78: function(e, t, n) {
            n("NKpx"), e.exports = n("LVm/")
        },
        "7ANe": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            n("4mDm"), n("5s+n"), n("3bBZ");
            var a, r = n("9WHe"),
                i = n("4K/9"),
                o = n("X0lI"),
                s = n.n(o),
                A = e => {
                    a = e, QLoad("getSocketForGameInstance")
                },
                c = e => {
                    r.a.error(e)
                };

            function l(e, t) {
                return s()(a).connect("/", {
                    forceNew: !0,
                    path: e.getServerBasePath() + "/socket",
                    query: {
                        gameId: e.get("gameCode"),
                        token: t
                    },
                    reconnectionAttempts: 5,
                    reconnectionDelay: 250,
                    reconnectionDelayMax: 2e3,
                    timeout: 5e3
                })
            }
            Object(i.a)(5, (() => n.e("socket_io_client_lazy").then(n.t.bind(null, "jifJ", 7)).then(A).catch(c)))
        },
        "8KjZ": function(e, t, n) {
            "use strict";
            n.r(t)
        },
        "8XOn": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return H
            })), n.d(t, "a", (function() {
                return Y
            }));
            n("4mDm"), n("3bBZ"), n("rB9j"), n("EnZy"), n("ToJy");
            var a = n("4OIp"),
                r = n("mSYg"),
                i = n("GCXI"),
                o = n("fPaQ");
            var s = n("KD7m");

            function A(e, t) {
                switch (t) {
                    case i.kc.WORD:
                    case i.kc.DEFINITION:
                        return function(e, t) {
                            return Object(s.a)(function(e) {
                                for (var t = e, n = [], a = 0; a < t.length; a++) {
                                    var r = t.charAt(a);
                                    if ("(" === r || "（" === r || "【" === r) n.push(a);
                                    else if ((")" === r || "）" === r || "】" === r) && n.length > 0) {
                                        var i = n.pop();
                                        t = t.substring(0, i) + t.substring(a + 1), a = a - (a - i) - 1
                                    }
                                }
                                return t
                            }(Object(o.a)(e, t))).length
                        }(e, t) > 0;
                    case "random":
                        return A(e, i.kc.WORD) && A(e, i.kc.DEFINITION);
                    case i.kc.LOCATION:
                        return !1;
                    default:
                        throw new Error("Invalid `termSide`: " + t + " (" + typeof t + ")")
                }
            }

            function c(e, t) {
                switch (t) {
                    case i.kc.WORD:
                    case i.kc.DEFINITION:
                        return !!Object(s.a)(Object(o.a)(e, t));
                    default:
                        throw new Error("Invalid `termSide`: " + t + " (" + typeof t + ")")
                }
            }

            function l(e, t) {
                switch (t) {
                    case i.kc.WORD:
                        return c(e, t);
                    case i.kc.DEFINITION:
                        return c(e, t) || !!e.definitionImageId;
                    case i.kc.LOCATION:
                        return Boolean(e.diagramShape);
                    case "random":
                        return l(e, i.kc.WORD) && l(e, i.kc.DEFINITION);
                    default:
                        throw new Error("Invalid `termSide`: " + t + " (" + typeof t + ")")
                }
            }

            function u(e, t) {
                return t.every((t => l(e, t)))
            }
            class d {
                getQuestionType() {
                    return Object(a.a)().copyAnswer
                }
                isMultiTermQuestionType() {
                    return !1
                }
                isTermValidForQuestion(e) {
                    var {
                        term: t,
                        promptSide: n,
                        answerSide: a
                    } = e;
                    return u(t, [n, a]) && A(t, a)
                }
                generateQuestion(e, t) {
                    if (!e.term) throw new Error("Requires single prompt term to create question");
                    var {
                        term: n,
                        promptSide: r,
                        answerSide: i
                    } = e, o = t.getTermsWithMatchingSide(n, r);
                    return {
                        questionType: Object(a.a)().copyAnswer,
                        promptSide: r,
                        answerSide: i,
                        promptTerm: n,
                        validAnswerTerms: o
                    }
                }
            }
            var m = n("y571"),
                p = n("m4Mj");
            class h {
                getQuestionType() {
                    return Object(p.a)().matching
                }
                isMultiTermQuestionType() {
                    return !0
                }
                isTermValidForQuestion(e) {
                    var {
                        term: t,
                        promptSide: n,
                        answerSide: a
                    } = e;
                    return u(t, [n, a])
                }
                generateQuestion(e) {
                    if (!("terms" in e)) throw new Error("Requires multiple prompt term to create question");
                    var {
                        terms: t,
                        promptSide: n,
                        answerSide: a
                    } = e, r = t.slice();
                    return Object(m.a)(r), {
                        questionType: Object(p.a)().matching,
                        promptSide: n,
                        answerSide: a,
                        promptTerms: t,
                        optionTerms: r
                    }
                }
            }
            n("SYor");
            var g = n("Trb0"),
                f = n.n(g),
                _ = n("FC0k");

            function b(e, t) {
                return t === i.kc.WORD ? e.wordText.entityType : t === i.kc.DEFINITION ? e.definitionText.entityType : null
            }

            function v(e, t) {
                return t === i.kc.WORD ? e.wordText.partOfSpeech : t === i.kc.DEFINITION ? e.definitionText.partOfSpeech : null
            }
            var E = n("MxFU");

            function I() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var a = Math.max(...t.map((e => e.length)));
                return Array(...Array(a)).map(((e, n) => t.map((e => e[n]))))
            }
            var y = n("jXaX");

            function T(e, t, n) {
                return Object(y.a)(e, n) === Object(y.a)(t, n)
            }

            function C(e) {
                return e === i.kc.WORD || e === i.kc.DEFINITION
            }

            function w(e, t) {
                return C(t) ? Object(o.a)(e, t).trim().toLowerCase() : null
            }

            function O(e, t, n) {
                var a = n.get(t);
                if (!a) throw new Error("TermSide " + t + " missing in normalizedTextMap");
                return a.get(e.id)
            }

            function S(e, t, n) {
                return e.some((e => T(e, t, n)))
            }

            function k(e, t, n, a) {
                if (!C(n)) return 0;
                var r = O(e, n, a),
                    i = O(t, n, a);
                if (null === r != (null === i)) return 1;
                if (!r) return 0;
                if (!i) return 0;
                var o = r.substring(0, 15),
                    s = i.substring(0, 15),
                    A = f.a.get(o, s);
                return 0 === o.length ? 0 === s.length ? 0 : 1 : A / Math.max(o.length, s.length)
            }

            function N(e, t, n, a) {
                var r = O(e, n, a),
                    i = O(t, n, a);
                if (null === r != (null === i)) return 1;
                if (!r) return 0;
                if (!i) return 0;
                var o = Math.abs(r.length - i.length);
                return 0 === r.length ? 0 === i.length ? 0 : 1 : o / Math.max(r.length, i.length)
            }

            function B(e, t, n) {
                return v(e, n) === v(t, n) ? 0 : 1
            }

            function j(e, t, n) {
                var a = b(e, n),
                    r = b(t, n);
                return a === E.a.DATE && r === E.a.NUMBER || a === E.a.NUMBER && r === E.a.DATE ? .75 : a === r ? 0 : 1
            }

            function x(e, t, n, a, r) {
                var i, o, s, A = k(e, t, n, r),
                    c = k(e, t, a, r),
                    l = N(e, t, n, r),
                    u = N(e, t, a, r),
                    d = B(e, t, n),
                    m = B(e, t, a),
                    p = (i = e, o = t, s = a, Boolean(Object(_.a)(i, s)) === Boolean(Object(_.a)(o, s)) ? 0 : 1);
                return {
                    answerNormalizedEditDistance: c,
                    promptNormalizedEditDistance: A,
                    promptNormalizedLengthDistance: l,
                    answerNormalizedLengthDistance: u,
                    promptPartOfSpeechDistance: d,
                    answerPartOfSpeechDistance: m,
                    promptTextClassificationDistance: j(e, t, n),
                    answerTextClassificationDistance: j(e, t, a),
                    definitionImageDistance: p,
                    optionWord: t.word
                }
            }

            function D(e) {
                var t = Math.max(...e);
                return 0 === t ? e : e.map((e => e / t))
            }

            function L(e) {
                var {
                    term: t,
                    questionTerm: n,
                    promptSide: a,
                    answerSide: r
                } = e;
                return n.id !== t.id && (!T(n, t, a) && (!T(n, t, r) && !!l(t, r)))
            }

            function R(e) {
                var {
                    terms: t,
                    questionTerm: n,
                    promptSide: a,
                    answerSide: r
                } = e, i = function(e, t) {
                    var n = new Map;
                    return t.forEach((t => {
                        n.set(t, new Map(e.map((e => [e.id, w(e, t)]))))
                    })), n
                }([...t, n], [a, r]), o = function(e) {
                    var t = D(e.map((e => e.promptNormalizedEditDistance))),
                        n = D(e.map((e => e.answerNormalizedEditDistance))),
                        a = D(e.map((e => e.promptNormalizedLengthDistance))),
                        r = D(e.map((e => e.answerNormalizedLengthDistance)));
                    return I(e, t, n, a, r).map((e => e[0].promptPartOfSpeechDistance + 2 * e[0].answerPartOfSpeechDistance + e[0].promptTextClassificationDistance + 2 * e[0].answerTextClassificationDistance + e[0].definitionImageDistance + .25 * e[1] + .3 * e[2] + .15 * e[3] + .2 * e[4]))
                }(t.map((e => x(n, e, a, r, i))));
                return I(t, o).sort(((e, t) => e[1] - t[1])).map((e => e[0]))
            }

            function M(e, t, n, a, r, i) {
                var o = [];
                for (var s of e)
                    if (!L({
                            term: s,
                            questionTerm: a,
                            promptSide: r,
                            answerSide: i
                        }) || S(o, s, i) || !n && S(o, s, r) || o.push(s), o.length >= t) break;
                return o
            }

            function G(e) {
                var {
                    questionTerm: t,
                    promptSide: n,
                    answerSide: a,
                    studyableMaterialDataSource: r,
                    distractorTermCount: i,
                    allowAmbiguousPromptSideOptions: o
                } = e, s = r.terms, A = Object(m.a)(s.slice()), c = M(R({
                    terms: A.slice(0, 30),
                    questionTerm: t,
                    promptSide: n,
                    answerSide: a
                }), i, o, t, n, a);
                return c.length < i && (c = M(c.concat(A), i, o, t, n, a)), c
            }

            function P(e, t) {
                switch (e) {
                    case i.kc.WORD:
                        return t.getDistinctNonEmptyElementCountForSide(i.kc.WORD) > 1;
                    case i.kc.DEFINITION:
                        return t.getDistinctNonEmptyElementCountForSide(i.kc.DEFINITION) > 1;
                    case i.kc.LOCATION:
                        return t.getDistinctNonEmptyElementCountForSide(i.kc.LOCATION) > 1;
                    case "random":
                        return t.getDistinctNonEmptyElementCountForSide(i.kc.WORD) > 1 && t.getDistinctNonEmptyElementCountForSide(i.kc.DEFINITION) > 1;
                    default:
                        throw new Error("Invalid `termSide`: " + e + " (" + typeof e + ")")
                }
            }
            class V {
                getQuestionType() {
                    return Object(p.a)().multipleChoice
                }
                isMultiTermQuestionType() {
                    return !1
                }
                isTermValidForQuestion(e, t) {
                    var {
                        term: n,
                        promptSide: a,
                        answerSide: r
                    } = e;
                    return u(n, [a, r]) && P(r, t)
                }
                generateQuestion(e, t) {
                    if ("question" in e) return e.question;
                    if (!("term" in e)) throw new Error("Requires single prompt term to create question");
                    var {
                        term: n,
                        promptSide: a,
                        answerSide: r
                    } = e, i = [n];
                    return i.push(...G({
                        questionTerm: n,
                        promptSide: a,
                        answerSide: r,
                        studyableMaterialDataSource: t,
                        distractorTermCount: 3,
                        allowAmbiguousPromptSideOptions: !0
                    })), Object(m.a)(i), {
                        questionType: this.getQuestionType(),
                        promptSide: a,
                        answerSide: r,
                        promptTerm: n,
                        optionTerms: i
                    }
                }
            }
            class F {
                getQuestionType() {
                    return Object(a.a)().multipleChoiceWithNoneOption
                }
                isMultiTermQuestionType() {
                    return !1
                }
                isTermValidForQuestion(e, t) {
                    var {
                        term: n,
                        promptSide: a,
                        answerSide: r
                    } = e;
                    return u(n, [a, r]) && P(r, t)
                }
                generateQuestion(e, t) {
                    if (!e.term) throw new Error("Requires single prompt term to create question");
                    var {
                        term: n,
                        promptSide: a,
                        answerSide: r
                    } = e, i = Math.random() < .2, o = [];
                    return i ? o.push(...G({
                        questionTerm: n,
                        promptSide: a,
                        answerSide: r,
                        studyableMaterialDataSource: t,
                        distractorTermCount: 4,
                        allowAmbiguousPromptSideOptions: !0
                    })) : (o.push(n), o.push(...G({
                        questionTerm: n,
                        promptSide: a,
                        answerSide: r,
                        studyableMaterialDataSource: t,
                        distractorTermCount: 3,
                        allowAmbiguousPromptSideOptions: !0
                    }))), Object(m.a)(o), {
                        questionType: this.getQuestionType(),
                        promptSide: a,
                        answerSide: r,
                        promptTerm: n,
                        correctAnswerIsNoneOfTheAbove: i,
                        optionTerms: o
                    }
                }
            }
            class Q {
                getQuestionType() {
                    return Object(a.a)().revealSelfAssessment
                }
                isMultiTermQuestionType() {
                    return !1
                }
                isTermValidForQuestion(e) {
                    var {
                        term: t,
                        promptSide: n,
                        answerSide: a
                    } = e;
                    return u(t, [n, a])
                }
                generateQuestion(e) {
                    if (!e.term) throw new Error("Requires single prompt term to create question");
                    var {
                        term: t,
                        promptSide: n,
                        answerSide: a
                    } = e;
                    return {
                        questionType: this.getQuestionType(),
                        promptSide: n,
                        answerSide: a,
                        promptTerm: t
                    }
                }
            }
            class W {
                getQuestionType() {
                    return Object(p.a)().written
                }
                isMultiTermQuestionType() {
                    return !1
                }
                isTermValidForQuestion(e) {
                    var {
                        term: t,
                        promptSide: n,
                        answerSide: a
                    } = e;
                    return u(t, [n, a]) && A(t, a)
                }
                generateQuestion(e, t) {
                    if (!("term" in e)) throw new Error("Requires single prompt term to create question");
                    var {
                        term: n,
                        promptSide: a,
                        answerSide: r
                    } = e, i = t.getTermsWithMatchingSide(n, a);
                    return {
                        questionType: this.getQuestionType(),
                        promptSide: a,
                        answerSide: r,
                        promptTerm: n,
                        validAnswerTerms: i
                    }
                }
            }

            function Z(e) {
                var t, {
                        studyableMaterialDataSource: n,
                        normalizedOptions: r
                    } = e,
                    o = function(e, t, n, r) {
                        var o = new Map;
                        return t.forEach((t => {
                            var s = e.slice(); - 1 === n.indexOf(t) && -1 !== s.indexOf(Object(a.a)().written) && (-1 !== s.indexOf(Object(a.a)().written) && s.splice(s.indexOf(Object(a.a)().written), 1), -1 !== s.indexOf(Object(a.a)().copyAnswer) && s.splice(s.indexOf(Object(a.a)().copyAnswer), 1)), t === i.kc.LOCATION && (s = s.filter((e => -1 !== r.indexOf(e)))), o.set(t, s)
                        })), o
                    }(r.enabledQuestionTypes, r.enabledAnswerSides, r.enabledWrittenAnswerSides, r.enabledLocationQuestionTypes),
                    s = new Map,
                    A = ((t = new Map).set(Object(a.a)().written, new W), t.set(Object(a.a)().matching, new h), t.set(Object(a.a)().multipleChoice, new V), t.set(Object(a.a)().revealSelfAssessment, new Q), t.set(Object(a.a)().multipleChoiceWithNoneOption, new F), t.set(Object(a.a)().copyAnswer, new d), t),
                    {
                        terms: c
                    } = n;
                return c.forEach((e => {
                    var t = function(e, t, n, a, r, o) {
                        var s = new Map;
                        return a.forEach(((a, A) => {
                            var c = new Map;
                            t.forEach((t => {
                                t !== A && c.set(t, a.filter((a => {
                                    if (t === i.kc.LOCATION && -1 === n.indexOf(a)) return !1;
                                    var s = r.get(a);
                                    if (!s) throw new Error("No question generator found for question type: " + a);
                                    return s.isTermValidForQuestion({
                                        term: e,
                                        promptSide: t,
                                        answerSide: A
                                    }, o)
                                })))
                            })), s.set(A, c)
                        })), s
                    }(e, r.enabledPromptSides, r.enabledLocationQuestionTypes, o, A, n);
                    s.set(e.id, t)
                })), s
            }

            function U(e) {
                var [t, n] = e.split("-", 2);
                return [Object(r.b)(Number(t)), Object(r.b)(Number(n))]
            }

            function H(e, t) {
                var n = Z({
                        studyableMaterialDataSource: e,
                        normalizedOptions: {
                            enabledQuestionTypes: [Object(a.a)().matching],
                            enabledPromptSides: t,
                            enabledAnswerSides: t,
                            enabledWrittenAnswerSides: [],
                            enabledLocationQuestionTypes: [Object(a.a)().matching]
                        }
                    }),
                    r = new Map;
                for (var [i, o] of n)
                    for (var [s, A] of o)
                        for (var [c, l] of A)
                            if (l.length) {
                                var u = s + "-" + c,
                                    d = r.get(u) || new Set;
                                d.add(i), r.set(u, d)
                            } var m = e => {
                    var t = r.get(e);
                    return (null == t ? void 0 : t.size) || 0
                };
                return Array.from(r.keys()).sort(((e, t) => m(t) - m(e))).map((e => [U(e), m(e)]))
            }

            function Y(e, t) {
                return H(e, t).map((e => e[0]))
            }
        },
        A8mX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var a = n("nrsj"),
                r = n("Uudg"),
                i = n("JxFz"),
                o = n("Pxp3"),
                s = n("FFEN"),
                A = n("zt8I"),
                c = n("4FeO"),
                l = n("X0lI"),
                u = n.n(l),
                d = n("q1tI"),
                m = n.n(d);

            function p(e) {
                return m.a.createElement("div", {
                    className: "PausedGameView"
                }, e.isConnected ? function(e) {
                    var {
                        disconnectedTeamMembers: t,
                        gameCode: n,
                        studentUrl: a
                    } = e, i = u()(t.first(), "Expected at least one disconnected team player").get("username");
                    return m.a.createElement("div", {
                        className: "PausedGameView-inner u-container"
                    }, m.a.createElement("header", {
                        className: "PausedGameView-header"
                    }, m.a.createElement(r.a, {
                        id: "live_game.student.paused_game_view.teammate_disconnected.title",
                        playerName: i
                    })), m.a.createElement("p", null, m.a.createElement(r.a, {
                        id: "live_game.student.paused_game_view.teammate_disconnected.instructions_first",
                        playerName: i
                    })), m.a.createElement("p", null, m.a.createElement(r.a, {
                        id: "live_game.student.paused_game_view.teammate_disconnected.instructions_second",
                        playerName: i
                    })), m.a.createElement("br", null), m.a.createElement("p", null, a), m.a.createElement("p", {
                        className: "PausedGameView-gameCode"
                    }, Object(c.a)(n)))
                }(e) : function(e) {
                    var {
                        player: t
                    } = e;
                    return m.a.createElement("div", {
                        className: "PausedGameView-inner u-container"
                    }, m.a.createElement("div", {
                        className: "PausedGameView-lostWifiIcon"
                    }), m.a.createElement(o.a, {
                        className: "PausedGameView-heading"
                    }, m.a.createElement(s.a, {
                        deprecatedStyle: !0,
                        size: 3
                    }, m.a.createElement(r.a, {
                        id: "live_game.student.paused_game_view.self_disconnected.title",
                        playerName: t.get("username")
                    }))), m.a.createElement(A.a, null, m.a.createElement(r.a, {
                        id: "live_game.student.paused_game_view.self_disconnected.instructions_first"
                    })), m.a.createElement(A.a, null, m.a.createElement(r.a, {
                        id: "live_game.student.paused_game_view.self_disconnected.instructions_second"
                    })), m.a.createElement(o.a, null, m.a.createElement(i.a, {
                        "aria-label": Object(a.a)("live_game.student.paused_game_view.self_disconnected.refresh_button"),
                        onClick: () => window.location.reload()
                    }, m.a.createElement(r.a, {
                        id: "live_game.student.paused_game_view.self_disconnected.refresh_button"
                    }))))
                }(e))
            }
        },
        AmF6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return I
            }));
            n("zKZe");
            var a = n("GCXI"),
                r = n("CEMQ"),
                i = (n("SYor"), n("rB9j"), n("EnZy"), n("UxlC"), n("qRTd")),
                o = n("MxFU");

            function s(e, t, n) {
                if (n === o.a.NAME || n === o.a.EVENT || n === o.a.DOCUMENT || n === o.a.COURT_CASE || n === o.a.ORGANIZATION) return o.b.NOUN;
                var a = e.trim().toLowerCase(),
                    r = a.replace(/\.|\,|\(|\)|\[|\]/g, "").split(/\s+/);
                if ("es" === t) {
                    if ("el" === r[0] || "la" === r[0] || "un" === r[0] || "una" === r[0]) return o.b.NOUN;
                    var s = a.slice(-2);
                    if (1 === r.length && ("ar" === s || "er" === s || "ir" === s)) return o.b.VERB
                } else if ("en" === t && !i.h.some((e => e === t))) {
                    if (r.some((e => "n" === e || "noun" === e))) return o.b.NOUN;
                    if (r.some((e => "adj" === e || "adjective" === e))) return o.b.ADJECTIVE;
                    if (r.some((e => "v" === e || "verb" === e))) return o.b.VERB;
                    if (r.some((e => "adv" === e || "adverb" === e))) return o.b.ADVERB
                }
            }
            var A = n("fPaQ"),
                c = ["king", "queen", "president", "general", "archduke", "archduchess", "emperor", "emperess", "csar", "tsar", "tzar"],
                l = ["ruler", "philosopher", "minister", "chief", "father", "explorer", "governor", "commander", "secretary", "author", "writer", "dictator", "senator", "inventor", "scientist", "negotiator", "liberator", "poet", "pharaoh", "conquistador", "statesman", "teacher", "duke", "duchess", "magistrate", "caliph", "knight", "wife", "mother", "father", "scion", "mayor", "chancellor", "reporter", "cartoonist", "muckraker", "lawyer", "doctor", "nurse", "navigator", "sailor", "soldier", "sergeant", "captain", "lieutenant", "admiral", "physicist", "engineer", "mathemetician", "husband", "son", "actor", "evolutionist", "thinker", "preacher", "bishop", "grandson", "daughter", "mathematician", "composer", "cosmonaut", "historian", "scholar", "architect", "astronomer", "astronaut", "prophet", "journalist", "activist"],
                u = ["who", "leader", "leaders", "he", "person", "led", "created", "wrote", "founded", "founder", "established", "became", "his", "wanted", "built", "developed", "invented", "ruled", "helped", "born", "discovered", "life", "criticized", "assassinated", "organized", "whose", "elected", "rule", "supported", "woman", "lived", "worked", "killed", "death", "served", "owned", "she", "claimed", "painted", "protest", "promoted", "lord", "trained", "traveled", "studied", "died", "advocated", "improved", "merchant", "commanded", "whom", "suffagette", "priest", "healer", "designed"],
                d = ["war", "battle", "conflict", "fought", "victory", "turning point", "defeated", "attack", "bloodiest", "struggle", "lasting", "began", "ended", "decisive", "offensive", "event", "fight", "attacked", "lasted", "period", "revolution", "revolt", "revolts", "genocide", "famine", "flood"],
                m = ["declaration", "treaty", "bill", "constitution", "covenant", "proclamation", "agreement", "concordance", "law", "deal", "pact", "act", "acts", "statute", "decree", "charter", "amendment", "papers", "accords", "resolution", "petition", "policy", "manifesto", "order", "edict", "plan", "code", "system"],
                p = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
                h = ["organization", "congress", "church", "kingdom", "empire", "state", "nation", "society", "party", "group", "bloc", "conference", "forces", "movement", "community", "commune", "revolutionaries", "supporters", "assembly", "coalition", "bureau", "family", "committee", "city"],
                g = ["theory", "hypothesis", "religion"];

            function f(e) {
                return e.replace(/\.|,/g, "")
            }

            function _(e, t) {
                if ("math" === t || "chem" === t) return !1;
                var n = e.toLowerCase().split(/\s+/);
                if (n.length <= 4) {
                    if (n.some((e => function(e) {
                            return parseInt(e, 10) >= 500 && parseInt(e, 10) <= 2050 && parseInt(e, 10) === parseFloat(e)
                        }(e)))) return !0;
                    if (n.some((e => "bc" === f(e) || "ad" === f(e))) && n.some((e => function(e) {
                            var t = parseInt(e, 10);
                            return !Number.isNaN(t) && t >= 0
                        }(e)))) return !0;
                    if ("en" === t && n.some((e => p.indexOf(e.replace(/\.|,/g, "")) > -1)) && n.some((e => function(e) {
                            var t = parseInt(e, 10);
                            return !Number.isNaN(t) && t >= 0 && t <= 31
                        }(e)))) return !0
                }
                return !1
            }

            function b(e, t, n) {
                return void 0 === n && (n = 6), e.toLowerCase().split(/[\s,]+/).slice(0, n).some((e => t.indexOf(e) > -1))
            }

            function v(e, t) {
                return "en" === t && b(e, d)
            }

            function E(e, t, n, r) {
                var i = Object(A.a)(e, t),
                    s = t === a.kc.WORD ? n : r;
                if (function(e, t) {
                        if ("en" === t) {
                            if (e.toLowerCase().split(/\s+/).slice(0, 6).some((e => "ism" === e.slice(-3)))) return !0;
                            if (b(e, g)) return !0
                        }
                        return !1
                    }(i, s)) return o.a.BELIEF_SYSTEM;
                if (function(e, t) {
                        if ("en" === t) {
                            var n = e.slice(0, 1);
                            return n === n.toUpperCase() && b(e, c)
                        }
                        return !1
                    }(i, s)) return o.a.NAME;
                if (function(e, t) {
                        var n = e.slice(0, 1),
                            a = n === n.toUpperCase();
                        return !("en" !== t || !a) && b(e, h)
                    }(i, s)) return o.a.ORGANIZATION;
                if (v(i, s)) return o.a.EVENT;
                if (_(i, s)) return o.a.DATE;
                if (!Number.isNaN(parseFloat(i))) return o.a.NUMBER;
                if (function(e, t) {
                        return "en" === t && b(e, m)
                    }(i, s)) return o.a.DOCUMENT;
                if (function(e, t) {
                        if ("en" === t) {
                            var n = e.toLowerCase().split(/[\s,.]+/).slice(0, 10).map((e => "v" === e ? "vs" : e)),
                                a = n.indexOf("vs");
                            return a > 0 && a < n.length - 1
                        }
                        return !1
                    }(i, s)) return o.a.COURT_CASE;
                if (function(e, t) {
                        if ("en" === t) {
                            var n = e.slice(0, 1);
                            return n === n.toUpperCase() && b(e, u)
                        }
                        return !1
                    }(i, s)) return o.a.NAME;
                var d = Object(A.a)(e, function(e) {
                        if (e === a.kc.LOCATION) throw new Error("Location is not a text side");
                        return [a.kc.WORD, a.kc.DEFINITION].filter((t => t !== e))[0]
                    }(t)),
                    p = t === a.kc.WORD ? r : n;
                return function(e, t, n) {
                    if ("en" === t) {
                        var a = e.slice(0, 1);
                        return a === a.toUpperCase() && (b(n, l) || b(n, c))
                    }
                    return !1
                }(i, s, d) ? o.a.NAME : v(d, p) ? o.a.EVENT : function(e, t, n) {
                    var a = e.slice(0, 1),
                        r = a === a.toUpperCase();
                    return !("en" !== t || !r) && b(n, h, 8)
                }(i, s, d) ? o.a.ORGANIZATION : function(e, t, n) {
                    if ("en" === t) {
                        var a = e.slice(0, 1);
                        return a === a.toUpperCase() && b(n, u)
                    }
                    return !1
                }(i, s, d) ? o.a.NAME : void 0
            }

            function I(e, t, n) {
                var i = {};
                n.forEach((e => {
                    i[e.id] = e
                }));
                var o = {};
                return t.forEach((e => {
                    o[e.termId] = e
                })), e.map((e => {
                    var t = i[e.setId];
                    if (!t) throw new Error("Missing set with id " + e.setId);
                    var n = t.wordLang,
                        A = t.defLang,
                        c = E(e, a.kc.WORD, n, A),
                        l = E(e, a.kc.DEFINITION, n, A),
                        u = s(e.word, n, c),
                        d = s(e.definition, A, l),
                        m = {
                            rawText: e.word,
                            languageCode: n,
                            partOfSpeech: u,
                            entityType: c
                        },
                        p = {
                            rawText: e.definition,
                            languageCode: A,
                            partOfSpeech: d,
                            entityType: l
                        },
                        h = Object(r.b)(e, a.kc.WORD, o),
                        g = Object(r.b)(e, a.kc.DEFINITION, o),
                        f = Object(r.b)(e, a.kc.LOCATION, o),
                        _ = o[e.id];
                    return Object.assign({}, e, {
                        wordText: m,
                        definitionText: p,
                        wordEquivalenceKey: h,
                        definitionEquivalenceKey: g,
                        locationEquivalenceKey: f,
                        diagramShape: _
                    })
                }))
            }
        },
        B9Yq: function(e, t) {
            e.exports = function() {
                throw new Error("define cannot be used indirect")
            }
        },
        ByUA: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        CA7o: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            }));
            var a = n("pVnL"),
                r = n.n(a),
                i = (n("4mDm"), n("3bBZ"), n("TX86")),
                o = n.n(i),
                s = n("q1tI"),
                A = n.n(s),
                c = n("INDh"),
                l = 1,
                u = ["CapsLock", "Tab"];

            function d(e) {
                var t = Array.isArray(e) ? e.join(", ") : e;
                return Object(c.a)((function(e) {
                    return class extends A.a.Component {
                        constructor() {
                            super(...arguments), this.state = {
                                keydownEvent: null
                            }, this.componentDidMount = () => {
                                t ? (o.a.pushScope(this.scope), o()(t, this.scope, this.handleKeydown)) : window.document.addEventListener("keydown", this.handleKeydown, !0)
                            }, this.componentWillUnmount = () => {
                                t ? (o.a.deleteScope(this.scope), o.a.unbind(t, this.scope)) : window.document.removeEventListener("keydown", this.handleKeydown)
                            }, this.handleKeydown = e => {
                                !t && this.isModifierKey(e) || e.repeat || this.setState({
                                    keydownEvent: e
                                }, (() => {
                                    this.setState({
                                        keydownEvent: null
                                    })
                                }))
                            }, this.isModifierKey = e => {
                                var {
                                    altKey: t,
                                    ctrlKey: n,
                                    metaKey: a,
                                    shiftKey: r
                                } = e;
                                return t || n || a || r
                            }, this.scope = "keydownDecorator#" + l++
                        }
                        render() {
                            return A.a.createElement(e, r()({}, this.props, {
                                keydownEvent: this.state.keydownEvent
                            }))
                        }
                    }
                }))
            }
        },
        CEMQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            })), n.d(t, "b", (function() {
                return c
            }));
            n("JfAA"), n("rB9j"), n("UxlC");
            var a = n("GCXI"),
                r = n("fPaQ"),
                i = n("FC0k"),
                o = n("KD7m");

            function s(e) {
                var t = 0;
                if (0 === e.length) return t.toString();
                for (var n = 0; n < e.length; n++) {
                    t = (t << 5) - t + e.charCodeAt(n), t &= t
                }
                return t.toString()
            }

            function A(e, t, n) {
                if (n) return s("object" == typeof n ? JSON.stringify(n) : n);
                var a = Object(o.a)(e).toLowerCase();
                if (a.length > 0 || t) {
                    var r = function(e) {
                        return e ? e.replace(/(_\w+)?\.\w+$/, "") : null
                    }(t);
                    return a + "/_/_/" + (r ? s(r) : "")
                }
                return null
            }

            function c(e, t, n) {
                var o, s = null,
                    c = null;
                return t === a.kc.LOCATION ? (o = "", s = n[e.id]) : (o = Object(r.a)(e, t), c = Object(i.b)(e, t)), A(o, c, s ? s.shape : null)
            }
        },
        CLQU: function(e, t, n) {
            "use strict";
            var a;

            function r(e) {
                return e && (a = e), a
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        CzCa: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        DAve: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            n("4mDm"), n("3bBZ"), n("Kz25"), n("rB9j"), n("hByQ"), n("LKBx"), n("zKZe");
            var a = n("Qyje"),
                r = n.n(a);
            class i {
                static linkWithData(e, t) {
                    var n = new URL(e),
                        {
                            origin: a,
                            pathname: i,
                            search: o
                        } = n,
                        s = o.startsWith("?") ? o.substr(1) : o,
                        A = Object.assign({}, r.a.parse(s), t);
                    return "" + a + i + "?" + Object.keys(A).map((e => e + "=" + encodeURIComponent(A[e]))).join("&")
                }
            }
            i.getCanonicalUrl = e => (window.location.origin || "https://quizlet.com") + "/" + e, i.getFlashcardsLink = e => i.getCanonicalUrl(e) + "/flashcards", i.getMatchLink = e => i.getCanonicalUrl(e) + "/match", i.linkAllCanonical = (e, t) => i.linkWithData(e, {
                $canonical_url: t,
                $android_url: t,
                $ios_url: t
            })
        },
        DN0N: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n("4mDm"), n("3bBZ");
            var a = n("GCXI"),
                r = n("l/PD"),
                i = n("8XOn"),
                o = [a.kc.WORD, a.kc.DEFINITION, a.kc.LOCATION];

            function s(e) {
                var {
                    diagramShapes: t,
                    set: n,
                    terms: s
                } = e, A = new r.a(s, t, [n]);
                return Object(i.b)(A, o).filter((e => {
                    var [t] = e;
                    return t[0] !== a.kc.LOCATION
                }))
            }
        },
        Dmq4: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return T
            }));
            var a = n("baRz"),
                r = n("qqKc"),
                i = n("r7gd"),
                o = n("pEZU"),
                s = n("uyLA"),
                A = n("VW3V"),
                c = n("4IVF"),
                l = (n("4mDm"), n("3bBZ"), n("qhN8")),
                u = n("q1tI"),
                d = n.n(u),
                m = Object(a.styled)("div")({
                    name: "BarContainer",
                    class: "b1431m4k",
                    vars: {
                        "b1431m4k-0": [e => e.backgroundColor]
                    }
                }),
                p = Object(a.styled)("div")({
                    name: "Bar",
                    class: "btux6nu",
                    vars: {
                        "btux6nu-0": [e => e.color],
                        "btux6nu-2": [e => e.widthPercent]
                    }
                });

            function h(e) {
                var {
                    duration: t = l.a,
                    progressBackgroundColor: n,
                    progressColor: a
                } = e, [r, i] = Object(u.useState)(0), o = 1 / (10 * t) * .8;
                Object(u.useEffect)((() => {
                    var e = 0,
                        n = !0,
                        a = setInterval((() => {
                            e += o, n && i(e), e >= t && clearInterval(a)
                        }), .8);
                    return () => {
                        n = !1
                    }
                }), []);
                var s = Math.round(r / t * 1e4) / 100;
                return d.a.createElement(m, {
                    backgroundColor: n
                }, d.a.createElement(p, {
                    color: a,
                    "data-testid": "progress-bar",
                    widthPercent: s + "%"
                }))
            }
            n("WO9r");
            var g = n("l6OD"),
                f = Object(a.styled)("div")({
                    name: "Control",
                    class: "cgkxufs"
                }),
                _ = Object(a.styled)("div")({
                    name: "Inner",
                    class: "iau01bn"
                }),
                b = Object(a.styled)("div")({
                    name: "ModeHeaderLogo",
                    class: "mflswmp"
                }),
                v = Object(a.styled)("h4")({
                    name: "HeaderText",
                    class: "h1flsb8t"
                }),
                E = Object(a.styled)("div")({
                    name: "Actions",
                    class: "a1tvlxet"
                }),
                I = Object(a.styled)("div")({
                    name: "Options",
                    class: "o17amcgk"
                }),
                y = Object(a.styled)("div")({
                    name: "ActionButton",
                    class: "a1g0mdwd"
                });

            function T(e) {
                var {
                    activityType: t = null,
                    isShowingQuestion: n = !1,
                    isTeacher: a = !0,
                    onClickExitButton: l,
                    onClickOptions: u,
                    onMusicChange: m,
                    headerText: p,
                    shouldPlayMusic: T,
                    shouldShowOptions: C
                } = e, w = Object(o.a)(), {
                    t: O
                } = Object(s.a)(), S = () => m ? m(!T) : null, k = () => t === A.a.CHECKPOINT && !a;
                return d.a.createElement(f, null, d.a.createElement(_, null, k() ? p ? d.a.createElement(v, null, p) : d.a.createElement(b, null, d.a.createElement(c.a, {
                    activityType: t
                })) : d.a.createElement(d.a.Fragment, null, d.a.createElement(b, null, d.a.createElement(c.a, {
                    activityType: t
                })), p && Object(g.a)(w, "s") ? d.a.createElement(v, null, p) : null), k() ? null : d.a.createElement(E, null, C && u ? d.a.createElement(d.a.Fragment, null, d.a.createElement(I, null, Object(g.a)(w, "m") ? d.a.createElement(r.d, {
                    onClick: u,
                    text: O("modes.mode_controls.options_button")
                }) : d.a.createElement(r.a, {
                    alt: O("modes.mode_controls.options_button"),
                    icon: "settings",
                    onClick: u,
                    shape: "square",
                    size: "medium"
                })), t !== A.a.CHECKPOINT ? d.a.createElement(y, null, T ? d.a.createElement(r.a, {
                    alt: O("global.icon.audio"),
                    icon: "audio",
                    onClick: S,
                    shape: "square",
                    size: "medium"
                }) : d.a.createElement(r.a, {
                    alt: O("global.icon.mute"),
                    icon: "mute",
                    onClick: S,
                    shape: "square",
                    size: "medium"
                })) : null) : null, l ? d.a.createElement(y, null, d.a.createElement(r.a, {
                    alt: O("modes.mode_controls.exit_button"),
                    icon: "x",
                    onClick: l,
                    shape: "square",
                    size: "medium"
                })) : null)), n ? d.a.createElement(h, {
                    progressBackgroundColor: "" + i.e.$200,
                    progressColor: "" + i.e.$400
                }) : null)
            }
            n("s343")
        },
        Dt3B: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return s
            }));
            n("zKZe");
            var a = n("QImf"),
                r = n("lKDL"),
                i = n("mEm4"),
                o = Object.assign({}, r.a, Object(i.a)("ACTION_TYPES", {
                    JOIN_GAME: null,
                    JOIN_TEAM: null,
                    MATCHTEAM_SUBMIT_ANSWER: null,
                    REMOVE_PLAYER_FROM_TEAM: null,
                    SET_PREVIOUS_GAME_INSTANCE: null,
                    SUBMIT_PLAYER_INFORMATION: null,
                    TOGGLE_AUDIO_URL: null,
                    UPDATE_CONNECTION_STATUS: null
                })),
                s = (Object(i.a)("TERM_ANSWER_STATES", {
                    CORRECT: null,
                    INCORRECT: null,
                    NOT_ANSWERED: null
                }), 6);
            a.b.Xxlarge
        },
        E52R: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "c", (function() {
                return A
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            }));
            n("E9XD");
            var a = n("JPcv"),
                r = n("peh1"),
                i = e => e.get("allTerms"),
                o = e => e.get("terms"),
                s = e => e.get("diagramImage"),
                A = e => e.get("diagramShapes", Object(a.List)()),
                c = Object(r.createSelector)(A, (e => e.reduce(((e, t) => e.set(t.get("termId"), t)), Object(a.Map)()))),
                l = Object(r.createSelector)([i, A], ((e, t) => 0 === t.count() ? null : e.find((e => e.get("id") === t.first().get("termId")))))
        },
        "Ew+T": function(e, t, n) {
            var a = n("I+eb"),
                r = n("2oRo"),
                i = n("LPSS");
            a({
                global: !0,
                bind: !0,
                enumerable: !0,
                forced: !r.setImmediate || !r.clearImmediate
            }, {
                setImmediate: i.set,
                clearImmediate: i.clear
            })
        },
        EzPt: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n("Mn35"),
                r = n.n(a);
            n("4mDm"), n("3bBZ");

            function i(e, t) {
                var [n, a] = r()(e, (e => function(e, t) {
                    var {
                        type: n
                    } = e;
                    return t.indexOf(n) > -1
                }(e, t)));
                return {
                    matching: n,
                    nonMatching: a,
                    numTotal: n.length + a.length
                }
            }
        },
        "F9/U": function(e, t, n) {
            "use strict";
            n.r(t)
        },
        FC0k: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = n("GCXI");

            function r(e, t) {
                return t === a.kc.DEFINITION && e.definitionImageId ? e.definitionImageId : null
            }

            function i(e, t) {
                return t === a.kc.DEFINITION ? e._imageUrl : null
            }
        },
        FkyO: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = -1;
                return () => (t < e - 1 ? t++ : t = 0, t)
            }
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return s
            }));
            var r = a(5),
                i = a(3);

            function o(e) {
                switch (r()) {
                    case 1:
                        return e("assistant.label.answer_feedback.correct.1");
                    case 2:
                        return e("assistant.label.answer_feedback.correct.2");
                    case 3:
                        return e("assistant.label.answer_feedback.correct.3");
                    case 4:
                        return e("assistant.label.answer_feedback.correct.4");
                    default:
                        return e("assistant.label.answer_feedback.correct.0")
                }
            }

            function s(e) {
                switch (i()) {
                    case 1:
                        return e("assistant.label.answer_feedback.incorrect.1");
                    case 2:
                        return e("assistant.label.answer_feedback.incorrect.2");
                    default:
                        return e("assistant.label.answer_feedback.incorrect.0")
                }
            }
        },
        "G87+": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n("q1tI"),
                r = n.n(a),
                i = n("TSYQ"),
                o = n.n(i),
                s = n("Uudg");

            function A(e) {
                var {
                    isPlaying: t
                } = e, n = t ? r.a.createElement(s.a, {
                    id: "live_game.landscape_blocker.rejoin_game_instructions"
                }) : r.a.createElement(s.a, {
                    id: "live_game.landscape_blocker.best_in_portrait_instructions"
                }), a = o()("MobileLandscapeBlocker", {
                    "is-playing": t
                });
                return r.a.createElement("div", {
                    className: a
                }, r.a.createElement("p", {
                    className: "MobileLandscapeBlocker-instruction"
                }, r.a.createElement(s.a, {
                    id: "live_game.landscape_blocker.rotate_instructions"
                })), r.a.createElement("div", {
                    className: "MobileLandscapeBlocker-image"
                }), r.a.createElement("p", {
                    className: "MobileLandscapeBlocker-instruction"
                }, n))
            }
        },
        GonL: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            var a = n("HZII"),
                r = n.n(a),
                i = (n("4mDm"), n("3bBZ"), n("rB9j"), n("EnZy"), n("UxlC"), n("4+fi")),
                o = e => e || Math.round(1e4 * Math.random()),
                s = n("t1Ez"),
                A = n("JxFz"),
                c = n("Pxp3"),
                l = n("zt8I"),
                u = n("nrsj"),
                d = n("q1tI"),
                m = n.n(d),
                p = n("xNal"),
                h = n("fdo3"),
                g = r()((() => ({
                    [i.a.HANDWRITING]: {
                        header: Object(u.a)("modes.cards.feature_validations.handwriting.header"),
                        body: Object(u.a)("modes.cards.feature_validations.handwriting.body"),
                        ctaLink: "https://forms.gle/U7aeBGLKh4eiT1Ny7"
                    },
                    [i.a.VOICE_SPEED]: {
                        header: Object(u.a)("modes.cards.feature_validations.voice_speed.header"),
                        body: Object(u.a)("modes.cards.feature_validations.voice_speed.body"),
                        ctaLink: "https://forms.gle/K7g3CTxoE54qN1wc8"
                    },
                    [i.a.VOICE_SPEAKING]: {
                        header: Object(u.a)("modes.cards.feature_validations.voice_speaking.header"),
                        body: Object(u.a)("modes.cards.feature_validations.voice_speaking.body"),
                        ctaLink: "https://forms.gle/VhMoCDvUqBwaiPyT6"
                    }
                })));
            class f extends d.PureComponent {
                constructor() {
                    super(...arguments), this.setCurrentCardIndexCookieToZero = () => {
                        var e = "0," + o(),
                            t = window.location.pathname.split("/")[1];
                        p.c.write("currentCardIndex", e, {
                            duration: 7,
                            path: "/" + t + "/"
                        })
                    }, this.studyAllTerms = () => {
                        this.setCurrentCardIndexCookieToZero(), Object(h.a)(window.location.pathname.replace("/starred", ""))
                    }
                }
                componentDidMount() {
                    var {
                        actions: e,
                        cardsEndFeatureValidation: t
                    } = this.props;
                    e && t && e.logFeatureValidationUserEligible()
                }
                renderPremiumCta() {
                    return m.a.createElement(c.a, {
                        className: "CardsEnd-upsell"
                    }, m.a.createElement(c.a, {
                        className: "CardsEnd-headline"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.headline"
                    })), m.a.createElement(c.a, {
                        className: "CardsEnd-upsellText"
                    }, m.a.createElement(l.a, null, m.a.createElement(s.a, {
                        emoji: "🔓",
                        id: "modes.cards.end.get_more_of_the_good_stuff"
                    }))))
                }
                renderFeatureValidation() {
                    var e = this.props.cardsEndFeatureValidation;
                    if (!e || !g()[e]) return this.renderUpsell();
                    var t = g()[e],
                        {
                            actions: n
                        } = this.props;
                    return m.a.createElement(c.a, {
                        className: "CardsEnd-upsell CardsEnd-upsell--featureValidation"
                    }, m.a.createElement(c.a, {
                        className: "CardsEnd-featureValidationHeadline"
                    }, t.header), m.a.createElement(c.a, {
                        className: "CardsEnd-upsellText"
                    }, m.a.createElement(l.a, null, t.body)), m.a.createElement(c.a, {
                        className: "CardsEnd-upsellCtas"
                    }, m.a.createElement(A.a, {
                        "aria-label": Object(u.a)("modes.cards.feature_validations.common.signup"),
                        disabled: !this.props.isLastCard,
                        linkTo: t.ctaLink,
                        linkToNewTab: !0,
                        onClick: n ? n.logFeatureValidationClicked : void 0
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.feature_validations.common.signup"
                    })), m.a.createElement(A.a, {
                        "aria-label": Object(u.a)("modes.cards.feature_validations.common.no_thanks"),
                        disabled: !this.props.isLastCard,
                        onClick: () => this.props.onRestart(),
                        variant: "borderless",
                        width: "fill"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.feature_validations.common.no_thanks"
                    }))))
                }
                renderUpsell() {
                    return this.props.showVerifiedUI && !this.props.canAccessStudyableFeatures ? this.renderPremiumCta() : this.props.learnModePath ? m.a.createElement(c.a, {
                        className: "CardsEnd-upsell"
                    }, m.a.createElement(c.a, {
                        className: "CardsEnd-headline"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.headline"
                    })), m.a.createElement(c.a, {
                        className: "CardsEnd-upsellText"
                    }, m.a.createElement(l.a, null, m.a.createElement(s.a, {
                        id: "modes.cards.end.subheadline",
                        numTerms: this.props.numStudiedTerms
                    })), m.a.createElement(l.a, null, m.a.createElement(s.a, {
                        id: "modes.cards.end.learn_upsell"
                    }))), m.a.createElement(c.a, {
                        className: "CardsEnd-upsellCtas"
                    }, m.a.createElement(A.a, {
                        "aria-label": Object(u.a)("modes.cards.end.learn_upsell_button"),
                        disabled: !this.props.isLastCard,
                        linkTo: this.props.learnModePath
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.learn_upsell_button"
                    })), m.a.createElement(A.a, {
                        "aria-label": Object(u.a)("modes.cards.end.learn_upsell_start_over"),
                        disabled: !this.props.isLastCard,
                        onClick: () => this.props.onRestart(),
                        variant: "borderless",
                        width: "fill"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.learn_upsell_start_over"
                    })))) : this.renderRegularCta()
                }
                renderRegularCta() {
                    var e = "studyGuide" === this.props.variant || "sellerHome" === this.props.variant;
                    return m.a.createElement(c.a, {
                        className: "CardsEnd-upsell"
                    }, m.a.createElement(c.a, {
                        className: "CardsEnd-headline"
                    }, e ? m.a.createElement(s.a, {
                        id: "modes.cards.end.thats_a_start"
                    }) : m.a.createElement(s.a, {
                        id: "modes.cards.end.headline"
                    })), m.a.createElement(c.a, {
                        className: "CardsEnd-upsellText"
                    }, m.a.createElement(l.a, null, e ? m.a.createElement(s.a, {
                        emoji: "🔓",
                        id: "modes.cards.end.get_more_of_the_good_stuff"
                    }) : m.a.createElement(s.a, {
                        id: "modes.cards.end.subheadline",
                        numTerms: this.props.numStudiedTerms
                    })), m.a.createElement(A.a, {
                        disabled: !this.props.isLastCard,
                        hero: !0,
                        onClick: () => this.props.onRestart(),
                        width: "fill"
                    }, this.renderCTAButtonLink())))
                }
                renderCTAButtonLink() {
                    switch (this.props.variant) {
                        case "studyGuide":
                            return m.a.createElement(s.a, {
                                id: "modes.cards.end.return_to_study_guide"
                            });
                        case "sellerHome":
                            return m.a.createElement(s.a, {
                                id: "modes.cards.end.continue_to_study_guide"
                            });
                        case "none":
                        default:
                            return m.a.createElement(s.a, {
                                id: "modes.cards.end.start_over_button"
                            })
                    }
                }
                renderTikTokEndCard() {
                    return m.a.createElement("div", {
                        className: "CardsEnd CardsEnd-tiktok"
                    }, m.a.createElement("div", {
                        className: "CardsEnd-content"
                    }, m.a.createElement(c.a, {
                        className: "CardsEnd-upsell"
                    }, m.a.createElement(c.a, {
                        className: "CardsEnd--confettiImage"
                    }), m.a.createElement(c.a, {
                        className: "CardsEnd-headline"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.headline"
                    }), " ", m.a.createElement(s.a, {
                        id: "modes.cards.end.subheadline",
                        numTerms: this.props.numStudiedTerms
                    }))), m.a.createElement(A.a, {
                        disabled: !this.props.isLastCard,
                        hero: !0,
                        onClick: () => this.props.onRestart(),
                        width: "fill"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.start_over_button"
                    }))))
                }
                render() {
                    return this.props.isTikTok ? this.renderTikTokEndCard() : m.a.createElement("div", {
                        className: "CardsEnd"
                    }, m.a.createElement("div", {
                        className: "CardsEnd-content"
                    }, this.props.cardsEndFeatureValidation ? this.renderFeatureValidation() : this.renderUpsell(), this.props.numStarredTerms && this.props.numStarredTerms > 0 && !this.props.isFilteringStarred ? m.a.createElement(A.a, {
                        "aria-label": Object(u.a)("modes.cards.end.study_starred_button", {
                            numStarredTerms: this.props.numStarredTerms
                        }),
                        disabled: !this.props.isLastCard,
                        hero: !0,
                        onClick: () => this.props.onRestart(!0),
                        width: "fill"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.study_starred_button",
                        numStarredTerms: this.props.numStarredTerms
                    })) : null, this.props.isFilteringStarred && this.props.numTermsInSet ? m.a.createElement(A.a, {
                        "aria-label": Object(u.a)("modes.cards.end.study_all_button", {
                            numTerms: this.props.numTermsInSet
                        }),
                        disabled: !this.props.isLastCard,
                        hero: !0,
                        onClick: () => this.studyAllTerms(),
                        width: "fill"
                    }, m.a.createElement(s.a, {
                        id: "modes.cards.end.study_all_button",
                        numTerms: this.props.numTermsInSet
                    })) : null))
                }
            }
            f.defaultProps = {
                variant: "none",
                isTikTok: !1
            }
        },
        HlzF: function(e, t, n) {
            (function(a) {
                var r;
                n("rB9j"), n("UxlC"), n("Rm1S"), n("EnZy"), n("5s+n"), n("4mDm"), n("rOQg"), n("XMab"), n("IZzc"), n("s5qe"),
                    /*!
                     *  howler.js v2.2.1
                     *  howlerjs.com
                     *
                     *  (c) 2013-2020, James Simpson of GoldFire Studios
                     *  goldfirestudios.com
                     *
                     *  MIT License
                     */
                    function() {
                        "use strict";
                        var n = function() {
                            this.init()
                        };
                        n.prototype = {
                            init: function() {
                                var e = this || i;
                                return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
                            },
                            volume: function(e) {
                                var t = this || i;
                                if (e = parseFloat(e), t.ctx || m(), void 0 !== e && e >= 0 && e <= 1) {
                                    if (t._volume = e, t._muted) return t;
                                    t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, i.ctx.currentTime);
                                    for (var n = 0; n < t._howls.length; n++)
                                        if (!t._howls[n]._webAudio)
                                            for (var a = t._howls[n]._getSoundIds(), r = 0; r < a.length; r++) {
                                                var o = t._howls[n]._soundById(a[r]);
                                                o && o._node && (o._node.volume = o._volume * e)
                                            }
                                    return t
                                }
                                return t._volume
                            },
                            mute: function(e) {
                                var t = this || i;
                                t.ctx || m(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, i.ctx.currentTime);
                                for (var n = 0; n < t._howls.length; n++)
                                    if (!t._howls[n]._webAudio)
                                        for (var a = t._howls[n]._getSoundIds(), r = 0; r < a.length; r++) {
                                            var o = t._howls[n]._soundById(a[r]);
                                            o && o._node && (o._node.muted = !!e || o._muted)
                                        }
                                return t
                            },
                            stop: function() {
                                for (var e = this || i, t = 0; t < e._howls.length; t++) e._howls[t].stop();
                                return e
                            },
                            unload: function() {
                                for (var e = this || i, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                                return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, m()), e
                            },
                            codecs: function(e) {
                                return (this || i)._codecs[e.replace(/^x-/, "")]
                            },
                            _setup: function() {
                                var e = this || i;
                                if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio)
                                    if ("undefined" != typeof Audio) try {
                                        void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
                                    } catch (t) {
                                        e.noAudio = !0
                                    } else e.noAudio = !0;
                                try {
                                    (new Audio).muted && (e.noAudio = !0)
                                } catch (t) {}
                                return e.noAudio || e._setupCodecs(), e
                            },
                            _setupCodecs: function() {
                                var e = this || i,
                                    t = null;
                                try {
                                    t = "undefined" != typeof Audio ? new Audio : null
                                } catch (o) {
                                    return e
                                }
                                if (!t || "function" != typeof t.canPlayType) return e;
                                var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                                    a = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                                    r = a && parseInt(a[0].split("/")[1], 10) < 33;
                                return e._codecs = {
                                    mp3: !(r || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                                    mpeg: !!n,
                                    opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                                    ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                                    oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                                    wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""),
                                    aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                                    caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                                    m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                                    m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                                    mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                                    weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                                    webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                                    dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                                    flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                                }, e
                            },
                            _unlockAudio: function() {
                                var e = this || i;
                                if (!e._audioUnlocked && e.ctx) {
                                    e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                                    var t = function t(n) {
                                        for (; e._html5AudioPool.length < e.html5PoolSize;) try {
                                            var a = new Audio;
                                            a._unlocked = !0, e._releaseHtml5Audio(a)
                                        } catch (n) {
                                            e.noAudio = !0;
                                            break
                                        }
                                        for (var r = 0; r < e._howls.length; r++)
                                            if (!e._howls[r]._webAudio)
                                                for (var i = e._howls[r]._getSoundIds(), o = 0; o < i.length; o++) {
                                                    var s = e._howls[r]._soundById(i[o]);
                                                    s && s._node && !s._node._unlocked && (s._node._unlocked = !0, s._node.load())
                                                }
                                        e._autoResume();
                                        var A = e.ctx.createBufferSource();
                                        A.buffer = e._scratchBuffer, A.connect(e.ctx.destination), void 0 === A.start ? A.noteOn(0) : A.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), A.onended = function() {
                                            A.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0);
                                            for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("unlock")
                                        }
                                    };
                                    return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), e
                                }
                            },
                            _obtainHtml5Audio: function() {
                                var e = this || i;
                                if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                                var t = (new Audio).play();
                                return t && "undefined" != typeof Promise && (t instanceof Promise || "function" == typeof t.then) && t.catch((function() {
                                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                                })), new Audio
                            },
                            _releaseHtml5Audio: function(e) {
                                var t = this || i;
                                return e._unlocked && t._html5AudioPool.push(e), t
                            },
                            _autoSuspend: function() {
                                var e = this;
                                if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && i.usingWebAudio) {
                                    for (var t = 0; t < e._howls.length; t++)
                                        if (e._howls[t]._webAudio)
                                            for (var n = 0; n < e._howls[t]._sounds.length; n++)
                                                if (!e._howls[t]._sounds[n]._paused) return e;
                                    return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout((function() {
                                        if (e.autoSuspend) {
                                            e._suspendTimer = null, e.state = "suspending";
                                            var t = function() {
                                                e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                                            };
                                            e.ctx.suspend().then(t, t)
                                        }
                                    }), 3e4), e
                                }
                            },
                            _autoResume: function() {
                                var e = this;
                                if (e.ctx && void 0 !== e.ctx.resume && i.usingWebAudio) return "running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state || "running" === e.state && "interrupted" === e.ctx.state ? (e.ctx.resume().then((function() {
                                    e.state = "running";
                                    for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                                })), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
                            }
                        };
                        var i = new n,
                            o = function(e) {
                                e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
                            };
                        o.prototype = {
                            init: function(e) {
                                var t = this;
                                return i.ctx || m(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload && "metadata" !== e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhr = {
                                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                                    withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials
                                }, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{
                                    fn: e.onend
                                }] : [], t._onfade = e.onfade ? [{
                                    fn: e.onfade
                                }] : [], t._onload = e.onload ? [{
                                    fn: e.onload
                                }] : [], t._onloaderror = e.onloaderror ? [{
                                    fn: e.onloaderror
                                }] : [], t._onplayerror = e.onplayerror ? [{
                                    fn: e.onplayerror
                                }] : [], t._onpause = e.onpause ? [{
                                    fn: e.onpause
                                }] : [], t._onplay = e.onplay ? [{
                                    fn: e.onplay
                                }] : [], t._onstop = e.onstop ? [{
                                    fn: e.onstop
                                }] : [], t._onmute = e.onmute ? [{
                                    fn: e.onmute
                                }] : [], t._onvolume = e.onvolume ? [{
                                    fn: e.onvolume
                                }] : [], t._onrate = e.onrate ? [{
                                    fn: e.onrate
                                }] : [], t._onseek = e.onseek ? [{
                                    fn: e.onseek
                                }] : [], t._onunlock = e.onunlock ? [{
                                    fn: e.onunlock
                                }] : [], t._onresume = [], t._webAudio = i.usingWebAudio && !t._html5, void 0 !== i.ctx && i.ctx && i.autoUnlock && i._unlockAudio(), i._howls.push(t), t._autoplay && t._queue.push({
                                    event: "play",
                                    action: function() {
                                        t.play()
                                    }
                                }), t._preload && "none" !== t._preload && t.load(), t
                            },
                            load: function() {
                                var e = this,
                                    t = null;
                                if (i.noAudio) e._emit("loaderror", null, "No audio support.");
                                else {
                                    "string" == typeof e._src && (e._src = [e._src]);
                                    for (var n = 0; n < e._src.length; n++) {
                                        var a, r;
                                        if (e._format && e._format[n]) a = e._format[n];
                                        else {
                                            if ("string" != typeof(r = e._src[n])) {
                                                e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                                continue
                                            }(a = /^data:audio\/([^;,]+);/i.exec(r)) || (a = /\.([^.]+)$/.exec(r.split("?", 1)[0])), a && (a = a[1].toLowerCase())
                                        }
                                        if (a || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), a && i.codecs(a)) {
                                            t = e._src[n];
                                            break
                                        }
                                    }
                                    if (t) return e._src = t, e._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new s(e), e._webAudio && c(e), e;
                                    e._emit("loaderror", null, "No codec support for selected audio sources.")
                                }
                            },
                            play: function(e, t) {
                                var n = this,
                                    a = null;
                                if ("number" == typeof e) a = e, e = null;
                                else {
                                    if ("string" == typeof e && "loaded" === n._state && !n._sprite[e]) return null;
                                    if (void 0 === e && (e = "__default", !n._playLock)) {
                                        for (var r = 0, o = 0; o < n._sounds.length; o++) n._sounds[o]._paused && !n._sounds[o]._ended && (r++, a = n._sounds[o]._id);
                                        1 === r ? e = null : a = null
                                    }
                                }
                                var s = a ? n._soundById(a) : n._inactiveSound();
                                if (!s) return null;
                                if (a && !e && (e = s._sprite || "__default"), "loaded" !== n._state) {
                                    s._sprite = e, s._ended = !1;
                                    var A = s._id;
                                    return n._queue.push({
                                        event: "play",
                                        action: function() {
                                            n.play(A)
                                        }
                                    }), A
                                }
                                if (a && !s._paused) return t || n._loadQueue("play"), s._id;
                                n._webAudio && i._autoResume();
                                var c = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
                                    l = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - c),
                                    u = 1e3 * l / Math.abs(s._rate),
                                    d = n._sprite[e][0] / 1e3,
                                    m = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
                                s._sprite = e, s._ended = !1;
                                var p = function() {
                                    s._paused = !1, s._seek = c, s._start = d, s._stop = m, s._loop = !(!s._loop && !n._sprite[e][2])
                                };
                                if (!(c >= m)) {
                                    var h = s._node;
                                    if (n._webAudio) {
                                        var g = function() {
                                            n._playLock = !1, p(), n._refreshBuffer(s);
                                            var e = s._muted || n._muted ? 0 : s._volume;
                                            h.gain.setValueAtTime(e, i.ctx.currentTime), s._playStart = i.ctx.currentTime, void 0 === h.bufferSource.start ? s._loop ? h.bufferSource.noteGrainOn(0, c, 86400) : h.bufferSource.noteGrainOn(0, c, l) : s._loop ? h.bufferSource.start(0, c, 86400) : h.bufferSource.start(0, c, l), u !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), u)), t || setTimeout((function() {
                                                n._emit("play", s._id), n._loadQueue()
                                            }), 0)
                                        };
                                        "running" === i.state && "interrupted" !== i.ctx.state ? g() : (n._playLock = !0, n.once("resume", g), n._clearTimer(s._id))
                                    } else {
                                        var f = function() {
                                            h.currentTime = c, h.muted = s._muted || n._muted || i._muted || h.muted, h.volume = s._volume * i.volume(), h.playbackRate = s._rate;
                                            try {
                                                var a = h.play();
                                                if (a && "undefined" != typeof Promise && (a instanceof Promise || "function" == typeof a.then) ? (n._playLock = !0, p(), a.then((function() {
                                                        n._playLock = !1, h._unlocked = !0, t || (n._emit("play", s._id), n._loadQueue())
                                                    })).catch((function() {
                                                        n._playLock = !1, n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), s._ended = !0, s._paused = !0
                                                    }))) : t || (n._playLock = !1, p(), n._emit("play", s._id), n._loadQueue()), h.playbackRate = s._rate, h.paused) return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                                "__default" !== e || s._loop ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), u) : (n._endTimers[s._id] = function() {
                                                    n._ended(s), h.removeEventListener("ended", n._endTimers[s._id], !1)
                                                }, h.addEventListener("ended", n._endTimers[s._id], !1))
                                            } catch (r) {
                                                n._emit("playerror", s._id, r)
                                            }
                                        };
                                        "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === h.src && (h.src = n._src, h.load());
                                        var _ = window && window.ejecta || !h.readyState && i._navigator.isCocoonJS;
                                        if (h.readyState >= 3 || _) f();
                                        else {
                                            n._playLock = !0;
                                            h.addEventListener(i._canPlayEvent, (function e() {
                                                f(), h.removeEventListener(i._canPlayEvent, e, !1)
                                            }), !1), n._clearTimer(s._id)
                                        }
                                    }
                                    return s._id
                                }
                                n._ended(s)
                            },
                            pause: function(e) {
                                var t = this;
                                if ("loaded" !== t._state || t._playLock) return t._queue.push({
                                    event: "pause",
                                    action: function() {
                                        t.pause(e)
                                    }
                                }), t;
                                for (var n = t._getSoundIds(e), a = 0; a < n.length; a++) {
                                    t._clearTimer(n[a]);
                                    var r = t._soundById(n[a]);
                                    if (r && !r._paused && (r._seek = t.seek(n[a]), r._rateSeek = 0, r._paused = !0, t._stopFade(n[a]), r._node))
                                        if (t._webAudio) {
                                            if (!r._node.bufferSource) continue;
                                            void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), t._cleanBuffer(r._node)
                                        } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                                    arguments[1] || t._emit("pause", r ? r._id : null)
                                }
                                return t
                            },
                            stop: function(e, t) {
                                var n = this;
                                if ("loaded" !== n._state || n._playLock) return n._queue.push({
                                    event: "stop",
                                    action: function() {
                                        n.stop(e)
                                    }
                                }), n;
                                for (var a = n._getSoundIds(e), r = 0; r < a.length; r++) {
                                    n._clearTimer(a[r]);
                                    var i = n._soundById(a[r]);
                                    i && (i._seek = i._start || 0, i._rateSeek = 0, i._paused = !0, i._ended = !0, n._stopFade(a[r]), i._node && (n._webAudio ? i._node.bufferSource && (void 0 === i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), n._cleanBuffer(i._node)) : isNaN(i._node.duration) && i._node.duration !== 1 / 0 || (i._node.currentTime = i._start || 0, i._node.pause(), i._node.duration === 1 / 0 && n._clearSound(i._node))), t || n._emit("stop", i._id))
                                }
                                return n
                            },
                            mute: function(e, t) {
                                var n = this;
                                if ("loaded" !== n._state || n._playLock) return n._queue.push({
                                    event: "mute",
                                    action: function() {
                                        n.mute(e, t)
                                    }
                                }), n;
                                if (void 0 === t) {
                                    if ("boolean" != typeof e) return n._muted;
                                    n._muted = e
                                }
                                for (var a = n._getSoundIds(t), r = 0; r < a.length; r++) {
                                    var o = n._soundById(a[r]);
                                    o && (o._muted = e, o._interval && n._stopFade(o._id), n._webAudio && o._node ? o._node.gain.setValueAtTime(e ? 0 : o._volume, i.ctx.currentTime) : o._node && (o._node.muted = !!i._muted || e), n._emit("mute", o._id))
                                }
                                return n
                            },
                            volume: function() {
                                var e, t, n, a = this,
                                    r = arguments;
                                if (0 === r.length) return a._volume;
                                if (1 === r.length || 2 === r.length && void 0 === r[1]) {
                                    var o = a._getSoundIds(),
                                        s = o.indexOf(r[0]);
                                    s >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0])
                                } else r.length >= 2 && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
                                if (!(void 0 !== e && e >= 0 && e <= 1)) return (n = t ? a._soundById(t) : a._sounds[0]) ? n._volume : 0;
                                if ("loaded" !== a._state || a._playLock) return a._queue.push({
                                    event: "volume",
                                    action: function() {
                                        a.volume.apply(a, r)
                                    }
                                }), a;
                                void 0 === t && (a._volume = e), t = a._getSoundIds(t);
                                for (var A = 0; A < t.length; A++)(n = a._soundById(t[A])) && (n._volume = e, r[2] || a._stopFade(t[A]), a._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, i.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * i.volume()), a._emit("volume", n._id));
                                return a
                            },
                            fade: function(e, t, n, a) {
                                var r = this;
                                if ("loaded" !== r._state || r._playLock) return r._queue.push({
                                    event: "fade",
                                    action: function() {
                                        r.fade(e, t, n, a)
                                    }
                                }), r;
                                e = Math.min(Math.max(0, parseFloat(e)), 1), t = Math.min(Math.max(0, parseFloat(t)), 1), n = parseFloat(n), r.volume(e, a);
                                for (var o = r._getSoundIds(a), s = 0; s < o.length; s++) {
                                    var A = r._soundById(o[s]);
                                    if (A) {
                                        if (a || r._stopFade(o[s]), r._webAudio && !A._muted) {
                                            var c = i.ctx.currentTime,
                                                l = c + n / 1e3;
                                            A._volume = e, A._node.gain.setValueAtTime(e, c), A._node.gain.linearRampToValueAtTime(t, l)
                                        }
                                        r._startFadeInterval(A, e, t, n, o[s], void 0 === a)
                                    }
                                }
                                return r
                            },
                            _startFadeInterval: function(e, t, n, a, r, i) {
                                var o = this,
                                    s = t,
                                    A = n - t,
                                    c = Math.abs(A / .01),
                                    l = Math.max(4, c > 0 ? a / c : a),
                                    u = Date.now();
                                e._fadeTo = n, e._interval = setInterval((function() {
                                    var r = (Date.now() - u) / a;
                                    u = Date.now(), s += A * r, s = Math.round(100 * s) / 100, s = A < 0 ? Math.max(n, s) : Math.min(n, s), o._webAudio ? e._volume = s : o.volume(s, e._id, !0), i && (o._volume = s), (n < t && s <= n || n > t && s >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, o.volume(n, e._id), o._emit("fade", e._id))
                                }), l)
                            },
                            _stopFade: function(e) {
                                var t = this,
                                    n = t._soundById(e);
                                return n && n._interval && (t._webAudio && n._node.gain.cancelScheduledValues(i.ctx.currentTime), clearInterval(n._interval), n._interval = null, t.volume(n._fadeTo, e), n._fadeTo = null, t._emit("fade", e)), t
                            },
                            loop: function() {
                                var e, t, n, a = this,
                                    r = arguments;
                                if (0 === r.length) return a._loop;
                                if (1 === r.length) {
                                    if ("boolean" != typeof r[0]) return !!(n = a._soundById(parseInt(r[0], 10))) && n._loop;
                                    e = r[0], a._loop = e
                                } else 2 === r.length && (e = r[0], t = parseInt(r[1], 10));
                                for (var i = a._getSoundIds(t), o = 0; o < i.length; o++)(n = a._soundById(i[o])) && (n._loop = e, a._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e, e && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop)));
                                return a
                            },
                            rate: function() {
                                var e, t, n, a = this,
                                    r = arguments;
                                if (0 === r.length) t = a._sounds[0]._id;
                                else if (1 === r.length) {
                                    var o = a._getSoundIds(),
                                        s = o.indexOf(r[0]);
                                    s >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0])
                                } else 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
                                if ("number" != typeof e) return (n = a._soundById(t)) ? n._rate : a._rate;
                                if ("loaded" !== a._state || a._playLock) return a._queue.push({
                                    event: "rate",
                                    action: function() {
                                        a.rate.apply(a, r)
                                    }
                                }), a;
                                void 0 === t && (a._rate = e), t = a._getSoundIds(t);
                                for (var A = 0; A < t.length; A++)
                                    if (n = a._soundById(t[A])) {
                                        a.playing(t[A]) && (n._rateSeek = a.seek(t[A]), n._playStart = a._webAudio ? i.ctx.currentTime : n._playStart), n._rate = e, a._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(e, i.ctx.currentTime) : n._node && (n._node.playbackRate = e);
                                        var c = a.seek(t[A]),
                                            l = (a._sprite[n._sprite][0] + a._sprite[n._sprite][1]) / 1e3 - c,
                                            u = 1e3 * l / Math.abs(n._rate);
                                        !a._endTimers[t[A]] && n._paused || (a._clearTimer(t[A]), a._endTimers[t[A]] = setTimeout(a._ended.bind(a, n), u)), a._emit("rate", n._id)
                                    } return a
                            },
                            seek: function() {
                                var e, t, n = this,
                                    a = arguments;
                                if (0 === a.length) t = n._sounds[0]._id;
                                else if (1 === a.length) {
                                    var r = n._getSoundIds(),
                                        o = r.indexOf(a[0]);
                                    o >= 0 ? t = parseInt(a[0], 10) : n._sounds.length && (t = n._sounds[0]._id, e = parseFloat(a[0]))
                                } else 2 === a.length && (e = parseFloat(a[0]), t = parseInt(a[1], 10));
                                if (void 0 === t) return n;
                                if ("number" == typeof e && ("loaded" !== n._state || n._playLock)) return n._queue.push({
                                    event: "seek",
                                    action: function() {
                                        n.seek.apply(n, a)
                                    }
                                }), n;
                                var s = n._soundById(t);
                                if (s) {
                                    if (!("number" == typeof e && e >= 0)) {
                                        if (n._webAudio) {
                                            var A = n.playing(t) ? i.ctx.currentTime - s._playStart : 0,
                                                c = s._rateSeek ? s._rateSeek - s._seek : 0;
                                            return s._seek + (c + A * Math.abs(s._rate))
                                        }
                                        return s._node.currentTime
                                    }
                                    var l = n.playing(t);
                                    l && n.pause(t, !0), s._seek = e, s._ended = !1, n._clearTimer(t), n._webAudio || !s._node || isNaN(s._node.duration) || (s._node.currentTime = e);
                                    var u = function() {
                                        n._emit("seek", t), l && n.play(t, !0)
                                    };
                                    if (l && !n._webAudio) {
                                        var d = function e() {
                                            n._playLock ? setTimeout(e, 0) : u()
                                        };
                                        setTimeout(d, 0)
                                    } else u()
                                }
                                return n
                            },
                            playing: function(e) {
                                var t = this;
                                if ("number" == typeof e) {
                                    var n = t._soundById(e);
                                    return !!n && !n._paused
                                }
                                for (var a = 0; a < t._sounds.length; a++)
                                    if (!t._sounds[a]._paused) return !0;
                                return !1
                            },
                            duration: function(e) {
                                var t = this,
                                    n = t._duration,
                                    a = t._soundById(e);
                                return a && (n = t._sprite[a._sprite][1] / 1e3), n
                            },
                            state: function() {
                                return this._state
                            },
                            unload: function() {
                                for (var e = this, t = e._sounds, n = 0; n < t.length; n++) t[n]._paused || e.stop(t[n]._id), e._webAudio || (e._clearSound(t[n]._node), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(i._canPlayEvent, t[n]._loadFn, !1), t[n]._node.removeEventListener("ended", t[n]._endFn, !1), i._releaseHtml5Audio(t[n]._node)), delete t[n]._node, e._clearTimer(t[n]._id);
                                var a = i._howls.indexOf(e);
                                a >= 0 && i._howls.splice(a, 1);
                                var r = !0;
                                for (n = 0; n < i._howls.length; n++)
                                    if (i._howls[n]._src === e._src || e._src.indexOf(i._howls[n]._src) >= 0) {
                                        r = !1;
                                        break
                                    } return A && r && delete A[e._src], i.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
                            },
                            on: function(e, t, n, a) {
                                var r = this["_on" + e];
                                return "function" == typeof t && r.push(a ? {
                                    id: n,
                                    fn: t,
                                    once: a
                                } : {
                                    id: n,
                                    fn: t
                                }), this
                            },
                            off: function(e, t, n) {
                                var a = this,
                                    r = a["_on" + e],
                                    i = 0;
                                if ("number" == typeof t && (n = t, t = null), t || n)
                                    for (i = 0; i < r.length; i++) {
                                        var o = n === r[i].id;
                                        if (t === r[i].fn && o || !t && o) {
                                            r.splice(i, 1);
                                            break
                                        }
                                    } else if (e) a["_on" + e] = [];
                                    else {
                                        var s = Object.keys(a);
                                        for (i = 0; i < s.length; i++) 0 === s[i].indexOf("_on") && Array.isArray(a[s[i]]) && (a[s[i]] = [])
                                    } return a
                            },
                            once: function(e, t, n) {
                                return this.on(e, t, n, 1), this
                            },
                            _emit: function(e, t, n) {
                                for (var a = this, r = a["_on" + e], i = r.length - 1; i >= 0; i--) r[i].id && r[i].id !== t && "load" !== e || (setTimeout(function(e) {
                                    e.call(this, t, n)
                                }.bind(a, r[i].fn), 0), r[i].once && a.off(e, r[i].fn, r[i].id));
                                return a._loadQueue(e), a
                            },
                            _loadQueue: function(e) {
                                var t = this;
                                if (t._queue.length > 0) {
                                    var n = t._queue[0];
                                    n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action()
                                }
                                return t
                            },
                            _ended: function(e) {
                                var t = this,
                                    n = e._sprite;
                                if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
                                var a = !(!e._loop && !t._sprite[n][2]);
                                if (t._emit("end", e._id), !t._webAudio && a && t.stop(e._id, !0).play(e._id), t._webAudio && a) {
                                    t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = i.ctx.currentTime;
                                    var r = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                                    t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), r)
                                }
                                return t._webAudio && !a && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), i._autoSuspend()), t._webAudio || a || t.stop(e._id, !0), t
                            },
                            _clearTimer: function(e) {
                                var t = this;
                                if (t._endTimers[e]) {
                                    if ("function" != typeof t._endTimers[e]) clearTimeout(t._endTimers[e]);
                                    else {
                                        var n = t._soundById(e);
                                        n && n._node && n._node.removeEventListener("ended", t._endTimers[e], !1)
                                    }
                                    delete t._endTimers[e]
                                }
                                return t
                            },
                            _soundById: function(e) {
                                for (var t = this, n = 0; n < t._sounds.length; n++)
                                    if (e === t._sounds[n]._id) return t._sounds[n];
                                return null
                            },
                            _inactiveSound: function() {
                                var e = this;
                                e._drain();
                                for (var t = 0; t < e._sounds.length; t++)
                                    if (e._sounds[t]._ended) return e._sounds[t].reset();
                                return new s(e)
                            },
                            _drain: function() {
                                var e = this,
                                    t = e._pool,
                                    n = 0,
                                    a = 0;
                                if (!(e._sounds.length < t)) {
                                    for (a = 0; a < e._sounds.length; a++) e._sounds[a]._ended && n++;
                                    for (a = e._sounds.length - 1; a >= 0; a--) {
                                        if (n <= t) return;
                                        e._sounds[a]._ended && (e._webAudio && e._sounds[a]._node && e._sounds[a]._node.disconnect(0), e._sounds.splice(a, 1), n--)
                                    }
                                }
                            },
                            _getSoundIds: function(e) {
                                if (void 0 === e) {
                                    for (var t = [], n = 0; n < this._sounds.length; n++) t.push(this._sounds[n]._id);
                                    return t
                                }
                                return [e]
                            },
                            _refreshBuffer: function(e) {
                                return e._node.bufferSource = i.ctx.createBufferSource(), e._node.bufferSource.buffer = A[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, i.ctx.currentTime), this
                            },
                            _cleanBuffer: function(e) {
                                var t = i._navigator && i._navigator.vendor.indexOf("Apple") >= 0;
                                if (i._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
                                    e.bufferSource.buffer = i._scratchBuffer
                                } catch (n) {}
                                return e.bufferSource = null, this
                            },
                            _clearSound: function(e) {
                                /MSIE |Trident\//.test(i._navigator && i._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                            }
                        };
                        var s = function(e) {
                            this._parent = e, this.init()
                        };
                        s.prototype = {
                            init: function() {
                                var e = this,
                                    t = e._parent;
                                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++i._counter, t._sounds.push(e), e.create(), e
                            },
                            create: function() {
                                var e = this,
                                    t = e._parent,
                                    n = i._muted || e._muted || e._parent._muted ? 0 : e._volume;
                                return t._webAudio ? (e._node = void 0 === i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), e._node.gain.setValueAtTime(n, i.ctx.currentTime), e._node.paused = !0, e._node.connect(i.masterGain)) : i.noAudio || (e._node = i._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(i._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, !1), e._node.src = t._src, e._node.preload = !0 === t._preload ? "auto" : t._preload, e._node.volume = n * i.volume(), e._node.load()), e
                            },
                            reset: function() {
                                var e = this,
                                    t = e._parent;
                                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++i._counter, e
                            },
                            _errorListener: function() {
                                var e = this;
                                e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
                            },
                            _loadListener: function() {
                                var e = this,
                                    t = e._parent;
                                t._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = {
                                    __default: [0, 1e3 * t._duration]
                                }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(i._canPlayEvent, e._loadFn, !1)
                            },
                            _endListener: function() {
                                var e = this,
                                    t = e._parent;
                                t._duration === 1 / 0 && (t._duration = Math.ceil(10 * e._node.duration) / 10, t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = 1e3 * t._duration), t._ended(e)), e._node.removeEventListener("ended", e._endFn, !1)
                            }
                        };
                        var A = {},
                            c = function(e) {
                                var t = e._src;
                                if (A[t]) return e._duration = A[t].duration, void d(e);
                                if (/^data:[^;]+;base64,/.test(t)) {
                                    for (var n = atob(t.split(",")[1]), a = new Uint8Array(n.length), r = 0; r < n.length; ++r) a[r] = n.charCodeAt(r);
                                    u(a.buffer, e)
                                } else {
                                    var i = new XMLHttpRequest;
                                    i.open(e._xhr.method, t, !0), i.withCredentials = e._xhr.withCredentials, i.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach((function(t) {
                                        i.setRequestHeader(t, e._xhr.headers[t])
                                    })), i.onload = function() {
                                        var t = (i.status + "")[0];
                                        "0" === t || "2" === t || "3" === t ? u(i.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + i.status + ".")
                                    }, i.onerror = function() {
                                        e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete A[t], e.load())
                                    }, l(i)
                                }
                            },
                            l = function(e) {
                                try {
                                    e.send()
                                } catch (t) {
                                    e.onerror()
                                }
                            },
                            u = function(e, t) {
                                var n = function() {
                                        t._emit("loaderror", null, "Decoding audio data failed.")
                                    },
                                    a = function(e) {
                                        e && t._sounds.length > 0 ? (A[t._src] = e, d(t, e)) : n()
                                    };
                                "undefined" != typeof Promise && 1 === i.ctx.decodeAudioData.length ? i.ctx.decodeAudioData(e).then(a).catch(n) : i.ctx.decodeAudioData(e, a, n)
                            },
                            d = function(e, t) {
                                t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                                    __default: [0, 1e3 * e._duration]
                                }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
                            },
                            m = function() {
                                if (i.usingWebAudio) {
                                    try {
                                        "undefined" != typeof AudioContext ? i.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? i.ctx = new webkitAudioContext : i.usingWebAudio = !1
                                    } catch (r) {
                                        i.usingWebAudio = !1
                                    }
                                    i.ctx || (i.usingWebAudio = !1);
                                    var e = /iP(hone|od|ad)/.test(i._navigator && i._navigator.platform),
                                        t = i._navigator && i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                        n = t ? parseInt(t[1], 10) : null;
                                    if (e && n && n < 9) {
                                        var a = /safari/.test(i._navigator && i._navigator.userAgent.toLowerCase());
                                        i._navigator && !a && (i.usingWebAudio = !1)
                                    }
                                    i.usingWebAudio && (i.masterGain = void 0 === i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), i.masterGain.gain.setValueAtTime(i._muted ? 0 : i._volume, i.ctx.currentTime), i.masterGain.connect(i.ctx.destination)), i._setup()
                                }
                            };
                        void 0 === (r = function() {
                            return {
                                Howler: i,
                                Howl: o
                            }
                        }.apply(t, [])) || (e.exports = r), t.Howler = i, t.Howl = o, void 0 !== a ? (a.HowlerGlobal = n, a.Howler = i, a.Howl = o, a.Sound = s) : "undefined" != typeof window && (window.HowlerGlobal = n, window.Howler = i, window.Howl = o, window.Sound = s)
                    }(),
                    /*!
                     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
                     *  
                     *  howler.js v2.2.1
                     *  howlerjs.com
                     *
                     *  (c) 2013-2020, James Simpson of GoldFire Studios
                     *  goldfirestudios.com
                     *
                     *  MIT License
                     */
                    function() {
                        "use strict";
                        var e;
                        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
                            var t = this;
                            if (!t.ctx || !t.ctx.listener) return t;
                            for (var n = t._howls.length - 1; n >= 0; n--) t._howls[n].stereo(e);
                            return t
                        }, HowlerGlobal.prototype.pos = function(e, t, n) {
                            var a = this;
                            return a.ctx && a.ctx.listener ? (t = "number" != typeof t ? a._pos[1] : t, n = "number" != typeof n ? a._pos[2] : n, "number" != typeof e ? a._pos : (a._pos = [e, t, n], void 0 !== a.ctx.listener.positionX ? (a.ctx.listener.positionX.setTargetAtTime(a._pos[0], Howler.ctx.currentTime, .1), a.ctx.listener.positionY.setTargetAtTime(a._pos[1], Howler.ctx.currentTime, .1), a.ctx.listener.positionZ.setTargetAtTime(a._pos[2], Howler.ctx.currentTime, .1)) : a.ctx.listener.setPosition(a._pos[0], a._pos[1], a._pos[2]), a)) : a
                        }, HowlerGlobal.prototype.orientation = function(e, t, n, a, r, i) {
                            var o = this;
                            if (!o.ctx || !o.ctx.listener) return o;
                            var s = o._orientation;
                            return t = "number" != typeof t ? s[1] : t, n = "number" != typeof n ? s[2] : n, a = "number" != typeof a ? s[3] : a, r = "number" != typeof r ? s[4] : r, i = "number" != typeof i ? s[5] : i, "number" != typeof e ? s : (o._orientation = [e, t, n, a, r, i], void 0 !== o.ctx.listener.forwardX ? (o.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), o.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, .1), o.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1), o.ctx.listener.upX.setTargetAtTime(a, Howler.ctx.currentTime, .1), o.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, .1), o.ctx.listener.upZ.setTargetAtTime(i, Howler.ctx.currentTime, .1)) : o.ctx.listener.setOrientation(e, t, n, a, r, i), o)
                        }, Howl.prototype.init = (e = Howl.prototype.init, function(t) {
                            var n = this;
                            return n._orientation = t.orientation || [1, 0, 0], n._stereo = t.stereo || null, n._pos = t.pos || null, n._pannerAttr = {
                                coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : 360,
                                coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : 360,
                                coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
                                distanceModel: void 0 !== t.distanceModel ? t.distanceModel : "inverse",
                                maxDistance: void 0 !== t.maxDistance ? t.maxDistance : 1e4,
                                panningModel: void 0 !== t.panningModel ? t.panningModel : "HRTF",
                                refDistance: void 0 !== t.refDistance ? t.refDistance : 1,
                                rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : 1
                            }, n._onstereo = t.onstereo ? [{
                                fn: t.onstereo
                            }] : [], n._onpos = t.onpos ? [{
                                fn: t.onpos
                            }] : [], n._onorientation = t.onorientation ? [{
                                fn: t.onorientation
                            }] : [], e.call(this, t)
                        }), Howl.prototype.stereo = function(e, n) {
                            var a = this;
                            if (!a._webAudio) return a;
                            if ("loaded" !== a._state) return a._queue.push({
                                event: "stereo",
                                action: function() {
                                    a.stereo(e, n)
                                }
                            }), a;
                            var r = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                            if (void 0 === n) {
                                if ("number" != typeof e) return a._stereo;
                                a._stereo = e, a._pos = [e, 0, 0]
                            }
                            for (var i = a._getSoundIds(n), o = 0; o < i.length; o++) {
                                var s = a._soundById(i[o]);
                                if (s) {
                                    if ("number" != typeof e) return s._stereo;
                                    s._stereo = e, s._pos = [e, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", s._panner && s._panner.pan || t(s, r), "spatial" === r ? void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(e, 0, 0) : s._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), a._emit("stereo", s._id)
                                }
                            }
                            return a
                        }, Howl.prototype.pos = function(e, n, a, r) {
                            var i = this;
                            if (!i._webAudio) return i;
                            if ("loaded" !== i._state) return i._queue.push({
                                event: "pos",
                                action: function() {
                                    i.pos(e, n, a, r)
                                }
                            }), i;
                            if (n = "number" != typeof n ? 0 : n, a = "number" != typeof a ? -.5 : a, void 0 === r) {
                                if ("number" != typeof e) return i._pos;
                                i._pos = [e, n, a]
                            }
                            for (var o = i._getSoundIds(r), s = 0; s < o.length; s++) {
                                var A = i._soundById(o[s]);
                                if (A) {
                                    if ("number" != typeof e) return A._pos;
                                    A._pos = [e, n, a], A._node && (A._panner && !A._panner.pan || t(A, "spatial"), void 0 !== A._panner.positionX ? (A._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), A._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime), A._panner.positionZ.setValueAtTime(a, Howler.ctx.currentTime)) : A._panner.setPosition(e, n, a)), i._emit("pos", A._id)
                                }
                            }
                            return i
                        }, Howl.prototype.orientation = function(e, n, a, r) {
                            var i = this;
                            if (!i._webAudio) return i;
                            if ("loaded" !== i._state) return i._queue.push({
                                event: "orientation",
                                action: function() {
                                    i.orientation(e, n, a, r)
                                }
                            }), i;
                            if (n = "number" != typeof n ? i._orientation[1] : n, a = "number" != typeof a ? i._orientation[2] : a, void 0 === r) {
                                if ("number" != typeof e) return i._orientation;
                                i._orientation = [e, n, a]
                            }
                            for (var o = i._getSoundIds(r), s = 0; s < o.length; s++) {
                                var A = i._soundById(o[s]);
                                if (A) {
                                    if ("number" != typeof e) return A._orientation;
                                    A._orientation = [e, n, a], A._node && (A._panner || (A._pos || (A._pos = i._pos || [0, 0, -.5]), t(A, "spatial")), void 0 !== A._panner.orientationX ? (A._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), A._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime), A._panner.orientationZ.setValueAtTime(a, Howler.ctx.currentTime)) : A._panner.setOrientation(e, n, a)), i._emit("orientation", A._id)
                                }
                            }
                            return i
                        }, Howl.prototype.pannerAttr = function() {
                            var e, n, a, r = this,
                                i = arguments;
                            if (!r._webAudio) return r;
                            if (0 === i.length) return r._pannerAttr;
                            if (1 === i.length) {
                                if ("object" != typeof i[0]) return (a = r._soundById(parseInt(i[0], 10))) ? a._pannerAttr : r._pannerAttr;
                                e = i[0], void 0 === n && (e.pannerAttr || (e.pannerAttr = {
                                    coneInnerAngle: e.coneInnerAngle,
                                    coneOuterAngle: e.coneOuterAngle,
                                    coneOuterGain: e.coneOuterGain,
                                    distanceModel: e.distanceModel,
                                    maxDistance: e.maxDistance,
                                    refDistance: e.refDistance,
                                    rolloffFactor: e.rolloffFactor,
                                    panningModel: e.panningModel
                                }), r._pannerAttr = {
                                    coneInnerAngle: void 0 !== e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : r._coneInnerAngle,
                                    coneOuterAngle: void 0 !== e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : r._coneOuterAngle,
                                    coneOuterGain: void 0 !== e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : r._coneOuterGain,
                                    distanceModel: void 0 !== e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : r._distanceModel,
                                    maxDistance: void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : r._maxDistance,
                                    refDistance: void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : r._refDistance,
                                    rolloffFactor: void 0 !== e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : r._rolloffFactor,
                                    panningModel: void 0 !== e.pannerAttr.panningModel ? e.pannerAttr.panningModel : r._panningModel
                                })
                            } else 2 === i.length && (e = i[0], n = parseInt(i[1], 10));
                            for (var o = r._getSoundIds(n), s = 0; s < o.length; s++)
                                if (a = r._soundById(o[s])) {
                                    var A = a._pannerAttr;
                                    A = {
                                        coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : A.coneInnerAngle,
                                        coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : A.coneOuterAngle,
                                        coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : A.coneOuterGain,
                                        distanceModel: void 0 !== e.distanceModel ? e.distanceModel : A.distanceModel,
                                        maxDistance: void 0 !== e.maxDistance ? e.maxDistance : A.maxDistance,
                                        refDistance: void 0 !== e.refDistance ? e.refDistance : A.refDistance,
                                        rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : A.rolloffFactor,
                                        panningModel: void 0 !== e.panningModel ? e.panningModel : A.panningModel
                                    };
                                    var c = a._panner;
                                    c ? (c.coneInnerAngle = A.coneInnerAngle, c.coneOuterAngle = A.coneOuterAngle, c.coneOuterGain = A.coneOuterGain, c.distanceModel = A.distanceModel, c.maxDistance = A.maxDistance, c.refDistance = A.refDistance, c.rolloffFactor = A.rolloffFactor, c.panningModel = A.panningModel) : (a._pos || (a._pos = r._pos || [0, 0, -.5]), t(a, "spatial"))
                                } return r
                        }, Sound.prototype.init = function(e) {
                            return function() {
                                var t = this,
                                    n = t._parent;
                                t._orientation = n._orientation, t._stereo = n._stereo, t._pos = n._pos, t._pannerAttr = n._pannerAttr, e.call(this), t._stereo ? n.stereo(t._stereo) : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
                            }
                        }(Sound.prototype.init), Sound.prototype.reset = function(e) {
                            return function() {
                                var t = this,
                                    n = t._parent;
                                return t._orientation = n._orientation, t._stereo = n._stereo, t._pos = n._pos, t._pannerAttr = n._pannerAttr, t._stereo ? n.stereo(t._stereo) : t._pos ? n.pos(t._pos[0], t._pos[1], t._pos[2], t._id) : t._panner && (t._panner.disconnect(0), t._panner = void 0, n._refreshBuffer(t)), e.call(this)
                            }
                        }(Sound.prototype.reset);
                        var t = function(e, t) {
                            "spatial" === (t = t || "spatial") ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
                        }
                    }()
            }).call(this, n("yLpj"))
        },
        "I9/n": function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return w
            })), n.d(t, "e", (function() {
                return S
            })), n.d(t, "i", (function() {
                return N
            })), n.d(t, "j", (function() {
                return j
            })), n.d(t, "b", (function() {
                return D
            })), n.d(t, "d", (function() {
                return R
            }));
            n("JfAA"), n("vxnP"), n("5s+n");
            var a = n("xisi"),
                r = n("ghQg"),
                i = n("9WHe"),
                o = n("nrsj"),
                s = n("TX86"),
                A = n.n(s),
                c = n("i4/9");
            n.d(t, "c", (function() {
                return c.d
            })), n.d(t, "a", (function() {
                return c.b
            }));
            var l = n("lKDL"),
                u = n("/u/z"),
                d = n("CLQU"),
                m = n("bPHd"),
                p = n("Dt3B"),
                h = n("7ANe"),
                g = n("VGm7"),
                f = n("YDJX"),
                _ = n("jCse"),
                b = n("xNal"),
                v = n("T3U7");
            n.d(t, "g", (function() {
                return c.e
            })), n.d(t, "h", (function() {
                return c.k
            }));
            var E, I = "esc",
                y = .01,
                T = Object(f.createAction)(p.a.UPDATE_CONNECTION_STATUS);

            function C(e, t, n, a) {
                return i.a.configure({
                    payload: {
                        gameId: e
                    }
                }), n(Object(c.a)({
                    type: l.d.INVALID_GAME_ID
                })), new Promise(((s, A) => {
                    if (!e || e.toString().length !== p.b) return A(new r.a(Math.random().toString(), l.d.INVALID_GAME_ID, Object(o.a)("live_game.student.enter_code_view.errors.code_too_long"), e));
                    g.a.where({
                        gameCode: e,
                        isInProgress: !0
                    }).then((t => {
                        var p = t[0];
                        if (b.c.write("live_previous_game_instance", JSON.stringify(p), {
                                duration: .006944444444444444
                            }), !p) return A(new r.a(Math.random().toString(), l.d.INVALID_GAME_ID, Object(o.a)("live_game.student.errors.cannot_find_game"), e));
                        QWait("getSocketForGameInstance", (() => {
                            ! function(e, t, n, a) {
                                var {
                                    gameId: s,
                                    resolve: A,
                                    reject: p
                                } = a, g = Object(d.a)();
                                g && (Math.random() < y && i.a.warning("student SOCKET already exists", {
                                    store: n()
                                }), g.close()), g = Object(d.a)(Object(h.a)(e, n().get("playerToken"))), Object(m.a)(t), g.on("qping", ((e, t) => {
                                    t()
                                })), g.on("player-next-action", (() => {
                                    t(Object(c.f)())
                                })), g.on("current-game-state-and-set", (e => {
                                    t(Object(c.l)(e))
                                })), g.on("current-game-state", (e => {
                                    t(Object(c.l)(e))
                                })), g.on("current-team-state", (e => {
                                    t(Object(c.m)(e))
                                })), g.on("replay-game", (e => {
                                    t(Object(c.j)(e))
                                })), g.on("delete-game", (() => {
                                    window.location.reload()
                                })), g.on("reconnect_failed", (() => {
                                    Math.random() < y && i.a.warning("student SOCKET reconnect_failed")
                                })), g.on("error", (e => {
                                    g && (g.io.disconnect(), Math.random() < y && i.a.warning("student SOCKET error", {
                                        error: e
                                    }), p(new r.a(Math.random().toString(), l.d.UNKNOWN, Object(o.a)("live_game.student.errors.cannot_connect"))))
                                })), g.on("reconnecting", (t => {
                                    Object(v.default)("multiplayer_student_reconnect_attempt", {
                                        gameInstanceId: e.get("id"),
                                        reconnectionAttempts: t
                                    })
                                })), g.on("connect", (() => {
                                    t(T(l.b.CONNECTED)), A(e.toJSON())
                                })), g.on("disconnect", (a => {
                                    t(T(l.b.DISCONNECTED));
                                    var r = Object(u.d)(n());
                                    r !== l.e.ENDED && Object(v.default)("multiplayer_student_client_disconnect", {
                                        gameId: s,
                                        gameInstanceId: e.get("id"),
                                        gameStatus: r,
                                        reason: a
                                    })
                                })), g.on("game-error", (e => {
                                    t(Object(c.g)(e))
                                }))
                            }(p, n, a, {
                                gameId: e,
                                resolve: s,
                                reject: A
                            })
                        }))
                    })).catch((n => {
                        2 === t ? (i.a.warning("GET of QGameInstance on behalf of student failed all retries", {
                            error: n,
                            retryNo: t
                        }), A(new r.a(Math.random().toString(), l.d.UNKNOWN, Object(o.a)("live_game.student.errors.cannot_connect")))) : (i.a.warning("GET of QGameInstance on behalf of student failed", {
                            error: n,
                            retryNo: t
                        }), R(e, t + 1))
                    }))
                }))
            }
            Object(f.createAction)(p.a.DISMISS_NEXT_ACTION_MODAL), Object(f.createAction)(p.a.CLOSE_MODAL);
            var w = Object(f.createAction)(p.a.REMOVE_PLAYER_FROM_TEAM, (function() {
                    return Object(d.a)().emit("player-leave-team"), null
                })),
                O = Object(f.createAction)(p.a.JOIN_TEAM),
                S = e => t => {
                    t(Object(c.a)({
                        type: l.d.JOIN_TEAM
                    })), t(O(function(e) {
                        var {
                            teamCode: t
                        } = e;
                        return Object(d.a)().emit("player-join-team", {
                            teamCode: t
                        }), null
                    }(e)))
                },
                k = Object(f.createAction)(p.a.SUBMIT_PLAYER_INFORMATION),
                N = e => t => {
                    var n;
                    t(Object(c.a)({
                        type: l.d.DUPLICATE_PLAYER_NAME
                    })), t(Object(c.a)({
                        type: l.d.INVALID_PLAYER_NAME
                    })), t(k((n = e, Object(d.a)().emit("player-join", n), n)))
                },
                B = Object(f.createAction)(p.a.TOGGLE_AUDIO_URL),
                j = e => (t, n) => {
                    t(B(function(e, t, n) {
                        E || (E = new _.a), A.a.unbind(I);
                        var a = n().get("audioUrl"),
                            r = () => {
                                A.a.unbind(I), t(j(e))
                            };
                        return e === a ? (E.stopAll(), null) : (E.stopAll(), A()(I, r), E.play(e, {
                            onFinish: r
                        }), e)
                    }(e, t, n)))
                },
                x = Object(f.createAction)(p.a.SET_PREVIOUS_GAME_INSTANCE),
                D = e => t => {
                    var n, r;
                    (n = e, r = g.a.fromJson(n), new Promise((e => {
                        a.a.get(r.getServerBasePath() + "/" + r.get("gameCode")).end(((t, n) => {
                            t || !n.ok ? e(null) : e(r.toJSON())
                        }))
                    })).catch((e => {
                        i.a.warning("invalid checkPreviousGameInstanceStatus", e)
                    }))).then((e => t(x(e))))
                },
                L = Object(f.createAction)(p.a.JOIN_GAME),
                R = (e, t) => (n, a) => {
                    QWait("getSocketForGameInstance", (() => {
                        C(e, t || 0, n, a).then((e => {
                            var t = L(e);
                            (e => {
                                var t = window;
                                t.webkit && t.webkit.messageHandlers && t.webkit.messageHandlers.live && t.webkit.messageHandlers.live.postMessage(e), t.androidLive && t.androidLive.onJoinGame && t.androidLive.onJoinGame(e)
                            })(t), n(t)
                        })).catch((e => {
                            n(Object(c.c)(e))
                        }))
                    }))
                }
        },
        Kca2: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return _
            }));
            var a = n("pVnL"),
                r = n.n(a),
                i = n("baRz"),
                o = n("qqKc"),
                s = n("wtEi"),
                A = n("QImf"),
                c = n("jQ9C"),
                l = n("q1tI"),
                u = n.n(l),
                d = n("2h2r"),
                m = Object(i.styled)(d.a)({
                    name: "Card",
                    class: "cnnm8fr",
                    vars: {
                        "cnnm8fr-2": [e => e.isShowingLive ? "100%" : "" + Object(c.rem)(840)],
                        "cnnm8fr-3": [e => e.isShowingLive ? "" + Object(c.rem)(156) : "auto"]
                    }
                }),
                p = Object(i.styled)(s.c)({
                    name: "Title",
                    class: "t1pp8hw6"
                }),
                h = Object(i.styled)("p")({
                    name: "Subtitle",
                    class: "s10f7d6k"
                }),
                g = Object(i.styled)("div")({
                    name: "StatWrapper",
                    class: "s1nk1180"
                }),
                f = Object(i.styled)("div")({
                    name: "ButtonWrapper",
                    class: "b12ccik1",
                    vars: {
                        "b12ccik1-0": [e => e.isShowingButtons ? "" + A.b.Large : 0]
                    }
                });

            function _(e) {
                var {
                    isShowingLive: t = !1,
                    title: n,
                    subtitle: a,
                    stats: i,
                    primaryButtonProps: s,
                    secondaryButtonProps: A
                } = e, c = void 0 !== (null == s ? void 0 : s.text) || void 0 !== (null == A ? void 0 : A.text);
                return u.a.createElement(m, {
                    bottomBarShown: !1,
                    isMobileCard: !0,
                    isShowingLive: t
                }, u.a.createElement(p, null, n), u.a.createElement(h, null, a), u.a.createElement(g, null, i), u.a.createElement(f, {
                    isShowingButtons: c
                }, void 0 !== (null == A ? void 0 : A.text) ? u.a.createElement(o.d, r()({}, A, {
                    size: "large"
                })) : null, void 0 !== (null == s ? void 0 : s.text) ? u.a.createElement(o.b, r()({}, s, {
                    size: "large"
                })) : null))
            }
            n("m/qx")
        },
        KkDn: function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                var a = e.get(t);
                a || (a = [], e.set(t, a)), a.push(n)
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        LDH8: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        "LVm/": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("yXPU"),
                r = n.n(a),
                i = n("9WHe"),
                o = n("I9/n"),
                s = n("nrsj"),
                A = n("lKDL"),
                c = n("/u/z"),
                l = n("hQQp"),
                u = n("445u"),
                d = n("Ef4P"),
                m = n("s2Br"),
                p = n("ZHKH"),
                h = (n("zKZe"), n("Dt3B")),
                g = n("zu7w"),
                f = n("WExX"),
                _ = n("Wv2R"),
                b = Object.assign(h.a, Object(_.a)("ACTION_TYPES", {
                    SET_GRADED_ANSWER: null,
                    UPDATE_GAME_STATUS: null
                })),
                v = e => Object(f.action)(b.SET_GRADED_ANSWER, e),
                E = e => {
                    var {
                        value: t
                    } = e;
                    return function() {
                        var e = r()((function*(e) {
                            var n = void 0 === t || 0 === t,
                                a = Object(g.b)({
                                    isCorrect: n
                                });
                            e(v(a))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                I = e => t => {
                    t(v(null)), t((e => Object(f.action)(b.UPDATE_GAME_STATUS, e))(e))
                },
                y = n("GCXI"),
                T = n("uR6t"),
                C = e => e.get("isPlayingCheckpoint"),
                w = n("Vg22"),
                O = n("pn57"),
                S = n("peh1"),
                k = Object(S.createStructuredSelector)({
                    gradedAnswer: e => e.get("gradedAnswer"),
                    question: e => {
                        return void 0 === t && (t = !1), {
                            type: T.c.MULTIPLE_CHOICE_QUESTION,
                            prompt: {
                                attributes: [{
                                    type: T.b.TEXT_ATTRIBUTE,
                                    mediaType: y.J.TEXT,
                                    plainText: "Dolphin",
                                    languageCode: y.D.ENGLISH,
                                    richText: null
                                }, {
                                    type: T.b.AUDIO_ATTRIBUTE,
                                    mediaType: y.J.AUDIO,
                                    url: "/tts/en.mp3?v=14&b=RG9scGhpbg&s=Vd9YUNg4",
                                    slowUrl: "/tts/en.mp3?v=14&b=RG9scGhpbg&s=Vd9YUNg4&speed=70"
                                }]
                            },
                            options: [{
                                attributes: [{
                                    type: T.b.TEXT_ATTRIBUTE,
                                    mediaType: y.J.TEXT,
                                    plainText: t ? "dolphin - super long text - The basic abstractions of entities and components sometimes feel like they could apply to any software project. It's seamless to animate something, add physics, style in ways that would seem mind boggling in other environments I've worked in like Python or Javascript." : "dolphin",
                                    languageCode: y.D.ENGLISH,
                                    richText: null
                                }, {
                                    type: T.b.AUDIO_ATTRIBUTE,
                                    mediaType: y.J.AUDIO,
                                    url: "/tts/en.mp3?v=14&b=ZG9scGhpbiAtIHN1cGVyIGxvbmcgdGV4dCAtIFRoZSBiYXNpYyBhYnN0cmFjdGlvbnMgb2YgZW50aXRpZXMgYW5kIGNvbXBvbmVudHMgc29tZXRpbWVzIGZlZWwgbGlrZSB0aGV5IGNvdWxkIGFwcGx5IHRvIGFueSBzb2Z0d2FyZSBwcm9qZWN0LiBJdCdzIHNlYW1sZXNzIHRvIGFuaW1hdGUgc29tZXRoaW5nLCBhZGQgcGh5c2ljcywgc3R5bGUgaW4gd2F5cyB0aGF0IHdvdWxkIHNlZW0gbWluZCBib2dnbGluZyBpbiBvdGhlciBlbnZpcm9ubWVudHMgSSd2ZSB3b3JrZWQgaW4gbGlrZSBQeXRob24gb3IgSmF2YXNjcmlwdC4&s=yfDOFVSB",
                                    slowUrl: "/tts/en.mp3?v=14&b=ZG9scGhpbiAtIHN1cGVyIGxvbmcgdGV4dCAtIFRoZSBiYXNpYyBhYnN0cmFjdGlvbnMgb2YgZW50aXRpZXMgYW5kIGNvbXBvbmVudHMgc29tZXRpbWVzIGZlZWwgbGlrZSB0aGV5IGNvdWxkIGFwcGx5IHRvIGFueSBzb2Z0d2FyZSBwcm9qZWN0LiBJdCdzIHNlYW1sZXNzIHRvIGFuaW1hdGUgc29tZXRoaW5nLCBhZGQgcGh5c2ljcywgc3R5bGUgaW4gd2F5cyB0aGF0IHdvdWxkIHNlZW0gbWluZCBib2dnbGluZyBpbiBvdGhlciBlbnZpcm9ubWVudHMgSSd2ZSB3b3JrZWQgaW4gbGlrZSBQeXRob24gb3IgSmF2YXNjcmlwdC4&s=yfDOFVSB&speed=70"
                                }]
                            }, {
                                attributes: [{
                                    type: T.b.TEXT_ATTRIBUTE,
                                    mediaType: y.J.TEXT,
                                    plainText: t ? "cat bear - super long text - The basic abstractions of entities and components sometimes feel like they could apply to any software project. It's seamless to animate something, add physics, style in ways that would seem mind boggling in other environments I've worked in like Python or Javascript." : "cat",
                                    languageCode: y.D.ENGLISH,
                                    richText: null
                                }, {
                                    type: T.b.AUDIO_ATTRIBUTE,
                                    mediaType: y.J.AUDIO,
                                    url: "/tts/en.mp3?v=14&b=Y2F0IGJlYXIgLSBzdXBlciBsb25nIHRleHQgLSBUaGUgYmFzaWMgYWJzdHJhY3Rpb25zIG9mIGVudGl0aWVzIGFuZCBjb21wb25lbnRzIHNvbWV0aW1lcyBmZWVsIGxpa2UgdGhleSBjb3VsZCBhcHBseSB0byBhbnkgc29mdHdhcmUgcHJvamVjdC4gSXQncyBzZWFtbGVzcyB0byBhbmltYXRlIHNvbWV0aGluZywgYWRkIHBoeXNpY3MsIHN0eWxlIGluIHdheXMgdGhhdCB3b3VsZCBzZWVtIG1pbmQgYm9nZ2xpbmcgaW4gb3RoZXIgZW52aXJvbm1lbnRzIEkndmUgd29ya2VkIGluIGxpa2UgUHl0aG9uIG9yIEphdmFzY3JpcHQu&s=oouyOTK5",
                                    slowUrl: "/tts/en.mp3?v=14&b=Y2F0IGJlYXIgLSBzdXBlciBsb25nIHRleHQgLSBUaGUgYmFzaWMgYWJzdHJhY3Rpb25zIG9mIGVudGl0aWVzIGFuZCBjb21wb25lbnRzIHNvbWV0aW1lcyBmZWVsIGxpa2UgdGhleSBjb3VsZCBhcHBseSB0byBhbnkgc29mdHdhcmUgcHJvamVjdC4gSXQncyBzZWFtbGVzcyB0byBhbmltYXRlIHNvbWV0aGluZywgYWRkIHBoeXNpY3MsIHN0eWxlIGluIHdheXMgdGhhdCB3b3VsZCBzZWVtIG1pbmQgYm9nZ2xpbmcgaW4gb3RoZXIgZW52aXJvbm1lbnRzIEkndmUgd29ya2VkIGluIGxpa2UgUHl0aG9uIG9yIEphdmFzY3JpcHQu&s=oouyOTK5&speed=70"
                                }]
                            }, {
                                attributes: [{
                                    type: T.b.TEXT_ATTRIBUTE,
                                    mediaType: y.J.TEXT,
                                    plainText: t ? "bear - super long text - The basic abstractions of entities and components sometimes feel like they could apply to any software project. It's seamless to animate something, add physics, style in ways that would seem mind boggling in other environments I've worked in like Python or Javascript." : "bear",
                                    languageCode: y.D.ENGLISH,
                                    richText: null
                                }, {
                                    type: T.b.AUDIO_ATTRIBUTE,
                                    mediaType: y.J.AUDIO,
                                    url: "/tts/en.mp3?v=14&b=YmVhciAtIHN1cGVyIGxvbmcgdGV4dCAtIFRoZSBiYXNpYyBhYnN0cmFjdGlvbnMgb2YgZW50aXRpZXMgYW5kIGNvbXBvbmVudHMgc29tZXRpbWVzIGZlZWwgbGlrZSB0aGV5IGNvdWxkIGFwcGx5IHRvIGFueSBzb2Z0d2FyZSBwcm9qZWN0LiBJdCdzIHNlYW1sZXNzIHRvIGFuaW1hdGUgc29tZXRoaW5nLCBhZGQgcGh5c2ljcywgc3R5bGUgaW4gd2F5cyB0aGF0IHdvdWxkIHNlZW0gbWluZCBib2dnbGluZyBpbiBvdGhlciBlbnZpcm9ubWVudHMgSSd2ZSB3b3JrZWQgaW4gbGlrZSBQeXRob24gb3IgSmF2YXNjcmlwdC4&s=cnp3.4mW",
                                    slowUrl: "/tts/en.mp3?v=14&b=YmVhciAtIHN1cGVyIGxvbmcgdGV4dCAtIFRoZSBiYXNpYyBhYnN0cmFjdGlvbnMgb2YgZW50aXRpZXMgYW5kIGNvbXBvbmVudHMgc29tZXRpbWVzIGZlZWwgbGlrZSB0aGV5IGNvdWxkIGFwcGx5IHRvIGFueSBzb2Z0d2FyZSBwcm9qZWN0LiBJdCdzIHNlYW1sZXNzIHRvIGFuaW1hdGUgc29tZXRoaW5nLCBhZGQgcGh5c2ljcywgc3R5bGUgaW4gd2F5cyB0aGF0IHdvdWxkIHNlZW0gbWluZCBib2dnbGluZyBpbiBvdGhlciBlbnZpcm9ubWVudHMgSSd2ZSB3b3JrZWQgaW4gbGlrZSBQeXRob24gb3IgSmF2YXNjcmlwdC4&s=cnp3.4mW&speed=70"
                                }]
                            }, {
                                attributes: [{
                                    type: T.b.TEXT_ATTRIBUTE,
                                    mediaType: y.J.TEXT,
                                    plainText: t ? "dog - super long text - The basic abstractions of entities and components sometimes feel like they could apply to any software project. It's seamless to animate something, add physics, style in ways that would seem mind boggling in other environments I've worked in like Python or Javascript." : "dog",
                                    languageCode: y.D.ENGLISH,
                                    richText: null
                                }, {
                                    type: T.b.AUDIO_ATTRIBUTE,
                                    mediaType: y.J.AUDIO,
                                    url: "/tts/en.mp3?v=14&b=ZG9nIC0gc3VwZXIgbG9uZyB0ZXh0IC0gVGhlIGJhc2ljIGFic3RyYWN0aW9ucyBvZiBlbnRpdGllcyBhbmQgY29tcG9uZW50cyBzb21ldGltZXMgZmVlbCBsaWtlIHRoZXkgY291bGQgYXBwbHkgdG8gYW55IHNvZnR3YXJlIHByb2plY3QuIEl0J3Mgc2VhbWxlc3MgdG8gYW5pbWF0ZSBzb21ldGhpbmcsIGFkZCBwaHlzaWNzLCBzdHlsZSBpbiB3YXlzIHRoYXQgd291bGQgc2VlbSBtaW5kIGJvZ2dsaW5nIGluIG90aGVyIGVudmlyb25tZW50cyBJJ3ZlIHdvcmtlZCBpbiBsaWtlIFB5dGhvbiBvciBKYXZhc2NyaXB0Lg&s=7o8SeoQe",
                                    slowUrl: "/tts/en.mp3?v=14&b=ZG9nIC0gc3VwZXIgbG9uZyB0ZXh0IC0gVGhlIGJhc2ljIGFic3RyYWN0aW9ucyBvZiBlbnRpdGllcyBhbmQgY29tcG9uZW50cyBzb21ldGltZXMgZmVlbCBsaWtlIHRoZXkgY291bGQgYXBwbHkgdG8gYW55IHNvZnR3YXJlIHByb2plY3QuIEl0J3Mgc2VhbWxlc3MgdG8gYW5pbWF0ZSBzb21ldGhpbmcsIGFkZCBwaHlzaWNzLCBzdHlsZSBpbiB3YXlzIHRoYXQgd291bGQgc2VlbSBtaW5kIGJvZ2dsaW5nIGluIG90aGVyIGVudmlyb25tZW50cyBJJ3ZlIHdvcmtlZCBpbiBsaWtlIFB5dGhvbiBvciBKYXZhc2NyaXB0Lg&s=7o8SeoQe&speed=70"
                                }]
                            }],
                            metadata: {
                                studiableItemId: 18309858672,
                                promptSide: y.Mb.WORD,
                                answerSide: y.Mb.DEFINITION
                            }
                        };
                        var t
                    },
                    setTitle: p.f,
                    studyablePath: u.h
                }),
                N = Object(w.connect)(k, (e => ({
                    actions: Object(O.bindActionCreators)({
                        answerMultipleChoice: E,
                        updateGameStatus: I
                    }, e)
                })), null, {
                    context: d.a
                })(m.a),
                B = n("baRz"),
                j = n("QImf"),
                x = n("mmuN"),
                D = n("uyLA"),
                L = n("VW3V"),
                R = n("Dmq4"),
                M = n("q1tI"),
                G = n.n(M),
                P = n("Kca2"),
                V = n("fdo3"),
                F = Object(B.styled)("div")({
                    name: "FlexWrapper",
                    class: "f1waqmk8"
                }),
                Q = (j.b.Large, Object(B.styled)("section")({
                    name: "ScoreIcon",
                    class: "s4ev7j5"
                })),
                W = Object(B.styled)("section")({
                    name: "TimeIcon1",
                    class: "t1lr3qfm"
                });
            n("reil");
            var Z = Object(w.connect)(null, null, null, {
                    context: d.a
                })((function() {
                    var {
                        t: e
                    } = Object(D.a)(), t = [G.a.createElement(x.a, {
                        icon: G.a.createElement(Q, null),
                        key: "score",
                        title: e("checkpoint.summary.student.stats.score"),
                        value: "80%"
                    }), G.a.createElement(x.a, {
                        icon: G.a.createElement(W, null),
                        key: "results",
                        title: e("checkpoint.summary.student.stats.results"),
                        value: "8/10"
                    })];
                    return G.a.createElement("div", null, G.a.createElement(R.a, {
                        activityType: L.a.CHECKPOINT,
                        onClickExitButton: () => {
                            Object(V.a)("/latest")
                        },
                        shouldShowOptions: !1
                    }), G.a.createElement(F, null, G.a.createElement(P.a, {
                        stats: t,
                        subtitle: e("checkpoint.summary.student.subtitle"),
                        title: e("checkpoint.summary.student.title")
                    })))
                })),
                U = (n("4mDm"), n("3bBZ"), n("k54H")),
                H = n("5Hwc"),
                Y = n("wrmd"),
                q = n("hibm"),
                X = n("Y7o6"),
                z = n("wtEi"),
                J = n("t1Ez"),
                K = Object(B.styled)("div")({
                    name: "StudentWaitingViewWrapper",
                    class: "s4zejrc"
                }),
                $ = Object(B.styled)(z.a)({
                    name: "Title",
                    class: "t1p34efv"
                });

            function ee() {
                return G.a.createElement(K, null, G.a.createElement($, null, G.a.createElement(J.a, {
                    id: "checkpoint.student.lobby_wait"
                })))
            }
            n("sCw2");
            var te = n("G87+"),
                ne = n("A8mX"),
                ae = n("Pxp3"),
                re = n("bvRJ");

            function ie(e) {
                var {
                    gameCode: t,
                    handleEnterCode: n
                } = e;
                return Object(M.useEffect)((() => {
                    n(t)
                }), []), G.a.createElement(ae.a, {
                    className: "QrCodeLoadingView"
                }, G.a.createElement("div", {
                    className: "QrCodeLoadingView-container"
                }, G.a.createElement(re.a, {
                    icon: "qrcode-scan"
                }), G.a.createElement(ae.a, {
                    className: "QrCodeLoadingView-header"
                }, G.a.createElement(J.a, {
                    id: "live_game.student.qr_code_view.title"
                }))))
            }
            var oe = n("nqhS"),
                se = n("JxFz"),
                Ae = n("KHqc"),
                ce = n("mBhD");
            class le extends G.a.Component {
                constructor() {
                    super(...arguments), this.state = {
                        gameCode: this.getTrueInitialGameCode(),
                        isInvalidCharacter: !1,
                        isSubmitted: !1
                    }, this.handleEnterCode = e => {
                        e && e.preventDefault(), this.props.onEnterCode(this.state.gameCode), this.setState({
                            isSubmitted: !0
                        })
                    }, this.handleGameCodeChange = (e, t) => {
                        this.setState({
                            gameCode: e,
                            isInvalidCharacter: t,
                            isSubmitted: !1
                        })
                    }, this.handleSubmitCode = e => {
                        this.isGameCodeLongEnough() && this.handleEnterCode(e)
                    }
                }
                static getDerivedStateFromProps() {
                    return {
                        isSubmitted: !1
                    }
                }
                getInvalidGameCodeError() {
                    return this.props.errors.find((e => e.type === A.d.INVALID_GAME_ID))
                }
                getErrorMessage() {
                    var e, t;
                    return this.isInvalidGameCode() || this.isCodeLengthError() ? t = this.getInvalidGameCodeError() : this.getUnknownError() ? t = this.getUnknownError() : this.state.isInvalidCharacter && (t = Object(s.a)("live_game.student.enter_code_view.errors.invalid_character")), (null == (e = t) ? void 0 : e.message) || void 0
                }
                getTrueInitialGameCode() {
                    return this.props.initialGameCode && this.props.initialGameCode.length === h.b ? this.props.initialGameCode : this.props.gameCode
                }
                getUnknownError() {
                    return this.props.errors.find((e => e.type === A.d.UNKNOWN))
                }
                renderRejoinLink() {
                    var {
                        previousGameInstance: e,
                        onEnterCode: t
                    } = this.props;
                    if (e) {
                        var n = e.get("gameCode");
                        return G.a.createElement(Ae.a, {
                            "aria-label": Object(s.a)("live_game.student.enter_code_view.rejoin_game_button"),
                            onClick: t.bind(null, n)
                        }, G.a.createElement(J.a, {
                            id: "live_game.student.enter_code_view.rejoin_game_button"
                        }))
                    }
                }
                render() {
                    var {
                        gameCode: e
                    } = this.state, t = this.getErrorMessage();
                    return G.a.createElement("form", {
                        className: "EnterGameCode-form",
                        onSubmit: this.handleSubmitCode
                    }, G.a.createElement(ae.a, {
                        className: "EnterGameCode-header"
                    }, G.a.createElement(J.a, {
                        id: "live_game.student.enter_code_view.instructions_new"
                    })), G.a.createElement(ce.a, {
                        errorMessage: t,
                        initialValue: e,
                        onChange: this.handleGameCodeChange,
                        onSubmit: this.handleEnterCode,
                        readOnly: !1
                    }), G.a.createElement(ae.a, {
                        className: "EnterGameCode-button"
                    }, G.a.createElement(se.a, {
                        "aria-label": Object(s.a)("live_game.student.enter_code_view.join_button"),
                        disabled: !(this.isGameCodeLongEnough() && !this.isInvalidGameCode() && !this.state.isSubmitted),
                        hero: !0,
                        type: "submit"
                    }, G.a.createElement(J.a, {
                        id: "live_game.student.enter_code_view.join_button"
                    }))), this.props.previousGameInstance ? G.a.createElement(ae.a, null, this.renderRejoinLink()) : null)
                }
                isCodeLengthError() {
                    var e = this.getInvalidGameCodeError();
                    return (null == e ? void 0 : e.gameId) && e.gameId.length !== h.b
                }
                isGameCodeLongEnough() {
                    var {
                        gameCode: e
                    } = this.state;
                    return parseInt(e, 10) >= 1e5 && parseInt(e, 10) < 1e6
                }
                isInvalidGameCode() {
                    var e = this.getInvalidGameCodeError();
                    return !!e && e.gameId === this.state.gameCode
                }
            }
            var ue = n("vlgG"),
                de = n("KD7m");
            class me extends G.a.Component {
                constructor() {
                    super(...arguments), this.state = {
                        username: this.props.initialUsername || "",
                        lastInitial: ""
                    }, this.handleInitialChange = e => {
                        this.setState({
                            lastInitial: e.currentTarget.value
                        })
                    }, this.handleNameChange = e => {
                        this.setState({
                            username: e.currentTarget.value
                        })
                    }, this.handleEnterName = e => {
                        if (e.preventDefault(), this.isNameLongEnough()) {
                            var t = this.state.username + " " + this.state.lastInitial;
                            this.props.onEnterName(Object(de.a)(t))
                        }
                    }
                }
                getInvalidNameErrorMessage() {
                    var e = this.invalidNameError();
                    if (!e) return null;
                    switch (e.type) {
                        case A.d.INVALID_PLAYER_NAME_PROFANE:
                            return Object(s.a)("live_game.student.enter_name_view.errors.invalid_player_name__profane");
                        case A.d.INVALID_PLAYER_NAME_TOO_SHORT:
                            return Object(s.a)("live_game.student.enter_name_view.errors.invalid_player_name__too_short");
                        case A.d.INVALID_PLAYER_NAME_TOO_LONG:
                            return Object(s.a)("live_game.student.enter_name_view.errors.invalid_player_name__too_long");
                        case A.d.INVALID_PLAYER_NAME_UNKNOWN:
                        default:
                            return Object(s.a)("live_game.student.enter_name_view.errors.invalid_player_name__unknown")
                    }
                }
                renderHeadlineText() {
                    return this.shouldRenderSurnameInitialScreen() ? G.a.createElement(J.a, {
                        id: "live_game.student.enter_name_view.ask_for_surname_initial"
                    }) : G.a.createElement(J.a, {
                        id: "live_game.student.enter_name_view.ask_for_name"
                    })
                }
                renderInput() {
                    if (this.shouldRenderSurnameInitialScreen()) return G.a.createElement(ae.a, {
                        className: "EnterPlayerName-input EnterPlayerName-input--oneCharacter"
                    }, G.a.createElement(ue.a, {
                        autoFocus: !0,
                        label: Object(s.a)("live_game.student.enter_name_view.last_initial_label"),
                        maxLength: 1,
                        onChange: this.handleInitialChange,
                        value: this.state.lastInitial
                    }));
                    var e = Object(s.a)("live_game.student.enter_name_view.first_name_label");
                    return G.a.createElement(ue.a, {
                        autoFocus: !0,
                        invalid: !!this.invalidNameError() || void 0,
                        label: this.invalidNameError() ? this.getInvalidNameErrorMessage() : e,
                        maxLength: 25,
                        onChange: this.handleNameChange,
                        value: this.state.username
                    })
                }
                render() {
                    return G.a.createElement("form", {
                        className: "EnterPlayerName-form",
                        onSubmit: this.handleEnterName
                    }, G.a.createElement(ae.a, {
                        className: "EnterPlayerName-header"
                    }, this.renderHeadlineText()), G.a.createElement(ae.a, {
                        className: "EnterPlayerName-input"
                    }, this.renderInput()), G.a.createElement(ae.a, {
                        className: "EnterPlayerName-button"
                    }, G.a.createElement(se.a, {
                        "aria-label": Object(s.a)("live_game.student.enter_name_view.next_button_new"),
                        disabled: !this.isNameLongEnough(),
                        hero: !0,
                        type: "submit"
                    }, G.a.createElement(J.a, {
                        id: "live_game.student.enter_name_view.next_button_new"
                    }))))
                }
                duplicateNameError() {
                    return this.props.errors.find((e => e.type === A.d.DUPLICATE_PLAYER_NAME))
                }
                invalidNameError() {
                    return this.props.errors.find((e => 0 === e.type.indexOf(A.d.INVALID_PLAYER_NAME)))
                }
                isNameLongEnough() {
                    return this.shouldRenderSurnameInitialScreen() ? Object(de.a)(this.state.lastInitial).length > 0 : Object(de.a)(this.state.username).length > 0
                }
                shouldRenderSurnameInitialScreen() {
                    return this.duplicateNameError() || this.state.lastInitial.length > 0
                }
            }
            var pe = me;

            function he(e) {
                var {
                    gameCode: t
                } = e;
                return G.a.createElement(ae.a, {
                    className: "GameCode"
                }, G.a.createElement(ae.a, {
                    className: "GameCode-header"
                }, G.a.createElement(J.a, {
                    id: "live_game.student.readonly_code_view.header"
                })), G.a.createElement(ae.a, {
                    className: "GameCode-inputCode"
                }, G.a.createElement(ce.a, {
                    initialValue: t,
                    readOnly: !0
                })))
            }
            var ge = n("DAve"),
                fe = n("EFuM");
            class _e extends G.a.PureComponent {
                constructor() {
                    super(...arguments), this.getBranchLongLink = () => ge.a.linkWithData("https://quizlet.app.link/live-banner-for-student", {
                        $canonical_url: "https://quizlet.com/live"
                    })
                }
                renderIosButton() {
                    return G.a.createElement("a", {
                        className: "StudentDownloadAppBanner-appLink",
                        href: this.getBranchLongLink(),
                        target: "branch"
                    }, G.a.createElement(re.a, {
                        className: "StudentDownloadAppBanner-icon",
                        icon: "apple",
                        size: "large"
                    }))
                }
                renderAndroidButton() {
                    return G.a.createElement("a", {
                        className: "StudentDownloadAppBanner-appLink",
                        href: this.getBranchLongLink(),
                        target: "branch"
                    }, G.a.createElement(re.a, {
                        className: "StudentDownloadAppBanner-icon",
                        icon: "android",
                        size: "large"
                    }))
                }
                render() {
                    var e = null;
                    return Object(fe.f)() ? e = this.renderIosButton() : Object(fe.b)() && (e = this.renderAndroidButton()), G.a.createElement(ae.a, {
                        className: "StudentDownloadAppBanner"
                    }, G.a.createElement(ae.a, {
                        className: "StudentDownloadAppBanner-title"
                    }, G.a.createElement(J.a, {
                        id: "live_game.student.download_app.title_new"
                    })), G.a.createElement(ae.a, {
                        className: "StudentDownloadAppBanner-link"
                    }, e))
                }
            }
            class be extends M.PureComponent {
                render() {
                    var {
                        gameCode: e
                    } = this.props;
                    return G.a.createElement("div", {
                        className: "StudentEnterInfoView"
                    }, void 0 === e ? G.a.createElement(le, this.props) : G.a.createElement(he, {
                        gameCode: e
                    }), e ? G.a.createElement(pe, this.props) : null, this.props.shouldShowDownloadAppBanner ? G.a.createElement(_e, null) : null)
                }
            }
            n("rB9j"), n("UxlC");

            function ve(e) {
                var {
                    errors: t,
                    onEnterTeamCode: n
                } = e, [a, r] = Object(M.useState)(""), i = () => t.find((e => 0 === e.type.indexOf(A.d.JOIN_TEAM)));
                return G.a.createElement("div", {
                    className: "StudentEnterTeamCodeView"
                }, G.a.createElement("div", {
                    className: "StudentEnterTeamCodeView-container"
                }, G.a.createElement("form", {
                    className: "StudentEnterTeamCodeView-form",
                    onSubmit: e => {
                        e.preventDefault(), a && n({
                            teamCode: a
                        })
                    }
                }, G.a.createElement(ae.a, {
                    className: "StudentEnterTeamCodeView-heading"
                }, G.a.createElement(J.a, {
                    id: "live_game.student.enter_team_code_view.headline"
                })), G.a.createElement(ae.a, {
                    className: "StudentEnterTeamCodeView-input"
                }, G.a.createElement(ue.a, {
                    autoFocus: !0,
                    invalid: !!i() || void 0,
                    label: i() ? (() => {
                        var e = i();
                        if (!e) return null;
                        switch (e.type) {
                            case A.d.JOIN_TEAM_ALREADY_ON_TEAM:
                                return Object(s.a)("live_game.student.enter_team_code_view.errors.join_team__already_on_team");
                            case A.d.JOIN_TEAM_DOES_NOT_EXIST:
                                return Object(s.a)("live_game.student.enter_team_code_view.errors.join_team__does_not_exist");
                            case A.d.JOIN_TEAM_FULL:
                                return Object(s.a)("live_game.student.enter_team_code_view.errors.join_team__full");
                            default:
                                return Object(s.a)("live_game.student.enter_team_code_view.errors.join_team__unknown")
                        }
                    })() : null,
                    onChange: e => {
                        var t = e.currentTarget.value.substring(0, 2);
                        t = Object(de.a)(t).replace(/[^\d]/g, ""), r(t)
                    },
                    placeholder: Object(s.a)("live_game.student.enter_team_code_view.input_placeholder"),
                    type: "tel",
                    value: a
                })), G.a.createElement(ae.a, {
                    className: "StudentEnterTeamCodeView-cta"
                }, G.a.createElement(se.a, {
                    "aria-label": Object(s.a)("live_game.student.enter_team_code_view.next_button"),
                    disabled: !a.length,
                    hero: !0,
                    type: "submit"
                }, G.a.createElement(J.a, {
                    id: "live_game.student.enter_team_code_view.next_button"
                }))))))
            }
            var Ee = n("/LOw"),
                Ie = n("gP5R"),
                ye = n("znmY"),
                Te = n("TSYQ"),
                Ce = n.n(Te),
                we = n("FFEN"),
                Oe = n("vjeg");

            function Se(e) {
                var {
                    onLeaveTeam: t
                } = e;
                return t ? G.a.createElement("div", {
                    className: "StudentTeamView-leaveTeamButton"
                }, G.a.createElement(se.a, {
                    "aria-label": Object(s.a)("live_game.student.team_view.leave_team_button"),
                    onClick: t
                }, G.a.createElement(J.a, {
                    id: "live_game.student.team_view.leave_team_button"
                }))) : null
            }

            function ke(e) {
                var {
                    areTeamsPicked: t,
                    gameType: n
                } = e;
                return n === y.E.INDIVIDUAL_COMPETITION ? G.a.createElement(we.a, {
                    size: 3
                }, G.a.createElement(J.a, {
                    id: "live_game.student.team_view.individual_competition_instructions"
                })) : G.a.createElement("div", null, t ? G.a.createElement(J.a, {
                    id: "live_game.student.team_view.picked_teams_instructions"
                }) : G.a.createElement(J.a, {
                    id: "live_game.student.team_view.assigned_team_new_instructions"
                }))
            }

            function Ne(e) {
                var {
                    mascotLang: t,
                    onLeaveTeam: n,
                    team: a,
                    teamMembers: r
                } = e, i = Ce()("StudentTeamView-mascotImg", "u-" + a.mascotCode + "CircleBackground");
                return G.a.createElement("div", {
                    className: "StudentTeamView-teamInner"
                }, G.a.createElement("div", {
                    className: "StudentTeamView-mascot"
                }, G.a.createElement("div", {
                    className: i
                })), G.a.createElement("div", {
                    className: "StudentTeamView-teamName"
                }, G.a.createElement(we.a, {
                    size: 2
                }, Object(Oe.a)(a.mascotCode, t))), G.a.createElement("ul", {
                    className: "StudentTeamView-teamMembers"
                }, r.map((e => G.a.createElement("li", {
                    key: e.id
                }, e.username)))), G.a.createElement(Se, {
                    onLeaveTeam: n
                }))
            }

            function Be(e) {
                var {
                    gameType: t
                } = e;
                return t === y.E.INDIVIDUAL_COMPETITION ? null : G.a.createElement(we.a, {
                    size: 1
                }, G.a.createElement(J.a, {
                    id: "live_game.student.team_view.assigned_team_title"
                }))
            }
            var je = Object(S.createStructuredSelector)({
                    gameType: c.f,
                    logStudyEvent: ye.b,
                    creatorId: H.c
                }),
                xe = Object(O.compose)(Object(w.connect)(je), Object(Ie.a)(y.Wb.GAME_LOBBY))((function(e) {
                    var {
                        areTeamsPicked: t,
                        gameType: n,
                        mascotLang: a,
                        onLeaveTeam: r,
                        team: i,
                        teamMembers: o
                    } = e;
                    return G.a.createElement("div", {
                        className: "StudentTeamView",
                        style: {
                            backgroundColor: i.color
                        }
                    }, G.a.createElement("div", {
                        className: "StudentTeamView-title"
                    }, G.a.createElement(Be, {
                        gameType: n
                    }), G.a.createElement(ke, {
                        areTeamsPicked: t,
                        gameType: n
                    })), G.a.createElement("div", {
                        className: "StudentTeamView-team"
                    }, G.a.createElement(Ne, {
                        mascotLang: a,
                        onLeaveTeam: r,
                        team: i,
                        teamMembers: o
                    })))
                })),
                De = n("sK90");

            function Le(e) {
                var {
                    gameType: t
                } = e;
                return G.a.createElement(G.a.Fragment, null, G.a.createElement("div", null, t === y.E.INDIVIDUAL_COMPETITION ? G.a.createElement(J.a, {
                    id: "live_game.student.individuals_instructions_view.everyone_has_same_question"
                }) : G.a.createElement(J.a, {
                    id: "live_game.student.individuals_instructions_view.first_one_to_finish_wins"
                })), G.a.createElement("div", null, t === y.E.INDIVIDUAL_COMPETITION ? G.a.createElement(J.a, {
                    id: "live_game.student.individuals_instructions_view.first_one_to_finish_wins"
                }) : G.a.createElement(J.a, {
                    id: "live_game.student.instructions_view.only_one_right_match"
                })))
            }
            var Re = Object(S.createStructuredSelector)({
                    creatorId: H.c,
                    logStudyEvent: ye.b
                }),
                Me = Object(O.compose)(Object(w.connect)(Re), Object(Ie.a)(y.Wb.ONBOARDING))((function(e) {
                    var {
                        gameType: t,
                        set: n,
                        terms: a,
                        shouldShowDownloadAppBanner: r
                    } = e;
                    return G.a.createElement(ae.a, {
                        className: "StudyWhileWaitingView"
                    }, G.a.createElement(ae.a, {
                        className: "StudyWhileWaitingView-instructions"
                    }, G.a.createElement(Le, {
                        gameType: t
                    })), n && a ? G.a.createElement(G.a.Fragment, null, G.a.createElement(ae.a, {
                        className: "StudyWhileWaitingView-title"
                    }, G.a.createElement(J.a, {
                        id: "live_game.student.study_while_waiting_view.header"
                    })), G.a.createElement(ae.a, {
                        className: "StudyWhileWaitingView-card"
                    }, G.a.createElement(De.a, {
                        definitionLanguage: n.get("defLang"),
                        previewDiagramImage: null,
                        previewDiagramShapes: null,
                        previewTerms: a.toJS(),
                        shouldHideEndCard: !0,
                        supportClickToZoom: !1,
                        termsCount: a.count(),
                        wordLanguage: n.get("wordLang")
                    }))) : null, r ? G.a.createElement(_e, null) : null)
                }));
            class Ge extends M.PureComponent {
                constructor() {
                    super(...arguments), this.state = {
                        username: ""
                    }, this.getParsedTeamMembers = () => {
                        var e = this.props.teamMembers.toJS();
                        return Object.keys(e).map((t => e[t]))
                    }, this.getPageHeader = () => {
                        var {
                            isNativeApp: e,
                            isPlayingCheckpoint: t
                        } = this.props;
                        if (e) return null;
                        var n = t ? L.a.CHECKPOINT : null;
                        return G.a.createElement(R.a, {
                            activityType: n,
                            shouldShowOptions: !1
                        })
                    }, this.handleNameSubmission = e => {
                        this.setState({
                            username: e
                        }), this.props.actions.submitInformation({
                            username: e,
                            image: this.props.playerImage
                        })
                    }
                }
                renderView() {
                    return this.shouldRenderPausedGameView() ? this.renderPausedGameView() : this.shouldRenderTeamView() ? this.renderTeamView() : this.shouldRenderEnterTeamCodeView() ? this.renderEnterTeamCodeView() : this.shouldRenderStudyWhileYouWaitView() ? this.renderStudyWhileYouWaitView() : this.shouldRenderBlockerView() ? this.renderBlockerView() : this.shouldRenderQrCodeLoadingView() ? this.renderQrCodeLoadingView() : this.renderEnterInfoView()
                }
                renderBlockerView() {
                    return G.a.createElement(oe.a, null)
                }
                renderQrCodeLoadingView() {
                    return this.props.initialGameCode ? G.a.createElement(Ee.a, {
                        header: this.getPageHeader()
                    }, G.a.createElement(ie, {
                        gameCode: this.props.initialGameCode,
                        handleEnterCode: this.props.actions.enterCode
                    })) : null
                }
                renderStudyWhileYouWaitView() {
                    return G.a.createElement(Ee.a, {
                        header: this.getPageHeader()
                    }, G.a.createElement(Me, {
                        gameType: this.props.gameType,
                        set: this.props.set,
                        shouldShowDownloadAppBanner: this.props.shouldShowDownloadAppBanner,
                        terms: this.props.terms
                    }))
                }
                renderEnterTeamCodeView() {
                    return G.a.createElement(Ee.a, {
                        header: this.getPageHeader()
                    }, G.a.createElement(ve, {
                        errors: this.props.errors,
                        onEnterTeamCode: this.props.actions.enterTeamCode
                    }))
                }
                renderTeamView() {
                    var e = this.props.gameStatuses.last() === A.e.PICK_TEAMS;
                    return G.a.createElement(Ee.a, {
                        header: this.getPageHeader()
                    }, this.props.isPlayingCheckpoint ? G.a.createElement(ee, null) : G.a.createElement(xe, {
                        areTeamsPicked: e,
                        mascotLang: this.props.mascotLang,
                        onLeaveTeam: e ? this.props.actions.leaveTeam : null,
                        team: this.props.team.toJS(),
                        teamMembers: this.getParsedTeamMembers()
                    }))
                }
                renderPausedGameView() {
                    return G.a.createElement(ne.a, this.props)
                }
                renderEnterInfoView() {
                    return G.a.createElement(Ee.a, {
                        header: this.getPageHeader()
                    }, G.a.createElement(be, {
                        errors: this.props.errors,
                        gameCode: this.props.gameCode,
                        hideHeader: !0,
                        initialGameCode: this.props.initialGameCode,
                        initialUsername: this.props.displayName,
                        onEnterCode: this.props.actions.enterCode,
                        onEnterName: this.handleNameSubmission,
                        previousGameInstance: this.props.previousGameInstance,
                        shouldShowDownloadAppBanner: this.props.shouldShowDownloadAppBanner
                    }))
                }
                render() {
                    return G.a.createElement(G.a.Fragment, null, this.renderView(), this.shouldRenderMobileLandscapeBlocker() ? G.a.createElement(te.a, {
                        isPlaying: !1
                    }) : null)
                }
                shouldRenderTeamView(e) {
                    return void 0 === e && (e = this.props), e.isPlayingCheckpoint && "" !== this.state.username ? e.gameStatus === A.e.LOBBY : !!e.team && (e.gameStatus === A.e.READY || e.gameStatus === A.e.PICK_TEAMS)
                }
                shouldRenderEnterTeamCodeView(e) {
                    return void 0 === e && (e = this.props), e.player && e.player.has("username") && e.gameStatus === A.e.PICK_TEAMS
                }
                shouldRenderStudyWhileYouWaitView(e) {
                    return void 0 === e && (e = this.props), !e.isPlayingCheckpoint && e.player && e.player.has("username")
                }
                shouldRenderBlockerView(e) {
                    return void 0 === e && (e = this.props), e.gameStatus !== A.e.LOBBY && e.gameInstance && e.set
                }
                shouldRenderQrCodeLoadingView(e) {
                    return void 0 === e && (e = this.props), !e.gameStatus && !!e.initialGameCode && !this.props.hasJoinEverFailed
                }
                shouldRenderPausedGameView() {
                    return this.shouldRenderStudyWhileYouWaitView() && !this.props.isConnected
                }
                shouldRenderMobileLandscapeBlocker() {
                    return this.shouldRenderTeamView() || this.shouldRenderPausedGameView() || this.shouldRenderStudyWhileYouWaitView()
                }
            }
            var Pe = Object(S.createStructuredSelector)({
                    displayName: l.c,
                    errors: U.a,
                    gameCode: c.a,
                    gameInstance: H.a,
                    gameState: c.c,
                    gameStatus: c.d,
                    gameStatuses: c.e,
                    gameType: c.f,
                    hasJoinEverFailed: e => 0 !== e.get("errors").filter((e => e.type === A.d.INVALID_GAME_ID)).size,
                    initialGameCode: c.g,
                    isConnected: q.a,
                    isNativeApp: u.e,
                    isPlayingCheckpoint: C,
                    mascotLang: c.i,
                    player: l.b,
                    playerId: l.d,
                    playerImage: l.e,
                    previousGameInstance: H.b,
                    set: p.d,
                    shouldShowDownloadAppBanner: u.g,
                    studentUrl: X.a,
                    team: Y.e,
                    teamMembers: Y.f,
                    terms: p.h
                }),
                Ve = Object(w.connect)(Pe, (e => ({
                    actions: Object(O.bindActionCreators)({
                        enterCode: o.d,
                        submitInformation: o.i,
                        enterTeamCode: o.e,
                        leaveTeam: o.f
                    }, e)
                })))(Ge),
                Fe = (n("5s+n"), n("mr8R")),
                Qe = Object(Fe.default)((() => Promise.all([n.e("react"), n.e("immutable"), n.e("leaflet"), n.e("common"), n.e("live_game_new_student_lazy")]).then(n.bind(null, "yhWn")))),
                We = Object(Fe.default)((() => Promise.all([n.e("react"), n.e("immutable"), n.e("leaflet"), n.e("common"), n.e("live_game_new_student_lazy")]).then(n.bind(null, "wo0u")))),
                Ze = n("qvSQ"),
                Ue = n.n(Ze),
                He = n("aNXt"),
                Ye = new Ue.a;
            class qe extends M.PureComponent {
                constructor(e) {
                    super(e), this.noSleep = null, Object(He.a)((() => this.props.gameStatus && this.props.player && this.props.gameStatus !== A.e.ENDED ? Object(s.a)("live_game.leaving_page_while_in_game_warning") : void 0))
                }
                componentDidMount() {
                    We.preload(), this.props.isNativeApp || document.addEventListener("click", (function e() {
                        document.removeEventListener("click", e, !1), Ye.enable()
                    }), !1)
                }
                componentWillUnmount() {
                    this.props.isNativeApp || Ye.disable()
                }
                renderJoiningContainer() {
                    return G.a.createElement(Ve, {
                        key: "joining"
                    })
                }
                renderPlayingContainer() {
                    return this.props.isPlayingCheckpoint ? G.a.createElement(N, {
                        isTeacher: !1,
                        key: "playing"
                    }) : G.a.createElement(We, {
                        key: "playing"
                    })
                }
                renderEndedContainer() {
                    return this.props.isPlayingCheckpoint ? G.a.createElement(Z, {
                        key: "ending"
                    }) : G.a.createElement(Qe, {
                        key: "ending"
                    })
                }
                renderContainer() {
                    switch (this.props.gameStatus) {
                        case A.e.ENDED:
                            return this.renderEndedContainer();
                        case A.e.PLAYING:
                            return this.renderPlayingContainer();
                        default:
                            return this.renderJoiningContainer()
                    }
                }
                render() {
                    return this.renderContainer()
                }
            }
            var Xe = Object(S.createStructuredSelector)({
                    gameStatus: c.d,
                    gameType: c.f,
                    isNativeApp: u.e,
                    isPlayingCheckpoint: C,
                    player: l.b
                }),
                ze = Object(w.connect)(Xe)(qe),
                Je = (n("JTJg"), {
                    [h.a.CLOSE_MODAL]: e => {
                        var {
                            payload: t
                        } = e;
                        if ("end-game" === t) return "multiplayer_student_results_view"
                    },
                    [h.a.JOIN_GAME]: "multiplayer_student_enter_pin",
                    [h.a.REMOVE_PLAYER_FROM_TEAM]: "multiplayer_student_leave_team",
                    [h.a.SUBMIT_PLAYER_INFORMATION]: "multiplayer_student_enter_name",
                    [h.a.UPDATE_GAME_STATE]: (e, t, n) => Object(Y.d)(n).map((e => e.get("id"))).includes(Object(l.d)(n)) && Object(Y.d)(t).count() < Object(Y.d)(n).count() ? {
                        name: "multiplayer_student_teammate_disconnected_is_self",
                        payload: {
                            connectionStatuses: n.get("connectionStatuses").toJS(),
                            gameState: Object(c.c)(n).toJS(),
                            playerId: Object(l.d)(n)
                        }
                    } : Object(c.d)(n) === A.e.PLAYING && Object(Y.d)(t).count() < Object(Y.d)(n).count() ? "multiplayer_student_teammate_disconnected" : Object(c.d)(t) === A.e.PLAYING && Object(c.d)(n) === A.e.ENDED ? "multiplayer_student_end_game" : Object(c.d)(n) === A.e.READY ? Object(c.f)(n) === y.E.INDIVIDUAL_COMPETITION ? "multiplayer_student_playing_individually" : "multiplayer_student_on_team" : void 0
                }),
                Ke = n("ou0K"),
                $e = n("zew0"),
                et = n("JPcv"),
                tt = Object.assign(Ke.a, {
                    [h.a.JOIN_GAME]: $e.h,
                    [h.a.SET_PREVIOUS_GAME_INSTANCE]: (e, t) => {
                        var {
                            payload: n
                        } = t;
                        return e.set("previousGameInstance", Object(et.fromJS)(n))
                    },
                    [h.a.TOGGLE_AUDIO_URL]: $e.p,
                    [h.a.UPDATE_CONNECTION_STATUS]: $e.w,
                    [b.SET_GRADED_ANSWER]: (e, t) => e.set("gradedAnswer", t.payload),
                    [b.UPDATE_GAME_STATUS]: (e, t) => {
                        var n = e.get("gameState"),
                            a = n.get("statuses").push(t.payload),
                            r = n.set("statuses", a);
                        return e.set("gameState", r)
                    }
                }),
                nt = n("wBhD"),
                at = n("Oz3w"),
                rt = n("YDJX"),
                it = n("m4zK"),
                ot = {
                    actionTypeToPageActionMap: Je,
                    defaultPayloadCreator: at.a
                };
            var st = Object(it.a)({
                    logPageActionMiddlewareOptions: ot,
                    rootReducer: Object(rt.handleActions)(tt, Object(nt.a)())
                }),
                At = (n("5Mxy"), n("k1hW")),
                ct = n("yCO5"),
                lt = n("xNal"),
                ut = n("S0XM"),
                dt = n("WHvC");

            function mt() {
                return (mt = r()((function*() {
                    i.a.configure({
                        transform: e => Object(ct.a)(st.getState(), e, "student")
                    });
                    var {
                        data: e,
                        target: t
                    } = yield Object(ut.a)("LiveGameStudent"), {
                        defaultAvatar: n,
                        hasDownloadedApp: a,
                        initialGameCode: r,
                        isNativeApp: s,
                        isLivePlayerRedesign: A,
                        isPlayerLoggedIn: c,
                        isPlayingCheckpoint: l,
                        multiplayerToken: u,
                        personId: d,
                        userDisplayName: m,
                        userImage: p
                    } = e;
                    st.dispatch(Object(o.g)({
                        defaultAvatar: n,
                        enableStudyLogging: !0,
                        gradedAnswer: null,
                        hasDownloadedApp: a,
                        initialGameCode: r,
                        isLivePlayerRedesign: A,
                        isNativeApp: s,
                        isPlayerLoggedIn: c,
                        isPlayingCheckpoint: l,
                        userDisplayName: m,
                        userImage: p,
                        playerId: d,
                        playerToken: u
                    })), st.dispatch(Object(o.h)()), Object(At.a)({
                        personId: d
                    });
                    var h = lt.c.readJson("live_previous_game_instance");
                    h && st.dispatch(Object(o.b)(h)), Object(dt.a)(G.a.createElement(w.Provider, {
                        store: st
                    }, G.a.createElement(ze, null)), t)
                }))).apply(this, arguments)
            }(function() {
                mt.apply(this, arguments)
            })()
        },
        LhzM: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a = n("FvNY"),
                r = n("baRz"),
                i = n("GCXI"),
                o = n("uyLA"),
                s = n("q1tI"),
                A = n.n(s),
                c = n("p8IN"),
                l = n("hc9g"),
                u = n("FkyO"),
                d = Object(r.styled)("section")({
                    name: "Label",
                    class: "lv624w6"
                });

            function m(e) {
                var {
                    currentValue: t,
                    gradedAnswer: n,
                    question: r
                } = e, {
                    t: s
                } = Object(o.a)();
                var m = function() {
                    if (void 0 !== t && null === n) return s("checkpoint.question.feedback.you_selected");
                    if (Object(c.g)(n)) {
                        if (!n.feedback.submittedAnswer) return s("test.true_false.skipped");
                        if (Object(c.a)(n)) return Object(u.a)(s);
                        if (Object(c.b)(n)) return Object(u.b)(s)
                    }
                    return r.metadata.answerSide === i.Mb.DEFINITION ? s("assistant.label.multiple_choice_definitions") : s("assistant.label.multiple_choice_terms")
                }();
                return A.a.createElement(d, {
                    "aria-label": function() {
                        if (!n || n.isCorrect || !r.hasExactlyOneCorrectAnswer) return m;
                        var e = n.feedback.expectedAnswer.value,
                            t = r.options[e],
                            a = Object(l.i)(t);
                        if (!a) return m;
                        var i = s("assistant.label.answer_feedback.aria_correction", {
                            correctAnswer: a
                        });
                        return m + " " + i
                    }(),
                    "aria-live": n ? "assertive" : void 0,
                    className: Object(a.cx)(Object(c.a)(n) ? "c1rj1z0r" : null, !Object(c.c)(n) && Object(c.b)(n) ? "i5n2h5" : null, Object(c.c)(n) ? "s1xr3rjo" : null)
                }, A.a.createElement("div", {
                    "aria-hidden": !0
                }, m))
            }
            n("Xskn")
        },
        Mn35: function(e, t, n) {
            var a = n("UMY1")((function(e, t, n) {
                e[n ? 0 : 1].push(t)
            }), (function() {
                return [
                    [],
                    []
                ]
            }));
            e.exports = a
        },
        MwSb: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return d
            })), n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "e", (function() {
                return h
            })), n.d(t, "d", (function() {
                return g
            }));
            var a = n("Mn35"),
                r = n.n(a),
                i = (n("4mDm"), n("3bBZ"), n("rB9j"), n("Rm1S"), n("QimK")),
                o = (n("E9XD"), n("N4t/")),
                s = "string";

            function A(e) {
                return Array.from(e)
            }

            function c(e) {
                return A(e).reduce(((e, t) => e.concat(Object(o.a)(t.getAsFile()))), [])
            }
            var l = n("EzPt"),
                u = n("uBNa");

            function d(e) {
                var {
                    types: t
                } = e;
                return !t || Array.from(t).some((e => i.d.indexOf(e) > -1))
            }

            function m(e) {
                var t = p(e);
                if (e.items) {
                    var n = A(e.items),
                        [a, i] = r()(n, (e => {
                            var {
                                kind: t
                            } = e;
                            return t === s
                        }));
                    return !! function(e) {
                        return e.some((e => {
                            var {
                                type: t
                            } = e;
                            return "text/rtf" === t
                        }))
                    }(a) || ! function(e, t) {
                        if (1 !== e.length) return !1;
                        var n = e[0].getAsFile();
                        return !!n && n.name === t
                    }(i, t) && 0 === i.length
                }
                return e.files ? 0 === e.files.length : !!t
            }

            function p(e) {
                for (var t = 0; t < i.d.length; t++) try {
                    var n = e.getData(i.d[t]);
                    if (n) return n
                } catch (a) {
                    continue
                }
                return ""
            }

            function h(e, t) {
                return Object(l.a)(function(e) {
                    var {
                        files: t,
                        items: n
                    } = e;
                    return n ? c(n) : t ? Object(u.a)(t) : []
                }(e), t)
            }

            function g(e) {
                var t = null == e || null == e.getData ? void 0 : e.getData("text/html");
                return null == t ? void 0 : t.match(/src\s*=\s*".+?"/)
            }
        },
        MxFU: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "a", (function() {
                    return a
                })), n.d(t, "b", (function() {
                    return r
                })),
                function(e) {
                    e.EVENT = "event", e.DATE = "date", e.NUMBER = "number", e.DOCUMENT = "document", e.COURT_CASE = "court_case", e.NAME = "name", e.ORGANIZATION = "organization", e.BELIEF_SYSTEM = "belief_system"
                }(a || (a = {})),
                function(e) {
                    e.NOUN = "noun", e.VERB = "verb", e.ADJECTIVE = "adjective", e.ADVERB = "adverb"
                }(r || (r = {}))
        },
        NKpx: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        NSD7: function(e, t, n) {
            "use strict";
            n("4mDm"), n("5s+n"), n("3bBZ");
            var a = n("mr8R");
            t.a = Object(a.default)((() => Promise.all([n.e("react"), n.e("immutable"), n.e("leaflet"), n.e("common"), n.e("diagram_lazy")]).then(n.bind(null, "ewga"))))
        },
        OgbW: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        Oz3w: function(e, t, n) {
            "use strict";
            t.a = (e, t, n) => {
                var a = n.get("gameInstance");
                return {
                    gameCode: a ? a.gameCode : null
                }
            }
        },
        PDX0: function(e, t) {
            (function(t) {
                e.exports = t
            }).call(this, {})
        },
        QimK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            }));
            var a = ["text/csv"],
                r = ["image/bmp", "image/jpeg", "image/png"],
                i = ["image/bmp", "image/gif", "image/jpeg", "image/png", "image/tiff"],
                o = ["text/plain", "Text"]
        },
        SPiA: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        TX86: function(e, t, n) {
            n("rB9j"), n("EnZy"), n("UxlC"),
                function(t) {
                    var n, a = {},
                        r = {
                            16: !1,
                            18: !1,
                            17: !1,
                            91: !1
                        },
                        i = [],
                        o = {
                            "⇧": 16,
                            shift: 16,
                            "⌥": 18,
                            alt: 18,
                            option: 18,
                            "⌃": 17,
                            ctrl: 17,
                            control: 17,
                            "⌘": 91,
                            command: 91
                        },
                        s = {
                            backspace: 8,
                            tab: 9,
                            clear: 12,
                            enter: 13,
                            return: 13,
                            esc: 27,
                            escape: 27,
                            space: 32,
                            left: 37,
                            up: 38,
                            right: 39,
                            down: 40,
                            del: 46,
                            delete: 46,
                            home: 36,
                            end: 35,
                            pageup: 33,
                            pagedown: 34,
                            ",": 188,
                            ".": 190,
                            "/": 191,
                            "`": 192,
                            "-": 189,
                            "=": 187,
                            ";": 186,
                            "'": 222,
                            "[": 219,
                            "]": 221,
                            "\\": 220
                        },
                        A = {
                            96: 48,
                            97: 49,
                            98: 50,
                            99: 51,
                            100: 52,
                            101: 53,
                            102: 54,
                            103: 55,
                            104: 56,
                            105: 57
                        };
                    for (code = function(e) {
                            return s[e] || e.toUpperCase().charCodeAt(0)
                        }, _downKeys = [], n = 1; n < 20; n++) s["f" + n] = 111 + n;

                    function c(e, t) {
                        for (var n = e.length; n--;)
                            if (e[n] === t) return n;
                        return -1
                    }

                    function l(e, t) {
                        if (e.length != t.length) return !1;
                        for (var n = 0; n < e.length; n++)
                            if (e[n] !== t[n]) return !1;
                        return !0
                    }
                    var u = {
                        16: "shiftKey",
                        18: "altKey",
                        17: "ctrlKey",
                        91: "metaKey"
                    };

                    function d(e) {
                        for (n in r) r[n] = e[u[n]]
                    }

                    function m(e, t, n) {
                        var r, i;
                        r = _(e), void 0 === n && (n = t, t = "all");
                        for (var o = 0; o < r.length; o++) i = [], (e = r[o].split("+")).length > 1 && (i = b(e), e = [e[e.length - 1]]), e = e[0], (e = code(e)) in a || (a[e] = []), a[e].push({
                            shortcut: r[o],
                            scope: t,
                            method: n,
                            key: r[o],
                            mods: i
                        })
                    }
                    for (n in o) m[n] = !1;

                    function p(e) {
                        i = e ? [e] : []
                    }

                    function h() {
                        return i.length ? i[i.length - 1] : "all"
                    }

                    function g(e) {
                        i.push(e)
                    }

                    function f(e) {
                        var t = h();
                        if (!Array.isArray(t)) return !1;
                        var n = t.indexOf(e);
                        n >= 0 && (t.splice(n, 1), 0 == t.length ? i.pop() : i[i.length - 1] = t)
                    }

                    function _(e) {
                        var t;
                        return "" == (t = (e = e.replace(/\s/g, "")).split(","))[t.length - 1] && (t[t.length - 2] += ","), t
                    }

                    function b(e) {
                        for (var t = e.slice(0, e.length - 1), n = 0; n < t.length; n++) t[n] = o[t[n]];
                        return t
                    }

                    function v(e, t, n) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, (function() {
                            n(window.event)
                        }))
                    }
                    v(document, "keydown", (function(e) {
                        ! function(e) {
                            var t, n, i, s, l, u;
                            if (t = A[e.keyCode] || e.keyCode, -1 == c(_downKeys, t) && _downKeys.push(t), 93 != t && 224 != t || (t = 91), t in r)
                                for (i in r[t] = !0, o) o[i] == t && (m[i] = !0);
                            else if (d(e), m.filter.call(this, e) && t in a)
                                for (u = h(), s = 0; s < a[t].length; s++)
                                    if (n = a[t][s], Array.isArray(u) && u.indexOf(n.scope) >= 0 || n.scope == u || "all" == n.scope) {
                                        for (i in l = n.mods.length > 0, r)(!r[i] && c(n.mods, +i) > -1 || r[i] && -1 == c(n.mods, +i)) && (l = !1);
                                        (0 != n.mods.length || r[16] || r[18] || r[17] || r[91]) && !l || !1 === n.method(e, n) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
                                    }
                        }(e)
                    })), v(document, "keyup", (function(e) {
                        var t, n = e.keyCode,
                            a = c(_downKeys, n);
                        if (a >= 0 && _downKeys.splice(a, 1), 93 != n && 224 != n || (n = 91), n in r)
                            for (t in r[n] = !1, o) o[t] == n && (m[t] = !1)
                    })), v(window, "focus", (function() {
                        for (n in r) r[n] = !1;
                        for (n in o) m[n] = !1
                    }));
                    var E = t.key;
                    t.key = m, t.key.setScope = p, t.key.getScope = h, t.key.pushScope = g, t.key.popScope = function(e) {
                        newScope = [];
                        for (var t = 0; t < i.length && i[t] !== e; t++) newScope.push(i[t]);
                        i = newScope, f(e)
                    }, t.key.deleteScope = function(e) {
                        var t, n, r;
                        for (t in a)
                            for (n = a[t], r = 0; r < n.length;) n[r].scope === e ? n.splice(r, 1) : r++
                    }, t.key.addOverlappingScope = function(e) {
                        var t = h(),
                            n = [];
                        "all" != t ? (Array.isArray(t) ? n = t : n.push(t), n.indexOf(e) > -1 || (n.push(e), Array.isArray(t) ? i[i.length - 1] = n : g(n))) : p(e)
                    }, t.key.removeOverlappingScope = f, t.key.filter = function(e) {
                        var t, n = (t = (t = e.target || e.srcElement) instanceof HTMLDocument ? t.documentElement : t).tagName,
                            a = t.classList;
                        if (!(a instanceof DOMTokenList)) throw console.info("Event", e), new Error("Browser does not support classList");
                        var r = "INPUT" !== n && "SELECT" !== n && "TEXTAREA" !== n,
                            i = a.contains("js-keymaster-allow");
                        return r || i
                    }, t.key.isPressed = function(e) {
                        return "string" == typeof e && (e = code(e)), -1 != c(_downKeys, e)
                    }, t.key.getPressedKeyCodes = function() {
                        return _downKeys.slice(0)
                    }, t.key.noConflict = function() {
                        var e = t.key;
                        return t.key = E, e
                    }, t.key.unbind = function(e, t) {
                        var n, r, i, o, s, A = [];
                        for (n = _(e), o = 0; o < n.length; o++) {
                            if ((r = n[o].split("+")).length > 1 && (A = b(r)), e = r[r.length - 1], e = code(e), void 0 === t && (t = h()), !a[e]) return;
                            for (i = 0; i < a[e].length; i++)(s = a[e][i]).scope === t && l(s.mods, A) && (a[e][i] = {})
                        }
                    }, e.exports = m
                }(this)
        },
        Trb0: function(e, t, n) {
            (function(e, a) {
                var r;
                n("Ew+T"), n("JfAA"),
                    function() {
                        "use strict";
                        var i = {
                            get: function(e, t) {
                                if (e === t) return 0;
                                if (0 === e.length) return t.length;
                                if (0 === t.length) return e.length;
                                var n, a, r, i, o, s = new Array(t.length + 1);
                                for (r = 0; r < s.length; ++r) s[r] = r;
                                for (r = 0; r < e.length; ++r) {
                                    for (a = r + 1, i = 0; i < t.length; ++i) n = a, (a = s[i] + (e.charAt(r) === t.charAt(i) ? 0 : 1)) > (o = n + 1) && (a = o), a > (o = s[i + 1] + 1) && (a = o), s[i] = n;
                                    s[i] = a
                                }
                                return a
                            },
                            getAsync: function(t, n, a, r) {
                                if (r = function(e) {
                                        for (var t = Array.prototype.slice.call(arguments, 1), n = 0; n < t.length; ++n) {
                                            var a = t[n];
                                            for (var r in a) a.hasOwnProperty(r) && (e[r] = a[r])
                                        }
                                        return e
                                    }({}, {
                                        progress: null
                                    }, r), t === n) return a(null, 0);
                                if (0 === t.length) return a(null, n.length);
                                if (0 === n.length) return a(null, t.length);
                                var i, o, s, A, c, l, u, d = new Array(n.length + 1);
                                for (s = 0; s < d.length; ++s) d[s] = s;
                                o = 1, s = 0, A = -1;
                                ! function m() {
                                    for (l = (new Date).valueOf(), u = l; u - l < 1e3;) {
                                        if (n.length <= ++A) {
                                            if (d[A] = o, t.length <= ++s) return a(null, o);
                                            o = s + 1, A = 0
                                        }
                                        i = o, (o = d[A] + (t.charAt(s) === n.charAt(A) ? 0 : 1)) > (c = i + 1) && (o = c), c = d[A + 1] + 1, o > c && (o = c), d[A] = i, u = (new Date).valueOf()
                                    }
                                    if (null !== r.progress) try {
                                        r.progress.call(null, 100 * s / t.length)
                                    } catch (h) {
                                        return a("Progress callback: " + h.toString())
                                    }
                                    var p;
                                    p = m, "function" == typeof e ? e(p) : setTimeout(p, 0)
                                }()
                            }
                        };
                        null !== n("B9Yq") && n("PDX0") ? void 0 === (r = function() {
                            return i
                        }.call(t, n, t, a)) || (a.exports = r) : null !== a && void 0 !== t && a.exports === t ? a.exports = i : "undefined" != typeof self && "function" == typeof self.postMessage && "function" == typeof self.importScripts ? self.Levenshtein = i : "undefined" != typeof window && null !== window && (window.Levenshtein = i)
                    }()
            }).call(this, n("URgk").setImmediate, n("YuTi")(e))
        },
        UOEs: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        URgk: function(e, t, n) {
            (function(e) {
                n("Ew+T");
                var a = void 0 !== e && e || "undefined" != typeof self && self || window,
                    r = Function.prototype.apply;

                function i(e, t) {
                    this._id = e, this._clearFn = t
                }
                t.setTimeout = function() {
                    return new i(r.call(setTimeout, a, arguments), clearTimeout)
                }, t.setInterval = function() {
                    return new i(r.call(setInterval, a, arguments), clearInterval)
                }, t.clearTimeout = t.clearInterval = function(e) {
                    e && e.close()
                }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
                    this._clearFn.call(a, this._id)
                }, t.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                }, t.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                }, t._unrefActive = t.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                        e._onTimeout && e._onTimeout()
                    }), t))
                }, n("YBdB"), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
            }).call(this, n("yLpj"))
        },
        VGm7: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("RVJv");
            class r extends a.a {
                getVersionPort() {
                    return r.BASE_PORT + this.get("gameVersion") % 1e3
                }
                getServerBasePath() {
                    return "/multiplayer/" + this.get("upstreamNumber") + "/" + this.getVersionPort() + "/" + this.get("gameCode") + "/games"
                }
            }
            r.URL_BASE = "game-instances", r.MODEL_NAME = "gameInstance", r.BASE_PORT = 45e3
        },
        VW3V: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", (function() {
                    return a
                })),
                function(e) {
                    e[e.CLASSIC = 0] = "CLASSIC", e[e.CHECKPOINT = 1] = "CHECKPOINT"
                }(a || (a = {}))
        },
        "Vo+D": function(e, t, n) {
            "use strict";
            n.r(t)
        },
        WHVd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return h
            }));
            var a, r = n("pVnL"),
                i = n.n(r),
                o = n("FvNY"),
                s = n("baRz"),
                A = n("25Tj"),
                c = n("lX3T"),
                l = n("q1tI"),
                u = n.n(l),
                d = Object(s.styled)("div")({
                    name: "Container",
                    class: "c1sj1twu"
                }),
                m = Object(s.styled)("div")({
                    name: "ImageWrapper",
                    class: "i172n7x2"
                });

            function p(e) {
                switch (e) {
                    case a.Center:
                        return "c1ufc5ln";
                    case a.Top:
                        return "t1gujtze";
                    default:
                        return null
                }
            }! function(e) {
                e.Center = "center", e.Top = "top"
            }(a || (a = {}));
            class h extends l.Component {
                render() {
                    var {
                        alignment: e,
                        imageUrl: t,
                        lang: n,
                        text: a
                    } = this.props;
                    return u.a.createElement(d, {
                        className: Object(o.cx)(p(e))
                    }, void 0 !== a && "" !== a && n ? u.a.createElement(A.a, i()({
                        className: "FormattedTextWithImage-wrapper",
                        lang: n,
                        maxLength: this.props.maxLength,
                        richText: this.props.richText,
                        text: a
                    }, this.props)) : null, t ? u.a.createElement(m, {
                        className: "FormattedTextWithImage-wrapper"
                    }, u.a.createElement(c.a, {
                        alt: this.props.text,
                        clickToZoom: this.props.clickToZoom,
                        height: this.props.imageHeight,
                        shape: this.props.imageShape,
                        size: this.props.imageSize,
                        src: t
                    })) : null)
                }
            }
            n("8KjZ")
        },
        WO9r: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        Xskn: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        Y7o6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = e => e.get("studentUrl")
        },
        YBdB: function(e, t, n) {
            (function(e, t) {
                n("Ew+T"),
                    function(e, n) {
                        "use strict";
                        if (!e.setImmediate) {
                            var a, r, i, o, s, A = 1,
                                c = {},
                                l = !1,
                                u = e.document,
                                d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                            d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? a = function(e) {
                                t.nextTick((function() {
                                    p(e)
                                }))
                            } : ! function() {
                                if (e.postMessage && !e.importScripts) {
                                    var t = !0,
                                        n = e.onmessage;
                                    return e.onmessage = function() {
                                        t = !1
                                    }, e.postMessage("", "*"), e.onmessage = n, t
                                }
                            }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                                p(e.data)
                            }, a = function(e) {
                                i.port2.postMessage(e)
                            }) : u && "onreadystatechange" in u.createElement("script") ? (r = u.documentElement, a = function(e) {
                                var t = u.createElement("script");
                                t.onreadystatechange = function() {
                                    p(e), t.onreadystatechange = null, r.removeChild(t), t = null
                                }, r.appendChild(t)
                            }) : a = function(e) {
                                setTimeout(p, 0, e)
                            } : (o = "setImmediate$" + Math.random() + "$", s = function(t) {
                                t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(o) && p(+t.data.slice(o.length))
                            }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), a = function(t) {
                                e.postMessage(o + t, "*")
                            }), d.setImmediate = function(e) {
                                "function" != typeof e && (e = new Function("" + e));
                                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                                var r = {
                                    callback: e,
                                    args: t
                                };
                                return c[A] = r, a(A), A++
                            }, d.clearImmediate = m
                        }

                        function m(e) {
                            delete c[e]
                        }

                        function p(e) {
                            if (l) setTimeout(p, 0, e);
                            else {
                                var t = c[e];
                                if (t) {
                                    l = !0;
                                    try {
                                        ! function(e) {
                                            var t = e.callback,
                                                n = e.args;
                                            switch (n.length) {
                                                case 0:
                                                    t();
                                                    break;
                                                case 1:
                                                    t(n[0]);
                                                    break;
                                                case 2:
                                                    t(n[0], n[1]);
                                                    break;
                                                case 3:
                                                    t(n[0], n[1], n[2]);
                                                    break;
                                                default:
                                                    t.apply(void 0, n)
                                            }
                                        }(t)
                                    } finally {
                                        m(e), l = !1
                                    }
                                }
                            }
                        }
                    }("undefined" == typeof self ? void 0 === e ? this : e : self)
            }).call(this, n("yLpj"), n("8oxB"))
        },
        ZHKH: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return l
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "a", (function() {
                return m
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "g", (function() {
                return h
            })), n.d(t, "i", (function() {
                return g
            })), n.d(t, "b", (function() {
                return E
            })), n.d(t, "c", (function() {
                return I
            }));
            n("ToJy"), n("4mDm"), n("3bBZ");
            var a = n("GCXI"),
                r = n("JPcv"),
                i = n("lKDL"),
                o = n("E52R"),
                s = n("445u"),
                A = n("DN0N"),
                c = n("peh1"),
                l = e => e.get("set"),
                u = Object(c.createSelector)(l, (e => null == e ? void 0 : e.get("id"))),
                d = Object(c.createSelector)(l, (e => null == e ? void 0 : e.get("title"))),
                m = Object(c.createSelector)(l, (e => null == e ? void 0 : e.get("hasDiagrams"))),
                p = e => e.get("terms"),
                h = Object(c.createSelector)([l, o.a, o.c], ((e, t, n) => Object(A.a)({
                    diagramShapes: n ? n.toJS() : [],
                    set: e ? e.toJS() : {},
                    terms: t ? t.toJS() : []
                }))),
                g = Object(c.createSelector)(h, (e => Object(r.List)(e).filter((e => {
                    var [, t] = e;
                    return t >= i.g
                })).map((e => {
                    var [t] = e;
                    return t[1]
                })).toSet().toJS().sort())),
                f = e => {
                    var t = e.filter((e => {
                        var [t] = e;
                        return t[0] === a.kc.WORD && t[1] === a.kc.LOCATION
                    }));
                    if (t.length) return t[0];
                    var n = e.filter((e => {
                        var [t] = e;
                        return t[0] === a.kc.DEFINITION && t[1] === a.kc.LOCATION
                    }));
                    if (t.length) return n[0];
                    var r = e.filter((e => {
                        var [t] = e;
                        return t[0] === a.kc.DEFINITION && t[1] === a.kc.WORD
                    }));
                    return r.length ? r[0] : e[0]
                },
                _ = Object(c.createSelector)([h, s.f], ((e, t) => {
                    var n = (t ? e : e.filter((e => {
                        var [t] = e;
                        return t[0] === a.kc.DEFINITION && t[1] === a.kc.WORD
                    }))).filter((e => {
                        var [, t] = e;
                        return t >= i.g
                    }));
                    n.length || (n = e);
                    var r = n.filter((e => {
                        var [, t] = e;
                        return t >= i.c
                    }));
                    return r.length ? f(r)[0] : f(n)[0]
                })),
                b = Object(c.createSelector)(_, (e => e.length ? e[1] : null)),
                v = Object(c.createSelector)(_, (e => e.length ? e[0] : null)),
                E = e => e.get("optionsViewSelectedAnswerSide") || b(e),
                I = e => e.get("optionsViewSelectedPromptSide") || v(e)
        },
        Zht2: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        aNXt: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = t => {
                    var n = e();
                    if (void 0 !== n) return t.preventDefault(), (t || window.event).returnValue = n, n
                };
                return window.addEventListener("beforeunload", t, !0), {
                    remove() {
                        window.removeEventListener("beforeunload", t, !0)
                    }
                }
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        bIcK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n("pVnL"),
                r = n.n(a),
                i = (n("4mDm"), n("3bBZ"), n("baRz")),
                o = n("25Tj"),
                s = n("lX3T"),
                A = n("q1tI"),
                c = n.n(A),
                l = n("317o"),
                u = Object(i.styled)("div")({
                    name: "TermTextClicKWrapper",
                    class: "tpo8fik"
                });
            class d extends A.Component {
                constructor() {
                    super(...arguments), this.renderFormattedText = () => {
                        var {
                            imageUrl: e,
                            lang: t,
                            text: n
                        } = this.props;
                        return c.a.createElement(c.a.Fragment, null, void 0 !== n && t ? c.a.createElement(o.a, r()({
                            lang: t,
                            maxLength: this.props.maxLength,
                            richText: this.props.richText,
                            text: n
                        }, this.props)) : null, e ? c.a.createElement("div", {
                            className: "FormattedTextWithImage-image"
                        }, c.a.createElement(s.a, {
                            alt: this.props.text,
                            clickToZoom: this.props.clickToZoom,
                            shape: this.props.imageShape,
                            size: this.props.imageSize,
                            src: e
                        })) : null)
                    }, this.renderFormattedTextWithQuestionHint = () => {
                        var {
                            handleTermTextClick: e,
                            questionHint: t
                        } = this.props;
                        return c.a.createElement(c.a.Fragment, null, c.a.createElement(u, {
                            onClick: e
                        }, this.renderFormattedText()), c.a.createElement(l.a, {
                            hint: t
                        }))
                    }
                }
                render() {
                    var {
                        handleTermTextClick: e,
                        questionHint: t
                    } = this.props;
                    return c.a.createElement("div", {
                        className: "FormattedTextWithImage",
                        onClick: t ? () => {} : e
                    }, t ? this.renderFormattedTextWithQuestionHint() : this.renderFormattedText())
                }
            }
            n("3aqK")
        },
        bPHd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return A
            }));
            var a = n("YDJX"),
                r = n("Dt3B"),
                i = n("i4/9"),
                o = n("CLQU");

            function s(e) {
                Object(o.a)().on("matchteam.new-answer", (t => {
                    e(Object(i.h)(t))
                })), Object(o.a)().on("matchteam.new-streak", (t => {
                    e(Object(i.i)(t))
                }))
            }
            var A = Object(a.createAction)(r.a.MATCHTEAM_SUBMIT_ANSWER, (function(e) {
                var {
                    streak: t,
                    round: n,
                    termId: a
                } = e;
                return Object(o.a)().emit("matchteam.submit-answer", {
                    streak: t,
                    round: n,
                    termId: a
                }), {
                    streak: t,
                    round: n,
                    termId: a
                }
            }))
        },
        d3LF: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        eTK3: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            n("4mDm"), n("3bBZ"), n("JTJg");
            var a = n("FvNY"),
                r = n("baRz"),
                i = n("qqKc"),
                o = n("nXOR"),
                s = n("zK28"),
                A = n("CA7o"),
                c = n("nrsj"),
                l = n("jQ9C"),
                u = n("q1tI"),
                d = n.n(u),
                m = n("l6OD"),
                p = n("srU6"),
                h = Object(l.rem)(80),
                g = Object(r.styled)("div")({
                    name: "BottomBarContainer",
                    class: "b1cq2ucw",
                    vars: {
                        "b1cq2ucw-0": [e => e.shouldShowPrefetchAnimation ? 5e3 : 1e3, "ms"]
                    }
                }),
                f = Object(r.styled)("div")({
                    name: "ContentContainer",
                    class: "c14r6g4y",
                    vars: {
                        "c14r6g4y-0": [e => e.maxWidth]
                    }
                }),
                _ = Object(r.styled)("div")({
                    name: "ActionsContainer",
                    class: "aq6b3lt"
                }),
                b = Object(r.styled)("span")({
                    name: "PressAnyKeyText",
                    class: "p99jz1p"
                }),
                v = Object(r.styled)("div")({
                    name: "FeedbackLinkContainer",
                    class: "f8nye8"
                });
            t.b = Object(A.b)()((function(e) {
                var t, {
                        actions: {
                            onClick: n
                        },
                        feedbackLink: r,
                        keydownEvent: h,
                        isNewStudyBreak: E = !1,
                        prefetchInStudyModeVariant: I,
                        timeLeft: y = 0
                    } = e,
                    [T, C] = Object(u.useState)(!1),
                    [w, O] = Object(u.useState)(!1),
                    S = E && y > 0;
                Object(u.useEffect)((() => {
                    var e = setTimeout((() => O(!0)), 1e3);
                    return () => {
                        clearTimeout(e)
                    }
                }), []), Object(u.useEffect)((() => {
                    !w || !h || S || T || A.a.includes(h.key) || (h.preventDefault(), n(), C(!0))
                }), [w, T, h, n, S]);
                var k = r && !1 === (null == (t = s.default.user) ? void 0 : t._isUnderAge),
                    N = Object(l.rem)(840),
                    B = "oneQuestionAway" === I;
                return d.a.createElement(g, {
                    "aria-live": "polite",
                    className: Object(a.cx)(k && "fd5jvl9"),
                    shouldShowPrefetchAnimation: B
                }, d.a.createElement(f, {
                    maxWidth: N
                }, d.a.createElement(o.a, {
                    above: "l"
                }, d.a.createElement(b, null, S ? Object(c.a)("study_ads_modal.skip_ad", {
                    timeLeft: y
                }) : Object(c.a)("assistant.continue_button.press_any_key_text"))), d.a.createElement(_, null, k ? d.a.createElement(v, null, r) : null, d.a.createElement(i.b, {
                    disabled: S,
                    isFullWidth: Object(m.c)(Object(p.b)(), "l"),
                    onClick: n,
                    size: "large",
                    text: Object(c.a)("assistant.continue_button.continue_cta")
                }))))
            })), n("SPiA")
        },
        fPaQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("GCXI");

            function r(e, t) {
                if (t === a.kc.WORD) return e.word;
                if (t === a.kc.DEFINITION) return e.definition;
                throw new Error("Unrecognized textual term side: " + t)
            }
        },
        gP5R: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n("IZIl"),
                r = n("GCXI"),
                i = n("q1tI"),
                o = n.n(i),
                s = n("INDh");

            function A(e) {
                return Object(s.b)((function(t) {
                    return class extends o.a.Component {
                        componentDidMount() {
                            var {
                                logStudyEvent: t,
                                creatorId: n
                            } = this.props;
                            t(r.Sb.ENTER_SCREEN, {
                                loggerConfig: Object(a.a)()
                            }, {
                                creatorId: n,
                                screen: e
                            })
                        }
                        componentWillUnmount() {
                            var {
                                logStudyEvent: t,
                                creatorId: n
                            } = this.props;
                            t(r.Sb.EXIT_SCREEN, {
                                loggerConfig: Object(a.a)()
                            }, {
                                creatorId: n,
                                screen: e
                            })
                        }
                        render() {
                            return o.a.createElement(t, this.props)
                        }
                    }
                }))
            }
        },
        ghQg: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            class a extends(function(e) {
                function t() {
                    e.apply(this, arguments)
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e, t
            }(Error)) {
                constructor(e, t, n, a) {
                    super(n), this.name = "GameError", this.id = e, this.type = t, this.message = n, this.gameId = a
                }
            }
        },
        hQQp: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return o
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "d", (function() {
                return A
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "g", (function() {
                return l
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            }));
            var a = n("lKDL"),
                r = n("/u/z"),
                i = n("peh1"),
                o = e => e.get("userDisplayName"),
                s = e => e.get("userImage"),
                A = e => e.get("playerId"),
                c = Object(i.createSelector)(r.c, (e => null == e ? void 0 : e.get("players"))),
                l = Object(i.createSelector)(c, (e => null == e ? void 0 : e.sortBy((e => e.get("joinTimestamp"))))),
                u = Object(i.createSelector)([A, c], ((e, t) => null == t ? void 0 : t.get(e))),
                d = Object(i.createSelector)(c, (e => null == e ? void 0 : e.filter((e => e.get("connectionStatuses").last() === a.b.DISCONNECTED))))
        },
        hc9g: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return s
            })), n.d(t, "e", (function() {
                return A
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return u
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "g", (function() {
                return h
            }));
            n("E9XD");
            var a = n("oL8k"),
                r = n.n(a),
                i = n("uR6t");

            function o(e, t) {
                return e.find((e => e.type === t))
            }

            function s(e) {
                var t;
                return null == (t = o(e.attributes, i.b.TEXT_ATTRIBUTE)) ? void 0 : t.plainText
            }

            function A(e) {
                var t;
                return null == (t = o(e.attributes, i.b.TEXT_ATTRIBUTE)) ? void 0 : t.languageCode
            }

            function c(e) {
                var t;
                return null == (t = o(e.attributes, i.b.IMAGE_ATTRIBUTE)) ? void 0 : t.url
            }

            function l(e, t) {
                var n, a, r;
                return (null != (n = null == (a = o(e.attributes, i.b.TEXT_ATTRIBUTE)) || null == (r = a.plainText) ? void 0 : r.length) ? n : 0) > t
            }

            function u(e) {
                return (t = e.attributes, n = i.b.TEXT_ATTRIBUTE, t.filter((e => e.type === n))).length > 0;
                var t, n
            }

            function d(e) {
                var t;
                return null == (t = o(e.attributes, i.b.LOCATION_ATTRIBUTE)) ? void 0 : t.shape
            }

            function m(e) {
                var t;
                return null == (t = o(e.attributes, i.b.AUDIO_ATTRIBUTE)) ? void 0 : t.url
            }

            function p(e) {
                var t;
                return null == (t = o(e.attributes, i.b.AUDIO_ATTRIBUTE)) ? void 0 : t.slowUrl
            }
            var h = r()((e => e.attributes.reduce(((e, t) => {
                switch (t.type) {
                    case i.b.AUDIO_ATTRIBUTE:
                        e.audio = t;
                        break;
                    case i.b.IMAGE_ATTRIBUTE:
                        e.image = t;
                        break;
                    case i.b.LOCATION_ATTRIBUTE:
                        e.location = t;
                        break;
                    case i.b.TEXT_ATTRIBUTE:
                        e.text = t;
                        break;
                    default:
                        ! function(e) {
                            throw new Error("Unsupported Media Attribute: " + e + ".")
                        }(t)
                }
                return e
            }), {})))
        },
        hfUd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return ce
            }));
            var a, r = n("pVnL"),
                i = n.n(r),
                o = n("8OQS"),
                s = n.n(o),
                A = (n("4mDm"), n("3bBZ"), n("zKZe"), n("rB9j"), n("nrsj")),
                c = n("6gon"),
                l = n("a4W4"),
                u = n("r7gd"),
                d = n("0muR"),
                m = n("x+ut"),
                p = n("a08m"),
                h = n("q1tI"),
                g = n.n(h),
                f = e => {
                    var {
                        id: t,
                        onClickCloseButton: n,
                        onEmptyAd: a,
                        showing: r = !1
                    } = e, {
                        setEmptyAd: i
                    } = Object(c.a)(r, a), [o, s] = Object(h.useState)("transparent");
                    return g.a.createElement(d.a, {
                        isCurrent: !0,
                        isLast: !0,
                        shouldBeHidden: !r
                    }, g.a.createElement("div", {
                        className: "CardsItemSide",
                        key: "card-item-legacy-flashcard-ad-" + t
                    }, g.a.createElement(m.a, {
                        id: t,
                        onDisplayCallback: e => {
                            var t = e.slot.getHtml() || "",
                                n = /data-nativead-close-bt-hex="(#[0-9a-fA-F]{6,8})"/gm.exec(t),
                                a = (n ? n[1] : null) || u.j.PrimaryBodyText;
                            a && s(a)
                        },
                        onEmptyAdCallback: () => i(!0)
                    }), g.a.createElement("div", {
                        className: "CardAdCloseButton"
                    }, g.a.createElement(p.a, {
                        onClick: n
                    }, g.a.createElement("span", {
                        style: {
                            color: o
                        }
                    }, g.a.createElement(l.b, {
                        alt: Object(A.a)("advertisements.skip_ad"),
                        icon: "x",
                        size: l.a.Medium
                    }))))))
                },
                _ = g.a.memo(f),
                b = n("qKTw"),
                v = (n("JfAA"), n("6MTt")),
                E = n("TSYQ"),
                I = n.n(E),
                y = n("bIcK"),
                T = n("t1Ez"),
                C = n("mLAq"),
                w = n("4juH"),
                O = n("NSD7"),
                S = n("EFuM"),
                k = {
                    min: 14,
                    max: 30
                };
            ! function(e) {
                e[e.FRONT = 0] = "FRONT", e[e.BACK = 1] = "BACK"
            }(a || (a = {}));
            var N = "👆";
            class B extends g.a.PureComponent {
                constructor() {
                    super(...arguments), this.getLegendWithFlip = () => {
                        var e = () => g.a.createElement(C.a, null, g.a.createElement(T.a, {
                                id: "modes.cards.keyboard_shortcuts.space_key"
                            })),
                            t = g.a.createElement(T.a, {
                                id: "modes.cards.card_controls.legend_hint_front_click_with_flip",
                                kbd: e()
                            }),
                            n = g.a.createElement(T.a, {
                                id: "modes.cards.card_controls.legend_hint_front_tap_with_flip",
                                kbd: e()
                            }),
                            r = g.a.createElement(T.a, {
                                id: "modes.cards.card_controls.legend_hint_back_click_with_flip",
                                kbd: e()
                            }),
                            i = g.a.createElement(T.a, {
                                id: "modes.cards.card_controls.legend_hint_back_tap_with_flip"
                            });
                        return this.props.side === a.FRONT ? {
                            legendClick: t,
                            legendTap: n
                        } : {
                            legendClick: r,
                            legendTap: i
                        }
                    }, this.getLegend = () => {
                        var e = g.a.createElement(T.a, {
                                emoji: N,
                                id: "modes.cards.card_controls.legend_hint_front_click"
                            }),
                            t = g.a.createElement(T.a, {
                                emoji: N,
                                id: "modes.cards.card_controls.legend_hint_front_tap"
                            }),
                            n = g.a.createElement(T.a, {
                                emoji: N,
                                id: "modes.cards.card_controls.legend_hint_back_click"
                            }),
                            r = g.a.createElement(T.a, {
                                emoji: N,
                                id: "modes.cards.card_controls.legend_hint_back_tap"
                            });
                        return this.props.side === a.FRONT ? {
                            legendClick: e,
                            legendTap: t
                        } : {
                            legendClick: n,
                            legendTap: r
                        }
                    }, this.onFlip = () => {
                        var e = window.getSelection && window.getSelection();
                        e && "" !== e.toString() || (this.props.onFlip(), this.refreshFontSize())
                    }, this.shouldShowHintWithFlip = () => "experiment" === v.b.getVariationAndEnroll("FlashcardsHintWithFlip[default,growth]"), this.refreshFontSize = () => {
                        if (Object(S.e)()) {
                            var e = document.createEvent("UIEvents");
                            e.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(e)
                        } else window.dispatchEvent(new Event("resize"))
                    }
                }
                renderDiagram(e, t) {
                    return g.a.createElement("div", {
                        className: "CardsItemSide-diagramPreview"
                    }, g.a.createElement(O.a, {
                        diagramShape: e,
                        image: t
                    }))
                }
                renderLegend() {
                    var {
                        legendClick: e,
                        legendTap: t
                    } = this.shouldShowHintWithFlip() ? this.getLegendWithFlip() : this.getLegend(), n = this.shouldShowHintWithFlip() ? I()("CardsItem-legendBox", "CardsItem-legendBox--hintWithFlip", "CardsItem-legendBox--hintWithFlipIsPreview") : "CardsItem-legendBox";
                    return g.a.createElement("div", {
                        "aria-label": Object(A.a)("modes.cards.card_controls.legend_hint_voice_over"),
                        className: n
                    }, g.a.createElement("div", {
                        "aria-hidden": !0,
                        className: "CardsItem-legendBoxClick"
                    }, g.a.createElement(w.a, {
                        type: "s3"
                    }, e)), g.a.createElement("div", {
                        "aria-hidden": !0,
                        className: "CardsItem-legendBoxTap"
                    }, g.a.createElement(w.a, {
                        type: "s3"
                    }, t)))
                }
                renderTextWithImage() {
                    return g.a.createElement("div", {
                        className: "CardsItemInner-cell"
                    }, g.a.createElement(y.a, {
                        clickToZoom: this.props.supportClickToZoom,
                        imageSize: "m",
                        imageUrl: this.props.photoUrl,
                        lang: this.props.lang,
                        richText: this.props.richText,
                        text: this.props.text,
                        textfit: k
                    }))
                }
                renderContent() {
                    return this.props.diagramImage && this.props.diagramShape ? this.renderDiagram(this.props.diagramShape, this.props.diagramImage) : this.renderTextWithImage()
                }
                render() {
                    var e = this.props.side === a.FRONT,
                        t = I()("CardsItemSide", this.props.sideClass, {
                            "CardsItemSide--firstSide": e,
                            "CardsItemSide--secondSide": !e,
                            "CardsItemSide--lastSide": !e,
                            "CardsItemSide--roundedCorners": this.props.isTikTok,
                            "has-photo": !!this.props.photoUrl,
                            "has-text": !!this.props.text,
                            "showing-hint": this.props.mightShowHint
                        });
                    return g.a.createElement("div", {
                        "aria-hidden": !this.props.isVisible,
                        className: t,
                        onClick: this.onFlip,
                        role: "presentation"
                    }, g.a.createElement("div", {
                        className: "CardsItemInner CardsItemInner--showBox"
                    }, this.renderContent()), this.props.shouldShowCardTooltip ? this.renderLegend() : null)
                }
            }
            var j, x = n("yXPU"),
                D = n.n(x),
                L = n("JxFz"),
                R = n("Pxp3"),
                M = n("Ilu8");
            ! function(e) {
                e.TEACHER_ONBOARDING_SET_PAGE_CARDS_PREVIEW = "teacher-onboarding-set-page-cards-preview-card"
            }(j || (j = {}));
            var G = n("Ri2w"),
                P = n("T3U7"),
                V = n("fdo3");
            class F extends h.PureComponent {
                constructor() {
                    var e;
                    super(...arguments), e = this, this.handleClickCustomize = () => {
                        Object(P.default)("teacher_onboarding_set_page_preview_cta_card_customize_clicked"), Object(V.c)("/" + this.props.setId + "/recreate-set")
                    }, this.handleAddToClassFailure = e => {
                        this.showFailedNotification(Object(A.a)("errors.generic.request_failed")), Object(P.default)("teacher_onboarding_set_page_preview_cta_card_failed", e)
                    }, this.handleAddToClassSuccess = e => {
                        var t, n;
                        this.showClassAddedNotification(e.id), Object(P.default)("teacher_onboarding_set_page_preview_cta_card_added"), null == (t = (n = this.props).updateSetAddedToClass) || t.call(n, e)
                    }, this.handleAddToClass = D()((function*() {
                        var t, n, a, r, i, o;
                        Object(P.default)("teacher_onboarding_set_page_preview_cta_card_add_class_clicked"), null == e.props.onClickTeacherCardCta || e.props.onClickTeacherCardCta();
                        try {
                            var s;
                            n = yield Object(G.d)("/webapi/3.4/user-onboarding/add-set-to-class/" + (null == (s = e.props) ? void 0 : s.setId), {
                                addToExistingClass: !0,
                                step: j.TEACHER_ONBOARDING_SET_PAGE_CARDS_PREVIEW
                            })
                        } catch (A) {
                            return void e.handleAddToClassFailure(A)
                        }
                        null != (t = n) && t.success ? e.handleAddToClassSuccess(n.class) : e.handleAddToClassFailure(null != (a = null == (r = n) ? void 0 : r.message) ? a : null == (i = n) || null == (o = i.error) ? void 0 : o.message)
                    })), this.showFailedNotification = e => Object(M.a)({
                        icon: "alert",
                        message: e
                    }), this.showClassAddedNotification = e => {
                        Object(M.a)({
                            icon: "check",
                            message: Object(A.a)("set_page.user_onboarding.first_set_save_modal.notification.message"),
                            secondaryActionLabel: Object(A.a)("set_page.user_onboarding.first_set_save_modal.notification.go_to_class"),
                            onClickSecondaryAction: () => window.location.assign("/class/" + e)
                        })
                    }
                }
                componentDidMount() {
                    Object(P.default)("teacher_onboarding_set_page_preview_cta_card_showed")
                }
                render() {
                    return g.a.createElement(d.a, {
                        isCurrent: !0,
                        isLast: !1
                    }, g.a.createElement(R.a, {
                        className: "CardsItemSide"
                    }, g.a.createElement(R.a, {
                        className: "TeacherOnboardingCtaCard-content"
                    }, g.a.createElement(R.a, {
                        className: "TeacherOnboardingCtaCard-title"
                    }, g.a.createElement(T.a, {
                        id: "modes.cards.preview_card_teacher_onboarding.title"
                    })), g.a.createElement(R.a, {
                        className: "TeacherOnboardingCtaCard-header"
                    }, g.a.createElement(T.a, {
                        id: "modes.cards.preview_card_teacher_onboarding.header"
                    })), g.a.createElement(R.a, {
                        className: "TeacherOnboardingCtaCard-ctas"
                    }, g.a.createElement("span", {
                        className: "TeacherOnboardingCtaCard-cta-add-class"
                    }, g.a.createElement(L.a, {
                        onClick: this.handleAddToClass
                    }, g.a.createElement(T.a, {
                        id: "modes.cards.preview_card_teacher_onboarding.add_class"
                    }))), g.a.createElement("span", {
                        className: "TeacherOnboardingCtaCard-cta-customize"
                    }, g.a.createElement(L.a, {
                        onClick: this.handleClickCustomize,
                        variant: "social"
                    }, g.a.createElement(T.a, {
                        id: "modes.cards.preview_card_teacher_onboarding.customize"
                    })))))))
                }
            }
            var Q = n("baRz"),
                W = n("pxqK"),
                Z = n.n(W),
                U = n("qqKc"),
                H = n("uaVy"),
                Y = n("nXOR"),
                q = Object(Q.styled)("div")({
                    name: "Container",
                    class: "c1fg69vf"
                }),
                X = Object(Q.styled)("div")({
                    name: "Title",
                    class: "tgx4dkc"
                }),
                z = Object(Q.styled)("div")({
                    name: "CountdownBox",
                    class: "ctbic9p"
                }),
                J = Object(Q.styled)("div")({
                    name: "RedirectIconBox",
                    class: "r1aqgmmi"
                }),
                K = Object(Q.styled)("div")({
                    name: "Description",
                    class: "d120jv60"
                }),
                $ = Object(Q.styled)("div")({
                    name: "CTA",
                    class: "c2um1lo"
                }),
                ee = Object(Q.styled)("div")({
                    name: "Cancel",
                    class: "c2ibqqb"
                }),
                te = e => {
                    var {
                        cancelOnDisable: t = !1,
                        disabled: n = !1,
                        elapsed: a = 5,
                        onCancel: r = (() => {}),
                        redirectName: i,
                        redirectPath: o,
                        shoudlDisableOnVisibility: s = !0
                    } = e, [c, u] = Object(h.useState)(1 * a), [d, m] = Object(h.useState)(a), [p, f] = Object(h.useState)(!0), [_, b] = Object(h.useState)(!1), [v, E] = Object(h.useState)(!1), [I, y] = Object(h.useState)(!1), C = Object(h.useCallback)((e => {
                        !n && s && f(!e.isIntersecting)
                    }), [n, s]), w = Object(h.useCallback)((() => {
                        Object(P.default)("study_mode_redirect_countdown_canceled"), b(!0), r()
                    }), [r]), O = Object(h.useCallback)((() => {
                        I || (Object(P.default)("study_mode_redirect_countdown_clicked"), y(!0), u(0), Object(V.a)(o))
                    }), [I, o]), S = Object(h.useCallback)((() => {
                        I || (Object(P.default)("study_mode_redirect_countdown_auto"), y(!0), u(0), Object(V.a)(o))
                    }), [I, o]);
                    return Object(h.useEffect)((() => {
                        Object(P.default)("study_mode_redirect_countdown_loaded")
                    }), []), Object(h.useEffect)((() => {
                        _ && u(0)
                    }), [_]), Object(h.useEffect)((() => {
                        f(n)
                    }), [n]), Object(h.useEffect)((() => {
                        t && v && p && b(!0)
                    }), [v, t, p]), Object(h.useEffect)((() => {
                        var e;
                        return p || _ || (c > 0 ? (E(!0), e = setTimeout((() => {
                            u(c - 1), m(Math.ceil((c - 1) / 1))
                        }), 1e3)) : S()), () => clearTimeout(e)
                    }), [_, a, p, S, c]), g.a.createElement(Z.a, {
                        onChange: C
                    }, g.a.createElement(q, null, g.a.createElement(X, null, _ ? g.a.createElement(T.a, {
                        id: "study_mode_redirect_countdown.countdown_title_canceled"
                    }) : g.a.createElement(T.a, {
                        id: "study_mode_redirect_countdown.countdown_title",
                        seconds: d
                    })), g.a.createElement(ee, null, !_ && g.a.createElement(U.f, {
                        onClick: w,
                        text: Object(A.a)("study_mode_redirect_countdown.cancel"),
                        variant: H.d.SUBTLE
                    })), g.a.createElement(z, null, g.a.createElement(J, null, g.a.createElement(Y.a, {
                        below: "s"
                    }, (e => g.a.createElement(l.b, {
                        icon: "mode-assistant-sober",
                        role: "presentation",
                        size: e ? l.a.Medium : l.a.Large
                    })))), g.a.createElement(K, null, i), g.a.createElement($, null, g.a.createElement(U.b, {
                        onClick: O,
                        text: Object(A.a)("study_mode_redirect_countdown.cta")
                    })))))
                };
            n("Vo+D");
            var ne = Object(Q.styled)("div")({
                    name: "Container",
                    class: "cer6tji"
                }),
                ae = Object(Q.styled)("div")({
                    name: "Headline",
                    class: "h1ksspa1"
                }),
                re = e => {
                    var {
                        isAnyModalOpen: t = !1,
                        isFirstInteraction: n = !1,
                        numStudiedTerms: a,
                        redirectPath: r
                    } = e;
                    Object(h.useEffect)((() => {
                        Object(P.default)("up_next_card_loaded")
                    }), []);
                    return g.a.createElement(ne, null, g.a.createElement(ae, null, g.a.createElement(T.a, {
                        id: "modes.cards.upnext.headline"
                    }), " ", g.a.createElement(T.a, {
                        id: "modes.cards.upnext.subheadline",
                        numTerms: a
                    })), g.a.createElement(te, {
                        cancelOnDisable: !0,
                        disabled: t || n,
                        redirectName: Object(A.a)("study_mode_redirect_countdown.learn_mode"),
                        redirectPath: r
                    }))
                };
            n("Zht2");
            var ie = n("zK28"),
                oe = n("X0lI"),
                se = n.n(oe),
                Ae = ["termId"];
            class ce extends h.PureComponent {
                constructor() {
                    super(...arguments), this.state = {
                        isAutoFlipping: !1,
                        shouldWobble: !1,
                        userClicked: !1
                    }, this.onClickCard = () => {
                        this.state.isAutoFlipping || this.props.onClickCard(), this.setState({
                            userClicked: !0
                        })
                    }, this.renderCardAd = () => g.a.createElement(_, {
                        id: b.a.SET_PAGE_FLASHCARD_NATIVE,
                        onClickCloseButton: this.props.onClickFlashCardAdCloseButton,
                        onEmptyAd: this.props.onEmptyAd,
                        showing: this.props.shouldShowCardWithAd
                    }), this.renderTeacherCard = () => g.a.createElement(F, {
                        onClickTeacherCardCta: this.props.onClickTeacherCardCta,
                        setId: this.props.setId,
                        updateSetAddedToClass: this.props.updateSetAddedToClass
                    }), this.renderUpNextCard = () => g.a.createElement(d.a, {
                        isCurrent: !0,
                        isLast: !1
                    }, g.a.createElement("div", {
                        className: "CardsItemSide"
                    }, g.a.createElement(re, {
                        isAnyModalOpen: this.props.isAnyModalOpen,
                        numStudiedTerms: this.props.currentCardIndex + 1,
                        numTermsInSet: this.props.numTermsInSet,
                        redirectPath: se()(this.props.learnModePath, "Learn mode path required")
                    }))), this.renderSpecialCard = () => {
                        var {
                            isAdsInCardsPreviewEnabled: e,
                            shouldLoadAd: t,
                            shouldShowAds: n,
                            shouldShowCardWithAd: a,
                            shouldShowTeacherCard: r,
                            shouldShowUpNextCard: i,
                            isTikTok: o
                        } = this.props;
                        return n && e && (a || t) ? this.renderCardAd() : a || o || !r ? i ? this.renderUpNextCard() : void 0 : this.renderTeacherCard()
                    }
                }
                componentDidMount() {
                    0 !== this.props.currentCardIndex || ie.default.user || (this.props.onAutoplay && this.props.onAutoplay(!0), this.setupAutoplay())
                }
                render() {
                    var {
                        cards: e,
                        currentCardIndex: t,
                        isFlipped: n,
                        shouldShowCardTooltip: r,
                        shouldShowCardWithAd: o,
                        shouldShowTeacherCard: A,
                        shouldShowUpNextCard: c,
                        showBoth: l,
                        isTikTok: u
                    } = this.props, m = t - 1, p = t + 1;
                    return g.a.createElement(g.a.Fragment, null, this.renderSpecialCard(), e.map(((e, t) => Object.assign({}, e, {
                        index: t
                    }))).filter((e => e.index >= m && e.index <= p)).map((e => {
                        var h = t === e.index;
                        return g.a.createElement(d.a, {
                            autoplay: 0 === e.index && h && this.state.shouldWobble,
                            isCurrent: h,
                            isFlipped: n,
                            isNext: e.index === p,
                            isPrevious: e.index === m,
                            key: "card-" + e.index,
                            shouldBeHidden: o || A || c,
                            showBoth: l
                        }, e.sides.map(((o, A) => {
                            var {
                                termId: c
                            } = o, l = s()(o, Ae);
                            return g.a.createElement(B, i()({}, l, {
                                isTikTok: u,
                                isVisible: t === e.index && (A === a.FRONT && !n || A === a.BACK && n),
                                key: "cardSide-" + c + "-" + A,
                                onFlip: this.onClickCard,
                                shouldShowCardTooltip: r,
                                side: A,
                                supportClickToZoom: this.props.supportClickToZoom
                            }))
                        })))
                    })))
                }
                setupAutoplay() {
                    window.setTimeout((() => {
                        this.state.userClicked || (this.props.onClickCard(!0), this.setState({
                            isAutoFlipping: !0
                        }), window.setTimeout((() => this.setState({
                            isAutoFlipping: !1
                        })), 420))
                    }), 500), window.setTimeout((() => {
                        this.state.userClicked || this.setState({
                            shouldWobble: !0
                        })
                    }), 1250), window.setTimeout((() => {
                        this.props.onAutoplay && this.props.onAutoplay(!1), this.setState({
                            shouldWobble: !1
                        })
                    }), 2250)
                }
            }
            ce.defaultProps = {
                onEmptyAd: () => {}
            }
        },
        hibm: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("lKDL"),
                r = e => e.get("connectionStatuses").last() === a.b.CONNECTED
        },
        "i4/9": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "e", (function() {
                return _
            })), n.d(t, "j", (function() {
                return b
            })), n.d(t, "l", (function() {
                return v
            })), n.d(t, "m", (function() {
                return E
            })), n.d(t, "i", (function() {
                return y
            })), n.d(t, "h", (function() {
                return C
            })), n.d(t, "k", (function() {
                return w
            })), n.d(t, "d", (function() {
                return O
            })), n.d(t, "b", (function() {
                return S
            }));
            n("4mDm"), n("3bBZ");
            var a = n("GCXI"),
                r = n("hVbS"),
                i = n("IU46"),
                o = n("lKDL"),
                s = n("hQQp"),
                A = n("+P0L"),
                c = (n("5s+n"), n("13SJ")),
                l = n("YDJX"),
                u = n("iYQn"),
                d = n("sLV1"),
                m = Object(l.createAction)(o.a.SET_STUDENT_URL),
                p = Object(l.createAction)(o.a.ACKNOWLEDGE_ERROR),
                h = Object(l.createAction)(o.a.HANDLE_ERROR),
                g = Object(l.createAction)(o.a.HANDLE_ENDED_GAME_NEXT_ACTION),
                f = Object(l.createAction)(o.a.PROCESS_GAME_ERROR),
                _ = Object(l.createAction)(o.a.MERGE_STORE),
                b = Object(l.createAction)(o.a.REPLAY_GAME),
                v = Object(l.createAction)(o.a.UPDATE_GAME_STATE),
                E = Object(l.createAction)(o.a.UPDATE_TEAM_STATE),
                I = Object(l.createAction)(o.a.MATCHTEAM_NEW_ANSWER),
                y = Object(l.createAction)(o.a.MATCHTEAM_NEW_STREAK),
                T = Object(l.createAction)(o.a.SET_SESSION_LUID),
                C = e => (t, n) => {
                    t(I(e));
                    var a = n();
                    e.answer.playerId === Object(s.d)(a) && t(Object(A.a)(e))
                },
                w = () => e => {
                    new Promise((e => {
                        Object(c.a)("https://quizlet.live").then((() => e("www.quizlet.live"))).catch((() => e("quizlet.com/live")))
                    })).then((t => e(m(t))))
                },
                O = e => (t, n) => {
                    var r = n().getIn(["gameInstance", "itemId"]),
                        i = {
                            personId: e,
                            type: a.Xb.MULTIPLAYER,
                            itemType: a.ec.SET,
                            itemId: r,
                            timestamp: Object(d.a)()
                        },
                        o = u.a.add(i);
                    t(T({
                        sessionLuid: o
                    }))
                },
                S = () => (e, t) => {
                    var n = t().get("sessionLuid");
                    n && u.a.save(n, {
                        endedTimestamp: Object(d.a)()
                    }).catch((e => {
                        var [t] = e;
                        t instanceof i.a || Object(r.a)("Error updating session", !1)
                    }))
                }
        },
        "jBF+": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var a = n("TSYQ"),
                r = n.n(a),
                i = n("t1Ez"),
                o = n("xqF0"),
                s = n("4juH"),
                A = n("nrsj"),
                c = n("q1tI"),
                l = n.n(c);
            class u extends c.PureComponent {
                renderPreviousButton() {
                    return l.a.createElement("div", {
                        className: "CardsList-navControl previousButton"
                    }, l.a.createElement(o.a, {
                        "aria-label": Object(A.a)("modes.cards.card_controls.previous_button_label"),
                        disabled: this.props.isFirst || this.props.isDisabled,
                        icon: "arrow",
                        onClick: this.props.onClickPreviousButton,
                        title: Object(A.a)("modes.cards.card_controls.previous_button_label"),
                        variant: "borderless"
                    }))
                }
                renderNextButton() {
                    return l.a.createElement("div", {
                        className: "CardsList-navControl nextButton"
                    }, l.a.createElement(o.a, {
                        "aria-label": Object(A.a)("modes.cards.card_controls.next_button_label"),
                        disabled: this.props.isLast || this.props.isDisabled,
                        icon: "arrow-right",
                        onClick: this.props.onClickNextButton,
                        title: Object(A.a)("modes.cards.card_controls.next_button_label"),
                        variant: "borderless"
                    }))
                }
                renderProgressIndex() {
                    var e = this.props.currentCardIndex >= this.props.numTermsInSet ? this.props.numTermsInSet : this.props.currentCardIndex + 1,
                        t = r()("CardsList-navControl", "progressIndex");
                    return l.a.createElement("div", {
                        className: t
                    }, l.a.createElement(s.a, {
                        type: "b3"
                    }, e, "/", this.props.numTermsInSet))
                }
                renderAdIndicator() {
                    return l.a.createElement("div", {
                        className: "CardsList-navControl progressIndex"
                    }, l.a.createElement(s.a, {
                        type: "b3"
                    }, l.a.createElement(i.a, {
                        id: "advertisements.ad_attribution"
                    })))
                }
                renderProgressIndicator() {
                    var {
                        isAd: e
                    } = this.props;
                    return e ? this.renderAdIndicator() : this.renderProgressIndex()
                }
                render() {
                    return l.a.createElement(l.a.Fragment, null, this.renderPreviousButton(), this.renderProgressIndicator(), this.renderNextButton())
                }
            }
            u.defaults = {
                isDisabled: !1
            }
        },
        jCse: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            n("5s+n");
            var a = n("9WHe"),
                r = n("HlzF"),
                i = n("n29V"),
                o = !1,
                s = new i.a;

            function A(e, t, n) {
                var a = new r.Howl({
                    src: [e]
                });
                return a.once("load", (() => {
                    t && t(a.duration())
                })), a.once("loaderror", (() => {
                    n && n(e)
                })), a
            }

            function c(e, t) {
                var {
                    onLoad: n,
                    onError: a,
                    onEnd: r,
                    onStop: i
                } = t, o = s.memoize(e, (() => A(e, n, a)));
                return o.once("playerror", (() => {
                    a && a(e)
                })), o.once("end", (() => {
                    r && r(e)
                })), o.once("stop", (() => {
                    i && i(e)
                })), o
            }
            class l {
                constructor() {
                    r.Howler.autoSuspend = !1, r.Howler.autoUnlock = !1
                }
                borrowWebAudioContext() {
                    r.Howler.volume(1);
                    var e = r.Howler.usingWebAudio ? r.Howler.ctx : null;
                    if (!e) return Promise.reject();
                    switch (e.state) {
                        case "suspended":
                            return e.resume().then((() => e));
                        case "running":
                            return Promise.resolve(e);
                        default:
                            return Promise.reject()
                    }
                }
                clearAllFinishListeners() {
                    s.cache.forEach((e => {
                        e.off("end")
                    }))
                }
                preload(e, t) {
                    var {
                        onError: n,
                        onLoad: r
                    } = void 0 === t ? {} : t, i = s.get(e);
                    if (r && i && "loaded" === i.state()) r(i.duration());
                    else try {
                        s.memoize(e, (() => A(e, r, n)))
                    } catch (c) {
                        if (o) return;
                        a.a.warning("AudioPlayer instance failed to loadClip in preload", c, {
                            url: e
                        }), o = !0
                    }
                }
                play(e, t) {
                    var {
                        onError: n,
                        onFinish: r,
                        onStop: i
                    } = void 0 === t ? {} : t;
                    try {
                        c(e, {
                            onError: n,
                            onEnd: r,
                            onStop: i
                        }).play()
                    } catch (o) {
                        a.a.error("AudioPlayer prepareClipToPlay failed in play()", o)
                    }
                }
                loop(e, t) {
                    var {
                        onError: n,
                        onLoop: r,
                        onStop: i
                    } = void 0 === t ? {} : t;
                    try {
                        var o = c(e, {
                                onError: n,
                                onEnd: r,
                                onStop: i
                            }),
                            s = o.play();
                        o.loop(!0, s)
                    } catch (A) {
                        a.a.error("AudioPlayer prepareClipToPlay failed in loop()", A)
                    }
                }
                isPlaying(e) {
                    var t = s.get(e);
                    return !!t && t.playing()
                }
                destruct(e) {
                    var t = s.get(e);
                    t && (t.unload(), s.delete(e))
                }
                stop(e) {
                    var t = s.get(e);
                    t && (t.once("fade", (() => {
                        t.stop(), t.volume(1)
                    })), t.fade(1, 0, 300))
                }
                stopAll() {
                    s.cache.forEach((e => e.stop()))
                }
            }
        },
        jW1p: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        jXaX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("GCXI");

            function r(e, t) {
                if (t === a.kc.WORD) return e.wordEquivalenceKey;
                if (t === a.kc.DEFINITION) return e.definitionEquivalenceKey;
                if (t === a.kc.LOCATION) return e.locationEquivalenceKey;
                throw new Error("Unrecognized term side: " + t)
            }
        },
        k1hW: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            n("rB9j"), n("Rm1S");
            var a = n("T3U7");

            function r(e) {
                var t = window.location.href.match(/[?&]scrlybrkr/);
                return t && Object(a.default)("multiplayer_scrlybrkr", e), t
            }
        },
        k54H: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n("JTJg");
            var a = e => e.get("errors").filterNot((t => e.get("acknowledgedErrors").includes(t.id)))
        },
        "l/PD": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            n("4mDm"), n("3bBZ");
            var a = n("GCXI"),
                r = n("6dIC"),
                i = n("jXaX"),
                o = n("AmF6"),
                s = n("KkDn");
            class A {
                constructor(e) {
                    this.mediaConnectionsMap = new Map;
                    var t = null == e ? void 0 : e.studiableMediaConnections;
                    t && t.forEach((e => {
                        var t = "connectionModelLuid" in e ? e.connectionModelLuid : e.connection_model_id;
                        Object(s.a)(this.mediaConnectionsMap, t, e)
                    }))
                }
                getMediaConnectionByMediaOwnerId(e, t) {
                    var n = [];
                    return (this.mediaConnectionsMap.get(e) || []).filter((e => e.connection_type === t)).forEach((e => {
                        n.push(e)
                    })), n
                }
            }
            n("ToJy"), n("E9XD");
            var c = n("m4Mj"),
                l = n("y571");

            function u(e, t, n) {
                if (void 0 === n && (n = !1), !e) return [];
                var {
                    multipleChoiceOptions: r,
                    studiableItems: i
                } = e, o = function(e, t) {
                    var n = new Map;
                    for (var a of e) {
                        var r = t && "studiableItemLuid" in a ? a.studiableItemLuid : a.studiable_item_id;
                        Object(s.a)(n, r, a)
                    }
                    return n
                }(r, n);
                return i.filter((e => e.type === a.Ob.MULTIPLE_CHOICE_QUESTION)).map((e => {
                    var r = "luid" in e ? e.luid : e.id,
                        i = t.getMediaConnectionByMediaOwnerId(r, a.Pb.MULTIPLE_CHOICE_PROMPT);
                    if (!i && !n) throw new Error("No prompt media found for studiable item " + r);
                    var s = t.getMediaConnectionByMediaOwnerId(r, a.Pb.MULTIPLE_CHOICE_HINT),
                        A = o.get(r) || [];
                    if (!(A && 0 !== A.length || n)) throw new Error("No multiple choice options found for studiable item " + e.id);
                    var u = function(e, t, n) {
                            return n || (null === (t[0] || {
                                rank: 1
                            }).rank ? Object(l.a)(t) : t.sort(((e, t) => (e.rank || 0) - (t.rank || 0)))), t.map(((t, r) => {
                                var i = "luid" in t ? t.luid : t.id,
                                    o = e.getMediaConnectionByMediaOwnerId(i, a.Pb.MULTIPLE_CHOICE_OPTION);
                                if (!o && !n) throw new Error("No option media found for multiple choice option " + t.id);
                                return {
                                    explanationConnectionMedia: e.getMediaConnectionByMediaOwnerId(i, a.Pb.MULTIPLE_CHOICE_OPTION_EXPLANATION),
                                    id: t.id,
                                    isCorrect: t.is_correct || !1,
                                    luid: "luid" in t ? t.luid : void 0,
                                    optionConnectionMedia: o,
                                    rank: t.rank || 1 + r
                                }
                            }))
                        }(t, A, n),
                        d = u.reduce(((e, t) => e + (t.isCorrect ? 1 : 0)), 0);
                    if (0 === d && !n) throw new Error("No correct options found for studiable item " + e.id);
                    return {
                        hasMultipleCorrectOptions: d > 1,
                        hintConnectionMedia: s,
                        id: e.id,
                        luid: "luid" in e ? e.luid : void 0,
                        options: u,
                        promptConnectionMedia: i,
                        questionType: Object(c.a)().multipleChoice,
                        rank: e.rank || 1,
                        studiableItemType: e.type
                    }
                }))
            }
            class d {
                constructor(e, t, n, a) {
                    this.terms = Object(o.a)(e, t, n), this.termsBySideAndEquivalenceKey = new Map, this.studiableItemSourceMaterial = a, this.mediaDataSource = new A(a), r.a.forEach((e => {
                        var t = new Map;
                        this.terms.forEach((n => {
                            var a = Object(i.a)(n, e),
                                r = t.get(a);
                            r || (r = [], t.set(a, r)), r.push(n)
                        })), this.termsBySideAndEquivalenceKey.set(e, t)
                    })), this.studiableMultipleChoiceQuestions = u(this.studiableItemSourceMaterial, this.mediaDataSource)
                }
                hasStudiableItems() {
                    return !!this.studiableItemSourceMaterial && this.studiableItemSourceMaterial.studiableItems.length > 0
                }
                getNumberOfMultipleChoiceStudiableItems() {
                    return this.studiableItemSourceMaterial ? this.studiableItemSourceMaterial.studiableItems.filter((e => e.type === a.Ob.MULTIPLE_CHOICE_QUESTION)).length : 0
                }
                getDistinctNonEmptyElementCountForSide(e) {
                    var t = this.termsBySideAndEquivalenceKey.get(e);
                    if (!t) throw new Error("Missing term side equivalence map for term side: " + e);
                    return t.size - (t.has(null) ? 1 : 0)
                }
                getTermsWithMatchingSide(e, t) {
                    var n = this.termsBySideAndEquivalenceKey.get(t);
                    if (!n) throw new Error("Missing term side equivalence map for term side: " + t);
                    var a = n.get(Object(i.a)(e, t));
                    if (!a) throw new Error("Missing term in list of terms equivalent to itself: " + JSON.stringify(e));
                    return a
                }
            }
        },
        lKDL: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "d", (function() {
                return A
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "g", (function() {
                return u
            }));
            var a = n("mEm4"),
                r = Object(a.a)("GAME_TYPES", {
                    MATCH_TEAM: null,
                    INDIVIDUAL_COMPETITION: null
                }),
                i = (Object.keys(r).map((e => r[e])), Object(a.a)("ACTION_TYPES", {
                    ACKNOWLEDGE_ERROR: null,
                    CLOSE_MODAL: null,
                    DISMISS_NEXT_ACTION_MODAL: null,
                    HANDLE_ERROR: null,
                    HANDLE_ENDED_GAME_NEXT_ACTION: null,
                    MATCHTEAM_NEW_ANSWER: null,
                    MATCHTEAM_NEW_STREAK: null,
                    MERGE_STORE: null,
                    PROCESS_GAME_ERROR: null,
                    REPLAY_GAME: null,
                    SET_STUDENT_URL: null,
                    START_MUSIC: null,
                    UPDATE_GAME_STATE: null,
                    UPDATE_TEAM_STATE: null,
                    SET_SESSION_LUID: null
                })),
                o = {
                    CONNECTED: "connected",
                    DISCONNECTED: "disconnected"
                },
                s = {
                    LOBBY: "lobby",
                    PICK_TEAMS: "pick_teams",
                    ASSIGN_TEAMS: "assign_teams",
                    READY: "ready",
                    PLAYING: "playing",
                    ENDED: "ended"
                },
                A = (s.LOBBY, s.PICK_TEAMS, s.ASSIGN_TEAMS, s.READY, s.PLAYING, s.ENDED, Object(a.a)("ERROR_TYPES", {
                    DUPLICATE_PLAYER_NAME: null,
                    GAME_CREATE_FAILED: null,
                    GAME_REPLAY_FAILED: null,
                    INITIALIZE_SET_ERROR: null,
                    INVALID_GAME_ID: null,
                    INVALID_PLAYER_NAME: null,
                    INVALID_PLAYER_NAME_PROFANE: null,
                    INVALID_PLAYER_NAME_TOO_LONG: null,
                    INVALID_PLAYER_NAME_TOO_SHORT: null,
                    INVALID_PLAYER_NAME_UNKNOWN: null,
                    JOIN_TEAM: null,
                    JOIN_TEAM_ALREADY_ON_TEAM: null,
                    JOIN_TEAM_DOES_NOT_EXIST: null,
                    JOIN_TEAM_FULL: null,
                    TOO_FEW_TERMS: null,
                    UNKNOWN: null
                })),
                c = {
                    de: {
                        alligator: "Krokodile",
                        alpaca: "Alpakas",
                        bear: "Bären",
                        bison: "Bisons",
                        camel: "Kamele",
                        chameleon: "Chamäleons",
                        cheetah: "Geparde",
                        dolphin: "Delfine",
                        eagle: "Adler",
                        fox: "Füchse",
                        frog: "Frösche",
                        giraffe: "Giraffen",
                        hedgehog: "Igel",
                        kangaroo: "Kängurus",
                        koala: "Koalas",
                        lion: "Löwen",
                        lynx: "Luchse",
                        mantaray: "Stechrochen",
                        mountainlion: "Pumas",
                        mustang: "Wildpferde",
                        orca: "Schwertwale",
                        ostrich: "Strauße",
                        ox: "Stiere",
                        panda: "Pandas",
                        peacock: "Pfauen",
                        penguin: "Pinguine",
                        puffin: "Lunde",
                        reindeer: "Rentiere",
                        rhino: "Nashörner",
                        seadragon: "Seedrachen",
                        shark: "Haie",
                        siberiantiger: "Weiße Tiger",
                        trex: "Tyrannosaurus Rex",
                        tiger: "Tiger",
                        turtle: "Meeresschildkröten",
                        unicorn: "Einhörner",
                        wolf: "Wölfe",
                        zebra: "Zebras"
                    },
                    en: {
                        alligator: "Alligators",
                        alpaca: "Alpacas",
                        bear: "Bears",
                        bison: "Bison",
                        camel: "Camels",
                        chameleon: "Chameleons",
                        cheetah: "Cheetahs",
                        dolphin: "Dolphins",
                        eagle: "Bald Eagles",
                        fox: "Foxes",
                        frog: "Frogs",
                        giraffe: "Giraffes",
                        hedgehog: "Hedgehogs",
                        kangaroo: "Kangaroos",
                        koala: "Koalas",
                        lion: "Lions",
                        lynx: "Lynx",
                        mantaray: "Stingrays",
                        mountainlion: "Pumas",
                        mustang: "Mustangs",
                        orca: "Orcas",
                        ostrich: "Ostriches",
                        ox: "Oxen",
                        panda: "Pandas",
                        peacock: "Peacocks",
                        penguin: "Penguins",
                        puffin: "Puffins",
                        reindeer: "Reindeer",
                        rhino: "Rhinos",
                        seadragon: "Sea Dragons",
                        shark: "Sharks",
                        siberiantiger: "Siberian Tigers",
                        trex: "T-Rexes",
                        tiger: "Tigers",
                        turtle: "Sea Turtles",
                        unicorn: "Unicorns",
                        wolf: "Wolves",
                        zebra: "Zebras"
                    },
                    es: {
                        alligator: "Caimanes",
                        alpaca: "Alpacas",
                        bear: "Osos",
                        bison: "Bisontes",
                        camel: "Camellos",
                        chameleon: "Camaleones",
                        cheetah: "Guepardos",
                        dolphin: "Delfines",
                        eagle: "Águilas Calvas",
                        fox: "Zorros",
                        frog: "Ranas",
                        giraffe: "Jirafas",
                        hedgehog: "Erizos",
                        kangaroo: "Canguros",
                        koala: "Koalas",
                        lion: "Leones",
                        lynx: "Linces",
                        mantaray: "Rayas de aguijón",
                        mountainlion: "Pumas",
                        mustang: "Caballos Mesteños",
                        orca: "Orcas",
                        ostrich: "Avestruces",
                        ox: "Toros",
                        panda: "Pandas",
                        peacock: "Pavos Reales",
                        penguin: "Pingüinos",
                        puffin: "Frailecillos",
                        reindeer: "Renos",
                        rhino: "Rinocerontes",
                        seadragon: "Dragones del Mar",
                        shark: "Tiburones",
                        siberiantiger: "Tigres Blancos",
                        trex: "Tiranosaurios Rex",
                        tiger: "Tigres",
                        turtle: "Tortugas Marinas",
                        unicorn: "Unicornios",
                        wolf: "Lobos",
                        zebra: "Cebras"
                    },
                    fr: {
                        alligator: "Crocodiles",
                        alpaca: "Alpagas",
                        bear: "Ours",
                        bison: "Bisons",
                        camel: "Chameaux",
                        chameleon: "Caméléons",
                        cheetah: "Guépards",
                        dolphin: "Dauphins",
                        eagle: "Aigles",
                        fox: "Renards",
                        frog: "Grenouilles",
                        giraffe: "Girafes",
                        hedgehog: "Hérissons",
                        kangaroo: "Kangourous",
                        koala: "Koalas",
                        lion: "Lions",
                        lynx: "Lynx",
                        mantaray: "Raies",
                        mountainlion: "Pumas",
                        mustang: "Mustangs",
                        orca: "Orques",
                        ostrich: "Autruches",
                        ox: "Taureaux",
                        panda: "Pandas",
                        peacock: "Paons",
                        penguin: "Manchots",
                        puffin: "Macareux",
                        reindeer: "Rennes",
                        rhino: "Rhinocéros",
                        seadragon: "Dragons de mer",
                        shark: "Requins",
                        siberiantiger: "Tigres blancs",
                        trex: "Tyrannosaures",
                        tiger: "Tigres",
                        turtle: "Tortues marines",
                        unicorn: "Licornes",
                        wolf: "Loups",
                        zebra: "Zèbres"
                    },
                    id: {
                        alligator: "Buaya",
                        alpaca: "Alpaka",
                        bear: "Beruang",
                        bison: "Bison",
                        camel: "Unta",
                        chameleon: "Bunglon",
                        cheetah: "Citah",
                        dolphin: "Lumba-lumba",
                        eagle: "Elang",
                        fox: "Rubah",
                        frog: "Katak",
                        giraffe: "Jerapah",
                        hedgehog: "Landak",
                        kangaroo: "Kanguru",
                        koala: "Koala",
                        lion: "Singa",
                        lynx: "Lynx",
                        mantaray: "Ikan Pari",
                        mountainlion: "Puma",
                        mustang: "Kuda Mustang",
                        orca: "Orca",
                        ostrich: "Burung Unta",
                        ox: "Banteng",
                        panda: "Panda",
                        peacock: "Merak",
                        penguin: "Penguin",
                        puffin: "Burung Puffin",
                        reindeer: "Rusa Kutub",
                        rhino: "Badak",
                        seadragon: "Naga Laut",
                        shark: "Hiu",
                        siberiantiger: "Harimau Siberia",
                        trex: "Dinosaurus",
                        tiger: "Harimau",
                        turtle: "Penyu",
                        unicorn: "Unikorn",
                        wolf: "Segera",
                        zebra: "Zebra"
                    },
                    it: {
                        alligator: "Alligatori",
                        alpaca: "Alpaca",
                        bear: "Orsi",
                        bison: "Bisonti",
                        camel: "Cammelli",
                        chameleon: "Camaleonti",
                        cheetah: "Ghepardi",
                        dolphin: "Delfini",
                        eagle: "Aquile",
                        fox: "Volpi",
                        frog: "Rane",
                        giraffe: "Giraffe",
                        hedgehog: "Ricci",
                        kangaroo: "Canguri",
                        koala: "Koala",
                        lion: "Leoni",
                        lynx: "Linci",
                        mantaray: "Razze",
                        mountainlion: "Puma",
                        mustang: "Mustang",
                        orca: "Orche",
                        ostrich: "Struzzi",
                        ox: "Buoi",
                        panda: "Panda",
                        peacock: "Pavoni",
                        penguin: "Pinguini",
                        puffin: "Pulcinelle di mare",
                        reindeer: "Renne",
                        rhino: "Rinoceronti",
                        seadragon: "Dragoni foglia",
                        shark: "Squali",
                        siberiantiger: "Tigri bianche",
                        trex: "Tirannosauri",
                        tiger: "Tigri",
                        turtle: "Tartarughe marine",
                        unicorn: "Unicorni",
                        wolf: "Lupi",
                        zebra: "Zebre"
                    },
                    ja: {
                        alligator: "アリゲーター",
                        alpaca: "アルパカ",
                        bear: "クマ",
                        bison: "バイソン",
                        camel: "ラクダ",
                        chameleon: "カメレオン",
                        cheetah: "チーター",
                        dolphin: "イルカ",
                        eagle: "ワシ",
                        fox: "キツネ",
                        frog: "カエル",
                        giraffe: "キリン",
                        hedgehog: "ハリネズミ",
                        kangaroo: "カンガルー",
                        koala: "コアラ",
                        lion: "ライオン",
                        lynx: "リンクス",
                        mantaray: "エイ",
                        mountainlion: "プーマ",
                        mustang: "マスタング",
                        orca: "シャチ",
                        ostrich: "ダチョウ",
                        ox: "ウシ",
                        panda: "パンダ",
                        peacock: "ピーコック",
                        penguin: "ペンギン",
                        puffin: "ツノメドリ",
                        reindeer: "トナカイ",
                        rhino: "サイ",
                        seadragon: "シードラゴン",
                        shark: "サメ",
                        siberiantiger: "ホワイトタイガー",
                        trex: "ティラノサウルス",
                        tiger: "トラ",
                        turtle: "ウミガメ",
                        unicorn: "ユニコーン",
                        wolf: "オオカミ",
                        zebra: "シマウマ"
                    },
                    ko: {
                        alligator: "악어",
                        alpaca: "알파카",
                        bear: "곰",
                        bison: "들소",
                        camel: "낙타",
                        chameleon: "카멜레온",
                        cheetah: "치타",
                        dolphin: "돌고래",
                        eagle: "독수리",
                        fox: "여우",
                        frog: "개구리",
                        giraffe: "기린",
                        hedgehog: "고슴도치",
                        kangaroo: "캥거루",
                        koala: "코알라",
                        lion: "사자",
                        lynx: "스라소니",
                        mantaray: "가오리",
                        mountainlion: "퓨마",
                        mustang: "야생마",
                        orca: "범고래",
                        ostrich: "타조",
                        ox: "황소",
                        panda: "판다",
                        peacock: "공작",
                        penguin: "펭귄",
                        puffin: "바다오리",
                        reindeer: "순록",
                        rhino: "코뿔소",
                        seadragon: "해룡",
                        shark: "상어",
                        siberiantiger: "백호",
                        trex: "티라노사우루스",
                        tiger: "호랑이",
                        turtle: "바다거북",
                        unicorn: "유니콘",
                        wolf: "늑대",
                        zebra: "얼룩말"
                    },
                    la: {
                        alligator: "Crocodili",
                        alpaca: "Alpacae",
                        bear: "Ursi",
                        bison: "Bisones",
                        camel: "Cameli",
                        chameleon: "Chamaeleones",
                        cheetah: "Leopardi",
                        dolphin: "Delphini",
                        eagle: "Aquilae",
                        fox: "Vulpes",
                        frog: "Ranae",
                        giraffe: "Camelopardi",
                        hedgehog: "Ericii",
                        kangaroo: "Macropi",
                        koala: "Phascolarcti",
                        lion: "Leones",
                        lynx: "Lynces",
                        mantaray: "Batoidea",
                        mountainlion: "Pumae",
                        mustang: "Equi",
                        orca: "Orcae",
                        ostrich: "Struthiones",
                        ox: "Boves",
                        panda: "Ailuropodae",
                        peacock: "Pavones",
                        penguin: "Aptenodytes",
                        puffin: "Alcae Arcticae",
                        reindeer: "Rangiferi",
                        rhino: "Rhinocerotes",
                        seadragon: "Phycoduri",
                        shark: "Squatinae",
                        siberiantiger: "Tigres Siberiani",
                        trex: "Tyrannosauri",
                        tiger: "Tigres",
                        turtle: "Testudines Maritimae",
                        unicorn: "Unicornes",
                        wolf: "Lupi",
                        zebra: "Zebrae"
                    },
                    nl: {
                        alligator: "Alligators",
                        alpaca: "Alpaca's",
                        bear: "Beren",
                        bison: "Bizons",
                        camel: "Kamelen",
                        chameleon: "Kameleons",
                        cheetah: "Jachtluipaarden",
                        dolphin: "Dolfijnen",
                        eagle: "Adelaars",
                        fox: "Vossen",
                        frog: "Kikkers",
                        giraffe: "Giraffen",
                        hedgehog: "Egels",
                        kangaroo: "Kangoeroes",
                        koala: "Koalaberen",
                        lion: "Leeuwen",
                        lynx: "Lynxen",
                        mantaray: "Mantaroggen",
                        mountainlion: "Poema's",
                        mustang: "Prairiepaarden",
                        orca: "Orka's",
                        ostrich: "Struisvogels",
                        ox: "Ossen",
                        panda: "Panda's",
                        peacock: "Pauwen",
                        penguin: "Pinguïns",
                        puffin: "Papegaaiduikers",
                        reindeer: "Rendier",
                        rhino: "Neushoorns",
                        seadragon: "Zeedraken",
                        shark: "Haaien",
                        siberiantiger: "Siberische tijgers",
                        trex: "T-rexes",
                        tiger: "Tijgers",
                        turtle: "Zeeschildpadden",
                        unicorn: "Eenhoorns",
                        wolf: "Wolven",
                        zebra: "Zebra's"
                    },
                    pl: {
                        alligator: "Aligatory",
                        alpaca: "Alpaki",
                        bear: "Niedźwiedzie",
                        bison: "Bizony",
                        camel: "Wielbłądy",
                        chameleon: "Kameleony",
                        cheetah: "Gepardy",
                        dolphin: "Delfiny",
                        eagle: "Orły",
                        fox: "Lisy",
                        frog: "Żaby",
                        giraffe: "Żyrafy",
                        hedgehog: "Jeże",
                        kangaroo: "Kangury",
                        koala: "Koala",
                        lion: "Lwy",
                        lynx: "Rysie",
                        mantaray: "Płaszczki manta",
                        mountainlion: "Pumy",
                        mustang: "Mustangi",
                        orca: "Orki",
                        ostrich: "Strusie",
                        ox: "Byki",
                        panda: "Panda",
                        peacock: "Pawie",
                        penguin: "Pingwiny",
                        puffin: "Maskonury",
                        reindeer: "Renifery",
                        rhino: "Nosorożce",
                        seadragon: "Smoki morskie",
                        shark: "Rekiny",
                        siberiantiger: "Białe Tygrysy",
                        trex: "Tyranozaury",
                        tiger: "Tygrysy",
                        turtle: "Żółwie morskie",
                        unicorn: "Jednorożce",
                        wolf: "Wilki",
                        zebra: "Zebry"
                    },
                    pt: {
                        alligator: "Jacarés",
                        alpaca: "Alpacas",
                        bear: "Ursos",
                        bison: "Bisões",
                        camel: "Camelos",
                        chameleon: "Camaleões",
                        cheetah: "Chitas",
                        dolphin: "Golfinhos",
                        eagle: "Águias",
                        fox: "Raposas",
                        frog: "Sapos",
                        giraffe: "Girafas",
                        hedgehog: "Porcos-espinhos",
                        kangaroo: "Cangurus",
                        koala: "Coalas",
                        lion: "Leões",
                        lynx: "Linces",
                        mantaray: "Arraias",
                        mountainlion: "Pumas",
                        mustang: "Mustangues",
                        orca: "Orcas",
                        ostrich: "Avestruzes",
                        ox: "Bois",
                        panda: "Pandas",
                        peacock: "Pavões",
                        penguin: "Pinguins",
                        puffin: "Papagaios-do-mar",
                        reindeer: "Renas",
                        rhino: "Rinocerontes",
                        seadragon: "Dragões-marinhos",
                        shark: "Tubarões",
                        siberiantiger: "Tigres brancos",
                        trex: "Tiranossauros",
                        tiger: "Tigres",
                        turtle: "Tartarugas marinhas",
                        unicorn: "Unicórnios",
                        wolf: "Lobos",
                        zebra: "Zebras"
                    },
                    ru: {
                        alligator: "Аллигаторы",
                        alpaca: "Альпаки",
                        bear: "Медведи",
                        bison: "Бизоны",
                        camel: "Верблюды",
                        chameleon: "Хамелеоны",
                        cheetah: "Гепарды",
                        dolphin: "Дельфины",
                        eagle: "Орлы",
                        fox: "Лисицы",
                        frog: "Лягушки",
                        giraffe: "Жирафы",
                        hedgehog: "Ежи",
                        kangaroo: "Кенгуру",
                        koala: "Коалы",
                        lion: "Львы",
                        lynx: "Рыси",
                        mantaray: "Скаты",
                        mountainlion: "Пумы",
                        mustang: "Мустанги",
                        orca: "Косатки",
                        ostrich: "Страусы",
                        ox: "Быки",
                        panda: "Панды",
                        peacock: "Павлины",
                        penguin: "Пингвины",
                        puffin: "Тупики",
                        reindeer: "Северные олени",
                        rhino: "Носороги",
                        seadragon: "Морские драконы",
                        shark: "Акулы",
                        siberiantiger: "Белые тигры",
                        trex: "Тираннозавры",
                        tiger: "Тигры",
                        turtle: "Морские черепахи",
                        unicorn: "Единороги",
                        wolf: "Волки",
                        zebra: "Зебры"
                    },
                    tr: {
                        alligator: "TİMSAHLAR",
                        alpaca: "ALPAKALAR",
                        bear: "AYILAR",
                        bison: "BİZONLAR",
                        camel: "DEVELER",
                        chameleon: "BUKALEMUNLAR",
                        cheetah: "ÇİTALAR",
                        dolphin: "YUNUSLAR",
                        eagle: "KARTALLAR",
                        fox: "TİLKİLER",
                        frog: "KURBAĞALAR",
                        giraffe: "ZÜRAFALAR",
                        hedgehog: "KİRPİLER",
                        kangaroo: "KANGURULAR",
                        koala: "KOALALAR",
                        lion: "ASLANLAR",
                        lynx: "VAŞAKLAR",
                        mantaray: "VATOZLAR",
                        mountainlion: "PUMALAR",
                        mustang: "MUSTANG'LER",
                        orca: "ORKALAR",
                        ostrich: "DEVE KUŞLARI",
                        ox: "ÖKÜZLER",
                        panda: "PANDALAR",
                        peacock: "TAVUS KUŞLARI",
                        penguin: "PENGUENLER",
                        puffin: "KUTUP MARTILARI",
                        reindeer: "REN GEYİKLERİ",
                        rhino: "GERGEDANLAR",
                        seadragon: "DENİZ EJDERLERİ",
                        shark: "KÖPEK BALIKLARI",
                        siberiantiger: "SİBİRYA KAPLANLARI",
                        trex: "T-REKSLER",
                        tiger: "KAPLANLAR",
                        turtle: "DENİZ KAPLUMBAĞALARI",
                        unicorn: "TEK BOYNUZLU ATLAR",
                        wolf: "KURTLAR",
                        zebra: "ZEBRALAR"
                    },
                    vi: {
                        alligator: "Cá sấu",
                        alpaca: "Lạc đà cừu",
                        bear: "Gấu",
                        bison: "Bò rừng bizon",
                        camel: "Lạc đà",
                        chameleon: "Tắc kè",
                        cheetah: "Báo đốm",
                        dolphin: "Cá heo",
                        eagle: "Đại bàng",
                        fox: "Cáo",
                        frog: "Ếch",
                        giraffe: "Hươu cao cổ",
                        hedgehog: "Nhím gai",
                        kangaroo: "Kangaroo",
                        koala: "Gấu túi",
                        lion: "Sư tử",
                        lynx: "Linh miêu",
                        mantaray: "Cá đuối",
                        mountainlion: "Báo sư tử",
                        mustang: "Ngựa thảo nguyên",
                        orca: "Cá kình",
                        ostrich: "Đà điểu",
                        ox: "Bò",
                        panda: "Gấu trúc",
                        peacock: "Công",
                        penguin: "Chim cánh cụt",
                        puffin: "Hải âu cổ rụt",
                        reindeer: "Tuần lộc",
                        rhino: "Tê giác",
                        seadragon: "Cá rồng biển",
                        shark: "Cá mập",
                        siberiantiger: "Hổ trắng",
                        trex: "Khủng long bạo chúa",
                        tiger: "Hổ",
                        turtle: "Rùa biển",
                        unicorn: "Kỳ lân",
                        wolf: "Sói",
                        zebra: "Ngựa vằn"
                    },
                    "zh-CN": {
                        alligator: "短吻鳄",
                        alpaca: "羊驼",
                        bear: "熊",
                        bison: "野牛",
                        camel: "骆驼",
                        chameleon: "变色龙",
                        cheetah: "猎豹",
                        dolphin: "海豚",
                        eagle: "老鹰",
                        fox: "狐狸",
                        frog: "青蛙",
                        giraffe: "长颈鹿",
                        hedgehog: "刺猬",
                        kangaroo: "袋鼠",
                        koala: "考拉",
                        lion: "狮子",
                        lynx: "山猫",
                        mantaray: "魟",
                        mountainlion: "美洲狮",
                        mustang: "野马",
                        orca: "虎鲸",
                        ostrich: "鸵鸟",
                        ox: "公牛",
                        panda: "熊猫",
                        peacock: "孔雀",
                        penguin: "企鹅",
                        puffin: "海鹦",
                        reindeer: "驯鹿",
                        rhino: "犀牛",
                        seadragon: "海龙",
                        shark: "鲨鱼",
                        siberiantiger: "白虎",
                        trex: "霸王龙",
                        tiger: "老虎",
                        turtle: "海龟",
                        unicorn: "独角兽",
                        wolf: "狼",
                        zebra: "斑马"
                    },
                    "zh-TW": {
                        alligator: "短吻鱷",
                        alpaca: "羊駝",
                        bear: "熊",
                        bison: "野牛",
                        camel: "駱駝",
                        chameleon: "變色龍",
                        cheetah: "獵豹",
                        dolphin: "海豚",
                        eagle: "老鷹",
                        fox: "狐狸",
                        frog: "青蛙",
                        giraffe: "長頸鹿",
                        hedgehog: "刺猬",
                        kangaroo: "袋鼠",
                        koala: "無尾熊",
                        lion: "獅子",
                        lynx: "山貓",
                        mantaray: "魟",
                        mountainlion: "美洲獅",
                        mustang: "野馬",
                        orca: "虎鯨",
                        ostrich: "鴕鳥",
                        ox: "公牛",
                        panda: "熊貓",
                        peacock: "孔雀",
                        penguin: "企鵝",
                        puffin: "海鸚",
                        reindeer: "馴鹿",
                        rhino: "犀牛",
                        seadragon: "海龍",
                        shark: "鯊魚",
                        siberiantiger: "白虎",
                        trex: "霸王龍",
                        tiger: "老虎",
                        turtle: "海龜",
                        unicorn: "獨角獸",
                        wolf: "狼",
                        zebra: "斑馬"
                    }
                },
                l = 12,
                u = 6
        },
        "m/qx": function(e, t, n) {
            "use strict";
            n.r(t)
        },
        mBhD: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            n("4mDm"), n("3bBZ"), n("rB9j"), n("EnZy"), n("UxlC");
            var a = n("nrsj"),
                r = n("TSYQ"),
                i = n.n(r),
                o = n("Pxp3"),
                s = n("vlgG"),
                A = n("6Vsr"),
                c = n("q1tI"),
                l = n.n(c),
                u = n("MwSb"),
                d = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
                m = /[^0-9]/gi;
            class p extends l.a.PureComponent {
                constructor() {
                    super(...arguments), this.state = {
                        cursorPosition: this.props.initialValue.length || 0,
                        value: this.sanitizeValue(this.props.initialValue.split(""))
                    }, this.handlePaste = e => {
                        var {
                            onChange: t
                        } = this.props;
                        if (e.clipboardData) {
                            var n = Object(u.b)(e.clipboardData),
                                a = this.sanitizeValue(n.split(""));
                            this.setState({
                                value: a
                            });
                            var r = Math.min(a.length, 5),
                                {
                                    value: i
                                } = this.state;
                            a.forEach(((e, t) => {
                                i[t] = e
                            })), this.setState({
                                cursorPosition: r,
                                value: i
                            }), t && t(a.join("")), e.preventDefault()
                        }
                    }, this.handleKeyDown = (e, t) => {
                        var n = e,
                            {
                                onChange: a
                            } = this.props,
                            {
                                value: r
                            } = this.state;
                        if (t.keyCode === A.KEY_LEFT) n = Math.max(0, n - 1);
                        else if (t.keyCode === A.KEY_RIGHT) n = Math.min(5, n + 1);
                        else if (t.keyCode === A.KEY_BACK_SPACE) "" === r[n] || void 0 === r[n] ? r[n = Math.max(0, n - 1)] = "" : r[n] = "", r = this.removeGaps(r);
                        else if (t.keyCode === A.KEY_DELETE) r[n] = "", r = this.removeGaps(r);
                        else if ((t.keyCode === A.KEY_TAB || t.keyCode === A.KEY_ENTER || t.keyCode === A.KEY_RETURN) && 6 === r.join("").length) return void(this.props.onSubmit && this.props.onSubmit());
                        this.setState({
                            cursorPosition: n,
                            value: r
                        }), a && a(r.join(""))
                    }, this.handleFocus = e => {
                        this.setState({
                            cursorPosition: e
                        })
                    }, this.handleChange = (e, t) => {
                        var {
                            onChange: n
                        } = this.props, a = e, {
                            value: r
                        } = this.state, i = r[a];
                        /\d/.test(t.target.value) && t.target.value !== i && (r[a] = t.target.value.replace(i, ""), (r = this.removeGaps(r))[a] && (a = Math.min(a + 1, 5)), this.setState({
                            cursorPosition: a,
                            value: r
                        }), n && n(r.join("")))
                    }, this.removeGaps = e => e.join("").split("")
                }
                getDisplayedValue() {
                    var {
                        value: e
                    } = this.state;
                    return e.length < 4 ? e.join("") : this.sanitizeValue(e).map(((e, t) => 3 === t ? "-" + e : e)).join("")
                }
                renderErrorMessage() {
                    return l.a.createElement("div", {
                        className: "StudentGameCodeInput-errorMessage"
                    }, this.props.errorMessage || null)
                }
                renderCharacter(e) {
                    var t, n = (null == (t = this.state.value) ? void 0 : t[e]) || "";
                    return this.props.readOnly ? l.a.createElement("div", {
                        className: "StudentGameCodeInput-readOnlyInput"
                    }, n) : l.a.createElement(s.a, {
                        "aria-label": Object(a.a)("live_game.student.game_code"),
                        autoFocus: e === this.state.cursorPosition,
                        disabled: this.props.disabled,
                        invalid: !!this.props.errorMessage || void 0,
                        label: "_",
                        maxLength: 1,
                        onChange: t => this.handleChange(e, t),
                        onFocus: () => this.handleFocus(e),
                        onKeyDown: t => this.handleKeyDown(e, t),
                        onPaste: this.handlePaste,
                        placeholder: "0",
                        ref: t => t && e === this.state.cursorPosition && t.focus(),
                        type: "number",
                        value: n
                    })
                }
                renderReadOnlyCode() {
                    return l.a.createElement("div", {
                        className: "StudentGameCodeInput StudentGameCodeInput--readOnly"
                    }, l.a.createElement("div", {
                        className: "StudentGameCodeInput-inner"
                    }, l.a.createElement(s.a, {
                        "aria-label": Object(a.a)("live_game.student.game_code"),
                        autoFocus: !0,
                        disabled: this.props.disabled,
                        maxLength: 7,
                        placeholder: "000-000",
                        readOnly: this.props.readOnly,
                        type: "text",
                        value: this.getDisplayedValue()
                    })))
                }
                renderCodeInput() {
                    var e = i()("StudentGameCodeInput-cell", {
                            "is-focused": this.state.cursorPosition <= 2 || this.props.errorMessage
                        }),
                        t = i()("StudentGameCodeInput-cell", {
                            "is-focused": this.state.cursorPosition >= 3 || this.props.errorMessage
                        });
                    return l.a.createElement(o.a, {
                        className: "StudentGameCodeInput--writeable"
                    }, l.a.createElement("div", {
                        className: "StudentGameCodeInput-inner"
                    }, l.a.createElement("div", {
                        className: e
                    }, this.renderCharacter(0), this.renderCharacter(1), this.renderCharacter(2)), l.a.createElement("div", {
                        className: "StudentGameCodeInput-divider"
                    }, "—"), l.a.createElement("div", {
                        className: t
                    }, this.renderCharacter(3), this.renderCharacter(4), this.renderCharacter(5))), this.props.errorMessage ? this.renderErrorMessage() : null)
                }
                render() {
                    return this.props.readOnly ? this.renderReadOnlyCode() : this.renderCodeInput()
                }
                sanitizeValue(e) {
                    return this.convertFullWithCharactersToNumbers(e).replace(m, "").slice(0, 6).split("")
                }
                convertFullWithCharactersToNumbers(e) {
                    return e.map((e => {
                        var t = d.indexOf(e);
                        return -1 === t ? e : t
                    })).join("")
                }
            }
            p.defaultProps = {
                disabled: !1,
                initialValue: "",
                readOnly: !1
            }
        },
        mLAq: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n("TSYQ"),
                r = n.n(a),
                i = n("q1tI"),
                o = n.n(i),
                s = "UIKeyboardInput--large";
            class A extends o.a.PureComponent {
                render() {
                    var e = this.props.type ? r()("UIKeyboardInput", s) : "UIKeyboardInput";
                    return o.a.createElement("kbd", {
                        className: e
                    }, this.props.children)
                }
            }
        },
        mmuN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n("baRz"),
                r = n("q1tI"),
                i = n.n(r),
                o = Object(a.styled)("div")({
                    name: "StatWrapper",
                    class: "s1iozbl1"
                }),
                s = Object(a.styled)("section")({
                    name: "StatTitle",
                    class: "shb807a"
                }),
                A = Object(a.styled)("section")({
                    name: "StatValue",
                    class: "sjbbr3u"
                });

            function c(e) {
                return i.a.createElement(o, null, i.a.createElement(s, null, e.title), i.a.createElement(A, null, e.value), e.icon)
            }
            n("68zn")
        },
        nqhS: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n("t1Ez"),
                r = n("Pxp3"),
                i = n("zt8I"),
                o = n("q1tI"),
                s = n.n(o);

            function A() {
                return s.a.createElement("div", {
                    className: "StudentBlockerView"
                }, s.a.createElement("div", {
                    className: "StudentBlockerView-container"
                }, s.a.createElement(r.a, {
                    className: "StudentBlockerView-heading"
                }, s.a.createElement(a.a, {
                    id: "live_game.student.blocker_view.title"
                })), s.a.createElement(i.a, null, s.a.createElement(a.a, {
                    id: "live_game.student.blocker_view.instructions"
                }))))
            }
        },
        oL8k: function(e, t, n) {
            "use strict";

            function a(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            e.exports = function(e, t) {
                var n;
                void 0 === t && (t = a);
                var r, i = [],
                    o = !1;
                return function() {
                    for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                    return o && n === this && t(a, i) || (r = e.apply(this, a), o = !0, n = this, i = a), r
                }
            }
        },
        ocOa: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a = n("baRz"),
                r = n("qqKc"),
                i = n("t1Ez"),
                o = n("uyLA"),
                s = n("q1tI"),
                A = n.n(s),
                c = n("l6OD"),
                l = n("srU6"),
                u = Object(a.styled)("div")({
                    name: "BottomBarContainer",
                    class: "b1qt1z7o"
                }),
                d = Object(a.styled)("div")({
                    name: "ContentContainer",
                    class: "c15pkzee"
                }),
                m = Object(a.styled)("div")({
                    name: "ActionsContainer",
                    class: "akof69g"
                }),
                p = Object(a.styled)("div")({
                    name: "EmptyGradient",
                    class: "euzjcnf"
                }),
                h = Object(a.styled)("div")({
                    name: "QuestionCount",
                    class: "qilt4qh"
                });

            function g(e) {
                var {
                    actions: {
                        onClick: t
                    },
                    currentQuestionIndex: n,
                    isDisabled: a = !1,
                    totalTermsCount: s,
                    shouldShowCount: g = !1
                } = e, {
                    t: f
                } = Object(o.a)();
                return A.a.createElement(u, {
                    "aria-live": "polite"
                }, A.a.createElement(p, null), A.a.createElement(d, null, g ? A.a.createElement(h, null, A.a.createElement(i.a, {
                    id: "checkpoint.question.bottom_bar.question_count",
                    questionIndex: n,
                    totalTermsCount: s
                })) : null, A.a.createElement(m, null, A.a.createElement(r.b, {
                    disabled: a,
                    isFullWidth: Object(c.c)(Object(l.b)(), "l"),
                    onClick: t,
                    size: "large",
                    text: f("checkpoint.question.bottom_bar.continue")
                }))))
            }
            n("CzCa")
        },
        ou0K: function(e, t, n) {
            "use strict";
            var a = n("lKDL"),
                r = n("zew0");
            t.a = {
                [a.a.ACKNOWLEDGE_ERROR]: r.a,
                [a.a.CLOSE_MODAL]: r.d,
                [a.a.DISMISS_NEXT_ACTION_MODAL]: r.f,
                [a.a.HANDLE_ENDED_GAME_NEXT_ACTION]: r.k,
                [a.a.HANDLE_ERROR]: r.g,
                [a.a.MATCHTEAM_NEW_ANSWER]: r.n,
                [a.a.MATCHTEAM_NEW_STREAK]: r.o,
                [a.a.MERGE_STORE]: r.j,
                [a.a.PROCESS_GAME_ERROR]: r.m,
                [a.a.REPLAY_GAME]: r.c,
                [a.a.SET_STUDENT_URL]: r.s,
                [a.a.UPDATE_GAME_STATE]: r.x,
                [a.a.UPDATE_TEAM_STATE]: r.y,
                [a.a.SET_SESSION_LUID]: r.r
            }
        },
        p8IN: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "g", (function() {
                return s
            })), n.d(t, "e", (function() {
                return A
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "c", (function() {
                return m
            }));
            var a = n("oL8k"),
                r = n.n(a),
                i = n("uR6t"),
                o = r()((e => {
                    var {
                        feedback: {
                            submittedAnswer: t,
                            expectedAnswer: n
                        }
                    } = e;
                    return [t, n].forEach((e => {
                        if ((null == e ? void 0 : e.type) !== i.e.STRING_ANSWER) throw new Error("The Graded Answer passed in does not contain String Answers.")
                    })), {
                        submittedAnswerValue: t.value,
                        expectedAnswerValue: n.value
                    }
                }));

            function s(e) {
                return !!e
            }

            function A(e, t) {
                return t.feedback.expectedAnswer.value === e
            }

            function c(e) {
                return !1 === (null == e ? void 0 : e.isCorrect)
            }

            function l(e, t) {
                var n;
                return (null == t || null == (n = t.feedback.submittedAnswer) ? void 0 : n.value) === e
            }

            function u(e, t) {
                var {
                    submittedAnswer: n
                } = t.feedback;
                return c(t) && (null == n ? void 0 : n.value) === e
            }

            function d(e) {
                return !0 === (null == e ? void 0 : e.isCorrect)
            }

            function m(e) {
                return null === (null == e ? void 0 : e.feedback.submittedAnswer)
            }
        },
        pEZU: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n("4mDm"), n("3bBZ");
            var a = n("srU6"),
                r = n("q1tI"),
                i = n("DzJC"),
                o = n.n(i);

            function s() {
                var e = Object(a.a)(),
                    [t, n] = Object(r.useState)(e.breakpoint);
                return Object(r.useEffect)((() => {
                    var t = o()((() => {
                        n(e.breakpoint)
                    }));
                    return e.addListener(t), () => e.removeListener(t)
                }), [e]), t
            }
        },
        qhN8: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = 20
        },
        qvSQ: function(e, t, n) {
            n("rB9j"), n("UxlC"), n("EnZy"), "undefined" != typeof self && self, e.exports = function(e) {
                function t(a) {
                    if (n[a]) return n[a].exports;
                    var r = n[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.d = function(e, n, a) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: a
                    })
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 0)
            }([function(e, t, n) {
                "use strict";

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var a = t[n];
                                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                            }
                        }
                        return function(t, n, a) {
                            return n && e(t.prototype, n), a && e(t, a), t
                        }
                    }(),
                    i = n(1),
                    o = i.webm,
                    s = i.mp4,
                    A = "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream,
                    c = function() {
                        function e() {
                            var t = this;
                            a(this, e), A ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("muted", ""), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", o), this._addSourceToVideo(this.noSleepVideo, "mp4", s), this.noSleepVideo.addEventListener("loadedmetadata", (function() {
                                t.noSleepVideo.duration <= 1 ? t.noSleepVideo.setAttribute("loop", "") : t.noSleepVideo.addEventListener("timeupdate", (function() {
                                    t.noSleepVideo.currentTime > .5 && (t.noSleepVideo.currentTime = Math.random())
                                }))
                            })))
                        }
                        return r(e, [{
                            key: "_addSourceToVideo",
                            value: function(e, t, n) {
                                var a = document.createElement("source");
                                a.src = n, a.type = "video/" + t, e.appendChild(a)
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                A ? (this.disable(), console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "), this.noSleepTimer = window.setInterval((function() {
                                    document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0))
                                }), 15e3)) : this.noSleepVideo.play()
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                A ? this.noSleepTimer && (console.warn("\n          NoSleep now disabled for older iOS devices.\n        "), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause()
                            }
                        }]), e
                    }();
                e.exports = c
            }, function(e, t, n) {
                "use strict";
                e.exports = {
                    webm: "data:video/webm;base64, GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
                    mp4: "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
                }
            }])
        },
        reil: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        s2Br: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return X
            }));
            n("4mDm"), n("3bBZ");
            var a = n("baRz"),
                r = n("uyLA"),
                i = n("wtEi"),
                o = n("GCXI"),
                s = n("pEZU"),
                A = (n("JfAA"), n("a4W4")),
                c = n("r7gd"),
                l = n("QImf"),
                u = n("q1tI"),
                d = n.n(u),
                m = Object(a.styled)("div")({
                    name: "BarWrapper",
                    class: "bmjchse"
                }),
                p = Object(a.styled)("div")({
                    name: "Bar",
                    class: "b1vqktrn",
                    vars: {
                        "b1vqktrn-0": [e => e.isCorrect ? "" + c.d.$400 : "" + c.g.$500],
                        "b1vqktrn-3": [e => e.height ? e.height + "rem" : "" + l.b.Large]
                    }
                }),
                h = Object(a.styled)(i.c)({
                    name: "BarNum",
                    class: "b10fyxy6"
                }),
                g = Object(a.styled)("div")({
                    name: "BarShadow",
                    class: "b1g29yn5",
                    vars: {
                        "b1g29yn5-0": [e => e.isCorrect ? "  " + c.d.$200 : "" + c.g.$400]
                    }
                }),
                f = Object(a.styled)(i.c)({
                    name: "BarLabel",
                    class: "bu28pbg",
                    vars: {
                        "bu28pbg-0": [e => e.isCorrect ? "" + c.d.$400 : "" + c.g.$500]
                    }
                }),
                _ = Object(a.styled)("span")({
                    name: "Check",
                    class: "c1xz10w8"
                });

            function b(e) {
                var {
                    barHeight: t,
                    isCorrect: n,
                    label: a,
                    numResponse: r
                } = e, i = 7 * t + 2, [o, s] = Object(u.useState)(0), c = parseInt(r.toString(), 10), [l, b] = Object(u.useState)(0), v = e => e * (2 - e), E = 1e3 / 30;
                Object(u.useEffect)((() => {
                    var e = 0,
                        t = Math.round(3),
                        n = setInterval((() => {
                            e++;
                            var a = v(e / t);
                            s(i * a), e === t && clearInterval(n)
                        }), E)
                }), [i]), Object(u.useEffect)((() => {
                    var e = 0,
                        t = Math.round(29.999999999999996),
                        n = setInterval((() => {
                            e++;
                            var a = v(e / t);
                            b(c * a), e === t && clearInterval(n)
                        }), E)
                }), [c]);
                return d.a.createElement(m, null, n ? d.a.createElement(_, null, d.a.createElement(A.b, {
                    icon: "check"
                })) : null, d.a.createElement(p, {
                    height: o,
                    isCorrect: n
                }, d.a.createElement(h, null, Math.floor(l))), d.a.createElement(g, {
                    isCorrect: n
                }, " "), d.a.createElement(f, {
                    isCorrect: n
                }, a))
            }
            n("jW1p");
            var v = Object(a.styled)("div")({
                name: "SummaryBarChartWrapper",
                class: "soibt5w"
            });

            function E(e) {
                var {
                    correctAnswerOption: t,
                    responses: n
                } = e;
                return d.a.createElement(v, null, n.map(((e, a) => {
                    return d.a.createElement(b, {
                        barHeight: e.numResponse / (r = 0, n.forEach((e => {
                            r += e.numResponse
                        })), Math.max(r, 1)),
                        isCorrect: a === (null == t ? void 0 : t.value),
                        key: e.label + "-" + e.numResponse,
                        label: e.label,
                        numResponse: e.numResponse
                    });
                    var r
                })))
            }
            n("OgbW");
            var I = n("hc9g"),
                y = n("l6OD"),
                T = Object(a.styled)("div")({
                    name: "QuestionHeaderSubheader",
                    class: "q1o9600h"
                }),
                C = Object(a.styled)(i.b)({
                    name: "Question",
                    class: "q15l6k7x",
                    vars: {
                        "q15l6k7x-0": [e => e.width]
                    }
                }),
                w = Object(a.styled)(i.b)({
                    name: "DynamicText",
                    class: "du6b07b"
                }),
                O = Object(a.styled)("div")({
                    name: "QuestionText",
                    class: "qnasdrz"
                }),
                S = Object(a.styled)("div")({
                    name: "SummaryBarChartWrapper",
                    class: "s2qjyht"
                }),
                k = Object(a.styled)("div")({
                    name: "Main",
                    class: "m5g3d99"
                });

            function N(e) {
                var {
                    dynamicText: t,
                    gradedAnswer: n,
                    isShowingAnswer: a,
                    isTeacher: i,
                    progress: A,
                    promptSide: c,
                    question: l
                } = e, {
                    t: u
                } = Object(r.a)(), m = Object(s.a)(), p = a && i && Object(y.a)(m, "m") ? "50%" : "100%", h = () => {
                    var e, t = Object(I.i)(l.prompt);
                    return d.a.createElement(O, null, d.a.createElement(T, null, (() => {
                        switch (c) {
                            case o.Mb.DEFINITION:
                                return u("checkpoint.question.subheader.definition");
                            case o.Mb.LOCATION:
                                return u("checkpoint.question.subheader.location");
                            default:
                                return u("checkpoint.question.subheader.word")
                        }
                    })()), d.a.createElement(k, null, d.a.createElement(C, {
                        width: p
                    }, t), (e = null == n ? void 0 : n.feedback.expectedAnswer, a && i ? d.a.createElement(S, null, d.a.createElement(E, {
                        correctAnswerOption: e,
                        responses: [{
                            numResponse: 3,
                            label: u("checkpoint.question.option.label.a")
                        }, {
                            numResponse: 4,
                            label: u("checkpoint.question.option.label.b")
                        }, {
                            numResponse: 1,
                            label: u("checkpoint.question.option.label.c")
                        }, {
                            numResponse: 0,
                            label: u("checkpoint.question.option.label.d")
                        }]
                    })) : null)))
                };
                return d.a.createElement(d.a.Fragment, null, A <= 5 || !i || a ? h() : d.a.createElement(w, null, t))
            }
            n("UOEs");
            var B = n("FvNY"),
                j = n("WHVd"),
                x = n("lX3T"),
                D = n("9WHe"),
                L = n("p8IN"),
                R = Object(a.styled)("div")({
                    name: "AnswerOptions",
                    class: "a9pznao"
                }),
                M = Object(a.styled)("div")({
                    name: "AnswerOption",
                    class: "a15644s"
                }),
                G = Object(a.styled)("div")({
                    name: "HintNumber",
                    class: "h1uqlwz2",
                    vars: {
                        "h1uqlwz2-3": [e => e.isTeacherShowingCorrect ? "#23B26D" : "" + c.j.Neutral300Ink200],
                        "h1uqlwz2-4": [e => e.isTeacherShowingCorrect ? "" + c.j.Neutral100Neutral400 : "" + c.j.Ink100Neutral400]
                    }
                }),
                P = Object(a.styled)("div")({
                    name: "HintWrapper",
                    class: "h7tgct0"
                }),
                V = Object(a.styled)("div")({
                    name: "TermOptionInner",
                    class: "t1eu5hn5"
                });

            function F(e) {
                var {
                    isTeacher: t,
                    gradedAnswer: n,
                    question: a,
                    answerMultipleChoice: i
                } = e, {
                    t: s
                } = Object(r.a)(), c = [s("checkpoint.question.option.label.a"), s("checkpoint.question.option.label.b"), s("checkpoint.question.option.label.c"), s("checkpoint.question.option.label.d")], [l, m] = Object(u.useState)(), p = () => d.a.createElement(P, null, d.a.createElement(A.b, {
                    icon: "checkmark",
                    size: A.a.Small
                })), h = e => {
                    var a = null !== n && Object(L.e)(e, n),
                        r = null !== n && Object(L.h)(e, n),
                        i = t && a;
                    return !t && a ? p() : !t && r ? d.a.createElement(P, null, d.a.createElement(A.b, {
                        icon: "x",
                        size: A.a.Small
                    })) : (c.length < e && D.a.error("incorrect options length"), d.a.createElement(G, {
                        isTeacherShowingCorrect: i
                    }, "" + c[e]))
                }, g = (e, a) => {
                    var r = null !== n && Object(L.e)(a, n),
                        o = null !== n && Object(L.h)(a, n),
                        A = Object(L.g)(n),
                        c = Object(I.d)(e),
                        u = Object(I.i)(e),
                        g = !(!c || u),
                        f = t || void 0 !== l,
                        _ = !t && l && l !== a,
                        b = Object(B.cx)(g ? "i12nc4yu" : null, r ? "c1mhsnwr" : null, o ? "i1mtw7zz" : null, r || o || !A ? null : "id6jaqh", f ? "d1p4okv4" : null, l === a ? "s1ux2k5e" : null, _ ? "u1k5z4nj" : null);
                    return d.a.createElement(M, {
                        "aria-label": s("checkpoint.question.option.aria", {
                            option: a + 1,
                            answer: u
                        }),
                        className: b,
                        "data-testid": "option-" + (a + 1),
                        key: "option-" + a,
                        onClick: () => {
                            return e = a, void(n || (m(e), i(e)));
                            var e
                        },
                        role: "button",
                        tabIndex: A ? void 0 : 0
                    }, d.a.createElement("div", {
                        "aria-hidden": !0
                    }, h(a)), d.a.createElement(V, {
                        "aria-hidden": !0
                    }, ((e, t, n, a) => {
                        var r = Object(I.e)(n),
                            i = a ? "height" : "square",
                            o = a ? "s" : "xs";
                        return a && e ? d.a.createElement(x.a, {
                            clickToZoom: !1,
                            height: Object(y.f)() ? 60 : 120,
                            shape: i,
                            size: o,
                            src: e
                        }) : d.a.createElement(j.b, {
                            clickToZoom: !1,
                            imageHeight: Object(y.f)() ? 60 : 120,
                            imageShape: i,
                            imageSize: o,
                            imageUrl: e,
                            lang: r,
                            text: t
                        })
                    })(c, u, e, g)), d.a.createElement("div", {
                        "aria-hidden": !0
                    }, (e => {
                        if (null !== n && Object(L.e)(e, n) && t) return p()
                    })(a)))
                }, f = a.metadata.answerSide === o.Mb.DEFINITION && a.options.every((e => !Object(I.a)(e))), _ = a.options.some((e => Object(I.b)(e, 150)));
                return d.a.createElement(R, {
                    className: Object(B.cx)(f ? "i1nk0emt" : null, _ ? "f1phyl3z" : null)
                }, a.options.map(((e, t) => g(e, t))))
            }
            n("d3LF");
            var Q = n("qhN8"),
                W = n("VW3V"),
                Z = n("Dmq4"),
                U = n("lKDL"),
                H = n("ocOa"),
                Y = n("LhzM"),
                q = Object(a.styled)("div")({
                    name: "QuestionArea",
                    class: "qji6d8"
                });

            function X(e) {
                var {
                    currentQuestionIndex: t = 1,
                    isTeacher: n,
                    actions: a,
                    gradedAnswer: i,
                    numAnswers: o = "3",
                    question: s,
                    setTitle: A,
                    studyablePath: c
                } = e, {
                    t: l
                } = Object(r.a)(), m = () => {
                    window.location.href = c
                }, [p, h] = Object(u.useState)(), [g, f] = Object(u.useState)(0), [_, b] = Object(u.useState)(0), v = Q.a;
                Object(u.useEffect)((() => {
                    if (null !== i && !n) var e = 0,
                        t = setInterval((() => {
                            b(e += 1), e > 10 && (clearInterval(t), a.updateGameStatus(U.e.ENDED))
                        }), 1e3)
                }), [i]), Object(u.useEffect)((() => {
                    var e = 0,
                        t = setInterval((() => {
                            f(e += 1), e > v && clearInterval(t)
                        }), 1e3)
                }), []), Object(u.useEffect)((() => {
                    g > v && a.answerMultipleChoice({
                        value: p
                    })
                }), [g, p]);
                var E = () => {
                    var e, n;
                    if (g >= 5 && g <= 8 && (e = l("checkpoint.question.header.teacher.choose_correct_answer")), g >= 9 && g <= 12 && (e = l("checkpoint.question.header.teacher.num_answers", o)), g >= 13 && g <= 15 && (n = e = [l("checkpoint.question.header.teacher.random.go"), l("checkpoint.question.header.teacher.random.almost_there"), l("checkpoint.question.header.teacher.random.time_running_out"), l("checkpoint.question.header.teacher.random.faster")][t % 4]), g >= 16) {
                        var a = 21 - g;
                        e = a, n = a
                    }
                    return void 0 !== p && null === i && (n = l("checkpoint.question.header.student.answer_submitted")), null !== i && (n = l(g > 20 && void 0 === p ? "checkpoint.question.header.student.times_up" : "checkpoint.question.header.student.your_answer")), {
                        teacherText: e,
                        studentText: n
                    }
                };
                return d.a.createElement("div", null, n ? d.a.createElement(Z.a, {
                    activityType: W.a.CHECKPOINT,
                    headerText: A,
                    isShowingQuestion: null === i,
                    onClickExitButton: m,
                    shouldShowOptions: !1
                }) : d.a.createElement(Z.a, {
                    activityType: W.a.CHECKPOINT,
                    headerText: E().studentText,
                    isShowingQuestion: null === i,
                    isTeacher: !1,
                    shouldShowOptions: !1
                }), d.a.createElement(q, null, d.a.createElement(N, {
                    dynamicText: E().teacherText,
                    gradedAnswer: i,
                    isShowingAnswer: null !== i,
                    isTeacher: n,
                    progress: g,
                    promptSide: s.metadata.promptSide,
                    question: s
                }), n ? null : d.a.createElement(Y.a, {
                    currentValue: p,
                    gradedAnswer: i,
                    question: s
                }), d.a.createElement(F, {
                    answerMultipleChoice: h,
                    gradedAnswer: i,
                    isTeacher: n,
                    question: s
                })), n ? d.a.createElement(H.a, {
                    actions: {
                        onClick: () => {
                            a.updateGameStatus(U.e.ENDED)
                        }
                    },
                    currentQuestionIndex: t,
                    isDisabled: null === i,
                    shouldShowCount: n,
                    totalTermsCount: 10
                }) : null)
            }
            n("LDH8")
        },
        s343: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        sCw2: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        sK90: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            n("4mDm"), n("3bBZ"), n("zKZe");
            var a = n("GonL"),
                r = n("0muR"),
                i = n("hfUd"),
                o = n("jBF+"),
                s = n("q1tI"),
                A = n.n(s),
                c = n("xYJe"),
                l = n.n(c);

            function u(e) {
                var t, [n, c] = Object(s.useState)(0),
                    [u, d] = Object(s.useState)(!1),
                    m = () => {
                        e.onRestart ? e.onRestart() : (c(0), d(!1))
                    },
                    p = t => {
                        n + t < 0 || (c(n + t), d(!1), e.shouldHideEndCard && n + t >= e.termsCount && m())
                    };
                return e.previewTerms.length ? A.a.createElement("div", {
                    className: "SetTermPreview"
                }, A.a.createElement("div", {
                    className: "SetTermPreviewCards"
                }, A.a.createElement("div", {
                    className: "SetTermPreviewCards-inner"
                }, A.a.createElement("div", {
                    className: "CardsList CardsList--showSingle"
                }, A.a.createElement("div", {
                    className: "CardsList-container"
                }, A.a.createElement(l.a, {
                    onSwipedLeft: () => p(1),
                    onSwipedRight: () => p(-1)
                }, A.a.createElement(i.a, {
                    cards: (t = e.previewTerms, t.map(((t, n) => {
                        var a = {
                            termId: t.id,
                            mightShowHint: 0 === n
                        };
                        return {
                            sides: [Object.assign({}, a, {
                                isWordSide: !0,
                                lang: e.wordLanguage,
                                text: t.word
                            }), Object.assign({}, a, {
                                diagramImage: e.previewDiagramImage,
                                diagramShape: null === e.previewDiagramShapes ? null : e.previewDiagramShapes.find((e => e.termId === t.id)),
                                isWordSide: !1,
                                lang: e.definitionLanguage,
                                photoUrl: t._imageUrl,
                                text: t.definition
                            })]
                        }
                    }))),
                    currentCardIndex: n,
                    isFlipped: u,
                    numTermsInSet: e.termsCount,
                    onClickCard: () => {
                        d(!u), e.onCardFlip && e.onCardFlip()
                    },
                    shouldLoadAd: !1,
                    shouldShowAds: !1,
                    shouldShowCardTooltip: !1,
                    shouldShowCardWithAd: !1,
                    shouldShowTeacherCard: !1,
                    shouldShowUpNextCard: !1,
                    showBoth: !1,
                    supportClickToZoom: e.supportClickToZoom
                }), !e.shouldHideEndCard && n >= e.termsCount ? A.a.createElement(r.a, {
                    isCurrent: !0,
                    isLast: !0,
                    isNext: n === e.termsCount - 1,
                    shouldBeHidden: !1,
                    showBoth: !1
                }, A.a.createElement(a.a, {
                    canAccessStudyableFeatures: !1,
                    isFilteringStarred: !1,
                    isLastCard: !0,
                    numStudiedTerms: e.termsCount,
                    onRestart: m,
                    showVerifiedUI: !1,
                    variant: "sellerHome"
                })) : null, A.a.createElement("div", {
                    className: "SetTermPreview-controls"
                }, A.a.createElement(o.a, {
                    currentCardIndex: n,
                    isDisabled: !1,
                    isFirst: 0 === n,
                    isLast: n === e.termsCount,
                    numTermsInSet: e.termsCount,
                    onClickNextButton: () => p(1),
                    onClickPreviousButton: () => p(-1)
                })))))))) : null
            }
        },
        uAcY: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return l
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "k", (function() {
                return p
            })), n.d(t, "i", (function() {
                return g
            })), n.d(t, "h", (function() {
                return f
            })), n.d(t, "g", (function() {
                return _
            })), n.d(t, "j", (function() {
                return b
            })), n.d(t, "b", (function() {
                return v
            })), n.d(t, "l", (function() {
                return E
            })), n.d(t, "a", (function() {
                return I
            }));
            var a = n("JPcv"),
                r = n("peh1"),
                i = n("GCXI"),
                o = n("/u/z"),
                s = n("hQQp"),
                A = n("wrmd"),
                c = n("E52R"),
                l = Object(r.createSelector)(A.e, (e => e ? e.get("streaks").count() - 1 : 0)),
                u = Object(r.createSelector)([A.e, l], ((e, t) => null == e ? void 0 : e.get("streaks").get(t))),
                d = Object(r.createSelector)(u, (e => e ? e.get("answers").count() : 0)),
                m = Object(r.createSelector)([c.f, u, d, o.b], ((e, t, n, r) => {
                    if (r || !t) return Object(a.Map)();
                    var i = t.get("prompts").get(n);
                    return i ? e.find((e => e.get("id") === i)) : Object(a.Map)()
                })),
                p = Object(r.createSelector)([c.f, u, d], ((e, t, n) => {
                    if (!t) return Object(a.Map)();
                    var r = t.get("prompts").get(n - 1);
                    return e.find((e => e.get("id") === r))
                })),
                h = Object(r.createSelector)([u, d], ((e, t) => e && 0 !== t ? e.get("answers").last() : null)),
                g = Object(r.createSelector)([h, c.f], ((e, t) => {
                    if (!e) return Object(a.Map)();
                    var n = e.get("termId");
                    return t.find((e => e.get("id") === n))
                })),
                f = Object(r.createSelector)([h], (e => !!e && !e.get("isCorrect"))),
                _ = Object(r.createSelector)([l, d], ((e, t) => 0 === e && 0 === t)),
                b = Object(r.createSelector)([h, s.f], ((e, t) => {
                    if (!e) return Object(a.Map)();
                    var n = e.get("playerId");
                    return t.find((e => e.get("id") === n))
                })),
                v = Object(r.createSelector)([d, f], ((e, t) => t ? e - 1 : e)),
                E = Object(r.createSelector)(o.c, (e => {
                    var t = null == e ? void 0 : e.getIn(["options", "promptWith"]);
                    return "word" === t ? i.kc.WORD : "definition" === t ? i.kc.DEFINITION : "location" === t ? i.kc.LOCATION : t
                })),
                I = Object(r.createSelector)(o.c, (e => {
                    var t = null == e ? void 0 : e.getIn(["options", "answerWith"]);
                    return "word" === t ? i.kc.WORD : "definition" === t ? i.kc.DEFINITION : "location" === t ? i.kc.LOCATION : t
                }))
        },
        uBNa: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = n("EzPt");

            function r(e) {
                return Array.from(e)
            }

            function i(e, t) {
                return Object(a.a)(r(e), t)
            }
        },
        vjeg: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            }));
            n("rB9j"), n("EnZy");
            var a = n("lKDL"),
                r = n("2GHK"),
                i = () => {
                    var e = r.QUIZLET_TARGET_LANGUAGE;
                    return "zh" === e ? "zh-" + r.ES_I18N_TARGET_LOCALE.split("-").pop() : e
                };
            t.a = (e, t) => {
                var n = t || i();
                return a.f[n][e]
            }
        },
        wBhD: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("JPcv");

            function r() {
                return Object(a.Map)({
                    acknowledgedErrors: Object(a.List)(),
                    connectionStatuses: Object(a.List)(),
                    errors: Object(a.List)(),
                    studentUrl: "www.quizlet.live",
                    sessionLuid: null
                })
            }
        },
        wrmd: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return A
            })), n.d(t, "g", (function() {
                return c
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "h", (function() {
                return m
            })), n.d(t, "i", (function() {
                return p
            })), n.d(t, "j", (function() {
                return h
            })), n.d(t, "d", (function() {
                return g
            })), n.d(t, "a", (function() {
                return f
            }));
            n("JTJg"), n("ToJy");
            var a = n("JPcv"),
                r = n("lKDL"),
                i = n("/u/z"),
                o = n("hQQp"),
                s = n("peh1"),
                A = (Object(s.createSelector)(i.d, (e => e === r.e.READY)), Object(s.createSelector)(i.d, (e => e !== r.e.PICK_TEAMS))),
                c = Object(s.createSelector)(i.c, (e => null == e ? void 0 : e.get("teams").map((t => t.update("connectionStatus", (() => ((e, t) => t.filter((t => e.get("players").includes(t.get("id")))).every((e => e.get("connectionStatuses").last() === r.b.CONNECTED)) ? r.b.CONNECTED : r.b.DISCONNECTED)(t, e.get("players")))))))),
                l = Object(s.createSelector)(c, (e => !!e && e.every((e => {
                    var t = parseInt(e.get("expectedPlayerCount"), 10);
                    return t && e.get("players").count() === t
                })))),
                u = Object(s.createSelector)([o.d, c], ((e, t) => null == t ? void 0 : t.find((t => t.get("players").includes(e))))),
                d = Object(s.createSelector)([u, o.f], ((e, t) => e && t.filter(((t, n) => e.get("players").includes(n))))),
                m = Object(s.createSelector)([c], (e => null == e ? void 0 : e.find((e => {
                    var t = e.get("streaks").last();
                    return t.get("answers").count() === t.get("prompts").count()
                })))),
                p = Object(s.createSelector)([m, o.f], ((e, t) => e && t.filter(((t, n) => e.get("players").includes(n))))),
                h = Object(s.createSelector)([c], (e => null == e ? void 0 : e.filter((e => {
                    var t;
                    return (null == (t = e.get("streaks").last()) ? void 0 : t.get("answers").count()) > 0
                })).sort(((e, t) => {
                    var n = e.get("streaks").last(),
                        a = t.get("streaks").last(),
                        r = n.get("answers").count(),
                        i = a.get("answers").count();
                    return r === i ? n.get("lastAnsweredTimestamp") < a.get("lastAnsweredTimestamp") ? -1 : 0 : r > i ? -1 : 0
                })))),
                g = Object(s.createSelector)(d, (e => e ? e.filter((e => e.get("connectionStatuses").last() === r.b.DISCONNECTED)) : Object(a.List)())),
                f = e => Object(s.createSelector)(c, (t => {
                    var n = null == t ? void 0 : t.find((t => t.get("players").includes(e)));
                    if (!n) return -1;
                    var a = n.get("streaks");
                    if (a.size < 2) return -1;
                    var r = a.get(a.size - 2);
                    return r.get("prompts").count() - r.get("answers").count()
                }))
        },
        yCO5: function(e, t, n) {
            "use strict";

            function a(e, t) {
                void 0 === t.data && (t.data = {});
                var n = e.delete("playerToken");
                return t.data.storeState = JSON.stringify(n.toJS()), t
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        zew0: function(e, t, n) {
            "use strict";
            n.d(t, "p", (function() {
                return u
            })), n.d(t, "q", (function() {
                return d
            })), n.d(t, "r", (function() {
                return m
            })), n.d(t, "l", (function() {
                return p
            })), n.d(t, "k", (function() {
                return h
            })), n.d(t, "m", (function() {
                return g
            })), n.d(t, "u", (function() {
                return f
            })), n.d(t, "h", (function() {
                return _
            })), n.d(t, "i", (function() {
                return b
            })), n.d(t, "j", (function() {
                return v
            })), n.d(t, "v", (function() {
                return E
            })), n.d(t, "t", (function() {
                return I
            })), n.d(t, "s", (function() {
                return y
            })), n.d(t, "w", (function() {
                return T
            })), n.d(t, "g", (function() {
                return C
            })), n.d(t, "d", (function() {
                return w
            })), n.d(t, "e", (function() {
                return O
            })), n.d(t, "f", (function() {
                return S
            })), n.d(t, "b", (function() {
                return k
            })), n.d(t, "a", (function() {
                return N
            })), n.d(t, "y", (function() {
                return B
            })), n.d(t, "n", (function() {
                return j
            })), n.d(t, "o", (function() {
                return x
            })), n.d(t, "x", (function() {
                return D
            })), n.d(t, "c", (function() {
                return L
            }));
            var a = n("IZIl"),
                r = n("GCXI"),
                i = n("ghQg"),
                o = n("JPcv"),
                s = n("ptxT"),
                A = n("JS/C");
            var c = n("k54H"),
                l = n("5Hwc"),
                u = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("audioUrl", n)
                },
                d = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("shouldHaveSameMascotLang", n)
                },
                m = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("sessionLuid", n.sessionLuid)
                },
                p = e => e.set("isUpsellModalOpen", !0),
                h = e => e.set("isActionModalOpen", !0),
                g = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.update("errors", (e => e.push(new i.a(n.id, n.type, n.message, n.gameId))))
                },
                f = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("shouldShowQuizletLiveMerchandiseModal", n)
                },
                _ = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("gameInstance", Object(o.fromJS)(n))
                },
                b = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("isLoading", n)
                },
                v = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.merge(Object(o.fromJS)(n))
                },
                E = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("shouldPlayMusic", n)
                },
                I = e => e.set("shouldPlayMusic", !0),
                y = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("studentUrl", n)
                },
                T = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.update("connectionStatuses", (e => e.push(n)))
                },
                C = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.update("errors", (e => e.push(n)))
                },
                w = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set(n + "-modal-closed", !0)
                },
                O = e => e.set("isUpsellModalOpen", !1),
                S = e => e.set("isActionModalOpen", !1),
                k = (e, t) => {
                    var {
                        payload: n
                    } = t;
                    return e.set("optionsViewSelectedAnswerSide", n.answerSide).set("optionsViewSelectedPromptSide", n.promptSide)
                },
                N = (e, t) => {
                    var {
                        payload: n
                    } = t, a = Object(c.a)(e).filter((e => 0 === e.type.indexOf(n.type) || e.id === n.id)).map((e => e.id));
                    return e.update("acknowledgedErrors", (e => e.concat(a)))
                },
                B = (e, t) => {
                    var {
                        payload: n
                    } = t, a = Object(o.fromJS)(n);
                    return e.updateIn(["gameState", "teams"], (e => e.map((e => e.get("id") === a.get("id") ? a : e))))
                },
                j = (e, t) => {
                    var {
                        payload: n
                    } = t, {
                        answer: a,
                        roundNum: r,
                        streakNum: i
                    } = n;
                    return e.updateIn(["gameState", "teams"], (e => e.map((e => e.get("players").some((e => e === a.playerId)) ? e.setIn(["streaks", i, "answers", r], Object(o.fromJS)(a)) : e))))
                },
                x = (e, t) => {
                    var {
                        payload: n
                    } = t, {
                        playerId: a,
                        streak: r
                    } = n;
                    return e.updateIn(["gameState", "teams"], (e => e.map((e => e.get("players").some((e => e === a)) ? e.update("streaks", (e => e.push(Object(o.fromJS)(r)))) : e))))
                },
                D = (e, t) => {
                    var {
                        payload: n
                    } = t, i = Object(o.fromJS)(n), c = i.get("diagramImage"), u = i.get("diagramShapes"), d = i.get("set"), m = i.get("terms"), p = i.get("allTerms"), h = i.get("gameInstanceId"), g = Object(l.c)(e), f = e.get("enableStudyLogging"), _ = e.get("studyEventLogger"), b = e.get("studyEventStudyPageVisibilityTracker"), v = e.set("gameState", i.delete("set").delete("allTerms").delete("terms").delete("diagramShapes").delete("diagramImage"));
                    if (d && (v = (v = v.set("set", d)).set("terms", m), !_ || _.studyableId !== d.get("id") || _.game_instance_id !== h)) {
                        var E = function(e) {
                            var t, {
                                    creatorId: n,
                                    studyableId: a,
                                    studyableType: i,
                                    studyEventStudyPageVisibilityTracker: o,
                                    enableStudyLogging: c,
                                    gameInstanceId: l,
                                    gameType: u,
                                    loggerConfigOrLoggers: d
                                } = e,
                                m = new s.a({
                                    modeType: r.Xb.MULTIPLAYER,
                                    selectedOnly: !1,
                                    studyableId: a,
                                    studyableType: i,
                                    embedType: null,
                                    enabled: c,
                                    gameInstanceId: l,
                                    gameType: u
                                });
                            m.logStudyEvent(r.Sb.BEGIN, d, {
                                creatorId: n
                            }), o ? (o.logFn = e => {
                                m.logStudyEvent(e, d)
                            }, t = o) : t = new A.a((e => {
                                m.logStudyEvent(e, d, {
                                    creatorId: n
                                })
                            }));
                            return {
                                studyEventLogger: m,
                                questionEventLogger: m.getQuestionEventLogger(),
                                studyEventStudyPageVisibilityTracker: t
                            }
                        }({
                            creatorId: g,
                            studyableId: d.get("id"),
                            studyableType: r.ec.SET,
                            gameInstanceId: h,
                            studyEventStudyPageVisibilityTracker: b,
                            enableStudyLogging: f,
                            gameType: i.get("type"),
                            loggerConfigOrLoggers: {
                                loggerConfig: Object(a.a)()
                            }
                        });
                        v = (v = (v = v.set("studyEventLogger", E.studyEventLogger)).set("questionEventLogger", E.questionEventLogger)).set("studyEventStudyPageVisibilityTracker", E.studyEventStudyPageVisibilityTracker)
                    }
                    return m && (v = v.set("terms", m)), p && (v = v.set("allTerms", p)), c && (v = v.set("diagramImage", c)), u && (v = v.set("diagramShapes", u)), v
                },
                L = (e, t) => D(e, t).delete("end-game-modal-closed")
        },
        znmY: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = e.get("studyEventLogger");
                return t ? t.logStudyEvent : () => {}
            }

            function r(e) {
                return e.get("questionEventLogger")
            }
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            }))
        },
        zu7w: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            })), n.d(t, "b", (function() {
                return c
            }));
            n("zKZe");
            var a = n("GCXI"),
                r = (n("4OIp"), n("5Mwv"), n("uR6t")),
                i = n("oiBF");

            function o(e) {
                return void 0 === e && (e = {}), Object.assign({
                    mediaType: a.J.TEXT,
                    plainText: "foo",
                    languageCode: a.D.ENGLISH,
                    richText: null,
                    type: r.b.TEXT_ATTRIBUTE
                }, e)
            }

            function s(e) {
                return void 0 === e && (e = {}), Object.assign({
                    type: r.e.STRING_ANSWER,
                    value: "foo"
                }, e)
            }

            function A(e) {
                return void 0 === e && (e = {}), Object.assign({
                    submittedAnswer: s({
                        value: "Submitted"
                    }),
                    expectedAnswer: s({
                        value: "Expected"
                    }),
                    expectedAnswerDescription: {
                        attributes: [o()]
                    }
                }, e)
            }

            function c(e) {
                return void 0 === e && (e = {}), Object.assign({
                    isCorrect: !1,
                    feedback: A({
                        expectedAnswer: Object(i.b)(0),
                        submittedAnswer: Object(i.b)(1)
                    }),
                    gradingSettingsSuggestion: null
                }, e)
            }
        }
    },
    [
        [78, "main", "react", "immutable", "redux", "rich_text_rendering", "common"]
    ]
]);