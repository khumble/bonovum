smoothScroll.init({
    selector: "[data-scroll]",
    speed: 300,
    easing: "easeInOutCubic",
    offset: 50
}),
$(function() {
    $(window).on("scroll load change", function() {
        event.preventDefault(),
        $(this).scrollTop() >= 400 ? $("nav#site-navigation").addClass("stick") : $("nav#site-navigation").removeClass("stick");
        var e = "#home";
        $(".smooth").each(function() {
            var a = window.pageYOffset - $(this).offset().top
              , t = $(this).attr("id");
            a < 150 && a > -150 && e != t && (e = t,
            $(".current").removeClass(),
            $('a[href="#' + e + '"]').addClass("current"))
        })
    })
}),
$("[data-fancybox]").fancybox({
    margin: [80, 0],
    slideShow: !1,
    thumbs: !1,
    protect: !0,
    iframe: {
        attr: {
            scrolling: "yes"
        },
        css: {
            overflow: "auto"
        }
    }
}),
$("button#to-top").click(function() {
    smoothScroll.animateScroll(0)
}),
$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    window.location.hash && ($(".current").removeClass(),
    $('[href="' + window.location.hash + '"]').addClass("current"),
    smoothScroll.animateScroll(window.location.hash)),
    $("#logo").fadeIn(3e3),
    $('#current-year-argument').html(currentYear)
}),
function() {
    function e() {
        for (var e = this; -1 === e.className.indexOf("nav-menu"); )
            "li" === e.tagName.toLowerCase() && (-1 !== e.className.indexOf("focus") ? e.className = e.className.replace("focus", "") : e.className += "focus"),
            e = e.parentElement
    }
    var a, t, n, s, o, i;
    if ((a = document.getElementById("site-navigation")) && void 0 !== (t = a.getElementsByTagName("button")[0])) {
        if (void 0 === (n = a.getElementsByTagName("ul")[0]))
            return void (t.style.display = "none");
        for (n.setAttribute("aria-expanded", "false"),
        -1 === n.className.indexOf("nav-menu") && (n.className += " nav-menu"),
        t.onclick = function() {
            -1 !== a.className.indexOf("toggled") ? (a.className = a.className.replace("toggled", ""),
            t.setAttribute("aria-expanded", "false"),
            n.setAttribute("aria-expanded", "false"),
            t.innerHTML = "&#9776; MENU") : (a.className += " toggled",
            t.setAttribute("aria-expanded", "true"),
            n.setAttribute("aria-expanded", "true"),
            t.innerHTML = "X CLOSE")
        }
        ,
        window.onhashchange = function() {
            -1 !== a.className.indexOf("toggled") && (a.className = a.className.replace("toggled", ""),
            t.setAttribute("aria-expanded", "false"),
            n.setAttribute("aria-expanded", "false"),
            t.innerHTML = "&#9776; MENU")
        }
        ,
        o = 0,
        i = (s = n.getElementsByTagName("a")).length; o < i; o++)
            s[o].addEventListener("focus", e, !0),
            s[o].addEventListener("blur", e, !0);
        !function(e) {
            var a, t, n = e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
            if ("ontouchstart"in window)
                for (a = function(e) {
                    var a, t = this.parentNode;
                    if (t.classList.contains("focus"))
                        t.classList.remove("focus");
                    else {
                        for (e.preventDefault(),
                        a = 0; a < t.parentNode.children.length; ++a)
                            t !== t.parentNode.children[a] && t.parentNode.children[a].classList.remove("focus");
                        t.classList.add("focus")
                    }
                }
                ,
                t = 0; t < n.length; ++t)
                    n[t].addEventListener("touchstart", a, !1)
        }(a)
    }
}();
