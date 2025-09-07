import { format } from '../../utils/format';
import './Slideshow.css';
import { useState } from 'react';

export default function Slideshow({ photos, firstPhotoIndex }) {
    const [currentIndex, setCurrentIndex] = useState(firstPhotoIndex);
    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    return <div className='slideshow'>
        {photos.map((photo, index) => (
            <div className={`slideshow-slide fade ${index === currentIndex ? 'active' : 'inactive'}`}
                key={index}>
                <div className="slideshow-numbertext">{index + 1}</div>
                <img src={photo.value} className='slideshow-img' />
                <div className="slideshow-caption">{format(photo.path)}</div>
            </div>
        ))}
        <a className="prev" name="prev" onClick={goToPrev}>
            <img src="/misc-icons/arrow-left.png" />
        </a>
        <a className="next" name="next" onClick={goToNext}>
            <img src="/misc-icons/arrow-right.png" />
        </a>
    </div>
}