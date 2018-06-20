var username=0;
var em=0;
var pwd=0;
function submitform()
{
	validation_of_username();
	validation_of_email()
	validation_of_password();
	var user=document.form.users.value;
	var email=document.form.emails.value;
	var password=document.form.passwords.value;
	if(username==1 && em==1 && pwd==1)	
	{	
		ApiTransfer (user,email,password)
	}
}
function validation_of_username()
{
	var usernamealert=document.getElementById("useralert");
	if( document.form.users.value == "" )
         {
		usernamealert.innerHTML="Enter username".fontsize(2).fontcolor("red");
		username=0
		return;
         }
	if(document.form.users.value.length<=1||document.form.users.value.length>20)
	{	
		usernamealert.innerHTML="Enter at least 1 characterr and atmost 20 characters".fontsize(2).fontcolor("red");
		username=0;
		return;
	}
	username=1;
}
function validation_of_email()
{
	var emalert=document.getElementById("emailalert");
	if( document.form.emails.value == "" )
         {
            	emalert.innerHTML="Enter Email".fontsize(2).fontcolor("red");
		em=0;
		return;
	 }
	var filter=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	var data=document.form.emails.value;
	if (!filter.test(data))
	{
		emalert.innerHTML="Enter valid email".fontsize(2).fontcolor("red");
		em=0;
		return;
	}
	em=1;
}
function validation_of_password()
{
	var pwdalert=document.getElementById("passwordalert");
	if( document.form.passwords.value == "" )
         {
            	pwdalert.innerHTML="Enter Password".fontsize(2).fontcolor("red");
		pwd=0;
		return;
	 }
	if(document.form.passwords.value.length<6||document.form.passwords.value.length>15)
	{	
		pwdalert.innerHTML="Enter at least 6 characters and atmost 15 characters".fontsize(2).fontcolor("red");
		pwd=0;
		return;
	}
	pwd=1;
}
function seeuser()
{
	var usernamealert=document.getElementById("useralert");
	usernamealert.innerHTML="";
}
function seeemail()
{
	var emalert=document.getElementById("emailalert");
	emalert.innerHTML="";
}
function seepass()
{
	var pwdnamealert=document.getElementById("passwordalert");
	pwdnamealert.innerHTML="";
}
function ApiTransfer (user,email,password){
    var params = {
        user:user,
        email:email,
        password:password
    }
    var http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() {
        
        alert(http.responseText);
    }
}
