(function() {
	window.$docsify = window.$docsify || {};
	window.$docsify.plugins = [].concat (
		function(hook) {
			hook.beforeEach(function(content) {
				if (parent.getSidebarMarkdown) {
					let text = "# Sidebar Preview\n";
					text += "---\n\n";
					text += parent.getSidebarMarkdown();
					
					if (text == "") {
						return "!> Sidebar will be displayed here -- drag and drop the blocks!";
					}

					return text + content;
				}

				return "!> Sidebar will be displayed here -- drag and drop the blocks!"
			});
		},
		window.$docsify.plugins || []
	);
})();
