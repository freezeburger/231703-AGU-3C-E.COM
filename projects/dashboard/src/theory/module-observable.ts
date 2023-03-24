import {fromEvent, from, of, Subject, BehaviorSubject, ReplaySubject} from 'rxjs'

console.log('Observable Theory')


// https://refactoring.guru/fr/design-patterns/observer
// https://rxjs.dev/


const observerA = (data:any) => {
    console.log('A', data)
    return data;
}

const observerB = (data:any) => {
    console.log('B', data)
    return data;
}


/*
Création - A partir de factory 
*/

//const obs$ = fromEvent(window, 'click')

/* const obs$ = from([1,2,3]);

obs$.subscribe(observerA)
obs$.subscribe(observerB)
 */


/*
Création - par instanciation

Observable

Subject
BehaviorSubject
ReplaySubject
AsyncSubject
*/

/* const obs$ = new ReplaySubject();

obs$.next('VALUE 0')
obs$.subscribe(observerA)
obs$.next('VALUE 1')
obs$.subscribe(observerB)
obs$.next('VALUE 2') */