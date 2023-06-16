import { useState } from 'react';

export default function NavBar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [list] = useState(['Home', 'About', 'Projects', 'Contact']);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  return (
    <nav className='nav-bar'>
      <h1 className='nav-logo'>Muhammad.dev</h1>
      <ul className='nav-links'>
        {list.map((item, index) => (
          <li key={index} onMouseOver={() => handleHover(index)}>
            <p>{item}</p>
            <div className='border-bottom' style={{ width: hoverIndex === index ? '100%' : '0' }}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}