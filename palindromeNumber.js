var isPalindrome = function (x) {
	const xStr = x.toString().split("").reverse().join("");
	if (xStr == x) return true;
	return false;
};
