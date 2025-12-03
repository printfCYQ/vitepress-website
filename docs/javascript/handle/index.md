# javascript/handle

## Function.prototype.call
+ <font style="color:rgb(0, 0, 0);">call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。</font>

```javascript
Function.prototype._call = function (ctx, ...args) {
  // 如果不为空，则需要进行对象包装
  const o = ctx == undefined ? window : Object(ctx)
  // 给 ctx 添加独一无二的属性
  const key = Symbol()
  o[key] = this
  // 执行函数，得到返回结果
  const result = o[key](...args "key")
  // 删除该属性
  delete o[key]
  return result
}

const obj = {
  name: '11',
  fun() {
    console.log(this.name)
  }
}

const obj2 = { name: '22' }
obj.fun() // 11
obj.fun.call(obj2) // 22
obj.fun._call(obj2) // 22
```

```javascript
Function.prototype.myCall = function (ctx) {
  ctx = ctx ? Object(ctx) : window;
  ctx.originFn = this;

  var args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  var ret = eval("ctx.originFn(" + args + ")");
  delete ctx.originFn;
  return ret;
};
```

## Function.prototype.bind
+ <font style="color:rgb(0, 0, 0);">bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。</font>

```javascript
const obj = {
  name: '11',
  fun() {
    console.log(this.name)
  }
}
Function.prototype._bind = function (ctx, ...args) {
  // 获取函数体
  const _self = this
  // 用一个新函数包裹，避免立即执行
  const bindFn = (...reset) => {
    return _self.call(ctx, ...args, ...reset)
  }
  return bindFn
}
const obj2 = { name: '22' }
obj.fun() // 11
const fn = obj.fun.bind(obj2)
const fn2 = obj.fun._bind(obj2)
fn() // 22
fn2() // 22
```

```javascript
Function.prototype.myBind = function (ctx) {
  var originFn = this;
  var args = [].slice.call(arguments, 1);
  var _tempFn = function () {};

  var newFn = function () {
    var newArgs = [].slice.call(arguments);
    return originFn.apply(
      this instanceof newFn ? this : ctx,
      args.concat(newArgs)
    );
  };

  _tempFn.prototype = this.prototype;
  newFn.prototype = new _tempFn();
  return newFn;
};
```

## Function.prototype.apply
```javascript
Function.prototype.myApply = function (ctx, args) {
  ctx = ctx ? Object(ctx) : window;
  ctx.originFn = this;

  if (
    args &&
    typeof args !== "object" &&
    typeof args !== "function"
  ) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  if (!Array.isArray(args)) {
    return ctx.originFn();
  }

  var ret = eval("ctx.originFn(" + args + ")");
  delete ctx.originFn;
  return ret;
};
```

## call、bind、apply
```html
<script>
  Function.prototype.myCall = function (ctx) {
    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this;

    var args = [];
    for (let i = 1; i < arguments.length; i++) {
      args.push("arguments[" + i + "]");
    }

    var ret = eval("ctx.originFn(" + args + ")");
    delete ctx.originFn;
    return ret;
  };

  Function.prototype.myApply = function (ctx, args) {
    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this;

    if (args && typeof args !== "object" && typeof args !== "function") {
      throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    if (!Array.isArray(args)) {
      return ctx.originFn();
    }

    var ret = eval("ctx.originFn(" + args + ")");
    delete ctx.originFn;
    return ret;
  };

  Function.prototype.myBind = function (ctx) {
    var originFn = this;
    var args = [].slice.call(arguments, 1);
    var _tempFn = function () {};

    var newFn = function () {
      var newArgs = [].slice.call(arguments);
      return originFn.apply(
        this instanceof newFn ? this : ctx,
        args.concat(newArgs)
      );
    };

    _tempFn.prototype = this.prototype;
    newFn.prototype = new _tempFn();
    return newFn;
  };

  function test(a, b, c) {
    console.log(this);
    console.log(a, b, c);
  }

  console.log("------call-------");
  test.call({ a: 1 }, "q", "w");

  console.log("------myCall-------");
  test.myCall({ a: 1 }, "q", "w");

  console.log("------apply-------");
  test.apply({ a: 1 }, [1, 2, 3]);

  console.log("------myApply-------");
  test.myApply({ a: 1 }, [1, 2, 3]);

  console.log("-------bind------");
  let t1 = test.bind({ b: 1 }, 1, 2); // 不会执行
  t1(3); // 执行

  console.log("-------myBind------");
  let t2 = test.bind({ bb: 1 }, 1, 2); // 不会执行
  t2(6); // 执行
</script>
```

