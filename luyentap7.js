let money=+prompt("Nhập số tiền bạn gửi:");
let month=+prompt("Nhập số tháng bạn gửi");
let interest=+prompt("Nhập lãi xuất:")
let profit= (money*month*interest)/100;
let total= profit+money;
console.log("Tiền lãi:",profit);
console.log("Tiền nhận được",total);