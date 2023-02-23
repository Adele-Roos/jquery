    // alert once page has loaded
    $(document).ready( function() {
        alert('- délicieux - has loaded!');
        // change background once page has loaded
        $('.background-image').css("background-image", "url('./images/*white-background.jpg')");

    // function to fade picture in and out for 3 seconds each when respective button is clicked
    $(document).ready(function(){
      $("#fadeBtn").click(function(){
        $("#fade").fadeOut(3000);
        $("#fade").fadeIn(3000);
      });
      $("#stop").click(function(){
        $("#fade").stop();
      });
    });

    /* function to create drop-down menu using accordion animation style when each section is hovered over,
    "Breakfast", "Lunch", "Dinner", "Dessert" and "Drinks" */
    $(function(){ 
        // Hide all panels to start
        let panels = $('.accordion > dd').hide();
      
        // On click of panel title
        $('.accordion > dt > a').hover(function() {
            let $this = $(this);
              
        // Slide up all other panels
           panels.slideUp(1000);
    
        //Slide down target panel
           $this.parent().next().slideDown(200);
           $(this).on(click).slideUp(200);
            return false;
        });
    });
});

    // function containing chained effect to slide all the elements repeatedly 
  $(function(){
    $('.slider').owlCarousel({
           loop: true,
           autoplay: true,
           autoplayTimeout: 4000,
           //function to stop the animation of evect whilst in progress
           autoplayHoverPause: true,
         });
        

    // function that changes a single paragraph styling
    $('.change').hover(
        function(){
        $('.change').css('color', 'yellow')
        }, 
    //changing colour back
        function(){
        $('.change').css('color', 'white');
    });

     // function that fades out any object that is clicked on

      $("*").on('click', function(e) {
        e.stopPropagation();
        $(this).fadeOut(1000);
      });
    });
/////

$(document).ready(function(){
  $("#startBtn").hover(
    function(){
      let myInterval = setInterval(slideContent,2000);
    });
   /* $("#stopBtn").hover(
      function(){
        $(".gridContainer").stop();
      }); */
  
      // whilst changing the background
  let image = document.getElementById('background-image');
  let images = ['./images/*white-background.jpg', './images/*white-background.jpg', './images/*table-background.jpg', './images/*people-background.jpg', './images/*salad-background.jpg'];
      setInterval(function() {
      let random = Math.floor(Math.random() * 5);
      image.src = images[random];
    }, 3000);
});

  

function slideContent() {
  $('.gridContainer').animate({
    "margin-left": "+=3000px",
  }, 5000, "linear").hide();

  $('.gridContainer').animate({
    "margin-left": "-=6000px",
    "opacity": 0,
  }, 1000, "linear").show();

  $('.gridContainer').animate({
    "margin-left": "+=3000px",
    "opacity": 100,
  }, 5000, "linear");

};