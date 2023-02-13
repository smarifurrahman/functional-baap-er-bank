/* 
step - 1: get withdraw amount from input field
step - 2: check valid input
step - 3: get the previous total withdraw amount and previous total balance.
step - 4: check balance is sufficient or not
step - 5: set new total withdraw amount and new total balance.
 */

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');

    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        return alert('Please enter a valid input');
    }

    const previousTotalWithdraw = getTextElementValueById('total-withdraw');
    const previousTotalBalance = getTextElementValueById('total-balance');

    if (newWithdrawAmount > previousTotalBalance) {
        alert('Insufficient balance');
        return;
    }

    const newTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
    setTextElementValueById('total-withdraw', newTotalWithdraw);
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    setTextElementValueById('total-balance', newTotalBalance);
});