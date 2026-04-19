'use strict';

const translations = {
	en: {
		nav_home:       'Home',
		nav_about:      'About',
		nav_projects:   'Projects',
		nav_experience: 'Experience',
		nav_skills:     'Skills',
		nav_resume:     'Resume/C.V',
		nav_contact:    'Contact',

		home_hi:    'Hi, my name is',
		home_title: 'AI Software Engineer & Hydraulic Engineer',
		home_bio:   'I\'m a Moroccan engineer based in Paris, France, currently working as an R&D Software Engineer at <a class="link" href="https://www.surfacelibre.fr/" target="_blank">Surface Libre</a>. I specialise in catastrophe risk modelling, spatio-temporal forecasting, and AI-driven hydrological analysis. Also freelancing on <a class="link" href="https://www.upwork.com/freelancers/~011f7490d7e632faa6" target="_blank">Upwork</a>.',
		home_btn:   'Get Started',

		about_title: 'Who am I?',
		about_text:  'My name is Zakaria Bouhia — an AI Software Engineer & Hydraulic Engineer with 3+ years of experience in catastrophe risk modelling, spatio-temporal forecasting, and AI-driven hydrological analysis. I am passionate about natural hazard assessment, climate data, and delivering data-driven solutions for flood risk and reinsurance applications.<br/><br/>I hold an Applied MSc in Data Science & Artificial Intelligence from <a class="link" href="https://www.datasciencetech.institute/" target="_blank">DSTI</a> (First Class A+), an MSc in Remote Sensing and Geomatics from <a class="link" href="https://u-paris.fr/en/" target="_blank">Paris Cité University</a>, and a State Engineering Degree in Civil / Hydraulic Engineering from the <a class="link" href="https://iav.ac.ma/" target="_blank">Hassan II Agronomic and Veterinary Institute</a> in Rabat, Morocco.<br/><br/>I am currently an R&D Software Engineer in AI & Geospatial Systems at <a class="link" href="https://www.surfacelibre.fr/" target="_blank">Surface Libre</a>, where I automate hydraulic software pipelines, integrate AI agents into simulation workflows, and develop spatio-temporal forecasting models for flood analysis. I was also selected for the <a class="link" href="https://codeforearth.ecmwf.int/" target="_blank">ECMWF Code for Earth 2025</a> programme.<br/><br/>Beyond my main role, I freelance on <a class="link" href="https://www.upwork.com/freelancers/~011f7490d7e632faa6" target="_blank">Upwork</a>, tackling diverse challenges in AI and software engineering.',

		projects_title:    'Some of my Projects',
		projects_github:   'More on my GitHub →',
		experience_title:  'Where I\'ve Worked',
		skills_title:      'What are my Skills?',
		contact_title:     'How to contact me?',

		sort_label:   'Sort by',
		sort_default: 'Default',
		sort_date:    'Date',
		sort_ai:      'AI',
	},
	fr: {
		nav_home:       'Accueil',
		nav_about:      'À propos',
		nav_projects:   'Projets',
		nav_experience: 'Expérience',
		nav_skills:     'Compétences',
		nav_resume:     'CV',
		nav_contact:    'Contact',

		home_hi:    'Bonjour, je m\'appelle',
		home_title: 'Software Engineer IA & Ingénieur Hydraulicien',
		home_bio:   'Je suis un ingénieur marocain basé à Paris, France, actuellement Ingénieur Logiciel R&D chez <a class="link" href="https://www.surfacelibre.fr/" target="_blank">Surface Libre</a>. Je me spécialise dans la modélisation du risque catastrophe, la prévision spatio-temporelle et l\'analyse hydrologique pilotée par l\'IA. Je travaille également en freelance sur <a class="link" href="https://www.upwork.com/freelancers/~011f7490d7e632faa6" target="_blank">Upwork</a>.',
		home_btn:   'Découvrir',

		about_title: 'Qui suis-je ?',
		about_text:  'Je m\'appelle Zakaria Bouhia — un Software Engineer IA & Ingénieur Hydraulicien avec plus de 3 ans d\'expérience en modélisation du risque catastrophe, prévision spatio-temporelle et analyse hydrologique assistée par l\'IA. Je suis passionné par l\'évaluation des risques naturels, les données climatiques et la mise en place de solutions orientées données pour les applications de gestion du risque d\'inondation et de réassurance.<br/><br/>Je suis titulaire d\'un MSc Appliqué en Data Science & Intelligence Artificielle de <a class="link" href="https://www.datasciencetech.institute/" target="_blank">DSTI</a> (Mention Très Bien, A+), d\'un MSc en Télédétection et Géomatique de l\'<a class="link" href="https://u-paris.fr/en/" target="_blank">Université Paris Cité</a>, et d\'un Diplôme d\'Ingénieur d\'État en Génie Civil / Hydraulique de l\'<a class="link" href="https://iav.ac.ma/" target="_blank">Institut Agronomique et Vétérinaire Hassan II</a> à Rabat, Maroc.<br/><br/>Je suis actuellement Software Engineer R&D en IA & Systèmes Géospatiaux chez <a class="link" href="https://www.surfacelibre.fr/" target="_blank">Surface Libre</a>, où j\'automatise les pipelines de logiciels hydrauliques, intègre des agents IA dans les workflows de simulation et développe des modèles de prévision spatio-temporels pour l\'analyse des crues. J\'ai également été sélectionné pour le programme <a class="link" href="https://codeforearth.ecmwf.int/" target="_blank">ECMWF Code for Earth 2025</a>.<br/><br/>En marge de mon activité principale, je m\'engage ponctuellement sur des missions à court terme pour des clients internationaux via <a class="link" href="https://www.upwork.com/freelancers/~011f7490d7e632faa6" target="_blank">Upwork</a>, en apportant mon expertise en IA et en ingénierie logicielle.',

		projects_title:    'Parmi mes Projets',
		projects_github:   'Plus sur mon GitHub →',
		experience_title:  'Mes Expériences',
		skills_title:      'Mes Compétences',
		contact_title:     'Comment me contacter ?',

		sort_label:   'Trier par',
		sort_default: 'Défaut',
		sort_date:    'Date',
		sort_ai:      'IA',
	}
};

