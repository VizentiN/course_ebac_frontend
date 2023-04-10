const form = document.getElementById(`form-numbers`);
const numberA = document.getElementById(`number-a`);
const numberB = document.getElementById(`number-b`);

function secondIsBigger(first, second) {
    return first < second;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const successMessage = `The first number: <b>${numberA.value}</b> is smaller than the second number: <b>${numberB.value}</b>`;

    formIsValid = secondIsBigger(numberA.value, numberB.value)
    if (formIsValid) {
        const containerSuccessMessage = document.querySelector(`.success-message`);
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = `block`;

        numberA.value = '';
        numberB.value = '';
    } else {
        numberB.style.border = `1px solid red`;
        document.querySelector(`.error-message`).style.display = `block`;
    }
})

numberB.addEventListener(`keyup`, function (e) {
    console.log(e.target.value);
    formIsValid = secondIsBigger(numberA.value, e.target.value);

    if (!formIsValid) {
        numberB.classList.add(`error`);
        document.querySelector(`.error-message`).style.display = `block`;
    } else {
        numberB.classList.remove(`error`);
        document.querySelector(`.error-message`).style.display = `none`;
    }
});
