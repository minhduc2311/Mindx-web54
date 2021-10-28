## 1. Cách kiểm tra một biến x cho trước là function, array, number, string, undefined

<!-- Function -->

const f = function() {};
console.log(typeof f)

<!-- Array: -->
console.log(Array.isArray([1,2,3]));

<!-- Number: -->
const n = 2
console.log(typeof n);

<!-- String: -->
const s = 'abc';
console.log(typeof s);

<!-- Undefine: -->

if(x === undefined) {
    console.log('true');
}

---

## 2. Tìm hiểu về Event loop, giải thích tại sao đoạn code sau chữ Một lại hiện sau chữ Hai
```
setTimeout(function() {
console.log('Một');
}, 0);

function second() {
console.log('Hai');
}
second();

```

* Khi Call Stack nhận diện setTimeout là 1 hàm bất đồng bộ sẽ đẩy sang Web Apis xử lý, sau đó đẩy sang Callback Queue. Sau khi Call Stack đã thực thi xong các lệnh, setTimeout mới được Call Stack thực thi.

* Trong ví dụ trên, hàm setTimeout được đẩy sang Web Apis để thực thi sau đó lập tức đẩy sang Callback Queue để đợi Call Stack thực thi xong hàm second() sau đó mới thực thi hàm setTimeout.

---

## 3. Tìm hiểu về deep copy và shallow copy trong JS. Giải thích kết quả của đoạn code sau.
```
const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
const apples = [...macbooks];
apples[0] = 'air';
apples[1].model = 'm1';
console.log(macbooks) // ['macbook2015', { model: 'm1' }, 'macbook2017']
console.log(apples) // ['air', { model: 'm1' }, 'macbook2017']

```

* Khi sử dụng Spread Operator, Nested Object bên trong sẽ ko được deep copy bởi vì bản chất của chúng chỉ là references

