const labelPlaceholers = document.querySelectorAll(".signup-form-input .form-text");
const mailText = document.querySelector("#mail")
const firstnameText = document.querySelector("#firstname");
const lastnameText = document.querySelector("#lastname");
const passImage = document.querySelector(".password-see");
const passwordText = document.querySelector("#password-text");
const passwordCheck = document.querySelector(".pass-check");
const nextBtn = document.querySelector(".next-btn");
const signupForm = document.querySelector(".signup-form-input");

const CLASSNAME_HIDDEN = "hidden";
const CLASSNAME_LABELMOVE = "labelmove";

const MAILREG = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const PASSWORDREG_1 = /[A-Za-z\d#?!@$%^&*-]{8,}$/;
const PASSWORDREG_2 = /(?=.*?[a-z])(?=.*?[A-Z])/;
const PASSWORDREG_3 = /(?=.*?[0-9#?!@$%^&*-])/;

var mailFlag = false;
var firstnameFlag = false;
var lastnameFlag = false;
var passFlag = false;

labelPlaceholers.forEach(labelPlaceholder =>{
    labelPlaceholder.addEventListener("focus",function() {
        const label = this.nextSibling.nextSibling;
        label.classList.add(CLASSNAME_LABELMOVE);
        label.style.color = "blue";
    })
    labelPlaceholder.addEventListener("blur",function() {
        const label = this.nextSibling.nextSibling;
        if(this.value===""){
            label.classList.remove(CLASSNAME_LABELMOVE);
            label.style.color = "#808080";
        }else{
            label.style.color = "#808080";
        }
    })
});

mailText.addEventListener("keyup",  function() {
    const img = document.querySelector(`.${this.id} img`);
    if(MAILREG.test(this.value)){
        img.classList.remove(CLASSNAME_HIDDEN);
        mailFlag = true;
    }else{
        img.classList.add(CLASSNAME_HIDDEN);
        mailFlag = false;
    }
});

firstnameText.addEventListener("keyup",function() {
    const img = document.querySelector(".firstname img");
    if(this.value===""){
        img.classList.add(CLASSNAME_HIDDEN);
        firstnameFlag = false;
    }else{
        img.classList.remove(CLASSNAME_HIDDEN);
        firstnameFlag = true;
    }
});

lastnameText.addEventListener("keyup",function() {
    const img = document.querySelector(".lastname img");
    if(this.value===""){
        img.classList.add(CLASSNAME_HIDDEN);
        lastnameFlag = false;
    }else{
        img.classList.remove(CLASSNAME_HIDDEN);
        lastnameFlag = true;
    }
});

passwordText.addEventListener("keyup",  function() {
    if(this.value===""){
        passwordCheck.classList.add(CLASSNAME_HIDDEN);
    }else{
        passwordCheck.classList.remove(CLASSNAME_HIDDEN);
        const firstImg = document.querySelector(".first-check");
        const secondImg = document.querySelector(".second-check");
        const lastImg = document.querySelector(".last-check");
        var flag1 = false;
        var flag2 = false;
        var flag3 = false;
        passFlag = false;
        if(PASSWORDREG_1.test(this.value)){
            firstImg.src = "/img/check.jpg"
            flag1 = true;
        }else{
            firstImg.src = "/img/x.jpg"
        }
        if(PASSWORDREG_2.test(this.value)){
            secondImg.src = "/img/check.jpg"
            flag2 = true;
        }else{
            secondImg.src = "/img/x.jpg"
        }
        if(PASSWORDREG_3.test(this.value)){
            lastImg.src = "/img/check.jpg"
            flag3 = true;
        }else{
            lastImg.src = "/img/x.jpg"
        }
        if(flag1&&flag2&&flag3){
            passwordCheck.classList.add(CLASSNAME_HIDDEN);
            passFlag = true;
        }
    }
});

passImage.addEventListener("click",function() {
    const passText = document.querySelector(".form-password");
    if(passText.type==="password"){
        passText.type = "text";
        this.src="./img/passwordSee.jpg";
    }else{
        passText.type = "password";
        this.src="./img/passwordNoSee.jpg";
    }
});

nextBtn.addEventListener("click",function() {
    if(!mailFlag){
        mailText.focus();
        return;
    }
    if(!firstnameFlag){
        firstnameText.focus();
        return;
    }
    if(!lastnameFlag){
        lastnameText.focus();
        return;
    }
    if(!passFlag){
        passwordText.focus();
        return;
    }
});