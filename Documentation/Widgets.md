# Custom Service Portal Widgets

The Employee Raise Issue project uses custom Service Portal widgets
to improve the user experience and provide quick access to the issue
submission functionality.

## 1. Commercial Widget

### Purpose

The Commercial Widget is a custom visual widget designed to provide
an interactive element on the Employee Center page.

### Technologies Used

- HTML
- CSS

### Functionality

The widget displays floating words/elements that respond to user
interaction such as cursor movement or hover.

This provides an interactive and visually engaging experience for
employees using the portal.

---

## 2. Link Redirect Widget

### Purpose

The Link Redirect Widget provides a direct way for employees to
access the Raise Employee Issue Record Producer.

### Technologies Used

- HTML
- CSS
- JavaScript / Client Script

### Functionality

The widget displays a link or button such as **Raise Ticket**.

When the employee clicks the link/button, the widget redirects the
user to the **Raise Employee Issue** Record Producer.

### Integration

The widget is connected to the Record Producer using its ServiceNow
Record Producer identifier (sys_id).

### User Flow

1. Employee opens the Employee Center portal.
2. Link Redirect Widget is displayed.
3. Employee clicks **Raise Ticket**.
4. The widget redirects to the Raise Employee Issue Record Producer.
5. Employee enters the required issue details.
6. Employee submits the issue.

## Widget Integration

The two custom widgets are placed on the Employee Center page using
a two-column layout.

| Column | Widget |
|---|---|
| Column 1 | Commercial Widget |
| Column 2 | Link Redirect Widget |

## Benefits

- Improves portal usability.
- Provides quick access to issue submission.
- Adds interactive elements to the portal.
- Integrates custom widgets with the Record Producer.
- Provides a better employee experience.
