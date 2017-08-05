# FeaturesModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Features

Often our apps have discrete sets of related functionality. Customers, orders, administration, and login/logout are all examples of areas of our apps that, when linked together, make our app. Basically, we break down our app into smaller pieces. Let's refer to these pieces as features.
It makes sense that some of these features have functionality that is not intended to be exposed outside of the feature. We also may want to add a feature to the app as a whole unit at a later time. Or maybe the feature is there and we want to lazy load it when the user decides it is time to visit the feature.
These are all reasons why we might want to divide our app into feature areas. Many technologies have this concept in different forms. Angular 2 addresses this with @NgModule.

## Shared Features

Our ButtonComponent and DateComponent are widgets that we will use in many places across our app. We want to make multiple instances of them and for these to be available everywhere. We could leave these in the root module, just like we did for the NavComponent. However, these are slightly different in that we intend to use these many times over, with multiple instances appearing the a component. We very likely will have many other widgets, so this list will grow. These shared components are a logical place to create a SharedModule as a feature module.

Notice the @SharedModule declares the components and also exports them. Exporting them allows others to use those components, which we intend to do in our app's templates.
We modify the root module to no longer declare these shared components and instead we import the SharedModule. This becomes very useful when our app grows to have 5, 10 or more shared components.

## Notable
https://johnpapa.net/introducing-angular-modules-feature-modules-2/ 

