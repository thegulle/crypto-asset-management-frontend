<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		:ellipsis="false"
		@select="handleSelect"
	>
		<el-menu-item index="0"> LOGO </el-menu-item>
		<div class="flex-grow" />
		<el-sub-menu index="2">
			<template #title>
				<el-avatar
					shape="circle"
					:size="35"
					src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
				/>
			</template>
			<UserPopover />
		</el-sub-menu>
	</el-menu>
</template>
<script lang="ts" setup>
import { toggleDark } from "@/composables"

import { useAppStore } from "@/store/AppStore"

const appStore = useAppStore()
</script>