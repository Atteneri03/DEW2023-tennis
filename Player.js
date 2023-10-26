class Player {
    name;
    ranking;
    #gender;
    dateOfBirth;

    constructor(name,ranking=0,gender = "female", dateOfBirth){
        this.name = name;
        this.ranking = ranking;

        if(gender=="male") this.#gender = "male";
        else this.#gender = "female";

        if(dateOfBirth){
        let [d,m,y] = dateOfBirth.split("/");
            if(!isNaN(new Date(y,m-1,d))){
                this.dateOfBirth = dateOfBirth;
            }
        }
    }

    get gender() { return this.#gender; }

    get age(){
        if(!this.dateOfBirth) return undefined;
        let now = new Date();
        let [d,m,y] = this.dateOfBirth.split("/");
        let date = new Date(y,m-1,d);
        let diff = now.getFullYear() - date.getFullYear();
        if(now.getMonth() < date.getMonth()) diff--;
        if(now.getMonth() == date.getMonth() && now.getDay() < date.getDay()) diff--;

        return diff;
    }

    get category(){
        if(this.age < 12) return "Benjamin";
        if(this.age <= 15 ) return "Cadet";
        if(this.age <= 19 ) return "Junior";
        return "Senior";

    }


}

module.exports = Player;

//Esto son pruebas (ELIMINAR A PARTIR DE AQUI)

// let player1 = new Player("Juan");
// console.log(player1);