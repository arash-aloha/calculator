
const buttons = document.querySelectorAll('button');
const input: HTMLInputElement = document.querySelector('input');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleClick(e);
    });
});
function handleClick(btn) {
    let text = btn.target.outerText;
    let equation: string = '';

    if(text === '=') {
    // runt calcFunction
    } else if(text === 'C') {
        //clear input
    } else {
        equation += text
        input.value += equation;
    }   
}
