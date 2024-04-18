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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('project-form');
    const projectsContainer = document.querySelector('.projects-container');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;
        const link = document.getElementById('project-link').value;

        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank">View on GitHub</a>
        `;
        projectsContainer.appendChild(projectDiv);

        // Clear form fields after submission
        document.getElementById('project-title').value = '';
        document.getElementById('project-description').value = '';
        document.getElementById('project-link').value = '';
    });
});

