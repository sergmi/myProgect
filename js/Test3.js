//������ �������������� �������� ������ � 4-�� ����������

//4-� �������
var D={
name:"D",
value:4,
left:null,
right:null
}

//2-� �������
var B={
name:"B",
value:6,
left:D,
right:null
}

//3-� �������
var C={
name:"C",
value:10,
left:null,
right:null
}

//1-� ������� (������)
var A={
name:"A",
value:8,
left:B,
right:C
}

//��� ������� �������� ������ �������� ��� ��������� ������
function adding(){
newEl=new Object();
newEl.name=newName[index]; //���������� ��� ��������
alert(index+"   newElName="+newEl.name)
index++;
newEl.value=item; //���������� �������� ������ ��������, �.�. ������ �������� ��� ��� � ������
newEl.left=null; //������ ������ �������� ������ ����� �������
newEl.right=null; //������ ������ �������� ������ ����� �������
return newEl;
}

//�������� ����������
var checking;
var following;
var newEl;

//������ ���� ��� ����� ��������� ��������� ������
var newName=new Array('A','B','C','D','E','F','G','H');

//����������-�������
var index=4;

//����� ������������ �������� (item) ��� ����������� ������ �������� � ������ � ����� ���������
var item=3;
//����� ������� � �����
checking=A;

//���� ����������� ���� �������� ���������� (following) �� ������
do {if(item==checking.value){alert("found, item = "+checking.name);break}//���� ��������� ������������ �������� (item) �����-�� �������� (value) �������� ������ - ��������� � ������ ��������
if(item<checking.value){following=checking.left;}//���� ��������� ������������ �������� ������ �������� ������������ �������� ������ (checking) - ���������� ���������� (following) ����� ������� �� ������������
if(item>checking.value){following=checking.right;}//���� ��������� ������������ �������� ������ �������� ������������ �������� ������ - ���������� ���������� ������ ������� �� ������������
if(following!==null){checking=following}}//���� ����������� �������� ���������� �� ������, �� �������� ���������� ����� ����������� ���������
while (following!==null);

if((following==null)&&(item<checking.value)){checking.left=adding()}//���� ����������� �������� ���������� ������ � ��������� ������������ �������� ������ �������� ������������ �������� ������, �� ������ ����� ���� ������������
if((following==null)&&(item>checking.value)){checking.right=adding()}//���� ����������� �������� ���������� ������ � ��������� ������������ �������� ������ �������� ������������ �������� ������, �� ������ ������ ���� ������������

//alert("index="+index+";  checkingName="+checking.name+";  newEl="+newEl+";  newElName="+newEl.name+";   checkingLeft="+checking.left+";  newElLeft= "+newEl.left+"newElRight= "+newEl.right)


//�������� ����� � ������ ������������ ���������, ������� � ����� 
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
