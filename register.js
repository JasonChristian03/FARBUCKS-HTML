function validateForm(){
    if (!validateName()){
        return
    }else if (!validateEmail()){
        return
    }else if (!validatePass()){
        return
    }else if (!validateAddress()){
        return
    }else if (!validateAgree()){
        return
    }else{
        alert(document.getElementById('fullName').value + ", Claim your new member prize from Email!")
    }
}
function validateName(){
    var name = document.getElementById('fullName').value
    if(!name.length > 2){
        alert("Your name must be more than 3 characters")
        return false
    }else if(name.length==0){
        alert("Please fill your Full Name")
    }
    return true   
}
function validateEmail(){
    var email = document.getElementById('email').value
    if (!email.endsWith('@gmail.com')){
        alert("Your  must use gmail account!!")
        return false
    }
    return true   
}
function validatePass(){
    var pass = document.getElementById('password').value
    if(!pass.length > 6){
        alert("Your password must be more than 7 characters")
        return false
    }else if(pass.length==0){
        alert("Please fill your Password")
    }
    return true   
}
function validateAddress(){
    var address = document.getElementById('address').value
    if(!address.length > 9){
        alert("Your address must be more than 10 characters")
        return false
    }else if(address.length==0){
        alert("Please fill your Address")
    }
    return true   
}
function validateAgree(){
    var agree = document.getElementById('agree')
    if(!agree.checked){
        alert("Please check the user agreement")
        return false
    }
    return true   
}