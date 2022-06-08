gsap.to("#red", {
    left: "0%",
    duration: 1.2,
    ease: "power4.inout",
})
gsap.to("#red", {
    width: 0,
    delay: 1,
    duration: 1,
    ease: "power4.inout",
})
gsap.to("#nav", {
    width: "100%",
    left: "0%",
    delay: 0.3,
    duration: 1,
    ease: "power4.inout",
})
gsap.to("#football", {
    width: "100%",
    left: "0%",
    delay: 1,
    duration: 1.2,
    ease: "power4.inout",
})

gsap.from("#football", {
    rotation: -60,
    transform: "scale(6)",
    delay: 1,
    duration: 1.2,
    ease: "power4.inout",
})

gsap.from("#ekright",{
    x:550,
    ease: "power4.inout",
    duration:1,
    delay:1,
    opacity:0,
})
gsap.from("#doleft",{
    x:500,
    ease: "power4.inout",
    duration:1,
    opacity:0,
    delay:1,
})
gsap.from("#teenleft",{
    x:500,
    ease: "power4.out",
    duration:1.4,
    delay:0.3,
    opacity:0,
    delay:1,
})
gsap.from("#verticle",{
    x:350,
    ease: "power4.out",
    duration:1.4,
    delay:1.7,
})
gsap.from("#circle h4",{
    y:20,
    ease: "power4.out",
    opacity: 0,
    duration:2,
    delay:1.7
})
gsap.to("#circleoverlay",{
    height:"0vw",
    ease: "none",
    duration:.5,
    delay:1.7
})
gsap.from("#sportsright",{
    y:350,
    opacity: 0,
    ease: "power4.out",
    duration:1.7,
    delay:1
})
gsap.from("#sportsleft",{
    y:350,
    ease: "power4.out",
    duration:1.4,
    delay:0.7
})