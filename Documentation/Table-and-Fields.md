# Custom Table and Fields

## Table Name

Employee Raise Issue

## Description

The Employee Raise Issue table stores IT-related issues raised by
employees through the ServiceNow Employee Center portal.

## Fields

| Field | Type | Description |
|---|---|---|
| Number | Auto Number | Unique issue number |
| Requester | Reference - User | Employee who raised the issue |
| Category | Choice | Main issue category |
| Subcategory | Choice | Specific issue type |
| Short Description | String | Brief description of the issue |
| State | Choice | Current status of the issue |
| Priority | Choice | Importance of the issue |
| Assignment Group | Reference - User Group | Group responsible for the issue |

## Category Choices

- Network
- Hardware
- Software
- Access

## Subcategory Choices

- VPN
- Laptop
- Server
- Forgot Password

## State Choices

- New
- In Progress
- Resolved
- Closed

## Priority Choices

- Critical
- High
- Medium
- Low
