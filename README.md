<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/logos/logo.png" alt="Logo">
  </a>

  <h3 align="center">ITSC 4155 - Capstone Project</h3>

  <p align="center">
    UNC at Charlotte Faculty Connections, Google Scholar
    <br/>
    Scraping and Data Visualization
    <br />
    <a href="https://capstone-front-end-lime.vercel.app/">View Live Project</a>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Home Page Screenshot][home-screenshot]](https://capstone-front-end-lime.vercel.app/)

There are many issues students face when it comes to research or writing papers, knowing where to start. Often students are reccomended to check their school's local online library resources, or services like Google Scholar. While these services are great for in depth research, what if a student wanted to find an expert or faculty with an interest in their researched topic from their own school? We set to find a solution for this, where students can search for an interest topic or faculty member, and visualize the aggregate data about our schools faculty members and interests -- We think this is it.

What we provide:

- Responsive searchable aggregate data table for all UNC at Charlotte's faculty members
- Scraped information from UNC at Charlotte and Google Scholar sources
- Data visualization for large data sets to understand interests at Charlotte

Of course, this project is built for our home here at UNC at Charlotte, but we hope to provide insight for other solutions for other organizations and data sets.

### Built With

#### Front-End

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Apache ECharts](https://echarts.apache.org/en/index.html/)
- [Echarts-for-react](https://www.npmjs.com/package/echarts-for-react/)
- [React Icons](https://react-icons.github.io/react-icons/)

#### Back-End

- [Python](https://www.python.org/)
- [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/)
- [Pandas](https://pandas.pydata.org/)
- [Scholarly](https://scholarly.readthedocs.io/en/stable/quickstart.html)

<p align="right"><a href="#top">back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

Follow this quick guide to run this project locally

### Prerequisites

- npm

### Run Project Locally

1. Clone the repo

   ```sh
   git clone https://github.com/HullRyan/CapstoneFrontEnd
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Run the Next.js project

   ```sh
   npm run dev
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Search

- Responsive searchable table where users can search for a faculty name or interest
- Displays links to UNC at Charlotte Faculty page, and Google Scholar page if available

[![Search Page Screenshot][search-screenshot]](https://capstone-front-end-lime.vercel.app/data)

### Charts

- Responsive traversable charts where users can view College, Department, and Faculty interest statistics

[![Charts Page Screenshot][charts-screenshot]](https://capstone-front-end-lime.vercel.app/charts)

<!-- LICENSE -->

## License

Distributed under the MIT License

<!-- CONTACT -->

## Contact

Ryan Hull - hull.ryanc@gmail.com

Project Link: [https://github.com/HullRyan/CapstoneFrontEnd](https://github.com/HullRyan/CapstoneFrontEnd)

<p align="right"><a href="#top">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ryan-hull-478b64178
[home-screenshot]: public/images/home-screenshot.png
[search-screenshot]: public/images/search-screenshot.png
[charts-screenshot]: public/images/charts-screenshot.png
