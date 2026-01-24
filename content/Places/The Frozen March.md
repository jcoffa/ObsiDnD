---
map_height_y: 295
map_width_x: 1250
scale_pixels: 300
scale_pixels_range: 25
mapCalc1: 0.08333333333333333
---
*Note that the Leaflet plugin does not work on the published Campaign Notes site. To see a static image of the map (without any of the pins), click on the "Static Map Image" button below.*

```leaflet  
id: TheFrozenMarch ### Must be unique with no spaces  
image: [[The Frozen March_2026-01-24T04-57-45.webp]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [295, 1250]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 400px ### Size of the leaflet embed in px on your screen  
width: 100% ### Size of the leaflet embed in your note  
lat: 147 ### To center the map, make this half of the map height.  
long: 625 ### To center the map, make this half of the map width.  
minZoom: -1.0 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: 0 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
```

>[!Tip]- Static Map Image
> ![[The Frozen March_2026-01-24T04-57-45.webp]]

# [[The Frozen March]]

Start writing here!