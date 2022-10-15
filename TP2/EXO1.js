window.onload = function () {
    const boundary = document.getElementById("boundary1");

    boundary.addEventListener('mouseover', function handleMouseOver() {
        boundary.style.backgroundColor = 'red';
    });
}