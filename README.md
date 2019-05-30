# JavaScript-senior
JavaScript高级学习
### [lesson01-数据类型](#lesson01)
**<span id="lesson01">数据类型</span>**
1. 数据类型分为基本数据类型和引用（对象）数据类型
2. 基本数据类型：String、Number、Boolean、undefined、null
3. 引用（对象）数据类型：Object、Array、Function ...
4. 对象用来存储数据的，无序的
5. 数组有序的，是一种特别的对象，数值下标(属性值)
6. 函数也是一种特殊的类型，存储代码，用来执行的
7. typeof可以用来判断number、string、boolean、function、undefined，不能用来判断null与object，不能用来判断array与object，判断null和array时，均返回object
8. === 全等号可以用来判断undefined和null，不能用来判断数值，因为number数值不唯一，但是undefined和null的各自只有一个值
9. intanceof 用来判断对象的具体类型，A(实例对象) intanceof B(构造函数)，意思是问A是不是B的实例？

### <a href="#lesson02">lesson02-再谈数据类型相关问题</a>
**<a name="lesson02">再谈数据类型</a>**
1. 对象分为两种，实例对象和类型对象， function Person() {} //这是一个构造函数，var p = new Person()，Person本身是一个类型对象，p就是一个实例对象
2. undefined和null有什么区别？undefined是变量定义了但是并没有赋值，但是null是变量定义了且为该变量赋值为null，那么在什么情况下我们需要为变量赋值为null呢？var b = null; //说明我们将要为b赋值一个对象，最后再次将b = null，目的是让b指向的对象为垃圾对象（被垃圾回收器回收）
3. 变量分为基本类型的数据和引用类型的数据，判断一个变量是什么类型，是根据这个变量在内存中的值的类型来判断的，如果变量存储的是地址值，那么就是引用类型变量
4. 数据类型也分为两种，基本类型的数据和对象类型的数据

