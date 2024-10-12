/*
LONGEST COMMON PREFIX

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. 
*/

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""
    if (strs.length === 1) return strs[0]

    let pivot = strs[0];
    let pointer = pivot.length;
    for (const str of strs) {
        while (pointer >= 0 && str.indexOf(pivot) !== 0) {
            pivot = pivot.slice(0, pointer)
            pointer -= 1;
        }

        if (pivot === "") return ""
    }

    return pivot;
};

console.log('Example 1: ', `"${longestCommonPrefix(["flower", "flow", "flight"])}"`, ' = "flo"');
console.log('Example 2: ', `"${longestCommonPrefix(["dog", "racecar", "car"])}"`, ' = ""');
