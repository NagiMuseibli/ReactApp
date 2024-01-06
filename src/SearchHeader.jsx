function SearchHeader({ search }) {
    const handleForSubmit = (e) => {
        search('Nagi')

        e.preventDefault();
    }

    return (
        <div className="searchDiv">
            <form onSubmit={handleForSubmit}>
                <label>Ne axtarirsan??</label>
                <input />
            </form>
        </div>
    );
}

export default SearchHeader;