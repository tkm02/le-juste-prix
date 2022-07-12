// Etape 1 - Sélectionner nos éléments


let input = document.querySelector(".information");
let error = document.querySelector(".error");
let formulaire = document.querySelector(".formulaire");
let coups =0;
let nombreChoisi;



// Etape 2 - Cacher l'erreur

error.style.display = 'none';


// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random()*1001);


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup",()=>{
  if(isNaN(input.value)){
    error.style.display = 'block';
  }
  else{
    error.style.display = 'none'
  }
});


// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit',(e)=>{
      e.preventDefault()
      if(isNaN(input.value) || input.value == ""){
        input.style.borderColor='red';
      }
      else{
          coups++;
          input.style.borderColor='silver';
          nombreChoisi = input.value;
          input.value ="";
          verifier(nombreChoisi);
      }
    });

// Etape 6 - Créer la fonction vérifier

function verifier(nombre){
  let instruction = document.createElement('div');
  if( nombre < nombreAleatoire){
    instruction.textContent= '#' + coups +"( " + nombre +" )  + c'est plus !";
    instruction.classList = 'instruction plus';
    
  }
  else if( nombre > nombreAleatoire){
    instruction.textContent= '#' + coups +"( " + nombre +" )  + c'est moins !";
    instruction.classList = 'instruction moins';
      
  }
  else{

    instruction.textContent= '#' + coups +"( " + nombre +" )  + Félicitations vous avez trouvé le juste prix !";
    instruction.classList ='instruction fini';
    input.disabled=true;


      
  };
    
  document.querySelector('#instructions').prepend(instruction);

}

console.log(nombreAleatoire);



