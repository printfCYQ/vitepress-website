# 二分查找

## 什么是二分查找

二分查找是计算机科学中最基本、最有用的算法之一。 它描述了在有序集合中搜索特定值的过程。
二分查找中使用的术语：

- 目标 Target —— 你要查找的值
- 索引 Index —— 你要查找的当前位置
- 左、右指示符 Left，Right —— 我们用来维持查找空间的指标
- 中间指示符 Mid —— 我们用来应用条件来确定我们应该向左查找还是向右查找的索引

## 3 个部分

1. 预处理 —— 如果集合未排序，则进行排序。
2. 二分查找 —— 使用循环或递归在每次比较后将查找空间划分为两半。
3. 后处理 —— 在剩余空间中确定可行的候选者。

## 3 个模板

### 模板一

> 关键属性
>
> - 二分查找的最基础和最基本的形式。
> - 查找条件可以在不与元素的两侧进行比较的情况下确定（或使用它周围的特定元素）。
> - 不需要后处理，因为每一步中，你都在检查是否找到了元素。如果到达末尾，则知道未找到该元素。

> 区分语法
>
> - 初始条件：left = 0, right = length-1
> - 终止：left > right
> - 向左查找：right = mid-1
> - 向右查找：left = mid+1

```js
var binarySearch = function (nums, target) {
  if (nums == null || nums.length == 0) return -1;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    // Prevent (left + right) overflow
    let mid = left + (right - left) / 2; // Math.floor
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // End Condition: left > right
  return -1;
};
```
