let html = document.querySelector("#html");
let style = document.querySelector("#style")
let string = `/* 你好～我是小刘
 * 我是一名前端新人
 * 接下来我来演示一下我的前端功底
 * 首先准备一个div*/
#div1{
    border:3px solid red;
    width:200px;
    height:200px;
}
/* 接下来我要把div变成一个八卦图
 * 首先第一步让div变成一个圆 */
#div1{
   border-radius:50%;
   box-shadow: 0 0 10px rgba(0,0,0,0.5);
   border:none; 
}
/* 八卦图为一黑一白
 * 我们来实现这个效果*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*八卦图的一黑一白可不是笔直的一条线分开
 *接下来我能就让它再变化一下
 *变成S型的分界线～*/
 #div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
 }
 #div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
 }
 /*八卦图的上下还有两个不一样的小圆点～
  *这可是点睛之笔
  *当然也不能忘记*/
 #div1::before{
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
 }
 #div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
 }
`

let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {

        if (string[n] === "\n") {
            string2 += "<br>"  //如果是回车就把回车换成<br>
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n]  //如果不是回车就照搬
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            //如果n不是最后一个就继续执行
            n = n + 1;
            step();
        }
    }, 20);

}
step();