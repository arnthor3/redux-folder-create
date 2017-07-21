# redux-folder-create
A little tool that creates a redux folder that has a boilerplate for reducer, actions, constants and the initialState as well.

## Install
```sh
npm redux-folder-create -g
```
## Using
The command line looks for two arguments -f for folder, -a for actions.

You could do a simple boiler for the folder by using just the -f option

```sh
redux-folder-create -f someFeature
```

Also you could specify the arguments by using the -a option, this will create a function structure in the action file and also create the constants

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

## Licence
Arnthor Agustsson 2017, MIT