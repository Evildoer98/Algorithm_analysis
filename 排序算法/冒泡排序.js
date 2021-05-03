/**
 * 
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 
 * 思路：
 *  1. 比较相邻的元素，前者比后者大的话，两者交换位置
 *  2. 对每一对相邻元素做相同操作，从开始第一对到最后一对，这样最后的元素就是最大的元素
 *  3. 针对 n 个相邻元素重复以上操作，每次循环排出当前最后一个
 *  4. 重复上述操作
 * 
 */

var bubbleSort = function (array) {
    // 获取数组的长度
    var len = array.length
    // 反向循环，因此循环次数越来越少
    for (let i = len; i >= 0; i--) {
        // 根据 i 的次数，比较判断 i 位置
        for (let j = 0; j < i; j++) {
            // 如果 j 位置比 j+1 位置的数据大，那么就交换
            if (array[j] > array[j+1]) {
                // 交换
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp 
            }
        }
    }
    return array
}
