async function enAttente() {
  const reponseJSON = await fetch("users.json");
  const data = await reponseJSON.json();
  console.log(data);

  const userList = document.querySelector(".user-card-list");

  function injectData() {
    for (let i = 0; i < data.users.length; i++) {
      userList.innerHTML += `

      <div class="user-card-container">
        <div class="user-card-image-crop">
          <img src="${data.users[i].picture.large}" alt="Profile picture">
        </div>
      <div class="user-card-info">
      <p class="user-card-name">
      ${data.users[i].name.first} ${data.users[i].name.last}
      </p>
      <p class="user-card-position">${data.users[i].location.city}</p>
      <p class="user-card-details">
      ${data.users[i].job} - ${data.users[i].location.city} ${data.users[i].nat}
      </p>
      </div>
      <div class="user-card-cta"><span class="material-symbols-rounded">
      send
      </span></div>
      </div>`;
    }
  }

  injectData();
}

enAttente();
// Filter feature

// Get search bar
let filterInput = document.querySelector(".search-bar");
console.log("BARRE DE RECHERCHE");
console.log(filterInput);
// Add event listener
filterInput.addEventListener("keyup", filterUsers);
// Get search value
function filterUsers() {
  let filterValue = filterInput.value.toUpperCase();
  console.log("VALUR INPUT");
  console.log(filterValue);
  // Get all cards
  let userCards = document.querySelectorAll(".user-card-container");
  console.log("USERS CARDS");
  console.log(userCards);
  let userName = document.querySelectorAll(".user-card-name");
  console.log("USERNAME");

  for (let i = 0; i < userCards.length; i++) {
    console.log(userName[i]);

    if (userName[i].value.toUpperCase().indexOf(filterValue) > -1) {
      userCards[i].style.display = "";
    } else {
      userCards[i].style.display = none;
    }
  }
}
