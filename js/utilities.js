function getInputFieldValueById(id) {
    const value = document.getElementById(id).value;
    const numberValue = parseFloat(value);
    if (isNaN(numberValue) || numberValue <= 0) {
        alert("Please enter a valid amount!");
        return null;
    } else {
        return numberValue;
    }
}

function getInputTextById(id){
    const value = document.getElementById(id).innerText;
    const numberValue = parseFloat(value);

    return numberValue;
}

function donationProcess(inputId, donatedId, locationName) {
    const inputAmount = getInputFieldValueById(inputId);
    const donatedAmount = getInputTextById(donatedId);  
    const balance = getInputTextById('account-balance');

    if (inputAmount === null){
        return
    };
    if (balance >= inputAmount) {
        const currentBalance = balance - inputAmount;
        const currentDonatedAmount = donatedAmount + inputAmount;

        // Update the DOM elements with new values
        document.getElementById(donatedId).innerText = currentDonatedAmount.toFixed(2);
        document.getElementById('account-balance').innerText = currentBalance.toFixed(2);
        my_modal_1.showModal();

        // update donation history
        const div = document.createElement('div');
        const time = new Date();
        const timeText = time.toString();
        div.classList.add('p-8', 'border', 'border-solid', 'border-[#1111111a]', 'w-10/12', 'm-auto', 'rounded-2xl', 'mt-8');
    
        div.innerHTML = `
          <h2 class="text-xl font-bold">${inputAmount} Taka is Donated for famine-2024 at ${locationName}, Bangladesh</h2>
          <p class="text-[#111111b3]">Date : ${timeText}</p>
        `;
        document.getElementById('history-container').appendChild(div);
    } else {
        alert("Not enough balance in your account!");
    }
}

