document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you can send the data to your server or a third-party email service
    alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
});
