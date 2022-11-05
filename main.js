function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1} l" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bardeira da ${player2}" />
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = +0.4
  return `
        <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}


document.getElementById("color").onclick = function () {
  var body = document.getElementsByTagName("body")[0]
  var color = body.getAttribute("class")

  if (color === "yellow") {
    body.classList.remove("yellow")
    body.classList.add("blue")
  } else if (color === "blue") {
    body.classList.remove("blue")
    body.classList.add("green")
  } else if (color === "green") {
    body.classList.remove("green")
    body.classList.add("red")
  } else if (color === "red") {
    body.classList.remove("red")
    body.classList.add("yellow")
  }
}


document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "ghana") +
      createGame("uruguay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "cameroon") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("brazil", "16:00", "cameroon")
  )
