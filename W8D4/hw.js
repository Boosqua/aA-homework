function setTimeout(cb){
    window.setTimeout(5000);
    cb;
}

setTimeout( () => alert('HAMMERTIME'));