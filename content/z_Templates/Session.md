<%_* const num = tp.user.next_session_number(tp);
const new_title = tp.file.title.replace("?ID?", num);
await tp.file.rename(new_title) _%>
---
aliases: <% tp.user.wrap_link(tp.date.now("YYYY-MM-DD"), "[", "]") %>
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---

#  <%* tR += tp.user.wrap_link(new_title) %>

## Player Characters

Who was actually here for this session?

- Hodarth Magarkis
- KremKram Fizzlebinger

## Recap From <%* tR += tp.user.wrap_link("Session " + (num-1), "[[", "|Last Session]]") %>

!<%* tR += tp.user.wrap_link("Session " + (num-1), "[[", "#Recap]]") %>

## Notes

<% tp.file.cursor() %>

## Recap

What do you want to remember at the start of next session?
