document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav>
            <div class="logo"><i class="fas fa-briefcase"></i> InternPath</div>
            <a href="index.html" class="nav-link" id="nav-index">Dashboard</a>
            <a href="companies.html" class="nav-link" id="nav-companies">Companies</a>
            <a href="interviews.html" class="nav-link" id="nav-interviews">Interviews</a>
            <a href="profile.html" class="nav-link" id="nav-profile">Profile</a>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #1e293b;">
            <a href="#" class="nav-link" onclick="logout()">Logout</a>
        </nav>`;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    // ... (keep the rest of your active link logic)
});