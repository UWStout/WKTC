ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.Highlight','game.entities.trigger','game.entities.warp','game.entities.void','game.entities.player' )
.defines(function(){
LevelMain=/*JSON[*/{
	"entities": [
		{
			"type": "EntityHighlight",
			"x": 276,
			"y": 80,
			"settings": {
				"target": {
					"1": "player"
				}
			}
		},
		{
			"type": "EntityHighlight",
			"x": 244,
			"y": 44,
			"settings": {
				"target": {
					"1": "player"
				}
			}
		},
		{
			"type": "EntityHighlight",
			"x": 296,
			"y": 116,
			"settings": {
				"target": {
					"1": "player"
				}
			}
		},
		{
			"type": "EntityTrigger",
			"x": 92,
			"y": 120,
			"settings": {
				"size": {
					"x": 48,
					"y": 16
				},
				"target": {
					"1": "player"
				},
				"type": "B"
			}
		},
		{
			"type": "EntityWarp",
			"x": 204,
			"y": 240,
			"settings": {
				"name": "WarpUp",
				"spawn": "Upper Trigger"
			}
		},
		{
			"type": "EntityVoid",
			"x": 88,
			"y": 240,
			"settings": {
				"name": "Bottom"
			}
		},
		{
			"type": "EntityWarp",
			"x": 56,
			"y": 76,
			"settings": {
				"name": "WarpDown",
				"spawn": "Bottom Trigger"
			}
		},
		{
			"type": "EntityTrigger",
			"x": 148,
			"y": 240,
			"settings": {
				"size": {
					"x": 56,
					"y": 16
				},
				"target": {
					"1": "WarpUp"
				}
			}
		},
		{
			"type": "EntityVoid",
			"x": 192,
			"y": 76,
			"settings": {
				"name": "Upper Trigger"
			}
		},
		{
			"type": "EntityPlayer",
			"x": 428,
			"y": 132,
			"settings": {
				"name": "player"
			}
		}
	],
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
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "Main",
			"width": 16,
			"height": 10,
			"linkWithCollision": true,
			"visible": 1,
			"tilesetName": "media/TestWall.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelMainResources=[new ig.Image('media/TestWall.png')];
});