//[로그인 페이지 참고 코드]

try {
    const response = await fetch(`http://192.168.100.83:3560/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: loginUser.userId,
        userPassword: loginUser.userPassword,
      }),
    });
    if (!response.ok) {
      throw new Error('로그인 실패');
    }
    const data = await response.json();
    console.log(data);
    if (data.success) {
      router.push('/');
      localStorage.setItem('token', data.token)
      alert('로그인 성공');
    } else {
      alert('로그인 실패');
    }
  } catch (error) {
    console.error(error);
    alert('로그인 실패');
  }
};