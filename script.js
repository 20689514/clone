function showSection(sectionId) {
    // Hide all content
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Show the selected section
    const activeContent = document.getElementById(sectionId);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}
