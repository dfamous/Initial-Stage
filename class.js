class car{
    constructor(name, model, year){
        this.carName = name;
        this.carModel = model;
        this.carYear = year;
    
    }
    getInfo(){
        return console.log(`the available car is ${this.carName} the model is ${this.carModel} and the year is ${this.carYear}`)
    }
}


    




var car1 = new car("Audi", "Camry", 1990)
var car2 = new car("Toyota", "Corolla", 2010)
var car3 = new car("Honda", "Crv", 2014)
var car4 = new car("Nissan", "Murano", 2016)

car4.getInfo()


class Person extends car{
    constructor(surname, gender, name, model, year){
        super(name, model, year)
        this.surname = surname;
        this.gender = gender;
    

    }
    thatInfo(){
        return console.log(`my name is ${this.surname} gender ${this.gender} and i drive${this.name} ${this.model} and ${this.year} is the year`)
    }
}

var Person1 = new Person("Adekunle", "Male ", " BMW ", "x5", "2015 ")
Person1.thatInfo()