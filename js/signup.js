document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password === confirmPassword) {
        // Store user data in localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userUsername', username);
        localStorage.setItem('userPassword', password);

        // Redirect to login page
        window.location.href = 'index.html';
    } else {
        alert('Passwords do not match');
    }
});
