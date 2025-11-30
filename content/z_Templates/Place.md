---
map_height_y: 2048
map_width_x: 1642
scale_pixels: 300
scale_pixels_range: 25
mapCalc1: 0.08333333333333333
---

> [!NOTE]- Quick Calculator (delete after configuring the Leaflet map)
> Map Height in Pixels: `INPUT[number:map_height_y]`  
> Map Width in Pixels: `INPUT[number:map_width_x]`  
> lat: `VIEW[{map_height_y} / 2][math]`  
> long: `VIEW[{map_width_x} / 2][math]`  
> How Many Pixels In Scale: `INPUT[number:scale_pixels]`  
> How Many Units in Scale: `INPUT[number:scale_pixels_range]`  
> Scale: `VIEW[1/({scale_pixels}/{scale_pixels_range})][math:mapCalc1]`
> 
> Remember to update the Image in the leaflet block, and then delete this message!

Note that the Leaflet plugin does not work on the published Campaign Notes site. To see a static image of the map (without any of the pins), click on the "Static Map Image" button below.

```leaflet  
id: <%* tR += tp.file.title.replaceAll(/\s+/g, "") %> ### Must be unique with no spaces  
image: [[Map - Regional map of Lampoteuo.png]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [2048, 1642]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 700px ### Size of the leaflet embed in px on your screen  
width: 100% ### Size of the leaflet embed in your note  
lat: 1024 ### To center the map, make this half of the map height.  
long: 821 ### To center the map, make this half of the map width.  
minZoom: -1.0 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
```

>[!Tip]- Static Map Image
> Put an embed of the map image here, like `![[Teradin.png]]`

## <% tp.file.title %>

Start writing here!