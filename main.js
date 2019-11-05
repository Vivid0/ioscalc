const buttons = document.querySelectorAll(`.btn`);
const operators = document.querySelectorAll(`.operator`);
const display = document.getElementById(`display`);
let operator = null;
let memory = null;

for (const btn of buttons) {
    btn.addEventListener(`click`, function () {
        if (btn.id === `allClear`) {//allClear button
            display.value = 0;
            memory = null;
            operator = null;
        } else if (btn.id === `clear`) {//clear button
            display.value = 0;
            document.getElementById(`clear`).classList.add(`hidden`);
            document.getElementById(`allClear`).classList.remove(`hidden`);
        } else if (btn.id === `sign`) {//sign switching button
            display.value *= -1;
        } else if (btn.id === `percent`) {//percent button
            display.value /= 100;
        } else if (btn.classList[1] === `operator`) {//operator buttons
            operator = btn.id;
            btn.classList.add(`clicked`);
            if (btn.id === `plus`) {
                if (memory === null) {
                    memory = display.value * 1;
                }

            }
        } else if (btn.classList[1] === `dark`) {//numbers and decimal buttons
            document.getElementById(`allClear`).classList.add(`hidden`);
            document.getElementById(`clear`).classList.remove(`hidden`);
            //loop to remove 'clicked' class from all operator buttons
            for (i = 0; i < operators.length; i++) {
                operators.item(i).classList.remove(`clicked`);
            }
            if (btn.value === `.`) {
                if (display.value.includes(`.`)) {//decimal button
                    display.value = display.value;
                } else {
                    display.value = display.value + btn.value;
                }
            } else if (display.value == 0 && !display.value.includes(`.`)) {//number buttons
                display.value = btn.value;
            } else {
                display.value = display.value + btn.value;
            }
        } 

    })
}