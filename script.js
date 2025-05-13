// because of cursor animation locomotive in not working properly 
// due to cursor hover animation is also not working properly
// in(second cursorAnimatin) shwey js the cursor is working properly but the page 2 animarion is not working
// the mouseenter is not working due to sheryjs on 2 cursorAnimation

function locomotiveAnimation(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

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

// cursor (crsr) div in commented 
function cursorAnimation(){
    // getting lot of issues due to cursor 
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

  var vidcontainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  var videocursor =document.querySelector("#video-cursor");
  var flag = 0;
  vidcontainer.addEventListener("mouseenter",function(){
    vidcontainer.addEventListener("mousemove",function(depts){
      gsap.to("#crsr",{
        // display:"none"
        opacity:0
        // scale:0
      })
      gsap.to("#video-cursor",{
        left: depts.x -650,
        y :depts.y - 300
      })
    })
  })

  vidcontainer.addEventListener("mouseleave",function(){
      gsap.to("#crsr",{
        opacity:1
        // display:"initial"
        // scale:1
      })
      gsap.to("#video-cursor",{
      y: "-14%",
      left: "70%"
    })
  })

  video.addEventListener("click",function(){
    if(flag ==0){
      video.play(),
      video.style.opacity =1

      videocursor.innerHTML =`<i class="ri-pause-mini-line"></i>`
      gsap.to("#video-cursor",{
        scale:0.5
      })
      flag=1
    } 
    else{
      video.pause(),
      video.style.opacity =0

      videocursor.innerHTML =`<i class="ri-play-fill"></i>`
      gsap.to("#video-cursor",{
        scale:1
      })
      flag=0
    } 
   })
}

// function cursorAnimation(){
    
//   // Shery.mouseFollower({
//   //   //Parameters are optional.
//   //   skew: true,
//   //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   //   duration: 1,
//   // });
//   // shery.makeMagnet("#nav-part h4");
  
//   // var vidcontainer = document.querySelector("#video-container");
//   // vidcontainer.addEventListener("mouseenter",function(){
//   //   vidcontainer.addEventListener("mousemove",function(depts){
//   //     gsap.to(".mousefollwer",{
//   //       opacity:0
//   //     })
//   //     gsap.to("#video-cursor",{
//   //       left: depts.x -590,
//   //       y :depts.y -350
//   //     })
//   //   })
//   // })
// }

function threeDAnimation(){
    Shery.imageEffect(".img-div", {
  style: 6, //Select Style
//   debug: true, // Debug Panel
  config: {
    "a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7857059798933153},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}
  },
  preset: "./presets/wigglewobble.json",
  gooey: true
});
}

function flagAnimation(){
  var hero =document.querySelector("#hero")
  document.addEventListener("mousemove",function(depts){
    gsap.to("#flag",{
      x:depts.x,
      y:depts.y
    })
  })

  hero.addEventListener("mouseenter",function(){
    gsap.to("#flag",{
      opacity:1
    })
  })

  hero.addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity:0
    })
  })
}

// function footerAnimation() {

//   var clutter = ""
//   var clutter2 = ""
//   document.querySelector("footer h1").textContent.split("").forEach(function (elem) {
//     clutter += `<span>${elem}</span>`
//   })
//   document.querySelector("footer h1").innerHTML = clutter
//   document.querySelector("footer h2").textContent.split("").forEach(function (elem) {
//     clutter2 += `<span>${elem}</span>`
//   })
//   document.querySelector("footer h2").innerHTML = clutter2


//   document.querySelector("#footer-text").addEventListener("mouseenter", function () {
//     gsap.to("footer h1 span", {
//       opacity: 0,
//       stagger: 0.05
//     })
//     gsap.to("footer h2 span", {
//       delay: 0.35,
//       opacity: 1,
//       stagger: 0.1
//     })
//   })
//   document.querySelector("footer-text").addEventListener("mouseleave", function () {
//     gsap.to("footer h1 span", {
//       opacity: 1,
//       stagger: 0.1,
//       delay: 0.35,

//     })
//     gsap.to("footer h2 span", {
//       opacity: 0,
//       stagger: 0.05
//     })
//   })
// }

locomotiveAnimation();
loadingAnimation();
cursorAnimation();
threeDAnimation();
flagAnimation();
// footerAnimation();