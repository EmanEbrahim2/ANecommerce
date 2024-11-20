// Function to handle logout
function logout() {
    // Clear the stored user data from localStorage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userUsername');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('loggedIn');
    
    // Redirect to index.html (login page)
    window.location.href = 'index.html';
}

// On page load, check if the user is logged in
window.onload = function() {
    const userName = localStorage.getItem('userName'); // Retrieve the username
    if (userName) {
        document.getElementById('userName').textContent = `Welcome, ${userName}`; // Display username
    } else {
        document.getElementById('userName').textContent = 'Welcome, Guest'; // Default message
    }
};
