ig.module(
    'game.entities.dialPuzzle'
)
.requires(
    'impact.entity',
    'impact.font',
)
.defines(function(){
    EntityDialPuzzle = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/Dials.png', 320, 256),
        arrayIndex: 0,
        codeOne:  -1,
        codeTwo:  -1,
        codeThree:  -1,
        ovenCode: 0,
        zIndex: 6,
        numbersEntered: 0,
        ovenChoice: 0,
        size: {x: 320, y: 256},
        textTimer: new ig.Timer(),

        // Initialize the animations for the puzzle
        init:function(){

            this.addAnim('zeroTop',1,[0]);
            this.addAnim('twoTop',1,[1]);
            this.addAnim('threeTop',1,[2]);
            this.addAnim('fiveTop',1,[3]);
            this.addAnim('sevenTop',1,[4]);
            this.currentAnim = this.anims.zeroTop;
            
            
            
        },
        update: function()
        {
            // Chooses which code to utilize.
            if (this.ovenChoice == 1)
            {
                this.ovenCode = 275;
            }
            else if (this.ovenChoice == 2)
            {
                this.ovenCode = 300;
            }
            else if (this.ovenChoice == 3)
            {
                this.ovenCode = 325;
            }
            else if (this.ovenChoice == 4)
            {
                this.ovenCode = 350;
            }

           // ig.log("Code is: " + this.ovenCode + " Choice was: " + this.ovenChoice);
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
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeOne = 0;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeTwo = 0;
                            }
                            else 
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeThree = 0;
                            }
                        }
                        else if (this.currentAnim == this.anims.twoTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeOne = 2;    
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeTwo = 2;
                            }
                            else 
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeThree = 2;
                            }
                        }
                        else if (this.currentAnim == this.anims.threeTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeOne = 3;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeTwo = 3;
                            }
                            else 
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeThree = 3;
                            }
                        }
                        else if (this.currentAnim == this.anims.fiveTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeOne = 5;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeTwo = 5;
                            }
                            else 
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeThree = 5;
                            }
                        }
                        else if (this.currentAnim == this.anims.sevenTop)
                        {
                            if (this.codeOne == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeOne = 7;
                            }
                            else if (this.codeTwo == -1)
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeTwo = 7;
                            }
                            else 
                            {
                                this.numbersEntered = this.numbersEntered + 1;
                                this.codeThree = 7;
                            }
                        }
                } // END OF Input Check
                
                var userCode =  "" + this.codeOne + this.codeTwo + this.codeThree;
            // Code used to check the puzzle solution
            if (userCode == this.ovenCode)
            {
                ig.game.puzzleOn = false;
                ig.game.dialSolved = true;
                //ig.log("I won the puzzle");
                var ent = ig.game.getEntitiesByType(EntityPuzzleBox)[0];
                var clo = ig.game.getEntitiesByType(EntityMenuClose)[0];
                ent.kill();
                clo.kill();
                this.kill();
                // Reset internal logic stuff in case
                this.codeOne = -1;
                this.codeTwo = -1;
                this.codeThree = -1;
                this.numbersEntered = 0;
            }
            // Checks if the code entered was incorrect
            if (this.numbersEntered == 3)
            {
                //ig.log("I have reset the puzzle");
                this.codeOne = -1;
                this.codeTwo = -1;
                this.codeThree = -1;
                this.numbersEntered = 0;
            }
        }, // END OF UPDATE
        draw: function(){
            this.parent();
            var ovenFont = new ig.Font('media/04b03.font.png');
            ovenFont.draw("Current Code: " + this.codeOne + this.codeTwo + this.codeThree, this.size.x / 2 + 80, this.size.y / 4);
            // Offsets to keep the object centered
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;
            this.pos.x = offsetX + 128;
            this.pos.y = offsetY + 98;

            // Puzzle Solved, output the clue
            if(ig.game.dialSolved){
                if(this.textTimer.delta() < 2){
                    this.textTimer.unpause();
                    ig.log("Unpaused");
                }

                var font = new ig.Font( 'media/04b03.font.png' );

                if(this.textTimer.delta() <= 2) {
                    /*
                    switch(ig.game.endSusNum) {
                        case 0:
                            font.draw("Evidence Obtained: The Murderer has: ", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 1:
                            font.draw("Evidence Obtained: The Murderer has: ", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 2:
                            font.draw("Evidence Obtained: The Murderer has:", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 3:

                        break;
                    }
                    */
                }
                else{
                    this.textTimer.pause();
                }

            }
        }

    });
});