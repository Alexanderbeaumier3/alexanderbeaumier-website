document.addEventListener('DOMContentLoaded', function() {
    const headshot = document.querySelector('.headshot');
    const name = document.getElementById('name');

    headshot.addEventListener('mouseenter', function() {
        headshot.classList.add('hovered');
        name.classList.add('highlight');
    });

    headshot.addEventListener('mouseleave', function() {
        headshot.classList.remove('hovered');
        name.classList.remove('highlight');
    });
});
