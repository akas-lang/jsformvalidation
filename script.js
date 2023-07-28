const form = document.getElementById('form');
const loginform = document.getElementById('loginform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phonenumber = document.getElementById('phoneno');

const hone=document.querySelector('.hone'); 
const htwo=document.querySelector('.htwo'); 
const hthree=document.querySelector('.hthree'); 

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


function validateInputs()
{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const pno = phonenumber.value.trim();

    if(usernameValue==="")
    {
        setError(username,'enter your name');
    }
    else
    {
        setSuccess(username);
    }
    if(emailValue==='')
    {
        setError(email,'enter your email');

    }
    else if(!isValidEmail(emailValue))
    {
        setError(email,'provide a valid email');
    }
    else{
        setSuccess(email);
    }
    if(passwordValue==='')
    {
        setError(password,'enter your password');
    }
    else if(passwordValue.length<8)
    {
        setError(password,'+ 8 characters');
    }
    else
    {
        setSuccess(password);
    }
    if(password2Value==='')
    {
        setError(password2,'confirm ur password');
    }
    else if(passwordValue!==password2Value)
    {
        setError(password2,'password not match');
    }
    else
    {
        setSuccess(password2);
    }
    if(pno==='' || pno <=9 && pno>11 )
    {
        setError(phoneno,'enter valid no');
    }
    else if(!phonenon(pno))
    {
        setError(phoneno,'enter valid format');
    }
    else{
        setSuccess(phoneno)
    }
// hone.innerHTML=usernameValue;
// htwo.innerHTML=emailValue;
// hthree.innerHTML=pno;
// username.value='',email.value='',password.value='',password2.value='',phonenumber.value='';



}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const phonenon=(no)=>{
    var res = /^[7-9][0-9]{9}$/;
    return res.test(no);
}
function setError(name,message)
{
    var parentele=name.parentElement;
    var errormsg=parentele.querySelector('.error');
    errormsg.innerHTML=message;
    parentele.classList.add('error');
    parentele.classList.remove('success');
}
function setSuccess(name)
{
    var parentele=name.parentElement;
    var errormsg=parentele.querySelector('.error');
    errormsg.innerHTML='';
    parentele.classList.add('success');
    parentele.classList.remove('error');
}