# 💰 Budget Tracker — React TP (8h)

Bienvenue dans le projet **Budget Tracker**, une application de gestion de budget personnel développée en **React** avec **Vite**. Ce projet est réalisé en binôme avec une méthodologie de travail professionnelle (Git Flow, Pull Requests, Code Review).

**Lien du dépôt :** [https://github.com/MansouriYoucef/Budget_Tracker](https://github.com/MansouriYoucef/Budget_Tracker)

---

## 🎯 Objectifs du Projet
* **Gestion des transactions** : Ajouter, lister et supprimer des revenus et des dépenses.
* **Calcul en temps réel** : Visualisation du solde total, du cumul des revenus et des dépenses.
* **Filtrage** : Trier les transactions par type (Tous / Revenus / Dépenses).
* **Persistance** : Sauvegarde automatique des données via le `localStorage`.

---

## 🛠️ Stack Technique
* **Framework** : React.js (Vite)
* **State Management** : Hooks (`useState`, `useEffect`)
* **Versionning** : Git & GitHub (Branches, PR, Reviews)

---

## 👥 Répartition du Binôme

| Étudiant A | Étudiant B |
| :--- | :--- |
| Configuration & Setup | Architecture de la Liste |
| Formulaire d'ajout & Validation | Calculs du Solde & Totaux |
| Persistance (LocalStorage) | Système de Filtrage |

---

## 📈 Guide Étape par Étape (Déroulé du TP)

### 1. Setup & Git (1h)
- [ ] Créer le projet : `npm create vite@latest`
- [ ] Initialiser Git et lier le repo distant.
- [ ] Créer la branche `feature/setup`.
- [ ] Premier commit et push.

### 2. Modèle de données (30 min)
- [ ] Définir le state global dans `App.jsx`.
- [ ] Structure d'une transaction : 
  `{ id, title, amount, type: "income"|"expense", date }`

### 3. Formulaire d'ajout (1h30) — *Étudiant A*
- [ ] Créer `TransactionForm.jsx`.
- [ ] Gérer les inputs (titre, montant, type, date).
- [ ] Validation simple (champs non vides).
- [ ] **Git** : Branche `feature/form` -> Pull Request -> Review de B.

### 4. Liste des transactions (1h) — *Étudiant B*
- [ ] Créer `TransactionList.jsx` et `TransactionItem.jsx`.
- [ ] Affichage sous forme de tableau ou liste.
- [ ] Ajouter le bouton "Supprimer".
- [ ] **Git** : Branche `feature/list` -> Pull Request -> Review de A.

### 5. Calcul du solde (1h) — *Étudiant B*
- [ ] Créer `Balance.jsx`.
- [ ] Utiliser `.reduce()` pour calculer Revenus, Dépenses et Solde global.
- [ ] **Git** : Branche `feature/balance` -> Pull Request.

### 6. Filtrage (1h) — *Étudiant B*
- [ ] Créer `Filter.jsx` (Tous / Revenus / Dépenses).
- [ ] Filtrer l'affichage dans `App.jsx` sans modifier le state original.
- [ ] **Git** : Branche `feature/filter` -> Pull Request.

### 7. Persistance LocalStorage (1h) — *Étudiant A*
- [ ] `useEffect` pour charger les données au montage.
- [ ] `useEffect` pour sauvegarder à chaque modification de l'état.
- [ ] **Git** : Branche `feature/storage` -> Pull Request.

### 8. Qualité & UI (1h)
- [ ] CSS simple ou Framework (Tailwind/Shadcn).
- [ ] Vérification finale : au moins 6 PR et 2 reviews par personne.

---

## 🚀 Installation

1. `git clone https://github.com/MansouriYoucef/Budget_Tracker`
2. `npm install`
3. `npm run dev`

---
*Projet réalisé par l'équipe Mansouri dans le cadre du module React.*
