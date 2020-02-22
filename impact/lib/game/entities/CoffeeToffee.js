ig.module(
    'game.entities.CoffeeToffee'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    //Class Definition
    EntityCoffeeToffee = ig.Entity.extend({
        //Size of the hit box
        size: {x: 32, y:32},
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media /Coffee_Toffee.png',32,32),
        //Defines what objects can interact with this one. Set in the level editor
        target: {},
        //Text that the character output. Set in the level editor
        text: '',
        //Define the collision type
        collides: ig.Entity.COLLIDES.FIXED,
        //Order that the object is drawn
        zIndex: 0,

        //Function used to set default values
        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('highlight',.5,[0, 2]);
            this.addAnim('idle', .5, [1, 3]);

            this.currentAnim = this.anims.idle;
        },

        //Function that runs every frame
        update: function(){

            //For every target assigned to the object
            for(var t in this.target){
                //Find the entity associated to the target
                var ent = ig.game.getEntityByName(this.target[t])
                //If the target is the player
                if(ent && ent instanceof EntityPlayer){
                    //Get the distance between the target and our object
                    var dist = this.distanceTo(ent);
                    //If it is less than 50 highlight the object 
                    if(dist < 50) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    //Other wise set animation to idle
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }


            //If the object is hilighted and E is pressed
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){            

                //Freeze the player movement
                ig.game.frozen = true;

                //Spawn the text entity to output text
                var textBox = ig.game.spawnEntity(EntityTextBox, 32, ig.system.height - 32);
                textBox.setText(this.text);

            }
            
            
        

            this.parent();
        },
    })

});