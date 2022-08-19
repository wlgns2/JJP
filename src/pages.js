import { Link } from "react-router-dom";

export const Home = () => (
  <div className="home">
    <h3>음식 레시피</h3>

    <form>
      <p>
        <input type="text" id="input1" placeholder="아이디"></input>
      </p>
      <p>
        <input type="text" id="input1" placeholder="비밀번호"></input>
      </p>
      <button id="bt1">로그인</button>
    </form>

    <nav>
      <Link to="/Rid">아이디 찾기</Link>
      <Link to="/Rpass">비밀번호 찾기</Link>
      <Link to="/MamBer">회원가입</Link>
    </nav>
  </div>
);
