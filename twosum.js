// Achieved time complexity of O(n)

var twoSum = function (nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const temp = target - nums[i];
		if (map.has(temp)) return [map.get(temp), i];
		map.set(nums[i], i);
	}

	return [];
};
