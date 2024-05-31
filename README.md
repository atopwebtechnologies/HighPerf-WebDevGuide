# Microblogging System

Welcome to the Microblogging System project! This document provides an overview of the project's structure and initial setup instructions. We highly recommend that all engineers read the ["high-performance-guide.md"](high-performance-guide.md) and ["microblogging_system_ddd.md"](microblogging_system_ddd.md) to understand the foundational concepts and methodologies used in this project. 📚

## Overview

The Microblogging System is designed using Domain-Driven Design (DDD) principles and follows a microservices architecture. This project aims to teach you how to architect, design, build, test, and deploy scalable and maintainable web applications.

## Folder Structure

Here's the initial folder structure of the project:

```lua
microblogging-system/
├── services/
│   ├── user-service/
│   │   ├── src/
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   │   └── user.ts
│   │   │   │   ├── value-objects/
│   │   │   │   │   └── profile.ts
│   │   │   │   ├── aggregates/
│   │   │   │   │   └── userAggregate.ts
│   │   │   │   ├── repositories/
│   │   │   │   │   └── userRepository.ts
│   │   │   ├── application/
│   │   │   │   └── services/
│   │   │   │       └── userService.ts
│   │   │   ├── infrastructure/
│   │   │   │   ├── persistence/
│   │   │   │   │   └── userRepositoryImpl.ts
│   │   │   │   └── utils/
│   │   │   │       └── generateUniqueId.ts
│   │   │   ├── interfaces/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── userController.ts
│   │   │   │   └── http/
│   │   │   │       └── expressApp.ts
│   │   │   ├── index.ts
│   │   │   └── config/
│   │   │       └── db.ts
│   │   ├── .env
│   │   ├── package.json
│   │   ├── pnpm-lock.yaml
│   │   ├── tsconfig.json
│   │   └── README.md
├── README.md
└── high-performance-guide.md

```

This is the starting point, and additional folders and files might be created as the project evolves.

## Technologies Used

- JavaScript: A programming language for web development.
- Node.js: A runtime for executing JavaScript on the server.
- Express.js: A web framework for Node.js.
- TypeScript: A superset of JavaScript that adds static types.

## Getting Started 🚀

### Prerequisites

Make sure you have the following installed:

- Node.js (v14.x or later)
- pnpm

### Cloning the Repository

To clone the repository, run the following command in your terminal:

```sh
git clone https://github.com/atopwebtechnologies/HighPerf-WebDevGuide.git
```

```sh
cd microblogging-system
```

### Setting Up the User Service
Navigate to the user-service directory and install the dependencies

```sh
cd services/user-service
pnpm install

```

### Running the User Service
To start the User Service, run the following command:

```sh
pnpm run dev

```

The service should now be running on [http://localhost:3000](http://localhost:3000).

### Important 📌

Before you dive into the code, please make sure to read the following documents:

- ["high-performance-guide.md"](high-performance-guide.md): Understand the basic nuances of Domain-Driven Design and the overall architecture of the project.
- ["microblogging_system_ddd.md"](microblogging_system_ddd.md): Detailed explanation of the Domain-Driven Design principles applied in this project.

## Next Steps

Now that you have the User Service up and running, the next steps involve:

1. Implementing the Post Service, which handles creating, reading, updating, and deleting posts.
2. Defining and implementing the Comment Service and Notification Service.
3. Integrating these services to form a complete microblogging system.

Stay tuned for updates and further instructions on building out these services. Happy coding! 💻✨