## reverse
```javascript
const myReverse = (nums, start, end) => {
  start = start || 0;
  end = end || nums.length - 1;
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 1;
    end -= 1;
  }
};
const arr = [1, 2, 3, 4, 5];
myReverse(arr);
console.log(arr); // [ 5, 4, 3, 2, 1 ]
```

## flat
+ [https://leetcode.cn/problems/flatten-deeply-nested-array/description/](https://leetcode.cn/problems/flatten-deeply-nested-array/description/)

```typescript
const myFlat = (array) => {
  const res = []
  const rec = (arr) => {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        rec(item)
      } else {
        newArr.push(item)
      }
    })
  }
  rec(array)
  return res
}
const arr = [1, [2, 3], [4, [5, [6]], 7]];
console.log(myFlat(arr)) // [1, 2, 3, 4, 5, 6, 7]
```

```javascript
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [1, [2, 3], [4, [5, [6]], 7]];
console.log([...iterTree(tree)]); // [1, 2, 3, 4, 5, 6, 7]
```

```typescript
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flat(arr[i], n - 1))
        } else {
            result.push(arr[i])
        }
    }
    return result
};
```

```typescript
const myFlat = (arr = [], depth = 1) => {
  const result = [];
  (function flat(arr, depth) { // 形参
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        flat(item, depth - 1)
      } else {
        result.push(item)
      }
    })	
  })(arr, depth) // 实参
  return result;
}
const arr = [1, [2, 3], [4, [5, [6]], 7]];
console.log(myFlat(arr, 1)) //[1, 2, 3, 4, [5, [6]], 7]
console.log(myFlat(arr, Infinity)) // [1, 2, 3, 4, 5, 6, 7]
```

```typescript
// leetcode 超时
const myFlat = (arr, deep = 1) => {
  if (deep <= 0) return arr;
  return arr.reduce(
    (res, curr) =>
      res.concat(Array.isArray(curr) ? myFlat(curr, deep - 1) : curr),
    []
  );
};

const arr = [1, [2, 3], [4, [5, [6]], 7]];
console.log(myFlat(arr, 2)) //[1, 2, 3, 4, 5, [6], 7]
```

## Array.prototype.map
+ <font style="color:rgb(1, 1, 1);">map 中的 exc 接受三个参数，分别是: 元素值、元素下标和原数组</font>
+ <font style="color:rgb(1, 1, 1);">map 返回的是一个新的数组，地址不一样</font>

```vue
Array.prototype.myMap = function (cb) {
  var _arr = this;
  var _len = _arr.length;
  var _arg = arguments[1] || window;
  var _newArr = [];
  var _item;
  var _res;
  for (let i = 0; i < _len; i++) {
    _item = deepClone(_arr[i]);
    _res = cb.apply(_arg, [_item, i, _arr]);
    _res && _newArr.push(_res);
  }
  return _newArr
};
```

## Array.prototype.filter
+ <font style="color:rgb(1, 1, 1);">filter 中的 exc 接受三个参数，与map一致，主要实现的是数组的过滤功能，会根据 exc 函数的返回值来判断是否“留下”该值。</font>
+ <font style="color:rgb(1, 1, 1);">filter 返回的是一个新的数组，地址不一致。</font>

```javascript
Array.prototype._filter = function (exc) {
  const result = []
  this.forEach((item, index, arr) => {
    if (exc(item, index, arr)) {
      result.push(item)
    }
  })
  return result
}
const b = [1, 3, 4, 5, 6, 2, 5, 1, 8, 20]

console.log(b._filter(item => item % 2 === 0)) // [ 4, 6, 2, 8, 20 ]
```

```vue
Array.prototype.myFilter = function (cb) {
  var _arr = this;
  var _len = _arr.length;
  var _arg = arguments[1] || window;
  var _newArr = [];
  var _item;
  var _res;
  for (let i = 0; i < _len; i++) {
    _item = deepClone(_arr[i]);
    _res = cb.apply(_arg, [_item, i, _arr]);
    _res && _newArr.push(_item);
  }
  return _newArr;
};
```

## Array.prototype.reduce
+ <font style="color:rgb(27, 27, 27);">callbackFn</font>
    - `<font style="color:rgb(27, 27, 27);">previousValue</font>`<font style="color:rgb(27, 27, 27);">：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。</font>
    - `<font style="color:rgb(27, 27, 27);">currentValue</font>`<font style="color:rgb(27, 27, 27);">：数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。</font>
    - `<font style="color:rgb(27, 27, 27);">currentIndex</font>`<font style="color:rgb(27, 27, 27);">：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始。</font>
    - `<font style="color:rgb(27, 27, 27);">array</font>`<font style="color:rgb(27, 27, 27);">：用于遍历的数组。</font>
+ <font style="color:rgb(27, 27, 27);">initialValue</font>
    - <font style="color:rgb(27, 27, 27);">作为第一次调用 callback 函数时参数 </font>_<font style="color:rgb(27, 27, 27);">previousValue</font>_<font style="color:rgb(27, 27, 27);"> 的值。若指定了初始值 initialValue，则 currentValue 则将使用数组第一个元素；否则 previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素。	</font>

```vue
Array.prototype.myReduce = function (cb, initialValue = 0) {
  var _arr = this;
  var _len = _arr.length;
  var _item;
  for (let i = 0; i < _len; i++) {
    _item = deepClone(_arr[i]);
    initialValue = cb(initialValue, _item, i, _arr);
  }
  return initialValue;
};
```

```vue
Array.prototype.myReduce = function (cb, initialValue = 0, arg = window) {
  var _arr = this;
  var _len = _arr.length;
  var _item;
  for (let i = 0; i < _len; i++) {
    _item = deepClone(_arr[i]);
    initialValue = cb.apply(arg, [initialValue, _item, i, _arr]);
  }
  return initialValue;
};
```

## Array.prototype.reduceRight
```vue
Array.prototype.myReduceRight = function (cb, initialValue = 0) {
  var _arr = this;
  var _len = _arr.length;
  var _item;
  for (let i = _len - 1; i >= 0; i--) {
    _item = deepClone(_arr[i]);
    initialValue = cb(initialValue, _item, i, _arr);
  }
  return initialValue;
};
```

```vue
Array.prototype.myReduceRight = function (cb, initialValue = 0, arg = window) {
  var _arr = this;
  var _len = _arr.length;
  var _item;
  for (let i = _len - 1; i >= 0; i--) {
    _item = deepClone(_arr[i]);
    initialValue = cb.apply(arg, [initialValue, _item, i, _arr]);
  }
  return initialValue;
};
```

## Array.prototype.forEach 
```vue
Array.prototype.myForEach = function (cb) {
  var _arr = this;
  var _len = _arr.length;
  var _arg = arguments[1] || window; // 第二个参数 默认 window
  for (let i = 0; i < _len; i++) {
    cb.apply(_arg, [_arr[i], i, _arr]); // 第二个参数改变 cb this 指向
  }
};

[1, 2, 3].myForEach(function(item, index, array) {
  console.log(item, index, array);
});
```

## Array.prototype.every
```vue
Array.prototype.myEvery = function (cb) {
  var _arr = this;
  var _len = _arr.length;
  var _arg = arguments[1] || window;
  var _res = true;
  for (let i = 0; i < _len; i++) {
    _res = cb.apply(_arg, [_arr[i], i, _arr]);
    if (!_res) break;
  }
  return _res;
};
```

## Array.prototype.some
```vue
Array.prototype.mySome = function (cb) {
  var _arr = this;
  var _len = _arr.length;
  var _arg = arguments[1] || window;
  var _res = false;
  for (let i = 0; i < _len; i++) {
    _res = cb.apply(_arg, [_arr[i], i, _arr]);
    if (_res) break;
  }
  return _res;
};
```

