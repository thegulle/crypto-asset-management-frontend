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
    { title: "Profile", router: { name: "dashboard.profile.show" } },
  ]
}

export const portfolio = () => {
  appStore.breadcrumbs.items = [
    { title: "Dashboard", router: { name: "dashboard.show" } },
    { title: "Portfolio", router: { name: "dashboard.portfolio.show" } },
  ]
}

export const settings = () => {
  appStore.breadcrumbs.items = [
    { title: "Dashboard", router: { name: "dashboard.show" } },
    { title: "Settings", router: { name: "dashboard.settings.show" } },
  ]
}