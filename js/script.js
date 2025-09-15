const prepositionData = {
  place: [
    { word: 'in', example: 'The ball is in the box.', image: 'images/in.png' },
    { word: 'on', example: 'The book is on the table.', image: 'images/on.png' },
    { word: 'at', example: 'He is waiting at the station.', image: 'images/at.png' },
    { word: 'under', example: 'The cat is under the chair.', image: 'images/under.png' },
    { word: 'above', example: 'The lamp is above the desk.', image: 'images/above.png' },
    { word: 'below', example: 'The shoes are below the shelf.', image: 'images/below.png' },
    { word: 'behind', example: 'The dog is behind the sofa.', image: 'images/behind.png' },
    { word: 'in front of', example: 'The car is in front of the house.', image: 'images/infrontof.png' },
    { word: 'near', example: 'The café is near the station.', image: 'images/near.png' },
    { word: 'beside', example: 'The phone is beside the notebook.', image: 'images/beside.png' }
  ],
  time: [
    { word: 'at', example: 'The meeting starts at 10 a.m.', image: 'images/at_on_in.png' },
    { word: 'on', example: 'She was born on Monday.', image: 'images/at_on_in.png' },
    { word: 'in', example: 'We’ll travel in December.', image: 'images/at_on_in.png' }
  ],
  direction: [
    { word: 'to', example: 'She walked to the park.', image: 'images/to.png' },
    { word: 'towards', example: 'He moved towards the door.', image: 'images/towards.png' },
    { word: 'from', example: 'She came from the kitchen.', image: 'images/from.png' },
    { word: 'against', example: 'The wind blew against the wall.', image: 'images/against.png' },
    { word: 'opposite', example: 'The bank is opposite the post office.', image: 'images/opposite.png' }
  ],
  movement: [
    { word: 'through', example: 'The train passed through the tunnel.', image: 'images/through.png' },
    { word: 'along', example: 'We walked along the river.', image: 'images/along.png' },
    { word: 'across', example: 'He ran across the field.', image: 'images/across.png' },
    { word: 'past', example: 'She drove past the school.', image: 'images/past.png' },
    { word: 'round/around', example: 'They walked round the park.', image: 'images/round_around.png' },
    { word: 'among', example: 'He stood among the crowd.', image: 'images/among.png' },
    { word: 'between', example: 'The shop is between the bank and the café.', image: 'images/between.png' }
  ]
};

function showPreposition(type) {
  const container = document.getElementById('preposition-list');
  const items = prepositionData[type].map(item => `
    <div class="preposition-item">
      <img src="${item.image}" alt="${item.word}" />
      <p><span class="highlight">${item.word}</span>: ${item.example}</p>
    </div>
  `).join('');
  container.innerHTML = items;
}