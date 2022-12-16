import{N as k}from"./NavBarTop.5f0518b9.js";import{j as v,d as B}from"./fdb.f74819c7.js";import{_ as y,ak as M,r as g,o as h,c as p,b as _,d as e,ah as f,ai as S,t as m,p as w,f as I}from"./index.17780bda.js";import{f as E}from"./AgeCalculator.6368782f.js";import{B as T}from"./BackButton.830c8452.js";import"./firebaseAuth.731bdb67.js";const r={"elleboog-flexie-extensie":{man:{"2-8":153.6,"9-19":153.6,"20-44":145.8,"45+":142.8},vrouw:{"2-8":159.7,"9-19":156.1,"20-44":154.7,"45+":151.9}},"heup-extensie":{man:{"2-8":28.3,"9-19":18.2,"20-44":17.4,"45+":13.5},vrouw:{"2-8":26.2,"9-19":20.5,"20-44":18.1,"45+":16.7}},"heup-flexie":{man:{"2-8":131.1,"9-19":135.2,"20-44":130.4,"45+":127.2},vrouw:{"2-8":140.8,"9-19":134.9,"20-44":133.8,"45+":130.8}},"knie-extensie":{man:{"2-8":149.4,"9-19":144,"20-44":138.7,"45+":133.4},vrouw:{"2-8":158,"9-19":144.7,"20-44":143.5,"45+":139}},"enkel-dorsaalflexie":{man:{"2-8":22.8,"9-19":16.3,"20-44":12.7,"45+":11.9},vrouw:{"2-8":24.8,"9-19":17.3,"20-44":13.8,"45+":11.6}},"elleboog-supinatie":{man:{"2-8":86.4,"9-19":87.8,"20-44":85,"45+":82.4},vrouw:{"2-8":93.7,"9-19":90,"20-44":90.6,"45+":87.2}},"elleboog-pronatie":{man:{"2-8":79.6,"9-19":79.8,"20-44":76.9,"45+":77.7},vrouw:{"2-8":84.6,"9-19":81.2,"20-44":82,"45+":80.8}},"shouder-flexie":{man:{"2-8":177.8,"9-19":170.9,"20-44":168.8,"45+":164},vrouw:{"2-8":178.6,"9-19":171.8,"20-44":172,"45+":168.1}},"enkel-plantairflexie":{man:{"2-8":55.8,"9-19":52.8,"20-44":54.6,"45+":49.4},vrouw:{"2-8":67.1,"9-19":57.3,"20-44":62.1,"45+":56.5}}};var c="idle",d;const C={name:"MeasureStart",components:{NavBarTop:k,BackButton:T},inject:["sensorHandler"],data(){return{miliseconds:0,seconds:0,minutes:0,route:M(),button1text:"Start meting",patient:null,sensorMeasurements:[]}},created(){let n=this.$store.getters.getSelectedSensors;for(let t=0;t<n.length;t++){const a={};a.device_name=n[t],a.max_angle=0,a.norm=0,this.sensorMeasurements.push(a)}},methods:{setSensorMeasurement(){this.sensorMeasurements=[];let n=this.$store.getters.getSelectedSensors;for(let t=0;t<n.length;t++){const a={};a.device_name=n[t],a.max_angle=0,a.norm=0,this.sensorMeasurements.push(a)}},updateMeasuredData(n){for(let t=0;t<this.sensorMeasurements.length;t++){const a=this.sensorHandler.getSensor(this.sensorMeasurements[t].device_name);this.sensorMeasurements[t].max_angle=a.max_angle,this.sensorMeasurements[t].norm=(a.max_angle/n*100).toFixed(2)}},async saveMeasurement(){if(console.log("voor if"),this.sensorMeasurements[0].max_angle>0){let n=this.route.params.name,t=this.route.params.category;console.log("voor await"),await v(n,t,this.maxAngle,this.norm),console.log("na await"),this.$router.push({name:"exerciseResults",params:{}})}},deleteMeasurement(){this.$router.push({name:"exerciseResults",params:{}})},updateTimer(){(this.miliseconds+=10)==1e3&&(this.miliseconds=0,this.seconds++),this.seconds==60&&(this.seconds=0,this.minutes++)},async measure(){if(c=="idle")this.setSensorMeasurement(),this.sensorHandler.streamMultipleSensors(this.sensorMeasurements),document.getElementById("button1").classList.toggle("measureButtonBlue"),document.getElementById("button1").classList.toggle("measureButtonRed"),this.button1text="Stop meting",clearInterval(d),d=setInterval(()=>{this.updateTimer()},10),c="measuring";else if(c=="measuring"){document.getElementById("button1").classList.toggle("measureButtonBlue"),document.getElementById("button1").classList.toggle("measureButtonRed"),this.button1text="Begin opnieuw",document.getElementById("button2").style="margin-top: 0.5rem; display: inline",document.getElementById("button3").style="margin-top: 0.5rem; display: inline",clearInterval(d),c="results",await this.sensorHandler.stopStreamMultipleSensors(this.sensorMeasurements);const n=this.route.params.name;let t=await B(n);const a=this.route.params.category;let l=0,s=E(t.dateOfBirth),o=String(t.gender).toLocaleLowerCase();switch(s<=8?s="2-8":s<=19?s="9-19":s<=44?s="20-44":s="45+",a){case"elleboog-flexie-extensie-rechts":case"elleboog-flexie-extensie-links":l=r["elleboog-flexie-extensie"][o][s];break;case"heup-extensie-links":case"heup-extensie-rechts":l=r["heup-extensie"][o][s];break;case"heup-flexie-links":case"heup-flexie-rechts":l=r["heup-flexie"][o][s];break;case"knie-extensie-flexie-links":case"knie-extensie-flexie-rechts":l=r["knie-extensie-flexie"][o][s];break;case"enkel-dorsaalflexie-links":case"enkel-dorsaalflexie-rechts":l=r["enkel-dorsaalflexie"][o][s];break;case"enkel-plantairflexie-links":case"enkel-plantairflexie-rechts":l=r["enkel-plantairflexie"][o][s];break;case"shouder-flexie-links":case"shouder-flexie-rechts":l=r["shouder-flexie"][o][s];break;case"elleboog-pronatie-links":case"elleboog-pronatie-rechts":l=r["elleboog-pronatie"][o][s];break;case"elleboog-supinatie-links":case"elleboog-supinatie-rechts":l=r["elleboog-supinatie"][o][s];break}this.updateMeasuredData(l)}else c=="results"&&(document.getElementById("button2").style="margin-top: 0.5rem; display: none",document.getElementById("button3").style="margin-top: 0.5rem; display: none",this.button1text="Start meting",this.miliseconds=0,this.seconds=0,this.minutes=0,clearInterval(d),this.maxAngle=0,this.norm=0,c="idle")}}},i=n=>(w("data-v-8865f8ff"),n=n(),I(),n),D=i(()=>e("h1",{class:"title"},"Meet",-1)),N={class:"info_container"},L=i(()=>e("b",null,"Meet resultaten",-1)),R=i(()=>e("td",{class:"header_name"},[e("b",null,"Device name")],-1)),j={class:"table_data"},H=i(()=>e("td",{class:"header_name"},[e("b",{class:"table_content"},"Tijd (m:s:ms) ")],-1)),P={id:"minutes"},A={id:"seconds"},V={id:"milliseconds"},$=i(()=>e("td",{class:"header_name"},[e("b",null,"Beweging (graden) ")],-1)),F=i(()=>e("td",{class:"header_name"},[e("b",null,"Procent van de norm ")],-1)),K=i(()=>e("b",null,"Sla meting op",-1)),O=[K],q=i(()=>e("b",null,"Verwijder meting",-1)),z=[q];function G(n,t,a,l,s,o){const x=g("NavBarTop"),b=g("BackButton");return h(),p(f,null,[_(x),e("main",null,[D,e("div",N,[L,(h(!0),p(f,null,S(s.sensorMeasurements,u=>(h(),p("div",{key:u,class:"sensorCard"},[e("table",null,[e("tr",null,[R,e("td",null,[e("div",j,m(u.device_name),1)])]),e("tr",null,[H,e("td",null,[e("span",P,m(s.minutes)+":",1),e("span",A,m(s.seconds)+":",1),e("span",V,m(s.miliseconds),1)])]),e("tr",null,[$,e("td",null,m(u.max_angle)+"\xB0",1)]),e("tr",null,[F,e("td",null,m(u.norm)+"%",1)])])]))),128)),e("button",{id:"button1",class:"measureButtonBlue",onClick:t[0]||(t[0]=u=>o.measure())},[e("b",null,m(s.button1text),1)]),e("button",{id:"button2",class:"measureButtonBlue",style:{"margin-top":"0.5rem",display:"none"},onClick:t[1]||(t[1]=u=>o.saveMeasurement())},O),e("button",{id:"button3",class:"measureButtonRed",style:{"margin-top":"0.5rem",display:"none"},onClick:t[2]||(t[2]=u=>o.deleteMeasurement())},z)])]),e("footer",null,[_(b)])],64)}const Z=y(C,[["render",G],["__scopeId","data-v-8865f8ff"]]);export{Z as default};