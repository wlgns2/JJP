import Rid from "./rid";
import Rpass from "./rpass";
import MamBer from "./mamber";

export default function Login() {
  return (
    <header id="map">
      <form>
        <p>
          <input type="text" id="input1" placeholder="아이디"></input>
        </p>
        <p>
          <input type="text" id="input1" placeholder="비밀번호"></input>
        </p>
        <button id="bt1">로그인</button>
      </form>
    </header>
  );
}
