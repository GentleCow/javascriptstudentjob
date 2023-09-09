/* var num = prompt();
var operation = prompt();
var num2 = prompt(); 

// alert (eval(num + operation + num2)); 

if (operation == "-"){
    alert(num - num2);
}
 
   else if (operation == "*"){
    alert(num * num2);
   }

     else if (operation == "/"){
        alert(num / num2);
     }

       else if (operation == "+"){
        alert (Number(num) + Number(num2));
       }

       else {
        alert ("Wrong operation");
       }
       */

       

       const isStudent = confirm("ბრძანდებით თუ არა სტუდენტი?");
       //alert(Number(isStudent));
       
       const hasJob = confirm("ხართ თუ არა დასაქმებული ამჟამად?");
       //alert(Number(hasJob));
       
       if (isStudent && hasJob) {
           alert("სწავლისა და მუშაობის დაბალანსება შეიძლება იყოს რთული!");
       } else if (isStudent && !hasJob) {
           alert("ცოდნა სინათლეა.");
       } else if (!isStudent && hasJob) {
           alert("იმუშავე და მიაღწიე კარიერულ მიზნებს.");
       } else {
           alert("ისიამოვნე თავისუფლებით!");
       }
       

 



