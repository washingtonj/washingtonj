<script>
	import ContentLabel from '$lib/components/content-label.svelte';
	import Showcase from '$lib/components/showcase.svelte';
</script>

<section class="grid md:grid-cols-2 gap-14 py-8 md:py-14">
	<div class="h-fit grid gap-14">
		<ContentLabel name="About me">
			<p class="leading-none">
				I embarked on my adventures in the world of algorithms back in 2009 while trying to create
				interactions in my Photoshop projects. This led me to take a course to learn the
				fundamentals of Computer Science, where I delved deeper into web development (then known as
				Web Master). However, at that time, programming wasn't my primary objective as I was more
				drawn to creating screen designs (UI/UX or Web Design), and hardware was my favorite aspect
				of computers (the sounds of fax modems fascinated me).

				<br /><br />
				After spending a considerable amount of time working with computer networks (in DevOps and SysAdmin
				roles) and earning a degree in Computer Networks, I rediscovered my passion for algorithms and
				returned to the programming world to create solutions for DevOps and other routines problems.
				I fell in love with programming languages all over again and fully immersed myself in this world,
				developing solutions for enterprises and focusing on web development in general.
			</p>
		</ContentLabel>

		<ContentLabel name="Academic background">
			<Showcase
				name="Computer Networks - Universidade Cidade de São Paulo"
				description="My first graduation, where I learned about computer networks, such as TCP/IP, OSI, DevOps and others."
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
				description="Basics about the Agile and Scrum by CertiProf"
				hint="November 20 - ∞"
			/>
			<Showcase
				name="DevOps Essentials Professional Certificate - DEPC"
				description="Basics about de Agile and DevOps Culture by CertiProf"
				hint="August 20 - August 22"
			/>
		</ContentLabel>
	</div>
	<div class="h-fit grid gap-14">
		<ContentLabel name="Experiences">
			<Showcase
				name="BEES Brasil - Software Engineer"
				description="I am actively involved in the development of both Web and Mobile frontend applications, taking on responsibilities that range from creating UI/UX designs to implementing full-stack solutions. This entails working with frameworks and libraries such as React, NestJS, Flutter, and more. In addition to my frontend expertise, I am proficient in setting up DevOps pipelines, ensuring code integration and deployment."
				hint="September - Present"
			/>
			<Showcase
				name="UpLexis - FrontEnd Developer"
				description="As a member of the products and technology team, my role involved spearheading the development of Web applications using best practices and agile methods. I focused on delivering scalable and high-performance applications by leveraging the entire Vue and Nuxt ecosystem, complemented by libraries and utilities such as SASS, Tailwind, Storybook, and more."
				hint="May 20 - September 21"
			/>
			<Showcase
				name="Digital Pages - FrontEnd Developer"
				description="I was responsible for developing highly complex web applications using a wide range of technologies, including HTML, CSS, JavaScript, SASS, CSS Modules with Styled-Components, and ReactJS as the primary framework. I worked within an agile environment, following the Scrum methodology, to ensure efficient project management and collaboration. Additionally, I implemented DevOps practices through the Azure DevOps platform to streamline our development processes."
				hint="May 20 - September 21"
			/>
		</ContentLabel>

		<ContentLabel name="Open projects">
			<Showcase
				name="Diobis - Web Application"
				description="Diobis is a job platform created to simplify the job search process by utilizing GitHub repositories as a source of data."
				hint="Vue, Nuxt and Typescript"
			/>
			<Showcase
				name="Beject - Javascript Package"
				description="Beject provides a simple way to interact with arrays of objects in JavaScript. With it, you can create, update, remove, and change objects in an array in a pure way, receiving an existing array and returning a new one with the altered values."
				hint="Typescript,  Vite"
			/>
		</ContentLabel>
	</div>
</section>
