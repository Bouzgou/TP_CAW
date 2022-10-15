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
    // const status = document.getElementById("status");

    end.addEventListener('mouseover', function handleMouseOver() {
        if (boundaries[0].style.backgroundColor == "red") {
            // status.textContent = 'You lost';
            alert("you lost");

        } else {
            // status.textContent = 'You won';
            alert("you won");

        }

    });

}