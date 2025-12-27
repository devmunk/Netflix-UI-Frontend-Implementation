const slideWindow = document.querySelector(".card-list");
const rightSlider = document.getElementById("slide-right");
const leftSlider = document.getElementById("slide-left");

const isMobile = window.matchMedia("(max-width:1245px)");

const maxWidth = slideWindow.scrollWidth;

// const fixW = 235;
const mover= document.querySelector(".slider-window").clientWidth;
const width = maxWidth;
console.log("card-width"+mover);
console.log("width"+width);
let offset =0;


rightSlider.addEventListener("click",()=>{
        offset+=mover;
      
       console.log(offset);
       if(!isMobile.matches){
         slideWindow.style.transform = `translateX(-${offset}px)`;
         if(offset<width){
            rightSlider.classList.add("hide"); 
         }
           leftSlider.classList.remove("hide");
       }
       else{
        if(offset<=width){
             slideWindow.style.transform = `translateX(-${offset}px)`;
            leftSlider.classList.remove("hide");
        }
        else{
            rightSlider.classList.add("hide");
            offset-=mover;
            console.log("now off"+offset);
        }
       }
})
leftSlider.addEventListener("click",()=>{
    
    if(!isMobile.matches){
        slideWindow.style.transform = "translateX(0px)";
        rightSlider.classList.remove("hide"); 
        leftSlider.classList.add("hide");
    }
    else{
        offset-=mover;
        console.log("left"+offset);
        slideWindow.style.transform = "translateX(0px)";
        // slideWindow.style.transform = `translateX(-${offset-mover}px)`;
        console.log("left"+offset);
        leftSlider.classList.add("hide");
        rightSlider.classList.remove("hide");
        offset=0;
    }
})

const faqDiv =document.querySelectorAll(".faq-div");

faqDiv.forEach(faq=>{    // equals to the for loop so it essentially selecting elements using a loop so faq here is element 
    faq.addEventListener("click",()=>{
        faqDiv.forEach(otherFaq=>{
            if(otherFaq!= faq){
                otherFaq.nextElementSibling.classList.add("hide");
            }
        })
        faq.nextElementSibling.classList.toggle("hide");
    })
})