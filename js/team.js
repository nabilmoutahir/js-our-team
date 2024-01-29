const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// recupero elementi
const containerEl = document.getElementById('container');


//  ciclo for of per stampare membri
for (let teamMember of team) {
  // stampo nella console i membri
  console.log(teamMember);

  let memberHtml = ` 
  <div> 
    ${teamMember.name} <br> 
    ${teamMember.role} <br> 
    ${teamMember.image} <br> 
  </div> `;

  console.log(memberHtml);

  containerEl.innerHTML += memberHtml
}

