<template>
  <div id="simulateur">
    <h1>Simulateur <span>Wave</span></h1>
    <div>
      <div><label for="montantEnvoye">Montant Envoyé</label></div>
      <div>
        <input
          type="number"
          name="montantEnvoye"
          v-model.number="montantEnvoye"
        />
      </div>
    </div>
    <div>
      <div>Montant Reçu</div>
      <div id="montant-Recu">{{ montantRecu }}</div>
    </div>
    <div>
      <div>Frais = {{ frais }} FCFA</div>
      <div class="pourcentage">{{ pourcentage }} %</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Simulateur",
  data() {
    return {
      montantEnvoye: "",
      montantRecu: 0,
      frais: 0,
      pourcentage: 0,
      color: "",
    };
  },
  watch: {
    montantEnvoye: function (montant) {
      let value = 0;
      if (this.montantEnvoye < 800) {
        value = Math.round(montant - montant / 100);
      } else {
        value = Math.floor(montant - montant / 100);
      }

      if (montant > 5) {
        if (montant > 500 && montant < 800) {
          if (value % 10 > 8) {
            while (value % 5 !== 0) {
              value++;
            }
          } else {
            while (value % 5 !== 0) {
              value--;
            }
          }

          if (this.montantEnvoye > 760 && this.montantEnvoye < 800) {
            value -= 5;
          }

          this.montantRecu = value;
        } else {
          while (value % 5 !== 0) {
            value--;
          }

          if (this.montantEnvoye > 20000) {
            let frais = Math.floor((value * 0.01) / 100);

            while (frais % 5 !== 0) {
              frais++;
            }

            value += frais;
          }

          this.montantRecu = value;
        }
        this.frais = this.montantEnvoye - this.montantRecu;
        this.pourcentage = (this.frais * 100) / this.montantEnvoye;
        if (this.frais < 5) {
          this.montantRecu -= 5;
        }
      }
    },
    pourcentage: function (num) {
      this.pourcentage = Math.round((num + Number.EPSILON) * 100) / 100;
      if (this.pourcentage > 1) {
        this.color = "red";
      } else if (this.pourcentage < 1) {
        this.color = "green";
      } else {
        this.color = "#007bff";
      }
    },
  },
  methods: {
    getLastDigit(num) {
      return +(num + "").slice(-1);
    },
  },
};
</script>

<style vars="{ color }">
#simulateur {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

#simulateur div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pourcentage {
  color: var(--color);
}
</style>