<script>
	import { t } from '$lib/i18n';
	import ContentLabel from '$lib/components/content-label.svelte';
	import Showcase from '$lib/components/showcase.svelte';
</script>

<section class="grid md:grid-cols-2 gap-14 py-8 md:py-14">
	<div class="h-fit grid gap-14">
		<ContentLabel name={$t('about.title')}>
			<p class="leading-none">
				{@html $t('about.me') }
			</p>
		</ContentLabel>

		<ContentLabel name={$t('academic_background.title')}>
			<Showcase
				name={$t('academic_background.bachelor')}
				description={$t('academic_background.bachelor.description')}
				hint="2018 - 2020"
			/>
		</ContentLabel>

		<ContentLabel name={$t('certifications.title')}>
			<Showcase
				name={$t('certifications.gca')}
				description={$t('certifications.gca.description')}
				hint={$t('certifications.gca.hint')}
			/>
			<Showcase
				name={$t('certifications.sfpc')}
				description={$t('certifications.sfpc.description')}
				hint={$t('certifications.sfpc.hint')}
			/>
			<Showcase
				name={$t('certifications.depc')}
				description={$t('certifications.depc.description')}
				hint={$t('certifications.depc.hint')}
			/>
		</ContentLabel>
	</div>
	<div class="h-fit grid gap-14">
		<ContentLabel name={$t('experiences.title')}>
			<Showcase
				name={$t('experiences.bees')}
				description={$t('experiences.bees.description')}
				hint={$t('experiences.bees.hint')}
			/>
			<Showcase
				name={$t('experiences.uplexis')}
				description={$t('experiences.uplexis.description')}
				hint={$t('experiences.uplexis.hint')}
			/>
			<Showcase
				name={$t('experiences.digitalpages')}
				description={$t('experiences.digitalpages.description')}
				hint={$t('experiences.digitalpages.hint')}
			/>
		</ContentLabel>

		<ContentLabel name={$t('open_projects.title')}>
			<Showcase
				name={$t('open_projects.diobis')}
				description={$t('open_projects.diobis.description')}
				hint={$t('open_projects.diobis.hint')}
			/>
			<Showcase
				name={$t('open_projects.beject')}
				description={$t('open_projects.beject.description')}
				hint={$t('open_projects.beject.hint')}
			/>
		</ContentLabel>
	</div>
</section>
