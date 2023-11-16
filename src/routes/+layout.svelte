<script>
	import { initializeApp } from "firebase/app";
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	const firebaseConfig = {
		apiKey: "AIzaSyDUIMEOPe-ZcrrTQiPwLPqNd7rh0ebkDbg",
		authDomain: "kural-8bca9.firebaseapp.com",
		projectId: "kural-8bca9",
		storageBucket: "kural-8bca9.appspot.com",
		messagingSenderId: "1068746810966",
		appId: "1:1068746810966:web:c24b5dde6dbaef16f37df7",
		measurementId: "G-L0P1YSFXSS"
	};

	// Initialize Firebase
const app = initializeApp(firebaseConfig);
</script>

<AppShell>
	<AppBar>
		<svelte:fragment slot="lead">
         <h1 class="h1">KURAL</h1>
		</svelte:fragment>

		<svelte:fragment slot="trail">
			<LightSwitch />
		</svelte:fragment>

		<svelte:fragment slot="headline">
         <p>Number 1 Thirukural app</p>
		</svelte:fragment>
	</AppBar>
	<slot/>
</AppShell>

