// psuedo interfact
export class Subject {
    
    constructor(){
        this.observers = new Set();
    }

    registerObserver() {
        throw new Error("Subject.registerObservers() must be defined")
    }

    removeObserver() {
        throw new Error("Subject.removeObservers() must be defined")
    }

    notifyObservers() {
        throw new Error("Subject.update() must be defined")
    }

}