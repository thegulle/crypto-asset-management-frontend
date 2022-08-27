<template>
	<el-config-provider namespace="ep">
		<BaseHeader />
		<div style="display: flex">
			<BaseSide />
			<div>
				<router-view />
			</div>
		</div>
	</el-config-provider>
</template>
