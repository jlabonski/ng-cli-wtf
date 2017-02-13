# Issue

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.


I have a type assertion in `app.component.ts` that references `model/dog.ts`. `dog.ts`
is (mostly) useless gibberish. Some poetry and C is included. It compiles and
serves just fine.


## Oddities:

* dog.ts requires the member age, but not the member hasShots. Error: `src/app/app.component.ts (22,21): Property 'age' does not exist on type 'Dog'.)`
