import React from 'react'

export const BookDetail = ({book}) => {
    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {book.name}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                {book.author}
            </td>
            <td className="p-3 text-lg text-center text-gray-800">
                {book.price}
            </td>
        </tr> 
    )
}
