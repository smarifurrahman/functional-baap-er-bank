/* 
step - 1: get deposit amount from input field
step - 2: check valid input
step - 3: get previous total deposit amount and set new value
step - 4: get previous total balance amount and set new value
 */

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-amount');

    if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
        return alert('Please enter a valid input');
    }

    const previousTotalDeposit = getTextElementValueById('total-deposit');
    const newTotalDeposit = previousTotalDeposit + newDepositAmount;
    setTextElementValueById('total-deposit', newTotalDeposit);

    const previousTotalBalance = getTextElementValueById('total-balance');
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    setTextElementValueById('total-balance', newTotalBalance);
});