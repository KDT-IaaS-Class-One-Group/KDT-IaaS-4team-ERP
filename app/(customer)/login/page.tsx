"use client";

import React, { useState, ChangeEvent, useEffect } from "react";

interface FormData {
  username: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [welcomeMessage, setWelcomeMessage] =
    useState<string>("로그인이 필요합니다.");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (): Promise<void> => {
    try {
      console.log("Sending data to the server:", formData);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // 로그인 성공 시 토큰 저장
        localStorage.setItem("token", data.token);
        console.log(data.message, "토큰이 localstorage에 저장");
        // 사용자 정보 가져오기
        const userResponse = await fetch(`/api/user/${formData.username}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const userData = await userResponse.json();

        if (userResponse.ok) {
          console.log("User data:", userData);
          // 여기서 userData를 활용하여 상태를 업데이트하거나 다른 동작을 수행할 수 있습니다.
          // 상태 변경
          setWelcomeMessage(`${userData.username}님 환영합니다.`);
        } else {
          console.error("Error fetching user data:", userData.message);
        }
      } else {
        console.log(data.message);
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // useEffect(() => {
  //   const fetchUserInfo = async (): Promise<void> => {
  //     try {
  //       // 서버에서 사용자 정보 가져오기
  //       const userResponse = await fetch(`/api/user/${formData.username}`, {
  //         method: 'GET',
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         },
  //       });

  //       const userData = await userResponse.json();

  //       // 환영 메시지 업데이트
  //       setWelcomeMessage(`${userData.email}님! 환영합니다.`);
  //     } catch (error) {
  //       console.error('Error fetching user info:', error);
  //     }
  //   };

  //   // 토큰이 있을 때만 사용자 정보를 가져오도록 설정
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     fetchUserInfo();
  //   }
  // }, [formData.username]);

  return (
    <div>
      <h1>{welcomeMessage}</h1>
      <h2>로그인</h2>
      <label>아이디:</label>
      <input type="text" name="username" onChange={handleInputChange} />
      <br />
      <label>비밀번호:</label>
      <input type="password" name="password" onChange={handleInputChange} />
      <br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginComponent;
