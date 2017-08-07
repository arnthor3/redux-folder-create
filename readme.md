# redux-folder-create
A little scaffolding tool that creates a redux folder with a actions, constants reducer and the initial state file.

## Structure - Group By Feature
Redux-Folder-Create helps you structure your code by features and not by types. The application also namespaces the files within the folder helping users who use <kbd>cmd</kbd> + <kbd>p</kbd> frequently to look for files.

## Constants
By default the constants are namespaced with the feature name you can use the -c to skip that.

## Install
This project is available as an npm package.
```sh
npm redux-folder-create -g
```

## Using
The command line looks for three arguments -f for folder, -a for actions and -c for the namespace option.

### -f option
Running the command just with the folder option just creates the files and import statements.

```sh
redux-folder-create -f someFeature
```

### -a option
The real timesaver comes from using the actions argument. It will create a basic structure in the action file, create the constants and also it creates the switch statement.

```sh
redux-folder-create -f someFolder -a onClick onSubmit onError onDone
```

### -c, namespace option
By default the constants are namespaced with the feature name if you use the -c option it will skip the namespacing.

## Folder Structure
If you create a folder called "FOO" then the folder structure will be:

FOO/
* FOO.actions.js
* FOO.reducer.js
* FOO.constants.js
* FOO.initialState.js

## Example Folder

The Example folder has an output from the command below.
```sh
redux-folder-create -f example -a onSubmit onClick onResolve
```
and then
```sh
redux-folder-create -a onDone onError clickBanner
```

## Licence
MIT 2017, Arnthor Agustsson.