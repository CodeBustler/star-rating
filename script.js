// All Stars to NodeList
let stars = document.querySelectorAll(".stars i");

// Thank You Massage
let msg = document.querySelector("#msg");

// Loops through star NodeList
stars.forEach((star, index1) => {

    // Function when click events triggers
    star.addEventListener("click", () => {

        // Loop through stars NodeList again
        stars.forEach((star, index2) => {
            // Adding Color Stars
            if (index1 >= index2) {
                star.classList.add("color-star");
                msg.innerHTML = "Thank You "
            } else {
                star.classList.remove("color-star")
            }
        })
    })
})