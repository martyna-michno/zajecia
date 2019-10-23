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



var studentslist = [];

var student = {
    name: '',
    setName = function (name) {

        this.name = name
    },
    adress: '',
    setAdress = function (adress) {

        this.adress = adress;
    },
    studentIdNumber: '',
    setId = function (IdNumber) {

        this.studentIdNumber = IdNumber.toString();

    },
    profile: '',
    setProfile = function (profile) {

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
student1.setName("Jan").setAdress("Gdansk").setId(123).setProfile("Medical student");