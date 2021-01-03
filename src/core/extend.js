import is from "is";

function extend(dst) {
    return baseExtend(dst, [].slice.call(arguments, 1), true);
}

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

function baseExtend(dst, objs, deep) {
    for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        if (!is.object(obj) && !is.function(obj)) continue;
        var keys = Object.keys(obj);
        for (var j = 0, jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];
            if (hasOwn(obj, key)) {
                if (deep && is.object(src)) {
                    if (is.date(src)) {
                        dst[key] = new Date(src.valueOf());
                    } else if (is.regexp(src)) {
                        dst[key] = new RegExp(src);
                    } else if (src.nodeName) {
                        dst[key] = src.cloneNode(true);
                    } else {
                        if (!is.object(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
                        baseExtend(dst[key], [src], true);
                    }
                } else {
                    dst[key] = src;
                }
            }
        }
    }
    return dst;
}

export default extend;
