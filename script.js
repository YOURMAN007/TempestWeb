// Function to handle navigating between pages
function navigateTo(pageId) {
    // 1. Get all elements with the class 'page'
    const pages = document.querySelectorAll('.page');
    
    // 2. Remove the 'active' class from all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 3. Add the 'active' class to the target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Scroll back to the top of the window automatically
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to handle Form Submissions (Login & Register)
function handleAuth(event, type) {
    event.preventDefault(); // Prevents the page from reloading on submit

    if (type === 'login') {
        alert("Login successful! Welcome back.");
        navigateTo('home');
    } else if (type === 'register') {
        alert("Registration successful! You can now log in.");
        navigateTo('login');
    }
    
    // Clear the form fields after submission
    event.target.reset(); 
}

// Initialize the website by ensuring the Home page is active on load
document.addEventListener("DOMContentLoaded", () => {
    navigateTo('home');
});