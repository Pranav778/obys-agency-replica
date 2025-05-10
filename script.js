var tl = gsap.timeline()
tl.from(".line h1",{
    y: 150,
    stagger: 0.2, //element will come one by one insted of all coming at one time    
    delay:0.5,
    duration:0.6
})
// targeting line h2 scperate beca animation in not working properly 
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var count=0
        setInterval(function(){
            if(count<100) 
                h5timer.innerHTML = count++;
            else h5timer.innerHTML = count;
        },30)
    }
})
// add scperate beacuse of animation was satrting before other
tl.to(".line h2",{
animationName: "anime",
opacity: 1
})

tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4,
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})

