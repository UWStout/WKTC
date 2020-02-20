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
        UIImage: new ig.Image('media/TestImage.png',448,320),
        susUI: null,
        wepUI: null,


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

            if(this.susUI != null && this.wepUI != null) {
                if(this.susUI.susNumber == ig.game.susWinNum && this.wepUI.wepNumber == ig.game.wepWinNum){
                    ig.game.loadLevel( LevelEnd);
                }
            }


            
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){

                for(var t in this.target){
                    if(ent && ent instanceof EntityPlayer){
                        ig.game.frozen = true;
                        this.display = true;

                        ig.log("Working.jpg");
                        this.susUI = ig.game.spawnEntity(EntitySuspectUI, 128, 128);
                        this.wepUI = ig.game.spawnEntity(EntityWeaponUI, 192, 192);
                    }
                }
            
                //var textBox = ig.game.spawnEntity(EntityTextBox, 32, ig.system.height - 32);
                //textBox.setText(this.text);

            }
            else if(ig.input.pressed('action') && this.display == true){
                ig.game.frozen = false;
                this.display = false;
                if(this.susUI != null){
                    this.susUI.kill();
                }
                if(this.wepUI != null){
                    this.wepUI.kill();
                }
                
            }
            
            
        

            this.parent();
        },
        draw: function(){
            this.parent();

            if(this.display){
                this.UIImage.draw(ig.game.screen.x + 64, ig.game.screen.y + 32);
            }
        }
    })

});