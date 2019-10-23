console.log('Hello World!')

var student1_proba = {
    name: "Martyna",
    adress: "Sloneczna 12/4",
    studentIdNumber: "281038",
    profile: "Material Engineering",
    displayFullInfo: function () {

        // console.log('Imię ' + this.name + 'Adres ' + this.adress + 'Profil ' + this.studentIdNumber + 'Profil ' + this.profile);
        console.log(`Imię: ${this.name} Adres: ${this.adress}`);

    },
    ChangeId: function (argument) {

        this.studentIdNumber = argument.toString();

    }

}

var student2_proba = {
    name: "Jagoda",
    adress: "Wielkokacka 13/4",
    studentIdNumber: "950707",
    profile: "Law",
    displayFullInfo: function () {

        console.log(this.name, this.adress, this.studentIdNumber, this.profile);

    },
    ChangeId: function (argument) {

        this.studentIdNumber = argument.toString();

    }

}


// var studentsList = [];

// var student = {
//     name: '',
//     adress: '',
//     studentIdNumber: '',
//     profile: '',
//     setData: function (name, adress, IdNumber, profile) {

//         this.name = name;
//         this.adress = adress;
//         this.studentIdNumber = IdNumber.toString();
//         this.profile = profile;

//     },
//     displayFullInfo: function () {


//         console.log(`Imię: ${this.name} Adres: ${this.adress} NumerId: ${this.studentIdNumber} Profil: ${this.profile}`);

//     },
//     ChangeId: function (newId) {

//         this.studentIdNumber = newId.toString();

//     }

// }

// var student1 = Object.create(student);
// student1.setData("Marek", "Gdańsk", 2930, "Prawo");

// var student2 = Object.create(student);
// student2.setData("Ania", "Gdynia", 4590, "Medycyna");

// var student3 = Object.create(student);
// student3.setData("Joanna", "Warszawa", 3499, "Weterynaria");

// var student4 = Object.create(student);
// student4.setData("Martyna", "Sopot", 1240, "Filologia polska");

// var student5 = Object.create(student);
// student5.setData("Michał", "Wrocław", 9732, "Ekonomia");

// studentsList.push(student1, student2, student3, student4, student5);



// var o_count = document.querySelector('#display');

// var o_html = '';

// studentsList.map((element) =>{

// o_html+=`<div><div>${element.name}</div><div>${element.adress}</div> <div>${element.studentIdNumber}</div> <div>${element.profile} </div></div>`;

// });

// o_count.innerHTML = o_html;


function student(name, adress, id, profile) {
    this.name = name;
    this.adress = adress;
    this.studentIdNumber = id;
    this.profile = profile;
    this.displayFullInfo = function () {


        console.log(`Imię: ${name} Adres: ${adress} NumerId: ${id} Profil: ${profile}`);

    },
    this.ChangeId = function (newId) {

        this.studentIdNumber = newId.toString();

    }

}


var studentsList = [

new student ('Martyna', 'Gdynia', '3892', "Inżynieria materiałowa"),
new student ('Ania', 'Gdańsk', '2342', 'Medycyna'),
new student ('Marta', 'Sopot', '9201', 'Kosmetologia')


];


console.log(studentsList);
console.log(studentsList[1].displayFullInfo());
console.log(studentsList[2].ChangeId(5555));