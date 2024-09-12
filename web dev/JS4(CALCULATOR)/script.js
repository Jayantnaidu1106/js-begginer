let display = document.getElementById('display')
function appendChar(character) {
    if (display.innerText === '0') {
        display.innerText = character;
    }
    else {
        display.innerText += character;
    }
}
function clearDisplay() {
    display.innerText = '0';
}
function deleteLastChar() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    }
    else {
        display.innerText = '0';
    }
}
function calculate()
{try {
    display.innerText = eval(display.innerText);
} catch (error) {
    display.innerText = 'Error';
}
   
}