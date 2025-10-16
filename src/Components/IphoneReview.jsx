const IphoneReview = ({ change, recive }) => {
    function pick(src) {
        change(src);
    }
    function takeTwo(src, color) {
        pick(src);
        recive(color);
    }

    return (
        <div className='flex items-center gap-2.5 absolute bottom-[20px] left-[50%] translate-x-[-50%]'>
            <img
                src='/public/assets/0.png'
                onClick={() => takeTwo("/public/assets/0.png", "#000")}
                alt='Iphone review'
                className='max-w-[70px] cursor-pointer hover:translate-y-[-40px] transition-transform'
            />
            <img
                src='/public/assets/1.png'
                onClick={() => takeTwo("/public/assets/1.png", "#247ec8")}
                alt='Iphone review'
                className='max-w-[70px] cursor-pointer hover:translate-y-[-40px] transition-transform'
            />
            <img
                src='/public/assets/2.png'
                onClick={() => takeTwo("/public/assets/2.png", "#1e1e1e")}
                alt='Iphone review'
                className='max-w-[70px] cursor-pointer hover:translate-y-[-40px] transition-transform'
            />
            <img
                src='/public/assets/3.png'
                onClick={() => takeTwo("/public/assets/3.png", "#c79b53")}
                alt='Iphone review'
                className='max-w-[70px] cursor-pointer hover:translate-y-[-40px] transition-transform'
            />
            <img
                src='/public/assets/4.png'
                onClick={() => takeTwo("/public/assets/4.png", "#c82525")}
                alt='Iphone review'
                className='max-w-[70px] cursor-pointer hover:translate-y-[-40px] transition-transform'
            />
        </div>
    );
};

export default IphoneReview;
