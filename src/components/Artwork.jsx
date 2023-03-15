const Artwork = ({banaan}) => {
    return (
        <svg viewBox="0 0 400 200">
          <circle fill="white" cx="50" cy="50" r={banaan}></circle>
        </svg>
      );
}

export default Artwork