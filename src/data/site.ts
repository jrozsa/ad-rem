export const site = {
	brand: 'AD-REM',
	tagline: 'Farma v Behynciach pri Tornali',
	location: 'Behynce, 982 01 Tornaľa',
	region: 'juhozápadné Slovensko',
	phone: {
		display: '[telefón]',
		href: 'tel:+421000000000',
	},
	email: {
		display: '[e-mail]',
		href: 'mailto:info@example.sk',
	},
	company: {
		name: '[Názov spoločnosti]',
		contactPerson: '[Kontaktná osoba]',
		ico: '[IČO]',
		dic: '[DIČ]',
		icDph: '[IČ DPH]',
	},
} as const;

export const nav = [
	{ href: '/', label: 'Domov' },
	{ href: '/polnohospodarstvo/', label: 'Poľnohospodárstvo' },
	{ href: '/lesnicke-sluzby/', label: 'Lesnícke služby' },
	{ href: '/kontakt/', label: 'Kontakt' },
] as const;

export const forestryServices = [
	{
		title: 'Ťažba dreva',
		description:
			'Realizujeme ťažbu podľa dohodnutého rozsahu, terénnych podmienok a požiadaviek vlastníka.',
	},
	{
		title: 'Približovanie dreva',
		description:
			'Zabezpečujeme približovanie drevnej hmoty z porastu na odvozné miesto.',
	},
	{
		title: 'Manipulácia a sortimentácia',
		description:
			'Upravíme a roztriedime drevo podľa požadovaných sortimentov a ďalšieho využitia.',
	},
	{
		title: 'Odvoz drevnej hmoty',
		description:
			'Zabezpečujeme odvoz dreva podľa dohody a dostupnosti prístupových ciest.',
	},
	{
		title: 'Výkup dreva na pni',
		description:
			'Pri vhodných zákazkách je možný výkup dreva na pni po osobnej obhliadke.',
	},
	{
		title: 'Kalamitná ťažba',
		description:
			'Pomáhame s odstraňovaním kalamitného dreva a obnovou porastu po poškodení.',
	},
	{
		title: 'Prerezávky a čistenie porastov',
		description:
			'Vykonávame výchovné zásahy a čistenie porastov s ohľadom na ich ďalší vývoj.',
	},
	{
		title: 'Štiepkovanie',
		description:
			'Ponúkame štiepkovanie zvyškov po ťažbe podľa dohodnutého rozsahu prác.',
	},
	{
		title: 'Výsadba a obnova lesa',
		description:
			'Podieľame sa na výsadbe a obnove lesa podľa požiadaviek zákazníka a lokality.',
	},
] as const;

export const whyUs = [
	'Priama komunikácia',
	'Individuálna cenová ponuka',
	'Praktické skúsenosti',
	'Vlastná technika',
	'Jasne dohodnutý rozsah prác',
	'Osobná obhliadka zákazky',
] as const;
