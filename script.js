document.addEventListener('DOMContentLoaded', function() {
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

    window.showFeature = showFeature;
    createParticles();
    showFeature(0);
    const floatingHelp = document.querySelector('.floating-help');
    if (floatingHelp) {
        floatingHelp.addEventListener('click', () => {
            alert('How can we help you today?');
        });
    }

    const languageSelect = document.getElementById('languageSelect') || document.querySelector('.language-select');
    const selectedLanguage = document.getElementById('selectedLanguage') || document.getElementById('selectedLanuage');
    const languageMenu = document.getElementById('languageList') || document.querySelector('.language');

    if (languageSelect && selectedLanguage && languageMenu) {
        languageSelect.addEventListener('click', function(e) {
            e.stopPropagation();
            languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', () => {
            languageMenu.style.display = 'none';
        });

        const languageLinks = languageMenu.querySelectorAll('li a');
        languageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                selectedLanguage.textContent = this.textContent + ' ▼';
                languageMenu.style.display = 'none';
            });
        });
    }

    const images = document.querySelectorAll('.gallery-image');
    const titleEl = document.getElementById('image-title');
    const buttonEl = document.getElementById('image-btn');
    const transitionLine = document.getElementById('transition-line');

    const imageData = [
        { title: 'Apria Health', button: 'Learn More' },
        { title: 'Bel Group', button: 'Discover' },
        { title: 'Aspen Snowmass', button: 'View Story' }
    ];

    let current = 0;

    if (images.length && titleEl && buttonEl && transitionLine) {
        setInterval(() => {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');

            titleEl.textContent = imageData[current].title;
            buttonEl.textContent = imageData[current].button;

            transitionLine.style.transform = 'scaleX(0)';
            void transitionLine.offsetWidth;
            transitionLine.style.transform = 'scaleX(1)';
        }, 10000);
    }

    const logo = document.getElementById("logo");
    if (logo) {
        const sun1 = document.getElementById("sun1");
        const sun2 = document.getElementById("sun2");
        const sun3 = document.getElementById("sun3");

        sun1?.addEventListener("click", () => { logo.src = "Images/logo-red.png"; });
        sun2?.addEventListener("click", () => { logo.src = "Images/logo-blue.png"; });
        sun3?.addEventListener("click", () => { logo.src = "Images/logo-green.png"; });
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const menuIcon = this.querySelector('.menu-icon');

            document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
            document.querySelectorAll('.menu-icon').forEach(icon => {
                icon.innerHTML = '▶';
                icon.classList.remove('active');
            });

            if (targetContent) targetContent.classList.add('active');
            if (menuIcon) {
                menuIcon.innerHTML = '▼';
                menuIcon.classList.add('active');
            }
        });
    });

    window.toggleBox = function(element) {
        element.classList.toggle('active');
    };
});
