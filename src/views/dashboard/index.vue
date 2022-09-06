<template>
	<el-row gutter="20">
		<el-col
			:md="12"
			:lg="8"
			:sm="24"
			v-for="portfolio in myPortfolio"
			:key="portfolio.id"
		>
			<ExchangeCard :portfolio="portfolio" />
		</el-col>
	</el-row>
</template>
<script lang="ts" setup>
import { breadcrumbs } from "@/utils/breadcrumbs/"
import BinanceLogo from "@/assets/binance-logo.svg"
import GateLogo from "@/assets/gate-io-logo.svg"
import FtxLogo from "@/assets/ftx-logo.png"

onMounted(() => {
	breadcrumbs.dashboard.show()
})

const myPortfolio = reactive([
	{
		id: 1,
		exchangeName: "Binance",
		exchangeLogo: BinanceLogo,
		exchangeValue: 3800,
		exchangeVariation: 11.2,
	},

	{
		id: 2,
		exchangeName: "Gate.io",
		exchangeLogo: GateLogo,
		exchangeValue: 4800,
		exchangeVariation: -9.2,
	},

	{
		id: 3,
		exchangeName: "FTX",
		exchangeLogo: FtxLogo,
		exchangeValue: 5800,
		exchangeVariation: 17.2,
	},
])
</script>