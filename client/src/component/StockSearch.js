import React from "react"

const SearchStocks = () => {
    const [value, setValue] = React.useState ("");
    const url = "https://finance.yahoo.com/chart/"
    const onChange = ({ target: { value } }) => {
        // Set captured value to input
        setValue(value);
    }
    return (
        <>
        <form>
            <div className="search">
                <label className="white-text text-lighten-3" htmlFor="text"><h5>Enter an exact stock symbol to search </h5></label>
                <input className="stocks" type="text" maxlength="5" value={value} onChange={onChange} placeholder="Enter stock symbol..." />
            </div>
            <button type="submit" className="fa fa-search" className="searchbtn"><a target="_blank" rel="noopener noreferrer" href={`${url}${value}`}>Search</a></button>
        </form>
        </>
    )
}


export default SearchStocks