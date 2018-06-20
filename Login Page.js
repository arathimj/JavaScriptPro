var username=0;
var pwd=0;
function submitform()
{
	validation_of_username();
	validation_of_password();
	var user=document.form.users.value;
 	var password=document.form.passwords.value;
	if(username==1 && pwd==1)
	{	
		ApiTransfer (user, password)
	}
}
function validation_of_username()
{
	var usernamealert=document.getElementById("useralert");
	if( document.form.users.value == "" )
         {
		usernamealert.innerHTML="Enter username".fontsize(2).fontcolor("red");
		username=0;
		return;
         }
	username=1;
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
	pwd=1;
}
function seeuser()
{
	var usernamealert=document.getElementById("useralert");
	usernamealert.innerHTML="";
}
function seepass()
{
	var pwdnamealert=document.getElementById("passwordalert");
	pwdnamealert.innerHTML="";
}
function ApiTransfer (user,password){
    var params = 
	{
        user:user,
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
