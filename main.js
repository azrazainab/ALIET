function LoadJson(file,callback) {
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("GET",file,true);
  a.onreadystatechange=function() {
    if (a.readyState===4 && a.status=="200") {
      callback(a.responseText)
    }
  }
  a.send();
}

LoadJson("data.json",function(text) {
  let data=JSON.parse(text);
  console.log(data);
  careerObject(data.co);
  education(data.educationqualifications);
  technical(data.tech);
  achieve(data.achievements);
  skill(data.skills);
  langs(data.lang);
})
var right=document.getElementById('right');

// Career Objective
function careerObject(career) {
  var careerObj=document.createElement('h4');
  careerObj.textContent="Career Objective :";
  careerObj.appendChild(document.createElement("HR"));
  var para=document.createElement("p");
  para.textContent=career;
  right.appendChild(careerObj);
  right.appendChild(para);
  right.appendChild(document.createElement("BR"));
}

// Eduactional Qualifications
function education(edu){
  var Educational=document.createElement("h4");
  Educational.textContent="Educational Qualifications :";
  Educational.appendChild(document.createElement("HR"));
  right.appendChild(Educational);
  var para1=document.createElement("p");
  var li="";
  for ( i in edu){
    li+="<b>" + edu[i].name + "</b><br>" + edu[i].inst + "<br><br>";
  }
  para1.innerHTML=li;
  right.appendChild(para1);
  right.appendChild(document.createElement("BR"));
}

//Technical Qualifications
function technical(tec){
  var technic=document.createElement("h4");
  technic.textContent="Technical Qualifications :";
  technic.appendChild(document.createElement("HR"));
  right.appendChild(technic);
  var para2=document.createElement("P");
  var li="";
  for(i in tec){
    li+="<b>" + tec[i].name + "</b><br>" + tec[i].value + "<br><br>";
  }
  para2.innerHTML=li;
  right.appendChild(para2);
  right.appendChild(document.createElement("BR"));
}

//Achievements
function achieve(ach){
  var achi=document.createElement("h4");
  achi.textContent="Achievements :";
  achi.appendChild(document.createElement("HR"));
  right.appendChild(achi);
  var para3=document.createElement("P");
  para3.textContent=ach;
  right.appendChild(para3);
  right.appendChild(document.createElement("BR"));
}

//Skills
function skill(sk){
  var ski=document.createElement("h4");
  ski.textContent="Skills :";
  ski.appendChild(document.createElement("HR"));
  right.appendChild(ski);
  var para4=document.createElement("P");
  var li="";
  for(i in sk){
    li+="<b>" + sk[i].type + "</b><br>" + sk[i].list + "<br><br>";
  }
  para4.innerHTML=li;
  right.appendChild(para4);
  right.appendChild(document.createElement("BR"));
}

//Languages Spoken
function langs(ls){
  var languages=document.createElement("h4");
  languages.textContent="Languages Spoken :";
  languages.appendChild(document.createElement("HR"));
  right.appendChild(languages);
  var para5=document.createElement("P");
  para5.textContent=ls;
  right.appendChild(para5);
  right.appendChild(document.createElement("BR"));
}
