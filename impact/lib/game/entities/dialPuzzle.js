ig.module(
    'game.entities.dialPuzzle'
)
.requires(
    'impact.entity',
)
.defines(function(){
    EntityDialPuzzle = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/Dials.png', 320, 256),
        arrayIndex: 0,
        codeOne:  -1,
        codeTwo:  -1,
        codeThree:  -1,

        zIndex: 6,
        init:function(){

            this.addAnim('zeroTop',1,[0]);
            this.addAnim('twoTop',1,[1]);
            this.addAnim('threeTop',1,[2]);
            this.addAnim('fiveTop',1,[3]);
            this.addAnim('sevenTop',1,[4]);
            this.currentAnim = this.anims.zeroTop;
            
            /*
            var ovenChoice = Math.floor((Math.random() * 4) + 1);
            if (ovenChoice == 1)
            {
                ovenCode = 275;
            }
            else if (ovenChoice == 2)
            {
                ovenCode = 300;
            }
            else if (OvenChoice == 3)
            {
                ovenCode = 325;
            }
            else if (OvenChoice == 4)
            {
                ovenCode = 350;
            }
            */
        },
        update: function()
        {
            
                // Start of go backwards
                if(ig.input.pressed('click') && ig.input.mouse.x > 128 && ig.input.mouse.x < 224 && ig.input.mouse.y > 150 && ig.input.mouse.y < 235)
                {
                        if (this.currentAnim == this.anims.zeroTop)
                        {
                            this.currentAnim = this.anims.sevenTop;
                        }
                        else if (this.currentAnim == this.anims.twoTop)
                        {
                            this.currentAnim = this.anims.zeroTop;
                        }
                        else if (this.currentAnim == this.anims.threeTop)
                        {
                            this.currentAnim = this.anims.twoTop;
                        }
                        else if (this.currentAnim == this.anims.fiveTop)
                        {
                            this.currentAnim = this.anims.threeTop;
                        }
                        else if (this.currentAnim == this.anims.sevenTop)
                        {
                            this.currentAnim = this.anims.fiveTop;
                        }
                }
                // Start of go forward
                else if(ig.input.pressed('click') && ig.input.mouse.x > 352 && ig.input.mouse.x < 448 && ig.input.mouse.y > 150 && ig.input.mouse.y < 235)
                {
                        if (this.currentAnim == this.anims.zeroTop)
                        {
                            this.currentAnim = this.anims.twoTop;
                        }
                        else if (this.currentAnim == this.anims.twoTop)
                        {
                            this.currentAnim = this.anims.threeTop;
                        }
                        else if (this.currentAnim == this.anims.threeTop)
                        {
                            this.currentAnim = this.anims.fiveTop;
                        }
                        else if (this.currentAnim == this.anims.fiveTop)
                        {
                            this.currentAnim = this.anims.sevenTop;
                        }
                        else if (this.currentAnim == this.anims.sevenTop)
                        {
                            this.currentAnim = this.anims.zeroTop;
                        }
                }
                // Used to input code
                else if (ig.input.pressed('click') && ig.input.mouse.x > 240 && ig.input.mouse.x < 350 && ig.input.mouse.y > 160 && ig.input.mouse.y < 192)
                {
                    if (this.currentAnim == this.anims.zeroTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.codeOne = 0;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.codeTwo = 0;
                            }
                            else 
                            {
                                this.codeThree = 0;
                            }
                        }
                        else if (this.currentAnim == this.anims.twoTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.codeOne = 2;    
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.codeTwo = 2;
                            }
                            else 
                            {
                                this.codeThree = 2;
                            }
                        }
                        else if (this.currentAnim == this.anims.threeTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.codeOne = 3;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.codeTwo = 3;
                            }
                            else 
                            {
                                this.codeThree = 3;
                            }
                        }
                        else if (this.currentAnim == this.anims.fiveTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.codeOne = 5;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.codeTwo = 5;
                            }
                            else 
                            {
                                this.codeThree = 5;
                            }
                        }
                        else if (this.currentAnim == this.anims.sevenTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.codeOne = 7;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.codeTwo = 7;
                            }
                            else 
                            {
                                this.codeThree = 7;
                            }
                        }
                } // END OF Input Check
    
            if (this.codeOne == 2 && this.codeTwo == 7 && this.codeThree == 5)
            {
                ig.game.puzzleOn = false;
                ig.log("I won the puzzle");
                var ent = ig.game.getEntitiesByType(EntityPuzzleBox)[0];
                var clo = ig.game.getEntitiesByType(EntityMenuClose)[0];
                ent.kill();
                clo.kill();
                this.kill();
                this.codeOne = -1;
                this.codeTwo = -1;
                this.codeThree = -1;
            }
        }, // END OF UPDATE
        draw: function(){
            this.parent();
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;
            this.pos.x = offsetX + 128;
            this.pos.y = offsetY + 98;
        }

    });
});