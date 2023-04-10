import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Jaylan", "Esquivel", "Pereira", "Santos"]);

    const [user, setUsers] = useState([
        {id: 1, name: "Joao", age: 20},
        {id: 2, name: "Joana", age: 22},
        {id: 3, name: "Joaraci", age: 24},
        {id: 4, name: "Joanadabe", age: 25}
    ]);


    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div style={{paddingBottom: '20px'}}>
            <b>Renderizando lista</b>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            
            <ul>
                {user.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Deletar Usuario aleatorio</button>
        </div>
    )
}

export default ListRender