let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case 'Del':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                console.log(display.innerText);
                display.innerText = 5;
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

function calculate (string) {


    return result;
}