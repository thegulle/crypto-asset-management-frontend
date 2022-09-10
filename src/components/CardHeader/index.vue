<template>
	<div class="card-header">
		<el-page-header @back="goBack">
			<template #content>
				<span class=""> Title </span>
			</template>
		</el-page-header>
	</div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()

const goBack = () => {
	window.history.length > 1 ? router.go(-1) : router.push("/")
}
</script>