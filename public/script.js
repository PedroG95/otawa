
class Hero {
  constructor(name){
    this.name = name
    this.lifePoints = 100
    this.strenght = 15
    this.armour = 8
    this.magicResistance = 10
  }

  salute() {
    let text = document.getElementById('phrases')
    return text.innerText = 'Hey stranger, im ' + this.name + ', who are you?'
  }

  joke() {
    console.log('Knock, knock! Who’s there? Abe. Abe who? Abe CDEFJH...')
  }

  taunt() {
    console.log('You better get out of here...')
  }

}

let pietro = new Hero('Pietro')

pietro.salute()
