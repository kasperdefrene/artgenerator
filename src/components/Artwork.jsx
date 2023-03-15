const Artwork = ({radius, colorOne, colorTwo, rotation, offsetOne, offsetTwo}) => {

    
    return (
        <svg viewBox="0 0 500 500">
            <defs>
                <circle id="myCircle" cx="250" cy="250" r={radius}></circle>

                <linearGradient id="myGradient" gradientTransform={rotation}>
                    <stop offset={offsetOne} stop-color={colorOne} />
                    <stop offset={offsetTwo} stop-color={colorTwo} />
                </linearGradient>
            </defs>

            <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />

            {/* <rect x="0" y="250" width="500" height="250" fill="blue" stroke="none" /> */}
        </svg>
      );
}

export default Artwork


