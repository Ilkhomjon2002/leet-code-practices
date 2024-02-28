var searchInsert = function (nums, target) {
	if (nums.at(-1) < target) return nums.length;
	return nums.includes(target)
		? nums.findIndex((val) => val == target)
		: nums.findIndex((val) => val > target);
};

// with binary search

var searchInsertBinary = function (nums, target) {
	let low = 0;
	let high = nums.length - 1;
	let mid;

	while (low <= high) {
		mid = low + Math.floor((high - low) / 2);
		if (target === nums[mid]) return mid;
		else if (target > nums[mid]) low = mid + 1;
		else high = mid - 1;
	}
	return low;
};
