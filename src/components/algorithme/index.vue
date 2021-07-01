<template>
  <div id="algorithme">
    <p>
      Chez Wave Sénégal, les frais de transfert d'argent sont à 1 % du montant,
      mais avec l'application d'un arrondi qui peut vous faire payer plus ou
      moins de 1 %.
    </p>
    <p>Nous avons tenté de comprendre comment les frais sont calculés.</p>
    <p>
      <a href="https://github.com/dofbi/Simulateur-Wave/issues/new"
        >Si vous rencontrez des erreurs, merci de nous les signaler</a
      >
    </p>
    <h2>Algorithme</h2>
    <h3>Montant minimum à envoyé</h3>
    <p>Est de 5 FCFA</p>
    <h3>Frais de transfert</h3>
    <p>Frais = Montant Envoyé - (Montant Envoyé / 100)</p>
    <h3>Si Frais inférieur à 5 FCFA</h3>
    <p>Des frais fixe de 5 FCFA sont appliqués</p>
    <h3>Si Montant à envoyé compris entre 500 FCFA et 800 FCFA</h3>
    <h3>Si Montant à envoyé supérieur à 800 FCFA</h3>
    <h2>Testeurs</h2>
    <ul>
      <li><a href="https://twitter.com/Freezer221">Soumpa Claude Ndecky</a></li>
      <li><a href="https://twitter.com/dieng_as">Malik Dieng</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Algorithme",
};
</script>

<style>
h2,
h3 {
  margin: 1em 0;
}
p {
  padding: 0.5em;
}
a {
  color: aqua;
}
#algorithme {
  width: 70%;
  margin: 0 auto;
}
</style>