import { useState } from 'react';

function atualiza(){
    window.location.href = '';
}

function Home() {
    return (
        <div>
            <title>Gym Training ®</title>
            <table border="1" width="100%">
                <div>
                    <p align="center">
                        <font size="7" face="tahoma">Gym Training</font>
                    </p>  
                    <table border="1" width="100%"></table>          
                    <table border="0" width="100%">
                        <tr bgcolor="RoyalBlue">
                            <th width="160" colspan="6"><font size="4" face="verdana" color="white">TREINO 'A'</font></th>
                        </tr>
                        <tr bgcolor="RoyalBlue">
                            <td width="160" align="center"><font size="4" face="verdana" color="white">Exercício</font></td>
                            <td width="40"  align="center"><font size="4" face="verdana" color="white">Série</font></td>
                            <td width="40"  align="center"><font size="4" face="verdana" color="white">Rep.</font></td>
                            <td width="50"  align="center"><font size="4" face="verdana" color="white">Carga</font></td>
                            <td width="50"  align="center"><font size="4" face="verdana" color="white">Execuções</font></td>
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Puxada Peitoral</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Remada Curv. Barra</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>      
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Puxada Fechada</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Rosca Direta Barra</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Tríceps Testa Cross</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Rosca Martelo Halt.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                    </table>
                    <table border="1" width="100%"></table>
                    <br></br>
                    <table border="1" width="100%"></table>
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
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>      
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Supino Incl. Halt.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Flexão de Braços</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">Falha</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Tríceps Testa Cross</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Tríceps Coice Halt.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                    </table>
                    <table border="1" width="100%"></table>
                    <br></br>
                    <table border="1" width="100%"></table>
                    <table border="0" width="100%">
                        <tr bgcolor="RoyalBlue">
                            <th width="160" colspan="6"><font size="4" face="verdana" color="white">TREINO 'C'</font></th>
                        </tr>
                        <tr bgcolor="RoyalBlue">
                            <td width="160" align="center"><font size="4" face="verdana" color="white">Exercício</font></td>
                            <td width="40"  align="center"><font size="4" face="verdana" color="white">Série</font></td>
                            <td width="40"  align="center"><font size="4" face="verdana" color="white">Rep.</font></td>
                            <td width="50"  align="center"><font size="4" face="verdana" color="white">Carga</font></td>
                            <td width="50"  align="center"><font size="4" face="verdana" color="white">Execuções</font></td>
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Elev. Lateral Máq.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma">Bi-Set</font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Elev. Lateral Halt.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">Falha</font></td>
                            <td align="center"><font size="4" face="tahoma">Bi-Set</font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>      
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Elev. Lateral Alt.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma">IS.</font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Crucifixo Inverso</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Agac. Livre Barra</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Leg. 80°</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma"></font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr>
                            <td><font size="4" face="tahoma">Cad. Flex. Unilat.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma">IS.</font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                        <tr bgcolor="LightBlue">
                            <td><font size="4" face="tahoma">Panturrilha Máq.</font></td>
                            <td align="center"><font size="4" face="tahoma">4X</font></td>
                            <td align="center"><font size="4" face="tahoma">10</font></td>
                            <td align="center"><font size="4" face="tahoma">PC 2</font></td>
                            <td align="center"><font size="4" face="tahoma"><Contador /></font></td>
                        </tr>
                    </table>
                    <table border="1" width="100%"></table>
                    <p align="center">
                        <button onClick={atualiza}><font size="4" face="tahoma">&nbsp;Reload&nbsp;</font></button>
                    </p>
                </div>                
            </table>
            <div>
                <table border="0" width="100%">
                    <tr>
                        <td align="left" ><font size="1" face="tahoma"><a href="mailto:markuz.rocha@gmail.com">Marcos Rocha</a></font></td>
                        <td align="right"><font size="1" face="tahoma">v1.3</font></td>
                    </tr>
                </table>
            </div>
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

export default Home