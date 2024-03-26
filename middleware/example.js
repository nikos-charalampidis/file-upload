const counter = (num) => {
    for(let i=0; i<num; i++){
        console.log('This is a counter');
        console.log(`OII ${i}`);
        console.log('The counter finished its usage');
    }
}

module.exports = counter