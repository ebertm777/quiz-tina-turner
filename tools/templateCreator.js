#!/usr/bin/env node

const commander = require('commander');
const fs = require('fs');
const chalk = require('chalk');
const reactClassComponent = require('./templates/reactClassComponent');
const reactFunctionalComponent = require('./templates/reactFunctionalComponent');
const cssTemplate = require('./templates/css');

function camelCaseToHyphen(string) {
  return string
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
}

commander
  .command('comp')
  .description('create components')
  .option(
    '-c, --componentName [name]',
    'Create Component Named [Layout]',
    'layout',
  )
  .option('-s, --style [style]', 'Create CSS [Yes]', 'yes')
  .option('-t, --type [type]', 'Type of react component')
  .option('-p, --path [path]', 'Path to create template')
  .action(function (componentName) {
    // build strings for directory and file outputs
    let dir;

    if (this.path) {
      dir = `./${this.path}/${this.componentName}/`;
    } else {
      dir = `./src/components/${this.componentName}/`;
    }

    if (componentName) {
      console.log('Creating React component');
      console.log('----------');
      console.log('⚛️  Component Name: %s ', chalk.blue(this.componentName));
      console.log(`📁 Folder: ${chalk.blue(dir)}`);

      let template =
        this.type && this.type === 'class'
          ? reactClassComponent
          : reactFunctionalComponent;

      // Create component file from template
      // Replace holder text with componentName
      let result = template.replace(/\[comp\]/g, this.componentName);

      const hasCssFile = this.style === 'yes';

      // Handle CSS flag (-s)
      // Import CSS, create CSS from Template and add className to Div of component file
      let cssResult = '';
      if (hasCssFile) {
        result = result.replace(
          /\[import-css-file\]/g,
          `import './${this.componentName}.scss';\n`,
        );

        result = result.replace(
          /\[create-css-class\]/g,
          ` className='${camelCaseToHyphen(this.componentName)}'`,
        );

        cssResult = cssTemplate.replace(
          /\[comp\]/g,
          camelCaseToHyphen(this.componentName),
        );
      } else {
        // remove CSS references from template
        result = result.replace(/\[import-css-file\]/g, '');
        result = result.replace(/\[create-css-class\]/g, '');
      }

      console.log('----------');

      // Check directory and create if doesn't exist
      if (!fs.existsSync(dir)) {
        console.log(`Directory does not exist: ${chalk.green(dir)}`);
        fs.mkdirSync(dir);
      } else {
        console.log(`Directory exists: ${chalk.green(dir)}`);
      }

      // create component file in proper directory
      const outputName = `${dir}${this.componentName}.js`;

      fs.writeFile(outputName, result, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log(`New file created: ${chalk.green(outputName)}`);
      });

      const cssFilename = `${dir}${this.componentName}.scss`;
      if (hasCssFile) {
        fs.writeFile(cssFilename, cssResult, 'utf8', function (err) {
          if (err) {
            return console.log(err);
          }

          console.log(`New CSS file created: ${chalk.green(cssFilename)}`);
        });
      }
    }
  });

commander.parse(process.argv);
