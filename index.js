function is_palindrome(word):
    left= 0
    right = length of word - 1
    
    while left <= right:
        if word [left] != word[right]:
            return false
        left = left + 1
        right = right - 1
    
    return true
