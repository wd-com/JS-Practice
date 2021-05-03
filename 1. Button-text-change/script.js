const btn = document.querySelector('.btn');
const btn_content = btn.innerHTML;

onclck = (event) => {
    if (!event.target.classList.contains('new')) {
        btn.innerHTML = 'New text';
        btn.classList.add('new');
    } else {
        btn.innerHTML = btn_content;
        btn.classList.remove('new');
    }
}

btn.addEventListener('click', onclck);
