var mySqrt = function (x) {
	for (let i = 0; i <= x; i++) {
		let n = i * i;
		if (x === 0) return i;
		else if (x === n) return Math.trunc(i);
		else if (x < n) return --i;
	}
};
