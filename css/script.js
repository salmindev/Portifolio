//contact us form
$(".contact_btn").on('click', function () {
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
  if (proceed === "true"){

      $.ajax({
          type: "POST",
          dataType: "json",
          url: "https://formcarry.com/s/7BvpcRaiWv",
          data: $('#contact-form-data').serialize(),
          success: function(response){
              if(response.status == "success"){
                  // alert("yes");
                  output = '<div class="alert alert-success bg-warning" style="padding:10px 15px; margin-bottom:30px;">' + 'I received your message, thank you!' + '</div>';
                  $("#result").hide().html(output).slideDown();
                  $(".contact_btn i").addClass('d-none');

                  //clear form
                  $('#contact-form-data')[0].reset();
              }else{
                  // alert("yes");
                  output = '<div class="alert alert-warning" style="padding:10px 15px; margin-bottom:30px;"> An error occured: ' + response.message +  '</div>';
                  $("#result").hide().html(output).slideDown();
                  $(".contact_btn i").addClass('d-none');
              }
          }
      });
  }
  else
  {
      // alert("yes");
      output = '<div class="alert alert-danger" style="padding:10px 15px; margin-bottom:30px;">' + msgText +  '</div>';
      // output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' + 'Thanks for the message, I will reach back soon.' + '</div>';
      $("#result").hide().html(output).slideDown();
      $(".contact_btn i").addClass('d-none');

  }
});
//scrolling
// Get all the navigation links
var navLinks = document.querySelectorAll('nav ul li a');

// Add click event listeners to each navigation link
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the link's href attribute
    var targetId = this.getAttribute('href');

    // Scroll to the target section
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//toggle
var box = document.getElementById('#navbar--toggle');

box.addEventListener('click', function() {
  document.getElementById('#navbarNav').classList.toggle('active');
});

//button 
var btn = document.getElementsByClassName('.btn--hover');

btn.addEventListener('hover', function(){
   btn.removeClass.classList('.bounce-top');
});