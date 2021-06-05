import React from 'react';

const Imageselection = (props) => {
    switch (props.value) {
        case 1: return <img src="image/1.jpg" height="300px" width="300px"/>
        case 2: return <img src="image/2.jpg" height="300px" width="300px"/>
        case 3: return <img src="image/3.jpg" height="300px" width="300px"/>
        case 4: return <img src="image/4.jpg" height="300px" width="300px"/>
        case 5: return <img src="image/5.jpg" height="300px" width="300px"/>
        case 6: return <img src="image/6.jpg" height="300px" width="300px"/>
        default: return null
    }
}

export default Imageselection;