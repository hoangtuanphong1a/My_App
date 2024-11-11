// Function to show the password
function show() {
    const passwordField = document.getElementById('password');
    passwordField.type = 'text';  // Change type to 'text' to show the password
    document.getElementById('show').style.display = 'none';  // Hide the 'SHOW' button
    document.getElementById('hide').style.display = 'inline'; // Show the 'HIDE' button
}

// Function to hide the password
function hide() {
    const passwordField = document.getElementById('password');
    passwordField.type = 'password';  // Change type to 'password' to hide the password
    document.getElementById('show').style.display = 'inline';  // Show the 'SHOW' button
    document.getElementById('hide').style.display = 'none'; // Hide the 'HIDE' button
}

// Function to handle the login
function logIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const warning = document.getElementById('warning');
    
    // Basic validation
    if (email === '' || password === '') {
        warning.textContent = 'Please enter both email and password.';
        warning.style.color = 'red';
        return;
    }
    
    // Simulate login process
    if (email === 'test@example.com' && password === 'password') {
        warning.textContent = 'Login successful!';
        warning.style.color = 'green';
    } else {
        warning.textContent = 'Invalid email or password.';
        warning.style.color = 'red';
    }
}

// Event listeners for 'Log In' button
document.querySelector('.logIn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default form submission
    logIn();
});
