document.addEventListener('DOMContentLoaded', function () {
    const timelineData = [
        { year: "2022 - Present", company: "Company A", role: "Developer" },
        { year: "2020 - 2022", company: "Company B", role: "Junior Developer" }
    ];

    const timeline = document.getElementById('timeline');
    timelineData.forEach(item => {
        const entry = document.createElement('div');
        entry.innerHTML = `<strong>${item.year}</strong>: ${item.company} - ${item.role}`;
        entry.classList.add('timeline-entry');
        timeline.appendChild(entry);
    });
});
