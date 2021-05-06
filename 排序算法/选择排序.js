/**
 * 
 * 时间复杂度 O(n^2)
 * 空间复杂度
 * 思路：每次循环选取一个最小的数字放到前面的有序序列中。
 * 
 *  1. 选定第一个索引位置，然后和后面元素依次比较
 *  2. 如果后面的队员，小于第一个索引值的队员，则交换位置
 *  3. 经过一轮的比较后，可以确定第一个位置是最小的
 *  4. 然后使用同样的方法把剩下的元素逐个比较即可
 *  5. 可以看出选择排序，第一轮选出最小值，第二轮选出第二小的值
 * 
 */

var selectionSort = function (array) {
    var len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [array[min], array[i]] = [array[i], array[min]]
        }
    }
    return array
}

var selectSort = function (array) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (let j = i+1; j < len; j++) {
            if (array[min] > array[j]) {
                min = j
            }
        }
        [array[min], array[i]] = [array[i], array[min]]
    }
    return array
}