
import './contectSec.css';
import {buttonData} from '../../utils/data';

const ContentSec = ({ heading, description, buttons }) => {
  return (
    <>
    <div className="contectSec">
      {buttons && buttons[0] && (
        <button className={buttons[0].className} aria-label={buttons[0].label}>
          {buttons[0].label}
        </button>
      )}
    {heading && <h2>{heading}</h2>}
    {description && <div className="text">{description}</div>}
    {buttons && buttons.length > 1 && (
      <div className="btn-sec">
          {buttonData.slice(1).map((btn, idx) => (
              <button key={idx} type={btn.type} className={btn.className} aria-label={btn.label}>
                {btn.label} {btn.icon && btn.icon}
              </button>
            ))}
        </div>
    )}
  </div>
    </>
  )
}

export default ContentSec;