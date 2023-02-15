import React from "react";
import './Toolbar.css'

class Toolbar extends React.Component {
    render() {
        let parent = 200;
        let height = 150;

        const styles = {
            toolbar: {
                border: '1px solid red',
                marginBottom: parent - height,
            },
            dark: {
                background: 'purple',
                color: 'white',
            }
        }

        return (
            <div className="toolbar" style={{ ...styles.toolbar, ...styles.dark }} >
                {this.props.children}
            </ div>
        );
    }
}

export default Toolbar;