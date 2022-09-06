import { useAppStore } from "@/store/AppStore"

const appStore = useAppStore()

export const show = () => {
  appStore.breadcrumbs.items = [
    { title: "Dashboard", router: { name: "dashboard.show" } },
  ]
}

export const profile = () => {
  appStore.breadcrumbs.items = [
    { title: "Dashboard", router: { name: "dashboard.show" } },
    { title: "Profile", router: { name: "profile.show" } },
  ]
}