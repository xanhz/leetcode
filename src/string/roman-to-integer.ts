function romanToInt(s: string): number {
  const map = new Map([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000],
  ]);
  let n = 0,
    i = 0,
    length = s.length,
    curr = '';
  while (i < length) {
    let next = curr + s[i];
    if (!map.has(next)) {
      n += map.get(curr) as number;
      curr = s[i];
    } else {
      curr = next;
    }
    ++i;
  }
  n += map.get(curr) as number;
  return n;
}

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
