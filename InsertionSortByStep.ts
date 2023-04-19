export class InsertionSortByStep {
    static list: number[] = [9,3,5,8.2,-1,7.5,4.7,5.3];
    static insertionSort(list: number[]) {
        for (let i = 1; i < list.length; i++) {
            let temp = list[i];
            let j = i - 1;
            while (j >= 0 && list[j] > temp) {
                console.log(`Assign value at ${j+1}' of list = ${list[j]}`)
                list[j + 1] = list[j];
                j = j - 1;
            }
            console.log(`Assign value at ${j+1}' of list = ${temp}`)
            list[j + 1] = temp;
            console.log(`List after the ${i}' sort:`);
            for (let k = 0; k < list.length; k++) {
                console.log(list[k])
            }
            console.log("\t")
        }
    }
}