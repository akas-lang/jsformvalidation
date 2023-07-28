const loginid = document.getElementById('loginemail');
const loginpassword = document.getElementById('loginpassword');

loginform.addEventListener('submit', e => {
    e.preventDefault();

    loginvalidator();
});

function loginvalidator()
{
    const emailid=loginid.value.trim();
    console.log(emailid);
    const loginpass=loginpassword.value.trim();
    if(emailid==='')
    {
        solerror(loginid,'enter email');
    }
    else if(!isValidEmail(emailid))
    {
        solerror(loginid,'enter valid email id');
    }
    else
    {
        solsuccess(loginid);
    }
    if(loginpass==='')
    {
        solerror(loginpassword,'enter password');
    }
    else
    {
        solsuccess(loginpassword);
    }
}

function solerror(name,message)
{
    const initial=name.parentElement;
    const child=initial.querySelector('.error');
    child.innerHTML=message;
    initial.classList.add('error');
    initial.classList.remove('success');
}
function solsuccess(name)
{
    const initial=name.parentElement;
    const child=initial.querySelector('.error');
    child.innerHTML='';
    initial.classList.add('success');
    initial.classList.remove('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}