let codeInput = null;;

function getMarkdown() {
    return codeInput.getValue();
}

function replaceAtCaret(text) {
    codeInput.replaceSelection(text)
}

function updatePreview() {
    // Reloads iframe
    $('#out').attr('src', function(i, val) {
        return val;
    });
}

(function() {
    const defaultCode = "*BigBrain Team @5.2.20* \n" +
        "# Welcome to the Editor!\n" +
        "## Important Notes\n" +
        "- We use markdown to generate courses.\n" +
        "- This allows for great customizability and it's easy to learn!\n" +
        "- More features to aid your lesson creation soon...\n\n" +
        "!> **Important:** Your changes do not save after closing this tab! :grimace:\n\n\n\n\n\n\n";

    // Init Code Editor
    codeInput = CodeMirror(document.getElementById("in"), {
        value: defaultCode,
        theme: "material-palenight",
        mode: "gfm",
        lineNumbers: true
    });

    // Reload Button
    let btn = document.getElementById("preview-btn");
    btn.addEventListener("click", updatePreview);

    for (let i = "i"; i != "iiii"; i += "i") {
        let headingBtn = document.getElementById(i + "-heading");
        headingBtn.addEventListener("click", function() {
            let text = `\n${"#".repeat(i.length)} Heading\n`;
            replaceAtCaret(text);
        });
    }

    let tabs = document.getElementById("tabs")
    tabs.addEventListener("click", function() {
        let text = "<!--tabs:start-->\n\n#### **Tab 1**\n\n#### **Tab 2**\n\n<!--tabs:end-->";
        replaceAtCaret(text);
    });

    let eq = document.getElementById("eq")
    eq.addEventListener("click", function() {
        let text = "$ f(x) $";
        replaceAtCaret(text);
    });

    $(window).bind('keydown', function(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (String.fromCharCode(event.which).toLowerCase()) {
                case 's':
                    event.preventDefault();
                    updatePreview();
            }
        }
    });

})();