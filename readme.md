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
The command line looks for two arguments -f for folder, -a for actions.
If you are just using the just the -a option you need to be in the redux directory.

You could create a simple folder setup by using just the -f option. This will create all the files but most of them will be without any code.

```sh
redux-folder-create -f someFeature
```
The real timesaver comes from using the actions argument. It will create the constants and the actions

```sh
redux-folder-create -f someFolder -a onClick onSubmit onError onDone
```

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
Arnthor Agustsson 2017, MIT