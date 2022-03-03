// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('tags.items', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	event.add('fabric:tools/axes', 'betternether:cincinnasite_axe')
	event.add('fabric:tools/axes', 'betternether:cincinnasite_axe_diamond')
	event.add('fabric:tools/axes', 'betternether:nether_ruby_axe')
	event.add('fabric:tools/axes', 'additionaladditions:rose_gold_axe')
	event.add('fabric:tools/axes', 'additionaladditions:gilded_netherite_axe')
	event.add('fabric:tools/axes', 'betterend:aeternium_axe')
	event.add('fabric:tools/axes', 'betterend:thallasium_axe')
	event.add('fabric:tools/axes', 'betterend:terminite_axe')
	event.add('fabric:tools/axes', 'botania:manasteel_axe')
	event.add('fabric:tools/axes', 'botania:terra_axe')
	event.add('fabric:tools/axes', 'botania:elementium_axe')
	event.add('fabric:tools/axes', 'modern_industrialization:diesel_chainsaw')
	event.add('fabric:tools/axes', 'spectrum:multitool')
	event.add('fabric:tools/axes', 'spectrum:bedrock_axe')
	event.add('fabric:tools/axes', 'the_aether:zanite_axe')
	event.add('fabric:tools/axes', 'the_aether:gravitite_axe')
	event.add('fabric:tools/axes', 'the_aether:valkyrie_axe')
	event.add('fabric:tools/axes', 'ae2:certus_quartz_axe')
	event.add('fabric:tools/axes', 'ae2:nether_quartz_axe')
	event.add('fabric:cooked_eggs', 'additionaladditions:fried_egg')
  })

onEvent('recipes', event => {
	// Change recipes here
	event.replaceInput({}, 'farmersdelight:fried_egg', '#fabric:cooked_eggs')

	event.replaceInput({}, 'bewitchment:raw_silver', '#c:raw_silver_ores')
	event.replaceOutput({}, 'bewitchment:silver_ingot', '#c:silver_ingots')
	event.replaceOutput({}, 'bewitchment:raw_silver', '#c:raw_silver_ores')
	event.replaceInput({}, 'bewitchment:silver_ingot', '#c:silver_ingots')

	event.replaceInput({}, 'bewitchment:raw_silver', '#c:raw_silver_ores')
	event.replaceOutput({}, 'modern_industrialization:silver_ingot', '#c:silver_ingots')
	event.replaceOutput({}, 'modern_industrialization:raw_silver', '#c:raw_silver_ores')
	event.replaceInput({}, 'bewitchment:silver_ingot', '#c:silver_ingots')



	event.remove({output: 'farmersdelight:fried_egg'})
	event.remove({output: 'chisel:chisel'}),
	event.shaped('chisel:chisel', [
		'III',
		' I ',
		' S '
	  ], {
		S: 'minecraft:stick',
		I: '#c:iron_ingots'
	})
	
	event.shapeless('2x farmersdelight:raw_pasta', [
		'4x minecraft:wheat',
		Item.of('minecraft:potion', {Potion: "minecraft:water"})
	]).replaceIngredient({item: Item.of('minecraft:potion', {Potion: "minecraft:water"})}, 'minecraft:glass_bottle'),
	
	event.custom({
		"type": "modern_industrialization:macerator",
		"item_outputs": [
		Item.of("minecraft:cobblestone", 1)
		],
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : "minecraft:stone",
		 "amount": 1
		}
	  }).id('p8:1')

	  event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item": "minecraft:amethyst_shard",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : "minecraft:amethyst_block",
		 "amount": 1
		}
	  }).id('p8:2')

	  event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item": "minecraft:quartz",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : "minecraft:quartz_block",
		 "amount": 1
		}
	  }).id('p8:3')

	  event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item":"spectrum:citrine_shard",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : ("spectrum:citrine_block"),
		 "amount": 1
		}
	  }).id('p8:4')

	  event.custom({
		"type": "modern_industrialization:unpacker",
		"item_outputs": {
		"item":"spectrum:topaz_shard",
		"amount": 4
		},
		"duration": 10,
		"eu": 2,
		"item_inputs": {
		 "item" : ("spectrum:topaz_block"),
		 "amount": 1
		}
	  }).id('p8:5')

	  event.custom({
		"type": "modern_industrialization:macerator",
		"item_outputs": {
		"item":"bewitchment:raw_silver",
		"amount": 3
		},
		"duration": 100,
		"eu": 2,
		"item_inputs": {
		 "item" : "bewitchment:silver_ore",
		 "amount": 1
		}
	  }).id('p8:6')

	  event.custom({
		"type": "modern_industrialization:macerator",
		"item_outputs": {
		"item":"bewitchment:raw_silver",
		"amount": 3
		},
		"duration": 100,
		"eu": 2,
		"item_inputs": {
		 "item" : "bewitchment:deepslate_silver_ore",
		 "amount": 1
		}
	  }).id('p8:7')

	  event.custom({
		"type": "modern_industrialization:macerator",
		"item_outputs": {
		"item":"modern_industrialization:silver_dust",
		"amount": 1,
		"probability": 2
		},
		"duration": 100,
		"eu": 2,
		"item_inputs": {
		 "item" : "bewitchment:raw_silver",
		 "amount": 1
		}
	  }).id('p8:8')
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})