const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';

html.setAttribute('data-theme', savedTheme);
if(themeBtn) themeBtn.innerText = savedTheme === 'dark' ? 'الوضع الساطع' : 'الوضع الليلي';

if(themeBtn) {
    themeBtn.onclick = () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeBtn.innerText = next === 'dark' ? 'الوضع الساطع' : 'الوضع الليلي';
    };
}
