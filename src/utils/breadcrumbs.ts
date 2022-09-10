import { useAppStore } from "@/store/AppStore";

const appStore = useAppStore();

export const useBreadcrumbs = (items: any) => {
  appStore.breadcrumbs.items = items;
}