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
        textString:'This is a text box and I am displaying text',
        //Stores the length of textArray
        textStringLength:null,
        //Array that stores each of the characters of textString
        textArray:null,
        //Counter to keep track of what charter of the string we are on
        textCurrentChar:1,
        //String used to draw the text to the screen
        displayText:'',
        //Maximum length of charaters that can be on a line
        maxWidth:250,

        animSheet: new ig.AnimationSheet('media /TextBox.png',128,32),

        done: false,

        setPos: function(x, y) {
            this.pox.x = x;
            this.pos.y = y;
        },

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            //Split the array into individual characters
            this.textArray = this.textString.split('');
            //Store the lengeth of that array
            this.textStringLength = this.textArray.length;
            var x = ig.system.width/2;
            var y = ig.system.height - 32;

            this.addAnim('idle', 1, [0]);
        },

        kill:function(){
            this.parent();
        },

        draw: function() {
            //Create a font
            var font = new ig.Font( 'media/04b03.font.png' );
            var x = ig.system.width/2;
            var y = ig.system.height - 32;

            //Check to see if the current charater is less than the string length
            if(this.textCurrentChar <= this.textStringLength){
                //Set the display text to empty string
                this.displayText = '';
                //Counter to keep track of how many line break we have
                var lineBreaks = 1;
                //Character where the line breaks first
                var breakChar = null;

                //Draw letter one by one until we have the first string
                for (var i= 0; i < this.textCurrentChar; i++){
                    this.displayText += this.textArray[i];
                    //If we reach our max width
                    if(font.widthForString(this.displayText) > this.maxWidth){
                        //If we have not broken the line before
                        if(breakChar == null && this.textArray[i] == ' '){
                            breakChar = i;
                            this.displayText = this.displayText+ '\n';
                            lineBreaks++;
                        }
                        //If we have broken a line
                        else{
                            //if we are near that character 
                            if(i >= (breakChar*lineBreaks) && this.textArray[i] == ' '){
                                this.displayText = this.displayText+ '\n';
                                lineBreaks++;
                            }
                        }
                    }
                }
                this.textCurrentChar++;
            }
            else{
                this.done = true;
            }
            font.draw( this.displayText, this.pos.x, this.pos.y-(font.heightForString(this.displayText)/2), ig.Font.ALIGN.CENTER );
            this.parent();
        },
        update: function(){
            this.parent();

            this.pos.x = ig.system.width/2;
            this.pos.y = ig.system.height - 32;

            if(ig.input.pressed('action') && this.done == true){
                this.kill();
            }
        }
    })

});