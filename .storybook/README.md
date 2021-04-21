## Storybook Commands

#### Notes:
- package.json must be present in directory before initalising Storybook
- It is still required to install JavaScript frameworks separately

### Run Command
```
npm run storybook - Runs storybook
npm run build-storybook - Exports storybook as a static app
```

## Storybook npm tasks
> The **-p** command refer to the port number where the Storybook will be run.  
> The **-c** command refer to the config directory.  
> The **-o** command refer to directory where to store built files.  
> The **-s** command refer to directory to load static / public files

### Static Site Generator
```
npm run build-storybook
```


## Storybook Architecture

The Storybook framework consists of two folders:


### “.storybook”
Handles the configuration of the component library (config.js)

Storybook supports a lot of addons and you can write your own addons. They are imported in this folder (addons.js)


#### Example:
``` 
import '@storybook/addon-actions/register';
```

### “stories”
This folder consists of your components which will be displayed within the sidebar.