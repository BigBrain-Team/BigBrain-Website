(function() {
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [].concat(
        function(a) {
            a.beforeEach(function(content) {
                if (parent.getMarkdown) {
                    let text = parent.getMarkdown();

                    if (text == "") {
                        return "!> Your content will be displayed here -- just type!" + content;
                    }
                    
                    return text + content;
                }
                
                return content;
            });
        },
        window.$docsify.plugins || []
	);
})();
