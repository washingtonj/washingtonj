<script>
	import ContentLabel from '$lib/components/content-label.svelte';
	import Showcase from '$lib/components/showcase.svelte';
</script>

<section class="grid grid-cols-2 gap-14 py-14">
	<div class="h-fit grid gap-14">
		<ContentLabel name="About me">
			<p class="leading-none">
				It is a long established fact that a reader will be distracted by the readable content of a
				page when looking at its layout. The point of using Lorem Ipsum is that it has a
				more-or-less normal distribution of letters, as opposed to using 'Content here, content
				here', making it look like readable English. Many desktop publishing packages and web page
				editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
				uncover many web sites still in their infancy. Various versions have evolved over the years,
				sometimes by accident, sometimes on purpose (injected humour and the like).
			</p>
		</ContentLabel>

		<ContentLabel name="Academic background">
			<Showcase
				name="Computer Networks - Universidade Cidade de São Paulo"
				description="My first graduation, where I learned about computer networks, such as TCP/IP, OSI, and others."
				hint="2018 - 2020"
			/>
		</ContentLabel>

		<ContentLabel name="Certifications">
			<Showcase
				name="GitLab Certified Associate - GCA"
				description="An individual who has demonstrated proficiency in the fundamentals of Git & GitLab."
				hint="July 21 - ∞"
			/>
			<Showcase
				name="Scrum Foundation Professional Certificate - SFPC"
				description="Certification for professionals who are interested in obtaining a basic understanding of Agile and Scrum. by CertiProf"
				hint="November 20 - ∞"
			/>
			<Showcase
				name="DevOps Essentials Professional Certificate - DEPC"
				description="Certification for professionals who are interested in obtaining a basic understanding of DevOps. by CertiProf"
				hint="August 20 - August 22"
			/>
		</ContentLabel>
	</div>
	<div class="h-fit grid gap-14">
		<ContentLabel name="Experiences">
			<Showcase
				name="BEES Brasil - Software Engineer"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
				hint="September - Present"
			/>
			<Showcase
				name="UpLexis - FrontEnd Developer"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
				hint="May 20 - September 21"
			/>
			<Showcase
				name="Digital Pages - FrontEnd Developer"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
				hint="May 20 - September 21"
			/>
		</ContentLabel>

		<ContentLabel name="Open projects">
			<Showcase
				name="Diobis - Web Application"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
				hint="Vue, Nuxt and Typescript"
			/>
			<Showcase
				name="Beject - Javascript Package"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
				hint="Typescript,  Vite"
			/>
		</ContentLabel>
	</div>
</section>
