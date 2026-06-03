import Child from "./Child";

function Parent({ name, course, city }) {
    return (
        <div>
            <Child name={name} course={course} city={city}/>
        </div>
    );
}
export default Parent;