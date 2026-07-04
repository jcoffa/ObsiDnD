---
aliases:
marker:
---

```base
views:
  - type: leaflet-map
    name: Teradin
    mapName: Teradin
    filters:
      and:
        - file.hasProperty("marker")
        - '!marker.filter(value.mapName == "Teradin").isEmpty()'
    image: Teradin.webp
    height: 703
    minZoom: -1
    maxZoom: 1
    defaultZoom: -1
    zoomDelta: 0.5
    scale: 0.0285
    unit: days
```

>[!Tip]- Static Map Image
> ![[Teradin.webp]]

# [[Teradin]]

TODO!