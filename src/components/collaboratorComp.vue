<template>
  <div class="template">
    <img v-bind:src="this.imagePath"
          class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
          style="width: 200px;" >

    <h2> {{namedC}} </h2>
      <button type="button" class="btn btn-outline-secondary" v-bind:id="this.buttonId" v-on:click="change()">{{randomFact[0]}}</button>
  </div>
</template>


<script>
export default {
  name: "CollaboratorComp",
  props: {
    randomFact: {
      type: Array,
      default: [
        "Ich mag keinen Käse",
        "Mein Lieblingsfont ist Chantal",
        "Ich bin toll"
      ],
      description: "randomFact"
    },
    namedC: {
      type: String,
      default: "Ina Müller",
      description: "Name des Collaborators"
    },
    // Ohne ButtonId wird immer der Fakt einer Person geändert, aber nicht derjenigen dessen Knopf gedrückt wurde
    buttonId: {
      type: Number,
      description: "Id für den button",
      default: 0
    },
    imagePath: {
      type: String,
      description: "Der Pfad zu dem Portrait",
      default: "img/theme/randomFrau.jpg"
    }
  },
  components: {},
  methods: {
    change() {
      // document.getElementById("fact1").classList.add('is-active');
      var x = parseInt(Math.random() * this.randomFact.length);
      console.log(x);
      document.getElementById(this.buttonId).innerHTML = this.randomFact[x];
    }
  }
};
</script>

<style>
img {
  margin-top: 5%;
  margin-bottom: 3%;
}

.template {
  text-align: center;
}

h2 {
  margin-bottom: 3%;
}

button {
  margin-bottom: 3%;
}
</style>
