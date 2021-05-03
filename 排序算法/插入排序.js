/**
 * 
 * 时间复杂度：O(n^2)
 * 空间复杂度：
 * 
 * 思路：
 *  1. 从第一个元素开始，该元素可以被认为被排序
 *  2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
 *  3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
 *  4. 重复上一个步骤，知道找到已排序的元素小于或者等于新元素的位置
 *  5. 将新元素插入到该位置后，重复上面的操作
 * 
 */

var insertionSort = function (array) {
    let len = array.length
    for (let i = 1; i < len; i++) {
        let j = i
        let temp = array[i]
        while (j > 0 && array[j-1] > temp) {
            array[j] = array[j-1]
            j--
        }
        array[j] = temp
    }
    return array
}