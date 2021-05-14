
const buttons = document.querySelectorAll('button');
const input: HTMLInputElement = document.querySelector('input');
let equation: string = '';

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleClick(e);
    });
});
function handleClick(btn) {
    let text = btn.target.outerText;
    input.value = ''

    if(text === '=') {
    // runt calcFunction
    const results: string = calc(equation);
    input.value = results;

    } else if(text === 'C') {
        //clear input
        input.value = '';
        equation = '';
    } else {
        equation += text
        input.value += equation;
    }   
}

function calc(equation: string): string {
    let res = eval(equation);
    console.log(res);
    return res.toString();
}