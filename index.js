// setInterval(() => {
//     let dateNow = new Date();
//     console.log(dateNow)
// }, 1000);

// setInterval(function(){ alert("Hello"); }, 3000);

// setTimeout(()=>{
//      alert("Hello"); 
//     }, 3000);

const getTimeNow = () => {
    let timeUse = new Date();
    // timeUse = timeUse - 1000;
    let timePomodorMinutes = timeUse.getMinutes();
    let timePomodorSeconds = timeUse.getSeconds();
    // console.log(timeUse);
    console.log(timeUse);
    let timeNow = `${timePomodorMinutes} : ${timePomodorSeconds} `;
    return timeNow;
}


// setInterval(() => {
//     // let timePomodoro = getTimeNow()
//     console.log(getTimeNow()); 
// }, 1000);


// for(let i = 60; i > 0; i = i - 1){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);          
// }

let i = 60;
while(i > 0) {
        console.log(i)        
    i--;
}
