document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const totalWithdrawAmountString = withdrawField.value;
    const receivedWithdrawAmount = parseFloat(totalWithdrawAmountString);
    withdrawField.value = '';

    const previousWithdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawAmountString = previousWithdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const newWithdrawAmount = previousWithdrawAmount + receivedWithdrawAmount;
    previousWithdrawTotal.innerText = newWithdrawAmount;

    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - receivedWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})