class PasswordGenerator {
    constructor(options = {}) {
        // Default options
        this.includeNumbers = options.includeNumbers !== undefined ? options.includeNumbers : true;
        this.includeSymbols = options.includeSymbols !== undefined ? options.includeSymbols : true;
        this.includeUppercase = options.includeUppercase !== undefined ? options.includeUppercase : true;
        this.includeLowercase = options.includeLowercase !== undefined ? options.includeLowercase : true;

        // Character sets
        this.numbers = '0123456789';
        this.symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        this.lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        this.uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    // Method to generate password
    generatePassword(length = 12) {
        let validChars = '';

        // Build valid character set based on options
        if (this.includeNumbers) validChars += this.numbers;
        if (this.includeSymbols) validChars += this.symbols;
        if (this.includeLowercase) validChars += this.lowercaseLetters;
        if (this.includeUppercase) validChars += this.uppercaseLetters;

        if (validChars === '') {
            throw new Error("No character set selected");
        }

        // Generate password
        let password = '';
        for (let i = 0; i < length; i++) {
            password += validChars.charAt(Math.floor(Math.random() * validChars.length));
        }

        return password;
    }

    // Optional method to set/update options
    setOptions(options = {}) {
        if (options.includeNumbers !== undefined) this.includeNumbers = options.includeNumbers;
        if (options.includeSymbols !== undefined) this.includeSymbols = options.includeSymbols;
        if (options.includeUppercase !== undefined) this.includeUppercase = options.includeUppercase;
        if (options.includeLowercase !== undefined) this.includeLowercase = options.includeLowercase;
    }
}

module.exports = PasswordGenerator;
