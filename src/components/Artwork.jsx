const Artwork = ({radius, stroke, strokeWidth, colorOne, colorTwo}) => {
    return (
        <svg viewBox="0 0 500 500">
            <defs>
            <circle id="myCircle" cx="250" cy="250" r={radius}></circle>

                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                    <stop offset="20%" stop-color={colorOne} />
                    <stop offset="90%" stop-color={colorTwo} />
                </linearGradient>
            </defs>

            <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
        </svg>
      );
}

export default Artwork


