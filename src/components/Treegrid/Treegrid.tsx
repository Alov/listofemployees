import React from 'react'
import './TreeGrid.TypeScript.API.d.ts';
import './TreeGrid.TypeScript.React.d.ts';

function Treegrid() {
    const styles = { height: 500 }
    return (
        <div style={styles}>
            {/*<bdo debug='check' layout_url="StaticDef.js" data_url="StaticData.js"></bdo>*/}
            <bdo debug='check' layout_url="EmployeeDef.js" data_url="EmployeeData.js"></bdo>
        </div>

        )
}
export default Treegrid