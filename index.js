/**
 *****************************************
 * Created by edonet@163.com
 * Created on 2019-11-15 14:16:43
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 定义脚本代码
 *****************************************
 */
const suffix = `
if (exports.locals) {
    var locals = exports.locals,
        cx = require("classnames/bind").bind(locals);

    exports.locals = {
        __esModule: true,
        default: locals,
        csx: cx,
        cx: cx
    };
}
`;


/**
 *****************************************
 * 定义加载器
 *****************************************
 */
module.exports = function loader(source) {

    // 添加绑定接口
    if (source.lastIndexOf('exports.locals ')) {
        return source + suffix;
    }

    // 返回源码
    return source;
};
