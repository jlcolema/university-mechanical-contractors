/*

GridSlider v1.3 - for jQuery 1.5+ - May 2012

copyright: Por Design 2012
contact: contact.pordesign@gmail.com
website: http://ether-wp.com/ or http://pordesign.eu/
buy license at: http://codecanyon.net/item/ether-grid-slider-jquery-plugin/1713182

*/

$(document).ready(function(a) {
    if (!jQuery.easing.easeInQuad) {
        jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            swing: function(h, g, j, f, i) {
                return jQuery.easing[jQuery.easing.def](h, g, j, f, i)
            },
            easeInQuad: function(h, g, j, f, i) {
                return f * (g/=i) * g + j
            },
            easeOutQuad: function(h, g, j, f, i) {
                return - f * (g/=i) * (g-2) + j
            },
            easeInOutQuad: function(h, g, j, f, i) {
                if ((g/=i / 2) < 1) {
                    return f / 2 * g * g + j
                }
                return - f / 2 * (--g * (g-2)-1) + j
            },
            easeInCubic: function(h, g, j, f, i) {
                return f * (g/=i) * g * g + j
            },
            easeOutCubic: function(h, g, j, f, i) {
                return f * ((g = g / i-1) * g * g + 1) + j
            },
            easeInOutCubic: function(h, g, j, f, i) {
                if ((g/=i / 2) < 1) {
                    return f / 2 * g * g * g + j
                }
                return f / 2 * ((g -= 2) * g * g + 2) + j
            },
            easeInQuart: function(h, g, j, f, i) {
                return f * (g/=i) * g * g * g + j
            },
            easeOutQuart: function(h, g, j, f, i) {
                return - f * ((g = g / i-1) * g * g * g-1) + j
            },
            easeInOutQuart: function(h, g, j, f, i) {
                if ((g/=i / 2) < 1) {
                    return f / 2 * g * g * g * g + j
                }
                return - f / 2 * ((g -= 2) * g * g * g-2) + j
            },
            easeInQuint: function(h, g, j, f, i) {
                return f * (g/=i) * g * g * g * g + j
            },
            easeOutQuint: function(h, g, j, f, i) {
                return f * ((g = g / i-1) * g * g * g * g + 1) + j
            },
            easeInOutQuint: function(h, g, j, f, i) {
                if ((g/=i / 2) < 1) {
                    return f / 2 * g * g * g * g * g + j
                }
                return f / 2 * ((g -= 2) * g * g * g * g + 2) + j
            },
            easeInSine: function(h, g, j, f, i) {
                return - f * Math.cos(g / i * (Math.PI / 2)) + f + j
            },
            easeOutSine: function(h, g, j, f, i) {
                return f * Math.sin(g / i * (Math.PI / 2)) + j
            },
            easeInOutSine: function(h, g, j, f, i) {
                return - f / 2 * (Math.cos(Math.PI * g / i)-1) + j
            },
            easeInExpo: function(h, g, j, f, i) {
                return g == 0 ? j : f * Math.pow(2, 10 * (g / i-1)) + j
            },
            easeOutExpo: function(h, g, j, f, i) {
                return g == i ? j + f : f * ( - Math.pow(2, -10 * g / i) + 1) + j
            },
            easeInOutExpo: function(h, g, j, f, i) {
                if (g == 0) {
                    return j
                }
                if (g == i) {
                    return j + f
                }
                if ((g/=i / 2) < 1) {
                    return f / 2 * Math.pow(2, 10 * (g-1)) + j
                }
                return f / 2 * ( - Math.pow(2, -10*--g) + 2) + j
            },
            easeInCirc: function(h, g, j, f, i) {
                return - f * (Math.sqrt(1 - (g/=i) * g)-1) + j
            },
            easeOutCirc: function(h, g, j, f, i) {
                return f * Math.sqrt(1 - (g = g / i-1) * g) + j
            },
            easeInOutCirc: function(h, g, j, f, i) {
                if ((g/=i / 2) < 1) {
                    return - f / 2 * (Math.sqrt(1 - g * g)-1) + j
                }
                return f / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + j
            },
            easeInElastic: function(l, i, n, h, m) {
                l = 1.70158;
                var k = 0, j = h;
                if (i == 0) {
                    return n
                }
                if ((i/=m) == 1) {
                    return n + h
                }
                k || (k = m * 0.3);
                if (j < Math.abs(h)) {
                    j = h;
                    l = k / 4
                } else {
                    l = k / (2 * Math.PI) * Math.asin(h / j)
                }
                return - (j * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * m - l) * 2 * Math.PI / k)) + n
            },
            easeOutElastic: function(l, i, n, h, m) {
                l = 1.70158;
                var k = 0, j = h;
                if (i == 0) {
                    return n
                }
                if ((i/=m) == 1) {
                    return n + h
                }
                k || (k = m * 0.3);
                if (j < Math.abs(h)) {
                    j = h;
                    l = k / 4
                } else {
                    l = k / (2 * Math.PI) * Math.asin(h / j)
                }
                return j * Math.pow(2, -10 * i) * Math.sin((i * m - l) * 2 * Math.PI / k) + h + n
            },
            easeInOutElastic: function(l, i, n, h, m) {
                l = 1.70158;
                var k = 0, j = h;
                if (i == 0) {
                    return n
                }
                if ((i/=m / 2) == 2) {
                    return n + h
                }
                k || (k = m * 0.3 * 1.5);
                if (j < Math.abs(h)) {
                    j = h;
                    l = k / 4
                } else {
                    l = k / (2 * Math.PI) * Math.asin(h / j)
                }
                if (i < 1) {
                    return -0.5 * j * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * m - l) * 2 * Math.PI / k) + n
                }
                return j * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * m - l) * 2 * Math.PI / k) * 0.5 + h + n
            },
            easeInBack: function(j, h, l, g, k, i) {
                if (i == undefined) {
                    i = 1.70158
                }
                return g * (h/=k) * h * ((i + 1) * h - i) + l
            },
            easeOutBack: function(j, h, l, g, k, i) {
                if (i == undefined) {
                    i = 1.70158
                }
                return g * ((h = h / k-1) * h * ((i + 1) * h + i) + 1) + l
            },
            easeInOutBack: function(j, h, l, g, k, i) {
                if (i == undefined) {
                    i = 1.70158
                }
                if ((h/=k / 2) < 1) {
                    return g / 2 * h * h * (((i*=1.525) + 1) * h - i) + l
                }
                return g / 2 * ((h -= 2) * h * (((i*=1.525) + 1) * h + i) + 2) + l
            },
            easeInBounce: function(h, g, j, f, i) {
                return f - jQuery.easing.easeOutBounce(h, i - g, 0, f, i) + j
            },
            easeOutBounce: function(h, g, j, f, i) {
                return (g/=i) < 1 / 2.75 ? f * 7.5625 * g * g + j : g < 2 / 2.75 ? f * (7.5625 * (g -= 1.5 / 2.75) * g + 0.75) + j : g < 2.5 / 2.75 ? f * (7.5625 * (g -= 2.25 / 2.75) * g + 0.9375) + j : f * (7.5625 * (g -= 2.625 / 2.75) * g + 0.984375) + j
            },
            easeInOutBounce: function(h, g, j, f, i) {
                if (g < i / 2) {
                    return jQuery.easing.easeInBounce(h, g * 2, 0, f, i) * 0.5 + j
                }
                return jQuery.easing.easeOutBounce(h, g * 2 - i, 0, f, i) * 0.5 + f * 0.5 + j
            }
        })
    }
    /* if (!jQuery.mousewheel) {
        (function(g) {
            var e = ["DOMMouseScroll", "mousewheel"];
            if (g.event.fixHooks) {
                for (var f = e.length; f;) {
                    g.event.fixHooks[e[--f]] = g.event.mouseHooks
                }
            }
            g.event.special.mousewheel = {
                setup: function() {
                    if (this.addEventListener) {
                        for (var b = e.length; b;) {
                            this.addEventListener(e[--b], h, false)
                        }
                    } else {
                        this.onmousewheel = h
                    }
                },
                teardown: function() {
                    if (this.removeEventListener) {
                        for (var b = e.length; b;) {
                            this.removeEventListener(e[--b], h, false)
                        }
                    } else {
                        this.onmousewheel = null
                    }
                }
            };
            g.fn.extend({
                mousewheel: function(b) {
                    return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
                },
                unmousewheel: function(b) {
                    return this.unbind("mousewheel", b)
                }
            });
            function h(c) {
                var l = c || window.event, m = [].slice.call(arguments, 1), b = 0, d = true, n = 0, o = 0;
                c = g.event.fix(l);
                c.type = "mousewheel";
                if (l.wheelDelta) {
                    b = l.wheelDelta / 120
                }
                if (l.detail) {
                    b =- l.detail / 3
                }
                o = b;
                if (l.axis !== undefined && l.axis === l.HORIZONTAL_AXIS) {
                    o = 0;
                    n =- 1 * b
                }
                if (l.wheelDeltaY !== undefined) {
                    o = l.wheelDeltaY / 120
                }
                if (l.wheelDeltaX !== undefined) {
                    n =- 1 * l.wheelDeltaX / 120
                }
                m.unshift(c, b, n, o);
                return (g.event.dispatch || g.event.handle).apply(this, m)
            }
        })(jQuery)
    } */
    if (!a.browser.msie || a.browser.msie && a.browser.version > 8) {
        if (!jQuery.swipe) {
            (function(b) {
                b.fn.swipe = function(d) {
                    var e = {
                        threshold: {
                            x: 30,
                            y: 10
                        },
                        swipeLeft: function() {
                            alert("swiped left")
                        },
                        swipeRight: function() {
                            alert("swiped right")
                        }
                    };
                    var d = b.extend(e, d);
                    if (!this) {
                        return false
                    }
                    return this.each(function() {
                        var l = b(this);
                        var n = {
                            x: 0,
                            y: 0
                        };
                        var p = {
                            x: 0,
                            y: 0
                        };
                        function o(f) {
                            n.x = f.targetTouches[0].pageX;
                            n.y = f.targetTouches[0].pageY
                        }
                        function c(f) {
                            f.preventDefault();
                            p.x = f.targetTouches[0].pageX;
                            p.y = f.targetTouches[0].pageY
                        }
                        function m(g) {
                            var f = n.y - p.y;
                            if (f < e.threshold.y && f > (e.threshold.y*-1)) {
                                changeX = n.x - p.x;
                                if (changeX > e.threshold.x) {
                                    e.swipeLeft()
                                }
                                if (changeX < (e.threshold.x*-1)) {
                                    e.swipeRight()
                                }
                            }
                        }
                        function o(f) {
                            n.x = f.targetTouches[0].pageX;
                            n.y = f.targetTouches[0].pageY;
                            p.x = n.x;
                            p.y = n.y
                        }
                        function k(f) {}
                        this.addEventListener("touchstart", o, false);
                        this.addEventListener("touchmove", c, false);
                        this.addEventListener("touchend", m, false);
                        this.addEventListener("touchcancel", k, false)
                    })
                }
            })(jQuery)
        }
    }
    window.egs = {};
    egs.elem_cfg = {};
    egs.prefix = "ether";
    egs.window_ref = a(window);
    egs.add_prefix = function(b) {
        if (egs.prefix && egs.prefix !== "") {
            return egs.prefix + "-" + b
        } else {
            return b
        }
    };
    egs.log = function(b) {
        !egs.msg ? egs.msg = [b] : egs.msg.push(b);
        !a("body").find("#egs-log").length ? a("body").append('<div id="egs-log" style="font-size: 8pt; position: absolute; top: 0; left: 0; right: 0; background: rgb(0,0,0); z-index: 999999999"></div>') : "";
        a("body").find("#egs-log").append('<p style="margin: 0; padding: 2px 10px; font-size: 9pt; color: #fff;">' + egs.msg.length + ": " + b + "</p>");
        a("body").find("#egs-log").children().length > 10 ? a("body").find("#egs-log").children().eq(0).remove() : ""
    };
    egs.in_view = function(c) {
        var f = c.offset().top;
        var b = c.outerHeight();
        var d = a(window).scrollTop();
        var e = a(window).height();
        if ((f + b < d + e && f + b > d) || (f < d + e && f > d)) {
            return true
        } else {
            return false
        }
    };
    egs.set_slider_window_height = function(c, b) {
        if (b.slider) {
            b.$slider_window.stop(true, true).animate({
                height: b.col_group_elems_height[b.view_pos]
            }, b.scroll_speed).queue(function() {
                if (!b.shift_busy || b.shift_busy === 0) {
                    a(this).css({
                        overflow: "visible"
                    })
                }
                a(this).dequeue()
            })
        }
    };
    egs.apply_shift = function(e, j) {
        var i = ["x", "y", "z"];
        var k = ["slide", "slideIn", "slideOut", "switch", "swap"];
        var g;
        var c;
        var d = 0;
        var m = 0;
        var b = 0;
        var l = 0;
        var h = 1;
        var f = 1;
        if (j.transition === "random") {
            c = true;
            j.transition = k[Math.ceil(Math.random() * k.length-1)]
        }
        if (j.scroll_axis === "random") {
            g = true;
            j.scroll_axis = i[Math.ceil(Math.random() * i.length-1)]
        }
        if (j.scroll_axis === "x") {
            d = 1;
            b = 1
        } else {
            if (j.scroll_axis === "y") {
                m = 1;
                l = 1
            }
        }
        if (j.transition === "slideIn") {
            b = 0;
            l = 0
        } else {
            if (j.transition === "slideOut") {
                d = 0;
                m = 0
            } else {
                if (j.transition === "switch" || j.transition === "swap" || j.transition === "shuffle") {
                    f =- 1
                }
            }
        }
        if (c === true) {
            j.transition = "random"
        }
        if (g === true) {
            j.scroll_axis = "random"
        }
        j.$col_group_elems.eq(j.view_pos).css({
            left: j.shift_dir * j.elem_width * d * h,
            top: j.shift_dir * j.col_group_elems_height[j.view_pos] * m * h,
            visibility: "visible",
            "z-index": 10,
            opacity: 0
        }).animate({
            left: 0,
            top: 0,
            opacity: 1
        }, j.scroll_speed, j.easing).end().eq(j.prev_view_pos).css({
            left: 0,
            top: 0
        }).animate({
            left: - j.shift_dir * j.elem_width * b * f,
            top: - j.shift_dir * j.col_group_elems_height[j.view_pos] * l * f,
            opacity: 0
        }, j.scroll_speed, j.easing, function() {
            a(this).css({
                visibility: "hidden",
                "z-index": -1
            })
        });
        egs.set_slider_window_height(e, j);
        var n = setTimeout(function() {
            j.$slider_window.css({
                overflow: "visible"
            });
            j.shift_busy = 0
        }, j.scroll_speed)
    };
    egs.init_shift = function(c, b, e, d) {
        if (e === "absolute" && d === b.view_pos) {
            return false
        }
        if (b.col_group_elems_count === 1) {
            return false
        }
        if (b.shift_busy !== 1) {
            b.shift_dir = function() {
                if (e === "absolute") {
                    if (d > b.view_pos) {
                        return 1
                    } else {
                        if (d < b.view_pos) {
                            return -1
                        } else {
                            return 0
                        }
                    }
                } else {
                    if (e === "relative") {
                        return d
                    }
                }
            }();
            b.prev_view_pos = b.view_pos;
            b.view_pos = function() {
                if (e === "relative") {
                    if (b.loop === true) {
                        if (b.view_pos + b.shift_dir < 0) {
                            return b.col_group_elems_count-1
                        } else {
                            if (b.view_pos + b.shift_dir > b.col_group_elems_count-1) {
                                return 0
                            } else {
                                return b.view_pos + b.shift_dir
                            }
                        }
                    } else {
                        if (b.loop === false) {
                            if (b.view_pos + b.shift_dir < 0) {
                                return -2
                            } else {
                                if (b.view_pos + b.shift_dir > b.col_group_elems_count-1) {
                                    return -2
                                } else {
                                    return b.view_pos + b.shift_dir
                                }
                            }
                        }
                    }
                } else {
                    if (e === "absolute") {
                        return d
                    }
                }
            }();
            if (b.view_pos!==-2) {
                if (b.ctrl_pag === true) {
                    b.$ctrl_pag_elem.children().removeClass(egs.add_prefix("current")).eq(b.view_pos).addClass(egs.add_prefix("current"))
                }
                b.shift_busy = 1;
                egs.apply_shift(c, b);
                egs.resume_autoplay(c, b)
            } else {
                b.view_pos = b.prev_view_pos
            }
        }
    };
    egs.set_grid_rows = function(e, d) {
        var c;
        var b = egs.add_prefix("first-col");
        d.$col_elems.removeClass(b);
        if (d.grid_height === "auto") {
            for (c = 0; c < d.col_elem_count; c += 1) {
                if (c%d.true_cols === 0) {
                    d.$col_elems.eq(c).addClass(b)
                }
            }
        }
        d.$col_elems.each(function() {
            var f = a(this).find('*[class*="' + egs.add_prefix("media-") + '"]');
            var g = f.find("img");
            if (d.grid_height === "constrain") {
                a(this).css({
                    height: d.col_elem_width * d.grid_height_ratio / 100,
                    overflow: "hidden"
                })
            } else {
                if (typeof d.grid_height === "number") {
                    a(this).css({
                        height: d.grid_height,
                        overflow: "hidden"
                    })
                }
            }
            if (f.length > 0) {
                if (g.length > 0) {
                    egs.on_image_load_end(g, function() {
                        egs.init_media(g, d.image_stretch_mode, f, d.media_height, d.media_height_ratio)
                    })
                } else {}
            }
        })
    };
    egs.init_media = function(b, j, c, i, k) {
        b.attr("style", "");
        if (i !== "auto") {
            if (i === "constrain") {
                c.height(c.width() * k / 100)
            } else {
                if (typeof parseInt(i) === "number" && i / i === 1) {
                    c.height(i)
                }
            }
        } else {
            if (c.height() > c.parent().height()) {
                c.height(c.parent().height())
            }
        }
        var g = c.height();
        var n = c.width();
        var l = b.width();
        var e = b.height();
        var f;
        var d;
        var m;
        switch (j) {
        case"x":
            if (e > g) {
                b.attr("style", "margin-top: " + ( - (e - g) / 2) + "px !important")
            } else {
                b.attr("style", "margin-top: " + ((g - e) / 2) + "px !important")
            }
            break;
        case"y":
            if (l > n) {
                b.attr("style", "margin-left: " + ( - (l - n) / 2) + "px !important")
            }
            break;
        case"fill":
            f = l / e;
            d = n / g;
            m = d / f;
            if (m >= 1) {
                b.attr("style", "width: " + n + "px; height: " + (n / f) + "px; margin-top: " + ( - (n / f - g) / 2) + "px !important;")
            } else {
                b.attr("style", "width: " + (g * f) + "px; height: " + g + "px; margin-left: " + ( - (g * f - n) / 2) + "px !important;")
            }
            break;
        case"fit":
            b.attr("style", "margin-top: " + ((g - e) / 2) + "px !important;")
        }
    };
    egs.init_slider_functions = function(c, b) {
        if (b.col_group_elems_count > 1) {
            egs.init_autoplay(c, b);
            if (!a.browser.msie || a.browser.msie && a.browser.version > 8) {
                c.swipe({
                    swipeLeft: function() {
                        egs.init_shift(c, b, "relative", 1)
                    },
                    swipeRight: function() {
                        egs.init_shift(c, b, "relative", -1)
                    }
                })
            }
            /* c.bind("mousewheel", function(f, h, e, d) {
                var g =- 1;
                if (d !== 0 && d < 0 || e !== 0 && e > 0) {
                    g = 1
                }
                egs.init_shift(c, b, "relative", g);
                f.preventDefault()
            }).bind("mouseenter", function() {
                egs.pause_autoplay(c, b)
            }).bind("mouseleave", function() {
                egs.resume_autoplay(c, b)
            }); */
            if (b.$ctrl_wrap) {
                b.$ctrl_wrap.css({
                    "margin-left": function() {
                        return - a(this).outerWidth() / 2
                    },
                    "margin-top": function() {
                        return - a(this).outerHeight() / 2 - b.col_spacing_size / 2 * b.col_spacing_enable
                    }
                }).find("." + egs.add_prefix("ctrl")).attr("unselectable", "on").css({
                    "-ms-user-select": "none",
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none",
                    "user-select": "none"
                }).bind("click", function() {
                    this.onselectstart = function() {
                        return false
                    };
                    egs.init_shift(c, b, a(this).data("shifttype"), a(this).data("shiftdest"));
                    return false
                })
            }
            if (b.ctrl_external.length > 0) {
                b.ctrl_external.forEach(function(f) {
                    var e = f[0];
                    var d = f[1];
                    var g = typeof d === "number" ? "absolute": "relative";
                    e.attr("data-shifttype", g).attr("data-shiftdest", d === "prev" ? "-1" : "1").bind("click", function(h) {
                        if (a(this).data("shiftdest") <= b.col_group_elems_count) {
                            egs.init_shift(e, b, a(this).data("shifttype"), a(this).data("shiftdest"));
                            h.preventDefault()
                        }
                    })
                })
            }
        }
    };
    egs.set_col_groups = function(e, d) {
        if (d.slider) {
            var c;
            var b = egs.add_prefix("col-group");
            if (d.$col_group_elems && d.$col_group_elems.length > 0) {
                d.$col_elems.unwrap()
            }
            for (c = 0; c < d.col_elem_count; c += d.col_group_elems_capacity) {
                a('<div class="' + b + '"></div>').appendTo(d.$col_elems_wrap).append(function() {
                    if (c + d.col_group_elems_capacity < d.col_elem_count) {
                        return d.$col_elems_wrap.children().slice(0, d.col_group_elems_capacity)
                    } else {
                        return d.$col_elems_wrap.children().slice(0, d.col_elem_count - c)
                    }
                })
            }
            d.$col_group_elems = e.find("." + b);
            d.$col_group_elems.eq(d.view_pos).css({
                "z-index": 1,
                visibility: "visible"
            });
            d.col_group_elems_height = [];
            d.$col_group_elems.each(function(f) {
                d.col_group_elems_height.push(d.$col_group_elems.eq(f).outerHeight() - d.col_spacing_size * d.col_spacing_enable)
            })
        }
    };
    egs.update_slider_ctrl = function(c, b) {
        if (b.slider && b.ctrl_active) {
            if (b.ctrl_pag === true) {
                b.$ctrl_pag_elem.children().eq(b.view_pos).addClass(egs.add_prefix("current")).end().css({
                    display: "block"
                }).slice(b.col_group_elems_count).css({
                    display: "none"
                }).end().end().css({
                    width: function() {
                        return b.col_group_elems_count * a(this).children().outerWidth(true)
                    }
                })
            }
            if (b.ctrl_arrows === true && b.ctrl_pag === true) {
                b.$ctrl_wrap.css({
                    width: function() {
                        if (b.ctrl_pag && b.ctrl_arrows && b.$ctrl_pag_elem.outerWidth() > b.$ctrl_car_elem.outerWidth()) {
                            return b.$ctrl_pag_elem.outerWidth()
                        } else {
                            return b.$ctrl_car_elem.outerWidth()
                        }
                    },
                    "margin-left": function() {
                        return - a(this).outerWidth() / 2
                    }
                })
            } else {
                b.$ctrl_wrap.css({
                    width: b.ctrl_car_elem_width
                })
            }
        }
    };
    egs.init_slider_ctrl = function(f, e) {
        if (e.ctrl_arrows === true || e.ctrl_pag === true) {
            e.ctrl_active = true
        } else {
            return false
        }
        var b = egs.add_prefix("ctrl-wrap");
        var d = egs.add_prefix("ctrl");
        var h = egs.add_prefix("ctrl-pag");
        var c = egs.add_prefix("ctrl-car");
        var g = egs.add_prefix("next");
        var i = egs.add_prefix("prev");
        a('<div class="' + b + '"></div>').appendTo(f);
        e.$ctrl_wrap = f.find("." + b);
        if (e.ctrl_always_visible === false) {
            e.$ctrl_wrap.hide();
            f.bind("mouseenter", function() {
                e.$ctrl_wrap.stop(true, true).fadeIn(500)
            }).bind("mouseleave", function() {
                e.$ctrl_wrap.stop(true, true).delay(500).fadeOut(500)
            })
        }
        if (e.ctrl_arrows === true) {
            e.$ctrl_wrap.append('<div class="' + c + '"><div class="' + d + " " + i + '" data-shifttype="relative" data-shiftdest="-1"></div><div class="' + g + " " + d + '" data-shifttype="relative" data-shiftdest="1"></div></div>');
            e.$ctrl_car_elem = e.$ctrl_wrap.find("." + c);
            e.ctrl_car_elem_width = e.$ctrl_car_elem.outerWidth()
        }
        if (e.ctrl_pag === true) {
            e.$ctrl_wrap.append(function() {
                var k;
                var j = "";
                j += '<div class="' + h + '">';
                for (k = 0; k < e.col_elem_count; k += 1) {
                    j += '<div class="' + d + '" data-shifttype="absolute" data-shiftdest="' + k + '"></div>'
                }
                j += "</div>";
                return j
            });
            e.$ctrl_pag_elem = e.$ctrl_wrap.find("." + h);
            e.ctrl_pag_elem_width = e.$ctrl_pag_elem.outerWidth()
        }
        egs.update_slider_ctrl(f, e)
    };
    egs.init_load_overlay = function(c, b) {};
    egs.init_slider_structure = function(d, c) {
        var e;
        var b;
        var f;
        if (c.slider === true) {
            e = egs.add_prefix("slider");
            b = egs.add_prefix("slider-window");
            f = egs.add_prefix("load-overlay");
            d.addClass(e).children().wrapAll('<div class="' + b + '"></div>');
            c.$slider_window = d.find("." + b);
            c.$slider_window.css({
                height: 20,
                overflow: "hidden"
            }).append(function() {
                if (a(this).find("." + f).length === 0) {
                    return '<div class="' + f + '"></div>'
                }
            });
            c.$slider_window.find(f).show();
            egs.on_images_load_end(d, c, function() {
                egs.set_col_groups(d, c);
                c.$slider_window.css({
                    overflow: "hidden"
                }).children("." + f).delay(c.scroll_speed).fadeOut(1000).end().queue(function() {
                    a(this).find("." + f).remove().css({
                        overflow: "visible"
                    }).dequeue()
                });
                egs.set_slider_window_height(d, c)
            });
            egs.init_slider_ctrl(d, c);
            egs.init_slider_functions(d, c)
        }
    };
    egs.get_grid_data = function(c, b) {
        b.elem_width = c.outerWidth();
        b.$col_elems_wrap = c.find("." + egs.add_prefix("cols")).eq(0);
        b.$col_elems = function() {
            if (!b.$col_elems_wrap.children("." + egs.add_prefix("col")).length) {
                return b.$col_elems_wrap.children().children("." + egs.add_prefix("col"))
            } else {
                return b.$col_elems_wrap.children()
            }
        }();
        b.col_elem_count = b.$col_elems.length;
        b.col_elem_width = b.$col_elems.outerWidth();
        b.img_count = c.find("img").length;
        b.true_cols = Math.round(b.elem_width / b.col_elem_width);
        if (a(window).width() < 580) {
            if (!b.original_rows) {
                b.original_rows = b.rows
            }
            b.rows = 1
        }
        if (a(window).width() > 580 && typeof b.original_rows === "number" && b.rows !== b.original_rows) {
            b.rows = b.original_rows
        }
        b.col_group_elems_capacity = b.rows * b.true_cols;
        b.col_group_elems_count = Math.ceil(b.col_elem_count / b.col_group_elems_capacity);
        if (b.view_pos >= b.col_group_elems_count) {
            b.view_pos = 0
        }
    };
    egs.generate_rules = function(d) {
        var c = "";
        for (var b in d) {
            c += b + " { \n";
            for (var e in d[b]) {
                c += "	" + e + ": " + d[b][e] + "; \n"
            }
            c += "} \n"
        }
        return c
    };
    egs.generate_stylesheet_content = function(b, f) {
        var k = "";
        var j = {};
        var d = {};
        var e = egs.add_prefix("grid");
        var c = egs.add_prefix("cols");
        var h = egs.add_prefix("col");
        var g = egs.add_prefix("col");
        var i = function() {
            return "asdf"
        };
        if (f.col_spacing_size !== 30 && f.col_spacing_enable !== 0) {
            j["." + e + f.elem_selector + " ." + c] = {
                margin: - (f.col_spacing_size / 2) + "px"
            };
            j["." + e + f.elem_selector + " ." + c + " ." + h] = {
                padding: (f.col_spacing_size / 2) + "px"
            };
            k += egs.generate_rules(j);
            if (a.browser.msie && parseInt(a.browser.version, 10) === 7) {
                d["." + g + ".cols-wrap"] = {
                    margin: - (f.col_spacing_size / 2) + "px !important"
                }, d["." + g + ".cols-wrap ." + h + " > *:first-child"] = {
                    padding: (f.col_spacing_size / 2) + "px !important"
                };
                k += egs.generate_rules(d)
            }
        }
        if (f.width !== "auto") {
            if (typeof f.width === "number") {
                f.width += "px"
            }
            k += f.elem_selector + " { width: " + f.width + "; }"
        }
        return k
    };
    egs.init_gallery_title = function(c, b) {
        var e = c.find("img");
        var d = egs.add_prefix("img-title");
        e.each(function() {
            if (a(this).siblings("." + d).length === 0) {
                var j = a(this).attr("title");
                var i = a(this).attr("alt");
                var f = "";
                if (j !== undefined) {
                    f = j
                } else {
                    if (i !== undefined) {
                        f = i
                    }
                }
                if (f !== "") {
                    a('<span class="' + d + '">' + f + "</span>").appendTo(a(this).parent());
                    var h = a(this).siblings("." + d);
                    var g = h.outerHeight();
                    h.css({
                        opacity: 0,
                        bottom: - g
                    });
                    a(this).parent().on("mouseenter", function() {
                        h.stop(true, true).animate({
                            opacity: 1,
                            bottom: 0
                        }, 500)
                    }).bind("mouseleave", function() {
                        h.delay(250).animate({
                            opacity: 0,
                            bottom: - g
                        }, 500)
                    })
                }
            }
        })
    };
    egs.on_images_load_end = function(e, b, i) {
        if (b.img_count > 0) {
            if (b.all_images_loaded !== true) {
                var f = 0;
                var d = 0;
                var h = 0;
                var g = e.find("img");
                var c = g.length;
                g.each(function(j) {
                    a(this).bind("load", function() {
                        f += 1;
                        if ((f === c && d === 0)) {
                            d = 1;
                            b.all_images_loaded = true;
                            i ? i(e, b) : ""
                        }
                    }).bind("error", function() {
                        h += 1;
                        a(this).unbind("error").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNkI5RDRFNjFBQzExRTE5MjJDRjRGMUM2MTdDODUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwNkI5RDRGNjFBQzExRTE5MjJDRjRGMUM2MTdDODUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA2QjlENEM2MUFDMTFFMTkyMkNGNEYxQzYxN0M4NTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2QjlENEQ2MUFDMTFFMTkyMkNGNEYxQzYxN0M4NTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4G1oNaAAAABlBMVEX///8AAABVwtN+AAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC")
                    });
                    if ((typeof this.complete != "undefined" && this.complete) || (typeof this.naturalWidth != "undefined" && this.naturalWidth > 0)) {
                        a(this).trigger("load").unbind("load")
                    }
                })
            } else {
                i ? i(e, b) : ""
            }
        } else {
            i ? i(e, b) : ""
        }
    };
    egs.on_image_load_end = function(b, c) {
        b.each(function() {
            a(this).bind("load", function() {
                c()
            }).bind("error", function() {
                a(this).unbind("error").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNkI5RDRFNjFBQzExRTE5MjJDRjRGMUM2MTdDODUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwNkI5RDRGNjFBQzExRTE5MjJDRjRGMUM2MTdDODUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA2QjlENEM2MUFDMTFFMTkyMkNGNEYxQzYxN0M4NTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2QjlENEQ2MUFDMTFFMTkyMkNGNEYxQzYxN0M4NTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4G1oNaAAAABlBMVEX///8AAABVwtN+AAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC")
            });
            if ((typeof this.complete != "undefined" && this.complete) || (typeof this.naturalWidth != "undefined" && this.naturalWidth > 0)) {
                a(this).trigger("load").unbind("load")
            }
        })
    };
    egs.update_elem = function(c, b) {
        egs.get_grid_data(c, b);
        egs.set_grid_rows(c, b);
        if (b.gallery_img_title === true) {
            egs.init_gallery_title(c, b)
        }
        if (b.slider === true) {
            egs.set_col_groups(c, b);
            egs.set_slider_window_height(c, b);
            egs.update_slider_ctrl(c, b)
        }
    };
    egs.add_elements = function(d, c, b, f) {
        var e = new RegExp(egs.prefix + "-id-(\\d+)");
        d.each(function() {
            var g = egs.elem_cfg[a(this).attr("class").match(e)[1]];
            c.each(function() {
                var h = a('<div class="' + egs.add_prefix("col") + '"></div>').append(a(this).clone(true, true));
                if (g.slider === true) {
                    if (g.$col_group_elems.eq(-1).children().length < g.col_group_elems_capacity) {
                        h.appendTo(g.$col_group_elems.eq(-1)).hide().fadeIn(500)
                    } else {
                        a('<div class="' + egs.add_prefix("col-group") + '"></div>').appendTo(g.$col_elems_wrap);
                        h.appendTo(g.$col_elems_wrap.children().eq(-1)).hide().fadeIn(500)
                    }
                } else {
                    h.appendTo(g.$col_elems_wrap).hide().fadeIn(500)
                }
            });
            egs.update_elem(g.$elem, g);
            if (f) {
                f()
            }
        });
        if (b === true) {
            c.remove()
        }
    };
    egs.remove_elements = function(b, d, e) {
        var c = new RegExp(egs.prefix + "-id-(\\d+)");
        b.each(function() {
            var f = egs.elem_cfg[a(this).attr("class").match(c)[1]];
            if (typeof d === "number") {
                if (f.$col_elems.eq(d).length > 0) {
                    f.$col_elems.eq(d).remove()
                }
            } else {
                d.forEach(function(g) {
                    if (f.$col_elems.eq(d[g]).length > 0) {
                        f.$col_elems.eq(d[g]).remove()
                    }
                })
            }
            if (f.$col_group_elems.eq(-1).children().length === 0) {
                f.$col_group_elems.eq(-1).remove()
            }
            egs.update_elem(a(this), f);
            if (e) {
                e()
            }
        })
    };
    egs.pause_autoplay = function(c, b) {
        b.autoplay_active = 0;
        clearTimeout(b.autoplay_stamp)
    };
    egs.resume_autoplay = function(c, b) {
        clearTimeout(b.autoplay_stamp);
        if (b.autoplay_enable === true && b.force_autoplay_pause !== 1) {
            b.autoplay_active = 1;
            b.autoplay_stamp = setTimeout(function() {
                egs.init_shift(c, b, "relative", b.autoplay_shift_dir)
            }, b.autoplay_interval * 1000)
        }
    };
    egs.init_autoplay = function(c, b) {
        if (b.autoplay_enable === true) {
            a(window).bind("load", function() {
                if (egs.in_view(c)) {
                    egs.resume_autoplay(c, b)
                }
            }).bind("blur", function() {
                egs.pause_autoplay(c, b)
            }).bind("focus", function() {
                egs.resume_autoplay(c, b)
            }).bind("scroll", function() {
                if (!egs.in_view(c)) {
                    if (b.autoplay_active === 1 && b.autoplay_enable === true) {
                        egs.pause_autoplay(c, b)
                    }
                } else {
                    if (b.autoplay_active !== 1 && b.autoplay_enable === true) {
                        egs.resume_autoplay(c, b)
                    }
                }
            })
        } else {
            clearTimeout(b.autoplay_stamp);
            b.autoplay_active = 0
        }
    };
    egs.class_string_from_arr = function(c) {
        var b = "";
        c.forEach(function(d) {
            b += egs.add_prefix(d) + " "
        });
        return b
    };
    egs.init_grid_structure = function(d, c) {
        var e = function() {
            var f = [egs.add_prefix("grid"), egs.add_prefix("scroll-axis-" + c.scroll_axis), egs.add_prefix("grid-height-" + c.grid_height), egs.add_prefix("image-stretch-mode-" + c.image_stretch_mode), egs.add_prefix("align" + c.align)];
            return f.join(" ")
        };
        var b = function() {
            var f = [egs.add_prefix("cols"), egs.add_prefix("cols-" + c.cols), egs.add_prefix("rows-" + c.rows), egs.add_prefix("spacing-" + (c.col_spacing_enable === true ? 1 : 0))];
            return f.join(" ")
        };
        if (egs.browser_msie_7) {
            d.addClass(egs.add_prefix("ie7-grid-fix"))
        }
        if (d.find("." + egs.add_prefix("cols")).length === 0) {
            if (c.hide_grid_cell_overflow === true) {
                d.children().each(function() {
                    if (a(this).prop("tagName") === "IMG") {
                        a(this).wrap('<span class="' + egs.add_prefix("hide-grid-cell-overflow") + '"></span>')
                    } else {
                        if (a(this).children().length === 1 && a(this).children().prop("tagName") === "IMG" && a(this).css("overflow") !== "hidden") {
                            a(this).css({
                                overflow: "hidden"
                            })
                        }
                    }
                })
            }
            d.addClass(e()).children().wrapAll('<div class="' + b() + '"></div>').wrap('<div class="' + egs.add_prefix("col") + '"></div>')
        }
        if (!egs.css) {
            egs.css = ""
        }
        egs.css += egs.generate_stylesheet_content(d, c);
        a(egs.style_destination).find("." + egs.add_prefix("gridslider-custom-styles")).remove().end().append('<style class="' + egs.add_prefix("gridslider-custom-styles") + '">' + egs.css + "</style>");
        egs.get_grid_data(d, c);
        egs.set_grid_rows(d, c);
        if (c.gallery_img_title === true) {
            egs.init_gallery_title(d, c)
        }
    };
    egs.assign_gridslider_id = function() {
        var b = Math.round(Math.random() * 10000);
        if (!egs.elem_cfg[b]) {
            return b
        } else {
            egs.assign_gridslider_id();
            return false
        }
    };
    egs.init_gridslider = function(c, b) {
        if (!c.attr("data-egs")) {
            c.attr("data-egs", true);
            if (!egs.style_destination) {
                if (a.browser.msie && a.browser.version < 9) {
                    egs.style_destination = "body"
                } else {
                    egs.style_destination = "head"
                }
            }
            if (egs.browser_msie_7 === undefined) {
                egs.browser_msie_7 = (a.browser.msie && parseInt(a.browser.version, 10) === 7)
            }
            if (!b.elem_id) {
                b.elem_id = egs.assign_gridslider_id();
                c.addClass(egs.add_prefix("id-" + b.elem_id))
            }
            b.$elem = c;
            if (!b.defaults) {
                b.defaults = jQuery.extend({}, true, b)
            }
            egs.elem_cfg[b.elem_id] = b;
            egs.init_grid_structure(c, b);
            egs.init_slider_structure(c, b);
            a(window).bind("resize.egs", function() {
                egs.update_elem(c, b)
            })
        } else {}
    };
    egs.uninit_gridslider = function(d) {
        var b = egs.elem_cfg[d];
        var c = ["scroll-axis-", "grid-height-", "image-stretch-mode-", "align"];
        if (b.slider == 0) {
            b.$col_elems.children().unwrap().unwrap()
        } else {
            if (b.slider == 1) {
                b.$col_elems.children().unwrap().unwrap().unwrap().unwrap();
                if (b.$ctrl_wrap && b.$ctrl_wrap.length > 0) {
                    b.$ctrl_wrap.remove()
                }
            }
        }
        if (b.gallery_img_title == 1) {
            b.$elem.find("." + egs.add_prefix("img-title")).remove()
        }
        c.forEach(function(f) {
            var e = b.$elem.prop("class");
            var g = new RegExp(egs.add_prefix(f + "\\S+\\s*"));
            b.$elem.prop("class", e.replace(g, ""))
        });
        b.$elem.attr("data-egs", "");
        a(window).unbind("resize.egs" + d)
    };
    egs.reinit_gridslider = function(e) {
        var b = egs.elem_cfg[e].$elem;
        var c = jQuery.extend({}, true, egs.elem_cfg[e].defaults);
        c.elem_id = e;
        for (var d in cfg) {
            c[d] = cfg[d]
        }
        egs.uninit_gridslider(e)
    };
    a.fn.gridSlider = function(b) {
        var c = {
            elem_selector: a(this).selector,
            slider: true,
            cols: 1,
            rows: 1,
            width: "auto",
            align: "auto",
            col_spacing_enable: true,
            col_spacing_size: 30,
            ctrl_arrows: true,
            ctrl_pag: true,
            ctrl_external: [],
            ctrl_always_visible: false,
            scroll_axis: "x",
            transition: "slide",
            easing: "swing",
            scroll_speed: 500,
            autoplay_enable: false,
            autoplay_interval: 5,
            autoplay_shift_dir: 1,
            view_pos: 0,
            grid_height: "auto",
            grid_height_ratio: 100,
            media_height: "auto",
            media_height_ratio: 100,
            image_stretch_mode: "auto",
            gallery_img_title: false,
            loop: true,
            hide_grid_cell_overflow: false
        };
        var b = a.extend(c, b);
        return this.each(function() {
            egs.init_gridslider(a(this), jQuery.extend(true, {}, b))
        })
    }
});