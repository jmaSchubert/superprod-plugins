/**
 * Super Productivity Plugin: Milestone Progress Tracker
 * Host-side script for registering UI entries and hooks
 */

// Register header button for 1-click access to the milestone progress view
if (typeof PluginAPI !== 'undefined' && PluginAPI.registerHeaderButton) {
  PluginAPI.registerHeaderButton({
    id: 'milestone-progress-header-btn',
    label: 'Milestones',
    icon: 'flag',
    onClick: () => {
      PluginAPI.showIndexHtmlAsView();
    },
  });
}

// Register menu entry
if (typeof PluginAPI !== 'undefined' && PluginAPI.registerMenuEntry) {
  PluginAPI.registerMenuEntry({
    label: 'Milestone Progress Tracker',
    icon: 'flag',
    onClick: () => {
      PluginAPI.showIndexHtmlAsView();
    },
  });
}

console.log('[Milestone Progress Tracker] Plugin host script initialized');
