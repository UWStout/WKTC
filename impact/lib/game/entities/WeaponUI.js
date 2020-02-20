ig.module(
    'game.entities.WeaponUI'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityWeaponUI = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/Suspects.png',64,64),
        zIndex: 5,
        wepNumber: 0,
        coordX: 0,
        coordY: 0,
        size: {x: 64, y: 64},
        pos: {x: 32, y: 32},
        changeSuspect: function(){
            this.wepNumber++
            if(this.wepNumber > 2){
                this.wepNumber = 0;
            }
            switch(this.wepNumber){
                case 0:
                    this.currentAnim = this.anims.wep1
                    break;
                case 1:
                    this.currentAnim = this.anims.wep2
                    break;
                case 2:
                    this.currentAnim = this.anims.wep3
                    break;
            }
        },
        init:function(){
            this.addAnim( 'wep1', 1, [0]);
            this.addAnim( 'wep2', 1, [1]);
            this.addAnim( 'wep3', 1, [2]);

            this.currentAnim = this.anims.wep1

            ig.log('I Spawned');
            ig.log(this.pos)

            this.pos.x = 128;
            this.pos.y = 224;
        },
        draw: function(){
            this.parent();
            
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);

            if(ig.input.pressed('click') && x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y && y <= this.pos.y + this.size.y){
                this.changeSuspect();
            }
        }
    })
})