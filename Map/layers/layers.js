var wms_layers = [];
var format_kecamatan_0 = new ol.format.GeoJSON();
var features_kecamatan_0 = format_kecamatan_0.readFeatures(json_kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_0.addFeatures(features_kecamatan_0);var lyr_kecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_0, 
                style: style_kecamatan_0,
    title: 'kecamatan<br />\
    <img src="styles/legend/kecamatan_0_0.png" />  54840 - 85728 <br />\
    <img src="styles/legend/kecamatan_0_1.png" />  85728 - 116616 <br />\
    <img src="styles/legend/kecamatan_0_2.png" />  116616 - 147503 <br />\
    <img src="styles/legend/kecamatan_0_3.png" />  147503 - 178391 <br />'
        });

lyr_kecamatan_0.setVisible(true);
var layersList = [lyr_kecamatan_0];
lyr_kecamatan_0.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Jml_Pdk': 'Jml_Pdk', });
lyr_kecamatan_0.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Jml_Pdk': 'TextEdit', });
lyr_kecamatan_0.set('fieldLabels', {'ID_Kec': 'header label', 'Kecamatan': 'no label', 'Jml_Pdk': 'header label', });
lyr_kecamatan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});