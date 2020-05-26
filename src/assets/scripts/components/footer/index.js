import React from 'react';
import { uuid } from 'uuidv4';

const footerInfo = [
	{ role: 'Edição', name: 'Suzana Singer' },
	{ role: 'Design', name: 'Pilker' },
	{ role: 'Desenvolvimento', name: 'Angelo Dias' },
];

const Footer = () => (
	<footer className="center footer">
		<div>
			{footerInfo.map(({ role, name }) => (
				<p key={uuid()}>
					<span className="footer__role">{role}</span>
					<span className="footer__name">{name}</span>
				</p>
			))}
		</div>
	</footer>
);

export default Footer;
