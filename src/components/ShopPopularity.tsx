// import axios from "axios";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/ShopPopularity.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const initialState = [
	{
		id: 1,
		name: "노른자 분리기",
		price: 9900,
		category: "장난감",
	},
	{
		id: 2,
		name: "우리 엄마 김치",
		price: 12000,
		category: "음식",
	},
	{
		id: 3,
		name: "건담",
		price: 290000,
		category: "피규어",
	},
	{
		id: 4,
		name: "뜯어온 보도블럭",
		price: 4900000,
		category: "줘도 안 가지는",
	},
	{
		id: 5,
		name: "칼라 립스틱",
		price: 29000000,
		category: "화장품",
	},
	{
		id: 6,
		name: "잉어 슈즈",
		price: 39000000,
		category: "의류",
	},
	{
		id: 7,
		name: "웰컴 매트",
		price: 690000000,
		category: "도저히 분류하기 힘든",
	},
	{
		id: 8,
		name: "멋진 의자",
		price: 9900,
		category: "가구",
	},
	{
		id: 9,
		name: "카스",
		price: 991200,
		category: "맥주",
	},
	{
		id: 10,
		name: "갤럭시 노트 10+",
		price: 12200,
		category: "전자기기",
	},
	{
		id: 11,
		name: "내가 만든 꽃",
		price: 200,
		category: "꽃",
	},
	{
		id: 12,
		name: "책1",
		price: 991200,
		category: "책",
	},
	{
		id: 13,
		name: "코공",
		price: 9922312300,
		category: "도저히 분류하기 힘든",
	},
];

function ShopPopularity() {
	const [shopList, setShopList] = useState(initialState);

	const rightButtonclick = (): void => {
		const next = document.querySelector(
			".shop__popularity__right",
		) as HTMLElement;
		const before = document.querySelector(".shop__popularity") as HTMLElement;
		const buttonLeft = document.querySelector(
			".shop__nextButton__leftdot",
		) as HTMLElement;
		const buttonRight = document.querySelector(
			".shop__nextButton__rightdot",
		) as HTMLElement;

		if (
			next == null ||
			before == null ||
			buttonLeft == null ||
			buttonRight == null
		) {
			return;
		}
		next.className = "shop__popularity__right__move";
		before.className = "shop__popularity__left__move";
		buttonLeft.className = "shop__nextButton__rightdot";
		buttonRight.className = "shop__nextButton__leftdot";
	};

	const leftButtonclick = (): void => {
		const next = document.querySelector(
			".shop__popularity__right__move",
		) as HTMLElement;
		const before = document.querySelector(
			".shop__popularity__left__move",
		) as HTMLElement;
		const buttonLeft = document.querySelector(
			".shop__nextButton__leftdot",
		) as HTMLElement;
		const buttonRight = document.querySelector(
			".shop__nextButton__rightdot",
		) as HTMLElement;
		if (
			next == null ||
			before == null ||
			buttonLeft == null ||
			buttonRight == null
		) {
			return;
		}
		next.className = "shop__popularity__right";
		before.className = "shop__popularity";
		buttonLeft.className = "shop__nextButton__rightdot";
		buttonRight.className = "shop__nextButton__leftdot";
	};

	return (
		<section className="shop">
			<div className="shop__title__wrap">
				<div className="shop__title">인기 높은 리스트</div>
				<Link to={`/list/shop`}>
					<div className="shop__title__button">리스트 더보기</div>
				</Link>
			</div>
			<div className="shop__popularity">
				{shopList.slice(0, 6).map((shopList) => (
					<div className="shop__popularity__card" key={shopList.id}>
						<Link to={`/shop/${shopList.id}`} key={shopList.id}>
							<div className="shop__popularity__img"></div>
							<div className="shop__popularity__card__wrap">
								<div className="shop__popularity__title">{shopList.name}</div>
								<span className="shop__popularity__price">
									<span className="shop__popularity__price">감정가</span>
									{shopList.price
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									원{" "}
								</span>
							</div>
						</Link>
					</div>
				))}
			</div>
			<div className="shop__popularity__right">
				{shopList.slice(6, 12).map((shopList) => (
					<div className="shop__popularity__card" key={shopList.id}>
						<Link to={`/shop/${shopList.id}`} key={shopList.id}>
							<div className="shop__popularity__img"></div>
							<div className="shop__popularity__card__wrap">
								<div className="shop__popularity__title">{shopList.name}</div>
								<span className="shop__popularity__price">
									<span className="shop__popularity__price">감정가 </span>
									{shopList.price
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									원{" "}
								</span>
							</div>
						</Link>
					</div>
				))}
			</div>
			<div className="shop__nextButton__container">
				<button className="shop__nextButton" onClick={leftButtonclick}>
					<KeyboardArrowLeftIcon fontSize="inherit" />
				</button>
				<button className="shop__nextButton__leftdot" onClick={leftButtonclick}>
					<FiberManualRecordIcon fontSize="inherit" />
				</button>
				<button
					className="shop__nextButton__rightdot"
					onClick={rightButtonclick}
				>
					<FiberManualRecordIcon fontSize="inherit" />
				</button>
				<button className="shop__nextButton" onClick={rightButtonclick}>
					<KeyboardArrowRightIcon fontSize="inherit" />
				</button>
			</div>
		</section>
	);
}

export default withRouter(ShopPopularity);
