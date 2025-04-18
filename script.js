function showProjectDetails(projectId) {
    // Hide all project sections
    const projectsSection = document.getElementById('projects');
    projectsSection.style.display = 'none';

    // Hide all project details
    const allDetails = document.querySelectorAll('.project-details');
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Show the specific project details
    const detailsToShow = document.getElementById(projectId + '-details');
    if (detailsToShow) {
        detailsToShow.style.display = 'block';
    }
}

function showProjects() {
    // Show the projects section
    const projectsSection = document.getElementById('projects');
    projectsSection.style.display = 'grid'; // Or 'block' depending on your desired layout

    // Hide all project details
    const allDetails = document.querySelectorAll('.project-details');
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });
}