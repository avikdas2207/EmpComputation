class Empwage {

    RandomCheck = () => {

        let Random = Math.floor(Math.random() * 10) % 2 + 1;

        return Random;
    }


    AttCheck = () => {

        if(this.RandomCheck() == 1 ){
            console.log("Employee is Present");
        }
        else{
            console.log("Employee is  Absent")
        }
    }
}

module.exports = new Empwage();