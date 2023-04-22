<template>
    <div v-if="open">
      <div class="absolute bg-slate-800 w-screen h-full bg-opacity-50 z-20 inset-0 flex items-center justify-end">
        <div class="modal border bg-slate-900 bg-opacity-75 p-6 rounded-lg mr-[10%] shadow-slate-100 shadow-lg z-30">
          <div class="text-slate-600 bg-slate-100 flex justify-between rounded-full py-2 px-4 z-40">
            <strong class="px-4 self-center">
              {{ book.title }}
            </strong>
            <span class="self-center py-2 px-4 mx-1 rounded-full hover:text-white hover:bg-slate-600 font-bold cursor-pointer" @click.prevent="closeModal">X</span>
          </div>
          <div class="flex justify-between mt-6">
            <div class="book-cover shadow-slate-400 shadow-lg rounded-lg overflow-hidden mx-4 self-start">
              <img :src="'/'+folder+'/'+book.image" class="book-cover">
            </div>
            <div class="w-1/2">
              <div class="border-2 bg-white rounded-md overflow-y-auto p-2 mb-2 shadow-slate-400 shadow-lg book-info">
                <div>
                  <p v-if="book.info">
                    {{book.info}}
                  </p>
                  <p v-else>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit scelerisque mauris. Nulla aliquet porttitor lacus luctus accumsan tortor. Malesuada pellentesque elit eget gravida cum sociis natoque. Imperdiet proin fermentum leo vel orci. Fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque purus semper eget duis at tellus at. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Luctus accumsan tortor posuere ac ut consequat. In est ante in nibh mauris cursus mattis molestie. Sagittis id consectetur purus ut faucibus pulvinar.
                  </p>
                </div>
              </div>
              <div class="flex p-4 justify-between text-slate-600">
                <font-awesome-icon icon="star" class="cursor-pointer"
                  v-for="star in 5" :key="star"
                  @click="starBook(star)"
                  :class="[star <= bookRank ? 'text-slate-100' : '']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { useModalStore } from '@/stores/modal'
  import { mapState, mapActions } from 'pinia'

  export default {
    data:() => {
      return {
        bookRank: 0,
      }
    },

    computed: {
      ...mapState(useModalStore, ["open", "folder", "book"])
    },

    methods: {
      ...mapActions(useModalStore, ["closeModal"]),

      starBook(star) {
        this.bookRank = star
      }
    }
  }
</script>

<style scoped lang="scss">
  .modal {
    width: 700px;
    user-select: none;
  }

  .book-cover {
    width: 250px;
  }

  .book-info {
    height: 250px;
  }
  .book-info::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
  }
  .book-info::-webkit-scrollbar-track {
    background: white;        /* color of the tracking area */
  }
  .book-info::-webkit-scrollbar-thumb {
    @apply bg-slate-600;    /* color of the scroll thumb */
    border: 3px solid white;  /* creates padding around scroll thumb */
  }
</style>
