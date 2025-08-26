const validPin = 1234;
// function to get input values


function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue =inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue (id){

     const inputField = document.getElementById(id);
    const inputFieldValue =inputField.value;
    return inputFieldValue;
}


//functions to get  inner text
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue =element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}



// function to set innerText

function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance");
      availableBalanceElement.innerText = value ;
}



// function to toggle

function handleToggle (id){
 const forms = document.getElementsByClassName("form")

    for (const from of forms){
        from.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}









// Add money feature
document.getElementById("add-money-btn").addEventListener('click', function(e){
    e.preventDefault();

    const bank = getInputValue("bank");

    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount")

    const pin = getInputValueNumber("add-pin")

    const availableBalance = getInnerText("available-balance")
    if(accountNumber.length !== 11){
        alert("Please Provide Valid Account Number");
        return;
    }

    if(pin !== validPin){
        alert("Please Provide Valid Pin Number");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

   

    setInnerText(totalNewAvailableBalance)
});


// Cashout money feature

const newValidPin = 1234;

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()

const agentNumber = getInputValue("agent-number")

    
   const amount = getInputValueNumber("withdraw-amount")
    
   const withdrawPin = getInputValueNumber("withdraw-pin" )

    const availableBalance = getInnerText("available-balance");


    if(agentNumber.length !== 11){
        alert("Please Provide Valid Account Number")
        return;
    }

    if(withdrawPin !== newValidPin){
        alert("Please Provide Valid Pin Number")
        return;
    }

if(amount>availableBalance){
    alert("Insufficient Balance");
    return;
}


const totalNewAvailableBalance = availableBalance-amount

setInnerText(totalNewAvailableBalance)
    

})
 




// toggling feature

document.getElementById("add-button").addEventListener("click",function(){

    handleToggle("add-money-parent");

})

document.getElementById("cash-out-button").addEventListener("click",function(){

handleToggle("cash-out-parent")

})
document.getElementById("transfer-button").addEventListener("click",function(){
   handleToggle("transfer-money-parent");

})
 
document.getElementById("bonus-button").addEventListener("click",function(){
  handleToggle("bonus-parent");

})