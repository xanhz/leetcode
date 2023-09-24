/**
 * @link https://leetcode.com/problems/add-binary
 */
function addBinary(a: string, b: string): string {
  const reverse = (s: string) => s.split('').reverse().join('');
  let r = 0,
    aLength = a.length,
    bLength = b.length,
    length = Math.min(aLength, bLength),
    i = 0,
    s = '';
  a = reverse(a);
  b = reverse(b);
  for (i; i < length; ++i) {
    const sum = a.charCodeAt(i) + b.charCodeAt(i) - 48 * 2 + r;
    r = sum >> 1;
    s += `${sum % 2}`;
  }
  for (let j = i; j < aLength; ++j) {
    const sum = a.charCodeAt(j) - 48 + r;
    r = sum >> 1;
    s += `${sum % 2}`;
  }
  for (let j = i; j < bLength; ++j) {
    const sum = b.charCodeAt(j) - 48 + r;
    r = sum >> 1;
    s += `${sum % 2}`;
  }
  if (r == 1) {
    s += '1';
  }
  return reverse(s);
}

console.log(addBinary('11', '1'));
