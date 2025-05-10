function loadingAnimation(){
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
        },20)
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
    delay:2,
})

tl.from("#page1",{
    delay:0.1,
    y:1600,
    duration:0.8,
    ease:Power4
})

tl.from("nav",{
    opacity:0,
    delay:0.9
})

tl.to("#loader",{
    display:"none"
})

tl.from(".page1-txt h1,.page1-txt h2",{
    y:150,
    stagger:0.2,
    duration:0.5,
    // delay:0.5
})

}

loadingAnimation()

function cursorAnimation(){
    
document.addEventListener("mousemove",function(dets){
    // console.log(dets.x)
    // console.log(dets.y)  
    gsap.to("#crsr",{
        left: dets.x,
        top: dets.y
    })
})

// use npm for making magnet of element
Shery.makeMagnet("#nav-part h4", {
  //Parameters are optional.
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
});
}

cursorAnimation()