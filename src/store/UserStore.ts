import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', () => {
  const user = reactive({})
  return {
    user
  } as const
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
