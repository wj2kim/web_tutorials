import React from 'react'
import ReactDOM from 'react-dom';

const vdom = { // virtual DOM 만들어 보기
    type: 'ul',
    props: {},
    children: [
        { type: 'li', props: { classname: "item"}, children: "React"},
        { type: 'li', props: { classname: "item"}, children: "Redux"},
        { type: 'li', props: { classname: "item"}, children: "TypeScript"},
        { type: 'li', props: { classname: "item"}, children: "mobx"},
    ],
}



function createElement(type, props= {}, ...children){
    return { type, props, children };
}








function StudyList(props) {
    // React.createElement('ul', {}, [React.createElement])
    return (
        <ul>
            <li className="item">React</li>
            <li className="item">Redux</li>
            <li className="item">TypeScript</li>
            <li className="item">mobx</li>
        </ul>
    )
}

function App() {
    return (
        <div>
            <h1>Hello?</h1>
            <StudyList item="abc" id="hoho" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));