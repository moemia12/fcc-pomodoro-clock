const buttonStyle = {
    padding: '1rem',
    margin: '1rem',
    fontSize: '2rem'
};

const buttonPlatform = {
    borderStyle: 'solid',
    borderRadius: '30%',
    borderColor: '#424242',
    padding: '3rem',
    width: '20rem',
    position: 'relative',
    left: '4.5rem',
    backgroundColor: '#000000',
    backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)',
    boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.75)'
}

const Blinds = () => (
    <div className='timer-container'>
        <h1>Blinds</h1>
        <div style={buttonPlatform}>
            <button>
                < i className='fas fa-minus' style={buttonStyle}>-</i>
            </button>
            <span style={buttonStyle}>5</span>
            <button>
                <i className='fas fa-plus' style={buttonStyle}>+</i>
            </button>
        </div>
    </div>
)

export default Blinds;