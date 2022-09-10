<template>
	<div class="flex items-center px-4 pt-4 w-75 bg-primary">
		<div class="mr-4 mt-2">
			<el-avatar
				shape="circle"
				:size="40"
				src="https://i.pinimg.com/474x/0c/c8/5b/0cc85bfe48f5c36adf3d1e769ff8cf3a.jpg"
			/>
		</div>
		<div>
			<div class="text-xl">Username</div>
			<div>
				<span class="text-xs">test@cryptolyo.com</span>
			</div>
		</div>
	</div>
	<el-divider class="my-4 mb-2 bg-primary" />
	<div>
		<ul class="user-menu">
			<router-link :to="{ name: 'dashboard.profile.show' }">
				<li>Profile</li>
			</router-link>
			<li @click="logout">Logout</li>
		</ul>
	</div>
</template>
<style lang="scss">
.user-menu {
	@apply pb-4;
}
.ep-scrollbar {
	background-color: var(--el-bg-primary) !important;
}
.user-menu li {
	@apply mx-3 p-4 rounded-xl cursor-pointer;
	&:hover {
		background-color: var(--el-bg-primary-hover);
	}
}
</style>