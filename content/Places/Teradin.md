---
map_height_y: 1406
map_width_x: 1820
scale_pixels: 300
scale_pixels_range: 25
mapCalc1: 0.08333333333333333
---
*Note that the Leaflet plugin does not work on the published Campaign Notes site. To see a static image of the map (without any of the pins), click on the "Static Map Image" button below.*

```leaflet  
id: Teradin ### Must be unique with no spaces  
image: [[Teradin.webp]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [1406, 1820]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 700px ### Size of the leaflet embed in px on your screen  
width: 100% ### Size of the leaflet embed in your note  
lat: 703 ### To center the map, make this half of the map height.  
long: 910 ### To center the map, make this half of the map width.  
minZoom: -1.0 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1.0 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
```

>[!Tip]- Static Map Image
> ![[Teradin.webp]]

# [[Teradin]]

TODO!