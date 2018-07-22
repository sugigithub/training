function myFunction() {
    var x = document.getElementById("id_1");
    var y = document.getElementById("id_2");
    var z = document.getElementById("id_3");
    x.style.backgroundColor = "#e20074";
    y.style.backgroundColor = "transparent";
    z.style.backgroundColor = "transparent";
}
function myFunction1() {
    var x = document.getElementById("id_2");
    var y = document.getElementById("id_1");
    var z = document.getElementById("id_3");
    x.style.backgroundColor = "#e20074";
    y.style.backgroundColor = "transparent";
    z.style.backgroundColor = "transparent";
}
function myFunction2() {
    var x = document.getElementById("id_3");
    var y = document.getElementById("id_2");
    var z = document.getElementById("id_1");
    x.style.backgroundColor = "#e20074";
    y.style.backgroundColor = "transparent";
    z.style.backgroundColor = "transparent";
}
function openNav() {
    document.getElementById("menu1").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu1").style.width = "0";
}
// function fun(){
// var btn = document.getElementById("btnlst");
// var btns = btn.getElementsByClassName("id_1");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
// }
function t_mobile(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','../../json/tmobile.json',true);
    xhr.send();
    xhr.onload = function(){
        if(this.status===200){
            const data = JSON.parse(this.responseText);
            let out=``
            const struct=`<li class="Rectangle_sec" style="cursor:pointer" onclick="openNav1()">\
            <div class="inner_rect">\
                <i class="material-icons star1">star_border</i>\
                <p class="text1">FINANCE</p>\
                 <p class="idw_td">{heading}</p>\
                <div class="out_div">\
                    <div class="Rectangle-s">\
                        <p class="ericson">{source}</p>\
                    </div>\
                    <hr class="line">\
                    <div class="Rectangle-s1">\
                        <p class="ericson">{target}</p>\
                    </div>\
                </div>\
                <div class="line1">\
                        <p class="na248">{model}</p//>\
                        <p class="date">{date}</p>\
                </div>\
                <div class="line1">\
                        <p class="date">{type}</p>\
                        <p class="date">{time}</p>\
                </div>\
                <div class="line1">\
                        <p class="date">{name}</p>\
                        <div class="last_rect"></div>\
                </div>\
            </div>\
        </li>`
        for(var i=0;i<data.length;i++){
            out+=struct.replace('{heading}',data[i].heading).replace('{source}',data[i].source).replace('{target}',data[i].target).replace('{model}',data[i].model).replace('{date}',data[i].date).replace('{type}',data[i].type).replace('{time}',data[i].time).replace('{name}',data[i].name)
        }
        document.getElementById("structure").innerHTML=out;
        }
       
    }
}
function openNav1() {
    document.getElementById("mySidenav").style.height = "350px";
    popup();
}

function closeNav1() {
    document.getElementById("mySidenav").style.height = "0";
}
// popup
function popup(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','../../json/tmobile.json',true);
    console.log("hjk /.,mnb ;,mnb lkjh  kjv ");
    xhr.send();
    xhr.onload = function(){
        if(this.status===200){
            const data1 = JSON.parse(this.responseText);
            let out1=``
            const struct=`<div id="mySidenav" >\
            // <a href="javascript:void(0)" class="closebtn" onclick="closeNav1()">&times;</a>\
            <hr class="pop">\
            <table>\
            <tr>\
              <td>Pipeline_Name:<span>{p_name}</span></td>\
              <td>Source_System:<span>{source}</span></td>\
              <td>Owner:<span>{name}</span></td>\
            </tr>\
            <tr>\
              <td>Pipeline_Layer:<span>{p_layer}</span></td>\
              <td>Target_System:<span>{target}</span></td>\
              <td>Source_Type<span>{source_t}</span></td>\
            </tr>\
            <tr>\
              <td>Category:<span>{type}</span></td>\
              <td>Date_Created:<span>{date}</span></td>\
              <td>Target_Type:<span>{target_t}</span></td>\
            </tr>\
          </table>\
          <div class="view">\
          <button class="button" style="vertical-align:middle"><span>view More </span></button>\
          </div>\
        </div> `;
        console.log(struct);
        for(var i=0;i<data1.length;i++){
            out1+=struct.replace('{p_name}',data1[i].p_name).replace('{source}',data1[i].source).replace('{name}',data1[i].name).replace('{p_layer}',data1[i].p_layer).replace('{target}',data1[i].target).replace('{source_t}',data1[i].source_t).replace('{type}',data1[i].type).replace('{date}',data1[i].date).replace('{target_t}',data1[i].target_t)
        }
        document.getElementById("push").innerHTML=out1;
        console.log(out1);
        }
       
    }
}
