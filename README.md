
# Unsplash clone for educational purposes ONLY!

<br/>
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#tested-with">Tested With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#live">Live version</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project


This website has been built following the UI presented at www.unsplash.com, the functionality they offer and the Unsplash API that is opened to the public. 
It is a simple photo gallery that renders random images on mount, but with the possibility to search images sorted by topics and keywords. 
At the moment, the functionality that this project offers is as follows:

### Current functionality

1) Random images on load with infinite scrolling.
2) Modal that pops up on click to watch the image in detail with information related to the author.
3) Posibility to swipe left and right, navigating through the array of images mounted, with corresponding data for each of them.

### Future implementations

1) Possibility to search images by topics and keywords 
2) Possibility to download images
3) Bonus: To create a server to be able to create an accound and uploading images




### Built With

Application was built with:

-   [React](https://reactjs.org/)
-   [JSS](https://cssinjs.org/)
-   [Unsplash API](https://unsplash.com/developers)
-   [Axios](https://github.com/axios/axios)

### Tested with

- [Cypress](https://www.cypress.io/)
- [Jest with Enzyme](https://enzymejs.github.io/enzyme/docs/guides/jest.html)



## Getting Started

Follow the instructions bellow to start the project on your own machine.



### Installation

1. Get a free API Key at [https://unsplash.com/developers](https://unsplash.com/developers)
2. Clone the repo
    ```sh
    git clone https://github.com/mauroavellaneda/Unsplash.git
    ```
3. Install NPM packages
    ```sh
    yarn install
    ```
4. Create file `.env` in you main directory
5. Enter your API in `.env`
    ```JS
    const REACT_APP_API_KEY = 'ENTER YOUR ACCES KEY FROM UNSPLASH';
    ```



## Live version

_Check the application here [Demo](https://unsplash-gallery-react.netlify.app)_


## Contribution

The devlopement of the App is still in progress. Only some part is implemented. You can help with 
code contribution to add more functionality in the App.



## Important 

[Unplash](https://unsplash.com) is a registered trademark. This project is just for learning purposes and should be treated as such.



## Contact

Mauro Avellaneda - [@Linkedin](https://www.linkedin.com/in/mauro-avellaneda-b9539a18a/) 

