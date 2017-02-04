#js-requireAsync
-This project support a standard main function that used in the browser environmont.
-该项目提供一个使用在浏览器中标准的main函数


#How to start
-index.html   
{% highlight html linenos %}
<html>
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="node_modules/requirejs/require.js" data-main="index.js"></script>
    </head>
    <body>
    </body>
</html>
{% endhighlight %}
-Then you can write your code in the main function that contained in the index.js.
-然后你就可以在index.js文件中的main函数中写代码了


#requireAsync :function
-Because the main function is actually a genarator. So you can use the requireAsync function to load modules.
-Before require these modules you need to config the paths to the requirejs just like your other project that based on the requirejs.
-This function return a Promise<Array> that resolve the array of modules required.

-因为main函数实际上是一个生成器，所以你可以使用requireAsync函数来引用需要加载的模块
-在加载前，你需要在requirejs.config中添加这些路径
-这个函数返回一个Promise<Array>对象，该对象在requirejs正确加载时resolve一个包含所有要求加载的模块的数组

{% highlight javascript linenos %}
function* main(){
    let [$,bluebird] = yield requireAsync('jquery','bluebird');
    let [bootstrap] = yield requireAsync('bootstrap');
}
{% endhighlight %}
