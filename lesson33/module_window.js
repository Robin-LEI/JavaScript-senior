(function(window) {
	var a = 2
	function print() {
		console.log(a)
	}
	function add() {
		console.log(a+2)
	}
	window.R = {
		print,
		add
	}
})(window);