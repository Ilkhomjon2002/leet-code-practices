var searchInsert = function (nums, target) {
	if (nums.at(-1) < target) return nums.length;
	return nums.includes(target)
		? nums.findIndex((val) => val == target)
		: nums.findIndex((val) => val > target);
};
