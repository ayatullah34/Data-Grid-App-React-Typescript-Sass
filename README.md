# Getting Started with Data-Grid-App
This application features a data grid that stores social media data for users. By default, it contains four data entries. When a user wants to add a new data entry, they can click on the "Add New Account" button located at the top-right corner of the data grid. A dialog screen will appear where the user can enter the social media link, name, and description of the account. Upon clicking the "Save" button, a new data entry will be added. These data entries are also stored in the localStorage, allowing users to continue their operations based on the last saved data when they relaunch the application.

To search for specific data entries, users can utilize the Search Panel. By entering at least three characters, the user can find the desired data entry. Additionally, there is a "Filter" button that opens a dialog screen, enabling users to filter the data grid based on the selected social media account names through checkboxes. This filtering functionality allows users to narrow down the data grid based on their preferences.

At the bottom of the data grid, there are two different filters. Users can select the number of rows to be displayed per page, and the "page" filter allows users to view the data entries on different pages separately. The social media icons at the top-right corner provide quick access to the company's social media accounts.

The Pagination and Search Panel components in this application are custom-built and can be reused in other pages within the project, tailored to different requirements. The application is developed using Redux Toolkit, TypeScript, React, and Sass, with additional configurations such as webpack, Babel, and Gulp.You can view the live application using this URL: https://master--quiet-treacle-6bcba7.netlify.app/

## Structure
* The folder named `dist` contains build of the application. 
* The `public/assets` folder contains SVG images. 
* Under the `src` folder, there is a `components` and `pages` folders that includes all the custom components and pages used in the application. 
* The `src/constant` folder contains constant data used in the application. 
* The `src/dist` folder contains a `styles.css` file that holds all the CSS files converted from SCSS. 
* The `src/interfaces` folder contains files for all the interfaces related to the pages. 
* Under the `src/redux` folder, there is a store definition necessary for Redux and a `socialMediaSlice` file. 
* The `src/sass` folder includes SCSS files divided into folders written with SASS. 
* Also, configuration files such as `.babelrc`, `gulpfile.js`, and `webpack.config.js` are stored in the root directory. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



