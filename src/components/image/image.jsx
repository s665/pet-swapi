import React, {useEffect, useState} from 'react';

import img from '../../assets/image/image-not-found.png'

const Image = ({src, alt, altImage}) => {

    const [image, setImage] = useState(src)

    const handleErrorLoadImage = () => {
        setImage(altImage ? altImage : img)
    }
    
    useEffect(() => {
        setImage(src)
    }, [src])

    return (
        <img src={image}
             alt={alt}
             onError={handleErrorLoadImage}/>
    );
}

export default Image;