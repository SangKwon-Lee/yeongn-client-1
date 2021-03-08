import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import AppraisalCategory from "../components/AppraisalCategory";
import ArrowUp from "../components/ArrowUp";
import AppraisalAllList from "../components/AppraisalAllList";
import ScrollToTop from "../components/ScrollToTop";
function AppraisalList() {
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

	const [categoryTitle, setCategoryTitle] = useState<string>("전체 감정가");

	return (
		<div>
			<ScrollToTop />
			<AppraisalCategory setCategoryTitle={setCategoryTitle} />
			<AppraisalAllList
				categoryTitle={categoryTitle}
				initialState={initialState}
			/>
			<ArrowUp />
		</div>
	);
}

export default withRouter(AppraisalList);
