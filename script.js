var a = gsap.timeline()

a.from("nav",{
    opacity:0,
    delay: 0.5
})

a.from("nav .logo, .list, .signup",{
    y:-80,
    opacity: 0,
duration:0.8,
stagger: 0.3
})

a.from(" #left .up",{
    x:-100,
    delay:0.5,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})
a.from("#right img, #left .down",{
    scale:0.2,
    opacity:0,
    duration:1,
    delay:0
})

a.from(".scroll",{
    y: -40,
    opacity:0,
    delay: 1,
    duration: 2,
    repeat: -1,
    yoyo: true
})


gsap.from("#page_2 .box",{
    scale:0,
    opacity:0 ,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page_2",
        scroller:"body",
        // markers:true,
        start: "top 20%"
    }
})



