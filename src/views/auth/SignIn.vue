<template>
	<el-config-provider namespace="ep">
		<div class="auth-page">
			<img
				src="https://d9hhrg4mnvzow.cloudfront.net/marketing.exness.com/crypto/c8d0cf0b-bitcoin-gif.gif"
				class="crypto-1"
			/>

			<el-main>
				<el-row>
					<el-col :lg="12" :md="12" :sm="24">
						<img src="@/assets/logo.png" alt="" class="logo" />

						<el-form label-position="top">
							<div class="title">
								<h6>Welcome</h6>
								<h4>Sign In</h4>
							</div>

							<el-form-item label="Email">
								<el-input
									type="text"
									placeholder="example@gmail.com"
									v-model="userData.email"
								/>
							</el-form-item>

							<el-form-item label="Password">
								<el-input
									type="password"
									placeholder="*********"
									autocomplete="off"
									name="fakeusernameremembered"
									v-model="userData.password"
								/>
							</el-form-item>

							<el-form-item>
								<el-button class="button" type="primary">Login</el-button>
							</el-form-item>
						</el-form>
						<div class="actions">
							<router-link :to="{ name: 'forgot-password' }">
								<span class="forgot-password">Forgot Password ?</span>
							</router-link>

							<div class="sign-account">
								<span>Don’t have an account?</span>

								<router-link :to="{ name: 'sign-up' }">
									<span class="sign-up">Sign Up</span>
								</router-link>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-main>
		</div>
	</el-config-provider>
</template>

<script lang="ts" setup>
const userData = ref({
	email: "",
	password: "",
	remember_me: false
})
</script>