/**
 * @link https://leetcode.com/problems/valid-parentheses
 */
function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; ++i) {
    const char = s.charAt(i);
    const top = stack.at(-1);
    const isPairWise = (top == '(' && char == ')') || (top == '{' && char == '}') || (top == '[' && char == ']');
    if (isPairWise) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length == 0;
}
