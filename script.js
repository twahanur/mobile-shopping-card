// plusmobile button function
const plusMobile = document.getElementById("plusMobile");
plusMobile.addEventListener('click', function(){
   getInputAmount("mobileAmount", 1);
   perItemPrize("mobilePrize", 1235);
   const TotalItemAmount = TotalAmount();
})
// minusMobile button function
const minusMobile = document.getElementById("minusMobile");
minusMobile.addEventListener("click", function(){
   getInputAmount("mobileAmount", -1);
   perItemPrize("mobilePrize" -1235);
   const TotalItemAmount = TotalAmount();
})



// plusCasing button function
const plusCasing = document.getElementById("plusCasing");
plusCasing.addEventListener("click", function(){
   getInputAmount("casingAmount", 1);
   perItemPrize("casingPrize", 59);
   const TotalItemAmount = TotalAmount();
})
// minusCasing button function
const minusCasing = document.getElementById("minusCasing");
minusCasing.addEventListener("click", function(){
   getInputAmount("casingAmount", -1);
   perItemPrize("casingPrize" - 59);
   const TotalItemAmount = TotalAmount();
})

function TotalAmount(){
   const mobilePhonePrize = document.getElementById("mobilePrize").innerText;
   const mobilePrizeNumber = parseFloat(mobilePhonePrize);
   const mobileCasingPrize = document.getElementById("casingPrize").innerText;
   const mobileCasingNumber = parseFloat(mobileCasingPrize);
   const TotalAmountWithouttax = mobilePrizeNumber + mobileCasingNumber;
   if (TotalAmountWithouttax >= 59) {
      const taxDevide = TotalAmountWithouttax/100;
      const tax = taxDevide * 17;
      const totalTax = tax;
      document.getElementById("tax").innerText = totalTax;
   }
   totalCost = TotalAmountWithouttax + totalTax;
   document.getElementById("subTotal").innerText = TotalAmountWithouttax;
   document.getElementById("total").innerText = totalCost;
   return totalCost;
}
// commmon used function
function getInputAmount(id, newValue){
   const input = document.getElementsById(id).value;
   const inputValue = parseFloat(input);
   const totalValue = inputValue + newValue;
   if (totalValue >= 0) {
      document.getElementById(id).value = totalValue;
   }
   return totalValue;
}
function perItemPrize(id, prizeValue) {
   var prize = document.getElementById(id).innerText;
   var itemPrize = parseFloat(prize);
   var priItemTotalPrice = prizeValue + itemPrize;
   if (productPrice >= 0) {

      document.getElementById(id).innerText = priItemTotalPrice;
   }
   return priItemTotalPrice;
}



const checkOutBtn = document.getElementById("checkOut");
checkOutBtn.addEventListener("click", function () {
   const cardArea = document.getElementById("cardArea");
   cardArea.style.display = "none";
   const ThanksSection = document.getElementById("Thanks");
   ThanksSection.style.display = "block";
})
