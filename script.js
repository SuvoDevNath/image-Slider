let scrollCcontainer=document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollCcontainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scrollCcontainer.scrollLeft += e.deltaY;
    scrollCcontainer.style.scrollBehavior="auto";
})

nextBtn.addEventListener("click",()=>{
    scrollCcontainer.scrollLeft += 900;
    scrollCcontainer.style.scrollBehavior="smooth";
})

backBtn.addEventListener("click",()=>{
    scrollCcontainer.scrollLeft -=900;
    scrollCcontainer.style.scrollBehavior="smooth";
})

































