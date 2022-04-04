function appendChord(chord){
  let list = document.createElement("li")
  list.className = "strums"
  list.innerHTML = `
  <h2>${chord.name}</h2>
  <img src = "${chord.image}">
  <div class = "button">
    <button> Listen </button>
  </div>
  `
  document.querySelector('#chord-content').appendChild(list)
}

// document.addEventListener('click', () => {
//   event.target.
// })

function getChords(){
  fetch('http://localhost:3000/chords')
  .then(res=>res.json())
  .then(chords => chords.forEach(chord => appendChord(chord)))
}

getChords()