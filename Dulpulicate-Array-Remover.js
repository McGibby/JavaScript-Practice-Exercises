/*Checks two arrays and removes dulicate items

Write a function removeVowels that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Running your function by passing in alphabet should give you an array of all consonants.*/

var vowels = ['a','e','i','o','u'];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

alphabet = alphabet.filter(val => !vowels.includes(val));

console.log(alphabet);