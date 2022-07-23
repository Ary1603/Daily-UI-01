'use strict'
const divOptiosns = $('.options');
const register = $('#register');
const login = $('#login');


compareColors();

register.click( function () {
    login.css("background-color","rgba(255, 255, 243, 0.5)");
    register.css('background-color','rgba(0, 178, 195, 0.5)');
    register.css("color","white");
    login.css("color", "black");
    $('.login-container').remove();
    $('.register-container').remove();

    compareColors();
});

login.click( function () {
    login.css('background-color','rgba(0, 178, 195, 0.5)');
    register.css("background-color","rgba(255, 255, 243, 0.5)");
    login.css("color","white");
    register.css("color", "black");
    $('.register-container').remove();
    $('.login-container').remove();
    compareColors();
});

function compareColors(){
    if(register.css("background-color") == 'rgba(0, 178, 195, 0.5)'){
        $(divOptiosns).after('<div class = "register-container"><div><span>Name: </span><input type="text"></div> <div><span>Surname: </span><input type="text"></div> <div><span>Email: </span><input type="text"></div> <div><span>Password: </span><input type="text"></div> <button id = "btn-submit"> Register </button></div>');
    }else{
        if(login.css("background-color") == 'rgba(0, 178, 195, 0.5)'){
            divOptiosns.after('<div class = "login-container"> <div><span>Email:</span><input type="text"></div> <div><span>Password:</span> <input type="text"></div> <button id = "btn-submit"> Login </button></div>');
        }
    }
}
 