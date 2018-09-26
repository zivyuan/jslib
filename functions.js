/**
 * Parse query string to object.
 * Basic array surported.
 */
function parseQuery(paramstr) {
  var urlStr = (paramstr || '').replace(/^[\?#]/, ''),
  param = {}

  if (urlStr && urlStr != '') {
    var urlArr = urlStr.indexOf(';') > -1 ? urlStr.split(';') : urlStr.split("&")

    for (var i = 0; i < urlArr.length; i++) {
      var tempArr = urlArr[i].split("="),
        key = tempArr[0],
        val = decodeURIComponent(tempArr[1]);

      if (typeof param[key] === 'undefined') {
        param[key] = val
      } else if(param[key] instanceof Array) {
        param[key].push(val)
      } else {
        param[key] = [param[key], val]
      }
    }
    return param
  }
  return {}
}
