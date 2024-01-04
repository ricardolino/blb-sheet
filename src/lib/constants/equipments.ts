import type { ItemType } from '$lib/types';

export enum ItemCategory {
	Tool = 'Tool',
	Consumable = 'Consumable',
	Equippable = 'Equippable',
	Special = 'Special'
}

export const DEFAULT_EQUIPMENTS: ItemType[] = [
	{ name: 'Backpack', categories: [ItemCategory.Tool] },
	{ name: 'Bedroll', categories: [ItemCategory.Tool] },
	{ name: 'Rope', description: '15m long', categories: [ItemCategory.Tool] },
	{ name: 'Torch', description: '1hr duration', categories: [ItemCategory.Tool] },
	{ name: 'Ration', description: '7 days', categories: [ItemCategory.Consumable] },
	{
		name: 'Basic Armour',
		description:
			'Standard armor made of heavy boiled leather, chainmail and a protective helmet, providing 8 Armour.',
		categories: [ItemCategory.Equippable]
	}
];

export const EQUIPMENTS: ItemType[] = [
	...DEFAULT_EQUIPMENTS,
	{
		name: 'Plate Armour',
		description:
			'Solid interlocking metal plates or scales, worn over heavy boiled leather and chainmail providing 9 Armour. However, it is heavy and cumbersome, granting -1 Initiative. Furthermore, characters without at least 2 Brawn, Stat Checks are Against The Odds, cannot Escape and always have Initiative 0.',
		categories: [ItemCategory.Equippable]
	},
	{
		name: 'Shield',
		description:
			'Boards of wood or metal worn on the wielder`s off hand to deflect enemy attacks, increasing their Armour by 1.',
		categories: [ItemCategory.Equippable]
	},
	{ name: 'Crowbar', categories: [ItemCategory.Tool] },
	{ name: 'Pickaxe', categories: [ItemCategory.Tool] },
	{ name: 'Shovel', categories: [ItemCategory.Tool] },
	{ name: 'Hammer and Chisel', categories: [ItemCategory.Tool] },
	{ name: 'Chain', description: '50cm long', categories: [ItemCategory.Tool] },
	{ name: 'Pole', description: '25cm long', categories: [ItemCategory.Tool] },
	{ name: 'Whetstone', categories: [ItemCategory.Tool] },
	{ name: 'Bear Trap', categories: [ItemCategory.Tool] },
	{ name: 'Bullseye Lantern', description: '4hr duration', categories: [ItemCategory.Tool] },
	{ name: 'Grappling Hook', categories: [ItemCategory.Tool] },
	{
		name: 'Grease',
		description: 'Used as lubricant, sealant, or to mend torches.',
		categories: [ItemCategory.Consumable]
	},
	{
		name: 'Manacles',
		description: 'A shackle, handcuff, or fetter, used to secure the hands of a prisoner',
		categories: [ItemCategory.Tool]
	},
	{ name: 'Lockpicks', categories: [ItemCategory.Tool] },
	{ name: 'Bag of Marbles', description: '50 units', categories: [ItemCategory.Tool] },
	{
		name: 'Set of Files',
		description:
			'A hand file is essentially a hand saw with a very wide blade. Just like a saw, it cuts material using teeth.',
		categories: [ItemCategory.Tool]
	},
	{ name: 'Mirror on a Handle', categories: [ItemCategory.Tool] },
	{ name: 'Silk Rope', description: '1m long', categories: [ItemCategory.Tool] },
	{ name: 'Caltrops', description: '10 units', categories: [ItemCategory.Tool] },
	{
		name: 'Dose of Venom',
		description:
			'Applying this simple poison to a weapon, adds D3 damage to its next successful attack. It can be mixed with food or drink to deal the imbiber D3 damage.',
		categories: [ItemCategory.Consumable]
	},
	{
		name: 'Flask of Acid',
		description:
			'Can be used to damage a metal tool, Weapon or Armour in the same Zone. Permanently reducing damage or Armour by 1 or imposing Against The Odds on the tool`s Stat Checks. If 3 of these effects stack, the object breaks.',
		categories: [ItemCategory.Consumable]
	},
	{ name: 'Hooded Lantern', description: '4hr duration', categories: [ItemCategory.Tool] },
	{
		name: "Alchemist's Fire",
		description:
			'A sealed clay jar of oil that combusts in naked air, often used to set objects aflame. Can be thrown with a Wit Check or poured out.',
		categories: [ItemCategory.Tool]
	},
	{ name: 'Musical Instrument', categories: [ItemCategory.Tool] },
	{ name: 'Lock and Key', categories: [ItemCategory.Tool] },
	{
		name: 'Book of Knowledge',
		description:
			'Over an hour, a character can study a relevant book after which, the Doomsayer provides whatever useful information was gathered. A Wit Check may be required to find specific relevant information, or studying particularly complex or confusing books. Book`s information is not always perfectly accurate.',
		categories: [ItemCategory.Special]
	},
	{
		name: 'Dose of Medicine',
		description:
			'Once daily, a character can take a minute outside of combat using a dose of Medicine to restore 1 Vigour. Medicine might be bandages, tonics, salves or herbal painkillers.',
		categories: [ItemCategory.Consumable]
	},
	{ name: 'Chalk', categories: [ItemCategory.Consumable] },
	{ name: 'Writing Kit', categories: [ItemCategory.Tool] },
	{ name: 'Antitoxin', categories: [ItemCategory.Consumable] },
	{ name: 'Holy Water', categories: [ItemCategory.Consumable] },
	{ name: 'Compass', categories: [ItemCategory.Tool] },
	{
		name: 'Spell Scroll',
		description:
			'Spell Scrolls are sorcerous texts granting knowledge of heinous spells and other esoteric magics. Using a Spell Scroll requires at least 1 Will. Every Scroll has an associated Advancement. To use the Advancement, spend 1 Grip + the Advancement`s Grip cost, (if applicable) consuming the Scroll, which crumbles to dust or reverts to inert paper.',
		categories: [ItemCategory.Consumable, ItemCategory.Special]
	},
	{ name: 'Holy Relic', categories: [ItemCategory.Special] },
	{
		name: 'Gunpowder and beads',
		description: 'It can be used to refill gunpowder weapons, or to make bombs. Useless when wet.',
		categories: [ItemCategory.Consumable]
	},
	{
		name: 'Flask of Oil',
		description: 'Used as lubricant or fuel for oil lamps. 8h duration.',
		categories: [ItemCategory.Consumable]
	},
	{
		name: 'Perfume',
		description: 'A mixture of oil extracts designed to give off a pleasing scent. 1hr duration.',
		categories: [ItemCategory.Consumable]
	},
	{
		name: 'Strips of Cloth',
		description: 'Used to mend wounds or torches.',
		categories: [ItemCategory.Consumable]
	},
	{
		name: 'Bayonet',
		description: 'Used to turn a long firearm into a melee weapon.',
		categories: [ItemCategory.Equippable]
	},
	{
		name: 'Potion',
		description:
			'Potions are drinkable chemical concoctions granting monstrous powers. Most are brewed from natural or monstrous components by arcane specialists known as "Chemikers". Every Potion has an associated Adaptation. As an action, spend a point to Grip to drink a Potion, granting the Adaptation`s effects for a single combat or 5 minutes, whichever is shorter.',
		categories: [ItemCategory.Consumable, ItemCategory.Special]
	}
];
