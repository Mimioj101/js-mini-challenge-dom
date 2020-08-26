/***** Deliverable 1 *****/
/***** Deliverable 2 *****/

document.addEventListener("DOMContentLoaded", function(e) {

    const header = document.querySelector("#header")
    header.style.color = "red"


    // function sports() {
        PLAYERS.forEach(function(player) {
            const playerContainer = document.querySelector(".player-container")
            const div = document.createElement("div")
            div.className = "player"
            div.dataset.number = `${player.number}`
            
            const aPlayer =
            `<h3>${player.name} (<em>${player.nickname}</em>)</h3> 
            <img src="${player.photo}" alt="${player.name}">`

            div.innerHTML = aPlayer
            playerContainer.append(div)
        })
    
//    }

    const raheem = document.querySelector("[data-number='7']")
    raheem.remove()



    });


/***** Deliverable 3 *****/


/***** Deliverable 4 *****/