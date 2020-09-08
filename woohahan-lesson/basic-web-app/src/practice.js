const list = [
    { title: 'React에 대해 알아봅시다.'},
    { title: 'Redux에 대해 알아봅시다.'},
    { title: 'TypeScript에 대해 알아봅시다.'},
]

const rootElement = document.getElementById("root");

// function app() { // 블록 밖의 값을 변화시키니 순수 함수가 아님 
//     rootElement.innerHTML=`
//     <ul>
//         ${ list.map(item => `<li>${item.title}</li>`).join('')}
//     </ul>
//     `
// }

function app(items) { // items 로 인자를 받아 처리 * 즉 이 함수는 순수 함수가 되었다 순수함수 -> 밖의 값을 변화시키지 않음 
    rootElement.innerHTML=`
    <ul>
        ${ items.map(item => `<li>${item.title}</li>`).join('')}
    </ul>
    `
}

app();