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
   GESTION DU QUESTIONNAIRE
   ======================================== */

let currentQuestion = 1;
const totalQuestions = 8;
const answers = {};

const questionCards = document.querySelectorAll('.question-card');
const progressFill = document.getElementById('progressFill');
const currentQuestionText = document.getElementById('currentQuestion');
const questionIndicator = document.getElementById('questionIndicator');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');

// Fonction pour afficher une question spécifique
function showQuestion(questionNumber) {
    // Page de finalisation
    if (questionNumber === 'final') {
        questionCards.forEach(card => card.classList.remove('active'));
        document.querySelector('.question-card[data-question="final"]').classList.add('active');
        questionIndicator.textContent = 'Finalisation ...';
        progressFill.style.width = '100%';
        btnPrev.classList.add('visible');
        btnNext.classList.add('active');
        btnNext.textContent = 'Suivant';
        return;
    }

    // Vérifier les limites
    if (questionNumber < 1 || questionNumber > totalQuestions) {
        return;
    }

    currentQuestion = questionNumber;

    // Mettre à jour les cards
    questionCards.forEach(card => {
        card.classList.remove('active');
        const cardQuestion = card.getAttribute('data-question');
        if (cardQuestion === String(currentQuestion)) {
            card.classList.add('active');
        }
    });

    // Mettre à jour la barre de progression
    const progress = (currentQuestion / totalQuestions) * 100;
    progressFill.style.width = progress + '%';
    currentQuestionText.textContent = currentQuestion;
    questionIndicator.innerHTML = `Question <span id="currentQuestion">${currentQuestion}</span> sur 8`;

    // Afficher/masquer le bouton Précédent
    if (currentQuestion > 1) {
        btnPrev.classList.add('visible');
    } else {
        btnPrev.classList.remove('visible');
    }

    // Vérifier si une réponse est déjà sélectionnée pour cette question
    checkNextButton();
}

// Fonction pour vérifier si le bouton Suivant doit être activé
function checkNextButton() {
    const currentCard = document.querySelector(`.question-card[data-question="${currentQuestion}"]`);
    const hasSelected = currentCard.querySelector('input[type="radio"]:checked');
    
    if (hasSelected) {
        btnNext.classList.add('active');
    } else {
        btnNext.classList.remove('active');
    }
}

// Gestion des changements sur les radio buttons
document.addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
        const questionCard = e.target.closest('.question-card');
        const questionNum = questionCard.getAttribute('data-question');
        const answerValue = e.target.value;

        // Sauvegarder la réponse
        answers[`question${questionNum}`] = answerValue;

        // Activer le bouton Suivant
        btnNext.classList.add('active');
    }
});

// Gestion du clic sur le bouton Suivant
btnNext.addEventListener('click', () => {
    // Vérifier si on est sur la page finale
    const finalCard = document.querySelector('.question-card[data-question="final"]');
    if (finalCard && finalCard.classList.contains('active')) {
        // Sauvegarder les réponses et rediriger vers résultats
        localStorage.setItem('questionnaireAnswers', JSON.stringify(answers));
        
        // Animation de transition
        document.querySelector('.app-container').style.opacity = '0';
        document.querySelector('.app-container').style.transform = 'translateY(20px)';
        document.querySelector('.app-container').style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            window.location.href = 'resultats.html';
        }, 300);
        return;
    }
    
    if (currentQuestion < totalQuestions) {
        showQuestion(currentQuestion + 1);
    } else if (currentQuestion === totalQuestions) {
        // Afficher la page de finalisation
        showQuestion('final');
    }
});

// Gestion du clic sur le bouton Précédent
btnPrev.addEventListener('click', () => {
    // Si on est sur la page finale, revenir à la question 8
    const finalCard = document.querySelector('.question-card[data-question="final"]');
    if (finalCard.classList.contains('active')) {
        showQuestion(totalQuestions);
        return;
    }
    
    if (currentQuestion > 1) {
        showQuestion(currentQuestion - 1);
    }
});

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
                // Rester sur la page questionnaire
                console.log('Déjà sur Questionnaire');
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

// Initialiser la première question
showQuestion(1);
