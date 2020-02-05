ig.module( 'game.levels.testLevel' )
.requires( 'impact.image' )
.defines(function(){
LevelTestLevel=/*JSON[*/{
	"entities": [],
	"layer": [
		{
			"name": "collision",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 32,
			"foreground": false,
			"data": [
				[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "Main",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 0,
			"tilesetName": "media/TestWall.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelTestLevelResources=[new ig.Image('media/TestWall.png')];
});