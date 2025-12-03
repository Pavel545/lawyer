
До начала работы с проектом нужно иницилизовать проект
# npm i

Во время работы с проектом в терминале запускаем проект командой приведённой ниже, так локальный хост будет отображать проект в реальном без сборки

# npm start

Когда работа завершенна и нужно выгрузить её на сервер испольем команду ниже, она соберёт проет, минимизирует его и подготовит для заливки на сервер, полученную папку build, а точнее её содержимое можно тестировать в OpenServer или же запускать на прямую по index 
## npm run build

<!-- One of your dependencies, babel-preset-react-app, is importing the      
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintained anymore. It is thus unlikely that this bug will
never be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away. -->