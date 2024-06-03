
import profile from '../../assets/images/profile.png'
const Header = () => {
    

    return (
        <div className='flex justify-between items-center p-5 m-5  border-b-2'>
            <h1><span className="text-5xl text-orange-400 font-bold">Knowledge</span> <span className="text-5xl text-teal-300 font-bold">Cafe</span></h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;