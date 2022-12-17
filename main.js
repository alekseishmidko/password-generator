const dataUp = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const dataLow = 'qwertyuiopasdfghjklzxcvbnm';
const dataNum = '1234567890';
const dataSym = '!@#$%^&*()_+';
const dataAll = dataUp + dataLow + dataNum + dataSym;

const dom = {
    password : document.querySelector('.generator__password'),
    button : document.querySelector('.generator__btn'),
    passwordSettings : {
        length : document.querySelector('.generator__settings-length'),
        uppercase : document.querySelector('#uppercase'),
        number : document.querySelector('#number'),
        symbol : document.querySelector('#symbol'),
    }
}
// console.log(dom.passwordSettings);

// // ф-я генерации набора символов
// function passwordGeneration(data, passwordLength){
//     let password = '';
// //  рабочая схема если только используются все символы, соответственно длина dataAll покрывает все рандомные числа
//     for(i=0; i<data.length; i++){
//         let randomNumber = Math.floor(Math.random() * dataAll.length);
//         password += dataAll[randomNumber];
//     }
//     return password;
// }
// console.log(passwordGeneration(dataSym, 12));


// 2й способ 
// ф-я генерации случайного символа

function randomSymbol(maxNumber){
    const randomSymbol =  Math.round(Math.random() * maxNumber)
        return randomSymbol;
}
// ф-я генерации рандомного набора символов 
function passwordGenerator(symbols, length){
    const maxIndex = symbols.length - 1;
    let password2 = '';

    for ( let i=1; i<=length; i++){
       const index = randomSymbol(maxIndex);
       const randomLetter = symbols[index];
       password2 = password2 + randomLetter;
    }
    return password2;
}



 // отслеживаем клик по кнопке 
    dom.button.onclick = () => {
        // длина генерируемого пароля:
    passwordLength = dom.passwordSettings.length.value;
    
    console.log('length:', passwordLength);

    // переменные
    const uppercase = dom.passwordSettings.uppercase;

    // строка в которую добавляются необходимые для генерации пароля символы:
    let newPassword = dataLow;
//    


    if(uppercase.querySelector('input:checked')){
        newPassword = newPassword + dataUp;
    }
    if(number.querySelector('input:checked')){
        newPassword = newPassword + dataNum;
    }
    if(symbol.querySelector('input:checked')){
        newPassword = newPassword + dataSym;
    }
    console.log(newPassword);

    const pas = passwordGenerator(newPassword, passwordLength);
    dom.password.innerHTML = pas;
}

    