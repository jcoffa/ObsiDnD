---
aliases:
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
marker:
---

# <% tp.user.wrap_link(tp.file.title) %>

<%* const MAP_NAME = tp.file.title.replace(/[\W_]+/g, "_") _%>

```base
views:
  - type: leaflet-map
    name: <% MAP_NAME %>
	mapName: <% MAP_NAME %>
    # You MUST set an image below for the map to work.
	image: [[z_Assets/PLACE_TEMPLATE.webp]]
	# Feel free to change the properties below this line to make the map look nice!
    height: 900
    minZoom: 0
    maxZoom: 1
    defaultZoom: 0
    zoomDelta: 0.5
    # Might need to play with the scale a bit, depending on the "height" property above
    # and the physical dimensions of the image itself.
    # Should be 1 day of travel = 2 hexes.
    scale: 0.0285
    unit: days
```

>[!tip]- Static Map Image *==(TODO: Set this image)==*
>![[PLACE_TEMPLATE.webp]]

---

*Start writing here after setting up (or deleting) the map and static image above!*<% tp.file.cursor() %>
