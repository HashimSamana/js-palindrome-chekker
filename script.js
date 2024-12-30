
function checkPalindrome() {
    let input = document.getElementById('textInput').value; // Get input value
    let cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, ''); // Clean input

    const resultDiv = document.getElementById('result');

    // Check if input contains only numbers
    if (!isNaN(cleanedInput) && cleanedInput !== '') {
        resultDiv.textContent = `Please enter a valid string.`; // Display error message
        resultDiv.style.color = 'orange'; // Set text color to orange
        return; // Exit the function
    }

    let charArray = cleanedInput.split(''); // Split cleaned input into characters
    let reversedArray = [...charArray].reverse(); // Reverse a copy of the charArray

    // Compare the original and reversed arrays as strings
    if (charArray.join('') === reversedArray.join('') && cleanedInput !== '') {
        resultDiv.textContent = `"${input}" is a palindrome.`; // Display success message
        resultDiv.style.color = 'green'; // Set text color to green
    } else {
        resultDiv.textContent = `"${input}" is not a palindrome.`; // Display failure message
        resultDiv.style.color = 'red'; // Set text color to red
    }
}
