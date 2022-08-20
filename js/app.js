document.getElementById("calculator").addEventListener("click",function(){
    const incomeAmount = inputFieldValue("income-input");
    
    // Expenses aria

    const foodCost = inputFieldValue("food-cost");
    const rentCost = inputFieldValue("rent-cost");
    const clothCost = inputFieldValue("cloth-cost");

    // calculat
    const totalCost = foodCost+rentCost+clothCost;
    const balance = incomeAmount - totalCost;

   innerTextValue('total-ex',totalCost);
   innerTextValue('balance',balance); 
   
})

document.getElementById("save-btn").addEventListener("click",function(){
    const saving = inputFieldValue("save-input");

    const incomeAmount = inputFieldValue("income-input");
    
    // Expenses aria

    const foodCost = inputFieldValue("food-cost");
    const rentCost = inputFieldValue("rent-cost");
    const clothCost = inputFieldValue("cloth-cost");

    // calculat
    const totalCost = foodCost+rentCost+clothCost;
    const balance = incomeAmount - totalCost;

    const savingAmount = (saving /100) *balance;

    const remaining = balance - savingAmount;

    innerTextValue('save-amount',savingAmount);
   innerTextValue('remaining',remaining);
   inputField.value = ''; 

})