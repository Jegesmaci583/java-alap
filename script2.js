/*Tömbök*/

var tomb = [];
var tomb2 = [2, 3, 4, 5, 6];
var tomb3 = [4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0]=12;

var txt = "";
for (let index = 0; index < tomb2.length; index++) {
    txt += tomb2[index] + ", ";

}

console.log(txt);

var gyumolcs = ["alma","málna","barack","ribizli","paradicsom"];
var gyumolcsSzin = ["piros","piros","sárga","piros","piros",];
var gyumolcsAr = [240,500,300,250,500]

/*van-e sárga színű gyümölcs*/
var i=0;
while(i<gyumolcsSzin.length && !(gyumolcsSzin[i]==="sárga")) {
    i++;
}

var vane = i < gyumolcsSzin.length;
console.log("Van sárga színű gyümölcs: " + vane);

/*Mennyi a piros színű gyümölcsök összértéke?*/
var pgy = 0;
while(i<gyumolcsSzin.length) {
    if (gyumolcsSzin[i]=="piros"){
        pgy++;
    }
}
console.log(pgy);