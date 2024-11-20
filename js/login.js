document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get stored user data from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    
    if (!storedEmail || !storedPassword) {
        alert('Please sign up first!');
        return; // Prevent further execution if user is not signed up
    }

    // Validate email and password
    if (email === storedEmail && password === storedPassword) {
        const username = localStorage.getItem('userUsername');
        
        // Store session data
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userName', username);

        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        alert('Incorrect email or password');
    }
});
