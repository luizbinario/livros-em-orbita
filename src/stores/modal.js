import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    open: false,
    folder: null,
    book: null
  }),

  actions: {
    openModal(folder, book) {
      this.folder = folder
      this.book = book
      this.open = true
    },

    closeModal() {
      this.open = false
    }
  }
})
