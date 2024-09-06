document.addEventListener("DOMContentLoaded", function() {
    const showInfoButton = document.getElementById('showInfo');
    const institutionSelect = document.getElementById('institution');
    const emailResult = document.getElementById('emailResult');

    showInfoButton.addEventListener('click', function() {
        const selectedEmail = institutionSelect.value;

        if (selectedEmail) {
            emailResult.textContent = "Library Contact Email: " + selectedEmail;
        } else {
            emailResult.textContent = "Please select an institution.";
        }
    });
});
