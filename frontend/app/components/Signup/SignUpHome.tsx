'use client'
import LoginText from '../Login/logintext';
import LoginButton from '../Login/loginbutton';
import { useRouter } from 'next/navigation';
import Modal from "@/app/components/Modal/Modal";
import { useState } from 'react';

const SignUpHome: React.FC = () => {

  const router = useRouter();

  const [Signup, setSignup] = useState({
    userId: '',
    userPassword: '',
    userPassword1: '',
    userEmail: '',
    userPhoneNum: '',
  });

  //Modal code
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    title: '',
    message: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setSignup({
      ...Signup,
      [field]: value,
    });
  };

  const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      // Check if any required field is empty
      if (!Signup.userId.trim()) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '아이디를 입력해주세요.',
        });
        
        return;
      }

      if (!Signup.userPassword.trim()) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '비밀번호를 입력해주세요.',
        });
        return;
      }

      if (Signup.userPassword !== Signup.userPassword1) {// 기존에 입력한 userPassword와 userPassword1이 같지 않을 경우 알림창 출력함
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '비밀번호가 일치하지 않습니다.',
        });
        return;
      }

      //이메일 형식에 '@'가 포함 되어있는지 검사
      const isValidEmailFormat = (email: string): boolean => {
        const hasAtSymbol = email.includes('@'); //includes : 배열에 특정 값('@')이 포함되어 있는지를 확인
        return hasAtSymbol;
      }

      if (!isValidEmailFormat(Signup.userEmail)) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '올바른 이메일 형식을 입력해주세요',
        });
        return;
      }


      const response = await fetch(`http://localhost:3560/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: Signup.userId,
          userPassword: Signup.userPassword,
          userPassword1: Signup.userPassword1,
          userEmail: Signup.userEmail,
          userPhoneNum: Signup.userPhoneNum
        }),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('회원가입 실패');
      }

      const data = await response.json();
      console.log(data);
      if (data.success) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '회원가입 성공',
        });
        router.push('/login');
      } else {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '회원가입 실패',
        });

      }
    } catch (error) {
      console.error(error);
      setModalContent({
        isOpen: true,
        title: '알림',
        message: '회원가입 실패',
      });
    }
  }

  const closeModal = () => {
    setModalContent({
      isOpen: false,
      title: '',
      message: '',
    });

  }

  return (
    <div className='flex justify-center items-center flex-col w-2/6 h-2/5'>
      <div className='h-5/6 flex flex-col justify-between w-full'>
        <LoginText
          title='ID'
          inputchange={(value: string) => handleInputChange('userId', value)}
        />
        <LoginText
          title='Password'
          inputchange={(value: string) => handleInputChange('userPassword', value)}
        />
        <LoginText
          title='Password1'
          inputchange={(value: string) => handleInputChange('userPassword1', value)}
        />
        <LoginText
          title='EMAIL'
          inputchange={(value: string) => handleInputChange('userEmail', value)}
        />
        <LoginText
          title='PHONE NUMBER'
          inputchange={(value: string) => handleInputChange('userPhoneNumber', value)}
        />
      </div>
      {/* 회원가입 완료 버튼 */}
      <div className='h-1/6 w-full flex justify-end'>
        <LoginButton value='Submit' onClick={handleButtonClick} />        
      </div>
      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
      />
    </div>
  );
};

export default SignUpHome;