;
(function() {
    // Reload Button
    let btn = document.getElementById("preview-btn");
    btn.addEventListener("click", function() {
        console.log("click");
    });

    let textArea = document.getElementById("in");
    let defaultCode = "*BigBrain Team @5.2.20* \n\
        # Welcome to the Editor!\n\
        ## Important Notesn\n\
        - We use markdown to generate courses.\n\
        - This allows for great customizability and it's easy to learn!\n\
        - More features to aid your lesson creation soon...\n\n\
        !> **Important:** Your changes do not save after closing this tab! :grimace:";

    var codeInput = CodeMirror(textArea, {
        
        value: defaultCode,
        theme: "material-palenight",
        mode: "gfm",
        lineNumbers: true
    });
})();