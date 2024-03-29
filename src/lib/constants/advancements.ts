export enum AdvancementCategory {
	Arcane = 'Arcane',
	Martial = 'Martial',
	Druidic = 'Druidic',
	Technical = 'Technical',
	Devious = 'Devious',
	Holy = 'Holy',
	Bardic = 'Bardic',
	Commanding = 'Commanding',
	Special = 'Special'
}

const { Arcane, Martial, Druidic, Technical, Devious, Holy, Bardic, Commanding, Special } =
	AdvancementCategory;

export const ADVANCEMENTS = [
	{
		name: 'Arcane Wards',
		categories: [Arcane],
		description:
			'When the character is hit by an Attack, spend 1 Grip to reduce the damage by their Will. Using Arcane Wards multiple times is straining. Each subsequent use in a single combat increases its Grip Cost by 1. (1 the first time, 2 the second, 3 the third, etc).'
	},
	{
		name: 'Battle Frenzy',
		categories: [Martial],
		description:
			'Spend 2 Grip to enter a Battle Frenzy until combat ends, granting the character the Upper Hand on melee Attacks, and causing any Attacks made against them to be Against The Odds. While in a Battle Frenzy they must move into melee with the nearest enemy and Attack if possible. By spending 1 Grip, the Battle Frenzy ends early.'
	},
	{
		name: 'Child of Prophecy',
		categories: [Special],
		description:
			'Luck guides this character toward their destiny. Roll a D6 at the start of each Adventuring Day. The result can replace a single die roll, regardless of who rolled it. Choose to replace the roll after rolling but before applying the outcome. This advancement is exclusive to character creation or, if the Doomsayer allows, following a weird or wonderful act of destiny.'
	},
	{
		name: 'Concoctionist',
		categories: [Arcane, Druidic, Technical],
		description:
			'At the end of each Adventuring Day, the character can brew up to half their Will in Potions for 1 Grip each. When taking this Advancement, choose 2 Potion types they can brew: Amorphous, Aquatic, Blinking, Flamewreathed, Firebreathing, Hex-Proof, Nimble, Shadowclad or Woundknitting. Concoctionist can be taken multiple times, learning 2 Potion types each time.'
	},
	{
		name: "Chemiker's Charges",
		categories: [Devious, Technical],
		description:
			"With a few hours' work in a surface camp and access to appropriate equipment, the character can fashion one of the following Chemiker's Charges: Jerrodine Fire: Popularized by Jerrodians clearing out giant rat nests. Fills the Zone with flames, setting every creature and flammable object aflame for D3 damage at the start of each turn per turn until doused. Dupontiane Gloop: Fashioned from gelatinous pine sap, this coats a Zone in sticky residue to slow movement, forcing creatures that try to move through or out of that Zone to make a Brawn Check or remain stationary. Calmyne Smoke Bombs: A grenade beloved by Calmyn's crime families. Fills a Zone with thick smoke, rendering Observation Checks and Attacks made through or in it Against The Odds. A character with Chemiker's Charges can either set a Charge with a fuse up to a minute long or throw it with an action to a Zone in short range. Either way, the effects last 1 minute. Charges expire 3 days after creation. Charges are volatile and may interact poorly with each other. When a character takes damage while carrying a charge, roll a D6. If the result is equal to or less than the number of Charges, they all explode."
	},
	{
		name: 'Ears of the Own',
		categories: [Special],
		description: 'All Observation Checks relying on hearing have the Upper Hand.'
	},
	{
		name: 'Eldritch Pact',
		categories: [Special],
		description:
			"The character pacts with a powerful extraplanar creature like a Cinderbeast, Herald or Beyonder, promising servitude in exchange for world-bending power. Immediately choose 2 more available Advancements as gifts from their patron. Make a note that they were gained from an Eldritch Pact and do not grant additional Vigour or Grip nor count towards requisite Advancements to become Titled. Touching such powerful beings' minds adversely affects one's health, granting a random Affliction, either chosen or rolled randomly. Eldritch Pacts always return to bite. Patrons may demand confusing or difficult favours, which must be fulfilled. Consequences for refusing can be dire, including but not limited to, additional Afflictions or Injuries, loss of Vigour or Grip, Stat reduction, revoking the Eldritch Pact's Advancements or even death."
	},
	{
		name: 'Extra Brawn',
		categories: [Special],
		description: "Increases the character's Brawn by 1. Remember to recalculate Maximum Vigour."
	},
	{
		name: 'Extra Grip',
		categories: [Special],
		description: "Increases the character's Grip by 3."
	},
	{
		name: 'Extra Will',
		categories: [Special],
		description: "Increases the character's Will by 1."
	},
	{
		name: 'Extra Wit',
		categories: [Special],
		description: "Increases the character's Wit by 1."
	},
	{
		name: 'Eyes of the Hawk',
		categories: [Special],
		description: 'All Observation Checks relying on sight have the Upper Hand.'
	},
	{
		name: 'Fire & Lightning Strange',
		categories: [Arcane, Druidic],
		description:
			'When taking this advancement, choose an element or magical substance: fire, ice, water, lightning, thorns, gravity etc. The character can magically strike down enemies with this element. Spend 1 to 3 Grip and an action to make a Will based Attack (always with the Upper Hand) against an enemy within short range. Multiply the damage by the Grip Cost. This damage is magical for any relevant Advancements and Adaptations. Fire & Lightning Strange can be taken multiple times, granting a new element each time. Specify which of your elements you use each time you attack with the Advancement.'
	},
	{
		name: 'Flurry of Blows',
		categories: [Martial, Devious],
		description:
			'Spend 1 Grip when making an Attack with a weapon held in one hand to make a second Against The Odds attack on the same turn.'
	},
	{
		name: 'The Holy Song of War',
		categories: [Holy, Bardic, Commanding],
		description:
			'For 1 Grip and an action, the character can grant the Song of War to a number of creatures up to their Will. This grants the creature(s) the Upper Hand to a single Attack Roll or Stat Check of their choice for a single combat or five minutes, whichever is shorter.'
	},
	{
		name: 'Horde Killer',
		categories: [Martial, Commanding],
		description:
			'When enemies Gang Up on the character, negate the first two instances of the Upper Hand.'
	},
	{
		name: 'I See Truth In The Stars',
		categories: [Arcane, Holy, Druidic],
		description:
			"At the end of an Adventuring Day, spend any amount of Grip to receive cryptic visions from dreaming, stargazing or bone throwing. The more Grip spent, the less cryptic the Doomsayer's description of the next Adventuring Day's events is."
	},
	{
		name: 'Knife From The Shadows',
		categories: [Devious],
		description:
			'When the character Attacks an enemy who is unaware of them, they have the Upper Hand and deal double damage.'
	},
	{
		name: 'Lay On Hands',
		categories: [Holy, Bardic],
		description:
			'For 1 Grip and an action, roll D3 + Will. Another character of your choice gains Vigour equal to the result.'
	},
	{
		name: "Marksman's Aim",
		categories: [Martial, Devious, Druidic],
		description:
			"The character can take an action to line up a shot, examining their target and its movement. The following turn, they can make an Attack against their target with the Upper Hand using a Ranged Weapon, and ignoring any penalties of cover or obscuration. The Doomsayer may allow the use of Marksman's Aim before combat starts, provided the character has time to do so, granting the Upper Hand on their first Attack."
	},
	{
		name: 'Master of Deceit',
		categories: [Devious, Bardic],
		description: 'The character has the Upper Hand on Wit Checks when lying to NPCs.'
	},
	{
		name: 'My Shining Armour Gleams',
		categories: [Martial, Commanding],
		description: 'Non-magical Attacks against the character are Against The Odds.'
	},
	{
		name: 'Nimble Dodge',
		categories: [Devious, Commanding, Technical],
		description:
			'All Wit Checks made to Escape are Trivial. Nose of the Dog All Observation Checks relying on smell have the Upper Hand.'
	},
	{
		name: 'Otherwordly Perception',
		categories: [Arcane, Druidic],
		description:
			"When taking this Advancement, choose 2 supernatural senses that the character can activate from the following: Eyes of Cinder: Peer through nonsupernatural darkness as if there is low light. Herald's Gaze: See through less than 6 inches of a natural substance like dirt, stone or wood. Unnatural or man-made substances, such as metal, leather or glass are opaque. Fargone Taste: Taste a distant object as if it was in their mouth. Whispers of the Seer: Be able to hear distant conversations as if a whisper. Thermomancy: Know the exact temperature of a distant object without touching it. Stain of the Arcane: Tell if Arcane magic has been cast in an area, and the identity of the mage if the character has seen them cast a spell before. Spend 1 Grip to amplify the character's normal senses with one of the supernatural abilities they possess for 5 minutes. This may grant them the Upper Hand on certain Observation Checks, or make Impossible Observation Checks possible. The process is disorientating and often disrupts other senses, so other Observation Checks not amplified by Otherwordly Perception are Against The Odds while active."
	},
	{
		name: 'Radiant Blade',
		categories: [Special],
		description:
			'Spend 1 Grip before an Attack gaining the Upper Hand and dealing an extra D3 damage (magical for any relevant Advancement and Adaptations) if it lands.'
	},
	{
		name: 'Rallying Shout',
		categories: [Martial, Holy, Bardic, Commanding],
		description:
			'In combat, the Cryptdigger can take an action granting 1 Vigour to each ally in earshot.'
	},
	{
		name: 'Restored Vigour',
		categories: [Special],
		description:
			'The character immediately returns to their Max Vigour (5 + Brawn + number of Advancements).'
	},
	{
		name: 'Shadow Glamours',
		categories: [Devious, Arcane, Bardic],
		description:
			"Spend 1 Grip to do one of the following: • Gain the Upper Hand on a Wit Check to hide. • Observation Checks to spot them are Against The Odds for 1 round. • Alter the character's appearance (clothing, facial detail, hair, etc.) for 1 minute. These changes are visual only."
	},
	{
		name: 'Shieldwall',
		categories: [Martial, Commanding],
		description:
			"Spend 1 Grip to reduce a non-magic Attack's damage by D3 or destroy a held shield reducing damage to 0."
	},
	{
		name: 'Spirits of the Beyond',
		categories: [Arcane, Holy],
		description:
			'Spend 1 Grip and an action to reanimate a corpse (stats below) to serve for a single combat, or 5 minutes. Armour 8 | Vigour 9 BRAWN 1 | WIT 0 | WILL 0 Prying Hands (Hand Weapon) | Undead'
	},
	{
		name: 'Tough As Nails',
		categories: [Special],
		description:
			'Increase Maximum Vigour by 1 for each Advancement. When they suffer an Injury, spend 1 Grip to roll twice on the Injury table, choosing their preferred result.'
	},
	{
		name: 'Toxic Blades',
		categories: [Devious, Technical],
		description:
			'When taking this Advancement, 2 Poisons the Cryptdigger can make: Brittleskinned, Dulling (-1 Will), Hex-Addled, Maiming (-1 Brawn), Paralysing (-1 Wit). At the end of each Adventuring Day spend 1 Grip to prepare 1 dose of 1 Poison. Whenever Toxic Blades is taken, gain 2 new Poison types and make an additional Poison each day.'
	},
	{
		name: 'Trap Breaker',
		categories: [Devious, Technical],
		description:
			'The Cryptdigger has the Upper Hand on Stat Checks to make, modify or disable traps or secret doors, and on Observation Checks to detect them.'
	},
	{
		name: 'Weapons Master',
		categories: [Martial, Commanding, Technical],
		description:
			'Each time this Advancement is taken, choose a weapon type. Spend 1 Grip to gain the Upper Hand on Attacks with it until combat ends.'
	},
	{
		name: "Witch's Curse",
		categories: [Arcane, Bardic, Druidic, Holy],
		description:
			'Spend Grip (minimum 1) equal to any Stat of a creature within short range to curse it. The target is Against The Odds on their next 3 Stat Checks or Attacks using that Stat.'
	}
];
