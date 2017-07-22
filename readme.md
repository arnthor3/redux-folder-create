# redux-folder-create
A little tool that creates a redux folder with a actions, constants reducer and the initial state file.

## Structure - Group by features not by type
For those who group by types this tool will not help you, but if you are grouping by features this will speed up your development by giving you a nice boilerplate to start with.

## Install
```sh
npm redux-folder-create -g
```
## Using
The command line looks for two arguments -f for folder, -a for actions. The -f option is required but the actions argument is optional.

You could create a simple setup folder setup by using just the -f option. This will create all the files but most of them will be without any code.

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

## Licence
Arnthor Agustsson 2017, MIT