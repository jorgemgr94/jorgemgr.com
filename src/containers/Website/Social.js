import React from "react";

function Social () {
	return (
		<section
			className='resume-section p-3 p-lg-5 d-flex align-items-center'
			id='social'
		>
			<div className='w-100'>
				<h2 className='mb-5'>Social</h2>
				<p className='lead mb-2'>
					<span role='img' aria-label='intro'>
						I like to share thoughts and conclusions on twitter 🧠.
					</span>
				</p>
				<p className='lead mb-2'>
					<span role='img' aria-label='intro'>
						Sharing best moments on Instagram 🏖 🐶 ☕️ ❤️
					</span>
				</p>
				<p className='lead mb-2'>
					<span role='img' aria-label='intro'>
						Supporting others and share knowledge through stack overflow, medium
						and dev.to 📔
					</span>
				</p>
				<p className='lead mb-5'>
					<span role='img' aria-label='intro'>
						Challenge myself in codesignal 👨‍💻
					</span>
				</p>
				<p className='lead mb-4'>
					In these social networks you could find more about me..
				</p>
				<div className='social-icons'>
					<a
						href='https://twitter.com/jorgemgr94'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='https://www.instagram.com/jorgemgr94'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-instagram'></i>
					</a>
					<a
						href='https://stackoverflow.com/users/5377188/jorge-garcia'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-stack-overflow'></i>
					</a>
					<a
						href='https://medium.com/@jorgegarcia_43471'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-medium-m'></i>
					</a>
					<a
						href='https://dev.to/jorgemgr94'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-dev'></i>
					</a>
					<a
						href='https://app.codesignal.com/profile/jorgemgr94'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fas fa-code'></i>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Social;
