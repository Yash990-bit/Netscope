function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 50;
    
    for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 4 + 1;
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
        
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const speed = Math.random() * 3 + 1;
    const direction = Math.random() > 0.5 ? 1 : -1;
    
    let posX = parseFloat(particle.style.left);
    let posY = parseFloat(particle.style.top);
    
    function moveParticle() {
        posX += speed * 0.05 * direction;
        posY -= speed * 0.05;
        
       
        if (posY < -5) {
            posY = 105;
            posX = Math.random() * 100;
        }
        
        if (posX < -5 || posX > 105) {
            posX = Math.random() * 100;
        }
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        requestAnimationFrame(moveParticle);
    }
    
    moveParticle();
}

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    document.querySelector('.search-btn').addEventListener('click', function() {
        alert('Search functionality would go here');
    });
    
    document.querySelector('.language-select').addEventListener('click', function() {
        alert('Language selection would go here');
    });
    
    document.querySelector('.floating-help').addEventListener('click', function() {
        alert('Help functionality would go here');
    });
});

