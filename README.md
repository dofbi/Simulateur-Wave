# Simulateur Wave

Simulateur de l'application Wave - Transfert d'Argent

Chez Wave Sénégal, les frais de transfert d'argent sont à 1 % du montant, mais avec l'application d'un arrondi qui peut vous faire payer plus ou moins de 1 %.

Nous avons tentez de comprendre comment les frais sont calculer

## Erreurs

[Si vous rencontrez des erreurs, merci de nous les signaler](https://github.com/dofbi/Simulateur-Wave/issues/new)

## Algorithme

### Montant minimum à envoyé

Est de 5 FCFA

### Frais de transfert

Frais = Montant Envoyé - (Montant Envoyé / 100)

### Si Frais inférieur à 5 FCFA

Des frais fixe de 5 FCFA sont appliqués

### Si Montant à envoyé compris entre 500 FCFA et 800 FCFA

### Si Montant à envoyé supérieur à 800 FCFA

## [Data Test](test/data.js)

## Testeurs

- [Soumpa Claude Ndecky](https://twitter.com/Freezer221)
- [Malik Dieng](https://twitter.com/dieng_as)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
