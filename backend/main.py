from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv
import uvicorn

load_dotenv()

app = FastAPI()

class Book(BaseModel):
    name: str
    author: str
    price: int

class Books(BaseModel):
    books: List[Book]

""" origins = [
    os.getenv("ORIGIN_URL")
] """

app.add_middleware(CORSMiddleware, 
                    allow_origins=['*'], 
                    allow_credentials=True, 
                    allow_methods=['*'],
                    allow_headers=['*'])

memory_db = {"books": []}

# db_dependency = Annotated[Session, Depends(get_db)]
@app.get("/")
async def root():
    return {"message": "This is my first API with FastAPI, check the documentation in /docs"}

@app.get("/books", response_model=Books)
def get_books():
    return Books(books=memory_db["books"])

@app.post("/books", response_model=Book)
def add_book(book: Book):
    memory_db["books"].append(book)
    return book

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
