require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
       const map = new Map({
              basemap: "gray-vector"
        });
       const view = new MapView({
              container: "viewDiv",
              map: map,
              zoom: 5.5,
              center: [-107.45763219522368,43.18704372075827],
        });
       
       var featureLayer_1 = new FeatureLayer({
              url: 
              "https://services6.arcgis.com/cWzdqIyxbijuhPLw/arcgis/rest/services/Elk_Crucial_Range/FeatureServer"
       });
       
       map.add(featureLayer_1);
       
       var featureLayer_2 = new FeatureLayer({
              url: 
              "https://services3.arcgis.com/HVjI8GKrRtjcQ4Ry/arcgis/rest/services/WyDOT_Highways_OpenData/FeatureServer"
       });
       
       map.add(featureLayer_2);
});
