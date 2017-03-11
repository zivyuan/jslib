/**
 * 创建函数代理, 让函数可以记住this
 * @param  {[type]} thisObj [description]
 * @param  {[type]} fun     [description]
 * @return {[type]}         [description]
 */
function delegate(thisObj, fun) {
	if (typeof thisObj === 'function') {
		var _this = thisObj;
		thisObj = fun;
		fun = _this;
	}
	var target = thisObj;
	var args = [];

	for (i = 2; i < arguments.length; i++)
		args.push(arguments[i]);

	return function() {
		var nargs = args.concat([]);
		for (i = 0; i < arguments.length; i++)
			nargs.push(arguments[i]);
		return fun.apply(target, nargs);
	};
}
Function.delegate = delegate;
