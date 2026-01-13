const SUPABASE_URL = 'https://bukpaaycgtstljhhymwo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_bBj2x2EInx3WCwqJLR-j1Q_UgIukgvF';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Check if user is logged in
async function checkUser() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    const path = window.location.pathname;
    
    // Redirect to login if not authenticated (except on login/register pages)
    if (!user && !path.includes('login.html') && !path.includes('register.html')) {
        window.location.href = 'login.html';
    }
    return user;
}

async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html';
}

checkUser();