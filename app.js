
let quantityPeople = prompt('Ingrese cuantas personas van a jugar');
let n = parseInt(quantityPeople);

//objeto almacené propiedades de:
//nombre de la persona que juega
//número ID dentro del juego (obtenido de fuction random)
//número ID de otra persona (distinto al propio)


for (i=0; i < n; i++) {
    let identify[i] = new Person;
    identify[i.name] = prompt('ingrese nombre');
   // if (getRandom(1,n) = person.id){
   //     getRandom(1,n)
   // };
    console.log(Person.name);
    console.log(Person.id);

}

function getRandom(min, max) {
    return Math.round (Math.random() * (max - min) + min);
}

function Person(name,id,giftId){
    this.name = name;
    this.id = id;
    this.giftId = giftId;
}
