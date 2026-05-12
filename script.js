const unrestrictedValidators = {
    email: (value) => {
        if (!value) return { isValid: false, message: 'Email address is required' };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }
        // No personal domain blocking here
        return { isValid: true };
    },
    password: (value) => {
        if (!value) return { isValid: false, message: 'Password is required' };
        if (value.length < 8) return { isValid: false, message: 'Password must be at least 8 characters' };
        return { isValid: true };
    }
};

class ATWOPATLoginForm extends FormUtils.LoginFormBase {
    constructor() {
        super({
            validators: unrestrictedValidators,
            hideOnSuccess: ['.sso-options', '.footer-links', '.divider'],
        });
    }

    decorate() {
        // Specific SSO handler for Google
        document.querySelectorAll('.google-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                FormUtils.showNotification('Connecting to Google...', 'info', this.form);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new ATWOPATLoginForm());
