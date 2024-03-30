import profilPic from './assets/toto.jpg'

function Card() {
    return (
        <div className="card">
            <img className='profilePic' src={profilPic} alt="imgPhoto"></img>
            <h2 className='card-title'>Toghrul Aliyev</h2>
            <p className='card-text'>Trying to Learn React Basis </p>

        </div>
    )
}








export default Card