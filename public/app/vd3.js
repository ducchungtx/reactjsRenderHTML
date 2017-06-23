var Note = React.createClass({
    render: function() {
        return(
            <div>
                <img src={this.props.src} />
                <p> {this.props.children} </p>
            </div>            
        );
    }
});

var List = React.createClass({
    getInitialState(){
        return({
            mang: [
                {src: "images/1.jpg", noiDung: "hello"},
                {src: "images/2.jpg", noiDung: "hanh"},
                {src: "images/3.jpg", noiDung: "ahii"}
            ]
        })
    },
    add: function() {
        this.state.mang.push({src: "images/4.jpg", noiDung: "ahaha"});
        this.setState(this.state);
    },
    render: function(){
        return(
            
            <div>
                <button onClick={this.add}>Them</button>
                {
                    this.state.mang.map(function(note, index){
                        return <Note key={index} src={note.src}>{note.noiDung}</Note>
                    })
                }
            </div>
        )
    }
});

ReactDOM.render(
    <div>
        <List />
    </div>,
    document.getElementById('root')
);