// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
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
	  }).id('p8:4')
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})