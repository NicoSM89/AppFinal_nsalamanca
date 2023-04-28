import React from 'react';

const styles = {
	containerAbout: {
		padding: 20,
		textAlign: 'center',
	},
};

const About = () => {
	return (
		<div style={styles.containerAbout}>
			<h1>About</h1>
			<p>
                We are a small company that sells products to start photography, we are a small team, but attentive to your needs.
			</p>
		</div>
	);
};

export default About;
