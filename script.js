function displayContact() {
    const dropdown = document.getElementById('institutionDropdown');
    const contactInfo = document.getElementById('contactInfo');
    const email = dropdown.value;

    if (email) {
        contactInfo.textContent = `Contact email: ${email}`;
    } else {
        contactInfo.textContent = '';
    }
}

