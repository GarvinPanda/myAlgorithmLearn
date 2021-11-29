/**
 * 连续数列
 * 给定一个整数数组，找出总和最大的连续数列，并返回总和。
 *  输入： [-2,1,-3,4,-1,2,1,-5,4]
    输出： 6
    解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
    leecode 链接 https://leetcode-cn.com/problems/contiguous-sequence-lcci/
 */

/**
 * 以下是我的解题 O2(n)
 * @param {*} nums 
 * @returns 
 */
var maxSubArray = function (nums) {
    let _l = nums.length;
    //最大就是第一个
    let outNum = nums[0];
    for (let i = 0; i < _l; i++) {
        //如果当前的值比最大值还大, 交换最大值
        if (nums[i] > outNum) {
            outNum = nums[i];
        }
        let _startNum = nums[i];
        for (let j = i + 1; j < _l; j++) {
            //连续累加
            let _thisNum = _startNum + nums[j];
            //如果当前的值比最大值还大, 交换最大值
            if (_thisNum > outNum) {
                outNum = _thisNum;
            }
            _startNum = _thisNum;
        }
    }
    //输出
    return outNum;
};


/** 方法1:  贪心算法 O(n)*/
var maxSubArray = (nums) => {

    let preNum = 0, maxNums = nums[0];
    for (let i = 0; i < nums.length; i++) {
        preNum = Math.max(preNum + nums[i], nums[i]);
        maxNums = Math.max(maxNums, preNum);
    }
    return maxNums;

}


/** 方法2: 动态规划 O(n)*/
var maxSubArray = (nums) => {

    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
    }
    return Math.max(...nums);
}




/** 测试 */
var testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var res = maxSubArray(testArr);

console.log("结果--->", res);
