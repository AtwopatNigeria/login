const formValidators = {
    email: (value) => {
        if (!value) return { isValid: false, message: 'Email address is required' };
        
        // Standard email regex (allows gmail, outlook, etc.)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }
        
        // Restriction for personal domains (gmail, yahoo, etc.) has been removed
        return { isValid: true };
    },
    password: (value) => {
        if (!value) return { isValid: false, message: 'Password is required' };
        if (value.length < 8) return { isValid: false, message: 'Password must be at least 8 characters' };
        
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumbers = /\d/.test(value);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        
        if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecial) {
            return { isValid: false, message: 'Password must contain uppercase, lowercase, number, and special character' };
        }
        return { isValid: true };
    },
};

class LoginForm extends FormUtils.LoginFormBase {
    constructor() {
        super({
            validators: formValidators,
            // Keeps the footer and SSO buttons hidden when success message appears
            hideOnSuccess: ['.sso-options', '.footer-links'],
        });
    }

    decorate() {
        // Updated to handle only the Google provider
        document.querySelectorAll('.sso-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                let provider = 'Google';
                if (btn.classList.contains('google-btn')) {
                    provider = 'Google';
                }
                FormUtils.showNotification(`Connecting to ${provider}...`, 'info', this.form);
            });
        });

        // Ensure password toggle works if the base class doesn't handle it
        const toggleBtn = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        if (toggleBtn && passwordInput) {
            toggleBtn.addEventListener('click', () => {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                toggleBtn.classList.toggle('visible');
            });
        }
    }
}

// Initialize form on page load
document.addEventListener('DOMContentLoaded', () => new LoginForm());
