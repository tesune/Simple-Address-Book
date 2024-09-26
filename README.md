# Simple-Address-Book
Assessment created with Angular + DevExtreme DataGrid. 
<br>Begin with [DevExtreme Angular DataGrid ](https://js.devexpress.com/Angular/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/) and [Angular Try It!](https://angular.io/start)
# Project Flow
#### Setting up project
1. Create new project with Angular CLI `ng new simple-address-book --standalone false`
2. Install DevExtreme dependencies `npm install devextreme@23.2 devextreme-angular@23.2 --save --save-exact`, import and check the required dependencies exist in **angular.json**
#### Data binding and Customize column
1. Refer documentation. Create `DataGrid` in **app.component.ts**, Import `module` in `app.module.ts` 
2. Create **ContactService** with `ng generate service Contact` , add `export interface Employee{}` followed by properties and defined their datatype.


