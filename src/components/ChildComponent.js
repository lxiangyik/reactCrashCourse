export const ChildComponent = (props) => {
    return (
        <div>
           <button onClick={() => props.greetHandler('Kingsley')}>Greet Parent</button>
        </div>
    )
}