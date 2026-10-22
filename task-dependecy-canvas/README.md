# Task Dependency Canvas for Super Productivity

An infinite 2D canvas plugin for [Super Productivity](https://github.com/super-productivity/super-productivity) to visualize, organize, and link task dependencies with drag-and-drop.

## Features

- **Infinite 2D Canvas**:
  - Infinite scrollable canvas for task placement and dependency visualization.
  - Infinite grid pattern
  - Drag the canvas using middle click or holding `Shift` + left click
  - Dragging with left click selects multiple tasks so you can move them together.
- **Task Management**
  - Drag and drop tasks from the collapsible sidebar onto the canvas for easy placement.
  - Live search bar
  - Dropdown filter for projects and boards
  - Sort tasks by various criteria (due date, priority, project, creation date, name)
- **Basic Metadata Visualization**
  - Blocked/Ready status by background color
  - Double click on the task box to open the task details in Super Productivity.
  - Middle click on the task deletes it from the canvas.
  - **Title**: Full task title with completion strikethrough.
  - **Board / Project**: Color-coded project badge.
  - **Duration**: Elapsed time spent vs total estimate (e.g., ⏱️ 1h 30m / 3h).
  - **Deadline**: Due date with status highlights (e.g., 📅 Today, 📅 Oct 28, or (Overdue) in red).
  - **Priority (defined by tags)**: Automatic priority detection (P1 Urgent, P2 High, P3 Medium, P4 Low, Critical, etc.) styled with distinct color badges.
  - **Completion Checkbox**: Toggle completion status in-place, instantly updating Super Productivity and dependency statuses.
- **Visual Dependency Linking**
  - Drag from the right port of one task to the left port of another to create dependencies.
  - Hover over a dependency and middle click to delete it.
  - Visual Ports:
    - **Yellow Left Port (In)**: Incoming prerequisite ("Depends on").
    - **Blue Right Port (Out)**: Outgoing dependent ("Blocks").
  - Automatically update status by evaluating the completion of prerequisite tasks.
  - Select one task by left clicking on it and visualize its dependencies.
  - Select multiple tasks by holding `Shift` and left clicking on them, without showing individual dependency visualizations for each selected task.
  - Visual feedback for selected tasks during multi-select drag operations.
- **Auto Layout Engine**
  - Automatically arranges tasks on the canvas to minimize overlapping and improve readability.
  - Tasks are positioned by their dependency relationships: 
    - Prerequisite tasks are positioned left to their dependent tasks.
    - Tasks with no dependencies are positioned at the top-left of the canvas.
    - Dependency chains are arranged in a left-to-right sequence to reflect the order of task execution.
- **Sync & Persistence**
  - Saves node positions, links, and viewport state using Super Productivity's `persistDataSynced` API with local storage backup.
  - Listens to Super Productivity hooks (`taskUpdate`, `taskComplete`, `taskCreated`, `taskDelete`) for live updates.

## Development

### Style Guidelines

- primary color: host theme color
- 

- **Infinite 2D Planar Canvas**:
  - Smooth pan and zoom (0.2x to 2.5x) with infinite grid pattern.
  - Interactive directed dependency curves with directional arrows.
  - Real-time curve updates when repositioning task boxes.
- **Left Sidebar for Unlinked Tasks**:
  - Displays all active tasks that have not yet been placed on the canvas.
  - Drag and drop any task directly from the sidebar onto the canvas at exact coordinates.
  - Quick `+ Add` button to place tasks in the center of the view.
  - Live search bar and project/board dropdown filter.
  - One-click "Place All on Canvas".
  - Collapsible sidebar for maximum canvas focus.
- **Task Boxes with Full Metadata**:
  - **Title**: Full task title with completion strikethrough.
  - **Board / Project**: Color-coded project badge.
  - **Duration**: Elapsed time spent vs total estimate (e.g., `⏱️ 1h 30m / 3h`).
  - **Deadline**: Due date with status highlights (e.g., `📅 Today`, `📅 Oct 28`, or `(Overdue)` in red).
  - **Priority (defined by tags)**: Automatic priority detection (`P1 Urgent`, `P2 High`, `P3 Medium`, `P4 Low`, `Critical`, etc.) styled with distinct color badges.
  - **Completion Checkbox**: Toggle completion status in-place, instantly updating Super Productivity and dependency statuses.
- **Dependency Management & Visual Linking**:
  - **Visual Ports**:
    - **Yellow Left Port (In)**: Incoming prerequisite ("Depends on").
    - **Blue Right Port (Out)**: Outgoing dependent ("Blocks").
  - Connect tasks by dragging from the right port of task A to the left port of task B.
  - **Cycle Prevention**: Intelligent DFS cycle detection stops circular dependency loops (e.g., $A \to B \to A$) before they are created.
  - **Blocked vs. Ready State**: Automatically detects if a task is blocked by incomplete prerequisites (`⛔ Blocked by X tasks` vs. `🟢 Ready to start`).
  - **Hover Link Deletion**: Hovering any dependency curve exposes an `✕` button to remove the dependency.
  - **Dependency Chain Highlighting**: Clicking on any task highlights its full upstream prerequisite chain (in warm amber) and downstream dependent chain (in cool blue), while dimming unrelated tasks.
- **Auto Layout Engine**:
  - Single-click **⚡ Auto Layout** arranges all nodes into clean hierarchical/topological columns based on their dependencies.
- **Sync & Persistence**:
  - Saves node positions, links, and viewport state using Super Productivity's `persistDataSynced` API with local storage backup.
  - Listens to Super Productivity hooks (`taskUpdate`, `taskComplete`, `taskCreated`, `taskDelete`) for live updates.

---

## Installation in Super Productivity

1. Ensure [task-dependency-canvas.zip](task-dependency-canvas.zip) is built (or run `npm run build`).
2. Open **Super Productivity**.
3. Go to **Settings** (`⚙`) $\to$ **Plugins**.
4. Click **Choose Plugin File** and select `task-dependency-canvas.zip`.
5. The **Task Canvas** button will appear in your top navigation header and plugin menu.

---

## Canvas Controls

| Action | Control |
|---|---|
| **Pan Canvas** | Click & drag canvas background, Middle-click drag, or Hold `Space` + drag |
| **Zoom** | Mouse wheel, or use `+` / `-` / `Fit` / `1:1` buttons on the top-right toolbar |
| **Place Task** | Drag card from left sidebar onto canvas, or click `+ Add` on sidebar card |
| **Move Task** | Drag any task card on canvas |
| **Link Dependency** | Drag from the **blue right port** (Blocks) to the **yellow left port** (Depends on) |
| **Highlight Chain** | Click a task box to highlight upstream and downstream tasks. Click background to clear |
| **Delete Link** | Hover over the link line and click the red `✕` delete button |
| **Remove from Canvas** | Click `✕` in the top-right of any canvas task box (returns it to sidebar) |
| **Open in App** | Click `↗` on any canvas task box to focus the task in Super Productivity |
| **Auto Arrange** | Click `⚡ Auto Layout` on the toolbar |

---

## Development

```bash
# Rebuild the plugin ZIP package
npm run build
```

You can also test the canvas UI in any web browser without Super Productivity by opening [index.html](index.html) directly (it contains automatic mock fallback data and local storage simulation).
