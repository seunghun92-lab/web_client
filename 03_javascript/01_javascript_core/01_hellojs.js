console.log('Hello Node.js')

// 한 줄 주석
/*
    여러 줄 주석
    여러 줄 주석
*/


function add(a, b) {
    return a + b;
}

const result = add(10, 20)
console.log(result)

import fs from 'fs' // 파일 시스템 제어
import { fileURLToPath } from 'url';    // file URL -> 파일 경로

const filename = fileURLToPath(import.meta.url);    // 현재 실행중인 파일 경로 가져와 경로 구하기
console.log(import.meta.url);
console.log(filename);


fs.readFile(filename, 'utf-8', function(err, data) {
    if(err){
        console.error('파일 읽기 실패' , err)
        return;
    }
    console.log("파일 내용: \n" , data)
});