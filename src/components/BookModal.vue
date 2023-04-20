<template>
    <div v-if="open">
      <div class="absolute bg-slate-800 w-screen h-full bg-opacity-50 z-20 inset-0 flex items-center justify-end">
        <div class="modal p-6 bg-white rounded-lg border-2 mr-[10%] shadow-slate-700 shadow-xl">
          <div class="flex justify-between border-4 rounded-full py-1">
            <strong class="px-4 self-center">
              {{ book.title }}
            </strong>
            <span class="self-center py-2 px-4 mx-1 rounded-full hover:text-white hover:bg-slate-500 hover:font-bold cursor-pointer" @click.prevent="closeModal">X</span>
          </div>
          <div class="flex justify-between mt-6">
            <div class="book-cover shadow-slate-400 shadow-xl rounded-lg overflow-hidden mx-4 self-start">
              <img :src="'/'+folder+'/'+book.image" class="book-cover">
            </div>
            <div class="border-2 rounded-md overflow-y-auto w-1/2 p-2 shadow-slate-400 shadow-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit scelerisque mauris. Nulla aliquet porttitor lacus luctus accumsan tortor. Malesuada pellentesque elit eget gravida cum sociis natoque. Imperdiet proin fermentum leo vel orci. Fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque purus semper eget duis at tellus at. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Luctus accumsan tortor posuere ac ut consequat. In est ante in nibh mauris cursus mattis molestie. Sagittis id consectetur purus ut faucibus pulvinar.
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { useModalStore } from '@/stores/modal'
  import { mapState, mapActions } from 'pinia'

  export default {
    computed: {
      ...mapState(useModalStore, ["open", "folder", "book"])
    },

    methods: {
      ...mapActions(useModalStore, ["closeModal"])
    }
  }
</script>

<style scoped>
  .modal {
    width: 700px;
  }

  .book-cover {
    width: 250px;
  }
</style>
