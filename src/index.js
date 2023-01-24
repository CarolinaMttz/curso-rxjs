/*
console.log('RxJS');
import { Observable } from 'rxjs';

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

import { fromEvent } from 'rxjs' ;

//const onMouseMove$ = fromEvent(document, "mousemove");
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