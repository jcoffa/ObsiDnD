# Schooner D&D Campaign 3

Obsidian vault for "Campaign 3" of the Schooner D&D group. Published using [Quartz](https://github.com/jackyzha0/quartz) to GitHub Pages.

Access the published site here: https://jcoffa.github.io/ObsiDnD/

## Public, But Not Really

This repository is public purely because it's required in order for GitHub Pages to work. The only alternative is to pay for a GitHub Enterprise subscription, which is massive overkill for the goal of "host the campaign notes for our D&D campaign somewhere". This is just meant for my friends and I.

So if you've stumbled here from elsewhere on the internet, know that any PRs, Issues, or any other form of interaction will be closed, deleted, and ignored.

## Local Setup

These instructions will let you set up a local copy of the campaign notes with the intent to be able to view all of the notes in Obsidian (and potentially contribute your own, but that's not necessary if you don't want to). If you just want to look at the published notes, you can go to https://jcoffa.github.io/ObsiDnD/ without needing to do any local set up and can largely skip the rest of this README.

Note that certain features (such as the Calendar and Maps) can't work on the published site and will only work within Obsidian. This is a limitation of the software we use to convert the notes into a website.


1. Clone this repository (e.g. `git clone https://github.com/jcoffa/ObsiDnD.git` to clone via HTTPS)
1. Install [Obsidian](https://obsidian.md/).
   - Obsidian is a program to read and write notes written in markdown. All of the campaign notes are designed to be read and written in Obsidian. For more information on how to use Obsidian, [see their help docs](https://help.obsidian.md/).
1. In Obsidian, open the `content` folder of this repository as your vault folder.
1. Open Obsidian's settings by clicking the "Gear" icon in the bottom left.
1. On the left, click "Community Plugins" and enable them.
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
1. If you ever want to update your local to read the new changes, run the command `git fetch && git reset --hard origin/v4` to ensure that your local becomes *exactly the same* as the published Campaign Notes. This assumes you will never be making your own changes, since this will permanently delete any local changes you've made.

You should now have a fully working local setup to be able to properly view the campaign notes. If you also want to be able to contribute your own edits and new notes, you are now ready to follow the [Contributing Guide](#contributing-guide).

## Contributing Guide

Now that you have followed both the [Local Setup](#local-setup), you are ready to start making edits to your local campaign notes and contributing them back into the published site for everyone to see.

The only real step to do here is to run the following command in the terminal while in the ObsiDnD repository folder. This will avoid polluting any of your contributions with your personal setting changes:
```bash
cd content/.obsidian && git update-index --skip-worktree app.json appearance.json graph.json switcher.json
```

Please note that deploying the campaign notes to the GitHub Pages site is the sole responsibility of The Loremaster (Joseph). None of you should need to worry about **anything** outside of the `content` folder, which you should exclusively use Obsidian to view and edit. Basically, as long as you only edit the campaign notes inside Obsidian then you will not have to worry about anything else, and it will be very unlikely for you to break anything permanently.

While the actual *process* of contributing is quite simple, I really *really* ***really*** need you to understand that this is a shared repository and, if mishandled, can potentially cause data to be deleted. And nobody wants that. Please read carefully!

### TL;DR

- Only edit the notes inside Obsidian. You will not need to worry about anything outside of the Obsidian Vault in the `content` folder.
- Keep notes focused on a single topic, and link to other notes whenever possible using `[[Name of Other Note]]`.
- `Ctrl+O` to search for notes by their title. Search to see if a note already exists before making a new one.
- `Ctrl+P` to open the command palette to search for Obsidian commands if you ever want to do something but don't know how to do it. If you can't find what you're looking for, Google is your friend.
- **ALWAYS** create a new note by opening the command palette with `Ctrl+P` and search for `QuickAdd: New` to run the command that will make a new note for you. E.g. to make a new NPC note use the `QuickAdd: New NPC` command and start editing. This ensures that the note is placed in the correct folder and will automatically apply the template for you.
- Run `./sync` in the terminal to both pull in other people's changes and upload your own at the same time.
  - If you only want to pull in other people's changes *without* uploading yours, run `git stash && git pull && git stash pop` instead. This can be useful if you have unfinished changes that aren't ready to be uploaded but you want to update your local vault with the new session notes.
- Don't touch any settings in the **Core plugins** or **Comunity plugins** sections of Obsidian's settings menu to avoid breaking any of the plugins.
- If you're unsure about anything, ping Joseph.

### Overall Philosophy

Whenever you make changes to the campaign notes (whether that's by editing an existing note or making a new one), it's important that we're all on the same page and have the same understanding for how we should be thinking about our contributions. This helps make sure that we keep inconsistencies to a minimum.

#### One Idea, One Note

- Keeping notes focused and relatively small makes the vault easy to search and navigate.
- Name notes after the things they're notes of (e.g. if we meet an NPC named John Baldur, his information should be in a note named `John Baldur`!).
- Don't start putting information about the city that John Baldur is from inside the `John Baldur` note. Keep notes focused and make a different note named `Baldur's Gate` instead!

#### Link Well, Link Often

- Linking is crazy powerful in Obsidian. Notes that link to the things they talk about will create a network of connected ideas. E.g. inside the `John Baldur` note, we can say "John Baldur was born and raised in Baldur's Gate" and then link the "Baldur's Gate" text to the `Baldur's Gate` note by typing `[[Baldur's Gate]]`. Just like a wiki!
- If you follow the "One idea, one note" philosophy then this will be super easy because every idea will have its own note that we can easily link to!

#### Prefer Live Links Over Dead Links. Prefer Dead Links Over No Links.

- A "live link" is a `[[link to a note]]` where the note actually exists.
- A "dead link" is a `[[link to a note]]` where the note *does not* exist. In Obsidian, these will look different from live links.
- If at all possible, prefer to at least [create a new note](#making-a-new-note) and fill in the requisite information (it can be short!) to create a live link. It's ok if the information is basic and brief; it can be edited and expanded on later by anybody!
- If you don't have the time to make a live link (e.g. while writing mid-session), prefer to at least create a dead link to make it obvious that this is a topic that probably has enough material and importance to warrant keeping track of. It can be created and expanded on later by anybody!

#### Unsure? Ask!

- I am doing my best to "save you from yourselves" a little bit here. That's why there's commands to [make new notes](#making-a-new-note), and templates to ensure we're all consistent.
- If you are confused or worried whether you're not doing something correctly or not, just ping Joseph!

### Useful Hotkeys and Commands

- `Ctrl+P` opens the Command Palette. You will use this to run Obsidian commands from within Obsidian. If you're trying to do something in Obsidian and don't know how, try opening the command palette and typing in what you want to do. If that fails, Google is your friend!
- `Ctrl+O` opens the Quick Switcher which lets you search for any note to open based on its name. To search for note contents, use the `Search: Search in all files` Obsidian command.
- `Ctrl+E` switches between Editing mode and Reading mode. You can also switch by clicking on the small Book or Pencil icon in the top right of Obsidian. Staying in Reading mode most of the time will prevent you from making unintended changes while navigating the vault.
- The Obsidian command `Backlinks: Show backlinks` will open a side pane that shows you every note that links back to the note you're currently reading. In this pane is also the `Unlinked mentions` header, which shows you all of the places that Obsidian thinks you could link to the note you're reading. E.g. if you forget to link to a place or NPC name in another note. [This is very helpful to make sure you "link well and link often"](#link-well-link-often)!

### Folder Structure

I have done my best to organize the campaign notes in a way that will make sense for all of us. I've made a bunch of folders for us to be able to more easily find what we're looking for:

- `Factions` is for keeping track of various named groups, guilds, and gangs. These will likely be linked to the `NPCs` and `PCs` who belong to them in some way.
- `Items` is for keeping track of any unique and/or important items we pick up, magical or not.
- `NPCs` is for keeping track of all the people we meet. These are friendly or hostile named characters who are controlled by the DM.
- `PCs` is for keeping track of all our own characters. Think of these notes like a biography for your character. Use them however you like.
- `Places` is for locations we visit or hear about. Each place can also contain a map that we can navigate and pin using the Leaflet plugin. Note that this does not work on the published Campaign Notes site, and is only visible within Obsidian.
- `Quests` is for, uh, quests. They are tagged with a status (`#pending`, `#ongoing`, or `#completed`) and contain the quest-giver, location, rewards, goal, and other details about each quest. A quest does not need to be "official" and/or given by an NPC or job board; goals we make up for ourselves and rumours we hear about can also be tracked as if they were quests.
  - `Quests/Completed` are for quests where their main objective has been accomplished, or that otherwise have no more opportunity for follow-up. All of their statuses should be `#completed` in this folder, and an indented bullet point underneath its status should indicate in what session (and header) that the quest was completed under. Technically, quests that are failed are treated as being "completed" in this system.
- `Sessions` is for session notes, like how Brodie did for Campaign 2. Each session provides an opportunity to Recap key elements that we can be reminded of at the start of the next session.

The following folders are not intended to be used directly. These are folders for Obsidian to interact with and do not typically contain anything that we need to touch ourselves. They all begin with `z_` to make sure they appear below all of the actual folders that our notes are stored in. You can completely ignore these, except *maybe* the assets folder to find a specific image that was already uploaded or something like that.

- `z_Assets` is for uploaded images, videos, and non-note files. Obsidian will automatically put any files you drag-and-drop into your notes into this folder.
- `z_Scripts` is for small programs that help manage and configure certain plugins.
- `z_Templates` is for the template files that are used by the [commands that make new notes](#making-a-new-note).

### Making A New Note

Editing existing notes is easy, but there are some rules for making new ones since we want to make sure that they're consistent.

First, you should always double-check that a note you're looking to make doesn't already exist. Use the [search hotkeys and commands in Obsidian](#useful-hotkeys-and-commands) to see if what you're looking for already exists.

Second, once you're confident that you actually do need to make a new note, you should **ALWAYS** make a new note by running one of the Obsidian commands for whatever type of note you're looking to make. For example, to make a new NPC note you should use the `QuickAdd: New NPC` Obsidian command [from the command palette](#useful-hotkeys-and-commands). To see a list of all note creation commands, just search for `QuickAdd: New` and see what shows up in the command palette.

This will automatically apply a template and place your new note in the right folder. It handles the organization work for you! If you feel like your note idea doesn't belong in any of the existing folders, just ping Joseph!

### Update Your Vault With Other People's Changes, and Upload Your Own Changes

Running the script `./sync` in the repository folder on your computer will automatically pull in any new changes from other people that they've uploaded, incorporate your new changes, and then *attempt* to upload it all to GitHub. The process of updating the published Campaign Notes site happens automatically after the upload is successful.

If you have modified the same notes that other people have modified, then you may run into a "merge conflict". If you're not familiar with git, you should probably just ping Joseph for help. If you *are* familiar with git, then please consider these ground rules:

1. Do your best to gracefully incorporate your own changes with the changes that other people have already made and pushed to the repo using your own personal judgement.
1. Err on the side of not deleting the "core" of what other people contributed if you feel like you need to re-word or edit what others have written (which is completely fine; this is a wiki after all).
1. You should almost always assume that changes to plugin files from the remote are correct, and have them override whatever your local changes are.
   - If you're looking at the changes and you really feel like yours should be uploaded to the remote instead (particularly with the "Calendarium" plugin), it's good to double-check with Joseph first before pushing.

### Don't Touch the Plugins Settings

**Please don't change any settings or configuration with any of the plugins or else it could mess up everybody else.** I set up these plugins in specific ways so that things are as easy as possible for all of us and you won't need to worry about how to format the layout of each note or make mistakes on where to put them. The only notable exception is if you add dates to the fantasy calendar, as the Calendarium plugin stores all this information in its own settings file.

Generally, as long as you don't touch any of the settings under **Core plugins** or **Community plugins**, you should be fine.

### Do You Feel Like Something's Missing?

Want to make a new note that doesn't really fit into any of the existing folders? Don't like the formatting of an existing template? Let Joseph know and he can handle the configuration for you and will be able to do it in such a way that everyone else can benefit from your new idea as well.
