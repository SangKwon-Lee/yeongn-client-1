import React, { useState, useEffect } from "react";
import NaverBtn from "../assets/img/button/naver.png";
import axios from "axios";
import "../styles/login.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
interface User {
	userId: string;
	token: string;
	authenticated: boolean;
}
interface ILoginUser extends RouteComponentProps {
	loginHandler: (user: User) => void;
}
function NaverLogin({ loginHandler, history, location }: ILoginUser) {
	const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=6uSvluf8fHGhNvp6U3j2&redirect_uri=http://localhost:3000/login`;

	const naverLoginHandler = () => {
		window.location.assign(NAVER_LOGIN_URL);
		console.log("navernavernavernavernavernaver");
	};

	const getAuth = (authorizationCode: any) => {
		const url = "https://yeongn.com/api/user/naver";
		axios
			.post(url, { authorizationCode }, { withCredentials: true })
			.then((res) => {
				console.log(res.data);
				loginHandler({
					userId: res.data.userId,
					token: res.data.token,
					authenticated: true,
				});
				history.push("/");
			})
			.catch(() => {
				console.log("ssibal");
			});
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get("code");
		const naverCheck = window.location.href.indexOf("google");
		if (authorizationCode && naverCheck === -1) {
			console.log("Naver", authorizationCode);
			// getAuth(authorizationCode);
		}
	});

	return (
		<div className="loginContainer" onClick={naverLoginHandler}>
			<img src={NaverBtn} alt="naverbutton" className="loginBtn" />
		</div>
	);
}

export default withRouter(NaverLogin);
