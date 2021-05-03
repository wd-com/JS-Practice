const textarea = document.querySelector('.textarea');
document.addEventListener('click', onclick);

onclick = (event) => {
    if (event.target.classList.contains('btn')) {
        textarea.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
    }
}
