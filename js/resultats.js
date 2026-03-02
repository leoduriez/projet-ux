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
   GESTION DE LA PAGE RÉSULTATS
   ======================================== */

// Récupérer les réponses du localStorage
const answers = JSON.parse(localStorage.getItem('questionnaireAnswers')) || {};

// Mapping des valeurs de réponses vers texte lisible
const answerLabels = {
    // Question 1
    'simple': 'Simple et minimaliste',
    'confortable': 'Confortable et naturel',
    'elegant': 'Élégant et raffiné',
    'audacieux': 'Audacieux et original',
    // Question 2
    'propre': 'Un espace propre et lumineux',
    'cosy': 'Un endroit cosy et chaleureux',
    'anime': 'Un lieu animé et festif',
    'nature': 'En pleine nature',
    // Question 3
    'confiant': 'Confiant·e',
    'sensuel': 'Sensuel·le',
    'apaise': 'Apaisé·e',
    'puissant': 'Puissant·e',
    'libre': 'Libre',
    // Question 4
    'discret': 'Discret',
    'remarque': 'Se remarque',
    'intrigue': 'Intrigue',
    'rassure': 'Rassure',
    // Question 5
    'oui': 'Oui',
    'non': 'Non',
    'depend': 'Ça dépend',
    // Question 6
    'frais': 'Frais et pétillant (agrumes, fraîcheur)',
    'fruite': 'Fruité et gourmand',
    'vert': 'Vert et naturel',
    'epice': 'Légèrement épicé',
    // Question 7
    'floral': 'Floral et élégant',
    'aromatique': 'Aromatique et naturel',
    // Question 8
    'boisee': 'Boisée et profonde',
    'vanillee': 'Vanillée et gourmande',
    'musquee': 'Musquée et sensuelle',
    'ambree': 'Ambrée et chaude',
    'legere': 'Légère et discrète'
};

// Afficher les réponses
function displayResponses() {
    const responsesList = document.getElementById('responsesList');
    
    if (Object.keys(answers).length === 0) {
        // Afficher des réponses par défaut si aucune réponse n'est enregistrée
        const defaultResponses = [
            'Confortable et naturel',
            'Un espace propre et lumineux',
            'Libre'
        ];
        
        const hiddenResponses = [
            'Intrigue',
            'Non',
            'Frais et pétillant (agrumes, fraîcheur)',
            'Fruité et doux',
            'Ambrée et chaude'
        ];
        
        // Afficher les 3 premières réponses
        defaultResponses.forEach(response => {
            const li = document.createElement('li');
            li.textContent = response;
            responsesList.appendChild(li);
        });
        
        // Afficher les réponses cachées
        hiddenResponses.forEach(response => {
            const li = document.createElement('li');
            li.textContent = response;
            li.classList.add('hidden-response');
            responsesList.appendChild(li);
        });
    } else {
        // Afficher les vraies réponses
        Object.values(answers).forEach(value => {
            const li = document.createElement('li');
            li.textContent = answerLabels[value] || value;
            responsesList.appendChild(li);
        });
    }
}

// Initialiser l'affichage des réponses
displayResponses();

// Gestion du bouton Recommencer
const btnRestart = document.getElementById('btnRestart');
btnRestart.addEventListener('click', () => {
    // Effacer les réponses
    localStorage.removeItem('questionnaireAnswers');
    
    // Animation de transition
    document.querySelector('.app-container').style.opacity = '0';
    document.querySelector('.app-container').style.transform = 'translateY(20px)';
    document.querySelector('.app-container').style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        window.location.href = 'questionnaire.html';
    }, 300);
});

/* ========================================
   GESTION DE LA NAVBAR
   ======================================== */
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        navBtns.forEach(b => b.classList.remove('active'));
        
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
                // Animation de transition avant redirection
                document.querySelector('.app-container').style.opacity = '0';
                document.querySelector('.app-container').style.transform = 'translateY(20px)';
                document.querySelector('.app-container').style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    window.location.href = 'accueil.html';
                }, 300);
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

