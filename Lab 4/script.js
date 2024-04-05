

function myFunction() {
    const popup = document.querySelector(".cubes");
    popup.classList.toggle("show");
  }

  function Book(Name, Age, Author) {
    this.Name = Name;
    this.Age = Age;
    this.Author = Author;
   }
    function BookFun(bok) {
    console.log(bok.Name + " " + bok.Author + " " + bok.Age);
    };
   const books = new Book("Name", "2004", "My");
   BookFun(books)

   
   function Person(Name, age ,Matematyka ,Informatyka ,wf) {
    this.Name = Name;
    this.age = age;
    this.Matematyka = Matematyka;
    this.Informatyka = Informatyka;
    this.wf = wf;
    this.fullName = function() {
        const srednia = this.Matematyka + this.Informatyka + this.wf 
    return this.Name + " " + this.age + " Ocena sred.:" + srednia / 3;
    };
   }
   const john = new Person("John", 30 , 4, 4, 4);

console.log(john.fullName()); 


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

console.log(car.fullName()); 
console.log(car.speeds(20)); 
console.log(car.info('color')); 
