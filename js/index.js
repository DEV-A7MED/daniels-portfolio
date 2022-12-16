
// navbar click links
$(document).on('click','nav ul li  ', function() {
  $(this).addClass("nav-home").siblings().removeClass('nav-home')
  
});
// close navbar-collapse when a  clicked
$("nav .nav-item a").on('click', function () {
  $(".navbar-collapse").removeClass("show").addClass("collapse");
  
});
//navbar background scroll
let headingOffset=$('.caption-items ').offset().top;
$(window).scroll(()=> { 
  if($(window).scrollTop() >= headingOffset){
    $('.navbar ').css({'backgroundColor' : '#000', 'transition':'1s'});

}
else{
    $('.navbar').css({'backgroundColor':'transparent'});


}


})




//progress bar
let section=document.querySelector('.about');
let divs=document.querySelectorAll('.about .skills .progress div');

//counter
let nums = document.querySelectorAll(".stat-items .count")
  let sectionOffset = document.querySelector('#clients');
  let started = false;
window.onscroll = function () {

    if (window.scrollY >= section.offsetTop) {
        divs.forEach((div) => {
        div.style.width = div.dataset.width;
      });
    }

    if (window.scrollY > sectionOffset.offsetTop) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
  
  };


   
function startCount(el) {
    let goal = el.dataset.goal;
    let countNum = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
        clearInterval(countNum);
    }
}, 8500/goal);
};

// clients carsouel
$('.clients .owl-carousel').owlCarousel({
  items: 1,
  loop:true,
  autoplay:true,
  smartSpeed:500
});
// owl carousel 
$('.blog .owl-carousel').owlCarousel({
  margin: 30,
  loop:true,
  autoplay:true,
  smartSpeed:500,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:2
      },
      1000:{
          items:3
      }
  }
});