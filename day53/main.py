# Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

# The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

# Examples:
# "String" => "StRiNg"
# "Weird string case" => "WeIrD StRiNg CaSe"

def to_weird_case(string):
    # The function returns a string where every word has its even-indexed characters uppercase
    # and odd-indexed characters lowercase.
     
    # 1. Split the input string into words using the .split() method.
    # 2. For each word, iterate over the characters and adjust their case based on the index.
    #    - Even indexed characters (0, 2, 4, ...) are uppercased.
    #    - Odd indexed characters (1, 3, 5, ...) are lowercased.
    # 3. Join the transformed words back together into a single string with spaces in between.
    return ' '.join([''.join([char.upper() if i % 2 == 0 else char.lower() for i, char in enumerate(word)]) for word in string.split()])
 # Input: "String"
    # Processing:
    # "S" → "S" (uppercase)
    # "t" → "t" (lowercase)
    # "r" → "R" (uppercase)
    # "i" → "i" (lowercase)
    # "n" → "N" (uppercase)
    # "g" → "g" (lowercase)
    # Output: "StRiNg"