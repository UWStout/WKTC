ig.module(
	'game.entities.textBox'
)
.requires(
    'impact.entity',
    'impact.debug.debug'
)
.defines(function(){

EntityTextBox = ig.Entity.extend({
    text: "Default Text",

    size: {x: 128, y: 32},
    
    animSheet: new ig.AnimationSheet( 'media/TextBox.png', 128, 32),

    zIndex: 3,

    init: function(x, y, settings){
        this.parent(x, y, settings);

        this.addAnim("idle", 1, [0]);
    }
})

});