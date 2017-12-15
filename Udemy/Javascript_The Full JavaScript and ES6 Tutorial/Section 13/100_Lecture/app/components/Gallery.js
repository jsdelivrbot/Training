import React, { Component } from 'react';

class Gallery extends Component {
    render(){
        let alternateImage = "https://cdn0.iconfinder.com/data/icons/thin-photography/57/thin-367_photo_image_wall_unavailable_missing-512.png";
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a className="book" key={index} href={infoLink} target="_blank">
                                <img className="bookImage" src={imageLinks !== undefined ? imageLinks.thumbnail : alternateImage} alt="book image"  />
                                <div className="bookText">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;