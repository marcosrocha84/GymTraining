import { useState } from 'react';

function atualiza(){
    window.location.href = '';
}

function Home() {
    return (
        <div>
            <title>Gym Training</title>
            <table border="1" width="100%">
                <div>
                    <p align="center">
                        <font size="7" face="tahoma">Gym Training</font>
                    </p>            
                    <table border="0" width="100%">
                        <tr bgcolor="RoyalBlue">
                            <th width="160" colspan="6"><font size="4" face="verdana" color="white">TREINO 'B'</font></th>
                        </tr>
                        <tr bgcolor="RoyalBlue">
                            <td width="160" align="center"><font size="4" face="verdana" color="white">Exercício</font></td>
                            <td width="40"  align="center"><font size="4" face="verdana" color="white">Série</font></td>
                            <td width="40"  align="center"><font size="4" face="verdana" color="white">Rep.</font></td>
                            <td width="50"  align="center"><font size="4" face="verdana" color="white">Carga</font></td>
                            <td width="50"  align="center"><font size="4" face="verdana" color="white">Execuções</font></td>
                            
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Supino Reto Barra</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma">Bi-Set</font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                            
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Crucifixo</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma">Bi-Set</font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador1 /></font></td>      
                            
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Supino Incl. Halteres</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador2 /></font></td>
                            
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Flexão de Braços</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">Falha</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador3 /></font></td>
                            
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Tríceps Testa Cross</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador4 /></font></td>
                            
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Tríceps Coice Halter</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador5 /></font></td>
                            
                        </tr>
                    </table>
                    <p align="center">
                        <button onClick={atualiza}><font size="4" face="tahoma">&nbsp;Reload&nbsp;</font></button>
                    </p>
                </div>
            </table>
            <table border="0" width="100%">
                <tr>
                    <td align="left"><font size="1" face="tahoma"><a href="mailto:markuz.rocha@gmail.com">Marcos Rocha</a></font></td>
                    <td align="right"><font size="1" face="tahoma">v1.2</font></td>
                </tr>
            </table>
        </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(0);

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
    const [contador,setContador1] = useState(0);

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
    const [contador,setContador2] = useState(0);

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
    const [contador,setContador3] = useState(0);

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
    const [contador,setContador4] = useState(0);

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
    const [contador,setContador5] = useState(0);

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