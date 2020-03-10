import React from 'react';

import Card from './Card';

const Feed = props => {
	const results = props.data;
	let quimges = results.map(quimg => <Card {...quimg} key={quimg._id}/>);

	return (
		<ul className="feed-list">
			{quimges}
		</ul>
	);
};

export default Feed;