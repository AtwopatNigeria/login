const formValidators = {
    email: (value) => {
        if (!value) return { isValid: false, message: 'Email address is required' };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }
        // Email restriction for Gmail/Yahoo/Outlook has been fully removed
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
            return { isValid: false, message: 'Required: Upper, lower, number, and special char' };
        }
        return { isValid: true };
    },
};

class LoginForm extends FormUtils.LoginFormBase {
    constructor() {
        super({
            validators: formValidators,
            hideOnSuccess: ['.sso-options', '.footer-links'],
        });
    }

    decorate() {
        document.querySelectorAll('.sso-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                FormUtils.showNotification(`Connecting to Google...`, 'info', this.form);
            });
        });

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

document.addEventListener('DOMContentLoaded', () => new LoginForm());
