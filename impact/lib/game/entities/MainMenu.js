ig.module(
    'game.entities.MainMenu'
)
.requires(
    'impact.entity',
    'game.entities.StartButton',
    'game.entities.HowToPlay',
    'game.entities.credits'
)
.defines(function() {
   
    EntityMainMenu = ig.Entity.extend({
        zIndex: 0,
        background: new ig.Image('media/Background.png'),
        size: {x: 576, y: 384},
        init:function(){
            
        },
        draw: function(){
            this.parent();
            this.background.draw(0,0);
        }
    })
})