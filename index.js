let date = new Date('Tue Oct 26 2022 16:48:37 GMT-0300')
let dateNow = new Date();
let miliSeconds =  date - dateNow;
console.log((((miliSeconds / 1000) / 60) / 60) / 24);
console.log(dateNow.getHours())