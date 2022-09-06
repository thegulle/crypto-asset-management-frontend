<template>
	<el-card>
		<h1 class="text-2xl">Profile!</h1>
	</el-card>
</template>

<script lang="ts" setup>
import { breadcrumbs } from "@/utils/breadcrumbs/"

onMounted(() => {
	breadcrumbs.dashboard.profile()
})
</script>