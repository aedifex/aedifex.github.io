---
layout: post
title: iTerm2 basics
subtitle: Commands && Shortcuts for wellness and zen
author:     "Christopher Black"
tags: [terminal, macos, productivity]
cover-img: /assets/img/iterm-cover.jpg
thumbnail-img: /assets/img/iterm-thumb.jpg
share-img: /assets/img/iterm-thumb.jpg
---

[iTerm2](https://iterm2.com/) is an amazing Terminal replacement (err, technically, a terminal emulator) for Mac users. If you spend any time at all in the terminal, free from the prescriptive constraints of the GUI, iTerm2 is worth checking out. All of us begin our terminal journey learning the basics: the commands for moving around the filesystem, basic file manipulation, and probably a few administrative commands (e.g. `chmod +r file`). Learning _how to operate the terminal_ itself quickly and efficiently is the next stage in your journey. Imagine the power one wields when being able to split terminal panes or delete entire sentences with a single keystroke...

This list started life as [squarism's iTerm2 shortcuts gist](https://gist.github.com/squarism/ae3613daf5c01a98ba3a), which is well worth bookmarking. I've trimmed it to the shortcuts that earn their keep, split what iTerm2 does from what your shell does, and updated it against the current [iTerm2 documentation](https://iterm2.com/documentation.html).

<kbd>⌘</kbd> Command · <kbd>⌥</kbd> Option · <kbd>⇧</kbd> Shift · <kbd>⌃</kbd> Control

<h2 class="section-heading">One setting first</h2>

Out of the box, <kbd>⌥</kbd> types special characters instead of talking to your shell, so "jump a word" shortcuts don't work ([this question](https://apple.stackexchange.com/questions/154292/iterm-going-one-word-backwards-and-forwards) is where I first ran into it). Fix it once: **Settings › Profiles › Keys › General › Left Option key › Esc+**.

<h2 class="section-heading">Start here</h2>

**Function** | **Shortcut**
-------- | --------
Split pane vertically / horizontally | <kbd>⌘D</kbd> / <kbd>⌘⇧D</kbd>
Jump between panes | <kbd>⌘⌥</kbd> + arrow
Maximize a pane (press again to restore) | <kbd>⌘⇧↩</kbd>
Search your command history | <kbd>⌃R</kbd>
Clear the screen | <kbd>⌘K</kbd>

<h2 class="section-heading">iTerm2: tabs, windows and panes</h2>

**Function** | **Shortcut**
-------- | --------
New tab | <kbd>⌘T</kbd>
Close tab or pane | <kbd>⌘W</kbd>
Go to tab 1–9 | <kbd>⌘1</kbd> … <kbd>⌘9</kbd>
Next / previous tab | <kbd>⌘→</kbd> / <kbd>⌘←</kbd>
Cycle iTerm2 windows | <kbd>⌘`</kbd>
Split pane vertically | <kbd>⌘D</kbd>
Split pane horizontally | <kbd>⌘⇧D</kbd>
Select pane by direction | <kbd>⌘⌥</kbd> + arrow
Select pane in order of use | <kbd>⌘]</kbd> / <kbd>⌘[</kbd>
Maximize / restore pane | <kbd>⌘⇧↩</kbd>
Resize pane | <kbd>⌃⌘</kbd> + arrow
Move a pane | <kbd>⌘⌥⇧</kbd> + drag it with the mouse
Full screen | <kbd>⌘↩</kbd>

<h2 class="section-heading">iTerm2: power features</h2>

**Function** | **Shortcut**
-------- | --------
Broadcast typing to every pane in the tab (press again to stop) | <kbd>⌘⌥I</kbd>
Clear the buffer | <kbd>⌘K</kbd>
Find the cursor | <kbd>⌘/</kbd>
Set a mark / jump back to it | <kbd>⌘⇧M</kbd> / <kbd>⌘⇧J</kbd>
Paste history | <kbd>⌘⇧H</kbd>
Instant Replay (scrub back through what the screen showed) | <kbd>⌘⌥B</kbd>
Open Quickly (search tabs, panes, commands) | <kbd>⌘⇧O</kbd>

<h2 class="section-heading">iTerm2: copy without the mouse</h2>

**Function** | **Shortcut**
-------- | --------
Enter Copy Mode | <kbd>⌘⇧C</kbd> (Edit › Copy Mode)
Move around | <kbd>h</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd> or arrow keys
Start selecting characters / lines | <kbd>v</kbd> / <kbd>V</kbd>
Rectangular selection | <kbd>⌃V</kbd>
Copy the selection | <kbd>y</kbd>
Leave Copy Mode | <kbd>Esc</kbd> or <kbd>q</kbd>

Copies land on the normal system clipboard, so paste as usual.

<h2 class="section-heading">Your shell: moving and editing</h2>

These belong to your shell (zsh has been the macOS default since 2019; bash behaves the same), not to iTerm2, so they work in any terminal.

**Function** | **Shortcut**
-------- | --------
Start / end of line | <kbd>⌃A</kbd> / <kbd>⌃E</kbd>
Back / forward one word (needs Esc+ above) | <kbd>⌥B</kbd> / <kbd>⌥F</kbd>
Back / forward one character | <kbd>⌃B</kbd> / <kbd>⌃F</kbd>
Delete the previous word | <kbd>⌃W</kbd>
Delete to the end of the line | <kbd>⌃K</kbd>
Delete the line (zsh) or everything before the cursor (bash) | <kbd>⌃U</kbd>
Paste back what you just deleted | <kbd>⌃Y</kbd>
Delete the character under the cursor (exits the shell on an empty line) | <kbd>⌃D</kbd>
Clear the screen | <kbd>⌃L</kbd>

<h2 class="section-heading">Your shell: searching history</h2>

**Function** | **Shortcut**
-------- | --------
Search as you type | <kbd>⌃R</kbd>, then type
Older matches | <kbd>⌃R</kbd> again
Run the match | <kbd>↩</kbd>
Edit the match before running it | <kbd>→</kbd> or <kbd>Esc</kbd>
Cancel and restore your original line | <kbd>⌃G</kbd>
