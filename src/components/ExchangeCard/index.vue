<template>
	<el-card class="exchange-card" shadow="always" body-style="padding:0px;">
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

		<div class="card-chart">
			<apexchart
				type="area"
				height="150"
				:options="chartOptions"
				:series="series"
			/>
		</div>
	</el-card>
</template>
<script setup lang="ts">
import { chartOptions } from "./chart"

const series = [
	{
		name: "Value",
		data: [
			Math.floor(Math.random() * 1000),
			Math.floor(Math.random() * 2000),
			Math.floor(Math.random() * 1000),
			Math.floor(Math.random() * 3000)
		]
	}
]

withDefaults(
	defineProps<{
		portfolio: any
	}>(),
	{}
)
</script>

<style lang="scss">
.card-chart {
	.apexcharts-canvas {
		.apexcharts-svg {
			background-color: transparent !important;
		}
	}
}
</style>
