var romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	if (s.length < 1) return 0;
	let sum = map[s[0]];
	for (let i = 1; i < s.length; i++) {
		const t1 = map[s[i]];
		const t0 = map[s[i - 1]];
		if (t1 > t0) sum = sum + t1 - 2 * t0;
		else sum = sum + t1;
	}
	return sum;
};