function apply_language(lang)
{
	document.documentElement.lang = lang;
	localStorage.setItem('lang', lang);

	const t = translations[lang];

	// Toggle button label
	document.getElementById('lang_toggle').textContent = lang === 'en' ? 'FR' : 'EN';

	// Nav
	document.querySelector('.menu .home a').textContent        = t.nav_home;
	document.querySelector('.menu .about a').textContent       = t.nav_about;
	document.querySelector('.menu .projects a').textContent    = t.nav_projects;
	document.querySelector('.menu .experience a').textContent  = t.nav_experience;
	document.querySelector('.menu .skills a').textContent      = t.nav_skills;
	document.querySelector('#header .contact p').textContent   = t.nav_resume;

	// Mobile menu
	document.querySelectorAll('#menu_div .menu li a.not_button').forEach(a =>
	{
		const key = 'nav_' + (a.closest('li').className.split(' ')[0]);
		if (t[key]) a.textContent = t[key];
	});
	const mobileContactP = document.querySelector('#menu_div .contact p');
	if (mobileContactP) mobileContactP.textContent = t.nav_contact;

	// Home
	document.querySelector('#home_section .hi').textContent            = t.home_hi;
	document.querySelector('#home_section .title').textContent         = t.home_title;
	document.querySelector('#home_section .bio').innerHTML             = t.home_bio;
	document.querySelector('#home_section .home_button p').textContent = t.home_btn;

	// About
	document.querySelector('#about_section .section_title').textContent = t.about_title;
	document.querySelector('#about_section .p_1').innerHTML             = t.about_text;

	// Section titles
	document.querySelector('#projects_section .section_title').textContent   = t.projects_title;
	document.querySelector('#experience_section .section_title').textContent = t.experience_title;
	document.querySelector('#skills_section .section_title').textContent     = t.skills_title;
	document.querySelector('#contact_section .section_title').textContent    = t.contact_title;

	// Projects GitHub link
	const ghMore = document.querySelector('#projects_section .github_more');
	if (ghMore) ghMore.textContent = t.projects_github;

	// Sort choices
	const sortLabels = document.querySelectorAll('#projects_section .sort_choices .label');
	sortLabels.forEach(el => el.textContent = t.sort_label);

	const choices = document.querySelectorAll('#projects_section .sort_choices .choice');
	if (choices[0]) choices[0].textContent = t.sort_default;
	if (choices[1]) choices[1].textContent = t.sort_date;
	if (choices[2]) choices[2].textContent = t.sort_ai;

	// Re-render dynamic sections with new language
	if (typeof projects_regenerate === 'function') projects_regenerate();
	if (typeof experience_regenerate === 'function') experience_regenerate();
}

function lang_events()
{
	const saved = localStorage.getItem('lang') || 'en';
	document.documentElement.lang = saved;

	document.getElementById('lang_toggle').addEventListener('click', () =>
	{
		const current = document.documentElement.lang || 'en';
		apply_language(current === 'en' ? 'fr' : 'en');
	});

	if (saved === 'fr') apply_language('fr');
	else document.getElementById('lang_toggle').textContent = 'FR';
}
