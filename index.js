function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Initialize left and right pointers
    let left = 0;
    let right = str.length - 1;

    // Check characters from both ends
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If characters do not match, return false
        }
        left++;  // Move left pointer towards the center
        right--; // Move right pointer towards the center
    }
    
    return true; // If all characters match, return true
}

// Examples
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("No 'x' in Nixon")); // Output: true