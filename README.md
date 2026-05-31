# Schooner D&D Campaign 3

Obsidian vault for "Campaign 3" of the Schooner D&D group. Published using [Quartz](https://github.com/jackyzha0/quartz) to GitHub Pages.

Access the published site here: https://jcoffa.github.io/ObsiDnD/

## Public, But Not Really

This repository is public purely because it's required in order for GitHub Pages to work. The only alternative is to pay for a GitHub Enterprise subscription, which is massive overkill for the goal of "host the campaign notes for our D&D campaign somewhere". This is just meant for my friends and I.

So if you've stumbled here from elsewhere on the internet, know that any PRs, Issues, or any other form of interaction will be closed, deleted, and ignored.

## Local Setup

These instructions will let you set up a local copy of the campaign notes with the intent to be able to view all of the notes in Obsidian (and potentially contribute your own, but that's not necessary if you don't want to). If you just want to look at the published notes, you can go to https://jcoffa.github.io/ObsiDnD/ without needing to do any local set up and can largely skip the rest of this README.

Note that certain features (such as the Calendar and Maps) can't work on the published site and will only work within Obsidian. This is a limitation of the software we use to convert the notes into a website.

1. Clone this repository using git to create a copy of it on your computer (e.g. `git clone https://github.com/jcoffa/ObsiDnD.git` to clone via HTTPS)
1. Install [Obsidian](https://obsidian.md/).
   - Obsidian is a program to read and write notes written in markdown. All of the campaign notes are designed to be read and written in Obsidian. For more information on how to use Obsidian, [see their help docs](https://help.obsidian.md/).
1. In Obsidian, you will be prompted to either create or open a "Vault". Choose to open an existing vault, and open the `content` folder of this repository as your vault folder.
1. Open Obsidian's settings by clicking the "Gear" icon in the bottom left.
1. On the left navigation panel that just opened, click "Community Plugins" and enable them.
1. Click "Browse" to start searching for plugins. For each of the plugins below, you must make sure to **both Install AND Enable them** (the "Install" button will become "Enable" after it finishes installing the plugin):
   1. Calendarium
   1. Excalidraw
   1. Iconize
   1. Image Converter
   1. Leaflet
   1. Meta Bind
   1. Quick Add
   1. Style Settings
   1. Templater
1. If you ever want to update your local to read the new changes, run the command `./sync --no-push` in the terminal from anywhere inside the repo. This will only pull the new changes from GitHub without pushing any changes you have made on your own computer back to GitHub.

You should now have a fully working local setup to be able to properly view the campaign notes. If you also want to be able to contribute your own edits and new notes, you are now ready to follow the [Contributing Guide](#contributing-guide).

## Contributing Guide

### First-Time Setup

Now that you have followed the [Local Setup](#local-setup), you are ready to start making edits to your local campaign notes and contributing them back into the published site for everyone to see.

The only real step to do here is to run the following command in the terminal while in the ObsiDnD repository folder. This will avoid polluting any of your contributions with your personal setting changes:

```bash
cd content/.obsidian && git update-index --skip-worktree app.json appearance.json graph.json switcher.json
```

While the actual *process* of contributing is quite simple, I really *really* ***really*** need you to understand that this is a shared repository and, if mishandled, can potentially cause data to be deleted. And nobody wants that. Please read carefully!

### Guiding Principles to Contributing

- Only edit the notes inside Obsidian. You will not need to worry about anything outside of the Obsidian Vault (which is just the `content` folder.)
- Keep notes focused on a single topic, and link to other notes whenever possible using `[[Name of Other Note]]`.
   - E.g. instead of just typing `The Frozen March` in your note as normal text without any formatting, transform it into a link with `[[The Frozen March]]` instead.
- **ALWAYS** create a new note by opening the command palette with `Ctrl+P` and search for `QuickAdd: New` to run the command that will make a new note for you.
  - E.g. to make a new NPC note use the `QuickAdd: New NPC` command and start editing. This ensures that the note is placed in the correct folder and will automatically apply the template for you.
  - If you want to make a note type that doesn't have a template, ping The Loremaster!
- Don't make duplicate notes in different places or with slightly different names. Use `Ctrl+O` to search for notes by their title and see if what you're looking to create already exists.
  - You can add an alias to a note to make it searchable and linkable by multiple names (e.g. `The Hearth of Hope` can also be referenced as `The Hearth` because it has an alias.)
- `Ctrl+P` to open the command palette to search for Obsidian commands if you ever want to do something but don't know how to do it. If you can't find what you're looking for, Google is your friend.
- Run `./sync` in the terminal to both pull in other people's changes and upload your own at the same time.
  - If you only want to pull in other people's changes *without* uploading yours, run `./sync --no-push` instead. This can be useful if you have unfinished changes that aren't ready to be uploaded but you want to update your local vault with the new session notes.
  - The `./sync` script has a few other options available to it. Run `./sync --help` to see an explanation of all the options.
- Don't touch any settings in the **Core plugins** or **Comunity plugins** sections of Obsidian's settings menu to avoid breaking any of the plugins.
- If you're unsure about anything, ping The Loremaster.

### Useful Hotkeys and Commands

- `Ctrl+P` opens the Command Palette. You will use this to run Obsidian commands from within Obsidian. If you're trying to do something in Obsidian and don't know how, try opening the command palette and typing in what you want to do. If that fails, Google is your friend!
- `Ctrl+O` opens the Quick Switcher which lets you search for any note to open based on its name. To search for note contents, use the `Search: Search in all files` Obsidian command.
- `Ctrl+E` switches between Editing mode and Reading mode. You can also switch by clicking on the small Book or Pencil icon in the top right of Obsidian. Staying in Reading mode most of the time will prevent you from making unintended changes while navigating the vault.
- The Obsidian command `Backlinks: Show backlinks` will open a side pane that shows you every note that links back to the note you're currently reading. In this pane is also the `Unlinked mentions` header, which shows you all of the places that Obsidian thinks you could link to the note you're reading. E.g. if you forget to link to a place or NPC name in another note.

### Do You Feel Like Something's Missing?

Want to make a new note that doesn't really fit into any of the existing folders? Don't like the formatting of an existing template? Let The Loremaster know and he can handle the configuration for you and will be able to do it in such a way that everyone else can benefit from your new idea as well.
