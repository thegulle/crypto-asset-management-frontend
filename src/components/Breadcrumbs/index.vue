<template>
	<el-breadcrumb separator="/" class="breadcrumb-container">
		<el-breadcrumb-item
			v-for="(breadcrumb, index) in appStore.breadcrumbs.items"
			:key="index"
		>
			<router-link v-if="breadcrumb.router" :to="breadcrumb.router">
				<b>
					<i class="ph-house text-xl" v-if="index === 0"></i>
					{{ breadcrumb.title }}</b
				>
			</router-link>
			<span v-else>{{ breadcrumb.title }}</span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router"
import { useAppStore } from "@/store/AppStore"

const appStore = useAppStore()
const router = useRouter()
</script>