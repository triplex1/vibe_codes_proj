# Commands Documentation

This document contains the available commands and their usage for the rovodev project.

## Available Commands

### Development Commands

`ash
# Command examples will be added here
`

### Agent Commands

`ash
# Agent-related commands will be added here
`

### Utility Commands

`ash
# Utility commands will be added here
`

### Linear Ticket Commands

#### linear-ticket

**Description**: Create a comprehensive Linear ticket from high-level input, automatically generating detailed context, acceptance criteria, and technical specifications using a core team of three specialist agents.

**Argument Hint**: `<high-level description of work needed>`

**Mission**: Transform high-level user input into a well-structured Linear ticket with comprehensive details. This command uses a core team of three agents (`product-manager`, `ux-designer`, `senior-software-engineer`) to handle all feature planning and specification in parallel. It focuses on **pragmatic startup estimation** to ensure tickets are scoped for rapid, iterative delivery.

**Pragmatic Startup Philosophy**:
- 🚀 **Ship Fast**: Focus on working solutions over perfect implementations.
- 📊 **80/20 Rule**: Deliver 80% of the value with 20% of the effort.
- 🎯 **MVP First**: Define the simplest thing that could possibly work.

**Smart Ticket Scoping**: Automatically breaks down large work into smaller, shippable tickets if the estimated effort exceeds 2 days.

**Important**: This command ONLY creates the ticket(s). It does not start implementation or modify any code.

##### Core Agent Workflow

For any feature request that isn't trivial (i.e., not LIGHT), this command follows a strict parallel execution rule using the core agent trio.

**The Core Trio (Always Run in Parallel)**:
- **`product-manager`**: Defines the "Why" and "What." Focuses on user stories, business context, and acceptance criteria.
- **`ux-designer`**: Defines the "How" for the user. Focuses on user flow, states, accessibility, and consistency.
- **`senior-software-engineer`**: Defines the "How" for the system. Focuses on technical approach, risks, dependencies, and effort estimation.

**Parallel Execution Pattern**:
```yaml
# CORRECT (Parallel and efficient):
- Task(product-manager, "Define user stories and business value for [feature]")
- Task(ux-designer, "Propose a simple UX, covering all states and accessibility")
- Task(senior-software-engineer, "Outline technical approach, risks, and estimate effort")
```

##### Ticket Generation Process

**1) Smart Research Depth Analysis**

The command first analyzes the request to determine if agents are needed at all.

- **LIGHT Complexity** → NO AGENTS
  - For typos, simple copy changes, minor style tweaks.
  - Create the ticket immediately.
  - Estimate: <2 hours.

- **STANDARD / DEEP Complexity** → CORE TRIO OF AGENTS
  - For new features, bug fixes, and architectural work.
  - The Core Trio is dispatched in parallel.
  - The depth (Standard vs. Deep) determines the scope of their investigation.

**Override Flags (optional)**:
- `--light`: Force minimal research (no agents).
- `--standard` / `--deep`: Force investigation using the Core Trio.
- `--single` / `--multi`: Control ticket splitting.

**2) Scaled Investigation Strategy**

- **LIGHT Research Pattern** (Trivial Tickets): NO AGENTS NEEDED.
- **STANDARD Research Pattern** (Default for Features): The Core Trio with standard scope.
- **DEEP Spike Pattern** (Complex or Vague Tickets): The Core Trio with deeper scope.

**3) Generate Ticket Content**

Findings from the three agents are synthesized into a comprehensive ticket with structured sections:
- Business Context & Purpose
- Expected Behavior/Outcome
- Research Summary
- Acceptance Criteria
- Dependencies & Constraints
- Implementation Notes

**4) Smart Ticket Creation**

- **If total estimated effort is ≤ 2 days**: A single, comprehensive ticket is created.
- **If total estimated effort is > 2 days**: The work is automatically broken down into 2-3 smaller, interconnected tickets.

**5) Output & Confirmation**

The command finishes by returning the URL(s) of the newly created ticket(s) in Linear.

## Command Structure

Each command follows this general structure:
- Command name
- Description
- Usage syntax
- Parameters
- Examples

## Adding New Commands

When adding new commands to this project:

1. Document the command syntax
2. Provide clear examples
3. List all parameters and options
4. Include expected output format

---

*This file will be updated as new commands are implemented.*
