let screen = document.querySelector("#sayac")

const click=()=>{
    

  
   let minute =
   10;
   const x = setInterval(() => {
    screen.innerHTML = `<span> ${minute} </span>`;
     minute--;
    if (minute ==0) {
      clearInterval(x);
      screen.innerHTML = `<span> Let's Go! </span>`;
      
      

    } 
    if(minute==0){
        
    }

   
   }, 1000);
}
click()

