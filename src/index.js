
import { 
    Observable, 
    Subject, 
    from, of, asyncScheduler,
    interval, timer
 } from 'rxjs';
 import { map, reduce, filter } from 'rxjs/operators';
 
/* CLASE CREACIÓN DE UN OBSERVABLE */
/*
const observableAlfa$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    //a=b;
    subscriber.next(20);
    subscriber.complete();
    subscriber.next('Curso');
    subscriber.next({ test: true });
});

const observador = {
    next: ( value ) => {
        console.log('El valor fue recibido : ', value);
    },
    complete: () => {
        console.log('Observable completado.');
    },
    error: ( error ) => {
        console.log('Error recibido: ');
        console.error(error);
    }
};

observableAlfa$.subscribe(observador);
*/



/* CLASE OBSERVABLES FROMEVENT */
//const onMouseMove$ = fromEvent(document, "mousemove");
/*
const onKeyDown$ = fromEvent(document, "keydown");

const observadorMouse = {
    next: (event) => {
        //console.log('clientX', event.clientX, 'clientY', event.clientY);
        console.log(event.key);  
    },
    complete: () => {},
    error: () => {}
};

onKeyDown$.subscribe(observadorMouse);
*/

/* CLASE OBSERVABLES SUBJECT */
/*
const number$ = new Observable(subscriber => {
    //subscriber.next( 10 );
    subscriber.next( Math.round(Math.random()*100) );
})

const numberRandom$ = new Subject();

const observador1 = {
    next: (number) =>{
        console.log(number);
    }
}

const observador2 = {
    next: (number) =>{
        console.log(number);
    }
}

numberRandom$.subscribe(observador1);
numberRandom$.subscribe(observador2);
//numberRandom$.next( Math.round(Math.random()*100) );
number$.subscribe(numberRandom$);
numberRandom$.next( 45 );
*/

/* CLASE OBSERVABLES FROM Y OF */

/*const fruits$ = from(['MANZANA', 'MANDARINA', 'PERA'], asyncScheduler);
//const fruits$ = of('MANZANA', 'MANDARINA', 'PERA');
fruits$.subscribe(console.log)
*/

/* CLASE OBSERVABLES INTERNAL Y TIME */
/*
const sequenceNumber$ = interval(2000);
const delayedTimer$   = timer(5000); 

//sequenceNumber$.subscribe( console.log );
delayedTimer$.subscribe( console.log );
*/

/* CLASE OPERADORES MAP, REDUCE Y FILTER */
 const numbers$ = from([1,2,3,4,5,6,7,8,9]).pipe(
    // map( number => number*2 ),
    // map( number => number/2 )
    //reduce( (acc, val) => acc + val, 10 )
    filter( number => number > 4)
 );
 numbers$.subscribe(console.log)