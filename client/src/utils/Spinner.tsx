const Spinner = () => {
    return (
        <>
            <div className="flexCenter gap-1">
                <p>Loading image</p>
                <div className="border-2 border-black animate-spin" />
            </div>
        </>
    )
}

export default Spinner;