export default function Jokes(props) {
    return (
        <div>
            <h4>{props.setup}</h4>
            <p>{props.punchline}</p>
        </div>
    )
}