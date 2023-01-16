let screen = document.querySelector("#sayac")
let buton = document.getElementById("btn")
buton.addEventListener("click",()=>{
    window.location.reload()
})
const click=()=>{
    let minute = 10;
   const x = setInterval(() => {
    screen.innerHTML = `<span> ${minute} </span>`;
     minute--;
    if (minute ==0) {
      clearInterval(x);
      screen.innerHTML = `<span> Let's Go! </span>`;
   } 
 }, 1000);
}
click()


