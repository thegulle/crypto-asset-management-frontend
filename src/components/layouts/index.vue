<template>
	<el-config-provider namespace="ep">
		<div style="display: flex">
			<BaseSide />
			<el-container class="content">
				<el-main>
					<BaseHeader />
					<router-view />
				</el-main>
			</el-container>
		</div>
	</el-config-provider>
</template>
