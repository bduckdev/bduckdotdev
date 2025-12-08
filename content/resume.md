---
geometry:
  - top=5.00mm
  - bottom=5.00mm
  - left=3.00mm
  - right=3.00mm
fontsize: 11pt
mainfont: "Geist"
mainfontoptions:
  - "ItalicFont=content/fonts/Geist-RegularItalic.otf"
  - "SemiBoldFont=content/fonts/Geist-SemiBold.otf"
  - "SemiBoldItalicFont=content/fonts/Geist-SemiBold.otf"
  - "BoldFont=content/fonts/Geist-Bold.otf"
  - "BoldItalicFont=content/fonts/Geist-BoldItalic.otf"
  - "ExtraBoldFont=content/fonts/Geist-ExtraBold.otf"
  - "ExtraBoldItalicFont=content/fonts/Geist-ExtraBoldItalic.otf"
  - "BlackFont=content/fonts/Geist-Black.otf"
  - "BlackItalicFont=content/fonts/Geist-BlackItalic.otf"
header-includes: |
  \usepackage{fontspec}
  \usepackage{paralist}
  \let\itemize\compactitem
  \pagenumbering{gobble}
  \usepackage{setspace}
  \singlespacing
---

# **Brennan Duck**

[LinkedIn](https://linkedin.com/in/bduckdev) | [GitHub](https://github.com/bduckdev) | [Portfolio](https://bduck.dev) | Knoxville, TN

## Education

**Georgia Institute of Technology** | _M.S. Computer Science_ | **Incoming Fall 2026**

- Specialization: Computing Systems (Planned)

**Western Governors University** | _B.S. Computer Science_ | **Graduating May 2026**

- Focus: Data Structures, Algorithms, Operating Systems, Computer Architecture, Statistics

## Technical Skills

- **Systems & Languages:** Go (Golang), C, Linux/Unix, Bash, Python, TypeScript, SQL
- **Concepts:** Distributed Systems, Concurrency, Compilers/Interpreters, Memory Management, TCP/IP
- **Tools:** Git, Docker, PostgreSQL, LLVM (familiarity), Make

## Projects

**Distributed Key-Value Store** | _Go, TCP, Concurrency_ | **Dec 2025 - Present**\
_A high-performance, sharded key-value store built from scratch to explore distributed consensus and storage engines._

- Architected a custom TCP wire protocol for client-server communication, bypassing HTTP overhead for lower latency.
- Implemented concurrent read/write operations using mutex locking to ensure thread safety under load.
- Designed a Write-Ahead Log (WAL) to ensure data durability and crash recovery (In Progress).
- **Status:** Core storage engine active; currently implementing replication logic.

**Bonobo Language Interpreter** | _Go, Pratt Parsing, AST_ | **Nov 2025 - Present**\
_A custom interpreted programming language written in Go, featuring C-style syntax and first-class functions._

- Implemented a Pratt Parser (Top-Down Operator Precedence) to handle complex expressions and operator associativity without parser generators.
- Designed a strongly-typed Abstract Syntax Tree (AST) to represent the language's grammatical structure.
- Built a REPL and AST-dumper to visualize parsing logic and tokenization in real-time.
- **Status:** Parser complete; currently implementing the tree-walk evaluator.

## Professional Experience

**Duck Family Dental** | _Digital Systems Lead_ | **2025 - Current**

- Architected and deployed the practice's digital infrastructure, ensuring HIPAA compliance and high availability on self-hosted hardware.
- Engineered automated data pipelines for patient retention, reducing appointment no-shows by ~15% via custom backend services.
- Migrated operations from costly third-party SaaS to internal tools, reducing annual technical overhead by thousands.
- Managed a Dockerized Linux environment, handling DNS, SSL certificate rotation, and CI/CD workflows for zero-downtime updates.

**Freelance** | _Software Developer_ | **2022 - Current**

- Developed performant web solutions for local businesses, focusing on SEO optimization and lead generation analytics.
- Integrated legacy systems with modern APIs to automate data entry and reporting workflows.

**SlopGoblins NPO** | _Frontend Engineer_ | **March 2024 - May 2024**

- Engineered a reusable component library to standardize UI across the platform, improving development velocity.
- Optimized S3 asset delivery strategies to reduce load times for media-heavy pages.
