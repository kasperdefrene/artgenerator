const ColorPicker = ({onValueChange}) => {
    return(
        <div>
            <input 
            type="color"
            onChange={(e) => onValueChange({backgroundColor: e.target.value})}
            />

        </div>
    )
};

export default ColorPicker;