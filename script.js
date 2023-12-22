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
let tracks = document.querySelector(".modal-body")
    function setAlbumCards(cards){
    console.log('Songs',cards)
    for(const card of cards){
        song.innerHTML += `
        <div class = "col-6 col-sm-6 col-md-4 col-lg-3"
        <div class="card">
        <img src="${card.album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body d-flex align-items-center flex-column py-2">
          <p class="card-text">${card.album.title}</p>
        </div>
      </div>
      </div>`

      tracks.innerHTML += `<div class="d-flex align-items-center">
      <div>
      <img src="${card.album.cover_small}" class="card-img-top" alt="...">
      </div>
      <p>${card.album.title}</p>
      </div>
      `
    }
 }