const yazilanYer = document.querySelector("#guess")
const button = document.querySelector("#guessSend")
const tekrar = document.querySelector("#tekrar")


tekrar.addEventListener("click", function() {
    location.reload();
});





function rasgele(min,max){
    let sayi = Math.ceil(Math.random()* (max - min));
    return sayi 
}
let random
random = rasgele(0,100)

button.addEventListener("click",() => {

if( yazilanYer.value === random){
        attention.textContent = "Tebrikler doğru cevap :" + random
        tekrar.style.display = "block"
        button.disabled = true
       
   }
   else if(yazilanYer.value > random){
    attention.textContent = "Yanlış cevap. Tahmininz sayıdan büyük. sayı: " + random
   
   }
   else if(yazilanYer.value < random){
    attention.textContent = "Yanlış cevap. Tahmininz sayıdan küçük. sayı: " + random
    
   }
  yazilanYer.focus()
})



