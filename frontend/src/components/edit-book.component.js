import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditBook extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            author:'',
            description:'',
            releaseDate:new Date(),
        }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/books/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    author: response.data.author,
                    description: response.data.description,
                    releaseDate: new Date(response.data.releaseDate)
                })
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }
    onChangeAuthor(e){
        this.setState({
            author:e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }
    onChangeReleaseDate(date){
        this.setState({
            releaseDate:date
        });
    }

    onSubmit(e){
        e.preventDefault();
        const book={
            name:this.state.name,
            author:this.state.author,
            description:this.state.description,
            releaseDate:this.state.releaseDate
        }
        console.log(book);
        axios.post('http://localhost:5000/books/update/'+this.props.match.params.id,book)
            .then(res=>console.log(res.data));
        window.location='/';
    }

    render(){
        return (
            <div className="text-white">
                <h3 className="text-center text-white font-weight-bolder">Edit Book Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" required className="form-control"
                            value={this.state.name} onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input type="text" required className="form-control"
                            value={this.state.author} onChange={this.onChangeAuthor}/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" required className="form-control"
                            value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Release Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.releaseDate}
                                onChange={this.onChangeReleaseDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Book" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}