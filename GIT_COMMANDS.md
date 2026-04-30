# 📋 COMMANDES GIT COPIER-COLLER

## Phase 1️⃣ : Configuration (à faire une fois)

```bash
git config --global user.name "Walid HALLOUCHE"
git config --global user.email "walid.hallouche@gmail.com"
```

## Phase 2️⃣ : Cloner le Repository

```bash
git clone https://github.com/WalidHALLOUCHE/WalidHALLOUCHE.github.io.git
cd WalidHALLOUCHE.github.io
```

## Phase 3️⃣ : Copier les Fichiers

Sur Windows (PowerShell) :
```powershell
# Depuis le dossier WalidHALLOUCHE.github.io.git
Copy-Item -Path "C:\Users\hallo\OneDrive\Bureau\portfolio_walid\*" -Destination "." -Recurse
```

Ou manuellement : Copier tous les fichiers de `portfolio_walid/` vers le dossier cloné.

## Phase 4️⃣ : Pousser vers GitHub

```bash
git add .
git commit -m "Portfolio initial - 10 projets GitHub"
git branch -M main
git push -u origin main
```

## Phase 5️⃣ : Vérifier le Push

```bash
git log
git status
```

---

## 🔄 Mettre à Jour Après Déploiement

```bash
cd WalidHALLOUCHE.github.io

# Faire les modifications localement
# (éditer index.html, CSS, ajouter des projets)

# Vérifier localement
# (ouvrir index.html dans le navigateur)

# Pousser les modifications
git add .
git commit -m "Update: description de la modification"
git push
```

---

## 📝 Exemples de Commit Messages

```bash
# Ajouter un nouveau projet
git commit -m "Add: Nouveau projet Data Science"

# Corriger un bug
git commit -m "Fix: corriger les liens PDF"

# Améliorer le design
git commit -m "Improve: améliorer la responsivité mobile"

# Mettre à jour le contenu
git commit -m "Update: mettre à jour la section expérience"
```

---

## 🌐 Vérifier le Déploiement

Après le push, attendre 1-2 minutes puis visiter :
👉 **https://walidhallouche.github.io/**

Si ça ne marche pas :
1. Aller dans Settings > Pages
2. Vérifier que la source est "main / /"
3. Forcer un refresh du navigateur (Ctrl+Shift+R)

---

## ⚠️ Dépannage

### Erreur "Repository not found"
```bash
# Vérifier l'URL
git remote -v

# Vérifier que le repository existe sur GitHub
# https://github.com/WalidHALLOUCHE/WalidHALLOUCHE.github.io
```

### Erreur "Permission denied"
```bash
# Assurer que SSH est configuré ou utiliser HTTPS
# https://docs.github.com/en/authentication/connecting-to-github-with-ssh

# Ou regénérer les credentials
git credential reject
```

### Le site n'apparaît pas après 2-3 min
```bash
# Vérifier les settings
# Settings > Pages > Deploy from a branch > main / root

# Vérifier que .nojekyll existe
ls -la | grep .nojekyll

# Vérifier qu'il n'y a pas d'erreur 404 sur les fichiers
```

---

## 📊 Vérifier les Fichiers Sont Là

```bash
# Vérifier la structure
ls -R

# Vérifier les fichiers importants
ls -la | grep -E "(index.html|.nojekyll|robots.txt)"
ls assets/css/
ls assets/js/
ls assets/img/
ls assets/docs/
```

---

## 🚀 Timeline Estimation

| Étape | Durée |
|-------|-------|
| Configuration Git | 1 min |
| Créer repository GitHub | 1 min |
| Cloner | 1 min |
| Copier fichiers | 2 min |
| Push vers GitHub | 2 min |
| Configurer GitHub Pages | 1 min |
| Attendre déploiement | 1-2 min |
| **TOTAL** | **~10 min** |

✨ **Prêt à déployer!**
