function lengthOfLastWord(s: string): number {
  let count = 0,
    i = 0,
    n = s.length;

  while (i < n) {
    if (s[i] !== ' ') {
      count = 0;
      do {
        ++count;
        ++i;
      } while (i < n && s[i] !== ' ');
    } else {
      ++i;
    }
  }
  return count;
}

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
console.log(lengthOfLastWord('luffy is still joyboy')) // 6
