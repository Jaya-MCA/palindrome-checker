function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i]; // forward character 
        let y = str[j - i]; // backward character
        if (x !== y) {
            // return false if characters do not match
            return false;
        }
    }
    // return true if string is palindrome
    return true;
}

// function that prints output if string is palindrome
function is_palindrome() {
    let inputText = document.getElementById("input").value;
    let ans = document.getElementById("ans");

    // variable that is true if string is palindrome
    let isPalindrome = check_palindrome(inputText);

    // condition checking isPalindrome
    if (isPalindrome) {
        ans.innerHTML = "The given sentence is palindrome";
    } else {
        ans.innerHTML = "The given sentence is not palindrome";
    }
}
