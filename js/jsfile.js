// Navbar animation

const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-75px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

//Mobile Menu Animation

$(document).ready(function() {
  

  /* -----------------------------------------------
                  MOBILE NAVIGATION     
  -------------------------------------------------- */
  
    $(".burger-icon").on("click", function() {
      if($( ".main-nav" ).hasClass( "mobile-hide" )){
          $(".main-nav").removeClass("mobile-hide");
          $(".main-nav").addClass("mobile-show");
      }else{
            $(".main-nav").addClass("mobile-hide");
            $(".main-nav").removeClass("mobile-show");
      }
    
    });
  
  
  });