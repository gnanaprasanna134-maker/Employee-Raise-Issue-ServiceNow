# UI Policies and Dependent Fields

## UI Policies

UI Policies are used to control the behavior of fields in the
Employee Raise Issue form.

### 1. Short Description Mandatory

When the **State** is set to **New**, the **Short Description**
field becomes mandatory.

**Condition:**
- State = New

**Action:**
- Short Description → Mandatory

### 2. Number Field Read-Only

The **Number** field is configured as read-only.

This prevents users from manually modifying the automatically
generated issue number.

## Dependent Fields

The **Subcategory** field depends on the selected **Category**.

| Category | Subcategory |
|---|---|
| Network | VPN |
| Hardware | Laptop |
| Software | Server |
| Access | Forgot Password |

This dependency ensures that users can select only the relevant
subcategory for the selected category.

## Benefits

- Improves data accuracy.
- Prevents invalid category and subcategory combinations.
- Makes the form easier to use.
- Ensures required information is entered.
- Protects the system-generated issue number.
