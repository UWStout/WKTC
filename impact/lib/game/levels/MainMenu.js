ig.module( 'game.levels.MainMenu' )
.requires( 'impact.image','game.entities.MainMenu','game.entities.Title','game.entities.StartButton','game.entities.HowToPlay','game.entities.credits' )
.defines(function(){
LevelMainMenu=/*JSON[*/{
	"entities": [
		{
			"type": "EntityMainMenu",
			"x": 4,
			"y": -20
		},
		{
			"type": "EntityTitle",
			"x": 60,
			"y": 24
		},
		{
			"type": "EntityStartButton",
			"x": 160,
			"y": 128
		},
		{
			"type": "EntityHowToPlay",
			"x": 160,
			"y": 192
		},
		{
			"type": "EntityCredits",
			"x": 160,
			"y": 256
		}
	],
	"layer": [
		{
			"name": "new_layer_0",
			"width": 18,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/TestWall.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelMainMenuResources=[new ig.Image('media/TestWall.png')];
});