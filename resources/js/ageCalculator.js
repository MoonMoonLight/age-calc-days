const ageYears = prompt(`What is your age?`);

let ageDays = (ageYears * 365);

$(`#ageCalc`).click(function () {
    alert(`Your age in days is ${ageDays}. Well... Kinda.... I didn't take the time to calculate the leap years. If you're adamant about it, go ahead and count the days yourself!`)
});
