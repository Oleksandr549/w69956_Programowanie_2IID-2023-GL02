
const ImieTable = document.querySelector('#ImieTable')
const nazwiskoTable = document.querySelector('#nazwiskoTable')

function Car(Name, age ,color ,marka ,model, speed) {
    this.Name = Name;
    this.age = age;
    this.color = color;
    this.marka = marka;
    this.model = model;
    this.speed = speed;
    this.speeds = function(km) {
        const speeds = this.speed + km
        return speeds
    };
    this.speeds2 = function(km) {
        const speeds = this.speed - km
        return speeds
    };
    this.fullName = function() {
        return this.Name + " " + this.age + " " + model + " " + marka + " " + color;
    };
    this.info = function(inf) {
        if (inf){
            return this[inf];
        }
            
    };
   }

const car = new Car("audi 101-A", 1999 , "red", "Audi", 101, 60);
// console.log(car.fullName()); 
// console.log(car.speeds(20)); 
// console.log(car.info('color'));
const carList = [];
carList.push(new Car("BMW", 1999 , "red", "BMW", 12, 200))
carList.push(new Car("Audi 101", 2001 , "blue", "Audi", 101, 140))
carList.push(new Car("Fort 133", 2003 , "green", "Fort", 133, 190))
carList.push(new Car("BMW m3", 2010 , "yellow", "BMW", "m3", 150))
console.log(carList);
const rok = 2001
let speed = 0
for (let i = 0; i < carList.length; i++){
    speed = speed + carList[i].speed
 
    if(carList[i].age == rok){
        console.log(`model ${rok} roku:${carList[i].fullName()}`)
     
    }
    if(i + 1 == carList.length){
        console.log(`średnia prędkość: ${speed / carList.length}`)
        
        
  }
}

//name
const nameField = document.querySelector("#name");

const nameErrorField = document.querySelector("#name + .error");


nameField.addEventListener('input', () => {
    ImieTable.innerHTML = nameField.value;
    if(!requiredValidation(nameField, nameErrorField))
    {
        minLengthValidation(nameField, nameErrorField, 2)
    }
 });

//surname
const surnameFiled = document.querySelector('#surname');

const surnameFiledError = document.createElement('span');
surnameFiledError.classList.add('error');
surnameFiled.addEventListener('input', () => {
    nazwiskoTable.innerHTML = surnameFiled.value;
    if(requiredValidation(surnameFiled, surnameFiledError))
    {
     
        surnameFiled.after(surnameFiledError);
    }
    else {
       
        surnameFiledError.remove();
    }
});

//email
const emailField = document.querySelector("[name='email']");
const emailErrorField = document.querySelector("[name='email'] + .error");
emailField.addEventListener('input', () => {
    emailValidation(emailField, emailErrorField);
});

//password
const passwordFiled = document.querySelector("[name='password']");
const passwrodErrorField = document.querySelector("[name='password'] + .error");


passwordFiled.addEventListener('focusout', () => {
    passwordValidation(passwordFiled, passwrodErrorField);
});









const form = document.querySelector('form');
//Event subimit jest wywoływany gdy zostanie kliknięty przycisk
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //Wywołujemy funkcje walidującą formularz. Gdy jest poprawny wyświetlamy Sukces
    if (validForm()) {
        alert('Sukces');
    }
});

function validForm() {
     if (requiredValidation(nameField, nameErrorField) || minLengthValidation(nameField, nameErrorField, 2) || requiredValidation(surnameFiled, surnameFiledError) ||
        emailValidation(emailField, emailErrorField) || passwordValidation(passwordFiled, passwrodErrorField) || validConfirmPassword(confirmPasswordField, passwordFiled,confirmPasswordErrorField)) 
        {
         return false;
     }

    return true;
}



//val


function requiredValidation(field, errorField) {
   
    if (!field.value || field.value === '') {
        errorField.innerHTML = 'To pole jest wymagane';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}


function minLengthValidation(field, errorField, minLength = 0) {
    if (field.value.length < minLength) {
        errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}


function emailValidation(field, errorField) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (!emailRegex.test(field.value)) {
        errorField.innerHTML = 'Proszę podać poprawny adres e-mail.';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

//Funkcja sprawdzająca czy hasło spełnia wymagania. Znów wykorzystany jest regex. Regexy można znaleźć w internecie.
function passwordValidation(field, errorField) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;    
    if (!passwordRegex.test(field.value)) {
        errorField.innerHTML = 'Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

//Funckja sprawdzająca czy któreś pole typu radio zostało zaznaczone
function radioRequiredValidation(fields, errorField, errorMessage = '') {
    let result = false;

    fields.forEach(field => {
        result = field.checked || result;
    });

    errorField.innerHTML = result ? '' : errorMessage;

    return !result;
}


function maxLengthValidation(field, errorField, maxLength = 0) {
    if (field.value.length > maxLength) {
        errorField.innerHTML = `To pole musi mieć najwyżej ${maxLength} znaków`;
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

//Funckja sprawdzjąca wiek
function validAge(field, errorField) {
    //Data dzisiejsza
    const today = new Date();
    //Data wprowadzona w formularzu
    const date = new Date(field.value);

    //Obliczenie wieku
    var age = today.getFullYear() - date.getFullYear();
    var m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        //Odjęcie 1 roku jeśli data urodzin jeszcze nie nastąpiła
        age--;
    }

    errorField.innerHTML = age < 18 ? 'Musisz być pełnoletni' : '';

    return age < 18;
}


//Funkcja sprawdzająca czy hasło jest takie samo
function validConfirmPassword(confirmPasswordField, passwordField, errorField) {
    if (confirmPasswordField.value !== passwordField.value) {
        errorField.innerHTML = 'Hasła nie są takie same';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}