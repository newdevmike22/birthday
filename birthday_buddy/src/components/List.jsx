import Person from "./Person";

const List = ({ person }) => {
    return (
        <section>
            {person.map((people) => {
                return <Person key={people.id} {...people} />
            })}
        </section>
    )
}

export default List;