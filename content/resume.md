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

**Western Governors University** | _B.S. Computer Science_ | **Currently Attending**

- Focus: Data Structures, Algorithms, Operating Systems, Computer Architecture

## Technical Skills

- **Languages:** Go (Golang), C, C++, Python, SQL, Bash, Java, TypeScript
- **Backend & Systems:** RESTful APIs, Distributed Systems, Concurrency, Memory Management, TCP/IP, Relational Databases
- **Cloud & Infrastructure:** AWS (S3, Lambda, EC2, IAM), Docker, Coolify, Linux/Unix, Git, PostgreSQL

## Projects

[**Deterministic PII Redactor**](https://github.com/bduckdev/phi-redaction) | _Go, Data Structures, REST API_| **April 2026 – Present**\
_High-performance PHI/PII redaction engine using regex, Aho-Corasick, and English grammatical patterns_

- Architected a fully deterministic and auditable PHI/PII redaction pipeline, ensuring compliance and traceability for sensitive healthcare data
- Designed and implemented a custom name detection system combining Aho-Corasick algorithm with grammatical rules, achieving up to 30x faster performance than traditional NER and LLM-based approaches
- Built and deployed a REST API using Chi router to serve the redaction engine efficiently with low latency

[**Bonobo Language Interpreter**](https://github.com/bduckdev/bonobo-interpreter) | _Go, AST, Parsing_ | **Nov 2025 – Present**\
_A custom interpreted programming language written in Go._

- Implemented a Pratt Parser (Top-Down Operator Precedence) to handle complex expressions without parser generators.
- Built a REPL and AST-dumper to visualize parsing logic and tokenization in real-time.

## Professional Experience

**ContinuumCloud** | _Software Engineering Intern_| **May 2026 – Present**\
_Welligent AI and innovation team_

- Architected and developed a Proof of Concept (PoC) for a modern Behavioral Health EHR system, designing scalable architecture to modernize legacy Welligent workflows and improve clinical documentation efficiency.
- Built an insurance discovery tool that automates patient insurance verification and eligibility checks, streamlining revenue cycle processes within the Welligent platform.
- Developed an internal data extraction tool that automates retrieval and processing of documents from SharePoint, significantly reducing manual data collection time for the AI and Innovation team.

**Freelance** | _Software Developer_ | **May 2024 – Present**

- Developed performant web solutions for local businesses, integrating legacy systems with modern RESTful APIs to automate data entry and reporting workflows.

**Slopopedia** | _Software Engineering Extern_ | **March 2024 – May 2024**\
_A community platform for cult and B-movie enthusiasts_

- Operated in an Agile environment, participating in code reviews and sprint planning to improve development velocity.
- Implemented S3 presigned URL workflows to optimize secure asset delivery for media-heavy pages, reducing load times and eliminating public bucket exposure.
