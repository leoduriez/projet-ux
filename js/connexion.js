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
        if (document.querySelector('.app-container')) {
            document.querySelector('.app-container').style.opacity = '1';
            document.querySelector('.app-container').style.transform = 'translateY(0)';
        }
    }
});

/* ========================================
   GESTION DU CHECKBOX ET BOUTON
   ======================================== */
const conditionsCheckbox = document.getElementById('conditions');
const submitButton = document.querySelector('.btn-submit');

// Gérer l'activation du bouton selon le checkbox
conditionsCheckbox.addEventListener('change', () => {
    if (conditionsCheckbox.checked) {
        submitButton.classList.add('active');
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove('active');
        submitButton.disabled = true;
    }
});

/* ========================================
   GESTION DU FORMULAIRE DE CONNEXION
   ======================================== */

const connexionForm = document.getElementById('connexionForm');

connexionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        password: document.getElementById('password').value,
        conditions: document.getElementById('conditions').checked
    };
    
    // Vérifier que les conditions sont acceptées
    if (!formData.conditions) {
        alert('Veuillez accepter les conditions générales d\'utilisation');
        return;
    }
    
    // Sauvegarder les données utilisateur dans localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    
    // Animation de transition
    document.querySelector('.app-container').style.opacity = '0';
    document.querySelector('.app-container').style.transform = 'translateY(20px)';
    document.querySelector('.app-container').style.transition = 'all 0.3s ease';
    
    // Redirection vers la page de paiement après inscription
    setTimeout(() => {
        window.location.href = 'paiement.html';
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
                // Rester sur la page profil/connexion
                console.log('Déjà sur Profil');
                break;
        }
    });
});
