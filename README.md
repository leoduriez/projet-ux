# SCNT - Parfums Personnalisés

![SCNT Logo](img/logo.webp)

## 📋 Description

SCNT est une application web de découverte de parfums personnalisés. L'application guide les utilisateurs à travers un questionnaire interactif pour identifier leurs préférences olfactives et leur proposer 3 échantillons de parfums sur mesure.

## 🎯 Fonctionnalités

### Pages principales

- **Page d'accueil** : Présentation de la marque avec carrousel d'avis clients et section savoir-faire
- **Questionnaire** : 8 questions interactives pour déterminer le profil olfactif de l'utilisateur
- **Résultats** : Affichage des 3 échantillons recommandés avec popup détaillée pour chaque parfum
- **Connexion** : Création de compte utilisateur avec validation du formulaire
- **Paiement** : Processus de paiement avec support Visa, PayPal et Apple Pay

### Caractéristiques techniques

- ✅ Design responsive optimisé pour mobile
- ✅ Animations fluides et transitions de page
- ✅ Images optimisées au format WebP
- ✅ Navigation intuitive avec barre de navigation fixe
- ✅ Stockage local des réponses du questionnaire
- ✅ Popup de confirmation de paiement
- ✅ Validation de formulaire avec activation conditionnelle des boutons

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles personnalisés avec variables CSS, flexbox, grid, animations
- **JavaScript (Vanilla)** : Logique interactive, gestion du DOM, localStorage
- **WebP** : Format d'image optimisé pour les performances

## 📁 Structure du projet

```
projet_UX/
├── index.html              # Page d'onboarding
├── pages/
│   ├── accueil.html       # Page d'accueil
│   ├── questionnaire.html # Questionnaire interactif
│   ├── resultats.html     # Résultats personnalisés
│   ├── connexion.html     # Création de compte
│   └── paiement.html      # Processus de paiement
├── css/
│   ├── style.css          # Styles pour index.html
│   ├── accueil.css        # Styles page d'accueil
│   ├── questionnaire.css  # Styles questionnaire
│   ├── resultats.css      # Styles résultats
│   ├── connexion.css      # Styles connexion
│   └── paiement.css       # Styles paiement
├── js/
│   ├── script.js          # Script pour index.html
│   ├── accueil.js         # Logique page d'accueil
│   ├── questionnaire.js   # Logique questionnaire
│   ├── resultats.js       # Logique résultats
│   ├── connexion.js       # Logique connexion
│   └── paiement.js        # Logique paiement
└── img/                   # Images et icônes (WebP)
```

## 🎨 Palette de couleurs

```css
--vert-sauge: #A5B093;    /* Couleur principale */
--creme: #F0EBE3;         /* Fond */
--vieux-rose: #C97E87;    /* Navbar */
--rose-clair: #EFC4CB;    /* Boutons */
--blanc: #FFFFFF;
--noir: #1A1A1A;
```

## 🚀 Installation et utilisation

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel pour le développement)

### Lancement local

1. Cloner le repository :
```bash
git clone https://github.com/leoduriez/projet-ux.git
cd projet-ux
```

2. Ouvrir avec un serveur local :
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server
```

3. Accéder à l'application :
```
http://localhost:8000
```

### Déploiement

Le projet est déployé sur **Vercel** :
- URL de production : [https://projet-ux-two.vercel.app](https://projet-ux-two.vercel.app)
- Déploiement automatique à chaque push sur la branche `main`

## 📱 Parcours utilisateur

1. **Onboarding** : Découverte de l'application (4 slides)
2. **Accueil** : Présentation de SCNT et témoignages clients
3. **Questionnaire** : 8 questions sur les préférences olfactives
4. **Résultats** : Visualisation des 3 échantillons recommandés
5. **Connexion** : Création de compte
6. **Paiement** : Finalisation de la commande

## 🔧 Fonctionnalités détaillées

### Questionnaire
- 8 questions à choix multiples
- Barre de progression
- Navigation avant/arrière
- Sauvegarde automatique dans localStorage
- Validation avant soumission

### Résultats
- Affichage de 3 échantillons personnalisés
- Popup détaillée avec images et notes olfactives (tête, cœur, fond)
- Bouton "Commander" vers la page de connexion
- Résumé des réponses du questionnaire

### Paiement
- Sélection de la méthode de paiement (Visa, PayPal, Apple Pay)
- Formulaire de livraison
- Formulaire de carte bancaire avec formatage automatique
- Popup de confirmation avec numéro de commande

### Navigation
- Barre de navigation fixe en bas
- 3 boutons : Questionnaire, Accueil, Profil
- Animation de l'icône active (cercle rose)
- Transitions fluides entre les pages

## 🎯 Optimisations

- **Images WebP** : Réduction de 25-35% de la taille des images
- **Lazy loading** : Chargement optimisé des ressources
- **Animations CSS** : Performances fluides avec GPU
- **LocalStorage** : Persistance des données utilisateur
- **Responsive design** : Adaptation mobile-first

## 👥 Auteur

**Léo Duriez**
- GitHub: [@leoduriez](https://github.com/leoduriez)

## 📄 Licence

Ce projet est un projet universitaire réalisé dans le cadre d'un cours d'UX Design.

## 🙏 Remerciements

- Polices : Google Fonts (Montserrat, Cormorant Garamond)
- Hébergement : Vercel
- Optimisation images : cwebp

---

**SCNT** - *Fini les parfums trop communs, trouve enfin ta signature* ✨
