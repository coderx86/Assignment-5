const btnDonation = document.getElementById('btn-donation');
const donationContainer = document.getElementById('donation-container');
const btnHistory = document.getElementById('btn-history');
const historyContainer = document.getElementById('history-container');

// features

btnHistory.addEventListener('click', function(){
    donationContainer.classList.add("hidden");
    btnHistory.classList.remove("text-[#111111b3]");
    btnHistory.classList.add("bg-[#B4F461]");
    btnDonation.classList.add("text-[#111111b3]");
    btnDonation.classList.remove("bg-[#B4F461]");
    historyContainer.classList.remove("hidden");

});
btnDonation.addEventListener('click', function(){
    donationContainer.classList.remove("hidden");
    btnDonation.classList.remove("text-[#111111b3]");
    btnDonation.classList.add("bg-[#B4F461]");
    btnHistory.classList.add("text-[#111111b3]");
    btnHistory.classList.remove("bg-[#B4F461]");
    historyContainer.classList.add("hidden");
});

// donation function for Noakhali
document.getElementById("btn-noakhali-donate").addEventListener("click", function () {
    donationProcess('noakhali-input', 'noakhali-donated', 'Noakhali');
  
    document.getElementById("noakhali-input").value = "";
  });
// donation function for Feni
document.getElementById("btn-feni-donate").addEventListener("click", function () {
    donationProcess('feni-input', 'feni-donated', 'Feni');
  
    document.getElementById("feni-input").value = "";
  });
// donation function for Qouta-movement
document.getElementById("btn-qouta-donate").addEventListener("click", function () {
    donationProcess('qouta-input', 'qouta-donated', 'Qouta Movement');

    document.getElementById("qouta-input").value = "";
});
