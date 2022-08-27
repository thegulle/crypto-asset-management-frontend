import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useAppStore = defineStore('AppStore', () => {
  const sidebar = reactive({
    isOpen: window.innerWidth >= 1200 ? true : false
  })
  const toggleSidebar = () => {
    sidebar.isOpen = !sidebar.isOpen
  }
  return {
    sidebar,
    toggleSidebar
  } as const
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
