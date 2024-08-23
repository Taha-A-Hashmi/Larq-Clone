let map = L.map('map', {
    center: [37.552442, -122.291713],
    zoomControl: true,
    zoom: 13,
    preferCanvas: true
})


// Making overlays and adding choice basemaps
let tileLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
tileLayer.addTo(map);
let tileLayer2 = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
let baseLayers = {
    "Google Map": tileLayer,
    "Street View": tileLayer2
};
let layerControl = L.control.layers(baseLayers);
layerControl.addTo(map);


let mainStore = L.marker([37.552442, -122.291713], {
    riseOnHover: true,
});
mainStore.addTo(map);
mainStore.bindPopup(`
    <div>
        <div>
            <p>This is our main store</p>
        </div>
    </div>
`);
mainStore.openPopup();
let store1 = L.marker([37.562442, -122.291713], {
    riseOnHover: true
});
store1.bindPopup(`
    <div>
        <div>
            <p>This is our other store</p>
        </div>
    </div>
`);
let store2 = L.marker([37.572442, -122.291713], {
    riseOnHover: true
});
store2.bindPopup(`
    <div>
        <div>
            <p>This is our other store in the ocean</p>
        </div>
    </div>
`);
let storeBaseLayers = {
    "Main Store": mainStore,
    "Store One": store1,
    "Ocean Store": store2
};
let storeLayers = L.control.layers(storeBaseLayers);
storeLayers.addTo(map);
/* 
Adding and removing layers dynamically is also possible:
layerControl.addBaseLayer(variable, "name");
layerControl.addOverlay(variable, "name");
*/

// Styles
let controlLayerDiv = document.querySelectorAll('.leaflet-control-layers');
controlLayerDiv.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.classList.remove('leaflet-control-layers-expanded');
    })
});


let baseRadioButtons = document.querySelectorAll('input.leaflet-control-layers-selector[name="leaflet-base-layers_51"]');
baseRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        baseRadioButtons.forEach((btn) => {
            btn.parentElement.style.border = "1px solid #153a5b";
            btn.parentElement.style.background = "white";
            btn.parentElement.style.color = "#153a5b";
        });
        if (radioButton.checked) {
            radioButton.parentElement.style.background = "#153a5b";
            radioButton.parentElement.style.color = "white";
        }
    });
});

let storeRadioButtons = document.querySelectorAll('input.leaflet-control-layers-selector[name="leaflet-base-layers_62"]');
storeRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        storeRadioButtons.forEach((btn) => {
            btn.parentElement.style.border = "1px solid #153a5b";
            btn.parentElement.style.background = "white";
            btn.parentElement.style.color = "#153a5b";
        });
        if (radioButton.checked) {
            radioButton.parentElement.style.background = "#153a5b";
            radioButton.parentElement.style.color = "white";
        }
    });
});


function centerMapOnMarker(marker) {
    map.setView(marker.getLatLng());
}
map.on('baselayerchange', function (e) {
    if (e.name in storeBaseLayers) {
        let selectedMarker = storeBaseLayers[e.name];
        map.setView(selectedMarker.getLatLng(), 15, { animate: true });
        setTimeout(() => {
            selectedMarker.openPopup();
        }, 250)
    }
});


/*let customGeocoder = new L.Control.Geocoder({
    geocode: function(query, cb) {
        let results = storeBaseLayers.filter(marker => marker.name.toLowerCase().includes(query.toLowerCase()));
        cb(results.map(marker => {
            return {
                name: marker.name,
                bbox: [marker.location[1], marker.location[0], marker.location[1], marker.location[0]],
                center: L.latLng(marker.location),
                properties: { description: `Location: ${marker.location[0]}, ${marker.location[1]}` }
            };
        }));
    }
});
L.Control.geocoder({ geocoder: customGeocoder }).addTo(map); */
