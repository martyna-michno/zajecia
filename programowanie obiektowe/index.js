console.log('Hello World!')

var student1 = {
    name: "Martyna",
    adress: "Sloneczna 12/4",
    studentIdNumber: "281038",
    profile: "Material Engineering",
    displayFullInfo: function() {

        // console.log('Imię ' + this.name + 'Adres ' + this.adress + 'Profil ' + this.studentIdNumber + 'Profil ' + this.profile);
        console.log(`Imię: ${this.name} Adres: ${this.adress}`);

    },
    ChangeId: function(argument) {

        this.studentIdNumber = argument.toString();

    }

}

var student2 = {
    name: "Jagoda",
    adress: "Wielkokacka 13/4",
    studentIdNumber: "950707",
    profile: "Law",
    displayFullInfo: function() {

        console.log(this.name, this.adress, this.studentIdNumber, this.profile);

    },
    ChangeId: function(argument) {

        this.studentIdNumber = argument.toString();

    }

}
