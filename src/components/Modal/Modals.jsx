import React, { useState } from 'react';
import Modal from 'react-modal';

import { AiOutlineClose } from 'react-icons/ai'
import { SignUp, Login } from './components';

Modal.setAppElement('#root');

const authComponent = {
    'signup': SignUp,
    'login': Login
};

const Modals = ({ isOpen, setIsModalOpen }) => {

    const active = "text-btnColor border-b-4 border-btnColor";

    const [activeTab, setActiveTab] = useState('signup');

    const toggleTab = (key) => {
        setActiveTab(key);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px'
        },
        overlay: {
            background: '#1D1D351A'
        }
    };

    const Component = authComponent[activeTab];
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
        >
            <div className="title flex items-center gap-2 ">
                <AiOutlineClose onClick={() => setIsModalOpen(false)} className='cursor-pointer text-iconsColor text-xl' />
                <p className='font-extrabold'>من فضلك قم بتسجيل الدخول للاستمرار </p>
            </div>
            <div className="tabs flex border-b border-gray-300 justify-around my-5">
                <div
                    className={`signUp cursor-pointer basis-2/4 text-center py-2 ${activeTab === 'signup' && active}`}
                    onClick={() => toggleTab('signup')}>
                    انشاء الحساب
                </div>

                <div
                    className={`login cursor-pointer basis-2/4 text-center py-2 ${activeTab === 'login' && active}`}
                    onClick={() => toggleTab('login')}>
                    تسجيل الدخول
                </div>
            </div>
            <div className="content">
                <Component modal={setIsModalOpen} />
            </div>
        </Modal>
    );
};

export default Modals;
