import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import icon from '../../../assets/images/icons/fastap1.png';
import { Link } from 'react-router-dom';

export const GallerySection = () => {
    return (
        <>
            <div id='gallery-section' className='gallery-container'>
                <div className="bg-gym gallery-item bg-center bg-cover group ">
                    <div className="hidden group-hover:flex flex-col h-full justify-center items-center ">
                        <Link to='/7'>
                            <LazyLoadImage
                                src='https://w7.pngwing.com/pngs/369/574/png-transparent-computer-icons-fitness-centre-exercise-dumbbell-miscellaneous-angle-physical-fitness.png'
                                alt="Fitness Icon"
                                effect="blur"
                                className='h-40'
                            />
                        </Link>
                    </div>
                </div>
                <div className="bg-cases-gallery gallery-item bg-center bg-cover group ">
                    <div className="hidden group-hover:flex flex-col h-full justify-center items-center ">
                        <Link to='/7'>
                            <LazyLoadImage
                                src={icon}
                                alt="Fastap Icon"
                                effect="blur"
                                className='h-40'
                            />
                        </Link>
                    </div>
                </div>

                <div className="bg-jewelry gallery-item bg-center bg-cover group ">
                    <div className="hidden group-hover:flex flex-col h-full justify-center items-center ">
                        <Link to='/7'>
                            <LazyLoadImage
                                src='https://static.vecteezy.com/system/resources/previews/009/400/372/non_2x/diamond-clipart-design-illustration-free-png.png'
                                alt="Diamond Icon"
                                effect="blur"
                                className='h-40'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
