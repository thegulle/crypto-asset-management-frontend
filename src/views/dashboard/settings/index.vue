<template></template>
<script lang="ts" setup>
import { breadcrumbs } from "@/utils/breadcrumbs/"

onMounted(() => {
	breadcrumbs.dashboard.settings()
})
</script>