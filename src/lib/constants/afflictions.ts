export enum AfflictionType {
	'Character Flaw' = 'Character Flaw',
	'Growing Affliction' = 'Growing Affliction',
	'Special Affliciton' = 'Special Affliciton'
}

export const AFFLICTIONS = [
	{
		name: 'Adored By All',
		description:
			'Look, you were simply born likable, charismatic and charming. You can’t help it! Characters Adored by All find it inconceivable anyone dislikes, holds grudges against or fails to instantly forgive them. They may be socially unaware, cocky or cruel as they retain their joviality even with their victims.',
		type: [AfflictionType['Character Flaw']],
		id: 0
	},
	{
		name: 'At Home In The Crypt',
		description:
			'The Crypt is no place for humanity, we are unwelcome. Those At Home in the Crypt believe they are the exception. Their humanity is slowly eroding as they adapt to being among the Crypt’s denizens.\n At Home in the Crypt is triggered when the Cryptdigger is leaving a Crypt. Roll a Will Check or lose 1 Grip as they come to terms with returning to the mundane world they abandoned.',
		type: [AfflictionType['Growing Affliction']],
		id: 1
	},
	{
		name: 'Blade Of Renown',
		description:
			'Cryptdiggers with Blade of Renown believe they own some fated, heavily enchanted weapon. They either believe their (entirely mundane) weapon is touched by magic, or grossly overestimate their magical weapon’s power. Foolishly trusting in their armament’s power, they are braggadocious and dangerously overconfident. They charge into the fray convinced their weapon will grant victory or loudly boast of their new-found invincibility and the great deeds they’ll perform.',
		type: [AfflictionType['Character Flaw']],
		id: 2
	},
	{
		name: 'Blood-Nausea',
		description:
			'Those with Blood-Nausea are disgusted by blood and injury. Performing violence is no different, but inflicting wounds and injuries are anathema to them. The sight, smell and thought are too much.\n When causing or witnessing an Injury (caused by Attack or ability), lose 1 Grip. All Grip Checks for witnessing excessive gore are Against the Odds.',
		type: [AfflictionType['Special Affliciton']],
		id: 3
	},
	{
		name: 'Bloodsoaked',
		description:
			'Bloodsoaked characters can only solve problems with violence. They are feared for their short tempers and disproportionate reactions, even when they attempt niceties. The first tools they reach for are weapons and, when provoked, always take the bait. They would rather act first with overwhelming violence than contemplate losing.',
		type: [AfflictionType['Character Flaw']],
		id: 4
	},
	{
		name: 'Faces in the Dark',
		description:
			'It’s perfectly sensible to assume dangers lurk behind every corner of the Crypt. Those with Faces in the Dark learned this the hard way and now see threats in every gloomy space, around every corner, at the bottom of every flagon.\n This is triggered by failing an Observation Check. They become certain they’ve glimpsed something terrible, just out of sight. Roll a Will Check or become hyper-focused on the observed area—surprised by any other threat as long as they’re transfixed.',
		type: [AfflictionType['Growing Affliction']],
		id: 5
	},
	{
		name: 'Brittle Minded',
		description: '',
		type: [],
		id: 6
	},
	{
		name: 'Debilitating Dread',
		description: '',
		type: [],
		id: 7
	},
	{
		name: 'Deep Despair',
		description: '',
		type: [],
		id: 8
	},
	{
		name: 'Faces In The Dark',
		description: '',
		type: [],
		id: 9
	},
	{
		name: 'Feasting Dreams',
		description: '',
		type: [],
		id: 10
	},
	{
		name: 'Feasting Dreams',
		description: '',
		type: [],
		id: 11
	},

	{
		name: 'Follow The Code',
		description: '',
		type: [],
		id: 12
	},
	{
		name: 'Frothing Rage',
		description: '',
		type: [],
		id: 13
	},
	{
		name: 'God Is Dead',
		description: '',
		type: [],
		id: 14
	},
	{
		name: 'Guided By The Gods',
		description: '',
		type: [],
		id: 15
	},
	{
		name: 'Hammer Of The Witch',
		description: '',
		type: [],
		id: 16
	},
	{
		name: 'Hoardlust',
		description: '',
		type: [],
		id: 17
	},
	{
		name: 'I Am The Fire',
		description: '',
		type: [],
		id: 18
	},
	{
		name: 'I Shall Be Clean',
		description: '',
		type: [],
		id: 19
	},
	{
		name: 'Lost And Without Hope',
		description: '',
		type: [],
		id: 20
	},
	{
		name: 'Love Of The Dirt',
		description: '',
		type: [],
		id: 21
	},
	{
		name: 'Man-Eater',
		description: '',
		type: [],
		id: 22
	},
	{
		name: 'Metal-Minded',
		description: '',
		type: [],
		id: 23
	},

	{
		name: 'Sancity Of The Flesh',
		description: '',
		type: [],
		id: 24
	},
	{
		name: 'Silver Fingers',
		description: '',
		type: [],
		id: 25
	},
	{
		name: 'Solace In The Bottle',
		description: '',
		type: [],
		id: 26
	},
	{
		name: 'Survival Of The Fittest',
		description: '',
		type: [],
		id: 27
	},
	{
		name: 'The Easiest Way',
		description: '',
		type: [],
		id: 28
	},
	{
		name: 'The Glorious Blaze',
		description: '',
		type: [],
		id: 29
	},
	{
		name: 'The Looming End',
		description: '',
		type: [],
		id: 30
	},
	{
		name: 'They Are Watching',
		description: '',
		type: [],
		id: 31
	},
	{
		name: 'Too Old For This',
		description: '',
		type: [],
		id: 32
	},
	{
		name: 'Unavoidable Doom',
		description: '',
		type: [],
		id: 33
	},
	{
		name: 'Unholy Communion',
		description: '',
		type: [],
		id: 34
	},
	{
		name: 'What Have You Forgotten?',
		description: '',
		type: [],
		id: 35
	}
];
