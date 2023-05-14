
function validateform(){  
var name=document.myform.mail.value;  
var password=document.myform.password.value;  
  
if (name==null || name==""){  
  alert("Email/Phone No field can't be null");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  
