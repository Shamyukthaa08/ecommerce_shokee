const form =document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
let ans;

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError=(element, message)=>{
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText= message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
const setSuccess= element => {
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText= '';
    inputControl.classList.add('success');
    inputControl.classList.remove('errors');
};
const isValidEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const passwrod2Value=password2.value.trim();
   
    
    
   

    if(usernameValue === ''){
        setError(username, 'Username is required');
        ans=false;
        

    }else{
         setSuccess(username);
         ans= true;
        
    }

    if(emailValue===''){
        setError(email, 'Email is required');
        ans=false;
        
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
      ans=false;
    }
    else {
        setSuccess(email);
       ans=true;
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
        ans=false;
      
    }else if(passwordValue.length<8){
        setError(password, 'Password must be at least 8 character.');
        and=false;
       
    }
    else{
        setSuccess(password);
        ans=true;
       
    }

    if(passwrod2Value ===''){
        setError(password2, 'Please confirm your password');
        ans=false;
       
    }else if(passwrod2Value !== passwordValue){
        setError(password2, "Passwords don't match");
        ans=false;
        
    }
    else{
        setSuccess(password2);
        ans=true;
        
    }
    if(ans){
        window.location.href="https://shamyukthaa08.github.io/OIBSIP_calculator.githubio/"
    }
    
}