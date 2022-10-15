window.onload = function () {
    const boundaries = document.getElementsByClassName("boundary");

    for (let index = 0; index < boundaries.length; index++) {
        boundaries[index].addEventListener('mouseover', function handleMouseOver() {
            for (let j = 0; j < boundaries.length; j++) {
                boundaries[j].style.backgroundColor = "red";
            }
        });
    }

}