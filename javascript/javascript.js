//majority element

let arr=[4,5,2,5,5,6,6,6,6,6,5];
let lcount=0;
let lele=0;
console.log("1.Majority element.")
function majorityEle(arr){
    for(i=0;i<arr.length;i++){
        let count=0;
        for(j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count>lcount){
            lcount=count;
            lele=arr[i];
        }
    }
    return lele;
}
console.log(majorityEle(arr));

//first non repeating character
let str5="repeatingcharacter"
console.log("2.First non repeating character")
function firstNonRepeat(str){
    let nonrepeat='';
    for(i=0;i<str.length;i++){
        let count=0;
        for(j=0;j<str.length;j++){
            if(str[i]==str[j])
                count++;
        }
        if(count==1){
            nonrepeat=str[i];
            break;
        }
    }
    return nonrepeat;
}
console.log(firstNonRepeat(str5));

//checking array elements
let str1=[2,5,7,9,14,16,17,21,24,28,29,32,35];
let str2=[];
console.log("3.checking array elements.")
for(i=0;i<str1.length;i++){
    if(str1[i]%2==0){
        str2.push(str1[i]);
    }
}
console.log(str2);


//sum of elements in given array
let arr4=[2,4,5,6,7,8,9,10];
let sum=0;
console.log("4.sum of elements in given array.")
for(i=0;i<arr4.length;i++){
    sum+=arr4[i];
}
console.log(sum);

//create array elements containig 1 to N
function createArray(len) {
    let newArr = [];
    for (let i = 1; i <= len; i++) {
        newArr.push(i);
    }
    return newArr;
}

let len = 15;
console.log("5.create array elements contaning 1 to n.")
let arr5 = createArray(len);
console.log(arr5);

//missing values in an array from  1 to N
let arr6=[0,1,2,3,4,6,7,8,9,10,12,14,17];
console.log("6.missing values in an array form 1 to N")
let lastindex=arr6.length;
let lastele=arr6[lastindex-1];
let arr7=createArray(lastele);
let missing=[];
for(i=0;i<arr5.length;i++){
    let stat=0;
    for(j=0;j<arr6.length;j++){
        if(arr7[i]==arr6[j]){
            stat=1;
            continue;
        }
    }
    if(stat==0){
        missing.push(arr7[i]);
    }
}
console.log(missing);