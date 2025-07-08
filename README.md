# 🧮 Factorisation Fractionnaire

Ce projet est une démonstration de la **méthode de factorisation fractionnaire** pour les nombres impairs composés.  
L’objectif est de **trouver un facteur premier** d’un nombre impair donné en utilisant une technique originale basée sur la division par des décimaux de la forme `X.25` ou `X.75`.

---

## ⚙️ Fonctionnement

1. L'utilisateur entre un **nombre impair composé** `O` (par exemple `77`).
2. Le programme divise `O` successivement par des dénominateurs de la forme :
   - `1.25`, `1.75`
   - `2.25`, `2.75`
   - `3.25`, `3.75`
   - …
   - Jusqu’à `N.25` ou `N.75`
3. Si le résultat est un **quotient entier**, ce quotient est ensuite divisé par `4`.
4. Si ce résultat est un **nombre premier**, il est retourné comme facteur de `O`.
5. Sinon, la boucle continue jusqu'à trouver un facteur ou afficher "Aucun facteur trouvé".

---

## 🔢 Exemple

- Pour `O = 77` :
  - `77 ÷ 1.75 = 44`
  - `44 ÷ 4 = 11` → **11 est un facteur premier de 77**

---

## 🚀 Comment utiliser

1. Ouvrez le fichier `index.html` dans votre navigateur.
2. Tapez un nombre impair (ex. 143, 221…).
3. Cliquez sur **“Trouver le facteur premier”**.
4. Résultat affiché : un facteur premier ou un message d’échec.

---

## 📁 Fichiers du projet

- `index.html` : Interface du site
- `style.css` : Mise en page
- `script.js` : Algorithme de factorisation
- `README.md` : Documentation

---

## 👨‍🔬 Auteur

Ce projet a été conçu par **Bahbouhi Bouchaib**, chercheur indépendant à Nantes (France).  
Méthode originale, mise à disposition en accès libre.
