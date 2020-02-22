ig.module(
    'game.entities.Cookbook'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    //Class Definition
    EntityCookbook = ig.Entity.extend({
        //Define the hitbox
        size: {x: 32, y:32},
        //Animation sheet
        animSheet: new ig.AnimationSheet('media /CookBook.png',32,32),
        //Set the collision protocol
        collides: ig.Entity.COLLIDES.FIXED,
        //Array of objects that can interact with this object. Defined in the editor 
        target: {},
        //Layer that the object is drawn on.
        zIndex: 2,

        init: function(x, y , settings){
            this.parent(x,y,settings);

            //Define the animations
            this.addAnim('idle',1,[0]);
            this.addAnim('highlight', 1, [1]);

            //Set the animation to idle
            this.currentAnim = this.anims.idle;
        },

        update: function(){

            //For every target in the array
            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t]);
                //If it is a player Entity
                if(ent && ent instanceof EntityPlayer){
                    //Get the distance from the player to this object
                    var dist = this.distanceTo(ent);
                    //If the distance is less than fifty. Then highligh the object
                    if(dist < 50) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    //Otherwise set the animation to idle
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }


            //If the player presses E and the object is highlighted
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){

                //Freeze the players movement
                ig.game.frozen = true;

                //Output text based off of the dialPuzzle's solution
                var textBox = ig.game.spawnEntity(EntityTextBox, 32, ig.system.height - 32);
                switch(ig.game.oChoice){
                    case 1:
                        textBox.setText("Only the best cookies are made at 275 degrees");
                        break;
                    case 2:
                        textBox.setText("Only the best cookies are made at 300 degrees");
                        break;
                    case 3:
                        textBox.setText("Only the best cookies are made at 325 degrees");
                        break;
                    case 4:
                        textBox.setText("Only the best cookies are made at 350 degrees");
                        break;
                }

            }
            
            
        

            this.parent();
        },
    })

});