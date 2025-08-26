const validPin = 1234;

const transactionData = []

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

//  function to toggle btns

function  handleButtonToggle(id){
    
    const formBtns = document.getElementsByClassName("form-btn")

   for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
btn.classList.add("border-gray-300")  ; 

}
      document.getElementById(id).classList.remove("border-gray-300")

    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}





// Add money feature
document.getElementById("add-money-btn").addEventListener('click', function(e){
    e.preventDefault();

    const bank = getInputValue("bank");

    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount")


if(amount<=0){
    alert("Invalid Amount")
    return;
}

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

   

    setInnerText(totalNewAvailableBalance);

const data = {
   
    name: "Add Money",
    date : new Date().toLocaleTimeString()

}

transactionData.push(data);

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

if( amount <=0 || amount>availableBalance){
    alert("Insufficient Balance");
    return;
}


const totalNewAvailableBalance = availableBalance-amount

setInnerText(totalNewAvailableBalance)
    
const data = {
   
    name: "Cash Out",
    date : new Date().toLocaleTimeString()

}

transactionData.push(data);

})
 



// transaction

document.getElementById("transaction-btn").addEventListener("click",function(){

const transactionContainer = document.getElementById("transaction-container")

transactionContainer.innerText = ""
for( const data of transactionData)
{
    const div = document.createElement("div")
    div.innerHTML=`
    
      <div class=" bg-white rounded-xl p-3  flex justify-between items-center mt-3">
        <div  class=" flex items-center">
          <div class=" p-3 rounded-full bg-[#f4f5f7] ">
            <img src="./assets/wallet1.png" class="max-auto" alt="" />
          </div>

          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `
transactionContainer.appendChild(div)

}
})





// toggling feature


// add btn
document.getElementById("add-button").addEventListener("click",function(){

    handleToggle("add-money-parent");
handleButtonToggle("add-button");
})

// cash out btn
document.getElementById("cash-out-button").addEventListener("click",function(){

handleToggle("cash-out-parent")

handleButtonToggle("cash-out-button")
})

// transfer btn
document.getElementById("transfer-button").addEventListener("click",function(){
   handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");
})
// bonus btn

document.getElementById("bonus-button").addEventListener("click",function(){
  handleToggle("bonus-parent");
 
   handleButtonToggle("bonus-button");

})

// pay bill btn

document.getElementById("pay-bill-button").addEventListener("click",function(){
  handleToggle("bill-parent");
  handleButtonToggle("pay-bill-button");

})


// transaction btn

document.getElementById("transaction-btn").addEventListener("click",function(){
  handleToggle("transaction-parent");
 
    handleButtonToggle("transaction-btn");

})
