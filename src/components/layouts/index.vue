<template>
	<el-config-provider namespace="ep">
		<div style="display: flex">
			<BaseSide />
			<div class="content">
				<el-main>
					<BaseHeader />
					<router-view />
				</el-main>
			</div>
		</div>
	</el-config-provider>
</template>
<style lang="scss" scoped>
.content {
	transition: all 0.3s;
	width: 100%;
}
</style>
