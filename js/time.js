function calculateDaysPassed() {
const targetDate = new Date('2021-10-02');
const today = new Date();
const timeDifference = today - targetDate;
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const timeline = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.getElementById('days-passed').innerText = daysPassed;
document.getElementById("timeline").innerText = `${timeline} `;
}
window.onload = calculateDaysPassed;