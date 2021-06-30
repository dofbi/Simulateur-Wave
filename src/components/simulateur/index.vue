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
      <div>Frais = {{ frais }}</div>
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
      let value = Math.floor(montant - montant / 100);

      if (montant > 5) {
        if (montant < 505) {
          while (value % 5 !== 0) {
            value--;
          }
          this.montantRecu = value;
        } else if (montant === 505) {
          while (value % 5 !== 0) {
            value++;
          }
          this.montantRecu = value;
        } else if (montant > 505 && montant < 799) {
          value -= 5;
          while (value % 5 !== 0) {
            value++;
          }
          this.montantRecu = value;
        } else if (montant >= 799 && montant < 800) {
          value -= 10;
          while (value % 5 !== 0) {
            value++;
          }
          this.montantRecu = value;
        } else {
          console.log(value);
          if (value % 10 < 8) {
            while (value % 5 !== 0) {
              value--;
            }
            console.log(value);
          } else {
            while (value % 5 !== 0) {
              value++;
            }
          }
          if (this.montantEnvoye > 800 && this.montantEnvoye < 1000) {
            value -= 5;
          } else if (
            this.montantEnvoye > 10000 &&
            this.montantEnvoye < 100000
          ) {
            value += 5;
          } else if (
            this.montantEnvoye >= 100000 &&
            this.montantEnvoye < 1000000
          ) {
            value += 10;
          } else if (this.montantEnvoye >= 1000000) {
            value += 100;
          }
          this.montantRecu = value;
        }
        this.frais = this.montantEnvoye - this.montantRecu;
        this.pourcentage = (this.frais * 100) / this.montantEnvoye;
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