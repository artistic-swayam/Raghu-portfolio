const tl = gsap.timeline();
const link=document.querySelector(".link");

//animations
gsap.from(".clip-top,.clip-bottom",2,{
    delay:1,
    height:"50vh",
    ease:"power4.inOut"
})
gsap.to(".marque",3.5,{
    delay:0.75,
    top:"50%",
    ease:"power4.inOut"
})
gsap.from(".clip-top .marque,.clip-bottom .marque",5,{
    delay:1,
    left:"100%",
    ease:"power3.inOut"
})
gsap.from(".clip-center .marque",5,{
    delay:1,
    left:"-50%",
    
    ease:"power3.inOut"
})
//
gsap.to(".clip-center",3,{
    delay:5,
    opacity:0,
    ease:"power4.inOut"
})
gsap.to(".clip-top",2,{
    delay:6,
    clipPath:"inset(0 0 100% 0)",
    ease:"power4.inOut"
})
gsap.to(".clip-bottom",2,{
    delay:6,
    clipPath:"inset(100% 0 0 0)",
    ease:"power4.inOut"
})
gsap.to(".clip-top .marque,.clip-bottom .marque,.clip-center .marque span",1,{
    delay:6,
    opacity:0,
    ease:"power2.inOut"
})

//debugging and action play
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".show-reel");
    video.play().catch(() => {
      console.log("Autoplay blocked. User interaction required.");
    });
  });
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".show-reel");

  // Play video on user interaction
  const playVideo = () => {
    video.play().then(() => {
      console.log("Video playback started.");
    }).catch((error) => {
      console.log("Video playback failed:", error);
    });
  };
  let clip=document.querySelector(".clip-center");
  // Trigger play on any user interaction
  document.addEventListener("click", playVideo);
  document.addEventListener("touchstart", playVideo);
  document.addEventListener("keydown", playVideo);
});

//shery js

Shery.mouseFollower();

Shery.imageEffect(".work", {
  style: 6,
  debug: true,
});


