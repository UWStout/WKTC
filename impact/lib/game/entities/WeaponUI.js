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
        pos: {x: 240, y: 224},
        // Cycle through the weapons array for choosing which weapon was the murder weapon
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
            // Establish entity animations
            this.addAnim( 'wep1', 1, [0]);
            this.addAnim( 'wep2', 1, [1]);
            this.addAnim( 'wep3', 1, [2]);

            this.currentAnim = this.anims.wep1

            ig.log('I Spawned');
            ig.log(this.pos)

            this.pos.x = this.pos.x + ig.game.screen.x;
            this.pos.y = this.pos.y + ig.game.screen.y;
        },
        draw: function(){
            this.parent();

            var wepSelect =  new ig.Font( 'media/04b03.font.png' )
            // Based on which weapon, update the text for confirming the murder weapon
            switch(this.wepNumber){
                case 0:
                    wepSelect.draw("Glass of Milk", 246 , 292, ig.Font.ALIGN.LEFT)
                    break;
                case 1:
                    wepSelect.draw("Licorice Rope", 246 , 292, ig.Font.ALIGN.LEFT)
                    break;
                case 2:
                    wepSelect.draw("Dino Grabber", 246 , 292, ig.Font.ALIGN.LEFT)
                    break;
            }
            
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            // If you click on the entity, cycle through the array
            if(ig.input.pressed('click') && x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y && y <= this.pos.y + this.size.y){
                this.changeSuspect();
            }
        }
    })
})