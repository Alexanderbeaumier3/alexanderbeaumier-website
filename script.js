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
    // Example: Dynamically add projects if needed
    const projectsContainer = document.querySelector('.projects-container');

    // Imagine you fetch these details from an API or your database
    const projects = [
        { title: 'Dynamic Project 1', description: 'This is a dynamically added project.', githubLink: 'https://github.com/yourusername/dynamicproject1' },
        { title: 'Dynamic Project 2', description: 'This project is also added dynamically.', githubLink: 'https://github.com/yourusername/dynamicproject2' }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank">View on GitHub</a>
        `;
        projectsContainer.appendChild(projectDiv);
    });
});
