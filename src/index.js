import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

// const name = "Turdugul"

// const age = "28 years old"
// const profession = "programmer"

// // const style = {
// //     color: "white",
// //     backgroundColor: "blue"
// // }

// const app = (
//     <h1  className="title" >
//         My name is {name}. I am {age}. I am a {profession}.
//     </h1>
// )

// const Text = () => {

//     return (
//         <p className="text">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eos nostrum quas corrupti quaerat harum, iure consequatur perspiciatis
//             magni laboriosam adipisci. Fugit repudiandae cum incidunt illo neque
//             amet velit voluptates et.
//         </p>
//     )
// }
const Header = () => {
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..." />
            <span className="addBtn">Add</span>
        </div>
    )
}
const Body = () => {
    return (
        <ul id="myUL">
            <li>Hit the gym</li>
            <li className="checked">Pay bills</li>
            <li>Meet George</li>
            <li>Buy eggs</li>
            <li>Read a book</li>
            <li>Organize office</li>
            <li>Organize home</li>
            <li>Made menu</li>
            
            
        </ul>
    )
}
const App = () => {
    return (
        <div>
            <Header />
            <Body />

        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)


