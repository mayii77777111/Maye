document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
   
    form.addEventListener('submit', function(e) {
        e.preventDefault();
       
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
       
       
        console.log('Formulario enviado:');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);
       
        alert('¡Gracias por tu mensaje, ' + nombre + '! Te contactaremos pronto.');
       
        form.reset();
    });

   
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
           
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    const galeriaImgs = document.querySelectorAll('.galeria-img');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    galeriaImgs.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        observer.observe(img);
    });


    const mainTitle = document.querySelector('#inicio h1');
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];

    function changeColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        mainTitle.style.color = randomColor;
    }

    setInterval(changeColor, 3000);
});