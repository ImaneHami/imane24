var list_mobile= document.querySelector(".list-mobile");
var btn_list_mobile= document.querySelector(".btn-mobile");

btn_list_mobile.addEventListener("click",()=>{
  list_mobile.classList.toggle("active")
})

var a_propos_btn = document.querySelector(".a-propos-btn");
var a_propos = document.querySelector(".a-propos");
var btn_close_apropos = document.querySelector(".btn-close-apropos");

a_propos_btn.addEventListener("click", () => {
  a_propos.classList.toggle("active");
});

btn_close_apropos.addEventListener("click", () => {
  a_propos.classList.toggle("active");
});



// var a_propos_btn= document.querySelector(".a-propos-btn");
// var a_propos= document.querySelector(".a-propos");
// var btn_close_apropos= document.querySelector(".btn-close-apropos");



// a_propos_btn.addEventListener("click",()=>{
//   a_propos.toggle("active")
  
// })
// btn_close_apropos.addEventListener("click",()=>{
//  a_propos.classList.toggle("active")
  
//  })
// var register_link = document.querySelector(".register-link");
// var btn_icon_close_register = document.querySelector(".icon-close-register");
// var form_box_register = document.querySelector(".form-box-register");

// register_link.addEventListener("click", () => {
//   form_box_register.classList.toggle("active");
// });

// btn_icon_close_register.addEventListener("click", () => {
//   form_box_register.classList.toggle("active");
// });


















      // slider
var SlideIndex = 1;
showSlide(SlideIndex);
function currentSlides(n) {
  showSlide(SlideIndex = n);
}

function showSlide(n) {
  var Slides = document.getElementsByClassName("myslide");
  var Dots = document.getElementsByClassName("span-dot");
  if(n > Slides.length){
    SlideIndex=1;

}
if(n < 1){
    SlideIndex= Slides.length;

}

  for (var i = 0; i < Slides.length; i++) {
    Slides[i].style.display = "none";
  }

  for(var i=0 ; i < Dots.length ; i++){
    Dots[i].className = Dots[i].className.replace("active" ,"");
}

  Slides[SlideIndex - 1].style.display = "block";
  Dots[SlideIndex - 1].className += " active1";

}

 var SlideIndexs=0;
showSlides();
function showSlides(){
    var  Slides = document.getElementsByClassName("myslide");
    var i;

    for(i=0;i< Slides.length;i++){
        Slides[i].style.display="none";
    }

    SlideIndexs++;

    if(SlideIndexs > Slides.length){
        SlideIndexs=1;
    }

    Slides[SlideIndexs -1].style.display="block";

     setTimeout(showSlides,3000);
    
}




