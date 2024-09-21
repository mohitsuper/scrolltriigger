document.querySelectorAll(".item").forEach(e=>{
    gsap.to(e,{
        opacity:0,
        scale:0.7,
        // z:-100,
        x:100,
        scrollTrigger:{
           trigger:"e",
           start:"top 15%",
           end:"bottom 30%",
        //    markers:true,
           scrub:true,
        }
   })
})

