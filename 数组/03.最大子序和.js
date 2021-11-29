/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *  输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。   
 */


/**
 * 我的解法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    var maxSum = nums[0];
    var lastSum = 0;
    for (let i = 0; i < nums.length; i++) {

        lastSum = Math.max(lastSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, lastSum);

    }
    return maxSum;
};

//我的解法就是贪心的方法


/** 动态规划 */
var maxSubArray = function (nums) {

    var dp = new Array(nums.length), max = nums[0];
    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {

        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

        if (max < dp[i]) {
            max = dp[i];
        }
    }
    return max;

}


/**
 * 分治 -- todo 待研究
 */

 function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
}

const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
    if (l === r) {
        return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
}

var maxSubArray = function(nums) {
    return getInfo(nums, 0, nums.length - 1).mSum;
};
