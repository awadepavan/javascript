// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB Coneected`);
})();


(function aurcode() {
    console.log(`DB two Coneected`);
})();

((name) => {
    console.log(`DB Connected Two ${name}`);
})('Somesh')

// In IIFE we Need to put ";" after IIfe two know the limit


//chai()

// () () => Frist Paragraph for  code and second for execution

// by globle scope code will be poloted and not able to execute immediately
//so we use iife