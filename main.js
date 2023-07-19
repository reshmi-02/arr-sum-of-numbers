var arr=[11,12,45,56,45,34,55,89,31,32];
document.write("arr=[11,12,45,56,45,34,55,89,31,32]"+"<br>"+"<br>");
document.write("Sum of the numbers is"+"<br>"+"<br>");
var sum=0;
for (let i=0;i<arr.length;i++){
	sum=sum+arr[i];
}
document.write(sum+"<br>"+"<br>");
document.write("Average of the number is"+"<br>"+"<br>");
document.write(sum/arr.length);