/* ========================================
   GESTION DE LA POP-UP DÉTAILS PARFUM
   ======================================== */

// Données des parfums
const perfumes = {
    1: {
        name: 'Fruité & doux',
        images: [
            '../img/pop-up-1.webp',
            '../img/pop-up-2.webp',
            '../img/pop-up-3.webp',
            '../img/pop-up-4.webp'
        ],
        notes: {
            head: 'Fruité et gourmand → Pêche, fruits rouges, poire douce',
            heart: 'Floral et élégant → Pétales de rose, jasmin doux, léger muguet',
            base: 'Doux et subtil → Vanille, ambre clair, musc blanc'
        }
    },
    2: {
        name: 'Frais & Pétillant',
        images: [
            '../img/pop-up-1.webp',
            '../img/pop-up-2.webp',
            '../img/pop-up-3.webp',
            '../img/pop-up-4.webp'
        ],
        notes: {
            head: 'Agrumes et vivifiant → Citron, bergamote, orange sanguine',
            heart: 'Aquatique et frais → Notes marines, thé vert, menthe légère',
            base: 'Boisé et léger → Cèdre blanc, vétiver frais'
        }
    },
    3: {
        name: 'Ambré & Chaud',
        images: [
            '../img/pop-up-1.webp',
            '../img/pop-up-2.webp',
            '../img/pop-up-3.webp',
            '../img/pop-up-4.webp'
        ],
        notes: {
            head: 'Épicé et chaleureux → Cannelle, cardamome, safran',
            heart: 'Boisé et profond → Santal, patchouli, oud',
            base: 'Ambré et enveloppant → Ambre gris, vanille bourbon, musc'
        }
    }
};

// Récupérer les éléments
const popupOverlay = document.getElementById('popupOverlay');
const popupTitle = document.getElementById('popupTitle');
const popupImages = document.getElementById('popupImages');
const noteHead = document.getElementById('noteHead');
const noteHeart = document.getElementById('noteHeart');
const noteBase = document.getElementById('noteBase');
const btnClosePopup = document.getElementById('btnClosePopup');
const infoIcons = document.querySelectorAll('.info-icon');

// Ouvrir la pop-up
infoIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const sampleId = icon.getAttribute('data-sample');
        const perfume = perfumes[sampleId];
        
        if (perfume) {
            // Mettre à jour le contenu
            popupTitle.textContent = `Parfum : ${perfume.name}`;
            
            // Ajouter les images
            popupImages.innerHTML = '';
            perfume.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = perfume.name;
                popupImages.appendChild(img);
            });
            
            // Mettre à jour les notes
            noteHead.textContent = perfume.notes.head;
            noteHeart.textContent = perfume.notes.heart;
            noteBase.textContent = perfume.notes.base;
            
            // Afficher la pop-up
            popupOverlay.classList.add('active');
        }
    });
});

// Fermer la pop-up
btnClosePopup.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

// Fermer en cliquant sur l'overlay
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});

/* ========================================
   BOUTON COMMANDER
   ======================================== */
const btnCommander = document.querySelector('.btn-commander');

btnCommander.addEventListener('click', () => {
    // Animation de transition
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'connexion.html';
    }, 300);
});

/* ========================================
   TOGGLE RÉPONSES CACHÉES
   ======================================== */
const btnToggleCoffrets = document.getElementById('btnToggleCoffrets');

btnToggleCoffrets.addEventListener('click', () => {
    const hiddenResponses = document.querySelectorAll('.hidden-response');
    const isActive = btnToggleCoffrets.classList.contains('active');
    
    hiddenResponses.forEach(response => {
        if (isActive) {
            response.style.display = 'none';
        } else {
            response.style.display = 'list-item';
        }
    });
    
    btnToggleCoffrets.classList.toggle('active');
});
