import React from 'react';
import Modal from 'react-modal';

import {AiOutlineClose} from 'react-icons/ai'

Modal.setAppElement('#root');

const Modals = ({isOpen,setIsModalOpen}) => {
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={()=>setIsModalOpen(false)}
    style={
        {
            overlay:{
                background:'#1D1D351A'
            },
            content:{
                width:"fit-content"
            }
        }
    }
    >
        <div className="title flex ">
            <AiOutlineClose onClick={()=>setIsModalOpen(false)} className='cursor-pointer'/>
        </div>
        <div className="tabs flex border-b border-gray-300">
            <div className="signUp text-btnColor border-b border-btnColor">
                انشاء الحساب
            </div>
            <div className="login">
                تسجيل الدخول
            </div>
        </div>
    </Modal>
  );
};

export default Modals;
