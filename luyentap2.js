let odd = 0;
let even = 0;
for (let i = 0; i < 5; i++) {
    let nbr = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
    if (nbr % 2 !== 0) {
        odd++;
    }
    if (nbr % 2 === 0) {
        even++;
    }
}
console.log("Số lượng số lẻ trong các số đã nhập là:", odd);
console.log("Số lượng số chẵn trong các số đã nhập là:", even);