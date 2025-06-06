//função em JS e First-Class Object(Citizens)
//Higher-order function

//criar de forma literal
function fun1(){

}
//Armazenar em uma variável
const fun2 = function() {}

//Armazenar em um array
const array = [function(a,b) {return a + b}, fun1, fun2];
console.log(array[0](2,3));

//Armazenar em um atributo de objeto
const obj = {};
obj.falar = function(){return 'Opa'};

//Passar função como param
function run(fun){
    fun()
}

run(function (){console.log('Executando...')});

function soma(a, b){
    return function(c){
        console.log()
    }
}
