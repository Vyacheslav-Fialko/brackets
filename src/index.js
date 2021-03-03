module.exports = function check(str, bracketsConfig) {
  // your solution
  const open = new Set(bracketsConfig.map(pair => pair[0]));
  const close = new Set(bracketsConfig.map(pair => pair[1]));
  const relevant = bracketsConfig.reduce((acc, [open, close]) => ({ ...acc, [close]: open }), {});

  let stack = [];
  for (let char of str) {
    if (open.has(char)) {
      stack.push(char);
    }
    if (close.has(char)) {
      if (relevant[char] !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
}
