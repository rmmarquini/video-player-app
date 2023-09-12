# Video Player Application

This project is a video player application developed using the React library and the ViteJS framework using Typescript. It is designed to provide a user-friendly interface for playing videos. In addition to these core technologies, Redux was initially used for state management but was later replaced with Zustand, both of which handle component state management efficiently. The Axios library was employed for making API requests. Finally, unit tests were written to ensure the proper functioning of state management in components.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Unit Tests](#unit-tests)

## Features

- Seamless video playback experience.
- State management powered by Zustand, ensuring efficient component state handling.
- Integration with Axios for making API requests.
- Comprehensive unit tests for state management.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/your-video-player-project.git
   cd your-video-player-project
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

## Usage

To run the application locally, use the following command:

```shell
npm run dev
```

This will start the development server, and you can access the application in your browser at `http://localhost:5173`.

## State Management

This project initially used Redux for state management, but it has been replaced with Zustand for more efficient component state management. You can find the Zustand store configurations in the `src/zustand` directory. State management ensures that the application's components maintain their data consistency and synchronization.

## API Integration

API integration is facilitated by the Axios library and a fictitious database created using json-server. You can find the API-related code in the `src/lib` directory.
The json-server library was used to emulate a server, providing a fictitious database. The file `server.json` in project root directory, describe the data.
Run the following command, to execute the server:

```shell
npm run server
```

This allows the application to fetch data from the emulated server seamlessly, enhancing its functionality.

## Unit Tests

Unit tests have been written to ensure the proper functioning of state management within the components.
You can find these tests in `*.spec.ts` files.
To run the tests, use the following command:

```shell
npm run test
```

Running the tests ensures the reliability and stability of the application.

Feel free to explore and further customize this project to meet your specific requirements!

---
