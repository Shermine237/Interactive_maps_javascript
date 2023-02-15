// utilities

let detailVillage = (village, chef, id) => 
`
    <h4>${village}</h4>\
    <ul>\
        <li>Chef du village: ${chef}</li>\
        <li><a href='http://batoufan.go.yo.fr/plan?id=${id}'>Plan du quartier</a></li>\
    </ul>
`;

// script file

let myMap = L.map("map").setView([5.2562112, 10.4663811], 14);

L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    attribution: ' | <a href="http://batoufan.go.yo.fr/">Retour sur Batoufam.com</a> | <a href="https://www.google.com/maps/dir//Batoufam/@5.2573964,10.4736185,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x105ff2573dfedc73:0x97a1aa1b213d219f!2m2!1d10.4733789!2d5.2531332/">Se rendre a Bafoussam</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(myMap);


let DEPTSE = L.marker([5.279164, 10.449039], {title: "Village DEPTSE"}).addTo(myMap);
    DEPTSE.bindPopup(detailVillage("Village DEPTSE", "Nom du chef", "1"));

let DJIMGANG = L.marker([5.275403, 10.456850], {title: "Village DJIMGANG"}).addTo(myMap);
    DJIMGANG.bindPopup(detailVillage("Village DJIMGANG", "Nom du chef", "2"));

let FAMLA = L.marker([5.277455, 10.464145], {title: "Village FAMLA"}).addTo(myMap);
    FAMLA.bindPopup(detailVillage("Village FAMLA", "Nom du chef", "3"));

let FIEUTCHIP = L.marker([5.273010, 10.484402], {title: "Village FIEUTCHIP"}).addTo(myMap);
    FIEUTCHIP.bindPopup(detailVillage("Village FIEUTCHIP", "Nom du chef", "4"));

let KAMKIEU = L.marker([5.260874, 10.458738], {title: "Village KAMKIEU"}).addTo(myMap);
    KAMKIEU.bindPopup(detailVillage("Village KAMKIEU", "Nom du chef", "5"));

let KASSE = L.marker([5.254122, 10.440714], {title: "Village KASSE"}).addTo(myMap);
    KASSE.bindPopup(detailVillage("Village KASSE", "Nom du chef", "6"));

let LEKWA = L.marker([5.244976, 10.443117], {title: "Village LEKWA"}).addTo(myMap);
    LEKWA.bindPopup(detailVillage("Village LEKWA", "Nom du chef", "7"));

let MBE = L.marker([5.239960, 10.451583], {title: "Village MBE"}).addTo(myMap);
    MBE.bindPopup(detailVillage("Village MBE", "Nom du chef", "8"));

let NGUIHOP = L.marker([5.246542, 10.464887], {title: "Village NGUIHOP"}).addTo(myMap);
    NGUIHOP.bindPopup(detailVillage("Village NGUIHOP", "Nom du chef", "9"));

let NGUIGANG = L.marker([5.240815, 10.475701], {title: "Village NGUIGANG"}).addTo(myMap);
    NGUIGANG.bindPopup(detailVillage("Village NGUIGANG", "Nom du chef", "10"));

let TOULA = L.marker([5.257054, 10.480164], {title: "Village TOULA"}).addTo(myMap);
    TOULA.bindPopup(detailVillage("Village TOULA", "Nom du chef", "11"));

let TOUNANG = L.marker([5.272866, 10.488662], {title: "Village TOUNANG"}).addTo(myMap);
    TOUNANG.bindPopup(detailVillage("Village TOUNANG", "Nom du chef", "12"));

let TSEP = L.marker([5.260559, 10.490550], {title: "Village TSEP"}).addTo(myMap);
    TSEP.bindPopup(detailVillage("Village TSEP", "Nom du chef", "13"));

let TSUEGUI1  = L.marker([5.255431, 10.495871], {title: "Village TSUEGUI I"}).addTo(myMap);
    TSUEGUI1 .bindPopup(detailVillage("Village TSUEGUI I", "Nom du chef", "14"));

let TSUEGUI2  = L.marker([5.250302, 10.505227], {title: "Village TSUEGUI II"}).addTo(myMap);
    TSUEGUI2 .bindPopup(detailVillage("Village TSUEGUI II", "Nom du chef", "15"));


let diablo = L.polygon([
    [5.280818, 10.449351],
    [5.262117, 10.430774],
    [5.240162, 10.440165],
    [5.233860, 10.459150],
    [5.239146, 10.483443],
    [5.242805, 10.512022],
    [5.258458, 10.516309],
    [5.257645, 10.508144],
    [5.261100, 10.498753],
    [5.268215, 10.490179],
    [5.275940, 10.492221]],
    
    {
        color: "red",
        fillColor: "#36ba40",
        fillOpacity: "0",
    }
).addTo(myMap);

