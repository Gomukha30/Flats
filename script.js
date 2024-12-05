function display(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => section.classList.add('hidden'));

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
}
function confirmBooking() {
    alert("Successfully booked!");
}