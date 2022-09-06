<template>
	<el-menu
		default-active="2"
		class="el-menu-vertical-demo"
		:collapse="!appStore.sidebar.isOpen"
	>
		<button @click="appStore.toggleSidebar">Toggle</button>
		<el-sub-menu index="1">
			<!-- logo -->
			<template #title>
				<el-icon><location /></el-icon>
				<span>Navigator One</span>
			</template>
			<el-menu-item-group title="Group One">
				<el-menu-item index="1-3">item three</el-menu-item>
			</el-menu-item-group>
			<el-sub-menu index="1-4">
				<template #title><span>item four</span></template>
				<el-menu-item index="1-4-1">item one</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="2">
			<el-icon><icon-menu /></el-icon>
			<template #title>Navigator Two</template>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import {
	Location,
	Document,
	Menu as IconMenu,
	Setting,
} from "@element-plus/icons-vue"
import { useAppStore } from "@/store/AppStore"

const appStore = useAppStore()
</script>

<style scoped>
.el-menu-vertical-demo:not(.ep-menu--collapse) {
	width: 250px;
	display: block;
}
@media (max-width: 992px) {
	.el-menu-vertical-demo.ep-menu--collapse {
		display: none;
	}
}
.el-menu-vertical-demo {
	min-height: 100vh;
}
</style>
