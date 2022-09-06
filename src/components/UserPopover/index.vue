<template>
	<div class="flex items-center px-4 pt-4 w-75">
		<div class="mr-4">
			<el-avatar
				shape="circle"
				:size="40"
				src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
			/>
		</div>
		<div>
			<div class="text-xl">Name Surname</div>
			<div>
				<span class="text-xs">Email</span>
			</div>
		</div>
	</div>
	<el-divider class="my-4" />
	<div>
		<ul class="user-menu">
			<li>Profile</li>
			<li class="flex justify-between" @click="toggleDark()">
				<div>Theme Mode</div>
				<div>{{ isDark ? "Dark" : "Light" }}</div>
			</li>
			<li @click="logout">Logout</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
import { toggleDark, isDark } from "@/composables/"
</script>
<style lang="scss">
.user-menu {
	@apply pb-4;
}
.user-menu li {
	&:hover {
		background-color: var(--el-bg-primary-hover);
	}

	@apply mx-3 p-4 rounded-xl cursor-pointer;
}
</style>