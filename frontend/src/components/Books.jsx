import React, {useEffect, useState} from 'react'
import api from "../api"
import { AddBookForm } from './AddBookForm'
import { BookDetail } from './BookDetail'

export const Books = () => {

    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState(false)

    const fetchBook = async() => {
        try {
            const response = await api.get('/books')
            setBooks(response.data.books)
        } catch (error) {
            console.log(error)
        }
    }

    const addBook = async (book) => {
        try {
            await api.post('/books', {name: book.name, author: book.author, price: book.price})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBook()
        setNewBook(false)
    }, [newBook])

    return (
        <div className='grid grid-cols-3 grid-row-1 gap-4 align-center items-center' >
            <div className='col-span-2 order-2'>
                <h2 className=' text-stone-600 text-xl font-bold text-center'>Book list</h2>
                <div className="p-2">
                    <table className="w-full mt-5 table-auto">
                        <thead className="bg-stone-800 text-white rounded">
                            <tr>
                                <th className="p-2">Name</th>
                                <th className="p-2">Author</th>
                                <th className="p-2">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => 
                                <BookDetail 
                                    key={book.index}
                                    book={book}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <AddBookForm addBook={addBook} setNewBook={setNewBook}
            />
        </div>
    )
}
