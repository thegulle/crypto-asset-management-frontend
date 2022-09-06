import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', () => {
  const sidebar = reactive({
    isOpen: window.innerWidth >= 1200 ? true : false
  })
  const breadcrumbs: any = reactive({
    items: [{ title: 'Dashboard', router: { name: 'dashboard.show' } }]
  })
  const toggleSidebar = () => {
    sidebar.isOpen = !sidebar.isOpen
  }
  return {
    sidebar,
    breadcrumbs,
    toggleSidebar
  } as const
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
