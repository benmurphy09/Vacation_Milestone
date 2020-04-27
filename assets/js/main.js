//----menu scroll/hide/show

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  prevScrollpos = currentScrollPos;
}

//----Menu dropdown button

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//----slideshow
var slideSet = 0;

var showSlides = () => {
  var slides = document.getElementsByClassName("mySlide")
    for(let i=0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideSet++;
      if(slideSet > slides.length) {
        slideSet = 1;
      }
      slides[slideSet - 1].style.display = 'block';
      setTimeout( showSlides , 5000);
};

showSlides();
