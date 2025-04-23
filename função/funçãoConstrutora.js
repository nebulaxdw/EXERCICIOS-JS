function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let VelocidadeAtual = 0;
    this.acelerar = function(){
        if(VelocidadeAtual + delta <= velocidadeMaxima){
            velocidadeMaxima += delta;
        }else VelocidadeAtual = velocidadeMaxima;
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());