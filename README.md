# VMGCodingAssignment
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Description

A simple web page that converts temperature from censious to fahrenheit and from fahrenheit to celsius. It also uses both FusionChart Thermometer Guage and ChartJS Line Chart to display all temperature records entered by user(s)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Build Code Structure
```bash
| -- src
  |
  | -- app 
  |
    | -- starWarCelebrity
    | 
      | -- temperature.component.css
      |
      | -- temperature.component.html
      |
      | -- temperature.component.ts
    |
    | -- service
    |
      | -- apiService.ts
      |
      | -- temperatureService.ts
    |  
    | -- test
    |
      |-- testFiles
      |
          |-- apiServiceTest.spec.ts
          |
          | -- mockAPIService.ts.ts
          |
          | -- temperatureServiceTest.spec.ts
          |
          | -- temperatureComponent.spec.ts
        |
        
      |
    |
  |
  ```

## Code details
```bash
  - apiService (service folder): has a the post and get method
  
  
  - TemperatureService (service folder) 
  
      -- methods are:
      
          -- postTemperatureValue(): 
            -- post converted temperature (*F - *C and *C - *F) by calling post method in APISerice
            -- accepts convertion type and temperature to be converted as parameters
            -- returns Observable
          
   
    - ApiService  (service folder)
   
        -- post(): 
        -- get();
        
        

  - component (temperature.component): View and Controll of the angular application
    
    - temperature.component.ts file: controller of the angular web applications. fecthes data from database through temperature       
      service class, process the data and sent needed data to the view for display
    
    - temperature.component.html: the view
    
    - temperature.component.css: css file
    
    - methods:
    
        -- getTemperatureList()
        
        -- populateLiearGrapghWithDataSource()
        
        -- celsiusInput(event)
        
        --   fahrenheitInput(event)
  - Test Files
    
    
    - apiServiceTest.spec.ts: test file for api.service.ts in service folder
    
    - temperatureServiceTest.spec.ts: test file for person.service.ts in service folder
    
    - mockAPIService.ts: mock file for api.service. use for mocking APIService in PersonService
    
    - temperatureComponent.spec.ts: test file for temperatureComponent.ts 
    
    - temperatureComponent.specService: mock file for temperature.service. use for mocking TemperatureService when testing 
      temperatureComponent
    
    Well written test files using Jasmine and Karma
    
     
      
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
