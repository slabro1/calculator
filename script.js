const add = function(...numbers) {
	return numbers.reduce((sum, current) => sum + current);
};

const subtract = function(...numbers) {
	return numbers.reduce((sub, current) => sub - current);
};

const sum = function(...numbers) {
  return numbers.reduce((sum, current) => sum + current);
	
};

const multiply = function(...numbers) {
  return numbers.reduce((sum, current) => sum * current);
};

const power = function(...numbers) {
	return numbers.reduce((sum, current) => sum ** current);
};

const factorial = function(n) {
	return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
};