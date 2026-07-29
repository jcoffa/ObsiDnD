---
created: 2025-11-27 20:45
---

#  Schooner D&D Campaign 3

## Start Reading

Best to just dive into the [[Sessions/|Session Notes]] starting from [[Session 1]] and keep reading from there. This gives you a chronological recounting of the events as they happened during play, and you can always open other linked files while you read.

## The Obsidian Vault

This wiki may be exported and hosted elsewhere, so it may be important to know that this is written as an [Obsidian Vault](https://obsidian.md/). Currently hosted via [Quartz](https://github.com/jackyzha0/quartz) on GitHub pages. Find the published vault here: https://jcoffa.github.io/ObsiDnD/

Uses the theme [*ITS Theme* by SlRvb](https://github.com/SlRvb/Obsidian--ITS-Theme).

### Plugins

- Calendarium, for tracking a custom calendar
- Excalidraw, for drawing
- Iconize, for adding pretty icons to folders and notes
- Image Converter, to automatically convert images into `.webp` format to greatly reduce file sizes
- Leaflet Bases, for embedding images and treating them like maps
- Meta Bind, as a requirement for Leaflet to work with maps
- Quick Add, for streamlining creating notes and applying templates
- Style Settings, to make the ITS Theme look like it's the Player's Handbook
- Templater, for templating that is far more powerful than Obsidian's builtin Templates core plugin

### Creating Notes

Try to always create new notes by opening the *Command Palette* with `Ctrl+P`, searching for `QuickAdd: New` or `New <type>`, and then selecting the appropriate note type. E.g., to create a new note for an NPC, search for `New NPC` and select it to begin creating an NPC note. Leveraging these pre-made commands will ensure you always create a note in the correct folder and automatically apply the correct template.

For more information on proper vault management and contributing, see [the vault's README on GitHub](https://github.com/jcoffa/ObsiDnD?tab=readme-ov-file#schooner-dd-campaign-3).

### D&D Player's Handbook 2024 Fonts

- Body font: TT Jenevers
- Heading font: Mrs Eaves Small Caps
- Monospace font: FiraCode Nerd Font Mono

### TODO

- [ ] Use [[#D&D Player's Handbook 2024 Fonts]] in the Obsidian vault to make it look more like we're editing the 2024 Player's Handbook
- [ ] Use [[#D&D Player's Handbook 2024 Fonts]] on the published Quartz site

### Vault Management

#### Orphaned Files

Non-note files (e.g. images) that exist but are not linked anywhere.

```base
views:
  - type: table
    name: Orphaned Files
	filters:
		and:
			- "!file.links"
			- "!file.backlinks"
```

#### Broken Links

Links to notes that don't actually exist (yet!) and which note the links come from. If you're in the mood to contribute but not sure what, any of these are a great start. You don't need to write anything complicated; oftentimes just seeing where the link is referenced in the Sessions and grouping all of that information into the new note is good enough!

Remember to always create new notes by opening the *Command Palette* with `Ctrl+P`, searching for `QuickAdd: New`, and then selecting the appropriate note type.

```base
formulas:
  Broken Links: file.links.filter(!value.asFile().isTruthy()).unique().map(value.replace(/\[+|\|.*/, "")).join(", ")
views:
  - type: list
    name: Broken Links
    filters:
      and:
        - formula["Broken Links"]
        - file.name != "index"
    order:
      - file.name
      - formula.Broken Links
    markers: bullet
    separator: "  ⟶ "
    indentProperties: false

```
