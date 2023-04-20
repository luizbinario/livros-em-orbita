<template>
  <div class="h-screen overflow-hidden bg-black">
    <nav class="fixed w-full flex gap-4 p-2 justify-center z-20 bg-slate-700 text-white font-bold">
      <button @click.prevent="travelTo('past-fantastic')" class="border-2 px-4 py-1 rounded">Passado Fantástico</button>
      <button @click.prevent="travelTo('past-thinking')" class="border-2 px-4 py-1 rounded">Passado Pensante</button>
      <button @click.prevent="travelTo('present')" class="border-2 px-4 py-1 rounded">Presente</button>
      <button @click.prevent="travelTo('future')" class="border-2 px-4 py-1 rounded">Futuro</button>
    </nav>
    <div
      class="timeline h-full flex"
    >
      <div id="past-fantastic"
        class="w-screen flex justify-center items-center ease-in duration-1000"
        :style="{ transform: warp }"
      >
        <Moment when="past-fantastic" />
      </div>
      <div id="past-thinking"
        class="w-screen flex justify-center items-center ease-in duration-1000"
        :style="{ transform: warp }"
      >
        <Moment when="past-thinking" />
      </div>
      <div id="present"
        class="w-screen flex justify-center items-center ease-in duration-1000"
        :style="{ transform: warp }"
      >
        <Moment when="present" />
      </div>
      <div id="future"
        class="w-screen flex justify-center items-center ease-in duration-1000"
        :style="{ transform: warp }"
      >
        <Moment when="future" />
      </div>
    </div>
    <BookModal />
  </div>
</template>

<script>
  import Moment from './Moment.vue'
  import BookModal from './BookModal.vue'

  export default {
    components: {
      Moment,
      BookModal
    },

    data: () => {
      return {
        timeline: ["past-fantastic", "past-thinking", "present", "future"],
        warp: null
      }
    },

    created() {
      this.travelTo('present')
    },

    methods: {
      travelTo(when) {
        this.when = when
        let point = this.timeline.indexOf(when)
        this.warp = `translateX(-${point * 100}%)`
      },
    }
  }
</script>

<style scoped>
  .timeline {
    width: 400%;
  }
</style>
