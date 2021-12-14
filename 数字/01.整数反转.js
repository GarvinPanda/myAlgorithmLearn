/** 
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
 
示例 1：
输入：x = 123
输出：321
 */


/**
 * 我的题解
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var flag = x >= 0 ? 1 : -1; 
    var arr = Math.abs(x).toString().split('');
    for(let i = 0; i< arr.length;i++){
        if(i >= arr.length-1-i ){
            break;
        }
        let temp = arr[i];
        arr[i] = arr[arr.length - 1-i];
        arr[arr.length - 1-i] = temp;
    }
    let res = parseInt(arr.join(''))*flag;

    return res >= Math.pow(2,31) - 1 || res<=-1*Math.pow(2,31) ? 0 : res;
};


/**
 * 官方题解
 * @param {*} x
 * @return {*} 
 */
var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};

