<template>
	<el-menu
		default-active="2"
		class="el-menu-vertical-demo"
		:collapse="!appStore.sidebar.isOpen"
	>
		<img
			src="@/assets/logo.png"
			alt=""
			class="logo"
			:class="!appStore.sidebar.isOpen ? 'opacity-0' : ''"
		/>
		<router-link :to="{ name: 'dashboard.show' }" class="ep-menu-item" exact>
			<el-icon>
				<i class="ph-gauge"></i>
			</el-icon>
			<span>Dashboard</span>
		</router-link>
		<router-link
			:to="{ name: 'dashboard.portfolio.show' }"
			class="ep-menu-item"
			exact
		>
			<el-icon>
				<i class="ph-briefcase"></i>
			</el-icon>
			<span>Portfolio</span>
		</router-link>
		<router-link
			:to="{ name: 'dashboard.settings.show' }"
			class="ep-menu-item"
			exact
		>
			<el-icon>
				<i class="ph-gear-six"></i>
			</el-icon>
			<span>Settings</span>
		</router-link>
	</el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/AppStore"

const appStore = useAppStore()
</script>

<style scoped>
.el-menu-vertical-demo {
	min-height: 100vh;
}
.el-menu-vertical-demo:not(.ep-menu--collapse) {
	width: 250px !important;
}

@media (max-width: 992px) {
	.el-menu-vertical-demo:not(.ep-menu--collapse) {
		width: 350px !important;
	}
}
</style>
