document.querySelectorAll('.day[data-project]').forEach(day => {
    const project = day.getAttribute('data-project');
    switch(project) {
        case 'fulterer':
            day.style.setProperty('--project-image', "url('fulterer.jpg')");
            break;
        case 'rapitrack':
            day.style.setProperty('--project-image', "url('rapitrack.png')");
            break;
        default:
            // No background image for projects not listed
            day.style.setProperty('--project-image', "none");
            break;
    }
});

document.querySelectorAll('.day[data-project]').forEach(day => {
    const project = day.getAttribute('data-project');
    if (project === 'fulterer') {
        day.classList.add('fulterer-project');
    } else if (project === 'rapitrack') {
        day.classList.add('rapitrack-project');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("Page started 🎯")
});
