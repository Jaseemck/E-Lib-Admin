import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Book = props=>(
    <tr className="text-white">
        <td>{props.book.name}</td>
        <td>{props.book.author}</td>
        <td>{props.book.description}</td>
        <td>{props.book.releaseDate.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.book._id}><input type="submit" value="Edit" className="btn btn-info"/></Link>  <input type="submit" value="Remove" className="btn btn-danger" onClick={()=>{
                props.deleteBook(props.book._id)
            }}/>
        </td>
    </tr>
)

export default class BooksList extends Component{
    constructor(props){
        super(props);

        this.deleteBook = this.deleteBook.bind(this);

        this.state = {books:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/books/')
            .then(response => {
                this.setState({books:response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    deleteBook(id){
        axios.delete('http://localhost:5000/books/'+id)
            .then(res=>console.log(res.data));
        this.setState({
            books:this.state.books.filter(el=>el._id!==id)
        })
    }


    bookList() {
        return this.state.books.map(currentbook => {
            return <Book book={currentbook} deleteBook={this.deleteBook} key={currentbook._id}/>
        })
    }

    render(){
        return (
            <div className="text-white">
                <h3 className="text-center text-white font-weight-bolder">List of Books</h3>
                <br/>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Release Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.bookList()}
                    </tbody>
                </table>
            </div>
        )
    }
}