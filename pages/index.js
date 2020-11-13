import { useState } from 'react';

function atualiza(){
    window.location.href = '';
}

function Home() {
    return (
        <div>
            <h1>Gym Training v1.0</h1>
            <table border="1">
                <tr bgcolor="#66CDAA">
                    <th width="150">TREINO 'B'</th>
                    <th width="70">SÉRIES</th>                    
                </tr>
                <tr>
                    <td>Supino Reto Barra</td>
                    <td><Contador /></td>                    
                </tr>
                <tr>
                    <td>Crucifixo</td>
                    <td><Contador1 /></td>                    
                </tr>
                <tr>
                    <td>Supino Incl. Halteres</td>
                    <td><Contador2 /></td>
                </tr>
                <tr>
                    <td>Flexão de Braços</td>
                    <td><Contador3 /></td>
                </tr>
                <tr>
                    <td>Tríceps Testa Cross</td>
                    <td><Contador4 /></td>
                </tr>
                <tr>
                    <td>Tríceps Coice Halter</td>
                    <td><Contador5 /></td>
                </tr>
            </table>
            <p>
                <button onClick={atualiza}>Reload</button>
            </p>
        </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <pr>&nbsp;{contador}&nbsp;</pr>
            <button onClick={adicionarContador} >+1</button>
        </div>
    )
}

function Contador1(){
    const [contador,setContador1] = useState(1);

    function adicionarContador1(){
        setContador1(contador + 1);
    }

    return (
        <div>
            <pr>&nbsp;{contador}&nbsp;</pr>
            <button onClick={adicionarContador1} >+1</button>
        </div>
    )
}

function Contador2(){
    const [contador,setContador2] = useState(1);

    function adicionarContador2(){
        setContador2(contador + 1);
    }

    return (
        <div>
            <pr>&nbsp;{contador}&nbsp;</pr>
            <button onClick={adicionarContador2} >+1</button>
        </div>
    )
}

function Contador3(){
    const [contador,setContador3] = useState(1);

    function adicionarContador3(){
        setContador3(contador + 1);
    }

    return (
        <div>
            <pr>&nbsp;{contador}&nbsp;</pr>
            <button onClick={adicionarContador3} >+1</button>
        </div>
    )
}

function Contador4(){
    const [contador,setContador4] = useState(1);

    function adicionarContador4(){
        setContador4(contador + 1);
    }

    return (
        <div>
            <pr>&nbsp;{contador}&nbsp;</pr>
            <button onClick={adicionarContador4} >+1</button>
        </div>
    )
}

function Contador5(){
    const [contador,setContador5] = useState(1);

    function adicionarContador5(){
        setContador5(contador + 1);
    }

    return (
        <div>
            <pr>&nbsp;{contador}&nbsp;</pr>
            <button onClick={adicionarContador5} >+1</button>
        </div>
    )
}

export default Home