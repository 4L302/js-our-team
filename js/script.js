/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

/*
NAME     SURNAME    ROLE                      IMAGE
Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
Scott    Estrada	Developer	              scott-estrada-developer.jpg
Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg
*/


{/* <div class="col">
    <div class="card">
        <div class="card-body">
            <div>Nome</div>
            <div>Surname</div>
            <div>Role</div>
        </div>
    </div>
</div> */}


//array membri del team
const team = [
    {
        nome: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-console.jpg'
    },
    {
        nome: 'Angela',
        surname: 'Carol',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter',
        surname: 'Gordon',
        role: 'Office Menager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Menager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

//stampa in console l'array di oggetti
/* for (let i = 0; i < team.length; i++){
    //console.log(team[i]);
    console.log('Nome: ' + team[i].nome);
    console.log('Surname: ' + team[i].surname);
    console.log('Role: ' + team[i].role);
} */

//visualizzo i dati delle schede
const row = document.querySelector('.row');
let rowHtml = '';
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const tpl = `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
        <div class="card">
            <img class="card-img-top" src="img/${member.image}" alt="${member.nome} ${member.surname}">
            <div class="card-body">
                <div>${member.nome}</div>
                <div>${member.surname}</div>
                <div>${member.role}</div>
            </div>
        </div>
    </div>`;
    rowHtml += tpl;
}
//console.log(rowHtml);
row.innerHTML = rowHtml