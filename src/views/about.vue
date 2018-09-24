<template>
  <div class="position-relative">
           <!-- shape Hero -->
           <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
               <div class="container shape-container d-flex">
                   <div class="col px-0">
                       <div class="row">
                           <div class="col-lg-6">
                               <h1 class="display-3  text-white">Hallo
                                   <span>Wir sind eduship</span>
                               </h1>
                             </div>
                      </div>
                  </div>
                </div>
            </section>
  <div class="row">
    <div class="col-sm">
      <collaboratorComp namedC="Sophia von den Bergen" v-bind:randomFact = "['Lieblingsfarbe: #0000', 'Ich hasse alles']"> </collaboratorComp>
    </div>
    <div class="col-sm">
      <collaboratorComp v-bind:buttonId = "2" namedC="Fynn" v-bind:randomFact="['Ist der schrullige Programmierer des Teams', 'Mag den Pina Colada Song']"> </collaboratorComp>
    </div>
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
