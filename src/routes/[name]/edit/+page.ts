import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.name === 'Adeonatus') {
		return {
			characterName: 'Adeonatus',
			archetype: 'Believer',
			experience: 0,
			statusCondition: '',
			brawn: 1,
			wit: 0,
			will: 2,
			affluence: 0,
			currentVigor: 7,
			maxVigor: 7,
			grip: 6,
			armor: 7,
			advancements: [
				{
					name: 'The Holy Song of War',
					id: 6,
					type: ['Holy', 'Bardic', 'Commanding'],
					description:
						'For 1 Grip and an action, the character can grant the Song of War to a number of creatures up to their Will. This grants the creature(s) the Upper Hand to a single Attack Roll or Stat Check of their choice for a single combat or five minutes, whichever is shorter.'
				}
			],
			consequences: [],
			equipments: [
				{
					name: 'Rope',
					id: 0
				},
				{
					name: 'Torch',
					id: 1
				},
				{
					name: 'Backpack',
					id: 2
				},
				{
					name: 'Bedroll',
					id: 3
				},
				{
					name: 'Ration',
					id: 4
				},
				{
					name: 'Basic Armour',
					id: 5
				},
				{
					name: 'Shield',
					id: 7
				}
			],
			treasures: [],
			weapons: [
				{
					id: 2,
					name: 'Mace',
					type: {
						name: 0,
						range: 0,
						attack: [0],
						damageMod: 0,
						initiative: 0,
						modifiers: [
							{
								name: 0,
								type: 0,
								target: {
									damageMod: 1
								}
							}
						]
					}
				},
				{
					id: 6,
					name: 'Dagger',
					type: {
						name: 2,
						range: 0,
						attack: [1],
						damageMod: -1,
						initiative: 0,
						modifiers: [
							{
								name: 0,
								type: 0,
								target: {
									initiative: 1
								}
							}
						]
					}
				}
			]
		};
	}

	throw error(404, 'Not found');
}
