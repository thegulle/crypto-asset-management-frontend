import { useAppStore } from "@/store/AppStore";
import { useRouter } from "vue-router";

const appStore = useAppStore();

export const useBreadcrumbs = (items: any) => {
  appStore.breadcrumbs.items = items;
}