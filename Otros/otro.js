/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Yelp.

You are given an array of integers, where each element represents the maximum number of steps that can be jumped going forward from that element. Write a function to return the minimum number of jumps you must take in order to get from the start to the end of the array.

For example, given [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], you should return 2, as the optimal solution involves jumping from 6 to 5, and then from 5 to 9.
*/

let arreglo = [6, 2, 4, 0, 5, 1, 1, 4, 2, 9] ;


const funcion = (arreglo) => {
    console.log(arreglo[2])
    console.log( arreglo.length )
 
    for(let i=-1 ; i < arreglo.length; i++){
        let inicial = i + 1;
        arreglo[inicial]
    }
}

console.log(funcion(arreglo))