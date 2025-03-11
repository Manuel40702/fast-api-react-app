import React, { useState } from 'react'

export const AddBookForm = ({addBook, setNewBook}) => {

    const [book, setBook] = useState({
        name: '',
        author: '',
        price: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(book).includes('')) return 
        
        if(book){
            addBook(book)
            setNewBook(true)
            setBook({
                name: '',
                author: '',
                price: 0
            })
        }
    }

    const handleChange = (e) => {

        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-5 p-10 bg-slate-100 shadow rounded-lg'>
            <div className=" grid grid-cols-1 gap-2">
                <input
                    type='text'
                    value={book.name}
                    onChange={handleChange}
                    id='name'
                    name='name'
                    placeholder='Enter book name'
                    className=" w-full rounded-lg border border-stone-700 p-2 focus:outline-stone-700"
                />
            </div>

            <div className=" grid grid-cols-1 gap-2">
                <input
                    type='text'
                    value={book.author}
                    onChange={handleChange}
                    id='author'
                    name='author'
                    placeholder='Enter author name'
                    className=" w-full rounded-lg border border-stone-700 p-2 focus:outline-stone-700"
                />
            </div>

            <div className=" grid grid-cols-1 gap-2">
                <input
                    type='text'
                    value={book.price}
                    onChange={handleChange}
                    id='price'
                    name='price'
                    placeholder='Enter author name'
                    className=" w-full rounded-lg border border-stone-700 p-2 focus:outline-stone-700"
                />
            </div>

            <input type="submit" 
                className=" rounded-lg w-full bg-stone-700 cursor-pointer hover:bg-stone-600 p-2 border border-b-2 border-b-lime-950 uppercase font-bold disabled:opacity-50 text-white" 
                value='Add Book'/>
        </form>
    )
}
