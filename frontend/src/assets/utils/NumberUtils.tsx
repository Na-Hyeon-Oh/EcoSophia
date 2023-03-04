const NumberUtils = (number: string) => {
    return {
        addComma() {
            return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        deleteComma() {
            return number.replace(/,/g, "");
        }
    };
}

export default NumberUtils;


