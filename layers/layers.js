var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JuteMills_2 = new ol.format.GeoJSON();
var features_JuteMills_2 = format_JuteMills_2.readFeatures(json_JuteMills_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuteMills_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JuteMills_2.addFeatures(features_JuteMills_2);
var lyr_JuteMills_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JuteMills_2, 
                style: style_JuteMills_2,
                interactive: true,
                title: '<img src="styles/legend/JuteMills_2.png" /> Jute Mills'
            });
var format_NewInfrastructure_3 = new ol.format.GeoJSON();
var features_NewInfrastructure_3 = format_NewInfrastructure_3.readFeatures(json_NewInfrastructure_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewInfrastructure_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewInfrastructure_3.addFeatures(features_NewInfrastructure_3);
var lyr_NewInfrastructure_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewInfrastructure_3, 
                style: style_NewInfrastructure_3,
                interactive: true,
                title: '<img src="styles/legend/NewInfrastructure_3.png" /> New Infrastructure'
            });
var format_StudyMills_4 = new ol.format.GeoJSON();
var features_StudyMills_4 = format_StudyMills_4.readFeatures(json_StudyMills_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyMills_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyMills_4.addFeatures(features_StudyMills_4);
var lyr_StudyMills_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StudyMills_4, 
                style: style_StudyMills_4,
                interactive: true,
                title: '<img src="styles/legend/StudyMills_4.png" /> Study Mills'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_JuteMills_2.setVisible(true);lyr_NewInfrastructure_3.setVisible(true);lyr_StudyMills_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_JuteMills_2,lyr_NewInfrastructure_3,lyr_StudyMills_4];
lyr_JuteMills_2.set('fieldAliases', {'Mil_ID': 'Mil_ID', 'Full Addre': 'Full Addre', 'Map Label': 'Map Label', 'Mil Corpor': 'Mil Corpor', 'IJMA_Mem': 'IJMA_Mem', 'Mill Name': 'Mill Name', 'Mill Addre': 'Mill Addre', 'Mill Distr': 'Mill Distr', 'Mill State': 'Mill State', 'Mill Zip': 'Mill Zip', 'Mil_Lat': 'Mil_Lat', 'Mil_Long': 'Mil_Long', 'Open_13': 'Open_13', 'Looms_13': 'Looms_13', 'Open_19': 'Open_19', 'Looms_19': 'Looms_19', 'Employ': 'Employ', 'GO_Nov_18': 'GO_Nov_18', 'GO_Dec_18': 'GO_Dec_18', 'GO_Jan_19': 'GO_Jan_19', 'GO_Feb_19': 'GO_Feb_19', 'GO_Mar_19': 'GO_Mar_19', 'GO_Apr_19': 'GO_Apr_19', 'GO_May_19': 'GO_May_19', 'GO_June_19': 'GO_June_19', 'GO_July_19': 'GO_July_19', 'GO_Aug_19': 'GO_Aug_19', 'GO_Sept_19': 'GO_Sept_19', 'GO_Oct_19': 'GO_Oct_19', 'GO_Nov_19': 'GO_Nov_19', 'GO_Ord_Tot': 'GO_Ord_Tot', 'Frac_Gov_T': 'Frac_Gov_T', 'Frac_Close': 'Frac_Close', 'Perc_Close': 'Perc_Close', });
lyr_NewInfrastructure_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StudyMills_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JuteMills_2.set('fieldImages', {'Mil_ID': 'Hidden', 'Full Addre': 'TextEdit', 'Map Label': 'Hidden', 'Mil Corpor': 'TextEdit', 'IJMA_Mem': 'Hidden', 'Mill Name': 'TextEdit', 'Mill Addre': 'TextEdit', 'Mill Distr': 'TextEdit', 'Mill State': 'Hidden', 'Mill Zip': 'Hidden', 'Mil_Lat': 'Hidden', 'Mil_Long': 'Hidden', 'Open_13': 'Hidden', 'Looms_13': 'Hidden', 'Open_19': 'Hidden', 'Looms_19': 'Hidden', 'Employ': 'Hidden', 'GO_Nov_18': 'Hidden', 'GO_Dec_18': 'Hidden', 'GO_Jan_19': 'Hidden', 'GO_Feb_19': 'Hidden', 'GO_Mar_19': 'Hidden', 'GO_Apr_19': 'Hidden', 'GO_May_19': 'Hidden', 'GO_June_19': 'Hidden', 'GO_July_19': 'Hidden', 'GO_Aug_19': 'Hidden', 'GO_Sept_19': 'Hidden', 'GO_Oct_19': 'TextEdit', 'GO_Nov_19': 'Hidden', 'GO_Ord_Tot': 'Hidden', 'Frac_Gov_T': 'Hidden', 'Frac_Close': 'Hidden', 'Perc_Close': 'Hidden', });
lyr_NewInfrastructure_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_StudyMills_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_JuteMills_2.set('fieldLabels', {'Full Addre': 'inline label', 'Mil Corpor': 'inline label', 'Mill Name': 'inline label', 'Mill Addre': 'inline label', 'Mill Distr': 'inline label', 'GO_Oct_19': 'inline label', });
lyr_NewInfrastructure_3.set('fieldLabels', {'Name': 'inline label', });
lyr_StudyMills_4.set('fieldLabels', {'Name': 'inline label', });
lyr_StudyMills_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});