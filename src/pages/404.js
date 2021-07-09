import React, {useEffect} from "react";
import { Layout, Seo, LinkButton } from "components/common";
import styled from 'styled-components';
import gsap from "gsap"



const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const NotFound = () => {

	useEffect(() => {
		if (typeof document === "undefined") return;
		gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 1 });

	});
	return (
		<Layout>
			<Seo title="404: Not found" location="/404" />
			<Wrapper>
				<h1>I haven't build this page yet &#128532;</h1>
				<LinkButton color="#A62639" href='/'>Pretend I didn't see this</LinkButton>
			</Wrapper>
		</Layout>
	);
}



export default NotFound;
