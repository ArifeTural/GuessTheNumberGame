const yazilanYer = document.querySelector("#guess")
console.log(yazilanYer);
const button = document.querySelector("#guessSend")
console.log(button);
const attention = document.querySelector("#attention")
const sayilar = document.querySelector("#sayilar span")
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
    if(yazilanYer.value == ""){
        attention.textContent = "bir sayı giriniz"
        kalan++
    }
    else if( yazilanYer.value == random){
        attention.textContent = "Tebrikler doğru cevap" + random
        tekrar.style.display = "block"
        button.disabled = true
       
   }
   else if(yazilanYer.value > random){
    attention.textContent = "Yanlış cevap. Tahmininz sayıdan büyük. sayı: " + random
    tahminler.push(" "  + yazilanYer.value)
   }
   else if(yazilanYer.value < random){
    attention.textContent = "Yanlış cevap. Tahmininz sayıdan küçük. sayı: " + random
    tahminler.push(" "  + yazilanYer.value)
   }

  yazilanYer.focus()
})



