var lengthOfLastWord = function (s) {
	s = s.trimEnd().split(" ");
	return s.at(-1).length;
};
