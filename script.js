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

function showFeature(index) {
    const images = document.querySelectorAll('.feature-image');
    const descriptions = document.querySelectorAll('.feature-description');
    const buttons = document.querySelectorAll('.feature-item');

    images.forEach(img => img.classList.remove('active'));
    descriptions.forEach(desc => desc.classList.remove('active'));

    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('feature-image-' + index).classList.add('active');
    document.getElementById('feature-desc-' + index).classList.add('active');

    buttons[index].classList.add('active');
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.style.boxShadow = '0 4px 15px rgba(90, 177, 212, 0.6)';
            btn.style.borderColor = 'rgba(120, 228, 194, 0.8)';
        } else {
            btn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            btn.style.borderColor = 'rgba(120, 228, 194, 0.3)';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    showFeature(0);

    document.querySelector('.floating-help').addEventListener('click', function() {
        alert('How can we help you today?');
    });

    document.querySelector('.language-select').addEventListener('click', function(e) {
        e.stopPropagation();
        const languageMenu = this.querySelector('.language');
        languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        document.querySelector('.language').style.display = 'none';
    });
});

