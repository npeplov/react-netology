import './Toolbar.css';

export default function Toolbar({filters, selected, onSelectFilter}) {
  const handleClick = (e) => {
    onSelectFilter(e.target.innerText);
  }

  return (
    <ul className="toolbar">
      {filters.map(categoryName => 
        <li onClick={handleClick}
          key = {categoryName} 
          className = {categoryName === selected ? 'selected' : ''}>
          {categoryName}
        </li>
      )}
    </ul>
  )
}