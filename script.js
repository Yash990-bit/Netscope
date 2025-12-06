document.addEventListener('DOMContentLoaded', function () {
    // --- SCROLL ANIMATION OBSERVER ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('reveal'); // Ensure reveal class is added
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-bottom, .hidden-left, .hidden-stagger');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- TYPING EFFECT ---
    const textElement = document.querySelector('.typing-effect');
    if (textElement) {
        const textToType = textElement.textContent;
        textElement.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < textToType.length) {
                textElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50); // Typing speed
            } else {
                textElement.style.borderRight = 'none'; // Remove caret after typing
            }
        }
        // Start typing after a small delay
        setTimeout(typeWriter, 500);
    }

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
        languageSelect.addEventListener('click', function (e) {
            e.stopPropagation();
            languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', () => {
            languageMenu.style.display = 'none';
        });

        const languageLinks = languageMenu.querySelectorAll('li a');
        languageLinks.forEach(link => {
            link.addEventListener('click', function (e) {
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
        item.addEventListener('click', function () {
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

    window.toggleBox = function (element) {
        element.classList.toggle('active');
    };

    // --- AI CHAT WIDGET LOGIC ---
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const chatWidget = document.getElementById('chat-widget');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');

    // Settings Elements
    const settingsBtn = document.getElementById('settings-btn');
    const apiSettingsPanel = document.getElementById('api-settings-panel');
    const apiKeyInput = document.getElementById('api-key-input');
    const saveApiKeyBtn = document.getElementById('save-api-key');
    const apiStatusMsg = document.getElementById('api-status-msg');

    // State
    let apiKey = localStorage.getItem('gemini_api_key') || '';
    if (apiKey) {
        apiKeyInput.value = apiKey;
        apiStatusMsg.textContent = 'Key loaded';
        apiStatusMsg.classList.add('status-success');
    }

    // Toggle Chat
    if (chatToggleBtn && chatWidget && closeChatBtn) {
        chatToggleBtn.addEventListener('click', () => {
            chatWidget.classList.add('active');
        });

        closeChatBtn.addEventListener('click', () => {
            chatWidget.classList.remove('active');
        });
    }

    // Toggle Settings
    if (settingsBtn && apiSettingsPanel) {
        settingsBtn.addEventListener('click', () => {
            apiSettingsPanel.classList.toggle('open');
        });
    }

    // Save API Key
    if (saveApiKeyBtn && apiKeyInput) {
        saveApiKeyBtn.addEventListener('click', () => {
            const key = apiKeyInput.value.trim();
            if (key) {
                apiKey = key;
                localStorage.setItem('gemini_api_key', key);
                apiStatusMsg.textContent = 'Key saved securely!';
                apiStatusMsg.className = 'status-msg status-success';
                setTimeout(() => apiSettingsPanel.classList.remove('open'), 1000);
            } else {
                localStorage.removeItem('gemini_api_key');
                apiKey = '';
                apiStatusMsg.textContent = 'Key removed. Using Mock AI.';
                apiStatusMsg.className = 'status-msg';
            }
        });
    }

    // Send Message Logic
    async function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // 1. Add User Message
            appendMessage(message, 'user');
            chatInput.value = '';

            // 2. Show Loading Indicator
            const loadingId = showLoading();

            try {
                if (apiKey) {
                    // 3a. Call Real AI
                    const response = await callGeminiAPI(message, apiKey);
                    removeLoading(loadingId);
                    appendMessage(response, 'ai');
                } else {
                    // 3b. Simulate Mock AI
                    setTimeout(() => {
                        removeLoading(loadingId);
                        const aiResponse = getMockAIResponse(message);
                        appendMessage(aiResponse, 'ai');
                    }, 1000);
                }
            } catch (error) {
                console.error("AI Error:", error);
                removeLoading(loadingId);
                appendMessage("I'm having trouble connecting. Switching to offline mode.", 'ai');
                const fallback = getMockAIResponse(message);
                appendMessage(fallback, 'ai');
            }
        }
    }

    // Event Listeners for Run
    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // --- HELPER FUNCTIONS ---

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');

        // Convert URLs to links if simple
        const linkedText = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color:#78e4c2;text-decoration:underline;">$1</a>');
        messageDiv.innerHTML = linkedText; // Use innerHTML safely for links

        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showLoading() {
        const id = 'loading-' + Date.now();
        const loaderDiv = document.createElement('div');
        loaderDiv.classList.add('message', 'ai-message');
        loaderDiv.id = id;
        loaderDiv.innerHTML = '<span class="typing-dots">...</span>'; // Simple loading dots
        chatBody.appendChild(loaderDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        return id;
    }

    function removeLoading(id) {
        const element = document.getElementById(id);
        if (element) element.remove();
    }

    // Real API Call
    async function callGeminiAPI(prompt, key) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: "You are a helpful AI assistant for Netskope, a SASE security leader. Answer concisely. User says: " + prompt }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }

    // Fallback Mock Logic
    function getMockAIResponse(userText) {
        const lowerText = userText.toLowerCase();

        if (lowerText.includes('sase')) {
            return "SASE (Secure Access Service Edge) converges wide area networking (WAN) and security services into a single, cloud-delivered service model. Netskope One is a leader in SASE!";
        } else if (lowerText.includes('security') || lowerText.includes('protect')) {
            return "Netskope provides unmatched security with our Zero Trust Engine, protecting particular data and defending against threats in cloud, web, and private apps.";
        } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
            return "Hello there! How can I assist you with your security needs today?";
        } else if (lowerText.includes('pricing') || lowerText.includes('cost')) {
            return "For pricing details, please visit our 'Contact Us' page or request a demo from our sales team.";
        } else {
            return "That's an interesting question. While in Simulator Mode, I recommend exploring our 'Platform' page. Enter an API Key for full intelligence!";
        }
    }
});
