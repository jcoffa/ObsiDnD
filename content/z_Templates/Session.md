<%_* const num = tp.user.next_session_number(tp);
const new_title = tp.file.title.replace("?ID?", num);
await tp.file.rename(new_title) _%>
---
aliases: <% tp.user.wrap_link(tp.date.now("YYYY-MM-DD"), "[", "]") %>
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---

#  <%* tR += tp.user.wrap_link(new_title) %>

## Player Characters

- [[Blake]]
- [[Garrison]]
- [[NG]]
- [[The Collector]]
- [[Tilly]]
- [[Zrandovorski]]

## Recap From <%* tR += tp.user.wrap_link("Session " + (num-1), "[[", "|Last Session]]") %>

> [!info]- Click here to view the recap
>
> !<%* tR += tp.user.wrap_link("Session " + (num-1), "[[", "#Recap]]") %>

## In-Game Dates

- ?

## Notes

<% tp.file.cursor() %>

## Recap

What do you want to remember at the start of next session?
