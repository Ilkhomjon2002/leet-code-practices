var isPowerOfTwo = function (n) {
	if (n == 1) return true;
	if (n == 2) return true;
	else if (n > 2) return isPowerOfTwo(n / 2);
	else return false;
};
