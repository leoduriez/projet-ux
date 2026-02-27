/* ========================================
   TRANSITION DE PAGE
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
});

// Réinitialiser l'opacité lors du retour arrière
window.addEventListener('pageshow', (event) => {
    if (event.persisted || performance.getEntriesByType('navigation')[0].type === 'back_forward') {
        document.body.style.opacity = '1';
    }
});

/* ========================================
   GESTION DE LA PAGE D'ACCUEIL
   ======================================== */

// Bouton Commencer - Redirection vers le questionnaire
document.querySelector('.btn-commencer').addEventListener('click', () => {
    // Animation de transition
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'questionnaire.html';
    }, 300);
});

/* ========================================
   CARROUSEL D'AVIS
   ======================================== */
let currentAvis = 0;
const avisCards = document.querySelectorAll('.avis-card');
const avisDots = document.querySelectorAll('.avis-dot');
const totalAvis = avisCards.length;

// Fonction pour afficher un avis spécifique
function showAvis(index, direction = 'next') {
    const previousAvis = currentAvis;
    
    // Vérifier les limites
    if (index < 0) {
        currentAvis = totalAvis - 1;
    } else if (index >= totalAvis) {
        currentAvis = 0;
    } else {
        currentAvis = index;
    }

    // Mettre à jour les cards avec animation directionnelle
    avisCards.forEach((card, i) => {
        card.classList.remove('active', 'prev');
        
        if (i === currentAvis) {
            // Carte qui devient active
            setTimeout(() => {
                card.classList.add('active');
            }, 10);
        } else if (i === previousAvis) {
            // Carte qui était active
            if (direction === 'prev') {
                card.classList.add('prev');
            }
        }
    });

    // Mettre à jour les dots
    avisDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentAvis) {
            dot.classList.add('active');
        }
    });
}

// Avis suivant
function nextAvis() {
    showAvis(currentAvis + 1, 'next');
}

// Avis précédent
function prevAvis() {
    showAvis(currentAvis - 1, 'prev');
}

// Event listeners pour les flèches
document.querySelector('.arrow-left').addEventListener('click', prevAvis);
document.querySelector('.arrow-right').addEventListener('click', nextAvis);

// Event listeners pour les dots
avisDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showAvis(index);
    });
});

// Swipe pour mobile
let touchStartX = 0;
let touchEndX = 0;

const avisContainer = document.querySelector('.avis-container');

avisContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

avisContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchStartX - touchEndX > swipeThreshold) {
        nextAvis();
    }
    
    if (touchEndX - touchStartX > swipeThreshold) {
        prevAvis();
    }
}

/* ========================================
   NAVBAR - GESTION DES ÉTATS ACTIFS
   ======================================== */
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        navButtons.forEach(b => b.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        btn.classList.add('active');
        
        // Récupérer la navigation cible
        const navTarget = btn.getAttribute('data-nav');
        
        // Actions selon le bouton cliqué
        switch(navTarget) {
            case 'questionnaire':
                // Animation de transition avant redirection
                document.querySelector('.app-container').style.opacity = '0';
                document.querySelector('.app-container').style.transform = 'translateY(20px)';
                document.querySelector('.app-container').style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    window.location.href = 'questionnaire.html';
                }, 300);
                break;
            case 'accueil':
                // Rester sur la page d'accueil
                console.log('Déjà sur Accueil');
                break;
            case 'profil':
                // Animation de transition avant redirection
                document.querySelector('.app-container').style.opacity = '0';
                document.querySelector('.app-container').style.transform = 'translateY(20px)';
                document.querySelector('.app-container').style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    window.location.href = 'connexion.html';
                }, 300);
                break;
        }
    });
});
