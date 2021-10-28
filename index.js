// setInterval(() => {
//     let dateNow = new Date();
//     console.log(dateNow)
// }, 1000);

// setInterval(function(){ alert("Hello"); }, 3000);

// setTimeout(()=>{
//      alert("Hello"); 
//     }, 3000);

const getTimeNow = () => {
    let timePomodorMinutes = new Date().getMinutes();
    let timePomodorhours = new Date().getHours();
    let timePomodorSeconds = new Date().getSeconds();
    let timeNow = `${timePomodorhours} : ${timePomodorMinutes} : ${timePomodorSeconds} `;
    return timeNow;
}

const timePomoAddMinutes = () => {
    let timeAddMinutes = new Date()                 
}

setInterval(() => {
    // let timePomodoro = getTimeNow()
    console.log(getTimeNow()); 
}, 1000);
