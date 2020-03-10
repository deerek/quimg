import React from 'react';
import Img from './Img';

import Masonry from 'react-masonry-component';

// STYLES
import './unsplash.css';

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 

const ImgList = props => {

	const style = {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
	};

	const results = props.data;
	let imgs = results.map(img => <Img handleClick={props.handleClick} urls={img.urls} key={img.id}/>);

	return (

		<ul id="unsplash-list" className="img-list">
			{imgs}
		</ul> 
		
		// {/* <Masonry
        //         className={'unsplash-gallery'} // default ''
        //         elementType={'ul'} // default 'div'
        //         options={masonryOptions} // default {}
        //         disableImagesLoaded={false} // default false
        //         updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        //         imagesLoadedOptions={imagesLoadedOptions} // default {}
		// 		style={style}
        //     >
        //         {imgs}
        //     </Masonry> */}
		
		
	);
	
};

export default ImgList;