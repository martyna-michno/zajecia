console.log('Hello World!')




var Student1 = {
    name: "Martyna",
    adress: "Sloneczna 12/4",
    studentIdNumber: 281038,
    profile: "Material Engineering",
    DisplayFullInfo: function () {

        console.log(this.name, this.adress, this.studentIdNumber, this.profile);

    },
    ChangeId: function (argument) {

        this.studentIdNumber = argument;

    }

}

var Student2 = {
    name: "Jagoda",
    adress: "Wielkokacka 13/4",
    studentIdNumber: 950707,
    profile: "Law",
    DisplayFullInfo: function () {

        console.log(this.name, this.adress, this.studentIdNumber, this.profile);

    },
    ChangeId: function (argument) {

        this.studentIdNumber = argument;

    }

}