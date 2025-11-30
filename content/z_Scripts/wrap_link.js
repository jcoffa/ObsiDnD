/*
 * Wraps the input text with the internal link characters; [[ and ]].
 *
 * Mainly used to prevent awkward note titles in templates from appearing
 * in graphs and search queries, since using the literal [[ and ]] will
 * put a note (which does not exist and likely has a silly name) into the
 * vault's note space.
 *
 * E.g. the literal link [[Journal - <% tp.date.now("Y") %>]] will properly
 * resolve to [[Journal - 2025]] after Templater has done its job, but the
 * template itself will appear to have a link to a file that doesn't exist
 * which is named 'Journal - <% tp.date.now("Y") %>' which looks odd when
 * it shows up in graph view/search lists.
 */
function wrap_link(text, wrap_start, wrap_end) {
    if (wrap_start === undefined) {
        wrap_start = "[[";
        wrap_end = "]]";
    } else if (wrap_end === undefined) {
        wrap_end = wrap_start;
    }

    return "" + wrap_start + text + wrap_end;
}
module.exports = wrap_link;
