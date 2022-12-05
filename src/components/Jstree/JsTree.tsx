import React from 'react';
import $ from 'jquery'
import 'jstree'
import data from './root.json'

class JsTree extends React.Component {

    componentDidMount() {
        console.log(data)
        $('#jsTree').jstree({
            'core': {
                'data': data.data,
                'datatype': 'json'
            }
        })

    }

    render() {
        return (
            <div id="jsTree"></div>
            )
    }

}

export default JsTree;