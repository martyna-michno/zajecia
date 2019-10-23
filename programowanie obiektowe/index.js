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


// var student = {
//     name: '',
//     setName: function (name) {

//         this.name = name
//     },
//     adress: '',
//     setAdress: function (adress) {

//         this.adress = adress;
//     },
//     studentIdNumber: '',
//     setId: function (IdNumber) {

//         this.studentIdNumber = IdNumber.toString();

//     },
//     profile: '',
//     setProfile: function (profile) {

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
// student1.setName("Jan");
// student1.setAdress("Gdansk");
// student1.setId(123);
// student1.setProfile("Medical student");


var studentsList = [];

var student = {
    name: '',
    adress: '',
    studentIdNumber: '',
    profile: '',
    setData: function (name, adress, IdNumber, profile) {

        this.name = name;
        this.adress = adress;
        this.studentIdNumber = IdNumber;
        this.profile = profile;

    },
    displayFullInfo: function () {


        console.log(`Imię: ${this.name} Adres: ${this.adress} NumerId: ${this.studentIdNumber} Profil: ${this.profile}`);

    },
    ChangeId: function (newId) {

        this.studentIdNumber = newId.toString();

    }

}

var student1 = Object.create(student);
student1.setData("Marek", "Gdańsk", "2930", "Law");

var student2 = Object.create(student);
student2.setData("Ania", "Gdynia", "4590", "Medicine");

var student3 = Object.create(student);
student3.setData("Joanna", "Warszawa", "3499", "Businnes");

var student4 = Object.create(student);
student4.setData("Martyna", "Sopot", "1240", "Sport");

studentsList.push(student1, student2, student3, student4);