import React, {useState} from 'react';

import img from '../../assets/image/image-not-found.png'

const Image = ({src}) => {

    const [image, setImage] = useState(src)

    const handleErrorLoadImage = () => {
        setImage(img)
    }

    return (
        <img src={image}
             alt=""
             onError={handleErrorLoadImage}/>
    );
}

export default Image;