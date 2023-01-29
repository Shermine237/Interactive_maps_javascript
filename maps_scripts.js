// script file

//let myMap = L.map("map").setView([37.61, -122.011], 10);
let myMap = L.map("map").setView([5.2562112, 10.4663811], 14);

/*L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);*/

L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(myMap);


let DEPTSE = L.marker([5.279164, 10.449039]).addTo(myMap);
    DEPTSE.bindPopup("<h4>Village DEPTSE</h4>\
                        <ul>\
                            <li>Chef du village: NOM-DU-CHEF</li>\
                            <li><a href='#'>Plan du quartier</a></li>\
                        </ul>");

let DJIMGANG = L.marker([5.275403, 10.456850]).addTo(myMap);
    DJIMGANG.bindPopup("<h4>Village DJIMGANG</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let FAMLA = L.marker([5.277455, 10.464145]).addTo(myMap);
    FAMLA.bindPopup("<h4>Village FAMLA</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let FIEUTCHIP = L.marker([5.273010, 10.484402]).addTo(myMap);
    FIEUTCHIP.bindPopup("<h4>Village FIEUTCHIP</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let KAMKIEU = L.marker([5.260874, 10.458738]).addTo(myMap);
    KAMKIEU.bindPopup("<h4>Village KAMKIEU</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let KASSE = L.marker([5.254122, 10.440714]).addTo(myMap);
    KASSE.bindPopup("<h4>Village KASSE</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let LEKWA = L.marker([5.244976, 10.443117]).addTo(myMap);
    LEKWA.bindPopup("<h4>Village LEKWA</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let MBE = L.marker([5.239960, 10.451583]).addTo(myMap);
    MBE.bindPopup("<h4>Village MBE</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let NGUIHOP = L.marker([5.246542, 10.464887]).addTo(myMap);
    NGUIHOP.bindPopup("<h4>Village NGUIHOP</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let NGUIGANG = L.marker([5.240815, 10.475701]).addTo(myMap);
    NGUIGANG.bindPopup("<h4>Village NGUIGANG</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TOULA = L.marker([5.257054, 10.480164]).addTo(myMap);
    TOULA.bindPopup("<h4>Village TOULA</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TOUNANG = L.marker([5.272866, 10.488662]).addTo(myMap);
    TOUNANG.bindPopup("<h4>Village TOUNANG</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TSEP = L.marker([5.260559, 10.490550]).addTo(myMap);
    TSEP.bindPopup("<h4>Village TSEP</h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TSUEGUI1  = L.marker([5.255431, 10.495871]).addTo(myMap);
    TSUEGUI1 .bindPopup("<h4>Village TSUEGUI I </h4>\
                    <ul>\
                        <li>Chef du village: NOM-DU-CHEF</li>\
                        <li><a href='#'>Plan du quartier</a></li>\
                    </ul>");

let TSUEGUI2  = L.marker([5.250302, 10.505227]).addTo(myMap);
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

/*sfo_marker.bindPopup("<b>SFO</b>");
oak_marker.bindPopup("<b>OAK</b>");
sjc_marker.bindPopup("<b>SJC</b>");
golden_gate.bindPopup("<b>Golden Gate Bridge</b>");
diablo.bindPopup("<b>Mt. Diablo</b>");*/
