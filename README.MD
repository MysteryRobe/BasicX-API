---

**BasicX API a Temperature Conversion and Password Generator API**

## **Introduction**

This API allows you to convert temperatures between Celsius and Fahrenheit, as well as generate random passwords. The purpose of this API documentation is to provide clear and concise information about the available endpoints, expected requests, and responses.

## **Endpoints**

### 1. Temperature Conversion

* **`/celsius/to-fahrenheit`**: Converts a temperature from Celsius to Fahrenheit.
* Request: `GET`
* Parameters:
* `temp_celsius`: the temperature in Celsius to convert


* Response: The converted temperature in Fahrenheit formatted as a decimal.



### 2. Temperature Conversion

* **`/fahrenheit/to-celsius`**: Converts a temperature from Fahrenheit to Celsius.
* Request: `GET`
* Parameters:
* `temp_fahrenheit`: the temperature in Fahrenheit to convert


* Response: The converted temperature in Celsius formatted as a decimal.



### 3. Password Generator

* **`/generate-password`**: Generates a random password.
* Request: `GET`
* Parameters:
* `length`: the number of characters for the password (optional, default is 10)


* Response: The generated password as a string.



## **Usage Examples**

To convert a temperature from Celsius to Fahrenheit:

`GET /convertToFahrenheit/7`

`Default : GET /convertToFahrenheit/:celsius`

To convert a temperature from Fahrenheit to Celsius:

`GET /convertToCelsius/7`

`Default : GET /convertToCelsius/:fahrenheit`

To generate a random password with 12 characters:

`GET /passwordGenerator/12/true/false/true`

`Default : GET /passwordGenerator/:lengthPass/:canUpper/:canNumber/:canSymbols`

## **License**

This API is distributed under the Apache License 2.0.

## **Badges**

* [Apache License](https://choosealicense.com/licenses/apsl-2.0/)
* [API Documentation](https://docs.github.com/en/rest/reference/docs/api-docs)

## **Prerequisites**

To use this API, you need to have Node.js and npm installed.

## **Installation and Setup**

1. Clone the repository: `git clone [https://github.com/](https://github.com/)[your-repository]/api-temperatura.git`
2. Install dependencies: `npm install`
3. Run the API: `node api.js`

## **Contributing**

To contribute to this API, please submit a pull request to the GitHub repository.