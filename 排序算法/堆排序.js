/**
 * 
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(1)
 * 
 * 堆排序：是利用堆数据结构设计的一种排序算法。
 * 堆是具有以下性质的二叉树：
 *  1. 每个结点的值都小于或等于其左右孩子结点的值（称为小根堆）
 *  2. 每个结点的值都大于或等于其左右孩子结点的值（称为大根堆）
 * 
 * 思路：
 *  1. 创建一个大顶堆，大顶堆的堆顶一顶是最大的元素
 *  2. 交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆
 *  3. 从后往前依次和第一个元素交换并重新构建，排序完成
 * 
 * 
 */

var heapSort = function (array) {
    createHeap(array)
    console.log(array)
    // 交换第一个和最后一个元素，然后重新调整大顶堆
    for (let i = array.length - 1; i > 0; i--) {
        [array[i], array[0]] = [array[0], array[i]]
        adjust(array, 0, i)
    }
    return array
}

// 构建大顶堆，从第一个非叶子结点，进行下沉操作
function createHeap (array) {
    const len = array.length
    const start = parseInt(len / 2) - 1
    for (let i = start; i >= 0; i--) {
        adjust(array, i, len)
    }
}

// 将第 target 个元素进行下沉，孩子结点有比他大的就下沉
function adjust (array, target, len) {
    for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
        if (i + 1 < len && array[i+1] > array[i]) {
            i = i + 1
        }
        // 下沉
        if (array[i] > array[target]) {
            [array[i], array[target]] = [array[target], array[i]]
            target = i
        } else {
            break
        }
    }
}