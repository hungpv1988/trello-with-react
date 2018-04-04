import React from 'react';

export default class AddItem extends React.Component {
    render(){
        return(
            <div align="center">
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" width="90px" /> </td>
                    </tr>

                    <tr>
                        <td colSpan="2"><button>Add</button></td>
                    </tr>
                 </table>
            </div>
        );
    }
}