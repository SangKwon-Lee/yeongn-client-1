import React, { useState } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import "../styles/MyPageLikes.css";

/**
 *
 * 가져올 것 userId 이걸로 axios요청으로 자신이 남긴 감정기록을
 * 조회함 //!mypage에서 가져와야함
 */

interface User {
	userId: string;
	token: string;
	authenticated: boolean;
}
interface IMypageUser extends RouteComponentProps {
	user: User;
}

function MyPageLikes({ user }: IMypageUser) {
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

	const [appraisalList, setList] = useState(initialState.reverse());

	return (
		<div className="mypage__likes">
			<div className="likes__title__container">
				<div className="likes__title">내가 좋아한 게시물</div>
				<Link to="/mypage/likes" className="likes__title__addLink">
					리스트 더보기
				</Link>
			</div>
			<div className="likes__img__container">
				{appraisalList.slice(0, 8).map((appraisal) => (
					<Link
						className="likes__img"
						to={`/appraisal/${appraisal.id}`}
						key={appraisal.id}
					>
						{appraisal.name}
					</Link>
				))}
			</div>
		</div>
	);
}

export default withRouter(MyPageLikes);
