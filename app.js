function* oneToFour() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const array = [1, 2, 3];
// [...array]

const gen = oneToFour();
console.log(gen)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())