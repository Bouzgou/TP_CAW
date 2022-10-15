window.onload = function () {

    const boundaries = document.getElementsByClassName("boundary");

    for (let index = 0; index < boundaries.length; index++) {
        boundaries[index].addEventListener('mouseover', function handleMouseOver() {
            for (let j = 0; j < boundaries.length; j++) {
                boundaries[j].style.backgroundColor = "red";
            }
        });
    }

    const end = document.getElementById("end");
    const status = document.getElementById("status");

    end.addEventListener('mouseover', function handleMouseOver() {
        if (boundaries[0].style.backgroundColor == "red") {
            status.textContent = 'You lost';

        } else {
            status.textContent = 'You won';

        }

    });

    const start = document.getElementById("start");

    start.addEventListener("click", function handleMouseOver() {
        for (let j = 0; j < boundaries.length; j++) {
            boundaries[j].style.backgroundColor = "#eeeeee";
        }
        status.textContent = 'Move your mouse over the "S" to begin.';

    });
}