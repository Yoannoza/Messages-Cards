import '../assets/css/card.css'

export function Card(props){
    return (
        <div class="card">
            <div class="top-section">
                <div class="border"></div>
                <div class="icons">
                
                </div>
                <div className='content'>
                    <h4>{props.content}</h4>
                </div>
            </div>
            <div class="bottom-section">
                <span class="title">{props.author}</span>
                <div class="row row1">
                <div class="item">
                    <button onClick={props.like} class="big-text"><h1>&#128077;{props.yes}</h1></button>
                    <button onClick={props.delike} class="big-text"><h1>&#128078;{props.no}</h1></button>
                </div>
                </div>
            </div>
            </div>
    );
}