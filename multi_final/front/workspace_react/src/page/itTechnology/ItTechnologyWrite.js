import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ItTechnologyWrite = () => {
    return (
        <div>
            <Form className='writingForm'>
                <Form.Group id='writingSub' controlId="exampleForm.ControlTextarea1">
                    <Form.Select className='writingSelect'  aria-label="Default select example">
                        <option>선택</option>
                        <option value="Reace" >React</option>
                        <option value="Spring">Spring</option>
                        <option value="Vue">Vue</option>
                    </Form.Select>
                </Form.Group>
                <Form.Control as='textarea'  className='writingText' type="text" placeholder="내용을 입력해주세요" />
            </Form>
            <button type="submit">
                등록
            </button>
        </div>
    );
};

export default ItTechnologyWrite;