// Exercise 15: Write a function named 'countWords' that takes a string of text and returns the number of words in the string.

function countWords(text) {
  const words = text.split(' ')
  const num = words.length
  return num
}

console.log(countWords('The quick brown fox jumps over the lazy dog')) // 9