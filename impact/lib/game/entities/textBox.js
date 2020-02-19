ig.module(
	'game.entities.textBox'
)
.requires(
    'impact.entity',
    'impact.debug.debug',
    'impact.font'
)
.defines(function(){
//Credit to stillenklipse for their code for the scrolling text
EntityTextBox = ig.Entity.extend({
        _wmDrawBox: true,
        _wmBoxColor: 'rgba(255, 100, 0, 0.7)',
        size: {x: 90, y: 90},
        pos: {x:0, y:0},
        //Text you want to be displayed
        textString: 'This is a text box and I am displaying text',
        //Stores the length of textArray
        textStringLength:null,
        //Array that stores each of the characters of textString
        textArray:null,
        //Counter to keep track of what charter of the string we are on
        textCurrentChar:1,
        //String used to draw the text to the screen
        displayText:'',
        //Maximum length of charaters that can be on a line
        maxWidth:100,

        //animSheet: new ig.AnimationSheet('media /TextBox.png',128,32),

        done: false,

        setPos: function(x, y) {
            this.pox.x = x;
            this.pos.y = y;
        },

        init: function( x, y, settings ) {
            this.parent( x, y, settings );

            //this.addAnim('idle', 1, [0]);
            
        },

        setText: function(text){
            this.textString = text

            //Split the array into individual characters
            this.textArray = this.textString.split('');
            //Store the lengeth of that array
            this.textStringLength = this.textArray.length;
        },

        kill:function(){
            this.parent();
        },

        draw: function() {
            //Create a font
            var font = new ig.Font( 'media/Market_Deco.png' );

            //Check to see if the current charater is less than the string length
            if(this.textCurrentChar <= this.textStringLength){
                //Set the display text to empty string
                this.displayText = '';
                //Counter to keep track of how many line break we have
                var lineBreaks = 1;

                //Draw letter one by one until we have the full string
                for (var i= 0; i < this.textCurrentChar; i++) {
                    this.displayText += this.textArray[i];
                    //If we reach our max width on a line
                    if(font.widthForString(this.displayText) > (this.maxWidth * lineBreaks)) {
                        //If the charcter is a space enter a new line.
                        if(this.textArray[i] == ' ' ) {
                            this.displayText = this.displayText+ '\n';
                            lineBreaks++;
                        }
                    }
                }
                this.textCurrentChar++;
            }
            else{
                this.done = true;
            }
            font.draw( this.displayText, this.pos.x, this.pos.y-(font.heightForString(this.displayText)/2), ig.Font.ALIGN.LEFT );
            this.parent();
        },
        update: function() {
            
            
            //Updates Textbox and Text position
            this.pos.x = 32;
            this.pos.y = ig.system.height - 32;

            if(ig.input.pressed('action') && this.done) {
                ig.game.frozen = false;
                this.done = false;
                ig.log(ig.game.frozen);


                this.kill();
            }

            this.parent();
        }
    })

});