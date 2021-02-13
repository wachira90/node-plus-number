var sum = 0;
// two euros fifty-five cents
var amount = 2.55;
for (let i = 0; i < 100000; i++) {
    sum += amount;
}
console.log(sum);