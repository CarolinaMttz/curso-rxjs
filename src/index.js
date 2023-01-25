
import { 
    Observable, 
    Subject, 
    from, of, asyncScheduler,
    interval, timer, fromEvent
 } from 'rxjs';
 import { 
    map, reduce, filter,
    distinct, distinctUntilChanged, distinctUntilKeyChanged,
    throttleTime, sampleTime, auditTime, debounceTime,
    mergeWith, mergeAll, mergeMap,
    takeUntil 
 } from 'rxjs/operators';
 
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
/* 
const numbers$ = from([1,2,3,4,5,6,7,8,9]).pipe(
    // map( number => number*2 ),
    // map( number => number/2 )
    //reduce( (acc, val) => acc + val, 10 )
    filter( number => number > 4)
 );
 numbers$.subscribe(console.log)
 */

 /* CLASE OPERADORES DE DISTINCIÓN */

/*
const repeatedNumbers$ = of(1, 2, 1, 3, 4, 4, 2).pipe(
    distinct()
);

const repeatedNumbersChanged$ = of(1, 2, 1, 3, 4, 4, 2).pipe(
    distinctUntilChanged()
);

const repeatedNumbersKeyChanged$ = of(
    { k: 1 },
    { k: 2 },
    { k: 2 },
    { k: 1 },
    { k: 3 },
    { k: 4 },
    { k: 4 },
    { k: 2 },
    { k: 1 }
  ).pipe(
    distinctUntilKeyChanged("k")
  );

console.log('distinct');
repeatedNumbers$.subscribe(console.log);

console.log('distinctUntilChanged');
repeatedNumbersChanged$.subscribe(console.log);

console.log('distinctUntilKeyChanged');
repeatedNumbersKeyChanged$.subscribe(console.log);
*/

/* CLASE OPERADORES DE TIMEPO */
/*
const onClick$ = fromEvent(document, 'click').pipe(
   // debounceTime(1000)
   //auditTime(1000)
   //throttleTime(1000)
   sampleTime(4000)
);
onClick$.subscribe(console.log);
*/

/* CLASE OPERADORES MERGEALL MERGEMAP */
/*
// const onClicks$ = fromEvent(document, 'click').pipe( map(event => event.type ) );
// const onMouseMoves$ = fromEvent(document, 'mousemove').pipe( map(event => event.type ) );

// onClicks$.subscribe(console.log);
// onMouseMoves$.subscribe(console.log);

// onMouseMoves$.pipe(
//     mergeWith(onClicks$)
// ).subscribe( (value) => {
//     console.log('obs: ',value)
// });

// const onClicks$ = fromEvent(document, 'click');
// const ordenSuperior$ = onClicks$.pipe( map( () => interval(1000) ) );
// const primerOrden$ = ordenSuperior$.pipe( mergeAll() );

// primerOrden$.subscribe(console.log);


const letters$ = from(["A", "B", "C", "D"]); 
const result$ = letters$.pipe(
    mergeMap(letter => interval(1000). pipe(
        map(
            second => letter + second
        )
    ) )
);

result$.subscribe(console.log);
*/


/* CLASE OPERADORES TAKEUNTIL */

const onMouseMove$ = fromEvent(document, 'mousemove');
const onMouseDown$ = fromEvent(document, 'mousedown');
const sourceComplete$ = onMouseMove$.pipe(
    takeUntil(onMouseDown$)
);
sourceComplete$.subscribe(console.log);

