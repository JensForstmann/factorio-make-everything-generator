const VanillaRecipes = `

-----
name: accumulator
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[accumulator]-a[accumulator]
energy: 10
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 30
main_product: accumulator
main_product_stack_size: 50
item_ingredient_name: 2 iron-plate
item_ingredient_name: 5 battery

-----
name: advanced-circuit
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[advanced-circuit]
energy: 6
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: advanced-circuit
main_product_stack_size: 200
item_ingredient_name: 2 plastic-bar
item_ingredient_name: 4 copper-cable
item_ingredient_name: 2 electronic-circuit

-----
name: arithmetic-combinator
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[combinators]-a[arithmetic-combinator]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: arithmetic-combinator
main_product_stack_size: 50
item_ingredient_name: 5 copper-cable
item_ingredient_name: 5 electronic-circuit

-----
name: artillery-shell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[explosive-cannon-shell]-d[artillery]
energy: 15
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: artillery-shell
main_product_stack_size: 1
item_ingredient_name: 8 explosives
item_ingredient_name: 4 explosive-cannon-shell
item_ingredient_name: 1 radar

-----
name: artillery-targeting-remote
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[turret]-d[artillery-turret]-b[remote]
energy: 0.5
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: artillery-targeting-remote
main_product_stack_size: 1
item_ingredient_name: 1 processing-unit
item_ingredient_name: 1 radar

-----
name: artillery-turret
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[turret]-d[artillery-turret]-a[turret]
energy: 40
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: artillery-turret
main_product_stack_size: 10
item_ingredient_name: 60 steel-plate
item_ingredient_name: 40 iron-gear-wheel
item_ingredient_name: 20 advanced-circuit
item_ingredient_name: 60 concrete

-----
name: artillery-wagon
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-i[artillery-wagon]
energy: 4
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: artillery-wagon
main_product_stack_size: 5
item_ingredient_name: 40 steel-plate
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 20 advanced-circuit
item_ingredient_name: 64 engine-unit
item_ingredient_name: 16 pipe

-----
name: assembling-machine-1
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[assembling-machine-1]
energy: 0.5
group_name: production
group_order: b
subgroup_name: production-machine
subgroup_order: e
request_paste_multiplier: 30
main_product: assembling-machine-1
main_product_stack_size: 50
item_ingredient_name: 9 iron-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 3 electronic-circuit

-----
name: assembling-machine-2
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[assembling-machine-2]
energy: 0.5
group_name: production
group_order: b
subgroup_name: production-machine
subgroup_order: e
request_paste_multiplier: 30
main_product: assembling-machine-2
main_product_stack_size: 50
item_ingredient_name: 2 steel-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 1 assembling-machine-1

-----
name: assembling-machine-3
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[assembling-machine-3]
energy: 0.5
group_name: production
group_order: b
subgroup_name: production-machine
subgroup_order: e
request_paste_multiplier: 30
main_product: assembling-machine-3
main_product_stack_size: 50
item_ingredient_name: 2 assembling-machine-2
item_ingredient_name: 4 speed-module

-----
name: atomic-bomb
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[rocket-launcher]-c[atomic-bomb]
energy: 50
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: atomic-bomb
main_product_stack_size: 10
item_ingredient_name: 10 explosives
item_ingredient_name: 10 rocket-control-unit
item_ingredient_name: 30 uranium-235

-----
name: automation-science-pack
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[automation-science-pack]
energy: 5
group_name: intermediate-products
group_order: c
subgroup_name: science-pack
subgroup_order: g
request_paste_multiplier: 30
main_product: automation-science-pack
main_product_stack_size: 200
item_ingredient_name: 1 copper-plate
item_ingredient_name: 1 iron-gear-wheel

-----
name: battery
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: h[battery]
energy: 4
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
main_product: battery
main_product_stack_size: 200
item_ingredient_name: 1 iron-plate
item_ingredient_name: 1 copper-plate

-----
name: battery-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[battery]-a[battery-equipment]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: battery-equipment
main_product_stack_size: 20
item_ingredient_name: 10 steel-plate
item_ingredient_name: 5 battery

-----
name: battery-mk2-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[battery]-b[battery-equipment-mk2]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: battery-mk2-equipment
main_product_stack_size: 20
item_ingredient_name: 15 processing-unit
item_ingredient_name: 5 low-density-structure
item_ingredient_name: 10 battery-equipment

-----
name: beacon
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[beacon]
energy: 15
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: beacon
main_product_stack_size: 10
item_ingredient_name: 10 steel-plate
item_ingredient_name: 10 copper-cable
item_ingredient_name: 20 electronic-circuit
item_ingredient_name: 20 advanced-circuit

-----
name: belt-immunity-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[belt-immunity]-a[belt-immunity]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: belt-immunity-equipment
main_product_stack_size: 20
item_ingredient_name: 10 steel-plate
item_ingredient_name: 5 advanced-circuit

-----
name: big-electric-pole
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[energy]-c[big-electric-pole]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: energy-pipe-distribution
subgroup_order: d
request_paste_multiplier: 30
main_product: big-electric-pole
main_product_stack_size: 50
item_ingredient_name: 5 copper-plate
item_ingredient_name: 5 steel-plate
item_ingredient_name: 8 iron-stick

-----
name: boiler
enabled: true
hidden: false
unlock_results: true
category: crafting
order: b[steam-power]-a[boiler]
energy: 0.5
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 30
main_product: boiler
main_product_stack_size: 50
item_ingredient_name: 4 pipe
item_ingredient_name: 1 stone-furnace

-----
name: burner-inserter
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[burner-inserter]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: inserter
subgroup_order: c
request_paste_multiplier: 30
main_product: burner-inserter
main_product_stack_size: 50
item_ingredient_name: 1 iron-plate
item_ingredient_name: 1 iron-gear-wheel

-----
name: burner-mining-drill
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[items]-a[burner-mining-drill]
energy: 2
group_name: production
group_order: b
subgroup_name: extraction-machine
subgroup_order: c
request_paste_multiplier: 30
main_product: burner-mining-drill
main_product_stack_size: 50
item_ingredient_name: 3 iron-plate
item_ingredient_name: 3 iron-gear-wheel
item_ingredient_name: 1 stone-furnace

-----
name: cannon-shell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[cannon-shell]-a[basic]
energy: 8
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: cannon-shell
main_product_stack_size: 200
item_ingredient_name: 2 steel-plate
item_ingredient_name: 2 plastic-bar
item_ingredient_name: 1 explosives

-----
name: car
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[personal-transport]-a[car]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: transport
subgroup_order: f
request_paste_multiplier: 30
main_product: car
main_product_stack_size: 1
item_ingredient_name: 20 iron-plate
item_ingredient_name: 5 steel-plate
item_ingredient_name: 8 engine-unit

-----
name: cargo-wagon
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-g[cargo-wagon]
energy: 1
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: cargo-wagon
main_product_stack_size: 5
item_ingredient_name: 20 iron-plate
item_ingredient_name: 20 steel-plate
item_ingredient_name: 10 iron-gear-wheel

-----
name: centrifuge
enabled: false
hidden: false
unlock_results: true
category: crafting
order: g[centrifuge]
energy: 4
group_name: production
group_order: b
subgroup_name: production-machine
subgroup_order: e
request_paste_multiplier: 10
main_product: centrifuge
main_product_stack_size: 50
item_ingredient_name: 50 steel-plate
item_ingredient_name: 100 iron-gear-wheel
item_ingredient_name: 100 advanced-circuit
item_ingredient_name: 100 concrete

-----
name: chemical-plant
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[chemical-plant]
energy: 5
group_name: production
group_order: b
subgroup_name: production-machine
subgroup_order: e
request_paste_multiplier: 30
main_product: chemical-plant
main_product_stack_size: 10
item_ingredient_name: 5 steel-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 5 pipe

-----
name: chemical-science-pack
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[chemical-science-pack]
energy: 24
group_name: intermediate-products
group_order: c
subgroup_name: science-pack
subgroup_order: g
request_paste_multiplier: 30
main_product: chemical-science-pack
main_product_stack_size: 200
item_ingredient_name: 1 sulfur
item_ingredient_name: 3 advanced-circuit
item_ingredient_name: 2 engine-unit

-----
name: cliff-explosives
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[cliff-explosives]
energy: 8
group_name: logistics
group_order: aaa
subgroup_name: terrain
subgroup_order: i
request_paste_multiplier: 30
main_product: cliff-explosives
main_product_stack_size: 20
item_ingredient_name: 10 explosives
item_ingredient_name: 1 empty-barrel
item_ingredient_name: 1 grenade

-----
name: cluster-grenade
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[grenade]-b[cluster]
energy: 8
group_name: combat
group_order: d
subgroup_name: capsule
subgroup_order: c
request_paste_multiplier: 30
main_product: cluster-grenade
main_product_stack_size: 100
item_ingredient_name: 5 steel-plate
item_ingredient_name: 5 explosives
item_ingredient_name: 7 grenade

-----
name: combat-shotgun
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[shotgun]-a[combat]
energy: 10
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: combat-shotgun
main_product_stack_size: 5
item_ingredient_name: 10 wood
item_ingredient_name: 10 copper-plate
item_ingredient_name: 15 steel-plate
item_ingredient_name: 5 iron-gear-wheel

-----
name: concrete
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[concrete]-a[plain]
energy: 10
group_name: logistics
group_order: aaa
subgroup_name: terrain
subgroup_order: i
request_paste_multiplier: 30
main_product: concrete
main_product_stack_size: 100
item_ingredient_name: 1 iron-ore
item_ingredient_name: 5 stone-brick

-----
name: constant-combinator
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[combinators]-c[constant-combinator]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: constant-combinator
main_product_stack_size: 50
item_ingredient_name: 5 copper-cable
item_ingredient_name: 2 electronic-circuit

-----
name: construction-robot
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[robot]-b[construction-robot]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: construction-robot
main_product_stack_size: 50
item_ingredient_name: 2 electronic-circuit
item_ingredient_name: 1 flying-robot-frame

-----
name: copper-cable
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[copper-cable]
energy: 0.5
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: copper-cable
main_product_stack_size: 200
item_ingredient_name: 1 copper-plate

-----
name: copper-plate
enabled: true
hidden: false
unlock_results: true
category: smelting
order: c[copper-plate]
energy: 3.2
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
main_product: copper-plate
main_product_stack_size: 100
item_ingredient_name: 1 copper-ore

-----
name: decider-combinator
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[combinators]-b[decider-combinator]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: decider-combinator
main_product_stack_size: 50
item_ingredient_name: 5 copper-cable
item_ingredient_name: 5 electronic-circuit

-----
name: defender-capsule
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[defender-capsule]
energy: 8
group_name: combat
group_order: d
subgroup_name: capsule
subgroup_order: c
request_paste_multiplier: 30
main_product: defender-capsule
main_product_stack_size: 100
item_ingredient_name: 3 iron-gear-wheel
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 3 piercing-rounds-magazine

-----
name: destroyer-capsule
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[destroyer-capsule]
energy: 15
group_name: combat
group_order: d
subgroup_name: capsule
subgroup_order: c
request_paste_multiplier: 30
main_product: destroyer-capsule
main_product_stack_size: 100
item_ingredient_name: 1 speed-module
item_ingredient_name: 4 distractor-capsule

-----
name: discharge-defense-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[active-defense]-b[discharge-defense-equipment]-a[equipment]
energy: 10
group_name: combat
group_order: d
subgroup_name: military-equipment
subgroup_order: f
request_paste_multiplier: 30
main_product: discharge-defense-equipment
main_product_stack_size: 20
item_ingredient_name: 20 steel-plate
item_ingredient_name: 5 processing-unit
item_ingredient_name: 10 laser-turret

-----
name: discharge-defense-remote
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[active-defense]-b[discharge-defense-equipment]-b[remote]
energy: 0.5
group_name: combat
group_order: d
subgroup_name: military-equipment
subgroup_order: f
request_paste_multiplier: 30
main_product: discharge-defense-remote
main_product_stack_size: 1
item_ingredient_name: 1 electronic-circuit

-----
name: distractor-capsule
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[defender-capsule]
energy: 15
group_name: combat
group_order: d
subgroup_name: capsule
subgroup_order: c
request_paste_multiplier: 30
main_product: distractor-capsule
main_product_stack_size: 100
item_ingredient_name: 3 advanced-circuit
item_ingredient_name: 4 defender-capsule

-----
name: effectivity-module
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[effectivity]-a[effectivity-module-1]
energy: 15
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: effectivity-module
main_product_stack_size: 50
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 5 advanced-circuit

-----
name: effectivity-module-2
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[effectivity]-b[effectivity-module-2]
energy: 30
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: effectivity-module-2
main_product_stack_size: 50
item_ingredient_name: 5 advanced-circuit
item_ingredient_name: 5 processing-unit
item_ingredient_name: 4 effectivity-module

-----
name: effectivity-module-3
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[effectivity]-c[effectivity-module-3]
energy: 60
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: effectivity-module-3
main_product_stack_size: 50
item_ingredient_name: 5 advanced-circuit
item_ingredient_name: 5 processing-unit
item_ingredient_name: 5 effectivity-module-2

-----
name: electric-energy-interface
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[electric-energy-interface]-b[electric-energy-interface]
energy: 0.5
group_name: other
group_order: z
subgroup_name: other
subgroup_order: z
request_paste_multiplier: 30
main_product: electric-energy-interface
main_product_stack_size: 50
item_ingredient_name: 2 iron-plate
item_ingredient_name: 5 electronic-circuit

-----
name: electric-engine-unit
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: i[electric-engine-unit]
energy: 10
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: electric-engine-unit
main_product_stack_size: 50
item_ingredient_name: 2 electronic-circuit
item_ingredient_name: 1 engine-unit

-----
name: electric-furnace
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[electric-furnace]
energy: 5
group_name: production
group_order: b
subgroup_name: smelting-machine
subgroup_order: d
request_paste_multiplier: 30
main_product: electric-furnace
main_product_stack_size: 50
item_ingredient_name: 10 steel-plate
item_ingredient_name: 5 advanced-circuit
item_ingredient_name: 10 stone-brick

-----
name: electric-mining-drill
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[items]-b[electric-mining-drill]
energy: 2
group_name: production
group_order: b
subgroup_name: extraction-machine
subgroup_order: c
request_paste_multiplier: 30
main_product: electric-mining-drill
main_product_stack_size: 50
item_ingredient_name: 10 iron-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 3 electronic-circuit

-----
name: electronic-circuit
enabled: true
hidden: false
unlock_results: true
category: crafting
order: e[electronic-circuit]
energy: 0.5
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: electronic-circuit
main_product_stack_size: 200
item_ingredient_name: 1 iron-plate
item_ingredient_name: 3 copper-cable

-----
name: empty-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[empty-barrel]
energy: 1
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: empty-barrel
main_product_stack_size: 10
item_ingredient_name: 1 steel-plate

-----
name: energy-shield-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[shield]-a[energy-shield-equipment]
energy: 10
group_name: combat
group_order: d
subgroup_name: military-equipment
subgroup_order: f
request_paste_multiplier: 30
main_product: energy-shield-equipment
main_product_stack_size: 20
item_ingredient_name: 10 steel-plate
item_ingredient_name: 5 advanced-circuit

-----
name: energy-shield-mk2-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[shield]-b[energy-shield-equipment-mk2]
energy: 10
group_name: combat
group_order: d
subgroup_name: military-equipment
subgroup_order: f
request_paste_multiplier: 30
main_product: energy-shield-mk2-equipment
main_product_stack_size: 20
item_ingredient_name: 5 processing-unit
item_ingredient_name: 5 low-density-structure
item_ingredient_name: 10 energy-shield-equipment

-----
name: engine-unit
enabled: false
hidden: false
unlock_results: true
category: advanced-crafting
order: h[engine-unit]
energy: 10
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: engine-unit
main_product_stack_size: 50
item_ingredient_name: 1 steel-plate
item_ingredient_name: 1 iron-gear-wheel
item_ingredient_name: 2 pipe

-----
name: exoskeleton-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[exoskeleton]-a[exoskeleton-equipment]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: exoskeleton-equipment
main_product_stack_size: 20
item_ingredient_name: 20 steel-plate
item_ingredient_name: 10 processing-unit
item_ingredient_name: 30 electric-engine-unit

-----
name: explosive-cannon-shell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[cannon-shell]-c[explosive]
energy: 8
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: explosive-cannon-shell
main_product_stack_size: 200
item_ingredient_name: 2 steel-plate
item_ingredient_name: 2 plastic-bar
item_ingredient_name: 2 explosives

-----
name: explosive-rocket
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[rocket-launcher]-b[explosive]
energy: 8
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: explosive-rocket
main_product_stack_size: 200
item_ingredient_name: 2 explosives
item_ingredient_name: 1 rocket

-----
name: explosive-uranium-cannon-shell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[explosive-cannon-shell]-c[uranium]
energy: 12
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: explosive-uranium-cannon-shell
main_product_stack_size: 200
item_ingredient_name: 1 uranium-238
item_ingredient_name: 1 explosive-cannon-shell

-----
name: explosives
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: j[explosives]
energy: 4
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
main_product: explosives
main_product_stack_size: 50
item_ingredient_name: 1 coal
item_ingredient_name: 1 sulfur

-----
name: express-loader
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[loader]-c[express-loader]
energy: 10
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: express-loader
main_product_stack_size: 50
item_ingredient_name: 5 express-transport-belt
item_ingredient_name: 1 fast-loader

-----
name: express-splitter
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[splitter]-c[express-splitter]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: express-splitter
main_product_stack_size: 50
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 10 advanced-circuit
item_ingredient_name: 1 fast-splitter

-----
name: express-transport-belt
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: a[transport-belt]-c[express-transport-belt]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: express-transport-belt
main_product_stack_size: 100
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 1 fast-transport-belt

-----
name: express-underground-belt
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[underground-belt]-c[express-underground-belt]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: express-underground-belt
main_product_stack_size: 50
item_ingredient_name: 80 iron-gear-wheel
item_ingredient_name: 2 fast-underground-belt

-----
name: fast-inserter
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[fast-inserter]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: inserter
subgroup_order: c
request_paste_multiplier: 30
main_product: fast-inserter
main_product_stack_size: 50
item_ingredient_name: 2 iron-plate
item_ingredient_name: 2 electronic-circuit
item_ingredient_name: 1 inserter

-----
name: fast-loader
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[loader]-b[fast-loader]
energy: 3
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: fast-loader
main_product_stack_size: 50
item_ingredient_name: 5 fast-transport-belt
item_ingredient_name: 1 loader

-----
name: fast-splitter
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[splitter]-b[fast-splitter]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: fast-splitter
main_product_stack_size: 50
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 10 electronic-circuit
item_ingredient_name: 1 splitter

-----
name: fast-transport-belt
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[transport-belt]-b[fast-transport-belt]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: fast-transport-belt
main_product_stack_size: 100
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 1 transport-belt

-----
name: fast-underground-belt
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[underground-belt]-b[fast-underground-belt]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: fast-underground-belt
main_product_stack_size: 50
item_ingredient_name: 40 iron-gear-wheel
item_ingredient_name: 2 underground-belt

-----
name: filter-inserter
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[filter-inserter]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: inserter
subgroup_order: c
request_paste_multiplier: 30
main_product: filter-inserter
main_product_stack_size: 50
item_ingredient_name: 4 electronic-circuit
item_ingredient_name: 1 fast-inserter

-----
name: firearm-magazine
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[basic-clips]-a[firearm-magazine]
energy: 1
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: firearm-magazine
main_product_stack_size: 200
item_ingredient_name: 4 iron-plate

-----
name: flamethrower
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[flamethrower]
energy: 10
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: flamethrower
main_product_stack_size: 5
item_ingredient_name: 5 steel-plate
item_ingredient_name: 10 iron-gear-wheel

-----
name: flamethrower-ammo
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: e[flamethrower]
energy: 6
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: flamethrower-ammo
main_product_stack_size: 100
item_ingredient_name: 5 steel-plate

-----
name: flamethrower-turret
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[turret]-c[flamethrower-turret]
energy: 20
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: flamethrower-turret
main_product_stack_size: 50
item_ingredient_name: 30 steel-plate
item_ingredient_name: 15 iron-gear-wheel
item_ingredient_name: 5 engine-unit
item_ingredient_name: 10 pipe

-----
name: fluid-wagon
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-h[fluid-wagon]
energy: 1.5
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: fluid-wagon
main_product_stack_size: 5
item_ingredient_name: 16 steel-plate
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 1 storage-tank
item_ingredient_name: 8 pipe

-----
name: flying-robot-frame
enabled: false
hidden: false
unlock_results: true
category: crafting
order: l[flying-robot-frame]
energy: 20
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: flying-robot-frame
main_product_stack_size: 50
item_ingredient_name: 1 steel-plate
item_ingredient_name: 2 battery
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 1 electric-engine-unit

-----
name: fusion-reactor-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[energy-source]-b[fusion-reactor]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: fusion-reactor-equipment
main_product_stack_size: 20
item_ingredient_name: 200 processing-unit
item_ingredient_name: 50 low-density-structure

-----
name: gate
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[wall]-b[gate]
energy: 0.5
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: gate
main_product_stack_size: 50
item_ingredient_name: 2 steel-plate
item_ingredient_name: 2 electronic-circuit
item_ingredient_name: 1 stone-wall

-----
name: green-wire
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[wires]-b[green-wire]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: green-wire
main_product_stack_size: 200
item_ingredient_name: 1 copper-cable
item_ingredient_name: 1 electronic-circuit

-----
name: grenade
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[grenade]-a[normal]
energy: 8
group_name: combat
group_order: d
subgroup_name: capsule
subgroup_order: c
request_paste_multiplier: 30
main_product: grenade
main_product_stack_size: 100
item_ingredient_name: 10 coal
item_ingredient_name: 5 iron-plate

-----
name: gun-turret
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[turret]-a[gun-turret]
energy: 8
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: gun-turret
main_product_stack_size: 50
item_ingredient_name: 20 iron-plate
item_ingredient_name: 10 copper-plate
item_ingredient_name: 10 iron-gear-wheel

-----
name: hazard-concrete
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[concrete]-b[hazard]
energy: 0.25
group_name: logistics
group_order: aaa
subgroup_name: terrain
subgroup_order: i
request_paste_multiplier: 30
main_product: hazard-concrete
main_product_stack_size: 100
item_ingredient_name: 10 concrete

-----
name: heat-exchanger
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[nuclear-energy]-c[heat-exchanger]
energy: 3
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 30
main_product: heat-exchanger
main_product_stack_size: 50
item_ingredient_name: 100 copper-plate
item_ingredient_name: 10 steel-plate
item_ingredient_name: 10 pipe

-----
name: heat-pipe
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[nuclear-energy]-b[heat-pipe]
energy: 1
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 30
main_product: heat-pipe
main_product_stack_size: 50
item_ingredient_name: 20 copper-plate
item_ingredient_name: 10 steel-plate

-----
name: heavy-armor
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[heavy-armor]
energy: 8
group_name: combat
group_order: d
subgroup_name: armor
subgroup_order: d
request_paste_multiplier: 30
main_product: heavy-armor
main_product_stack_size: 1
item_ingredient_name: 100 copper-plate
item_ingredient_name: 50 steel-plate

-----
name: inserter
enabled: true
hidden: false
unlock_results: true
category: crafting
order: b[inserter]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: inserter
subgroup_order: c
request_paste_multiplier: 30
main_product: inserter
main_product_stack_size: 50
item_ingredient_name: 1 iron-plate
item_ingredient_name: 1 iron-gear-wheel
item_ingredient_name: 1 electronic-circuit

-----
name: iron-chest
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[items]-b[iron-chest]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: storage
subgroup_order: a
request_paste_multiplier: 30
main_product: iron-chest
main_product_stack_size: 50
item_ingredient_name: 8 iron-plate

-----
name: iron-gear-wheel
enabled: true
hidden: false
unlock_results: true
category: crafting
order: c[iron-gear-wheel]
energy: 0.5
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: iron-gear-wheel
main_product_stack_size: 100
item_ingredient_name: 2 iron-plate

-----
name: iron-plate
enabled: true
hidden: false
unlock_results: true
category: smelting
order: b[iron-plate]
energy: 3.2
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
main_product: iron-plate
main_product_stack_size: 100
item_ingredient_name: 1 iron-ore

-----
name: iron-stick
enabled: true
hidden: false
unlock_results: true
category: crafting
order: b[iron-stick]
energy: 0.5
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: iron-stick
main_product_stack_size: 100
item_ingredient_name: 1 iron-plate

-----
name: lab
enabled: true
hidden: false
unlock_results: true
category: crafting
order: g[lab]
energy: 2
group_name: production
group_order: b
subgroup_name: production-machine
subgroup_order: e
request_paste_multiplier: 30
main_product: lab
main_product_stack_size: 10
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 10 electronic-circuit
item_ingredient_name: 4 transport-belt

-----
name: land-mine
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[land-mine]
energy: 5
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: land-mine
main_product_stack_size: 100
item_ingredient_name: 1 steel-plate
item_ingredient_name: 2 explosives

-----
name: landfill
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[landfill]-a[dirt]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: terrain
subgroup_order: i
request_paste_multiplier: 30
main_product: landfill
main_product_stack_size: 100
item_ingredient_name: 20 stone

-----
name: laser-turret
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[turret]-b[laser-turret]
energy: 20
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: laser-turret
main_product_stack_size: 50
item_ingredient_name: 20 steel-plate
item_ingredient_name: 12 battery
item_ingredient_name: 20 electronic-circuit

-----
name: light-armor
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[light-armor]
energy: 3
group_name: combat
group_order: d
subgroup_name: armor
subgroup_order: d
request_paste_multiplier: 30
main_product: light-armor
main_product_stack_size: 1
item_ingredient_name: 40 iron-plate

-----
name: loader
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[loader]-a[basic-loader]
energy: 1
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: loader
main_product_stack_size: 50
item_ingredient_name: 5 iron-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 5 transport-belt
item_ingredient_name: 5 inserter

-----
name: locomotive
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-f[locomotive]
energy: 4
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: locomotive
main_product_stack_size: 5
item_ingredient_name: 30 steel-plate
item_ingredient_name: 10 electronic-circuit
item_ingredient_name: 20 engine-unit

-----
name: logistic-chest-active-provider
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[storage]-c[logistic-chest-active-provider]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: logistic-chest-active-provider
main_product_stack_size: 50
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 1 advanced-circuit
item_ingredient_name: 1 steel-chest

-----
name: logistic-chest-buffer
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[storage]-d[logistic-chest-buffer]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: logistic-chest-buffer
main_product_stack_size: 50
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 1 advanced-circuit
item_ingredient_name: 1 steel-chest

-----
name: logistic-chest-passive-provider
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[storage]-c[logistic-chest-passive-provider]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: logistic-chest-passive-provider
main_product_stack_size: 50
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 1 advanced-circuit
item_ingredient_name: 1 steel-chest

-----
name: logistic-chest-requester
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[storage]-e[logistic-chest-requester]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: logistic-chest-requester
main_product_stack_size: 50
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 1 advanced-circuit
item_ingredient_name: 1 steel-chest

-----
name: logistic-chest-storage
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[storage]-c[logistic-chest-storage]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: logistic-chest-storage
main_product_stack_size: 50
item_ingredient_name: 3 electronic-circuit
item_ingredient_name: 1 advanced-circuit
item_ingredient_name: 1 steel-chest

-----
name: logistic-robot
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[robot]-a[logistic-robot]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: logistic-robot
main_product_stack_size: 50
item_ingredient_name: 2 advanced-circuit
item_ingredient_name: 1 flying-robot-frame

-----
name: logistic-science-pack
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[logistic-science-pack]
energy: 6
group_name: intermediate-products
group_order: c
subgroup_name: science-pack
subgroup_order: g
request_paste_multiplier: 30
main_product: logistic-science-pack
main_product_stack_size: 200
item_ingredient_name: 1 transport-belt
item_ingredient_name: 1 inserter

-----
name: long-handed-inserter
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[long-handed-inserter]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: inserter
subgroup_order: c
request_paste_multiplier: 30
main_product: long-handed-inserter
main_product_stack_size: 50
item_ingredient_name: 1 iron-plate
item_ingredient_name: 1 iron-gear-wheel
item_ingredient_name: 1 inserter

-----
name: low-density-structure
enabled: false
hidden: false
unlock_results: true
category: crafting
order: o[low-density-structure]
energy: 20
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: low-density-structure
main_product_stack_size: 10
item_ingredient_name: 20 copper-plate
item_ingredient_name: 2 steel-plate
item_ingredient_name: 5 plastic-bar

-----
name: lubricant
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: e[lubricant]
energy: 1
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30
main_product: lubricant

-----
name: medium-electric-pole
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[energy]-b[medium-electric-pole]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: energy-pipe-distribution
subgroup_order: d
request_paste_multiplier: 30
main_product: medium-electric-pole
main_product_stack_size: 50
item_ingredient_name: 2 copper-plate
item_ingredient_name: 2 steel-plate
item_ingredient_name: 4 iron-stick

-----
name: military-science-pack
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[military-science-pack]
energy: 10
group_name: intermediate-products
group_order: c
subgroup_name: science-pack
subgroup_order: g
request_paste_multiplier: 30
main_product: military-science-pack
main_product_stack_size: 200
item_ingredient_name: 1 piercing-rounds-magazine
item_ingredient_name: 1 grenade
item_ingredient_name: 2 stone-wall

-----
name: modular-armor
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[modular-armor]
energy: 15
group_name: combat
group_order: d
subgroup_name: armor
subgroup_order: d
request_paste_multiplier: 30
main_product: modular-armor
main_product_stack_size: 1
item_ingredient_name: 50 steel-plate
item_ingredient_name: 30 advanced-circuit

-----
name: night-vision-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[night-vision]-a[night-vision-equipment]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: night-vision-equipment
main_product_stack_size: 20
item_ingredient_name: 10 steel-plate
item_ingredient_name: 5 advanced-circuit

-----
name: nuclear-fuel
enabled: false
hidden: false
unlock_results: true
category: centrifuging
order: q[uranium-rocket-fuel]
energy: 90
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: nuclear-fuel
main_product_stack_size: 1
item_ingredient_name: 1 rocket-fuel
item_ingredient_name: 1 uranium-235

-----
name: nuclear-reactor
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[nuclear-energy]-a[reactor]
energy: 8
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 1
main_product: nuclear-reactor
main_product_stack_size: 10
item_ingredient_name: 500 copper-plate
item_ingredient_name: 500 steel-plate
item_ingredient_name: 500 advanced-circuit
item_ingredient_name: 500 concrete

-----
name: offshore-pump
enabled: true
hidden: false
unlock_results: true
category: crafting
order: b[fluids]-a[offshore-pump]
energy: 0.5
group_name: production
group_order: b
subgroup_name: extraction-machine
subgroup_order: c
request_paste_multiplier: 30
main_product: offshore-pump
main_product_stack_size: 20
item_ingredient_name: 1 iron-gear-wheel
item_ingredient_name: 2 electronic-circuit
item_ingredient_name: 1 pipe

-----
name: oil-refinery
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[refinery]
energy: 8
group_name: production
group_order: b
subgroup_name: production-machine
subgroup_order: e
request_paste_multiplier: 30
main_product: oil-refinery
main_product_stack_size: 10
item_ingredient_name: 15 steel-plate
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 10 electronic-circuit
item_ingredient_name: 10 pipe
item_ingredient_name: 10 stone-brick

-----
name: personal-laser-defense-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[active-defense]-a[personal-laser-defense-equipment]
energy: 10
group_name: combat
group_order: d
subgroup_name: military-equipment
subgroup_order: f
request_paste_multiplier: 30
main_product: personal-laser-defense-equipment
main_product_stack_size: 20
item_ingredient_name: 20 processing-unit
item_ingredient_name: 5 low-density-structure
item_ingredient_name: 5 laser-turret

-----
name: personal-roboport-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[robotics]-a[personal-roboport-equipment]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: personal-roboport-equipment
main_product_stack_size: 20
item_ingredient_name: 20 steel-plate
item_ingredient_name: 45 battery
item_ingredient_name: 40 iron-gear-wheel
item_ingredient_name: 10 advanced-circuit

-----
name: personal-roboport-mk2-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[robotics]-b[personal-roboport-mk2-equipment]
energy: 20
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: personal-roboport-mk2-equipment
main_product_stack_size: 20
item_ingredient_name: 100 processing-unit
item_ingredient_name: 20 low-density-structure
item_ingredient_name: 5 personal-roboport-equipment

-----
name: piercing-rounds-magazine
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[basic-clips]-b[piercing-rounds-magazine]
energy: 3
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: piercing-rounds-magazine
main_product_stack_size: 200
item_ingredient_name: 5 copper-plate
item_ingredient_name: 1 steel-plate
item_ingredient_name: 1 firearm-magazine

-----
name: piercing-shotgun-shell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[shotgun]-b[piercing]
energy: 8
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: piercing-shotgun-shell
main_product_stack_size: 200
item_ingredient_name: 5 copper-plate
item_ingredient_name: 2 steel-plate
item_ingredient_name: 2 shotgun-shell

-----
name: pipe
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[pipe]-a[pipe]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: energy-pipe-distribution
subgroup_order: d
request_paste_multiplier: 30
main_product: pipe
main_product_stack_size: 100
item_ingredient_name: 1 iron-plate

-----
name: pipe-to-ground
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[pipe]-b[pipe-to-ground]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: energy-pipe-distribution
subgroup_order: d
request_paste_multiplier: 30
main_product: pipe-to-ground
main_product_stack_size: 50
item_ingredient_name: 5 iron-plate
item_ingredient_name: 10 pipe

-----
name: pistol
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[basic-clips]-a[pistol]
energy: 5
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: pistol
main_product_stack_size: 5
item_ingredient_name: 5 iron-plate
item_ingredient_name: 5 copper-plate

-----
name: plastic-bar
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: f[plastic-bar]
energy: 1
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
main_product: plastic-bar
main_product_stack_size: 100
item_ingredient_name: 1 coal

-----
name: player-port
enabled: false
hidden: false
unlock_results: true
category: crafting
order: z[not-used]
energy: 0.5
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: player-port
main_product_stack_size: 50
item_ingredient_name: 1 iron-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 10 electronic-circuit

-----
name: poison-capsule
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[poison-capsule]
energy: 8
group_name: combat
group_order: d
subgroup_name: capsule
subgroup_order: c
request_paste_multiplier: 30
main_product: poison-capsule
main_product_stack_size: 100
item_ingredient_name: 10 coal
item_ingredient_name: 3 steel-plate
item_ingredient_name: 3 electronic-circuit

-----
name: power-armor
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[power-armor]
energy: 20
group_name: combat
group_order: d
subgroup_name: armor
subgroup_order: d
request_paste_multiplier: 1
main_product: power-armor
main_product_stack_size: 1
item_ingredient_name: 40 steel-plate
item_ingredient_name: 40 processing-unit
item_ingredient_name: 20 electric-engine-unit

-----
name: power-armor-mk2
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[power-armor-mk2]
energy: 25
group_name: combat
group_order: d
subgroup_name: armor
subgroup_order: d
request_paste_multiplier: 1
main_product: power-armor-mk2
main_product_stack_size: 1
item_ingredient_name: 60 processing-unit
item_ingredient_name: 40 electric-engine-unit
item_ingredient_name: 30 low-density-structure
item_ingredient_name: 25 speed-module-2
item_ingredient_name: 25 effectivity-module-2

-----
name: power-switch
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[other]-a[power-switch]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: power-switch
main_product_stack_size: 50
item_ingredient_name: 5 iron-plate
item_ingredient_name: 5 copper-cable
item_ingredient_name: 2 electronic-circuit

-----
name: processing-unit
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: g[processing-unit]
energy: 10
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: processing-unit
main_product_stack_size: 100
item_ingredient_name: 20 electronic-circuit
item_ingredient_name: 2 advanced-circuit

-----
name: production-science-pack
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[production-science-pack]
energy: 21
group_name: intermediate-products
group_order: c
subgroup_name: science-pack
subgroup_order: g
request_paste_multiplier: 30
main_product: production-science-pack
main_product_stack_size: 200
item_ingredient_name: 30 rail
item_ingredient_name: 1 electric-furnace
item_ingredient_name: 1 productivity-module

-----
name: productivity-module
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[productivity]-a[productivity-module-1]
energy: 15
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: productivity-module
main_product_stack_size: 50
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 5 advanced-circuit

-----
name: productivity-module-2
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[productivity]-b[productivity-module-2]
energy: 30
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: productivity-module-2
main_product_stack_size: 50
item_ingredient_name: 5 advanced-circuit
item_ingredient_name: 5 processing-unit
item_ingredient_name: 4 productivity-module

-----
name: productivity-module-3
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[productivity]-c[productivity-module-3]
energy: 60
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: productivity-module-3
main_product_stack_size: 50
item_ingredient_name: 5 advanced-circuit
item_ingredient_name: 5 processing-unit
item_ingredient_name: 5 productivity-module-2

-----
name: programmable-speaker
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[other]-b[programmable-speaker]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: programmable-speaker
main_product_stack_size: 50
item_ingredient_name: 3 iron-plate
item_ingredient_name: 5 copper-cable
item_ingredient_name: 4 iron-stick
item_ingredient_name: 4 electronic-circuit

-----
name: pump
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[pipe]-c[pump]
energy: 2
group_name: logistics
group_order: aaa
subgroup_name: energy-pipe-distribution
subgroup_order: d
request_paste_multiplier: 30
main_product: pump
main_product_stack_size: 50
item_ingredient_name: 1 steel-plate
item_ingredient_name: 1 engine-unit
item_ingredient_name: 1 pipe

-----
name: pumpjack
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[fluids]-b[pumpjack]
energy: 5
group_name: production
group_order: b
subgroup_name: extraction-machine
subgroup_order: c
request_paste_multiplier: 30
main_product: pumpjack
main_product_stack_size: 20
item_ingredient_name: 5 steel-plate
item_ingredient_name: 10 iron-gear-wheel
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 10 pipe

-----
name: radar
enabled: true
hidden: false
unlock_results: true
category: crafting
order: d[radar]-a[radar]
energy: 0.5
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: radar
main_product_stack_size: 50
item_ingredient_name: 10 iron-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 5 electronic-circuit

-----
name: rail
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-a[rail]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: rail
main_product_stack_size: 100
item_ingredient_name: 1 stone
item_ingredient_name: 1 steel-plate
item_ingredient_name: 1 iron-stick

-----
name: rail-chain-signal
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-e[rail-signal-chain]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: rail-chain-signal
main_product_stack_size: 50
item_ingredient_name: 5 iron-plate
item_ingredient_name: 1 electronic-circuit

-----
name: rail-signal
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-d[rail-signal]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: rail-signal
main_product_stack_size: 50
item_ingredient_name: 5 iron-plate
item_ingredient_name: 1 electronic-circuit

-----
name: railgun
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[railgun]
energy: 8
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: railgun
main_product_stack_size: 5
item_ingredient_name: 15 copper-plate
item_ingredient_name: 15 steel-plate
item_ingredient_name: 10 electronic-circuit
item_ingredient_name: 5 advanced-circuit

-----
name: railgun-dart
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[railgun]
energy: 8
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: railgun-dart
main_product_stack_size: 200
item_ingredient_name: 5 steel-plate
item_ingredient_name: 5 electronic-circuit

-----
name: red-wire
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[wires]-a[red-wire]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: red-wire
main_product_stack_size: 200
item_ingredient_name: 1 copper-cable
item_ingredient_name: 1 electronic-circuit

-----
name: refined-concrete
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[concrete]-c[refined]
energy: 15
group_name: logistics
group_order: aaa
subgroup_name: terrain
subgroup_order: i
request_paste_multiplier: 30
main_product: refined-concrete
main_product_stack_size: 100
item_ingredient_name: 1 steel-plate
item_ingredient_name: 8 iron-stick
item_ingredient_name: 20 concrete

-----
name: refined-hazard-concrete
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[concrete]-d[refined-hazard]
energy: 0.25
group_name: logistics
group_order: aaa
subgroup_name: terrain
subgroup_order: i
request_paste_multiplier: 30
main_product: refined-hazard-concrete
main_product_stack_size: 100
item_ingredient_name: 10 refined-concrete

-----
name: repair-pack
enabled: true
hidden: false
unlock_results: true
category: crafting
order: b[repair]-a[repair-pack]
energy: 0.5
group_name: production
group_order: b
subgroup_name: tool
subgroup_order: a
request_paste_multiplier: 30
main_product: repair-pack
main_product_stack_size: 100
item_ingredient_name: 2 iron-gear-wheel
item_ingredient_name: 2 electronic-circuit

-----
name: roboport
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[signal]-a[roboport]
energy: 5
group_name: logistics
group_order: aaa
subgroup_name: logistic-network
subgroup_order: g
request_paste_multiplier: 30
main_product: roboport
main_product_stack_size: 10
item_ingredient_name: 45 steel-plate
item_ingredient_name: 45 iron-gear-wheel
item_ingredient_name: 45 advanced-circuit

-----
name: rocket
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[rocket-launcher]-a[basic]
energy: 8
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: rocket
main_product_stack_size: 200
item_ingredient_name: 2 iron-plate
item_ingredient_name: 1 explosives
item_ingredient_name: 1 electronic-circuit

-----
name: rocket-control-unit
enabled: false
hidden: false
unlock_results: true
category: crafting
order: n[rocket-control-unit]
energy: 30
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: rocket-control-unit
main_product_stack_size: 10
item_ingredient_name: 1 processing-unit
item_ingredient_name: 1 speed-module

-----
name: rocket-fuel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: p[rocket-fuel]
energy: 30
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: rocket-fuel
main_product_stack_size: 10
item_ingredient_name: 10 solid-fuel

-----
name: rocket-launcher
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[rocket-launcher]
energy: 10
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: rocket-launcher
main_product_stack_size: 5
item_ingredient_name: 5 iron-plate
item_ingredient_name: 5 iron-gear-wheel
item_ingredient_name: 5 electronic-circuit

-----
name: rocket-part
enabled: false
hidden: true
unlock_results: true
category: rocket-building
order: q[rocket-part]
energy: 3
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: rocket-part
main_product_stack_size: 5
item_ingredient_name: 10 rocket-control-unit
item_ingredient_name: 10 low-density-structure
item_ingredient_name: 10 rocket-fuel

-----
name: rocket-silo
enabled: false
hidden: false
unlock_results: true
category: crafting
order: e[rocket-silo]
energy: 30
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 1
main_product: rocket-silo
main_product_stack_size: 1
item_ingredient_name: 1000 steel-plate
item_ingredient_name: 200 processing-unit
item_ingredient_name: 200 electric-engine-unit
item_ingredient_name: 100 pipe
item_ingredient_name: 1000 concrete

-----
name: satellite
enabled: false
hidden: false
unlock_results: true
category: crafting
order: m[satellite]
energy: 5
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 1
main_product: satellite
main_product_stack_size: 1
item_ingredient_name: 100 processing-unit
item_ingredient_name: 100 low-density-structure
item_ingredient_name: 50 rocket-fuel
item_ingredient_name: 100 solar-panel
item_ingredient_name: 100 accumulator
item_ingredient_name: 5 radar

-----
name: shotgun
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[shotgun]-a[basic]
energy: 10
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: shotgun
main_product_stack_size: 5
item_ingredient_name: 5 wood
item_ingredient_name: 15 iron-plate
item_ingredient_name: 10 copper-plate
item_ingredient_name: 5 iron-gear-wheel

-----
name: shotgun-shell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[shotgun]-a[basic]
energy: 3
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: shotgun-shell
main_product_stack_size: 200
item_ingredient_name: 2 iron-plate
item_ingredient_name: 2 copper-plate

-----
name: slowdown-capsule
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[slowdown-capsule]
energy: 8
group_name: combat
group_order: d
subgroup_name: capsule
subgroup_order: c
request_paste_multiplier: 30
main_product: slowdown-capsule
main_product_stack_size: 100
item_ingredient_name: 5 coal
item_ingredient_name: 2 steel-plate
item_ingredient_name: 2 electronic-circuit

-----
name: small-electric-pole
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[energy]-a[small-electric-pole]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: energy-pipe-distribution
subgroup_order: d
request_paste_multiplier: 30
main_product: small-electric-pole
main_product_stack_size: 50
item_ingredient_name: 1 wood
item_ingredient_name: 2 copper-cable

-----
name: small-lamp
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[light]-a[small-lamp]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: circuit-network
subgroup_order: h
request_paste_multiplier: 30
main_product: small-lamp
main_product_stack_size: 50
item_ingredient_name: 1 iron-plate
item_ingredient_name: 3 copper-cable
item_ingredient_name: 1 electronic-circuit

-----
name: small-plane
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[personal-transport]-x[small-plane]
energy: 30
group_name: logistics
group_order: aaa
subgroup_name: transport
subgroup_order: f
request_paste_multiplier: 30
main_product: small-plane
main_product_stack_size: 1
item_ingredient_name: 100 plastic-bar
item_ingredient_name: 100 battery
item_ingredient_name: 200 advanced-circuit
item_ingredient_name: 20 electric-engine-unit

-----
name: solar-panel
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[solar-panel]-a[solar-panel]
energy: 10
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 30
main_product: solar-panel
main_product_stack_size: 50
item_ingredient_name: 5 copper-plate
item_ingredient_name: 5 steel-plate
item_ingredient_name: 15 electronic-circuit

-----
name: solar-panel-equipment
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[energy-source]-a[solar-panel]
energy: 10
group_name: combat
group_order: d
subgroup_name: equipment
subgroup_order: e
request_paste_multiplier: 30
main_product: solar-panel-equipment
main_product_stack_size: 20
item_ingredient_name: 5 steel-plate
item_ingredient_name: 2 advanced-circuit
item_ingredient_name: 1 solar-panel

-----
name: speed-module
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[speed]-a[speed-module-1]
energy: 15
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: speed-module
main_product_stack_size: 50
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 5 advanced-circuit

-----
name: speed-module-2
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[speed]-b[speed-module-2]
energy: 30
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: speed-module-2
main_product_stack_size: 50
item_ingredient_name: 5 advanced-circuit
item_ingredient_name: 5 processing-unit
item_ingredient_name: 4 speed-module

-----
name: speed-module-3
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[speed]-c[speed-module-3]
energy: 60
group_name: production
group_order: b
subgroup_name: module
subgroup_order: f
request_paste_multiplier: 30
main_product: speed-module-3
main_product_stack_size: 50
item_ingredient_name: 5 advanced-circuit
item_ingredient_name: 5 processing-unit
item_ingredient_name: 5 speed-module-2

-----
name: spidertron
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[personal-transport]-c[spidertron]-a[spider]
energy: 10
group_name: logistics
group_order: aaa
subgroup_name: transport
subgroup_order: f
request_paste_multiplier: 30
main_product: spidertron
main_product_stack_size: 1
item_ingredient_name: 1 raw-fish
item_ingredient_name: 16 rocket-control-unit
item_ingredient_name: 150 low-density-structure
item_ingredient_name: 2 effectivity-module-3
item_ingredient_name: 4 rocket-launcher
item_ingredient_name: 2 fusion-reactor-equipment
item_ingredient_name: 4 exoskeleton-equipment
item_ingredient_name: 2 radar

-----
name: spidertron-remote
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[personal-transport]-c[spidertron]-b[remote]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: transport
subgroup_order: f
request_paste_multiplier: 30
main_product: spidertron-remote
main_product_stack_size: 1
item_ingredient_name: 1 rocket-control-unit
item_ingredient_name: 1 radar

-----
name: splitter
enabled: false
hidden: false
unlock_results: true
category: crafting
order: c[splitter]-a[splitter]
energy: 1
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: splitter
main_product_stack_size: 50
item_ingredient_name: 5 iron-plate
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 4 transport-belt

-----
name: stack-filter-inserter
enabled: false
hidden: false
unlock_results: true
category: crafting
order: g[stack-filter-inserter]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: inserter
subgroup_order: c
request_paste_multiplier: 30
main_product: stack-filter-inserter
main_product_stack_size: 50
item_ingredient_name: 5 electronic-circuit
item_ingredient_name: 1 stack-inserter

-----
name: stack-inserter
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[stack-inserter]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: inserter
subgroup_order: c
request_paste_multiplier: 30
main_product: stack-inserter
main_product_stack_size: 50
item_ingredient_name: 15 iron-gear-wheel
item_ingredient_name: 15 electronic-circuit
item_ingredient_name: 1 advanced-circuit
item_ingredient_name: 1 fast-inserter

-----
name: steam-engine
enabled: true
hidden: false
unlock_results: true
category: crafting
order: b[steam-power]-b[steam-engine]
energy: 0.5
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 30
main_product: steam-engine
main_product_stack_size: 10
item_ingredient_name: 10 iron-plate
item_ingredient_name: 8 iron-gear-wheel
item_ingredient_name: 5 pipe

-----
name: steam-turbine
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[nuclear-energy]-d[steam-turbine]
energy: 3
group_name: production
group_order: b
subgroup_name: energy
subgroup_order: b
request_paste_multiplier: 30
main_product: steam-turbine
main_product_stack_size: 10
item_ingredient_name: 50 copper-plate
item_ingredient_name: 50 iron-gear-wheel
item_ingredient_name: 20 pipe

-----
name: steel-chest
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[items]-c[steel-chest]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: storage
subgroup_order: a
request_paste_multiplier: 30
main_product: steel-chest
main_product_stack_size: 50
item_ingredient_name: 8 steel-plate

-----
name: steel-furnace
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[steel-furnace]
energy: 3
group_name: production
group_order: b
subgroup_name: smelting-machine
subgroup_order: d
request_paste_multiplier: 30
main_product: steel-furnace
main_product_stack_size: 50
item_ingredient_name: 6 steel-plate
item_ingredient_name: 10 stone-brick

-----
name: steel-plate
enabled: false
hidden: false
unlock_results: true
category: smelting
order: d[steel-plate]
energy: 16
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
main_product: steel-plate
main_product_stack_size: 100
item_ingredient_name: 5 iron-plate

-----
name: stone-brick
enabled: true
hidden: false
unlock_results: true
category: smelting
order: a[stone-brick]
energy: 3.2
group_name: logistics
group_order: aaa
subgroup_name: terrain
subgroup_order: i
request_paste_multiplier: 30
main_product: stone-brick
main_product_stack_size: 100
item_ingredient_name: 2 stone

-----
name: stone-furnace
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[stone-furnace]
energy: 0.5
group_name: production
group_order: b
subgroup_name: smelting-machine
subgroup_order: d
request_paste_multiplier: 30
main_product: stone-furnace
main_product_stack_size: 50
item_ingredient_name: 5 stone

-----
name: stone-wall
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[stone-wall]-a[stone-wall]
energy: 0.5
group_name: combat
group_order: d
subgroup_name: defensive-structure
subgroup_order: g
request_paste_multiplier: 30
main_product: stone-wall
main_product_stack_size: 100
item_ingredient_name: 5 stone-brick

-----
name: storage-tank
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[fluid]-a[storage-tank]
energy: 3
group_name: logistics
group_order: aaa
subgroup_name: storage
subgroup_order: a
request_paste_multiplier: 30
main_product: storage-tank
main_product_stack_size: 50
item_ingredient_name: 20 iron-plate
item_ingredient_name: 5 steel-plate

-----
name: submachine-gun
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[basic-clips]-b[submachine-gun]
energy: 10
group_name: combat
group_order: d
subgroup_name: gun
subgroup_order: a
request_paste_multiplier: 30
main_product: submachine-gun
main_product_stack_size: 5
item_ingredient_name: 10 iron-plate
item_ingredient_name: 5 copper-plate
item_ingredient_name: 10 iron-gear-wheel

-----
name: substation
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[energy]-d[substation]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: energy-pipe-distribution
subgroup_order: d
request_paste_multiplier: 30
main_product: substation
main_product_stack_size: 50
item_ingredient_name: 5 copper-plate
item_ingredient_name: 10 steel-plate
item_ingredient_name: 5 advanced-circuit

-----
name: sulfur
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: g[sulfur]
energy: 1
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
main_product: sulfur
main_product_stack_size: 50

-----
name: sulfuric-acid
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: a[fluid]-f[sulfuric-acid]
energy: 1
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30
main_product: sulfuric-acid
item_ingredient_name: 1 iron-plate
item_ingredient_name: 5 sulfur

-----
name: tank
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[personal-transport]-b[tank]
energy: 5
group_name: logistics
group_order: aaa
subgroup_name: transport
subgroup_order: f
request_paste_multiplier: 30
main_product: tank
main_product_stack_size: 1
item_ingredient_name: 50 steel-plate
item_ingredient_name: 15 iron-gear-wheel
item_ingredient_name: 10 advanced-circuit
item_ingredient_name: 32 engine-unit

-----
name: train-stop
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[train-system]-c[train-stop]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: train-transport
subgroup_order: e
request_paste_multiplier: 30
main_product: train-stop
main_product_stack_size: 10
item_ingredient_name: 6 iron-plate
item_ingredient_name: 3 steel-plate
item_ingredient_name: 6 iron-stick
item_ingredient_name: 5 electronic-circuit

-----
name: transport-belt
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[transport-belt]-a[transport-belt]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: transport-belt
main_product_stack_size: 100
item_ingredient_name: 1 iron-plate
item_ingredient_name: 1 iron-gear-wheel

-----
name: underground-belt
enabled: false
hidden: false
unlock_results: true
category: crafting
order: b[underground-belt]-a[underground-belt]
energy: 1
group_name: logistics
group_order: aaa
subgroup_name: belt
subgroup_order: b
request_paste_multiplier: 30
main_product: underground-belt
main_product_stack_size: 50
item_ingredient_name: 10 iron-plate
item_ingredient_name: 5 transport-belt

-----
name: uranium-cannon-shell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: d[cannon-shell]-c[uranium]
energy: 12
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: uranium-cannon-shell
main_product_stack_size: 200
item_ingredient_name: 1 uranium-238
item_ingredient_name: 1 cannon-shell

-----
name: uranium-fuel-cell
enabled: false
hidden: false
unlock_results: true
category: crafting
order: r[uranium-processing]-a[uranium-fuel-cell]
energy: 10
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
main_product: uranium-fuel-cell
main_product_stack_size: 50
item_ingredient_name: 10 iron-plate
item_ingredient_name: 1 uranium-235
item_ingredient_name: 19 uranium-238

-----
name: uranium-rounds-magazine
enabled: false
hidden: false
unlock_results: true
category: crafting
order: a[basic-clips]-c[uranium-rounds-magazine]
energy: 10
group_name: combat
group_order: d
subgroup_name: ammo
subgroup_order: b
request_paste_multiplier: 30
main_product: uranium-rounds-magazine
main_product_stack_size: 200
item_ingredient_name: 1 uranium-238
item_ingredient_name: 1 piercing-rounds-magazine

-----
name: utility-science-pack
enabled: false
hidden: false
unlock_results: true
category: crafting
order: f[utility-science-pack]
energy: 21
group_name: intermediate-products
group_order: c
subgroup_name: science-pack
subgroup_order: g
request_paste_multiplier: 30
main_product: utility-science-pack
main_product_stack_size: 200
item_ingredient_name: 2 processing-unit
item_ingredient_name: 1 flying-robot-frame
item_ingredient_name: 3 low-density-structure

-----
name: wooden-chest
enabled: true
hidden: false
unlock_results: true
category: crafting
order: a[items]-a[wooden-chest]
energy: 0.5
group_name: logistics
group_order: aaa
subgroup_name: storage
subgroup_order: a
request_paste_multiplier: 30
main_product: wooden-chest
main_product_stack_size: 50
item_ingredient_name: 2 wood

-----
name: basic-oil-processing
enabled: false
hidden: false
unlock_results: true
category: oil-processing
order: a[oil-processing]-a[basic-oil-processing]
energy: 5
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30

-----
name: advanced-oil-processing
enabled: false
hidden: false
unlock_results: true
category: oil-processing
order: a[oil-processing]-b[advanced-oil-processing]
energy: 5
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30

-----
name: coal-liquefaction
enabled: false
hidden: false
unlock_results: true
category: oil-processing
order: a[oil-processing]-c[coal-liquefaction]
energy: 5
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30
item_ingredient_name: 10 coal

-----
name: fill-crude-oil-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[fill-crude-oil-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: fill-barrel
subgroup_order: d
request_paste_multiplier: 30
main_product: crude-oil-barrel
main_product_stack_size: 10
item_ingredient_name: 1 empty-barrel

-----
name: fill-heavy-oil-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[fill-heavy-oil-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: fill-barrel
subgroup_order: d
request_paste_multiplier: 30
main_product: heavy-oil-barrel
main_product_stack_size: 10
item_ingredient_name: 1 empty-barrel

-----
name: fill-light-oil-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[fill-light-oil-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: fill-barrel
subgroup_order: d
request_paste_multiplier: 30
main_product: light-oil-barrel
main_product_stack_size: 10
item_ingredient_name: 1 empty-barrel

-----
name: fill-lubricant-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[fill-lubricant-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: fill-barrel
subgroup_order: d
request_paste_multiplier: 30
main_product: lubricant-barrel
main_product_stack_size: 10
item_ingredient_name: 1 empty-barrel

-----
name: fill-petroleum-gas-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[fill-petroleum-gas-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: fill-barrel
subgroup_order: d
request_paste_multiplier: 30
main_product: petroleum-gas-barrel
main_product_stack_size: 10
item_ingredient_name: 1 empty-barrel

-----
name: fill-sulfuric-acid-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[fill-sulfuric-acid-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: fill-barrel
subgroup_order: d
request_paste_multiplier: 30
main_product: sulfuric-acid-barrel
main_product_stack_size: 10
item_ingredient_name: 1 empty-barrel

-----
name: fill-water-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: b[fill-water-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: fill-barrel
subgroup_order: d
request_paste_multiplier: 30
main_product: water-barrel
main_product_stack_size: 10
item_ingredient_name: 1 empty-barrel

-----
name: heavy-oil-cracking
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: b[fluid-chemistry]-a[heavy-oil-cracking]
energy: 2
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30

-----
name: light-oil-cracking
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: b[fluid-chemistry]-b[light-oil-cracking]
energy: 2
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30

-----
name: solid-fuel-from-light-oil
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: b[fluid-chemistry]-c[solid-fuel-from-light-oil]
energy: 2
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30
main_product: solid-fuel
main_product_stack_size: 50

-----
name: solid-fuel-from-petroleum-gas
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]
energy: 2
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30
main_product: solid-fuel
main_product_stack_size: 50

-----
name: solid-fuel-from-heavy-oil
enabled: false
hidden: false
unlock_results: true
category: chemistry
order: b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]
energy: 2
group_name: intermediate-products
group_order: c
subgroup_name: fluid-recipes
subgroup_order: a
request_paste_multiplier: 30
main_product: solid-fuel
main_product_stack_size: 50

-----
name: empty-crude-oil-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[empty-crude-oil-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: empty-barrel
subgroup_order: e
request_paste_multiplier: 30
item_ingredient_name: 1 crude-oil-barrel

-----
name: empty-heavy-oil-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[empty-heavy-oil-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: empty-barrel
subgroup_order: e
request_paste_multiplier: 30
item_ingredient_name: 1 heavy-oil-barrel

-----
name: empty-light-oil-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[empty-light-oil-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: empty-barrel
subgroup_order: e
request_paste_multiplier: 30
item_ingredient_name: 1 light-oil-barrel

-----
name: empty-lubricant-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[empty-lubricant-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: empty-barrel
subgroup_order: e
request_paste_multiplier: 30
item_ingredient_name: 1 lubricant-barrel

-----
name: empty-petroleum-gas-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[empty-petroleum-gas-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: empty-barrel
subgroup_order: e
request_paste_multiplier: 30
item_ingredient_name: 1 petroleum-gas-barrel

-----
name: empty-sulfuric-acid-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[empty-sulfuric-acid-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: empty-barrel
subgroup_order: e
request_paste_multiplier: 30
item_ingredient_name: 1 sulfuric-acid-barrel

-----
name: empty-water-barrel
enabled: false
hidden: false
unlock_results: true
category: crafting-with-fluid
order: c[empty-water-barrel]
energy: 0.2
group_name: intermediate-products
group_order: c
subgroup_name: empty-barrel
subgroup_order: e
request_paste_multiplier: 30
item_ingredient_name: 1 water-barrel

-----
name: uranium-processing
enabled: false
hidden: false
unlock_results: true
category: centrifuging
order: k[uranium-processing]
energy: 12
group_name: intermediate-products
group_order: c
subgroup_name: raw-material
subgroup_order: c
request_paste_multiplier: 30
item_ingredient_name: 10 uranium-ore

-----
name: nuclear-fuel-reprocessing
enabled: false
hidden: false
unlock_results: true
category: centrifuging
order: r[uranium-processing]-b[nuclear-fuel-reprocessing]
energy: 60
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
item_ingredient_name: 5 used-up-uranium-fuel-cell

-----
name: kovarex-enrichment-process
enabled: false
hidden: false
unlock_results: true
category: centrifuging
order: r[uranium-processing]-c[kovarex-enrichment-process]
energy: 60
group_name: intermediate-products
group_order: c
subgroup_name: intermediate-product
subgroup_order: f
request_paste_multiplier: 30
item_ingredient_name: 40 uranium-235
item_ingredient_name: 5 uranium-238

`;

export default VanillaRecipes;
