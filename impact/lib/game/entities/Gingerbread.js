ig.module(
    'game.entities.Gingerbread'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox',
    'game.entities.SuspectUI',
    'game.entities.WeaponUI'
)
.defines(function(){

    EntityGingerbread = ig.Entity.extend({
        //Size of the hit box
        size: {x: 32, y:32},
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media /FullGingerbreadman.png',32,32),
        //List of object this object can interact with. Defined in the level editor
        target: {},
        //Defining the collision protocol
        collides: ig.Entity.COLLIDES.FIXED,
        //Layer that the object is drawn on
        zIndex: 4,
        //Boolean to determine when to show the UI
        display: false,
        //Image of the UI background
        UIImage: new ig.Image('media/BasicBackground.png',448,320),
        //Reference to the Suspect UI
        susUI: null,
        //Reference to the Weapon UI
        wepUI: null,
        //Reference to the suspect Button
        susBtn: null,
        //Reference to the Cancel Button
        cancelBtn: null,
        //Font that is used in front of the suspect UI
        suspectFont: new ig.Font( 'media/04b03.font.png' ),
        //Font that is used in front of the weapon UI
        weaponFont: new ig.Font( 'media/04b03.font.png' ),


        //Constructor
        init: function(x, y , settings){
            this.parent(x,y,settings);

            //Define the animations
            this.addAnim('idle',.5,[0, 1, 2, 3, 4, 5, 6]);
            this.addAnim('highlight', .5, [9, 10, 11, 12, 13, 14, 15]);

            //Change the current animation to the idle animation
            this.currentAnim = this.anims.idle;
        },

        //Called every frame
        update: function(){

            //For every target in the array
            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t])
                //Check if the target is the PlayerEntity 
                if(ent && ent instanceof EntityPlayer){
                    //Get the distance between the player and this object
                    var dist = this.distanceTo(ent);
                    //If the distance is less than 50
                    if(dist < 50) {
                        //Change the animation to highlight
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

            //If the end the game condition has been met
            if(ig.game.EndGame){
                //Set the values of the player input
                ig.game.endSusNum = this.susUI.susNumber;
                ig.game.endWepNum = this.wepUI.wepNumber;
                ig.game.EndGame = false;

                //Load the End level
                ig.game.loadLevel(LevelEnd);
            }


            //If the player presses E and the object is highlighted
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){

                //For all of the target in
                for(var t in this.target){
                    //Get the object type of the target
                    var ent = ig.game.getEntityByName(this.target[t])
                    //If the target is an instance of the Player
                    if(ent && ent instanceof EntityPlayer){
                        //Freeze the player movement
                        ig.game.frozen = true;
                        //Display the UI
                        this.display = true;
                        //Spawn the Button to go along with the UI
                        this.susUI = ig.game.spawnEntity(EntitySuspectUI, 128, 128);
                        this.wepUI = ig.game.spawnEntity(EntityWeaponUI, 192, 192);
                        this.susBtn = ig.game.spawnEntity(EntitySuspectButton, 320, 128);
                        this.cancelBtn = ig.game.spawnEntity(EntityCancelButton, 320, 192);
                    }
                }

            }
            //If the cancel button is pressed
            else if(this.cancelBtn != null && this.cancelBtn.cancel){
                //Get rid of the display
                this.display = false;
                this.susUI.kill();
                this.wepUI.kill();
                this.susBtn.kill();
                this.cancelBtn.kill();
            }
            
            
        

            this.parent();
        },
        draw: function(){
            this.parent();


            
            //If displaying. Then draw the display.
            if(this.display){
                //Display the images and fonts for the UI menu
                this.UIImage.draw(ig.game.screen.x + 64, ig.game.screen.y + 32);
                this.suspectFont.draw("Pick Your Suspect: ", ig.game.screen.x + 96, ig.game.screen.y + 32 + 128, ig.Font.ALIGN.LEFT);
                this.weaponFont.draw("Pick Your Weapon: ", ig.game.screen.x + 96, ig.game.screen.y + 32 + 224, ig.Font.ALIGN.LEFT);
            }
        }
    })

});