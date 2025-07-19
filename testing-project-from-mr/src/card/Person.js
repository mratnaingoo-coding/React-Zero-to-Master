import './Person.style.css';

const Person = ({ title, body }) => {
    
    return (
        
        <div className="person-container">
            <img className='img-container' src="https://4kwallpapers.com/images/walls/thumbs_3t/23052.jpg" alt={title} />
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>
        </div>
    );
}

export default Person;