const users = [
  { email: 'kim@test.com', password: '123', name: 'Kim' },
  { email: 'lee@test.com', password: '456', name: 'Lee' },
  { email: 'park@test.com', password: '789', name: 'Park' }
]

export function signIn({ email, password }) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user === undefined) throw new Error();
  return user;
}

if (메일, 비밀번호 참 값) {
  <header>
  <p className='subject'>
      <Link to="/">
      <img src='./assets/ItpLogo_2.png' width='10%' alt='Logo'/>&nbsp;ITP
      </Link>
      <div className='Logout'>
          <Link to="/" class="link-dark" style={{ textDecoration: 'none'}}>
              로그아웃
          </Link>
      </div>
      <div className='myPage'>
          <Link to="/myPageCommunityBoard" class="link-dark" style={{ textDecoration: 'none'}}>
              마이페이지 &nbsp;&nbsp;
          </Link>
      </div>
  </p>
</header>
}
else {
  <header>
      <p className='subject'>
          <Link to="/">
          <img src='./assets/ItpLogo_2.png' width='10%' alt='Logo'/>&nbsp;ITP
          </Link>
          <div className='Register'>
              <Link to="/Register" class="link-dark" style={{ textDecoration: 'none'}}>
                  회원가입
              </Link>
          </div>
          <div className='Login'>
              <Link to="/login" class="link-dark" style={{ textDecoration: 'none'}}>
                  로그인 &nbsp;&nbsp;
              </Link>
          </div>
      </p>
  </header>
}