# BasicX-API
 A simple JavaScript API with basic features for temperature conversion and secure password generation.

### Features

- **Celsius to Fahrenheit Conversion**: calculates the temperature in degrees Fahrenheit from a temperature in degrees Celsius.
- **Fahrenheit to Celsius Conversion**: calculates the temperature in degrees Celsius from a temperature in degrees Fahrenheit.
- **Secure Parameter Validation and Input Protection**: protects against invalid input, allowing only integers or floats and secure string inputs.
- **Password Generation**: generates secure and random passwords for use.

### Requirements

- No additional dependencies are required to use the API.

### Installation and Usage

1. Include the `BasicX-API.js` file in your project.
2. Use the API's features through a web browser or your preferred application.
3. Consult the Examples section for ideas on how to use the API.

### Configuration

- The API can be configured to use different temperature options (Celsius/Fahrenheit) and password generation settings.
- Please consult the API documentation for more information on configuring the API.

### Contributing

- Feel free to contribute improvements or new features to the API.
- Please respect the contribution guidelines and follow the implementation instructions.

### License

- The API is distributed under a apache 2.0 license, allowing for free and personal use.

### Examples of usage
```` javascript
api.convertToCelsius(100)
api.convertToFahrenheit(100)
api.secureConvertToFloat(100.5)
api.secureConvertToInt(100.7)
api.passwordGenerator(10, true, true, true)
