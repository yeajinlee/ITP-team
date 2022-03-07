import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar';
import './myPageInformationModify.scss';


const myPageInformationModify = () => {
    return (
        <div id='myPageMain'>
            <Sidebar />
            <div id='modifyForm'>
                <Form>
                    <Form.Group id='modifynicknameForm' controlId="formBasicEmail">
                        <Form.Label className='modifyLabel'>닉네임</Form.Label>
                        <Form.Control className='nicknameInput' type="input" placeholder="닉네임" />
                        <Form.Text className='modifyText'>
                            한글, 영문, 숫자 포함 15자 이하
                        </Form.Text>
                    </Form.Group>
                    <div id='modifyPassword'>
                    <Form.Group  controlId="formBasicPassword">
                        <Form.Label className='modifyLabel'>비밀번호</Form.Label>
                        <Form.Control className='passwordInput' type="password" placeholder="기존 비밀번호" />
                    </Form.Group>
                    <Form.Group className='modifyNewPasswordForm' controlId="formBasicPassword">
                        <Form.Control className='passwordInput' type="password" placeholder="새 비밀번호" />
                        <Form.Text className='modifyText'>
                            영문 대소문자, 숫자, 특수문자 포함 8자리 이상
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='modifyCheckPasswordForm' controlId="formBasicPassword">
                        <Form.Control className='passwordInput' type="password" placeholder="새 비밀번호" />
                    </Form.Group>
                    </div>
                </Form>
                <div id='buttonGroup'>
                    <Link to="/">
                        <Button type="submit" className='withdraw'>
                            회원 탈퇴
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button type="submit" className='completion'>
                            수정 완료
                        </Button>
                    </Link>
                 </div>
            </div>
        </div>
    );
};

export default myPageInformationModify;