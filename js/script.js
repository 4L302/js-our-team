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
        role: 'Founder & CEO'
    },
    {
        nome: 'Angela',
        surname: 'Carol',
        role: 'Chief Editor'
    },
    {
        nome: 'Walter',
        surname: 'Gordon',
        role: 'Office Menager'
    },
    {
        nome: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Menager'
    },
    {
        nome: 'Scott',
        surname: 'Estrada',
        role: 'Developer'
    },
    {
        nome: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer'
    },
];

//stampa in console dell'array di oggetti
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
    <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
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