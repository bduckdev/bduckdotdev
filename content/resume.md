---
geometry:
  - top=2.50mm
  - bottom=2.50mm
  - left=2.00mm
  - right=2.00mm
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

# Brennan Duck

[LinkedIn](https://linkedin.com/in/bduckdev) | [GitHub](https://github.com/bduckdev) | [Portfolio](https://bduck.dev) | Knoxville, TN

## Education

**Georgia Institute of Technology** | _M.S. Computer Science_ | **Incoming Fall 2026**

- Specialization: Computing Systems (Planned)

**Western Governors University** | _B.S. Computer Science_ | **Expected May 2026**

- Focus: Data Structures, Algorithms, Operating Systems, Computer Architecture

## Technical Skills

- **Languages:** Go (Golang), C, C++, Python, SQL, Bash, Java, TypeScript
- **Backend & Systems:** RESTful APIs, Distributed Systems, Concurrency, Memory Management, TCP/IP, Relational Databases
- **Cloud & Infrastructure:** AWS (S3, Lambda, EC2, IAM), Docker, Coolify, Linux/Unix, Git, PostgreSQL

## Projects

[**Redish - Distributed Key-Value Store**](https://github.com/bduckdev/redish) | _Go, TCP, Concurrency_ | **Dec 2025 – Present**\
_A high-performance, sharded key-value store built from scratch to explore distributed consensus and storage engines._

- Architected a custom TCP wire protocol for client-server communication, bypassing HTTP overhead for lower latency.
- Implemented concurrent read/write operations using mutex locking to ensure thread safety under high load.
- Designed a Write-Ahead Log (WAL) to ensure data durability and crash recovery.

[**Bonobo Language Interpreter**](https://github.com/bduckdev/bonobo-interpreter) | _Go, AST, Parsing_ | **Nov 2025 – Present**\
_A custom interpreted programming language written in Go._

- Implemented a Pratt Parser (Top-Down Operator Precedence) to handle complex expressions without parser generators.
- Built a REPL and AST-dumper to visualize parsing logic and tokenization in real-time.

## Professional Experience

**Duck Family Dental** | _Digital Systems Lead_ | **Jan 2025 – Present**\
_Architected and deployed internal digital infrastructure for a healthcare provider, focusing on cost optimization and process automation._

- **Cost Optimization:** Migrated operations from costly third-party SaaS to custom internal tools, reducing annual technical overhead by thousands of dollars.
- **Backend Development:** Engineered a custom notification system to integrate internal patient records with external messaging APIs, improving retention and reducing appointment no-shows by ~15%.
- **Infrastructure & DevOps:** Managed a Dockerized Linux environment on self-hosted hardware, handling DNS, SSL rotation, and CI/CD workflows for zero-downtime updates.
- **Compliance:** Ensured strict adherence to HIPAA standards regarding data privacy and security.

**Freelance** | _Software Developer_ | **May 2024 – Present**

- Developed performant web solutions for local businesses, integrating legacy systems with modern RESTful APIs to automate data entry and reporting workflows.

**Slopopedia** | _Software Engineering Extern_ | **March 2024 – May 2024**
_A community platform for cult and B-movie enthusiasts_

- Operated in an Agile environment, participating in code reviews and sprint planning to improve development velocity.
- Implemented S3 presigned URL workflows to optimize secure asset delivery for media-heavy pages, reducing load times and eliminating public bucket exposure.
