document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    let isValid = true;

    let name  = document.getElementById('name');
    let email  = document.getElementById('email');
    let password  = document.getElementById('password');

    const clearErrors = () => {
        document.querySelectorAll('.error-text').forEach(error => error.
            remove()
        )
    }

    const errorForm = (message,input) => {
        let errorEl = document.createElement('div')
    errorEl.className = 'error-text';
    errorEl.textContent = message;
    errorEl.style.color = 'red'
    errorEl.style.fontSize = '14px';
    input.parentElement.appendChild(errorEl);
    isValid = false;
    
    }

    clearErrors();

    if(!name.value.trim()) errorForm('Ismingizni kiriting',name);

// Source - https://stackoverflow.com/a
// Posted by C. Lee, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-16, License - CC BY-SA 4.0
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errorForm
('Emaillingizni kiriting!',email);

if(password.value.trim().lenght < 6) errorForm('Parol 6 ta sondan km bo`lishi mumkin emas',password);

if(isValid) {
    alert('Siz registratsiyadan o`ttingiz');
    document.getElementById('form').reset();
}




})