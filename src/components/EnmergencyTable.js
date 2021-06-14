import React from 'react';

const EnmergencyTable = () => {
    return (
        <div style={{padding: `0px 10%` ,paddingTop: "105px"}}>
                <h3 style={{paddingTop: "18px" , textAlign: "center"}}>En caso de enmergencia</h3>
                        {/*<table className="table" style={{color: "#9ca9b3"}}>
                            <thead>
                                <tr><th>País</th><th>Teléfono</th><th>País</th><th>Teléfono</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Alemania</th><td>800-185-9976</td><th>Reino Unido</th><td>808-234-1766</td></tr>
                                <tr><th>Argentina</th><td>800-666-2984</td><th>Costa Rica</th><td>800-013-1372</td></tr>
                                <tr><th>Brasil</th><td>800-891-4530</td><th>Colombia</th><td>571-5938795</td></tr>
                                <tr><th>España</th><td>911-815-905</td><th>República Dominica</th><td>1888-751-8475</td></tr>
                                <tr><th>Francia</th><td>800-905-030</td><th>Estados Unidos</th><td>1-877-889-0149</td></tr>
                                <tr><th>Italia</th><td>800-839-070</td><th>Estados Unidos/Cobro revertido</th><td>+1-954-472-1895</td></tr>
                                <tr><th>Chile</th><td>562-29382411</td><th>E-mail</th><td>assistance@wt-assist.com</td></tr>
                                <tr><th>México</th><td>1866-261-1935</td><th>Skype</th><td>asistencia.internacional</td></tr>
                                <tr><th>Whatsapp</th><td>+ 57 316 763 6033</td></tr>
                            </tbody>
                        </table>*/}
                        <table className="table" style={{color: "#4b505e"}}>
                        <thead className="table-c-blue">
                            <tr className="h28">
                                <th className="text-center color-white">País</th>
                                <th className="text-center color-white">Número</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="t-fo">Estados Unidos, Canadá y El Caribe.</td>
                                <td className="t-fo">1-800 394-53-50 (Toll Free)
                                    <br />+1-786-209-1663</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Europa y Africa</td>
                                <td className="t-fo">+34 91-060-2671</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Asia y Oceanía</td>
                                <td className="t-fo">+66 91-026-1266</td>
                            </tr>
                            <tr>
                                <td className="t-fo">América Latina</td>
                                <td className="t-fo">+54 115-199-3567</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Alemania</td>
                                <td className="t-fo">0800-185-9976</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Argentina</td>
                                <td className="t-fo">0800-666-2984</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Brasil </td>
                                <td className="t-fo">0800-891-4530</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Chile</td>
                                <td className="t-fo">562-293-82411</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Costa Rica</td>
                                <td className="t-fo">0800-013-1372</td>
                            </tr>
                            <tr>
                                <td className="t-fo">España</td>
                                <td className="t-fo">911-815-905</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Estados Unidos </td>
                                <td className="t-fo">1-877-889-0149</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Estados Unidos (Cobro revertido)</td>
                                <td className="t-fo">+1 954-472-1895</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Francia</td>
                                <td className="t-fo">0800-905-030</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Italia</td>
                                <td className="t-fo">800-839-070</td>
                            </tr>
                            <tr>
                                <td className="t-fo">México</td>
                                <td className="t-fo">1-866-261-1935</td>
                            </tr>
                            <tr>
                                <td className="t-fo">Reino Unido</td>
                                <td className="t-fo">0800-234-1766</td>
                            </tr>
                            <tr>
                                <td className="t-fo">República Dominicana</td>
                                <td className="t-fo">1-888-751-8475</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

    );

}

export default EnmergencyTable;