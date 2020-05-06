;
(function() {
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [].concat(
        function(a) {
            a.beforeEach(function(content) {
                let text = parent.getMarkdown();

                if (text == "") {
                    return "!> Your content will be displayed here -- just type!" + content;
                }
                return parent.getMarkdown() + content;
            });
        },
        window.$docsify.plugins || []);
})();