[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/skaisanlahti/name-app">
    <h3 align="center">Name Application</h3>
  </a>

  <p align="center">
    Application for displaying a list of names and their popularity.
    <br />
    <a href="https://github.com/skaisanlahti/name-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://skaisanlahti.github.io/name-app/">View Demo</a>
    ·
    <a href="https://github.com/skaisanlahti/name-app/issues">Report a Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://skaisanlahti.github.io/name-app/)

This is a small single-page front-end application that displays a list of names and their popularity with additional sorting and filtering options. The project was made with create-react-app. The name data was provided in a json file, but the application could easily be extended to get the data from an API by adding a fetch function.

The search input automatically filters the displayed name list based on the characters searched and included in the found names while retaining the sort mode. Sort mode can be changed on the fly regardless of the filtering. To return to the full list, simply leave the search blank again.

Each name is accompanied by a simple bar graph to illustrate the popularity against the most popular name on the full list and does not update with filter changes.

### Built With

- [ReactJS](https://reactjs.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the name-app

```sh
git clone https://github.com/skaisanlahti/name-app.git
```

2. Install NPM packages

```sh
npm install
```

3. Run local development server

```sh
npm start
```

<!-- USAGE EXAMPLES -->

<!-- ROADMAP -->

<!-- CONTRIBUTING -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Sami Kaisanlahti - skaisanlahti@gmail.com

Project Link: [https://github.com/skaisanlahti/name-app](https://github.com/skaisanlahti/name-app)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Solita Dev Academy 2021](https://github.com/solita/dev-academy-2021)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/skaisanlahti/name-app.svg?style=flat-square
[contributors-url]: https://github.com/skaisanlahti/name-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/skaisanlahti/name-app.svg?style=flat-square
[forks-url]: https://github.com/skaisanlahti/name-app/network/members
[stars-shield]: https://img.shields.io/github/stars/skaisanlahti/name-app.svg?style=flat-square
[stars-url]: https://github.com/skaisanlahti/name-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/skaisanlahti/name-app.svg?style=flat-square
[issues-url]: https://github.com/skaisanlahti/name-app/issues
[license-shield]: https://img.shields.io/github/license/skaisanlahti/name-app.svg?style=flat-square
[license-url]: https://github.com/skaisanlahti/name-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sami-kaisanlahti-6587031a6/
[product-screenshot]: images/screenshot.png
