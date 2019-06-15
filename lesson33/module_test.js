function Module() {
	var a = 2
	function print() {
		console.log('this is print', a)
	}
	function add() {
		console.log('this is add', a + 2)
	}
	return Module = {
		print: print,
		add: add
	}
}