<template>
	<el-card class="exchange-card">
		<div class="top-side">
			<div class="info">
				<img :src="portfolio.exchangeLogo" alt="" />
				<div class="text">
					<h4>
						<i
							:class="
								portfolio.exchangeVariation > 0
									? 'text-lime-500 ph-caret-up'
									: 'text-red-500 ph-caret-down'
							"
						></i>
						<span>{{ portfolio.exchangeVariation }}</span>
					</h4>
					<h6>{{ portfolio.exchangeName }}</h6>
				</div>
			</div>

			<div class="value">$ {{ portfolio.exchangeValue }}</div>
		</div>

		<div class="card-chart"></div>
	</el-card>
</template>
<script setup lang="ts">
withDefaults(
	defineProps<{
		portfolio: any
	}>(),
	{}
)
</script>
