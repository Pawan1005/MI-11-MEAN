window.addEventListener("load",()=>{
    const Name=localStorage.getItem("Name");
    const RollNo=localStorage.getItem("RollNo");
    const History=localStorage.getItem("History");
    const Sicence=localStorage.getItem("Sicence");
    const Maths=localStorage.getItem("Maths");
    const Economics=localStorage.getItem("Economics");
    const Evs=localStorage.getItem("Evs");
    sessionStorage.getItem("Name1");
    sessionStorage.getItem("RollNo1");
    sessionStorage.getItem("History1");
    sessionStorage.getItem("Science1");
    sessionStorage.getItem("Maths1");
    sessionStorage.getItem("Economics1");
    sessionStorage.getItem("Evs");
    let total=parseInt(History)+parseInt(Sicence)+parseInt(Maths)+parseInt(Economics)+parseInt(Evs);
    let percentage=parseInt((total/5)*100);
    let grade;
    if(percentage=>80){
        grade= "A+"
    }
   else if(percentage < 80 && percentage >=60){
       grade="A";
   }
    else if(percentage < 80 && percentage >=60){
       grade="A";
   }
    else if(percentage < 60 && percentage >=50){
       grade="B";
   }
    else if(percentage < 50 && percentage >=40){
       grade="C";
   }
   else{
       grade="Fail"
   }
   document.getElementById("result1").innerHTML=Name;
   document.getElementById("result2").innerHTML=RollNo;
   document.getElementById("result3").innerHTML=History;
   document.getElementById("result4").innerHTML=Sicence;
   document.getElementById("result5").innerHTML=Maths;
   document.getElementById("result6").innerHTML=Economics;
   document.getElementById("result7").innerHTML=Evs;
   document.getElementById("result8").innerHTML=total;
   document.getElementById("result9").innerHTML=percentage+"%";
   document.getElementById("result10").innerHTML=grade;

});
function remove(){
   localStorage.clear();
   sessionStorage.clear(); 
}