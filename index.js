function spy(){
    return 'test';
}

function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function name() {
    }
}

function returnsAnAnonymousFunction() {
    return () =>
    console.log("test");
}