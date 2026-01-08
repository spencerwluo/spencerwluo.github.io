// Toggle section visibility
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const toggle = document.getElementById(sectionId + '-toggle');

    if (section && toggle) {
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
            toggle.textContent = '[hide]';
        } else {
            section.classList.add('hidden');
            toggle.textContent = '[show]';
        }
    }
}
