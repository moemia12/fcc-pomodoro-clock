const ClockContainer = (props) => (
    <div className='clock-container'>
        <h1>Session</h1>
        <span>25:00</span>
        <div className='flex'>
            <button onClick={props.handlePlayPause}>
                <i className='fas fa-play'/>
            </button>
            <span>{props.count}</span>
            <button onClick={props.handleReset}>
                <i className='fas fa-sync'/>
            </button>
        </div>
    </div>
)


export default ClockContainer
