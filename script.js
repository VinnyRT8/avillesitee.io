// Navbar
/* let menu = document.querySelector('#menu-icon'); */
let navbar = document.querySelector('.navbar');

/* menu.onclick = () => {
    navbar.classList.toggle('active');
} */

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

// Set dark mode as default
document.body.classList.add('active');
darkmode.classList.replace('bx-moon', 'bx-sun');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-sun')) {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    } else {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 123) { // F12
    event.preventDefault();
  }
  if (event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
    event.preventDefault();
  }
});
// Bloquear Ctrl + U (ver código-fonte)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') { // Ctrl + U
        event.preventDefault();
    }
});

var element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        // Ação quando o console for aberto
        window.location.href = 'about:blank'; // Redirecionar para página em branco, por exemplo
    }
});
console.log(element);
console.log('%cAviso de Segurança!', 'font-size: 24px; color: red;');
console.log('Você está tentando acessar ferramentas de desenvolvedor. Isso pode comprometer sua segurança e a do site.');

