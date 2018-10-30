<template>
  <div class="position-relative">
           <!-- shape Hero -->
           <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-primary shape-skew">

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
      <collaboratorComp namedC="Elisabeth" v-bind:imagePath="['img/theme/Elisabeth.jpg']" v-bind:randomFact = "['Lieblingsspitzname: Elsbet', 'Lieblingsfarbe: #033A0B', 'Lieblingsbuch: Harry Potter', 'hört gerne: Känguru Chroniken']"> </collaboratorComp>
    </div>
    <div class="col-sm">
      <collaboratorComp v-bind:buttonId = "2" v-bind:imagePath="['img/theme/Moritz.jpg']" namedC="Moritz" v-bind:randomFact="['war Mensch der Woche in der Bild der Frau', 'Lieblingsfarbe: #F16027', 'Lieblingsbiermarke: Oettinger', 'Die Standardstandart eines Flamingos ist einbeinig']"> </collaboratorComp>
    </div>
    <div class="col-sm">
      <collaboratorComp namedC="Jana" v-bind:imagePath="['img/theme/Jana.jpg']" v-bind:buttonId = "3" v-bind:randomFact = "['Lieblingsfarbe: #912453', 'Lieblingsfilm: Forrest Gump', 'Lieblingsbuch: Harry Potter', 'Lieblingsserie: Game of Thrones']"> </collaboratorComp>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <collaboratorComp v-bind:imagePath="['img/theme/Fynn.jpg']" v-bind:buttonId = "4" namedC="Fynn" v-bind:randomFact="['mag Anzüge', 'war im Silicon Valley :)', 'Lieblingsfarbe: #6B6B47', 'Lieblingsfilm: Forrest Gump', 'Lieblingssänger: Ed Sheeran','Kann die ersten 30 Stellen von PI auswendig']"> </collaboratorComp>
    </div>
    <div class="col-sm">
      <collaboratorComp v-bind:buttonId = "5" namedC="Jonas" v-bind:imagePath="['img/theme/Jonas.jpg']" v-bind:randomFact="['hat sein Bild zu spät eingereicht','hobbymäßiger Plattenleger', 'Lieblingsfarbe: #b4ffa5', 'Zitat:Ich kann schon HTML', 'Lieblingssong: Spaghetti Love']"> </collaboratorComp>
    </div>
    <div class="col-sm">
      <collaboratorComp v-bind:buttonId = "6" namedC="Ruben" v-bind:imagePath="['img/theme/Ruben.jpg']" v-bind:randomFact="['Hasst php debugging', 'Mag NodeJS nicht' , 'Lieblingsfarben: #FD602E, #9608C6', 'Zitat:Linux ist das sicherste Betriebssystem','Nutzt gerne Programme, die er dank der Uni umsonst kriegt. (Natürlich nur privat)']"> </collaboratorComp>
    </div>
  </div>
</div>
</template>

<script>
import collaboratorComp from "@/components/collaboratorComp";

export default {
  components: {
    collaboratorComp
  }
};
</script>
