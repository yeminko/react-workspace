import React from "react";

const AddForm = (props) => {
    let nameRef = React.createRef();
    let priceRef = React.createRef();

    let add = () => {
        let name = nameRef.current.value;
        let price = priceRef.current.value;
        props.add(name, price);
    };

    return (
        <div>
            <input type="text" ref={nameRef} /> <br />
            <input type="text" ref={priceRef} /> <br />
            <button onClick={add}>Add</button>
        </div>
    );
}

export default AddForm;