<template>
	<el-header class="el-header-main">
		<div class="header-left">
			<button @click="appStore.toggleSidebar" class="toggle-sidebar-btn">
				<i class="ph-list" />
			</button>
			<Breadcrumbs />
		</div>
		<div class="header-right">
			<div class="dark-toggle">
				<button @click="toggleDark()">
					<i :class="isDark ? 'ph-moon' : 'ph-sun'"></i>
				</button>
			</div>
			<el-dropdown>
				<el-avatar
					shape="circle"
					class="user-avatar"
					:size="42"
					src="https://i.pinimg.com/474x/0c/c8/5b/0cc85bfe48f5c36adf3d1e769ff8cf3a.jpg"
				/>
				<i class="ph-caret-down" />
				<template #dropdown>
					<UserPopover />
				</template>
			</el-dropdown>
		</div>
	</el-header>
</template>
<script lang="ts" setup>
import { toggleDark, isDark } from "@/composables"

import { useAppStore } from "@/store/AppStore"

const appStore = useAppStore()
</script>