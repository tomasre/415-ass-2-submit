'use strict';

(function () {
    var lines =[];

    os._internals.drivers.display = {
        streamUpdateFunction : streamUpdateFunction
    };

    function streamUpdateFunction(writeableStream) {
        updateDisplay(writeableStream.consumeBuffer());
    }

    /*
    buffer is a string
     will print to the "terminal" webpage portion
     right
     um
    updateDisplay will print it to the 'display device' along with a newline
     */
    function updateDisplay(buffer) {

        // a bandage
            if (!document.getElementById('textArea').innerHTML){
                lines.length=0;
            }

            var tempStr = buffer + "<br>";
            lines.push(tempStr);
            if(lines.length > 25) {
                lines.shift();
            }


            var terminalTextField = document.getElementById('textArea');
            //console.log('DISPLAY DRIVER PRINTING:');
            terminalTextField.innerHTML = lines.join("");
    }
/*
    function clearScreen(){
        var terminalTextField = document.getElementById('textArea');
        terminalTextField.innerHTML = "";
    }*/
})();
