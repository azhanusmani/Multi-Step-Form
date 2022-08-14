let form1=document.getElementById("form1")



document.getElementById("next").addEventListener("click", function () {
  
  let name = document.getElementById("name").value;
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  if(name==""||fname=="" ||mname =="")
{
    alert("Fill all the details");
} else{
  form1.classList.add("hide");
  form2.classList.add("show");
  form1.classList.remove("show");
}
});

document.getElementById("next2").addEventListener("click", function () {

    let email = document.getElementById("email").value;
    let mob = document.getElementById("mob").value;
    let insta = document.getElementById("insta").value;

    if(email==""||mob==""|| insta==""){
        alert("Fill all the details");
    }else{

  form2.classList.remove("show");
  form2.classList.add("hide");
  form3.classList.add("show");

  }
});

document.getElementById("back2").addEventListener("click", function () {
  form2.classList.remove("show");
  form1.classList.add("show");
});

document.getElementById("back3").addEventListener("click", function () {
  form3.classList.remove("show");
  form2.classList.add("show");
});

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  let adress = document.getElementById("adress").value;
let city = document.getElementById("city").value;
let country = document.getElementById("country").value;

if(adress==""||city=="" || country==""){
    alert ("Fill all the details")
}else{
  form3.classList.remove("show");
  form3.classList.add("hide");

  let name = document.getElementById("name").value;
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let email = document.getElementById("email").value;
  let mob = document.getElementById("mob").value;
  let insta = document.getElementById("insta").value;
 
  document.getElementById("final").innerHTML = "Thanks for filling the form";
  document.getElementById(
    "result"
  ).innerHTML = `We have recieved your Information which are as follows: <br> Name: ${name} <br> Father's Name: ${fname} <br> Mother's Name: ${mname}
   <br> Email Adress ${email} <br> Mobile Number : ${mob} <br> Instagram ID: ${insta} <br>
   Adress: ${adress} <br> City: ${city} <br> Country: ${country}`;
  }

  let confirm = document.getElementById("confirm")
   confirm.classList.remove("hide");
   confirm.classList.add("show");
   


});

document.getElementById("confirm").addEventListener("click",function(){

    final.classList.remove("show")

    final.classList.add("hide")
    result.classList.remove("show")
result.classList.add("hide")

    document.getElementById("message").innerHTML="Thank You <br> We have recieved your information <br> Our team will get back to you";
 let confirm=document.getElementById("confirm")
    confirm.classList.remove("show")
    confirm.classList.add("hide")


})
