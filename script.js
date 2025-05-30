
function toggleForm() {
    const title = document.getElementById("title");
    const loginForm = document.getElementById("loginForm");
    const toggleText = document.getElementById("toggleText");
    if (title.innerText === "تسجيل الدخول" || title.innerText === "Login") {
        title.innerText = currentLang === 'ar' ? "إنشاء حساب" : "Create Account";
        toggleText.innerHTML = currentLang === 'ar' ? 'لديك حساب؟ <a href="#" onclick="toggleForm()">تسجيل الدخول</a>' :
                                                     'Already have an account? <a href="#" onclick="toggleForm()">Login</a>';
    } else {
        title.innerText = currentLang === 'ar' ? "تسجيل الدخول" : "Login";
        toggleText.innerHTML = currentLang === 'ar' ? 'ليس لديك حساب؟ <a href="#" onclick="toggleForm()">إنشاء حساب</a>' :
                                                     'Don't have an account? <a href="#" onclick="toggleForm()">Create Account</a>';
    }
}

let currentLang = 'ar';

function switchLang() {
    const html = document.documentElement;
    const title = document.getElementById("title") || document.getElementById("about-title");
    const text = document.getElementById("about-text") || document.getElementById("toggleText");
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    if (title && title.id === "title") {
        title.innerText = currentLang === 'ar' ? "تسجيل الدخول" : "Login";
        text.innerHTML = currentLang === 'ar' ? 'ليس لديك حساب؟ <a href="#" onclick="toggleForm()">إنشاء حساب</a>' :
                                               'Don't have an account? <a href="#" onclick="toggleForm()">Create Account</a>';
    } else if (title && title.id === "about-title") {
        title.innerText = currentLang === 'ar' ? "من نحن" : "About Us";
        text.innerText = currentLang === 'ar' ?
            "سيرفر بلاك هو مجتمع يضم اللاعبين والمبرمجين، يهدف إلى توفير بيئة ممتعة ومحترمة للجميع." :
            "Black server is a community of gamers and developers aiming to provide a respectful and fun environment for everyone.";
    }
}
