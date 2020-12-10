function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        let correctIndex = array2.indexOf(array1[i]*array1[i]);
        if (correctIndex === -1) {
            return false;
        }
        array2.splice(correctIndex, 1);
    }
    return true;
}

console.log(same([1,2,3], [4,1,9]));