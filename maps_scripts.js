// script file

let myMap = L.map("map").setView([5.2562112, 10.4663811], 14);

L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    attribution: ' | <a href="http://batoufan.go.yo.fr/">Retour sur Batoufam.com</a> | <a href="https://www.google.com/maps/dir//Batoufam/@5.2573964,10.4736185,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x105ff2573dfedc73:0x97a1aa1b213d219f!2m2!1d10.4733789!2d5.2531332/">Se rendre a Bafoussam</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(myMap);


let DEPTSE = L.marker([5.279164, 10.449039], {title: "Village DEPTSE"}).addTo(myMap);
    DEPTSE.bindPopup("<h4>Village DEPTSE</h4>\
                        <ul>\
                            <li>Chef du village: NOM-DU-CHEF</li>\
                            <li><a href='#'>Plan du quartier</a></li>\
                        </ul>");

let DJIMGANG = L.marker([5.275403, 10.456850], {title: "Village DJIMGANG"}).addTo(myMap);
    DJIMGANG.bindPopup("<h4>Village DJIMGANG</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let FAMLA = L.marker([5.277455, 10.464145], {title: "Village FAMLA"}).addTo(myMap);
    FAMLA.bindPopup("<h4>Village FAMLA</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let FIEUTCHIP = L.marker([5.273010, 10.484402], {title: "Village FIEUTCHIP"}).addTo(myMap);
    FIEUTCHIP.bindPopup("<h4>Village FIEUTCHIP</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let KAMKIEU = L.marker([5.260874, 10.458738], {title: "Village KAMKIEU"}).addTo(myMap);
    KAMKIEU.bindPopup("<h4>Village KAMKIEU</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let KASSE = L.marker([5.254122, 10.440714], {title: "Village KASSE"}).addTo(myMap);
    KASSE.bindPopup("<h4>Village KASSE</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let LEKWA = L.marker([5.244976, 10.443117], {title: "Village LEKWA"}).addTo(myMap);
    LEKWA.bindPopup("<h4>Village LEKWA</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let MBE = L.marker([5.239960, 10.451583], {title: "Village MBE"}).addTo(myMap);
    MBE.bindPopup("<h4>Village MBE</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let NGUIHOP = L.marker([5.246542, 10.464887], {title: "Village NGUIHOP"}).addTo(myMap);
    NGUIHOP.bindPopup("<h4>Village NGUIHOP</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let NGUIGANG = L.marker([5.240815, 10.475701], {title: "Village NGUIGANG"}).addTo(myMap);
    NGUIGANG.bindPopup("<h4>Village NGUIGANG</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TOULA = L.marker([5.257054, 10.480164], {title: "Village TOULA"}).addTo(myMap);
    TOULA.bindPopup("<h4>Village TOULA</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TOUNANG = L.marker([5.272866, 10.488662], {title: "Village TOUNANG"}).addTo(myMap);
    TOUNANG.bindPopup("<h4>Village TOUNANG</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TSEP = L.marker([5.260559, 10.490550], {title: "Village TSEP"}).addTo(myMap);
    TSEP.bindPopup("<h4>Village TSEP</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TSUEGUI1  = L.marker([5.255431, 10.495871], {title: "Village TSUEGUI I"}).addTo(myMap);
    TSUEGUI1 .bindPopup("<h4>Village TSUEGUI I </h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TSUEGUI2  = L.marker([5.250302, 10.505227], {title: "Village TSUEGUI II"}).addTo(myMap);
    TSUEGUI2 .bindPopup("<h4>Village TSUEGUI II </h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");


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
