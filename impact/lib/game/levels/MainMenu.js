ig.module( 'game.levels.MainMenu' )
.requires( 'impact.image','game.entities.MainMenu','game.entities.StartButton','game.entities.HowToPlay','game.entities.credits' )
.defines(function(){
LevelMainMenu=/*JSON[*/{
	"entities": [
		{
			"type": "EntityMainMenu",
			"x": 0,
			"y": 0
		},
		{
			"type": "EntityStartButton",
			"x": -3664,
			"y": 192
		},
		{
			"type": "EntityHowToPlay",
			"x": -3660,
			"y": 316
		},
		{
			"type": "EntityCredits",
			"x": -3656,
			"y": 452
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