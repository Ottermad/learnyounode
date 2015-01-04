numbers = process.argv.slice(2);
total = 0;
for (var i = 0; i < numbers.length; i++) {
	total += Number(numbers[i]);
};
console.log(total);