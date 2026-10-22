/**
 * Super Productivity Plugin: Task Dependency Canvas
 * Host-side script for registering UI entries and hooks
 */

// Register header button for 1-click access to the canvas
if (typeof PluginAPI !== 'undefined' && PluginAPI.registerHeaderButton) {
  PluginAPI.registerHeaderButton({
    id: 'task-canvas-header-btn',
    label: 'Task Canvas',
    icon: 'account_tree',
    onClick: () => {
      PluginAPI.showIndexHtmlAsView();
    },
  });
}

// Register menu entry
if (typeof PluginAPI !== 'undefined' && PluginAPI.registerMenuEntry) {
  PluginAPI.registerMenuEntry({
    label: 'Task Dependency Canvas',
    icon: 'account_tree',
    onClick: () => {
      PluginAPI.showIndexHtmlAsView();
    },
  });
}

console.log('[Task Dependency Canvas] Plugin host script initialized');
