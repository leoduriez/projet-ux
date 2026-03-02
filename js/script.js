/* ========================================
   GESTION DU CARROUSEL D'ONBOARDING
   ======================================== */

// Variables globales
let currentSlide = 0;
const carouselImages = document.querySelectorAll('.carousel-image');
const slideTexts = document.querySelectorAll('.slide-text');
const totalSlides = carouselImages.length;

/* ========================================
   FONCTION : Afficher un slide spécifique
   ======================================== */
function showSlide(index) {
    // Vérifier que l'index est dans les limites
    if (index < 0) {
        currentSlide = 0;
    } else if (index >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Mettre à jour les classes des images pour Center Mode
    carouselImages.forEach((img, i) => {
        img.classList.remove('active', 'prev', 'next');
        
        if (i === currentSlide) {
            img.classList.add('active');
        } else if (i === currentSlide - 1) {
            img.classList.add('prev');
        } else if (i === currentSlide + 1) {
            img.classList.add('next');
        }
    });

    // Mettre à jour les textes (afficher uniquement le texte actif)
    slideTexts.forEach((text, i) => {
        text.classList.remove('active');
        if (i === currentSlide) {
            text.classList.add('active');
        }
    });

    // Mettre à jour tous les dots (indicateurs)
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach((dot) => {
        const dotIndex = parseInt(dot.getAttribute('data-dot'));
        if (dotIndex === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Mettre à jour le texte du bouton
    updateButtonText();
}

/* ========================================
   FONCTION : Mettre à jour le texte du bouton
   ======================================== */
function updateButtonText() {
    const skipButtons = document.querySelectorAll('.btn-skip');
    skipButtons.forEach(btn => {
        if (currentSlide === totalSlides - 1) {
            btn.textContent = "C'est parti";
        } else {
            btn.textContent = "Skip";
        }
    });
}

/* ========================================
   FONCTION : Passer au slide suivant
   ======================================== */
function nextSlide() {
    showSlide(currentSlide + 1);
}

/* ========================================
   FONCTION : Passer au slide précédent
   ======================================== */
function prevSlide() {
    showSlide(currentSlide - 1);
}

/* ========================================
   FONCTION : Aller au dernier slide
   ======================================== */
function skipToEnd() {
    showSlide(totalSlides - 1);
}

/* ========================================
   FONCTION : Démarrer l'application
   ======================================== */
function startApp() {
    // Animation de transition
    document.querySelector('.app-container').style.opacity = '0';
    document.querySelector('.app-container').style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        // Redirection vers la page d'accueil
        window.location.href = 'pages/accueil.html';
    }, 300);
}

/* ========================================
   EVENT LISTENERS - Boutons et Dots
   ======================================== */
// Gestion des clics sur les boutons et dots avec event delegation
document.addEventListener('click', (e) => {
    // Clic sur un dot
    if (e.target.classList.contains('dot')) {
        const dotIndex = parseInt(e.target.getAttribute('data-dot'));
        showSlide(dotIndex);
    }
    
    // Clic sur bouton "Skip" : redirection vers accueil
    if (e.target.classList.contains('btn-skip')) {
        window.location.href = 'pages/accueil.html';
    }
    
    // Clic sur bouton "Commencer"
    if (e.target.classList.contains('btn-start')) {
        startApp();
    }
});

/* ========================================
   GESTION DU SWIPE (TACTILE)
   ======================================== */
let touchStartX = 0;
let touchEndX = 0;

// Détection du début du swipe
document.querySelector('.image-carousel').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

// Détection de la fin du swipe
document.querySelector('.image-carousel').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

// Fonction pour gérer le swipe
function handleSwipe() {
    const swipeThreshold = 50; // Distance minimale pour considérer un swipe
    
    // Swipe vers la gauche (slide suivant)
    if (touchStartX - touchEndX > swipeThreshold) {
        nextSlide();
    }
    
    // Swipe vers la droite (slide précédent)
    if (touchEndX - touchStartX > swipeThreshold) {
        prevSlide();
    }
}

/* ========================================
   NAVIGATION AU CLAVIER (OPTIONNEL)
   ======================================== */
document.addEventListener('keydown', (e) => {
    // Flèche droite ou espace : slide suivant
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    }
    
    // Flèche gauche : slide précédent
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    }
    
    // Entrée sur le dernier slide : démarrer
    if (e.key === 'Enter' && currentSlide === totalSlides - 1) {
        e.preventDefault();
        startApp();
    }
});

/* ========================================
   INITIALISATION
   ======================================== */
// Afficher le premier slide au chargement
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
