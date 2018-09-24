<template>
  <div class="row">
    <div class="col-sm">
      <collaboratorComp namedC="Sophia von den Bergen" v-bind:randomFact = "['Lieblingsfarbe: #0000', 'Ich hasse alles']"> </collaboratorComp>
    </div>
    <div class="col-sm">
      <collaboratorComp v-bind:buttonId = "2" namedC="Fynn" v-bind:randomFact="['Ist der schrullige Programmierer des Teams', 'Mag den Pina Colada Song']"> </collaboratorComp>
    </div>
  </div>
</template>

<script>
import collaboratorComp from "@/components/collaboratorComp";

export default {
  components: {
    collaboratorComp
  },
};

</script>
