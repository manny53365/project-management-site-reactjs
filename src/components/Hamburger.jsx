import './Hamburger.css';

export default function Hamburger({ onClick, isOpen }) {
  return (
    <div className='hamburger' onClick={onClick}>
        <div className="burger burger1" style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}></div>
        <div className="burger burger2" 
        style={{
            transform: isOpen ? 'translateX(100%)' : 'translateX(0)',
            opacity: isOpen ? 0 : 1
        }}
        ></div>
        <div className="burger burger3" style={{
            transform: isOpen ? 'rotate(-45deg)': 'rotate(0)',
            marginTop: isOpen ? '-20px' : '0'
        }}
        ></div>
    </div>
  )
};
