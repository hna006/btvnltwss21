let sum = 0;
for (let i = 0; i < 5; i++) {
    let nbr = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
    if (nbr % 2 !== 0) {
        sum += nbr;
    }
}
console.log("Tổng các số lẻ trong các số đã nhập là:", sum);