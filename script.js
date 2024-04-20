
var tl = gsap.timeline()

var navover = document.querySelector("#nav")
var page2 = document.querySelector(".page2")
tl.to(".nav-overlay", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        scrub: true
    }
})


var minivideo = document.querySelector(".mini-container-1 video")
var minicontainer = document.querySelector(".mini-container-1")
minicontainer.addEventListener("mouseenter", function () {
    minivideo.style.zIndex = 1
})
minicontainer.addEventListener("mouseleave", function () {
    minivideo.style.zIndex = -1
})



var img1 = document.querySelector("#img-1")
var img2 = document.querySelector("#img-2")
var container2 = document.querySelector(".container-second")


container2.addEventListener("mouseenter", function () {
    img2.style.zIndex = 99
})
container2.addEventListener("mouseleave", function () {
    img2.style.zIndex = -1
})


var img1 = document.querySelector("#img-1")
var video2 = document.querySelector(".container-third video")
var container3 = document.querySelector(".container-third")
container2.addEventListener("mouseenter", function () {
    video2.style.zIndex = 99
})
container2.addEventListener("mouseleave", function () {
    video2.style.zIndex = -1
})



var page5part1 = document.querySelector(".page5-part1")
var page5 = document.querySelector(".page5")
page5.addEventListener("mouseenter", function () {
    tl.to(".page5-part1", {
        height: "80%",
        scrollTrigger: {
            trigger: ".page5-part1",
            scroller: "body",
            scrub: true
        }
    })
})

page5.addEventListener("mouseenter", function () {
    tl.to(".text-container2", {
        y: -50,
        scrollTrigger: {
            trigger: ".page5-part1",
            scroller: "body",
            scrub: true,

        }
    })
})

page5.addEventListener("mouseenter", function () {
    tl.from(".bottom-imgcontainer", {
        y: -50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page5-part1",
            scroller: "body",
            scrub: true,

        }
    })
})



var page2 = document.querySelector(".page2")

page2.addEventListener("mouseenter", function () {
    tl.to(".image-container", {
        height: "470px"
    })
})
page2.addEventListener("mouseenter", function () {
    tl.to(".image-box", {
        height: "450px"
    })
})
