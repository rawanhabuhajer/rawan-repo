function reveal() {
    var reveals = document.querySelectorAll(".box");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  document.getElementById("dropdown-img").addEventListener("click", function() {
    
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });


  var icon = document.getElementById('icon');
  icon.onclick = function(){
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains("dark-mode")){
      icon.src='../assets/contrast (1).png'
    }
    else {
      icon.src='../assets/moon (2).png';
    }
  }