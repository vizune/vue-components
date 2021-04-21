# Umbraco Umbrella README

## Front end structure

.build is the Webpack build that compiles assets into a .NET Umbraco website

.storybook is the build that runs a static build of the Storybook component library

src contains the front end assets such as fonts, CSS, Vue components that are shared between both builds.

For further details about .storybook, refer to the README in its directories.

All front end assets will be compiled into "ProjectName.Web/assets", this makes it easier for the Webpack clean task

## Front end integration

Copy the entire "ProjectName.FrontEnd" folder and paste into your project and replace "ProjectName" with the name of your project. 

Ensure that the .FrontEnd is at the same directory level as the .Web folder

Use the "npm i" command on the .FrontEnd directory to install the required node packages

Update the "buildPath" variable in .build/config folder, this is used for the Webpack configuration

## Front end build commands

All build commands are ran on the root .FrontEnd directory.

```
npm run start
```
Builds assets into Umbraco project (Development node environment)
Watches for changes in src directory and rebuilds

```
npm run build
```
Builds assets into Umbraco project (Production node environment)

```
npm run build:icons
```
Generates SVG icon sprite. You may need to run this command if you updated any files in src/assets/icons

```
npm run storybook - Runs storybook
```
Runs the Storybook component library locally

```
npm run build-storybook 
```
Exports Storybook as a static app

```
npm run watch:css
```
Compiles Tailwind CSS file only, you may want to use this command to see changes after updating the tailwind.config.js file.


## Front end coding standards
It is important that all front end development maintain consistency

CSS architecture: ITCSS

CSS methodology: SUITCSS (https://suitcss.github.io/)

```
.MyComponent {}
.MyComponent.is-animating {}
.MyComponent--modifier {}

.MyComponent-part {}
.MyComponent-anotherPart {}
```

### Naming conventions

CSS component naming convention: CamelCase
CSS utility naming convention: kebab-case

CSS class names for components and utilities have intentionally different naming conventions in order to distinguish between them.

```
.FileUpload {
    background: #fff;
}
```

```
    <div class="FileUpload text-black">
```

Vue component naming convention: kebab-case
Components are kebab case because the component name is used when embedding components into sites.
Please start your component name with "vue-" so it is easier to distinguish vue components in C# partials.
This also takes into consideration the use of multiple framework in the future such Angular and React.

```
    export default {
        name: 'vue-file-upload',
        data() {
            return {
            }
        }
    }
```

```
template: '<vue-file-upload>Please upload your CV:</vue-file-upload>'
```

### Tailwind
* In order for CSS Purge to work with Tailwind, your node environment needs to be set to production, for more details visit https://tailwindcss.com/docs/optimizing-for-production

### SASS

* There is a SASS master file for both storybook (src/css/storybook.scss) and the Umbraco site (src/css/site.scss) in order to keep theming separate. Storybook theme SASS will not compile into the Umbrella.Web assets.

* Some components may only be available on Storybook (a reason for this could be the component is made available in Umbrella but not required for the project but still kept there in case it will be in the future or it is only used to handle displaying components in Storybook). This component SASS will be located in src/assets/css/storybook. If the component SASS is required for the project, please move it into src/assets/css/components and then move the import from src/assets/css/storybook.scss into src/assets/css/site.scss

### Scripts
* src/scripts is where the non-Vue JavaScript functionality is added to the site. 

* All polyfills and other vendor JS is imported to the vendor.js file.

* It is recommended to use a "data-js" attribute to select an element in JavaScript rather than a class or ID. This helps with future maintance of components as a class name or ID could be removed because the CSS is no longer needed without knowing that JS functionality is tied to that class.

* Please refrain from using jQuery, this is not supported in the default Webpack build. You will need to implement this if it is a necessity but I suggest visiting http://youmightnotneedjquery.com/ and http://youmightnotneedjqueryplugins.com/ first for vanilla JS alternatives.

* There is are $ selectors made available in scripts.

Use $1(querySelector, document) for document.querySelector and $(querySelectorAll, document) for document.querySelectorAll
```
import { $, $1 } from "Utilities/selector";

this.elementOne = $1("[data-js~=example-elementOne]", this.el);
this.elements = [...$("[data-js~=example-element]", this.control)];
this.fifthElement = this.elements[4];

this.elements.map(el => {
    el.addEventListener("mouseover", this.mouseOver)
})
```
* There are other utilities and helpers available that cover common JS uses for example scroll to an element, calculating the offset from another element, detect when an element is in view when scrolling.

* ES6 classes are used in vanilla JS components. If you are familiar with Vue, you will notice similarities. Global variables are defined in the constructor and referenced across functions with "this". 

* There is an "example.js" provided as a template.

* There is a Component manager and load manager that is used to initialise components. The code below must be added in order for the JS functionality to work on the site.

```
import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

export default LoadManager.queue(() => {
  new ComponentManager(ExampleClassName, "[data-js~=exampleSelector]")
}, QUEUE.DOM)
```

* There are empty folders for HTML templates, an example has been provided that can be used as a reference.

* There is a settings folder which can be used to store commonly used settings such as breakpoints or store JSON files such as Google Maps styling.

### Vue

* Vue components can be found in src/components and can be used in both storybook and .NET websites

* In order to export components for the .NET project, components are added to src/assets/scripts/app.js

* Component manager is used to import individual components from src/assets/scripts/components/vue to app.js. These files import the Vue component and use Vue.extend 

* Every Vue component must have a `data-vue` attribute

* dataset props are used to import data into Vue component


### Webpack

* Webpack aliases have been added in order to make it easier to import other files no matter the location. Please refer to webpack.common.js for these aliases and feel free to any more required. Typically the alias have Capitalisation to help diferrentiate them from other imports in the scripts e.g. "Tools/component-manager" rather than "../../tools/component-manager".

* Storybook webpack aliases are managed in .storybook/webpack.config.js and concerns files in src/components and src/stories. Site webpack aliases are managed in .build/webpack.common.js and concern files in src/assets.

* There is a Webpack task called icons.js which generates an icon sprite of all assets in the src/assets/icons folder. The output will be "_icons.svg" an underscore has been added to make it easier to find among other icon files.

* You can use the config/default.js to store commonly used variables and have one source of truth to update across all areas.

```
const config = require('config');
const buildPath = config.get('buildPath');
```