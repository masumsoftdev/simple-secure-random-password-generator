
# Random Password Generator Package

A simple, customizable random password generator package using a class-based approach for generating strong, secure passwords.

## Features

- Class-based implementation for better extensibility and reusability
- Generate passwords of customizable length
- Options to include/exclude:
  - Numbers
  - Symbols
  - Uppercase letters
  - Lowercase letters
- Easy to use and integrate into other projects
- Lightweight and fast

## Installation

You can install the package via npm:

```bash
npm install simple-secure-random-password-generator
```

## Usage

Here's how to use the class-based `simple-secure-random-password-generator`:

```javascript
const passwordGenerator = require('simple-secure-random-password-generator');

// Create an instance of the password generator class
const securePasswordGenerator = new passwordGenerator({
    includeNumbers: true,
    includeSymbols: true,
    includeUppercase: true,
    includeLowercase: true
});

// Generate a 16-character password with numbers, symbols, and letters
const password = securePasswordGenerator.generatePassword(16);
console.log(password); // Outputs a strong random password
```

### Changing Options

You can change the options dynamically using the `setOptions()` method:

```javascript
// Update options later if needed
securePasswordGenerator.setOptions({
    includeSymbols: false
});

// Generate a new password with updated options
const newPassword = securePasswordGenerator.generatePassword(12); // Update the password lenght if needed ( 4, 6, 8) etc
console.log(newPassword); // Outputs a 12-character password without symbols
```

## Options

You can customize the password generation by passing an options object to the class constructor or `setOptions()` method. The available options are:

- `includeNumbers` (Boolean): Include numbers in the password (default: `true`).
- `includeSymbols` (Boolean): Include symbols in the password (default: `true`).
- `includeUppercase` (Boolean): Include uppercase letters (default: `true`).
- `includeLowercase` (Boolean): Include lowercase letters (default: `true`).

## Error Handling

If no character sets are selected, an error will be thrown:

```javascript
try {
    const password = securePasswordGenerator.generatePassword(10);
} catch (error) {
    console.error(error.message); // Outputs: "No character set selected"
}
```
## Version

**1.0.1**  
-- Improvement of usage
**1.0.0**  
-- Initial release

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.

## Contribution

Feel free to open issues or submit pull requests for any improvements. All contributions are welcome!

---

### Author

**Masum Billah**

*Software Developer*
