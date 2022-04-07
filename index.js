function appendChord(chord){
  let list = document.createElement("li")
  list.innerHTML = `
  <div class="insert">
    <h2>${chord.name}</h2>
    <img src = "${chord.image}">
    <div class = "button">
      <button id="${chord.idName}"> Listen </button>
    </div>
  </div>
  `
  document.querySelector('#chord-content').appendChild(list)
}

document.addEventListener('click', () => {
  if(event.target === document.querySelector('#g-chord')){
    const gAud = new Audio("C:/Users/AJ/OneDrive/Documents/sounds/Chord-G.m4a")
    gAud.play()
  }
  else if(event.target === document.querySelector('#c-chord')){
    const cAud = new Audio("C:/Users/AJ/OneDrive/Documents/sounds/Chord-C.m4a")
    cAud.play()
  }
  else if(event.target === document.querySelector('#d-chord')){
    const dAud = new Audio("C:/Users/AJ/OneDrive/Documents/sounds/Chord-D.m4a")
    dAud.volume = 0.5
    dAud.play()
  }
  else if(event.target === document.querySelector('#e-chord')){
    const eAud = new Audio("C:/Users/AJ/OneDrive/Documents/sounds/Chord-Em.m4a")
    eAud.volume = 0.4
    eAud.play()
  }
})



function getChords(){
  fetch('http://localhost:3000/chords')
  .then(res=>res.json())
  .then(chords => chords.forEach(chord => appendChord(chord)))
}

getChords()