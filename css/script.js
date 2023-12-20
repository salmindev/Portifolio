//contact us form
/*$(".contact_btn").on('click', function () {
  //disable submit button on click
  // $(".contact_btn").attr("disabled", "disabled");
  // $(".contact_btn b").text('Sending');
  $(".contact_btn i").removeClass('d-none');

  //simple validation at client's end
  var post_data, output;
  var proceed = "true";
  var msgText = "Enter a valid email";
  // var allBlank;

  var str = $('#contact-form-data').serializeArray();

  $('#contact-form-data input').each(function() {

      var emailReg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

      if($("#name").val().length < 3){
          msgText = "Please enter a valid name";
          proceed = "false";
      }else if(!$("#email").val().toLowerCase().match(emailReg)){
          msgText = "Please enter a valid email";
          proceed = "false";
      }else if($("#message").val().length < 5){
          msgText = "Your message is too short to understand.";
          proceed = "false";
      }
  });

  //everything looks good! proceed...
 /* if (proceed === "true"){

      $.ajax({
          type: "POST",
          dataType: "json",
          url: "https://formcarry.com/s/7BvpcRaiWv",
          data: $('#contact-form-data').serialize(),
          success: function(response){
              if(response.status == "success"){
                  // alert("yes");
                  output = '<div class="alert text-success" style="padding:10px 0; margin-bottom:30px;">' + 'I received your message, thank you!' + '</div>';
                  $("#result").hide().html(output).slideDown();
                  $(".contact_btn i").addClass('d-none');

                  //clear form
                  $('#contact-form-data')[0].reset();
              }else{
                  // alert("yes");
                  output = '<div class="alert text-info" style="padding:10px 15px; margin-bottom:30px;"> An error occured: ' + response.message +  '</div>';
                  $("#result").hide().html(output).slideDown();
                  $(".contact_btn i").addClass('d-none');
              }
          }
      });
  }
  else
  {
      // alert("yes");
      output = '<div class="alert text-info" style="padding:10px 0; margin-bottom:30px;">' + msgText +  '</div>';
      // output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' + 'Thanks for the message, I will reach back soon.' + '</div>';
    
      $(".contact_btn i").addClass('d-none');

  }
});*/

 //function for send form data to email


//scrolling
// Get all the navigation links
var navLinks = document.querySelectorAll('nav ul li a');

// Add click event listeners to each navigation link
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the link's href attribute
    var targetId = this.getAttribute('href');
    var targetSection = document.querySelectorAll(targetId);
    ; // Adjust this value based on your desired margin
  
    var targetOffsetTop = targetSection.offsetTop ;
    // Scroll to the target section
    document.querySelector(targetId).scrollIntoView({
      top: targetOffsetTop,
      behavior: 'smooth'
    });
  });
});

//toggle
function toggle() {
  var element = document.getElementById('offcanvas_body');
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionPosition = section.getBoundingClientRect();
    const sectionHeight = sectionPosition.height;
    const windowHeight = window.innerHeight;
    const offset = window.pageYOffset;
    const targetPosition = sectionPosition.top + offset - (windowHeight / 2) + (sectionHeight / 2);

    window.scrollTo({
      top: targetPosition,
      preventDefault:true,
      behavior: 'smooth'
    });
  }
}
 
  //parallex
  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.animate');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect();
  
      // If the element is in the viewport
      if (position.top < window.innerHeight) {
        element.classList.add('visible');
      }
    }
  });

  //particles
  // Array of quotes
  const quotes = [
    "Meditate helps you focus on the present, which can improve your concentration on other tasks in daily life. - KILL THE NOISE",
    "Meditation can also  -lower the levels of cortisol - the stress hormone - which helps you feel more relaxed. - BITE OR STOP BARKING",
    "Talent hits a target no one else can hit, Genius hits a target no one else can see.",
    "I've been losing friends and finding peace, Honestly that sound like a fair trade to me."
];

// Get quote container and quote text elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");

// Function to update quote and apply fade effect
function changeQuote() {
    // Pick a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Update quote text
    quoteText.textContent = randomQuote;

    // Toggle fade-in-out class to apply fade effect
    quoteContainer.classList.toggle("fade-in-out");
    quoteContainer.classList.toggle("active");

    // After a delay, toggle classes again to fade out
    setTimeout(() => {
        quoteContainer.classList.toggle("fade-in-out");
        quoteContainer.classList.toggle("active");
    }, 5000); // Adjust the delay as needed
}

// Initial quote change
changeQuote();

// Set interval to change quote every 5 seconds (adjust as needed)
setInterval(changeQuote, 7000);

  