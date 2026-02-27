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
   GESTION DES MÉTHODES DE PAIEMENT
   ======================================== */
const paymentMethods = document.querySelectorAll('.payment-method');
const cardSection = document.getElementById('cardSection');
const paypalSection = document.getElementById('paypalSection');
const applepaySection = document.getElementById('applepaySection');
const payButton = document.getElementById('payButton');

paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        // Retirer la classe active de toutes les méthodes
        paymentMethods.forEach(m => m.classList.remove('active'));
        
        // Ajouter la classe active à la méthode cliquée
        method.classList.add('active');
        
        // Récupérer la méthode sélectionnée
        const selectedMethod = method.getAttribute('data-method');
        console.log('Méthode de paiement sélectionnée:', selectedMethod);
        
        // Masquer toutes les sections
        cardSection.style.display = 'none';
        paypalSection.style.display = 'none';
        applepaySection.style.display = 'none';
        
        // Afficher la section correspondante et changer le texte du bouton
        if (selectedMethod === 'visa') {
            cardSection.style.display = 'block';
            payButton.textContent = 'Payer';
        } else if (selectedMethod === 'paypal') {
            paypalSection.style.display = 'block';
            payButton.textContent = 'Payer avec PayPal';
        } else if (selectedMethod === 'applepay') {
            applepaySection.style.display = 'block';
            payButton.textContent = 'Payer avec Apple Pay';
        }
    });
});

/* ========================================
   FORMATAGE DES CHAMPS
   ======================================== */

// Formatage du numéro de carte (espaces tous les 4 chiffres)
const cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
});

// Formatage de la date d'expiration (MM/YY)
const expirationInput = document.getElementById('expiration');
expirationInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
});

// Limiter le CVV à 3 chiffres
const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
});

/* ========================================
   GESTION DU FORMULAIRE
   ======================================== */
const paiementForm = document.getElementById('paiementForm');
const popupOverlay = document.getElementById('popupOverlay');
const btnSuivreCommande = document.getElementById('btnSuivreCommande');

paiementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const formData = {
        adresse: document.getElementById('adresse').value,
        ville: document.getElementById('ville').value,
        codePostal: document.getElementById('codePostal').value,
        cardNumber: document.getElementById('cardNumber').value,
        cardHolder: document.getElementById('cardHolder').value,
        expiration: document.getElementById('expiration').value,
        cvv: document.getElementById('cvv').value
    };
    
    console.log('Données de paiement:', formData);
    
    // Sauvegarder les données dans localStorage
    localStorage.setItem('paiementData', JSON.stringify(formData));
    
    // Mettre à jour l'email dans la popup (si disponible)
    const emailField = document.getElementById('paypalEmail');
    if (emailField && emailField.value) {
        document.getElementById('confirmEmail').textContent = emailField.value;
    }
    
    // Afficher la popup
    popupOverlay.classList.add('active');
});

// Fermer la popup et rediriger
btnSuivreCommande.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
    
    // Animation de transition
    document.querySelector('.app-container').style.opacity = '0';
    document.querySelector('.app-container').style.transform = 'translateY(20px)';
    document.querySelector('.app-container').style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        window.location.href = 'accueil.html';
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
