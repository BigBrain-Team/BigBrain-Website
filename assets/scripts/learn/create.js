;
(function() {
    window.$docsify = {
        name: "Me",
        homepage: "../preview.md",
        tabs: {
            persist: true,
            sync: false
        }
    }

    function install(hook) {
        hook.beforeEach(function(content) {
            return content + "# added content**";
        });
    }

    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);
})();