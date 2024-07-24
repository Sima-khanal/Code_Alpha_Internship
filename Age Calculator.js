document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    if (day && month && year) {
        let birthDate = new Date(year, month - 1, day);
        let today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        document.getElementById('result').innerText = `You are ${age} years old.`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid date of birth.';
    }
});
