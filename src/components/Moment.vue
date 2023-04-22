<template>
  <div
    class="w-screen h-screen flex items-center justify-center inner-shadow"
    :class="['bg-'+when+' bg-cover bg-center']"
  >
    <div class="orbit w-96 h-96 flex flex-col items-center justify-center ease-in duration-1000 z-10">
      <div
        class="gravity rounded-full w-20 h-20 shadow-xl shadow-slate-100 overflow-hidden"
      >
        <img src="avatar.png" class="avatar rounded-full">
      </div>
      <b v-for="(book, index) in books" :key="index"
        class="book ease-in duration-1000 absolute cursor-pointer shadow-lg shadow-slate-100"
        :class="[positions[index]]"
        @click.prevent="openModal(when, books[index])"
      >
        <img class="w-14 h-18 border-2 rounded" :src="'/'+when+'/'+books[index].image">
      </b>
    </div>
  </div>
</template>

<script>
  import orbits from '@/data/orbits.json'
  import { useModalStore } from '@/stores/modal'
  import { mapState, mapActions } from 'pinia'

  export default {
    name: "Moment",

    props: {
      when: {
        type: String,
        required: true
      }
    },

    data: () => {
      return {
        books: [],
        positions: [
          "-top-10",
          "-top-10 -right-8",
          "-right-8",
          "-bottom-10 -right-8",
          "-bottom-10",
          "-bottom-10 -left-8",
          "-left-8",
          "-top-10 -left-8",
        ]
      }
    },

    created() {
      this.books = orbits[this.when]
    },

    computed: {
      ...mapState(useModalStore, ["open", "folder", "book"])
    },

    methods: {
      ...mapActions(useModalStore, ["openModal"])
    }
  }
</script>

<style scoped>
  .orbit, .avatar, .book {
    animation-duration: 30000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .orbit, .gravity { animation-name: spinFoward; }

  .avatar, .book { animation-name: spinBackwards; }

  @keyframes spinFoward {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }

  @keyframes spinBackwards {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(-360deg);
      }
  }
  .bg-past-fantastic {
    background-image: url('/backgrounds/past-fantastic.jpg');
  }
  .bg-past-thinking {
    background-image: url('/backgrounds/past-thinking.jpg');
  }
  .bg-present {
    background-image: url('/backgrounds/present.jpg');
  }
  .bg-future {
    background-image: url('/backgrounds/future.jpg');
  }
  .inner-shadow {
    box-shadow: rgb(0, 0, 0) 0px 0px 100px 15px inset;
  }
</style>
