class Person {
    constructor(name, adress, id, age) {

        this.name = name;
        this.adress = adress;
        this.id = id.toString();
        this.age = age.toString();

    }

    //metoda jest dostepna w klasie, wiec jak dziedziczy to razem z metoda - mimo ze nie jest w konstruktorze, to nie ma to znaczenia - jest w klasie!
    // metody robię poza konstruktorem 

    changeId(newId) {

        this.id = newId.toString();

    }

    displayFullInfo() {

        console.log('Imię: ' + this.name + ', Adres: ' + this.adress + ', Id: ' + this.id + ', Wiek: ' + this.age + ', Rola: ' + this.role);

    }

}

class Student extends Person {
    constructor(name, adress, id, age) {

        super(name, adress, id, age);
        this.role = 'student';

    }

}

class Teacher extends Person {
    constructor(name, adress, id, age) {

        super(name, adress, id, age);
        this.role = 'nauczyciel';

    }

}

var students = [
    new Student("Kamila", "Gdansk", 2302, 21),
    new Student("Ania", "Gdynia", 3445, 22),
    new Student("Jagoda", "Sopot", 2125, 23),
    new Student("Martyna", "Wejherowo", 9885, 20)
]


var teachers = [
    new Teacher("Andrzej", "Warszawa", 3403, 34),
    new Teacher("Tomek", "Kraków", 6421, 45),
    new Teacher("Michał", "Wrocław", 9821, 29),
    new Teacher("Maciek", "Poznań", 4421, 35)
]