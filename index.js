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
if (module.exports) {
    let locals = module.exports,
        cx = require("classnames/bind").bind(locals);

    // 抛出接口
    module.exports = {
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
    if (source.indexOf('module.exports =') > -1) {
        return source + suffix;
    }

    // 返回源码
    return source;
};
