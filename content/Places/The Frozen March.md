---
aliases:
marker:
  - mapName: Teradin
    icon: lucide-snowflake
    colour: "#04adff"
    coordinates: 1250, 930
---

# [[The Frozen March]]

```base
views:
  - type: leaflet-map
    name: The_Frozen_March
    mapName: The_Frozen_March
    filters:
      and:
        - file.hasProperty("marker")
        - '!marker.filter(value.mapName == "The_Frozen_March").isEmpty()'
    image: The Frozen March_2026-01-24T04-57-45.webp
    height: 300
    minZoom: -0.1
    maxZoom: 1
    defaultZoom: 0
    zoomDelta: 0.5
    scale: 0.0285
    unit: days
```

>[!Tip]- Static Map Image
>![[The Frozen March_2026-01-24T04-57-45.webp]]

- _Note for the map calculations: it's currently measured by days of travel (1 day = 2 tiles by walking). The airship gives 3 tiles per day by flight. So you just multiply the ruler's "days" output by 2/3 to get the "days by flight"._
---

A cold desolate wasteland north of the impassable peaks and north of [[Utopia]]. This is the place where all of the undesirables are sent. From political rivals of the Grand Exelcium to war criminals from the Clerical War, to even petty thieves. If you committed a crime to the crown, if you don’t get a slap on the wrist, you’ll likely end up here.

There are rumours and weird moments that hint the [[The Frozen March]] were not always frozen over. [[Tilly]] found by chance that [[Session 20#Downtime Time|the roads under the snow of Draskhrr have fossilized moss]], and [[The Cult of the Stars]] mention that [[Caelia]] has existed from "before the march was frozen" ([[Session 22#Stone Road Mall|in Session 22]]).

[[Tilly]] learned from [[The Soul Sage]] ([[Session 23#Backstage Passes|in Session 23]]) that a massive wave of elemental magic froze [[The Frozen March|The March]] long ago, causing the flash-frozen state it is in now. There are even some creatures that can access and use this elemental magic (like [[Toran the Red|Toran]], or possibly [[Session 5#The Most Horrific Encounter in D&D History|the winter wolf]]).