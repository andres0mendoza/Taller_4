//Generators 

function * contar(num) {

    for (let i = 0; i < num; i++){

        yield console.log(i);

    }

}

const generator = contar(3);

generator.next(); //0

generator.next(); //1

generator.next(); //2


function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

var g = gen();
