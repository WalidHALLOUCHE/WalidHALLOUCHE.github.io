# Guide de Déploiement sur GitHub Pages

Portfolio Walid HALLOUCHE - Déploiement sur GitHub Pages avec `WalidHALLOUCHE.github.io`

## 📋 Prérequis

- Compte GitHub existant
- Git installé sur votre machine
- Tous les fichiers du portfolio prêts

## 🚀 Étapes de Déploiement (Rapide)

### 1️⃣ Créer le Repository GitHub Pages

1. Allez sur [github.com](https://github.com)
2. Connectez-vous avec votre compte
3. Cliquez sur l'icône `+` (en haut à droite) → **New repository**
4. Remplissez les informations :
   - **Repository name** : `WalidHALLOUCHE.github.io` ⚠️ EXACT
   - **Visibility** : **Public**
5. Créer le repository

### 2️⃣ Cloner et Ajouter les Fichiers

```bash
git clone https://github.com/WalidHALLOUCHE/WalidHALLOUCHE.github.io.git
cd WalidHALLOUCHE.github.io
```

Copiez tous les fichiers du portfolio dans ce dossier :
- `index.html`
- `.nojekyll`
- `robots.txt`
- `README.md`
- `assets/` (entièrement)

### 3️⃣ Pousser le Code

```bash
git config --global user.name "Walid HALLOUCHE"
git config --global user.email "walid.hallouche@gmail.com"

git add .
git commit -m "Portfolio initial - 10 projets GitHub"
git branch -M main
git push -u origin main
```

### 4️⃣ Configurer GitHub Pages

1. Allez sur votre repository
2. **Settings** > **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main** / folder **/** (root)
5. **Save**

### 5️⃣ Accéder au Portfolio

Attendez 1-2 minutes, puis accédez à :
👉 **https://walidhallouche.github.io/**

## 📁 Structure des Fichiers

```
WalidHALLOUCHE.github.io/
├── index.html                              ← Page principale
├── .nojekyll                               ← Fichier obligatoire
├── robots.txt                              ← SEO
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── img/walid-hallouche.jpeg
    └── docs/
        ├── CV_Walid_HALLOUCHE.pdf
        ├── Certifications_Walid_HALLOUCHE.pdf
        └── Diplomes_Walid_HALLOUCHE.pdf
```

## ✅ Vérifications Importantes

| Élément | À Vérifier |
|---------|-----------|
| **Titre** | Affiche "Walid HALLOUCHE" |
| **Hero** | Section d'accueil visible |
| **Projets** | 10 projets GitHub affichés |
| **PDF** | Boutons de téléchargement actifs |
| **Liens** | GitHub, LinkedIn, Email cliquables |
| **Images** | Photo de profil chargée |
| **CSS** | Couleurs et layout correctes |
| **Mobile** | Responsive et menu hamburger |

## 🔄 Mettre à Jour le Portfolio

Pour modifier le portfolio après déploiement :

```bash
cd WalidHALLOUCHE.github.io

# Faire vos modifications localement
# (éditer index.html, CSS, ajouter des projets, etc.)

# Vérifier localement en ouvrant index.html

# Pousser les modifications
git add .
git commit -m "Update: description du changement"
git push

# GitHub Pages redéploiera automatiquement en 1-2 min
```

## 🐛 Dépannage

### Le site n'apparaît pas
- Attendez 2-3 minutes après le push
- Vérifiez Settings > Pages : branche "main", dossier "/"
- Forcez un refresh : Ctrl+Shift+R

### Les images ne s'affichent pas
- Vérifiez que `assets/img/walid-hallouche.jpeg` existe
- Vérifiez le chemin HTML : `src="assets/img/..."`
- Committez et pushez les modifications

### Les PDF ne se téléchargent pas
- Vérifiez que le bouton a `download` :
  ```html
  <a href="assets/docs/CV_Walid_HALLOUCHE.pdf" download>Télécharger</a>
  ```
- Assurez-vous que les PDF sont pushés sur GitHub

### Le CSS ne s'applique pas
- Videz le cache : Ctrl+Shift+Delete
- Vérifiez le lien : `<link rel="stylesheet" href="assets/css/styles.css">`
- Refaites un push

## 🎯 Commandes Git Essentielles

```bash
# Configuration
git config --global user.name "Votre Nom"
git config --global user.email "email@gmail.com"

# Cloner
git clone https://github.com/WalidHALLOUCHE/WalidHALLOUCHE.github.io.git

# Ajouter et committer
git add .
git commit -m "Message"

# Pousser
git push origin main

# Voir l'historique
git log

# Statut
git status
```

## 📊 Liens Importants

- **Portfolio** : https://walidhallouche.github.io/
- **Repository** : https://github.com/WalidHALLOUCHE/WalidHALLOUCHE.github.io
- **GitHub** : https://github.com/WalidHALLOUCHE
- **LinkedIn** : https://www.linkedin.com/in/walid-hallouche

## 🌐 Ajouter un Domaine Personnalisé (Optionnel)

Si vous possédez un domaine (ex: `walid-hallouche.fr`) :

1. Achetez le domaine (GoDaddy, Namecheap, etc.)
2. Allez dans Settings > Pages > Custom domain
3. Entrez votre domaine
4. Configurez les DNS records chez votre registraire
5. Attendez 24h pour la propagation

## ✨ Timeline Déploiement

| Étape | Durée |
|-------|-------|
| Créer repository | 1 min |
| Cloner | 1 min |
| Copier fichiers | 2 min |
| Git push | 2 min |
| Configurer Pages | 1 min |
| Attendre redéploiement | 1-2 min |
| **TOTAL** | **~10 min** |

---

**Votre portfolio sera accessible à** : https://walidhallouche.github.io/ ✨
