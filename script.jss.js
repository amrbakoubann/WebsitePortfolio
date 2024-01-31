document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you can send the data to your server or a third-party email service
    alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const starryBg = document.querySelector('.starry-bg');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.animationDuration = `${1.5 + Math.random()}s`;
        starryBg.appendChild(star);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => { //smooth scrolling 
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openModal(modalId) { //interactive close modal pop ups.
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}


document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    var url = 'YOUR_SERVER_ENDPOINT'; // Replace with your server endpoint
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Message sent successfully!');
        }
    };

    var data = JSON.stringify({
        'name': document.getElementById('name').value,
        'email': document.getElementById('email').value,
        'message': document.getElementById('message').value
    });
    xhr.send(data);


document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

});
