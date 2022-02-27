const allPlayers = () => {
    const searchValue = document.getElementById('search-input').value;
    /* This is also valid
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url) */
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`)
        .then(response => response.json())
        .then(data => displayPlayerDetails(data.player))
    // console.log(searchValue)
}

const displayPlayerDetails =(players) => {
    for(const player of players){
        const divContainer = document.getElementById('player-container');
        const div = document.createElement('div')
        div.innerHTML = `<div class="card px-5">
        <div class="pro-pic">
        <img class="w-50" src="${player.strThumb}" alt=""></div>
            <h1>Name:${player.strPlayer}</h1>
            <h4>Country:${player.strNationality}</h4>
            <p></p>
        <div class="allButton">
        <button class="btn-btn-danger">Delete</button>
        <button class="btn-btn-success" onclick="details('${player.idPlayer}')">Details</button>
      </div>
  </div>
        `;
        divContainer.appendChild(div)
        console.log(player)
    }
}

const details =(id)=>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    console.log(id)
     fetch(url)
        .then(response => response.json())
        .then(data => setDescription(data.players[0]))
}

const setDescription = (info) =>{
    const setDetails = document.getElementById('details-container')
     
        const div = document.createElement('div')
        div.innerHTML =`
        <img src="${info.strBanner}" alt="">
            <h1>Name:${info.strPlayer}</h1>
            <p>${info.strDescriptionEN}</p>
            <div>${info.strInstagram}</div>
        `;
        setDetails.appendChild(div)
   
    console.log(info)
}