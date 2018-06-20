var nm=0;
var em=0;
var phn=0;
var q=0;
function submitform()
{
	validation_of_name();
	validation_of_email();
	validation_of_phone();
	validation_of_question();
	var name=document.form.names.value;
 	var email=document.form.emails.value;
	var phone=document.form.phones.value;
	var question=document.form.questions.value;
	if(nm==1 && em==1 && phn==1 && q==1)	
	{	
		ApiTransfer (name,email,phone,question)
	}
}
function validation_of_name()
{
	var nmalert=document.getElementById("namealert");
	if( document.form.names.value == "" )
         {
		nmalert.innerHTML="Enter Name".fontsize(2).fontcolor("red");
		nm=0;
		return;
         }
	if(document.form.names.value.length<3||document.form.names.value.length>20)
	{	
		nmalert.innerHTML="Enter at least 3 characterr and atmost 20 characters".fontsize(2).fontcolor("red");
		nm=0;
		return;
	}
	nm=1;
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
function validation_of_phone()
{
	var phnalert=document.getElementById("phonealert");
	if( document.form.phones.value == "" )
         {
		phnalert.innerHTML="Enter Phone Number".fontsize(2).fontcolor("red");
		phn=0;
		return;
         }
	if(document.form.phones.value.length<10||document.form.phones.value.length>10)
	{	
		phnalert.innerHTML="Enter a 10 digit number".fontsize(2).fontcolor("red");
		phn=0;
		return;
	}
	phn=1;
}
function validation_of_question()
{
	var qalert=document.getElementById("questionalert");
	if( document.form.questions.value == "" )
         {
            	qalert.innerHTML="Enter Question".fontsize(2).fontcolor("red");
		q=0;
		return;
	 }
	if(document.form.questions.value.length<=1||document.form.questions.value.length>200)
	{	
		qalert.innerHTML="Enter at least 1 characterr and atmost 200 characters".fontsize(2).fontcolor("red");
		q=0;
		return;
	}
	q=1;
}
function seename()
{
	var nmalert=document.getElementById("namealert");
	nmalert.innerHTML="";
}
function seeemail()
{
	var emalert=document.getElementById("emailalert");
	emalert.innerHTML="";
}
function seephone()
{
	var phnalert=document.getElementById("phonealert");
	phnalert.innerHTML="";
}
function seequestion()
{
	var qalert=document.getElementById("questionalert");
	qalert.innerHTML="";
}
function ApiTransfer (name,email,phone,question){
    var params = {
        name:name,
        email:email,
        phone:phone,
        question:question
    }
    var http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() {
        
        alert(http.responseText);
    }
}
