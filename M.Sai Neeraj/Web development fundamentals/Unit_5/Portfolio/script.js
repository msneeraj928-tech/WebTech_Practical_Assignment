// ==================== SMOOTH SCROLL & NAVBAR ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== TYPING EFFECT ==================== 
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.typing-text');
    if (nameElement) {
        const nameText = nameElement.textContent;
        typeWriter(nameElement, nameText, 80);
    }
});

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        'section, .about-text, .about-cards, .info-card, .cert-card, .project-card, .contact-card, .skills-container'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ==================== PARALLAX SCROLL EFFECT ==================== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && heroImage && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ==================== SKILL TAGS INTERACTION ==================== 
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.style.transform = 'scale(0.95)';
            setTimeout(() => {
                tag.style.transform = '';
            }, 200);
        });
    });
});

// ==================== PROJECT CARDS TILT EFFECT ==================== 
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .cert-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});

// ==================== MATRIX RAIN EFFECT (SUBTLE) ==================== 
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.03';
    canvas.style.zIndex = '1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize matrix rain effect
window.addEventListener('load', createMatrixRain);

// ==================== CURSOR GLOW EFFECT ==================== 
document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 255, 65, 0.15), transparent 70%);
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);
    
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
    
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
});

// ==================== CONSOLE EASTER EGG ==================== 
console.log('%c███╗   ███╗    ███████╗ █████╗ ██╗    ███╗   ██╗███████╗███████╗██████╗  █████╗      ██╗', 'color: #00ff41; font-family: monospace;');
console.log('%c████╗ ████║    ██╔════╝██╔══██╗██║    ████╗  ██║██╔════╝██╔════╝██╔══██╗██╔══██╗     ██║', 'color: #00ff41; font-family: monospace;');
console.log('%c██╔████╔██║    ███████╗███████║██║    ██╔██╗ ██║█████╗  █████╗  ██████╔╝███████║     ██║', 'color: #00ff41; font-family: monospace;');
console.log('%c██║╚██╔╝██║    ╚════██║██╔══██║██║    ██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗██╔══██║██   ██║', 'color: #00ff41; font-family: monospace;');
console.log('%c██║ ╚═╝ ██║    ███████║██║  ██║██║    ██║ ╚████║███████╗███████╗██║  ██║██║  ██║╚█████╔╝', 'color: #00ff41; font-family: monospace;');
console.log('%c╚═╝     ╚═╝    ╚══════╝╚═╝  ╚═╝╚═╝    ╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ ', 'color: #00ff41; font-family: monospace;');
console.log('%c\nWelcome to my portfolio! 🚀\nInterested in the code? Check out the GitHub repo!\n', 'color: #00d9ff; font-size: 14px; font-family: monospace;');
console.log('%c> system.status: online ✓\n> security.level: maximum ✓\n> coffee.level: optimal ✓', 'color: #00ff41; font-family: monospace;');

// ==================== ACTIVE LINK HIGHLIGHTING ==================== 
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== PERFORMANCE OPTIMIZATION ==================== 
// Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy operations
const throttledScroll = throttle(() => {
    // Your scroll operations here
}, 100);

window.addEventListener('scroll', throttledScroll);

// ==================== LOADING ANIMATION ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== KONAMI CODE EASTER EGG ==================== 
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateHackerMode();
    }
});

function activateHackerMode() {
    const root = document.documentElement;
    root.style.setProperty('--neon-green', '#ff0000');
    root.style.setProperty('--neon-cyan', '#ff00ff');
    
    console.log('%c🎮 HACKER MODE ACTIVATED! 🎮', 'color: #ff0000; font-size: 20px; font-weight: bold;');
    
    // Reset after 5 seconds
    setTimeout(() => {
        root.style.setProperty('--neon-green', '#00ff41');
        root.style.setProperty('--neon-cyan', '#00d9ff');
    }, 5000);
}

// ==================== EMAIL COPY FUNCTIONALITY ==================== 
document.addEventListener('DOMContentLoaded', () => {
    const emailCard = document.querySelector('.contact-card[href^="mailto"]');
    
    if (emailCard) {
        emailCard.addEventListener('click', (e) => {
            const email = 'msneeraj928@gmail.com';
            
            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email copied to clipboard! 📋');
                });
            }
        });
    }
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: rgba(0, 255, 65, 0.9);
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
