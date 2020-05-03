window.$docsify = {
    homepage: "preview.md",
    tabs: {
        persist: true,
        sync: false
    }
}

function install(hook) {
    hook.beforeEach(function(content) {
        return content + parent.getMarkdown();
    });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);
