(function(window) {

	var __intervalID = 0,
		__dataMap = {};

	window._setInterval = setInterval;
	window._clearInterval = clearInterval;
	window.setInterval = function(func, interval) {
		var iid = __intervalID++,
			data = __dataMap[iid] || (__dataMap[iid] = {
				id: iid,
				handle: func,
				realIID: 0,
				interval: interval,
				arguments: (function(input) {
					var args = [],
						len = input.length;
					for (var i = 2; i < len; i++) {
						args.push(input[i]);
					}
					return args;
				})(arguments)
			});

		var _loop = function() {
			if (data.arguments.length > 0) {
				data.handle.apply(null, data.arguments);
			} else {
				data.handle();
			}
			data.realIID = setTimeout(_loop, data.interval);
		};
		_loop();

		return iid;
	};
	window.clearInterval = function(iid) {
		var data = __dataMap[iid];
		if (data) {
			clearTimeout(data.realIID);
		}
	};

})(window);
