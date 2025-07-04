//ESB: Object.values//Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

const nome = 'Carla';
const pessoa = {
    nome,
    ola(){
        return `Oi gente! Prazer. ${nome}`
    }
}
console.log(pessoa.ola())

class Animal{};
class Cachorro extends Animal{
    falar(){
        return 'Au au';
    }
}

console.log(new Cachorro().falar());