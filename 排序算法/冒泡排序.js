/**
 * 
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 
 * 思路：
 *  1. 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，则向上冒泡
 *  2. 这样一次循环下来，最后一个数就是本数组中最大的数
 *  3. 下一次循环继续上面的操作，不循环已经排好的数
 *  
 *  优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环
 * 
 */

var bubbleSort1 = function (array) {
    var len = array.length
    for (let i = 0; i < len; i++) {
        let complete = true
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
                complete = true
            }
        }
        if (complete) {
            break
        }        
    }
    return array
}

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
