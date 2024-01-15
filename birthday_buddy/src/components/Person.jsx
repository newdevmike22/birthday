const Person = ({ name, age, image}) => {
    return (
        <article className="grid grid-cols-[auto_minmax(auto,_1fr)_auto] gap-3 items-center mb-[1.5rem]">
            <img src={image} alt={name} className="w-[75px] h-[75px] object-cover rounded-[50%] drop-shadow-md border border-solid border-gray-300" />
            <div>
                <h4 className="mb-[0.35rem] text-[1.5rem] font-bold">{name}</h4>
                <p>{age} years</p>
            </div>
        </article>
    )
}

export default Person;