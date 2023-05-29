function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "salmin",
        Password : "0693334074",
        To : 'salmin20shafii@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("success")
    );
}