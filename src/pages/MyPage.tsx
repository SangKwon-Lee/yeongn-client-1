import React from "react";
import { Link, withRouter } from "react-router-dom";

function MyPage() {
	return (
		<div>
			{/* 밑에 h1 삭제하고 컴포넌트 입력하기 */}
			<h1>마이 페이지 입니다.</h1>
			{/* todo */}
		</div>
	);
}

export default withRouter(MyPage);
