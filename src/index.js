class hero{
    constructor(nameHero, ageHero, typeHero){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
    }

    selectHero(){
        console.log(`\n Heroi selecionado  : ${this.nameHero}\n \n Idade do Heroi :${this.ageHero}\n \n Categoria do Heroi : ${this.typeHero} \n `)
    }

    actionHero(){
    
        if(this.typeHero === "Mago"){
            console.log(`${this.typeHero} atacou usando magia \n`)
        }else if(this.typeHero === "Guerreiro"){
            console.log(`${this.typeHero} atacou usando uma espada \n`)
        }else if(this.typeHero === "Monge"){
            console.log(`${this.typeHero} atacou usando artes marciais \n`)
        }else if(this.typeHero === "Ninja"){
            console.log(`${this.typeHero} atacou usando Shurikens \n`)
        }else{
            console.log("Typo de Heroi não reconhecido.\n Por favor utilize os Herois listados :\n Mago \n Guerreiro \n Monge \n Ninja \n")
        }

    }

    toString(){
        this.selectHero()
        this.actionHero()
    }


}
let heroMagic = new hero("Merlin", 60, "Mago")
let heroCombat =  new hero("Gladiador", 32, "Guerreiro")
let heroBuddhist = new hero("Shaolin", 42, "Monge")
let heroshinobi = new hero("Naruto", 17, "Ninja")
heroMagic.toString()
heroCombat.toString()
heroBuddhist.toString()
heroshinobi.toString()