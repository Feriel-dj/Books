import React, {useState} from 'react'
import { connect } from 'react-redux';
import {AddBook, deleteBook, deleteAllBook} from '../redux/Actions/ActionAddBooks'
import FlipMove from 'react-flip-move';

const AddBooks = ({libraryData, addBook, deletebook, deleteAllBooks }) => {

    const initialState = {
        title: '',
        author: ''
    }
    const [newData, setNewData] = useState(initialState);
    
    const handleSubmit = e => {
        e.preventDefault();
        addBook(newData)
        //console.log(newData);
        //vider le input
        setNewData(initialState)
    }

    const displayData = libraryData.length > 0 ?
    // FlipMove pour les animations
    <FlipMove> 
        {
             libraryData.map(data => {
                return (
                    <li key={data.id} className='list-group-item list-group-item-light d-flex justify-content-between'>
                        <span><strong>Titre:</strong> {data.title}</span>
                        <span><strong>Auteur:</strong> {data.author}</span>
                        <span className='btn btn-danger' onClick={() => deletebook(data.id)}>x</span>
                    </li>
                )
            })
        }
    </FlipMove>
        : <p className='text-center'>Aucune data à afficher</p>

    const deleteAllBooksBtn = libraryData.length > 0 && 
    <div className='d-flex justify-content-center'>
        <button className='btn btn-danger mt-4 mb-5' onClick={()=> deleteAllBooks()}>Effacer tous les livres</button>
    </div>
    

  return (
    <main  role="main">
        
        <div className=' jumbotron jumbotron-fluid'>
            <div className='container text-center'>
                <h1 className='display-4'> Books </h1>
                <p>Ajouter un livre a votre bibliothèque</p>

                <form className='form-inline justify-content-center' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Titre' required
                        value={newData.title}
                        onChange={e => setNewData({...newData, title: e.target.value})}
                        />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control ml-3' placeholder='Auteur' required
                         value={newData.author}
                         onChange={e => setNewData({...newData, author: e.target.value})}
                          />
                    </div>
                    <div className='form-group'>
                       <button className='btn btn-outline-secondary ml-3'>Ajouter un livre</button>
                    </div>
                </form>
            </div>
        </div>

        <div className='container' style={{minHeight: '200px'}}>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-group'>
                        {displayData}
                    </ul>
                     {deleteAllBooksBtn}
                </div>
            </div>
        </div>
    </main>
  )
}

const addStateToProps = state => {
    return {
        libraryData: state.library
    }
}

const addDispatchToProps = dispatch => {
    return {
        addBook: param => dispatch(AddBook(param)),//dispatcher l'action
        deletebook: id => dispatch(deleteBook(id)),
        deleteAllBooks: () => dispatch(deleteAllBook())

    }
}
export default connect(addStateToProps, addDispatchToProps)(AddBooks)
