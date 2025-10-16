import React, { useState } from "react";
import IphoneReview from "./IphoneReview";

const Header = ({ send }) => {
    const [phone, setPhone] = useState("/public/assets/0.png");

    function change(src) {
        setPhone(() => src);
    }
    return (
        <div className='flex items-center justify-between min-h-[calc(100vh-60px)]'>
            <div className='flex flex-col gap-7 max-w-[40%]'>
                <h1 className='text-white text-3xl font-bold'>
                    IPHONE 13 PRO MAX
                </h1>
                <p className='text-white'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta, illum. Eligendi pariatur earum recusandae veritatis
                    iusto maxime quas, totam beatae.
                </p>
                <button className='text-black bg-white hover:bg-black hover:text-white outline-2 outline-white outline-solid px-2.5 py-1 max-w-[120px] rounded-full text-[20px] font-bold cursor-pointer'>
                    BUY
                </button>
            </div>
            <div>
                <img src={phone} alt='Iphone review' className='max-w-[80%]' />
            </div>
            <IphoneReview change={change} recive={send} />
        </div>
    );
};

export default Header;
