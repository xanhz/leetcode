/**
 * @link https://leetcode.com/problems/evaluate-reverse-polish-notation
 */
function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  for (let i = 0; i < tokens.length; ++i) {
    let token = tokens[i];
    switch (token) {
      case '+': {
        let num2 = parseInt(stack.pop() as string);
        let num1 = parseInt(stack.pop() as string);
        stack.push(`${num1 + num2}`);
        break;
      }
      case '-': {
        let num2 = parseInt(stack.pop() as string);
        let num1 = parseInt(stack.pop() as string);
        stack.push(`${num1 - num2}`);
        break;
      }
      case '*': {
        let num2 = parseInt(stack.pop() as string);
        let num1 = parseInt(stack.pop() as string);
        stack.push(`${num1 * num2}`);
        break;
      }
      case '/': {
        let num2 = parseInt(stack.pop() as string);
        let num1 = parseInt(stack.pop() as string);
        stack.push(`${num1 / num2}`);
        break;
      }
      default: {
        stack.push(token);
      }
    }
  }
  return parseInt(stack.pop() as string);
}

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
