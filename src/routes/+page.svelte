<script>
	import { Locales, setLocale, currentLocale } from '$lib/i18n';
	import ButtonGroup from '$lib/components/button-group.svelte';
	import About from './about.svelte';
</script>

<title> Washington Junior | Software Engineer </title>

<section
	class="pt-28 md:pt-48 mb-12 md:mb-32 w-fit mx-auto flex flex-col items-center justify-center"
>
	<span class="uppercase">
		<span class="flex md:justify-between">
			<h2 class="text-5xl mr-4 md:mr-0 md:text-6xl font-black">Hi, I'm</h2>
			<p class="text-md md:text-2xl italic self-end font-medium">Software Engineer</p>
		</span>
		<h1 class="text-5xl md:text-6xl font-black">WASHINGTON JUNIOR</h1>
	</span>

	<div class="w-full flex items-center mt-4">
		<div class="w-[85%] flex gap-3">
			<a href="https://www.linkedin.com/in/washington-junior-7136a8101">
				<svg
					viewBox="0 0 18 18"
					fill="inherit"
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 md:w-6"
					><title>LinkedIn</title><path
						d="M16.906.406H1.094a.687.687 0 00-.688.688v15.812c0 .38.307.688.688.688h15.812c.38 0 .688-.308.688-.688V1.094a.687.687 0 00-.688-.688zM5.504 15.052h-2.55V6.85h2.55v8.203zM4.23 5.728a1.478 1.478 0 110-2.956 1.478 1.478 0 010 2.956zm10.822 9.324h-2.548v-3.99c0-.951-.017-2.174-1.325-2.174-1.326 0-1.53 1.036-1.53 2.106v4.058H7.103V6.85h2.445v1.122h.034c.34-.645 1.171-1.326 2.413-1.326 2.582 0 3.057 1.7 3.057 3.908v4.5z"
						fill="current"
					/></svg
				>
			</a>
			<a href="https://codesandbox.io/u/washingtonj">
				<svg
					viewBox="0 0 19 21"
					fill="inherit"
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 md:w-6"
					><title>CodeSandbox</title><path
						d="M.118 5.47L9.138.295l9.02 5.177.077 10.31L9.138 21l-9.02-5.177V5.471zm1.801 2.141v4.104l2.886 1.605v3.033l3.427 1.981v-7.136L1.919 7.61zm14.442 0l-6.313 3.587v7.136l3.427-1.98v-3.032l2.886-1.606V7.61v.001zM2.82 5.99l6.301 3.575 6.315-3.606-3.34-1.895L9.157 5.74l-2.96-1.698-3.375 1.945v.001z"
						fill="current"
					/></svg
				>
			</a>
			<a href="https://github.com/washingtonj">
				<svg
					viewBox="0 0 17 18"
					fill="inherit"
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 md:w-6"
					><title>GitHub</title><path
						d="M15.021.507H1.803C.807.507 0 1.323 0 2.327v13.346c0 1.004.807 1.82 1.803 1.82H15.02c.995 0 1.802-.816 1.802-1.82V2.327c0-1.004-.807-1.82-1.802-1.82zm-4.608 14.548c-.315.057-.432-.14-.432-.303 0-.205.008-1.252.008-2.097 0-.592-.195-.967-.424-1.164 1.39-.155 2.854-.349 2.854-2.772 0-.69-.245-1.035-.643-1.478.064-.163.278-.834-.063-1.706-.522-.163-1.717.678-1.717.678a5.798 5.798 0 00-1.562-.212c-.53 0-1.066.072-1.562.212 0 0-1.194-.841-1.716-.678-.342.868-.131 1.539-.064 1.706-.398.443-.586.788-.586 1.478 0 2.412 1.401 2.617 2.79 2.772-.18.163-.341.444-.398.845-.356.163-1.269.444-1.813-.527-.342-.599-.958-.648-.958-.648-.608-.008-.041.387-.041.387.405.19.69.917.69.917.365 1.126 2.107.747 2.107.747 0 .527.008 1.384.008 1.54 0 .162-.113.36-.432.303-2.478-.838-4.213-3.219-4.213-6.002 0-3.48 2.636-6.123 6.083-6.123s6.241 2.643 6.241 6.123c.004 2.783-1.678 5.168-4.157 6.002zM6.73 12.738c-.07.016-.139-.015-.146-.064-.008-.057.041-.106.113-.121.071-.008.139.022.146.072.011.049-.037.098-.113.113zm-.356-.034c0 .05-.057.091-.132.091-.082.008-.139-.034-.139-.09 0-.05.057-.092.132-.092.071-.007.139.034.139.091zm-.515-.042c-.015.05-.09.072-.154.05-.071-.015-.12-.072-.105-.122.015-.049.09-.072.154-.056.075.022.124.08.105.128zm-.462-.204c-.034.041-.105.034-.161-.023-.057-.05-.072-.121-.034-.155.034-.042.105-.035.162.022.048.05.067.125.033.156zm-.341-.345c-.034.023-.098 0-.14-.057-.04-.057-.04-.121 0-.148.042-.034.106-.008.14.05.04.056.04.124 0 .155zm-.245-.368c-.033.034-.09.015-.131-.023-.041-.05-.049-.106-.015-.133.034-.034.09-.015.131.023.042.05.05.106.015.133zm-.251-.28c-.015.034-.064.041-.105.015-.05-.023-.072-.065-.057-.099.015-.023.057-.034.106-.015.048.026.07.068.056.098z"
						fill="current"
					/></svg
				>
			</a>
		</div>

		<p class="text-sm text-end">
			Tech lover and troubleshooting guy, I create solutions using technology and algorithms.
		</p>
	</div>
</section>

<div class="container m-auto max-w-screen-2xl">
	<ButtonGroup>
		{#each Locales as locale}
			<button class:selected={locale === $currentLocale} on:click={() => setLocale(locale)}>
				{locale}</button
			>
		{/each}
	</ButtonGroup>

	<About />
</div>
