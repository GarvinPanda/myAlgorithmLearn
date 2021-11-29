/**
 * 给定一个整数数组，判断是否存在重复元素。
   如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * 输入: [1,2,3,1]
   输出: true
 */


/**
 * 我的解法
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    for(let i = 0;i < nums.length;i++){
        for(let j = i+1;j < nums.length;j++){
            if(nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false;

};


/**
 *  利用哈希表
 * @param {*} nums
 * @return {*} 
 */
var containsDuplicate = function(nums) {
    var set = new Set();
    for(let item of nums){
        if(set.has(item)){
            return true;
        }
        set.add(item);
    }
    return false;
};
