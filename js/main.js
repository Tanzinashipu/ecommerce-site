$(document).ready(function (){

// search js-----
$('#search, .fa-search').mouseenter(function(){
  $('.logo').hide();
});
$('#search, .fa-search').mouseleave(function(){
  $('.logo').show();
});

// navbar js
$('.fa-bars').click(function(){
  $('.navbar').toggle();
  $(this).toggleClass('fa-times');
});
$('.navbar, .navbar a').click(function(){
  $('.navbar').hide();
  $('.fa-bars').removeClass('fa-times');
});
$(window).on('scroll load', function(){
  if($(window).scrollTop() > 20){
    $('#header').css({
      'background':'#EB4D4B',
      'box-shadow':'0 5px 10px rgba(0,0,0,0.3)'
    });
  }else{
    $('#header').css({
      'background':'#333',
      'box-shadow':'none'
    });
  }
})

// slider banner========
$('.home_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
});

//    slick slider for shoes
    $('.shoe_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:1,
      dots:true,
      autoplay:true,
      arrows:false,

      responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1

      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow:1,
        slidesToScroll:1
      }
    },
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // {
    //   breakpoint:575,
    //   settings: {
    //     slidesToShow:1,
    //     slidesToScroll:1
    //   }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });
  // review slider js===
$('.slider_review').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
    dots:false,
});

  // company brand slide js===
  //    slick slider for shoes
      $('.company_slider').slick({
        infinite: true,
        slidesToShow:5,
        slidesToScroll:2,
        dots:false,
        autoplay:true,
        arrows:false,

        responsive: [
      {
        breakpoint:992,
        settings: {
          slidesToShow: 4,
          slidesToScroll:2,

        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow:3,
          slidesToScroll:1
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:575,
        settings: {
          slidesToShow:2,
          slidesToScroll:1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    });

    // product variation js====
    const productStyles=document.querySelectorAll(".ladies_style");
    for (let i=0; i<productStyles.length; i++){
      for(let j=0; j<productStyles[i].children.length; j++){
        productStyles[i].children[j].addEventListener("click", function(){
        const leadies_img=this.parentElement.parentElement;
          const proThumbImage=leadies_img.querySelector(".pro-thum-img");
          proThumbImage.src=this.getAttribute("data-image")
          updateStyle(j,this.parentElement)
        })
      }
    }
    function updateStyle(numb,proStyle){
      for (let i=0; i<proStyle.children.length; i++){
        if(i==numb){
          proStyle.children[i].classList.add("active_style");
        }
        else{
          proStyle.children[i].classList.remove("active_style");
        }
      }
    }

// countdown js ======
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

});
