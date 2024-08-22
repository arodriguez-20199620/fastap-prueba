import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import icon from '../../../assets/images/icons/fastap1.png';
import { Link } from 'react-router-dom';

export const GallerySection = () => {
    return (
        <>
            <div id='section' className='gallery-container'>
                <div className="bg-gym gallery-item bg-center bg-cover group ">
                    <div className="hidden group-hover:flex flex-col h-full justify-center items-center ">
                        <Link to='/7'>
                            <LazyLoadImage
                                src='https://cdn-icons-png.flaticon.com/512/952/952816.png'
                                alt="Fitness Icon"
                                effect="blur"
                                className='h-40'
                            />
                        </Link>
                    </div>
                </div>
                <div className="bg-cases-gallery gallery-item bg-center bg-cover group ">
                    <div className="hidden group-hover:flex flex-col h-full justify-center items-center ">
                        <Link to='/fastap-cases'>
                            <LazyLoadImage
                                src={icon}
                                alt="Fastap Icon"
                                effect="blur"
                                className='h-40'
                            />
                        </Link>
                    </div>
                </div>

                <div className="bg-jewelry gallery-item bg-center bg-cover group">
                    <div className="hidden group-hover:flex flex-col h-full justify-center items-center ">
                        <Link to='https://www.joyeriasvilleda.com/'>
                            <LazyLoadImage
                                src='https://www.zarla.com/images/zarla-buen-quilate-1x1-2400x2400-20210603-ttv7yqgg8tmxj87cg7j9.png?crop=1:1,smart&width=250&dpr=2'
                                alt="Diamond Icon"
                                effect="blur"
                                className='h-56'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
