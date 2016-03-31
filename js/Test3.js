//создаю первоначальное бинарное дерево с 4-мя элементами

//4-й элемент
var D={
name:"D",
value:4,
left:null,
right:null
}

//2-й элемент
var B={
name:"B",
value:6,
left:D,
right:null
}

//3-й элемент
var C={
name:"C",
value:10,
left:null,
right:null
}

//1-й элемент (корень)
var A={
name:"A",
value:8,
left:B,
right:C
}

//это функция создания нового элемента для бинарного дерева
function adding(){
newEl=new Object();
newEl.name=newName[index]; //присваиваю имя элементу
alert(index+"   newElName="+newEl.name)
index++;
newEl.value=item; //присваиваю значение новому элементу, т.к. такого значения еще нет в дереве
newEl.left=null; //листья нового элемента дерева задаю пустыми
newEl.right=null; //листья нового элемента дерева задаю пустыми
return newEl;
}

//описываю переменные
var checking;
var following;
var newEl;

//массив имен для новых элементов бинарного дерева
var newName=new Array('A','B','C','D','E','F','G','H');

//переменная-счетчик
var index=4;

//ввожу произвольное значение (item) для дальнейшего поиска элемента в дереве с таким значением
var item=3;
//поиск начинаю с корня
checking=A;

//цикл повторяется пока значение переменной (following) не пустое
do {if(item==checking.value){alert("found, item = "+checking.name);break}//если введенное произвольное значение (item) соотв-ет значению (value) элемента дерева - сообщение с именем элемента
if(item<checking.value){following=checking.left;}//если введенное произвольное значение меньше значения проверяемого элемента дерева (checking) - присваиваю переменной (following) левый элемент от проверяемого
if(item>checking.value){following=checking.right;}//если введенное произвольное значение больше значения проверяемого элемента дерева - присваиваю переменной правый элемент от проверяемого
if(following!==null){checking=following}}//если присвоенное значение переменной не пустое, то значение переменной делаю проверяемым элементом
while (following!==null);

if((following==null)&&(item<checking.value)){checking.left=adding()}//если присвоенное значение переменной пустое и введенное произвольное значение меньше значения проверяемого элемента дерева, то создаю левый лист проверяемому
if((following==null)&&(item>checking.value)){checking.right=adding()}//если присвоенное значение переменной пустое и введенное произвольное значение больше значения проверяемого элемента дерева, то создаю правый лист проверяемому

//alert("index="+index+";  checkingName="+checking.name+";  newEl="+newEl+";  newElName="+newEl.name+";   checkingLeft="+checking.left+";  newElLeft= "+newEl.left+"newElRight= "+newEl.right)


//повторяю поиск с другим произвольным значением, начиная с корня 
var item=2;
checking=A;

do {if(item==checking.value){alert("found, item = "+checking.name);break}
if(item<checking.value){following=checking.left;}
if(item>checking.value){following=checking.right;}
if(following!==null){checking=following}}
while (following!==null);

if((following==null)&&(item<checking.value)){checking.left=adding()}
if((following==null)&&(item>checking.value)){checking.right=adding()}

alert("Done");
