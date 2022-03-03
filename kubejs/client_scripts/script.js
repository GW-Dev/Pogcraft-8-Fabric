// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')
onEvent('ui.main_menu', event => {
	event.replace(ui => {
    //ui.background('kubejsui:textures/example_background.png')
    ui.background('kubejs:textures/e.png')
    ui.minecraftLogo(30)
    
    ui.button(b => {
      b.name = 'Singleplayer'
      b.x = (ui.width) / 2 - b.width/2
      b.y = ((ui.height) / 2) - 30
      b.action = 'minecraft:singleplayer'
    })

    ui.button(b => {
        b.name = 'Multiplayer'
        b.x = (ui.width) / 2 - b.width/2
        b.y = (ui.height) / 2
        b.action = 'minecraft:multiplayer'
    })

    ui.button(b => {
      b.name = 'Language'
      b.x = ui.width - b.width - 10
      b.y = ui.height - b.height - 10
      b.action = 'minecraft:language'
    })
    
    ui.button(b => {
      b.name = 'Accessibility'
      b.x = 10
      b.y = ui.height - b.height - 10
      b.action = 'minecraft:accessibility'
    })

    ui.button(b => {
      b.name = 'Options'
      b.x = (ui.width) / 2 - b.width/2
      b.y = ((ui.height) / 2) + 30
      b.action = 'minecraft:options'
    })

    ui.button(b => {
      b.name = 'Exit'
      b.x = (ui.width) / 2 - b.width/2
      b.y = ((ui.height) / 2) + 60
      b.action = 'minecraft:quit'
    })
  })
})
onEvent('rei.hide.items', event => {
	// Hide items in JEI here
	event.hide('farmersdelight:fried_egg')
})