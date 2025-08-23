// login button functionality
document.getElementById("loginButton").addEventListener('click',function(e){

    e.preventDefault()
   
    const mobileNumber = 1793186865
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById("mobile-number").value


    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const piNumberValue = document.getElementById("pin-number").value

 const pinNumberValueConverted = parseInt(piNumberValue)

 
 if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted===pinNumber){
window.location.href="./home.html"

 }
 else{
   alert('Invalid Credentials')
    
 }

})