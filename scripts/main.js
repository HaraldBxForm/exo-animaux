// ==============================
// 🌱 Sélection des éléments
// ==============================
const nexDayButton = document.querySelector(`.next-day-button`)
// ==============================
// 🌱 Classes
// ==============================

// Classe globale "ANIMAL"
class Animal {

  #name;
  #weight;
  #gender;
  #age;
  #humanAgeRatio
  #arrivalDate;
  #alive;
  #mortality;
  
  constructor(name, weight, gender, age, arrivalDate, humanAgeRatio = 1, mortality = 0) {
    this.#name = name;
    this.#weight = weight;
    this.#gender = gender;
    this.#age = age;
    this.#humanAgeRatio = humanAgeRatio;
    this.#arrivalDate = arrivalDate;
    this.#alive = true;
    this.#mortality = mortality;
  }

  // Get
  get name() {
    return this.#name;
  }

  get weight() {
    return this.#weight;
  }

  get gender() {
    return this.#gender;
  }

  get age() {
    return this.#age;
  }

  get humanAgeEquivalent() {
    return this.#age * this.#humanAgeRatio;
  }

  get arrivalDate() {
    return this.#arrivalDate;
  }

  get alive() {
    return this.#alive;
  }

  get mortality() {
    return this.#mortality;
  }

  // Set
  set alive(value) {
    return this.#alive = value;
  }

  // Methodes
  scream() {
    return console.log(`${this.#name} crie !`);
  }

  die() {
    return this.#alive = false;
  }

  randomDie() {
    let number = Math.random()*100;

    if (number > this.#mortality) {
      return
    }

    else {
      this.#alive = false;
    }
  }
}

// Classe "CAT"
class Cat extends Animal {

  #character;
  #claws;
  #hair;

  constructor(name, weight, gender, age, arrivalDate, character, claws, hair) {
    super(name, weight, gender, age, arrivalDate, 3, 0.5);
    this.#character = character;
    this.#claws = claws;
    this.#hair = hair;
  }

  // Get
  get character() {
    return this.#character;
  }

  get claws() {
    return this.#claws;
  }

  get hair() {
    return this.#hair;
  }

}

// Classe "DOG"
class Dog extends Animal {

  #collarColor;
  #trained;
  #race;

  constructor(name, weight, gender, age, arrivalDate, collarColor, trained, race) {
    super(name, weight, gender, age, arrivalDate, 7, 1);
    this.#collarColor = collarColor;
    this.#trained = trained;
    this.#race = race;
  }

  // Get
  get collarColor() {
    return this.#collarColor;
  }

  get trained() {
    return this.#trained;
  }

  get race() {
    return this.#race;
  }

}

// Classe "BIRD"
class Bird extends Animal {

  #color;
  #lifeConditions;

  constructor(name, weight, gender, age, arrivalDate, color, lifeConditions) {
    super(name, weight, gender, age, arrivalDate, 0, 3);
    this.#color = color;
    this.#lifeConditions = lifeConditions;
  }

  // Get
  get color() {
    return this.#color;
  }

  get lifeConditions() {
    return this.#lifeConditions;
  }

}

// Classe "PET STORE"
class PetStore {
  #name;
  #animalsList;
  #date;

  constructor(name, date) {
    this.#name = name;
    this.#animalsList = [];
    this.#date = date;
  }

  // Get
  get name() {
    return this.#name;
  }

  get animalsList() {
    return this.#animalsList;
  }

  get date() {
    return this.#date;
  }

  // Set
  set date(value) {
    return (this.#date = value);
  }

  // Methodes
  addAnimalToAnimalsList(animal) {
    return this.#animalsList.push(animal);
  }

  checkAlive() {
    this.#animalsList.forEach((animal, index) => {
      if (animal.alive === false) {
        this.#animalsList.splice(index, 1);
        return `${animal.name} est mort`;
      }

      return `Tous les animaux sont vivants`;
    });
  }

  filterByType(type) {
    const filteredList = this.#animalsList.filter((animal) => animal instanceof type);
    return filteredList;
  }

  nextDay() {
    return this.#date.setDate(this.#date.getDate() + 1);
  }

  runADay() {
    this.#animalsList.forEach((animal) => {
      animal.randomDie();
    });

    this.checkAlive();

    return this.#animalsList;
  }
}

// ==============================
// 🎊 Fonctionnalités
// ==============================


// ==============================
// 🧲 Événements
// ==============================


const today = new Date();

// Création de l'animalerie
const AnimalsParadise = new PetStore(`Animal's Paradise`, today);
console.log(AnimalsParadise);

// Création des animaux | Test

AnimalsParadise.addAnimalToAnimalsList(new Dog(`Merlin`, 35, `male`, 3, today, `red`, true, `Golden Retriever`));
AnimalsParadise.addAnimalToAnimalsList(new Dog(`Milton`, 15, `male`, 3, today, `red`, false, `Corgi`));
AnimalsParadise.addAnimalToAnimalsList(new Dog(`Bella`, 20, `female`, 4, today, `black`, true, `Labrador`));
AnimalsParadise.addAnimalToAnimalsList(new Dog(`Thor`, 40, `male`, 6, today, `gray`, true, `Husky`));
AnimalsParadise.addAnimalToAnimalsList(new Dog(`Luna`, 18, `female`, 2, today, `white`, false, `Shih Tzu`));
AnimalsParadise.addAnimalToAnimalsList(new Dog(`Rocky`, 25, `male`, 5, today, `brown`, true, `Boxer`));


AnimalsParadise.addAnimalToAnimalsList(new Cat(`Georges`, 3, `male`, 10, today, `evil`, `long`, `long`));
AnimalsParadise.addAnimalToAnimalsList(new Cat(`Maïa`, 2, `female`, 6, today, `friendly`, `short`, `short`));
AnimalsParadise.addAnimalToAnimalsList(new Cat(`Salem`, 4, `male`, 8, today, `grumpy`, `short`, `long`));
AnimalsParadise.addAnimalToAnimalsList(new Cat(`Mimi`, 3, `female`, 7, today, `curious`, `long`, `short`));
AnimalsParadise.addAnimalToAnimalsList(new Cat(`Félix`, 5, `male`, 9, today, `calm`, `short`, `short`));
AnimalsParadise.addAnimalToAnimalsList(new Cat(`Choupette`, 2, `female`, 6, today, `playful`, `long`, `long`));

AnimalsParadise.addAnimalToAnimalsList(new Bird(`PiouPiou`, 0.2, `male`, 1, today, `brown`, `cage`));
AnimalsParadise.addAnimalToAnimalsList(new Bird(`Léa`, 0.3, `female`, 2, today, `white`, `aviary`));
AnimalsParadise.addAnimalToAnimalsList(new Bird(`Titi`, 0.25, `male`, 1, today, `yellow`, `cage`));
AnimalsParadise.addAnimalToAnimalsList(new Bird(`Coco`, 0.4, `male`, 3, today, `green`, `aviary`));
AnimalsParadise.addAnimalToAnimalsList(new Bird(`Perla`, 0.3, `female`, 2, today, `blue`, `aviary`));
AnimalsParadise.addAnimalToAnimalsList(new Bird(`Zazu`, 0.5, `male`, 4, today, `multicolor`, `cage`));

console.log(AnimalsParadise.animalsList);


// Test 1 day
nexDayButton.addEventListener(`click`, (e) => {
  e.preventDefault();

  AnimalsParadise.runADay();
  console.log(AnimalsParadise.animalsList);
  AnimalsParadise.nextDay();
  console.log(AnimalsParadise.date);

})



