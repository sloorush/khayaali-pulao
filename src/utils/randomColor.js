const randomColor = () => {
    const colors = [
        "#FBD71E",
        "#70BAFE",
        "#ff866e",
        "#F7C61B",
        "#63B275",
        "#2876CA",
        "#E4669A",
        "#F1AD45",
        "#77DCC6",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;
