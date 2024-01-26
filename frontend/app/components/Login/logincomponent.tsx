"use client";
import React, { useState } from "react";
import Link from "next/link";
import LoginButton from "./loginbutton";
import LoginText from "./logintext";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import LoginPassword from "./loginPassword";

const LoginHome = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState({
    userId: "",
    userPassword: "",
  });

  const [modalContent, setModalContent] = useState({
    isOpen: false,
    title: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginUser({
      ...loginUser,
      [field]: value,
    });
  };

  const handleSignup = () => {
    // 추가적인 회원가입 로직이 필요하면 구현
  };

  const handleLogin = async () => {
    try {
      // 로그인 시도 시 입력값 유효성 검사
      if (!loginUser.userId.trim()) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: "아이디를 입력해주세요.",
        });
        return;
      }

      if (!loginUser.userPassword.trim()) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: "비밀번호를 입력해주세요.",
        });
        return;
      }

      // 서버에 로그인 요청
      const response = await fetch(`http://localhost:3560/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: loginUser.userId,
          userPassword: loginUser.userPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
        throw new Error("정보가 올바르지 않습니다.");
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        location.href='/'
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '로그인 성공',
        });
      } else {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '로그인 실패',
        });
      }
    } catch (error) {
      console.error(error);
      setModalContent({
        isOpen: true,
        title: '알림',
        message: '회원 정보가 존재하지 않습니다.',
      });
    }
  };

  const closeModal = () => {
    setModalContent({
      isOpen: false,
      title: '',
      message: '',
    });
  };

  return (
    <div className='flex justify-center items-center flex-col h-2/6 w-2/6'>
      <div className='h-2/5 flex flex-col justify-around items-center w-full'>
        {/* 로그인 입력 필드 */}
        <LoginText
          title="ID"
          inputchange={(value: string) => handleInputChange("userId", value)}
        />
        <LoginPassword
          title="PASSWORD"
          inputchange={(value: string) =>
            handleInputChange("userPassword", value)
          }
        />
      </div>
      <div className='h-1/5 flex items-center justify-end w-full'>
        {/* 회원가입 버튼 */}
        <Link href='/signup'>
          <LoginButton value='sign up' onClick={handleSignup} />
        </Link>
        {/* 로그인 버튼 */}
        <LoginButton value='login' onClick={handleLogin} />
      </div>
      <div className='flex justify-center items-center flex-col h-2/6 w-2/6'>
            <Modal
                isOpen={modalContent.isOpen}
                onClose={closeModal}
                title={modalContent.title}
                message={modalContent.message}
            />
        </div>
    </div>
  );
};

export default LoginHome;
