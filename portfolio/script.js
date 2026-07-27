// ======================================
// Particle Background
// ======================================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${this.opacity})`;
        ctx.fill();
    }
}

function initParticles() {
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(56,189,248,${0.08 * (1 - dist / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});


// ======================================
// Typing Animation
// ======================================

const words = [
    "AI & ML Engineer",
    "Backend Developer",
    "LLM Enthusiast",
    "Python Developer",
    "Generative AI Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex >= words.length) wordIndex = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);
}

typeEffect();


// ======================================
// Navbar Scroll Effect
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "#060a14";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(10,14,26,.85)";
        header.style.boxShadow = "none";
    }
});


// ======================================
// Active Navigation Link
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ======================================
// Counter Animation
// ======================================

const statNumbers = document.querySelectorAll(".stat-number");

function animateCounters() {
    statNumbers.forEach(num => {
        const target = parseInt(num.getAttribute("data-target"));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                num.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                num.textContent = target;
            }
        };

        updateCounter();
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector(".hero-stats");
if (heroStats) statsObserver.observe(heroStats);


// ======================================
// Scroll Reveal Animation
// ======================================

const revealElements = document.querySelectorAll(
    ".hero-text, .hero-image, .skill-card, .project-card, .timeline-box, .contact-box, .certificate-list li, .highlight"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = `all .8s ease ${i % 5 * 0.1}s`;
    observer.observe(el);
});


// ======================================
// Skill Bar Animation
// ======================================

const skillFills = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fillBar 1.5s ease forwards";
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(fill => {
    fill.style.transform = "scaleX(0)";
    skillObserver.observe(fill);
});


// ======================================
// Back To Top Button
// ======================================

const topBtn = document.createElement("button");
topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
    position:fixed; right:25px; bottom:25px;
    width:50px; height:50px; border-radius:50%;
    border:none; cursor:pointer;
    background:linear-gradient(135deg,#38bdf8,#818cf8);
    color:#0a0e1a; font-size:18px; font-weight:bold;
    display:none; box-shadow:0 0 25px rgba(56,189,248,.4);
    z-index:1000; transition:.3s;
`;

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ======================================
// Scroll Progress Bar
// ======================================

const progress = document.createElement("div");
progress.id = "progressBar";
document.body.appendChild(progress);

progress.style.cssText = `
    position:fixed; top:0; left:0;
    height:4px; background:linear-gradient(90deg,#38bdf8,#818cf8);
    width:0%; z-index:9999;
`;

window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressWidth = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = progressWidth + "%";
});


// ======================================
// Smooth Hover Animation
// ======================================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-box, .contact-box"
);

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});


// ======================================
// Mobile Menu Toggle
// ======================================

const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector("nav ul");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navUl.classList.toggle("show");
    });
}


// ======================================
// Console Welcome Message
// ======================================

console.log(`
==========================================

 Welcome to Sanvi Sharma's Portfolio

 AI & Machine Learning Engineer

 Thanks for visiting!

 GitHub:
 https://github.com/Beingsanvi

==========================================
`);
