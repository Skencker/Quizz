//je recupère le formulaire
const form = document.querySelector(".form-quizz");
//je creer un tableau vide pour pouvoir y mettre les reponses de l'utilisateurs
let tableauReponses = [];
const solutions = ["c", "a", "b", "a", "c"];
//tableau de bonne et mauvaise reponse
let tableauVerif = [];

//recuperer le resultat pour lui ajouter le resultat
let resultat = document.querySelector(".resultat h2");
let note = document.querySelector(".note");
let aide = document.querySelector(".aide");

let box = document.querySelectorAll(".question");


//j'ajoute un even au formulaire quand submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(document.querySelector('input[name="q1"]:checked').value)

  //je recupère les value de tout les inputs du form que j'ajout au tableau des réponses
for (let i = 1; i < 6; i++) {
    tableauReponses.push(
      document.querySelectorAll(`input[name="q${i}"]:checked`)[0].value
    );
  }
  // je compare les réponses
  comparaison(tableauReponses);
  // je rinitialise le tableau à zero après chaque soumissions
  tableauReponses = [];
});

//comparaison des réponses avec la solution
function comparaison(tableauReponses) {
  // je boucle sur le tableau des réponses pour pouvoir les comparer
  for (let i = 0; i < 5; i++) {
    if (tableauReponses[i] !== solutions[i]) {
      //ajout faux au tableau de verif
      tableauVerif.push("faux");
    } else {
      tableauVerif.push("vrai");

    }
  }

  //compte le nombre de faux
  let score = tableauVerif.filter((el) => el !== "vrai").length;


  afficheResultat(score);
  color(tableauVerif);
  // vide le tabeleau après chaque boucle
  tableauVerif = [];

}

//affiche le resultat suivant le nombre de faux
function afficheResultat(e) {
  switch (e) {
    case 0:
      resultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`;
      aide.innerText = "";
      note.innerText = "5/5";
      break;
    case 1:
      resultat.innerText = `✨ Vous y êtes presque ! ✨`;
      aide.innerText =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      note.innerText = "4/5";
      break;
    case 2:
      resultat.innerText = `✨ Encore un effort ... 👀`;
      aide.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      note.innerText = "3/5";
      break;
    case 3:
      resultat.innerText = `👀 Il reste quelques erreurs. 😭`;
      aide.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      note.innerText = "2/5";
      break;
    case 4:
      resultat.innerText = `😭 Peux mieux faire ! 😭`;
      aide.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      note.innerText = "1/5";
      break;
    case 5:
      resultat.innerText = `👎 Peux mieux faire ! 👎`;
      aide.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      note.innerText = "0/5";
      break;
    default:
      "cas inattendu";
  }
}
//couleur suivant la réponse
function color(tableauVerif) {
  for (i = 0; i < 5; i++) {
    if (tableauVerif[i] === 'faux') {
      box[i].className = "question red echec";
    } else  {
      box[i].className = "question green";
    }
  }
}
