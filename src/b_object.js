//Complex data type that allows you to store and organize data using key-value pairs
const person={
    fname:'Ram', //fname is the key and 'Ram' is the value
    walk(){
        console.log('Hi Hi');
    },
    talk() {}
};

person.walk();
person.fname='Hari';//keys are used to access the associated values.
//we use bracket when we don't know ahead of time what propery of method we are going to access
const targetMember='fname'; 
person[targetMember.value]='John';
console.log(person.fname);