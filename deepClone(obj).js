function deepClone(obj) {
    var clonedObj = (Array.isArray(obj)) ? [] : {};

    for (var key in obj) {
        clonedObj[key] = (typeof obj[key] == 'object' && obj[key]) ? deepClone(obj[key]) : obj[key];
    }

    return clonedObj;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);