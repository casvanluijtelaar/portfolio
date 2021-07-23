import React, { useContext, useEffect } from "react";
import { ThemeContext } from 'providers/ThemeProvider';
import { Layout, Seo, Section, Button, LinkButton, Chip, Chips } from "components/common";
import { Overlay } from "components/landing";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"


const Home = () => {
	const { theme } = useContext(ThemeContext);

	gsap.registerPlugin(ScrollTrigger);


	useEffect(() => {
		if (typeof document === "undefined") return;

		const sections = gsap.utils.toArray('.scrollItem');

		gsap.set(sections, { opacity: 0 });

		sections.forEach((box, i) => {

			ScrollTrigger.create({
				trigger: box,
				animation: gsap.fromTo(box, { opacity: 0 }, { opacity: 1 }),
				start: 'center bottom',
				end: 'center 80%',
				scrub: true,
				toggleActions: 'restart none none reverse',
			});

			ScrollTrigger.create({
				trigger: box,
				animation: gsap.fromTo(box, { opacity: 1 }, { opacity: 0, immediateRender: false }),
				start: 'center center',
				end: 'center 20%',
				scrub: true,
				toggleActions: 'restart none none reverse',
			});

		});

		gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 1.5 });

	});


	return (

		<Layout>
			<Seo />
			<Section>
				<h1 id='intro'>Hi There!</h1>
				<h4>I'm Cas van Luijtelaar, a software developer and interaction designer currently located in Belgium</h4>
				<Button color='#A62639' theme={theme} as={AnchorLink} href="#contact">Get in Touch</Button>
			</Section>
			<Section>
				<h1>Leading</h1>
				<h5>Indoor LED based wayfinding</h5>
				<p>
					Leading is an Indoor wayfinding solution that uses strategically positioned LED elements that are used to bring personalized and yet privacy aware wayfinding
					to an indoor environment. This project uses colour and animation to present a unique route to each user.
					A mobile application is used that controls all interaction with these elements. This project was part of a Master thesis with open source code for the
					<a href='https://github.com/casvanluijtelaar/leading' target="_blank" rel="noreferrer"> mobile application</a> and the
					<a href='https://github.com/casvanluijtelaar/leading-microcontroller' target="_blank" rel="noreferrer"> LED controllers</a>.
				</p>
				<Chips>
					<Chip color='#568EFF'>Flutter</Chip>
					<Chip color='#568EFF'>C++</Chip>
					<Chip color='#568EFF'>BLE</Chip>
				</Chips>
			</Section>
			<Section>
				<h1>Rvised Communications</h1>
				<h5>A whitelabel business communications platform</h5>
				<p>
					A business communications intranet used by several mid sized businesses and includes features such as employee teams, post feeds, shared calendars,
					real-time chat and a lot more. This application is completely personalised to your company.
				</p>
				<Chips>
					<Chip color='#9776CF'>Flutter</Chip>
					<Chip color='#9776CF'>Firebase</Chip>
					<Chip color='#9776CF'>NodeJS</Chip>
				</Chips>
			</Section>
			<Section>
				<h1>Wilder</h1>
				<h5>Nationwide wildlife reporting</h5>
				<p>
					An application used for the spotting and reporting damage of wildlife. This application was developed for a goverment associated organisation.
					It automatically catogorizes any public report and sends it to one of 4000 localized members.
				</p>
				<Chips>
					<Chip color='#4CB050'>Flutter</Chip>
					<Chip color='#4CB050'>REST</Chip>
					<Chip color='#4CB050'>NodeJS</Chip>
				</Chips>
			</Section>
			<Section>
				<h1>Beatable</h1>
				<h5>Make the world your drumkit!</h5>
				<p>
					Turns every real world sound into a programmable drumkit button. Snap your fingers and the app will record a snare drum, the possibilities
					are endless!
				</p>
				<Chips>
					<Chip color='#4C84FF'>Android</Chip>
					<Chip color='#4C84FF'>Java</Chip>
				</Chips>
			</Section>
			<Section>
				<h1>Side projects</h1>
				<h5>I also do a bunch of other stuff</h5>
				<p>
					I love open source and sharing tools to make the development life easier. Playing around with new things is the best way to learn!
					You can find everything I do on my Github!
				</p>
				<LinkButton color='#031331' target="_blank" rel="noreferrer" href="https://github.com/casvanluijtelaar/">Github</LinkButton>
			</Section>
			<Section>
				<h1 id='contact'> Get in Touch!</h1>
				<h4>Would you like to get in contact, or just have a chat? Be sure to reach out!</h4>
				<Button color='#A62639' theme={theme} as={AnchorLink} href="#intro">Back to top</Button>
			</Section>
			<Overlay />
		</Layout>


	);
}



export default Home;
