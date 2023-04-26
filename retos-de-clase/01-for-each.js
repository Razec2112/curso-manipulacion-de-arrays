const tareas = [
    {name: "tarea1",
    done: false},
    {name: "tarea2",
    done: false},
    {name: "tarea3",
    done: false},
    {name: "tarea4",
    done: false},
    {name: "tarea5",
    done: false},
]

const container = document.querySelector("#container")

tareas.forEach(item => {
    container.innerHTML += `<li>
        <input type="checkbox" name="${item.name}" id="${item.name}">
        <label for="${item.name}"> ${item.name}</label>
    </li>` 
})