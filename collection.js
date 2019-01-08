//考查的技术点:  1). 变量提升 2). 函数提升  3). 预处理  4). 调用顺序
var c = 1;
function c(c) {
    console.log(c);
    var c = 3;
}
c(2); //运行结果?

