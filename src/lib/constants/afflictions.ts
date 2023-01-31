export enum AfflictionType {
	'Character Flaw' = 'Character Flaw',
	'Growing Affliction' = 'Growing Affliction',
	'Special Affliction' = 'Special Affliction'
}

export const AFFLICTIONS = [
	{
		name: 'Adored By All',
		description:
			"Look, you were simply born likable, charismatic and charming. You can't help it! Characters Adored by All find it inconceivable anyone dislikes, holds grudges against or fails to instantly forgive them. They may be socially unaware, cocky or cruel as they retain their joviality even with their victims.",
		type: [AfflictionType['Character Flaw']],
		id: 0
	},
	{
		name: 'At Home In The Crypt',
		description:
			"The Crypt is no place for humanity, we are unwelcome. Those At Home in the Crypt believe they are the exception. Their humanity is slowly eroding as they adapt to being among the Crypt's denizens.\n At Home in the Crypt is triggered when the Cryptdigger is leaving a Crypt. Roll a Will Check or lose 1 Grip as they come to terms with returning to the mundane world they abandoned.",
		type: [AfflictionType['Growing Affliction']],
		id: 1
	},
	{
		name: 'Bitter Grudge',
		description:
			'The afflicted develops an encompassing hatred of a certain monster type or foe. When Triggered, roll a successful Will Check or spend 1 Grip. If you do not, the afflicted is Against The Odds when attempting any actions other than attacking and destroying the Trigger.',
		type: [AfflictionType['Growing Affliction']],
		id: 2
	},
	{
		name: 'Blade Of Renown',
		description:
			"Cryptdiggers with Blade of Renown believe they own some fated, heavily enchanted weapon. They either believe their (entirely mundane) weapon is touched by magic, or grossly overestimate their magical weapon's power. Foolishly trusting in their armament's power, they are braggadocious and dangerously overconfident. They charge into the fray convinced their weapon will grant victory or loudly boast of their new-found invincibility and the great deeds they'll perform.",
		type: [AfflictionType['Character Flaw']],
		id: 3
	},
	{
		name: 'Blood-Nausea',
		description:
			'Those with Blood-Nausea are disgusted by blood and injury. Performing violence is no different, but inflicting wounds and injuries are anathema to them. The sight, smell and thought are too much.\n When causing or witnessing an Injury (caused by Attack or ability), lose 1 Grip. All Grip Checks for witnessing excessive gore are Against the Odds.',
		type: [AfflictionType['Special Affliction']],
		id: 4
	},
	{
		name: 'Bloodsoaked',
		description:
			'Bloodsoaked characters can only solve problems with violence. They are feared for their short tempers and disproportionate reactions, even when they attempt niceties. The first tools they reach for are weapons and, when provoked, always take the bait. They would rather act first with overwhelming violence than contemplate losing.',
		type: [AfflictionType['Character Flaw']],
		id: 5
	},
	{
		name: 'Brittle Minded',
		description:
			'The afflicted develops an encompassing hatred of a certain monster type or foe. When Triggered, roll a successful Will Check or spend 1 Grip. If you do not, the afflicted is Against The Odds when attempting any actions other than attacking and destroying the Trigger.',
		type: [AfflictionType['Growing Affliction']],
		id: 6
	},
	{
		name: 'Debilitating Dread',
		description:
			'The Cryptdigger develops intense fear of an environment, monster type or foe. When Triggered, pass a Will Check or spend 1 Grip or all actions, save running and hiding from the Trigger, are Against The Odds. ',
		type: [AfflictionType['Growing Affliction']],
		id: 7
	},
	{
		name: 'Deep Despair',
		description:
			'The Cryptdigger develops a deep and foreboding self hatred characterised by meekness, inaction or confidence. They lack a goal or motivation and often undersell their abilities.',
		type: [AfflictionType['Character Flaw']],
		id: 8
	},
	{
		name: 'Faces in the Dark',
		description:
			"It's perfectly sensible to assume dangers lurk behind every corner of the Crypt. Those with Faces in the Dark learned this the hard way and now see threats in every gloomy space, around every corner, at the bottom of every flagon.\n This is triggered by failing an Observation Check. They become certain they've glimpsed something terrible, just out of sight. Roll a Will Check or become hyper-focused on the observed area—surprised by any other threat as long as they're transfixed.",
		type: [AfflictionType['Growing Affliction']],
		id: 9
	},
	{
		name: 'False Tongues',
		description:
			"Characters with False Tongues erroneously believe they can speak with all kinds of animals, birds and fish—or sometimes even water, stones and the wider landscape. They defer to these wise, primal beings for most of their decisions. Infuriatingly, the character is almost completely inconsistent in their 'abilities' and may be unable to 'talk' to beings because they speak 'different dialects.'\n With their head in the clouds or extreme fascination with nature, they often neglect their responsibilities while awaiting local wildlife's advice.",
		type: [AfflictionType['Character Flaw']],
		id: 10
	},
	{
		name: 'Feasting Dreams',
		description:
			'The Cryptdigger develops persistent, harsh and terrifying nightmares. Regenerating Vigour or Grip from sleep or rest requires a successful Will Check.',
		type: [AfflictionType['Growing Affliction']],
		id: 11
	},
	{
		name: 'Follow The Code',
		description:
			"Cryptdiggers with Follow the Code exercise complete control over their desires and impulses to triumph over the Crypt's despair. They might deny themself earthly pleasures or adhere religiously to a draconian training regime, taking their once-healthy coping mechanisms to the extreme.\n Develop 2-3 strict rules your Cryptdigger imposes to better control the Crypt's environment, such as “I must always carry a light source” or “I will always let others act before me in battle.” The first time each rule is broken in an adventuring day Triggers a Will Check, or lose 1 Grip.",
		type: [AfflictionType['Growing Affliction']],
		id: 12
	},
	{
		name: 'Frothing Rage',
		description:
			'The Cryptdigger develops fits of uncontrollable anger in battle. When combat starts, pass a Will Check or spend 1 Grip or spendthe whole combat attacking relentlessly, spending Grip on their strongest attacks and abilities. During this, all melee attacks have the Upper Hand, but the Doomsayer will not allow tactical or coordinated actions.',
		type: [AfflictionType['Growing Affliction']],
		id: 13
	},
	{
		name: 'God Is Dead',
		description:
			'You have seen the Crypts and the horrors that await within. While Gods may rule the sunlit world above, how could they possibly be with you below? Participating in their rites is quite unsettling— when targeted by a Holy Advancement, roll a Will Check or lose 1 Grip. When targeting another Cryptdigger with a Holy Advancement, they must pass a Will Check or lose 1 Grip.',
		type: [AfflictionType['Special Affliction']],
		id: 14
	},
	{
		name: 'Guided By The Gods',
		description:
			"The Cryptdigger develops a belief that a divine figure—a Herald, Cinderbeast, Beyonder, one of their masters or something else entirely—has chosen them to fulfil some sacred quest or mission. Characterised by selfrighteousness, arrogance or belief that divine providence guides their actions and they can do no wrong. The divine isn't necessarily real. ",
		type: [AfflictionType['Character Flaw']],
		id: 15
	},
	{
		name: 'Hammer Of The Witch',
		description:
			"Cryptdiggers with Hammer Of The Witch believe magic is a wicked force for working evil. It must be stamped out for the good of 'decent society.' What counts as 'magic' varies wildly—everything from actual arcane spells to mundane forces and processes they don't comprehend.\n They may be intensely superstitious and hateful towards magic wielders or enchanted objects. They grasp icons to 'protect' them from vile sorcery and are all too eager to believe the worst about whatever they don't understand.\n Those with Arcane Advancements themselves live in abject denial or self-loathing.",
		type: [AfflictionType['Character Flaw']],
		id: 16
	},
	{
		name: 'Hoardlust',
		description:
			"The Cryptdigger develops an unhealthy love for gold and treasure, sometimes called Dragon-Sickness, characterised by selfishness, mercenary behavior and avarice. Cryptdigging leaves some hollow, leaving only their desire to accumulate material wealth. They're prepared to backstab or betray acquiring worldly possessions. Choosing between an ally or escaping with treasure, they unequivocally take the money and run.",
		type: [AfflictionType['Character Flaw']],
		id: 17
	},
	{
		name: 'I Am The Fire',
		description:
			"The Cryptdigger develops arrogant confidence, believing they are more skilled than any Cryptdigger or CryptThing. They might dismiss even their companions' sagest advice as, naturally, their plan is superior. They may even mock and patronise their allies.",
		type: [AfflictionType['Character Flaw']],
		id: 18
	},
	{
		name: 'I Shall Be Clean',
		description:
			"The Cryptdigger develops a neurotic hatred for dirt, filth, slime, blood and the Crypt's other unclean elements. If sleeping without somehow bathing or cleansing themself, they must pass a Will Check to regenerate any Vigour or Grip. ",
		type: [AfflictionType['Growing Affliction']],
		id: 19
	},
	{
		name: 'Lost And Without Hope',
		description:
			"The Cryptdigger has seen too much of the Crypt's evil, realizing the world is doomed and, before society collapses, they must prepare. Repenting for their sins and purifying their bodies and souls by mutilating themselves with tattoos or piercings or deliberate wounds. Characterised by a lack of respect for mortality, apathy regarding actions consequences or long, hazy endtime rants. ",
		type: [AfflictionType['Character Flaw']],
		id: 20
	},
	{
		name: 'Love Of The Dirt',
		description:
			"The Cryptdigger develops a hatred of cleanliness and order, a refusal to clean and a love of wallowing in dirt, filth, blood, slime and the Crypt's other unclean elements. Eventually, their body begins decaying. For each instance of this Affliction they become increasingly disgusting and are Against The Odds for Wit Checks interacting with non-hostile creatures. They might also be barred from certain social environments. Sleeping after somehow being bathed or cleansed requires a Will Check to regenerate any Vigour or Grip.",
		type: [AfflictionType['Growing Affliction']],
		id: 21
	},
	{
		name: 'Man-Eater',
		description:
			'The Cryptdigger develops a taste for human or demi-human flesh and blood. Sleeping without consuming human or demi-human flesh requires a Will Check to regenerate any Vigour or Grip. Obviously, cannibals are hunted down and killed, so this is usually hidden—no one wants their Cryptdigging companions to eat their corpses.',
		type: [AfflictionType['Growing Affliction']],
		id: 22
	},
	{
		name: 'Metal-Minded',
		description:
			"The Metal-Minded see the world in black and white. As far as they're concerned, logic is the only reliable metric for decision-making. They struggle empathising and see emotions and feelings as wasteful. They coldly advocate for the most expedient or efficient route, all too willing to propose immoral or taboo actions. Lying to protect someone's feelings is alien to them.",
		type: [AfflictionType['Growing Affliction']],
		id: 23
	},
	{
		name: 'Sancity Of The Flesh',
		description:
			"Characters with Sanctity of the Flesh are obsessed with maintaining their body's purity, in particular refusing magical healing, which 'perverts nature's order'. Even magic that merely accelerates natural healing is corrupting. If healed by methods other than resting, pass a Will Check or lose 1 Grip. They will likely resent the healing's source or the healer.",
		type: [AfflictionType['Character Flaw']],
		id: 24
	},
	{
		name: 'Silver Fingers',
		description:
			'The Cryptdigger develops an uncontrollable urge to steal things. Triggered by any easy opportunity; pass a Will Check or spend 1 Grip or attempt to steal it.',
		type: [AfflictionType['Growing Affliction']],
		id: 25
	},
	{
		name: 'Solace In The Bottle',
		description:
			'The Cryptdigger develops reliance on drugs or alcohol to dull their mind. Sleeping without partaking requires a Will Check to regenerate any Vigour or Grip. While addled they are Against The Odds for Wit Checks relying on sudden reactions, but have the Upper Hand on Grip Checks triggered by a monster or environment. ',
		type: [AfflictionType['Growing Affliction']],
		id: 26
	},
	{
		name: 'Survival Of The Fittest',
		description:
			"Those with Survival Of The Fittest believe 'might makes right' and only the laws of tooth and claw matter. If a creature isn't sufficiently strong to defend itself and take what it needs, it is unfit. This can extend to fellow Cryptdiggers.\n They are arrogantly unsympathetic to those who cannot look after themself or their charges, and are often dismissive and arrogant. They are frequently dangerous dissidents whose world-view is opposed to the coddling of civilisation.",
		type: [AfflictionType['Character Flaw']],
		id: 27
	},
	{
		name: 'The Easiest Way',
		description:
			"Those who follow The Easiest Way develop a pathological desire to avoid violence at any cost, seeing combat as a preventable tragedy to be avoided.\n They are characterised as utter cowards unwilling to lift a weapon even to defend themselves, or fatally stubborn, negotiating with Crypt-things that clearly don't speak surface-tongues.",
		type: [AfflictionType['Character Flaw']],
		id: 28
	},
	{
		name: 'The Glorious Blaze',
		description:
			'The Cryptdigger develops a love for the thrill of arson. Triggered by a good opportunity, either pass a Will Check or spend 1 Grip or else attempt to set it on fire. Sleeping near the silky, luscious embers of a fire restores 1 additional Vigour.',
		type: [AfflictionType['Growing Affliction']],
		id: 29
	},
	{
		name: 'The Looming End',
		description:
			"The Looming End afflicts those extremely aware of their mortality and the Crypt's constant, looming threats. Rather than succumbing to despair or existential fear, they obsessively seek to overcome death itself. They will do anything for the barest glimpse of insight—save risking their life, the one thing they truly cherish.\n They are often morose and off- putting, due to their strange fascination with esoteric lore and the processes of life and death. Some seek to become undead via vampirism or Lichdom, or hunt life-extending magical items like the Philosopher's Stone.",
		type: [AfflictionType['Character Flaw']],
		id: 30
	},
	{
		name: 'They Are Watching',
		description:
			"The Cryptdigger develops a belief the world is secretly run by a cult, secret society or organisation run by humans or demi-humans, demons, ancient gods or aliens. All players should take a minute brainstorming the cult's exact nature. Characterised by general paranoia, strange tricks to avoid persecution and detection or checking other creatures for obscure details to reveal their inhumanity or shadowy cult membership.\n Of course, the cult probably isn't real and the character is probably just deluded.",
		type: [AfflictionType['Character Flaw']],
		id: 31
	},
	{
		name: 'Too Old For This',
		description:
			'Those Too Old For This feel past their prime, slowly but inevitably fading away. Failure only reinforces this belief, evidence of them being weak, clumsy or stupid.\n Choose a Stat. When failing a non- attack Check using it, pass a Will Check (exempt from Too Old For This) or be Against the Odds on the next Check using it.',
		type: [AfflictionType['Growing Affliction']],
		id: 32
	},
	{
		name: 'Unavoidable Doom',
		description:
			'Characters with Unavoidable Doom have a constant and abiding sense of their inevitably approaching death. As pressure mounts, they become increasingly certain that sudden, painful death waits around every corner, at the tip of every rusty blade. \n Each Adventuring Day, the first time they drop below half of their maximum Vigour (rounding up), pass a Will Check or their next Attack or Stat Check is Against the Odds as futility sets in.',
		type: [AfflictionType['Growing Affliction']],
		id: 33
	},
	{
		name: 'Unholy Communion',
		description:
			"The Cryptdigger is contacted through dreams and visions by a Cinderbeast, Herald, Beyonder or other force offering power for servitude. For their next Advancement they must take Eldritch Pact or permanently reduce their maximum Grip to 5 as they are wracked by their angered patron's psychic vengeance. ",
		type: [AfflictionType['Special Affliction']],
		id: 34
	},
	{
		name: 'What Have You Forgotten?',
		description:
			'Preparation is integral to surviving the Crypt, or so those afflicted with What Have You Forgotten? believe. Every failure brings clawing, raking doubt. Could this have been prevented? Was it their fault for not preparing well enough? Were they betrayed?\n Maintain a comprehensive list of carried equipment. Roll a D6 every time you remove an item from your pack until you roll a 1, indicating you left it behind (and can retrieve it later). When this happens, pass a Will Check or lose 1 Grip. This must only be done until an item is forgotten.',
		type: [AfflictionType['Special Affliction']],
		id: 35
	}
];
