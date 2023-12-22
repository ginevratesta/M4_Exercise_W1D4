fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
.then(res => res.json())
.then(data => {
    const albums = data.data
    setAlbumCards(albums)
})
.catch(error => {
    console.error('Error fetching data:', error);
  });
    
let song = document.querySelector("#card-container")
    function setAlbumCards(cards){
    console.log('Songs',cards)
    for(const card of cards){
        song.innerHTML += `
        <div class = "col-3"
        <div class="card">
        <img src="${card.album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body d-flex justify-content-center py-2">
          <p class="card-text">${card.album.title}</p>
        </div>
      </div>
      </div>`
    }
 }