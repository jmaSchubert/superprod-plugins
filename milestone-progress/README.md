# Milestone Progress Tracker for Super Productivity

A comprehensive, visual milestone and deliverable tracking plugin for [Super Productivity](https://github.com/super-productivity/super-productivity).

## Features

- **Progress Bars**:
  - **Completed Tasks**: Real-time completed vs. total assigned task count and completion percentage ($N_{\text{done}} / N_{\text{total}}$).
  - **Time Spent & Estimate**: Time logged against total estimated work duration with overtime highlight indicators.
  - **Raw Left Over Time (Created → Due Date)**: Dedicated progress bar displaying the exact raw time difference between the milestone's creation date and target due date, showing time elapsed and leftover time remaining.
- **Creation Date**:
  - Automatically defaulted to the current day upon creation, with editable date picker in the milestone modal.
  - Tagged on cards and list rows (`🌱 Created [Date]`).
- **Filter Method for Overviewing Milestones Across All or Selected Projects**:
  - **"All Projects" Overview**: Aggregate metrics and milestone cards across your entire workspace in one consolidated dashboard.
  - **Project Filter Buttons**: Instant 1-click filtering to any specific project with project badge colors and task count tallies. Supports multi-project selection with `Ctrl` / `Cmd` + click.
  - **Strict Project Scope Mode**: Toggle whether cross-project milestones calculate progress bars across all tasks or strictly for the selected project subset.
  - **Status Filter**: Switch between `All`, `In Progress`, `Completed`, and `Overdue`.
  - **Search & Sort**: Real-time search across titles, descriptions, and tasks; sort by due date, progress %, leftover time, or name.
- **In-Place Interactive Task Management**:
  - Expandable task accordion directly within each milestone card.
  - Check off tasks with instant Super Productivity live synchronization.
  - Focus button (`↗`) to immediately open and select tasks in Super Productivity.
  - Assign and remove tasks effortlessly.
- **Auto-Detection Engine**:
  - Scan tags like `M1`, `Sprint 1`, `Release`, or `v1.0` to generate milestones automatically.
- **Views**:
  - Switch between visual **Card Grid View** and compact **List View**.

## Installation

1. Run `npm run build` inside `milestone-progress/`.
2. Open **Super Productivity**.
3. Go to **Settings** (`⚙`) $\to$ **Plugins**.
4. Click **Choose Plugin File** and select `milestone-progress.zip`.
5. Access via the top header button **🚩 Milestones** or the main menu.
