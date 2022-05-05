//Je sélectionne et je stocke
//l'icône burger
const icone = document.querySelector(".navbar-mobile i");
console.log(icone);
//la div modal
const modal = document.querySelector(".modal");
console.log(modal);
icone.addEventListener("click", function(){
    console.log("icone cliquée");
});
icone.addEventListener("click",function(){
    console.log("icone cliquée");
    modal.classList.toggle("change-modal");
});
//fa-times
icone.classList.toggle("fa-times");