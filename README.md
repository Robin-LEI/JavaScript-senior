# JavaScript-senior
JavaScript高级学习  
目录  
### [lesson01-数据类型](#lesson01)
### <a href="#lesson02">lesson02-再谈数据类型相关问题</a>
### [lesson03-对内存的认识](#lesson03)
### <a href="#lesson04">lesson04-谈谈对变量赋值的理解</a>
### [lesson05-值传递、址传递、释放内存](#lesson05)
### [lesson06-什么是对象?](#lesson06)
### [lesson07-认识一下函数](#lesson07)

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

**<a name="lesson02">再谈数据类型</a>**
1. 对象分为两种，实例对象和类型对象， function Person() {} //这是一个构造函数，var p = new Person()，Person本身是一个类型对象，p就是一个实例对象
2. undefined和null有什么区别？undefined是变量定义了但是并没有赋值，但是null是变量定义了且为该变量赋值为null，那么在什么情况下我们需要为变量赋值为null呢？var b = null; //说明我们将要为b赋值一个对象，最后再次将b = null，目的是让b指向的对象为垃圾对象（被垃圾回收器回收）
3. 变量分为基本类型的数据和引用类型的数据，判断一个变量是什么类型，是根据这个变量在内存中的值的类型来判断的，如果变量存储的是地址值，那么就是引用类型变量
4. 数据类型也分为两种，基本类型的数据和对象类型的数据

**<span id="lesson03">对内存的认识</span>**
1. 数据是存储在内存中的，本质上还是0101...，代表特定的数据信息
2. 内存在通电后，会产生一片存储空间，这片空间是临时存储数据的地方
3. 注意，在断电后，内存的存储空间消失，此时保存在内存上的数据也会丢失
4. 每一个变量都用来对应一块内存，变量名用来找内存，是一个标识符
5. 变量是引用类型变量，那么变量存储的是地址值
6. 内存分为两大类，堆和栈，堆：存储的是对象(本身)，栈：存储全局变量和局部变量、函数名
7. 代码存储在内存中，经过编译后被解析执行
8. 数据的特点：可传递
9. 与其说万物皆对象，不如说一切皆数据
10. 内存中所有的操作目标：数据，算数运算、逻辑运算、赋值运算、运行函数

**<a name="lesson04">谈谈对变量赋值的理解</a>**
1. var a = xxx;变量a在内存中保存的到底是什么？如果此时a是基本数据类型，那么在内存中a保存的是数据指，如果a是对象类型，那么在内存中a保存的是内容是地址值，如果xxx也是一个变量，那么a保存的是xxx的内存内容，也同样分为两种，基本数据类型和对象类型
2. 关于引用变量赋值的问题，①2个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看到的是修改之后的数据；②2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象

**<span id="lesson05">值传递、址传递、释放内存</span>**
1. JS调用函数时传递变量是值传递还是址传递？
	* 理解1：都是值传递，一个传的是基本数据值、一个传递的是引用类型的地址值
	* 理解2：可能是值传递，也可能是址传递(对于引用类型)
2. 什么时候进行写内存，什么时候进行读内存，赋值号左边的是写内存，其余的是读内存
3. JS引擎是如何管理内存的？
	* 分配小内存空间-得到它的使用权-存储数据-反复操作-释放小内存空间
4. var a = 3; var obj = {};此时占据3个小内存空间，obj = null;这个时候占据两个小内存空间，堆内存的空间被垃圾回收器回收
5. 函数执行结束，函数内的局部变量*自动释放*，对象：成为垃圾对象-由垃圾回收器回收

**<span id="lesson06">什么是对象?</span>**
1. 对象是多个数据的封装体，用来保存多个数据
2. 一个对象在现实生活中就代表一个事物
3. 为什么要用对象？为了统一管理多个数据
4. 对象的组成，属性名和属性值，方法是一种特别的属性，值为函数
5. 属性由名和值组成，名的类型是字符串，值的类型是任意类型
6. 如何访问对象中的数据？ . 和 []，两种方法，但是前者有时候不能用，后者可以通用，属性名包含特殊字符诸如-时前者不能用，当属性名是一个变量不确定时，不能用前者

**<span id="lesson07">认识一下函数</span>**
1. 什么是函数？函数是用来实现特定功能的n行语句的封装体
2. 只有函数是可执行的，其他类型是不能执行的
3. 为什么要使用函数？为了实现代码的复用性，函数体现的是封装的思想
4. 如何定义函数？两种方式，函数声明式function fn() {...}和表达式var fn = function(){...}
5. 如何调用函数？
	* 直接调用 fn()
	* obj.fn() 通过对象来调用
	* new Fn() new调用
	* fn.call/apply(obj) 临时调用，临时让fn成为obj对象的方法进行调用
