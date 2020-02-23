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
        size: {x: 32, y:32},
        name: "High",
        animSheet: new ig.AnimationSheet('media /FullGingerbreadman.png',32,32),
        type: ig.Entity.TYPE.B,
        target: {},
        text: '',
        collides: ig.Entity.COLLIDES.FIXED,

        zIndex: 4,
        display: false,
        UIImage: new ig.Image('media/BasicBackground.png',448,320),
        susUI: null,
        wepUI: null,
        susBtn: null,
        cancelBtn: null,
        suspectFont: new ig.Font( 'media/04b03.font.png' ),
        weaponFont: new ig.Font( 'media/04b03.font.png' ),


        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',.5,[0, 1, 2, 3, 4, 5, 6]);
            this.addAnim('highlight', .5, [9, 10, 11, 12, 13, 14, 15]);

            this.currentAnim = this.anims.idle;
        },

        ready: function(){
            ig.log("Working???")
            
        },

        update: function(){

            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t])
                if(ent && ent instanceof EntityPlayer){
                    var dist = this.distanceTo(ent);
                    if(dist < 50) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }

            if(ig.game.EndGame){
                ig.game.endSusNum = this.susUI.susNumber;
                ig.game.endWepNum = this.wepUI.wepNumber;
                ig.game.EndGame = false;
                ig.game.loadLevel(LevelEnd);
            }


            
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){

                for(var t in this.target){
                    if(ent && ent instanceof EntityPlayer){
                        ig.game.frozen = true;
                        this.display = true;

                        ig.log("Working.jpg");
                        this.susUI = ig.game.spawnEntity(EntitySuspectUI, 128, 128);
                        this.wepUI = ig.game.spawnEntity(EntityWeaponUI, 192, 192);
                        this.susBtn = ig.game.spawnEntity(EntitySuspectButton, 320, 128);
                        this.cancelBtn = ig.game.spawnEntity(EntityCancelButton, 320, 192);
                    }
                }
            
                //var textBox = ig.game.spawnEntity(EntityTextBox, 32, ig.system.height - 32);
                //textBox.setText(this.text);

            }
            else if(this.cancelBtn != null && this.cancelBtn.cancel){
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


            

            if(this.display){
                //Display the images and fonts for the UI menu
                this.UIImage.draw(ig.game.screen.x + 64, ig.game.screen.y + 32);
                this.suspectFont.draw("Pick Your Suspect: ", ig.game.screen.x + 96, ig.game.screen.y + 32 + 128, ig.Font.ALIGN.LEFT);
                this.weaponFont.draw("Pick Your Weapon: ", ig.game.screen.x + 96, ig.game.screen.y + 32 + 224, ig.Font.ALIGN.LEFT);
            }
        }
    })

});