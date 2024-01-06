import { useState } from 'react'
import './App.css'
import SearchHeader from './searchHeader'
import axios from 'axios';
function App() {
  const searchImages = async (term) => {
    try {
      const response = await axios.get('https://unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID zHafJYI1PGoR-1tPIR9w0kpBaq9BKeaydD8qWZFob3w'
        },
        params: {
          query: term
        }
      })
      // debugger
      return response
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error; // Rethrow the error to propagate it further
    }

  }


  const handleSubmit = (term) => {
    console.log(term);
    searchImages(term);
  };
  return (
    <div className='App'>
      <SearchHeader search={handleSubmit} />
    </div>

  )
}

export default App
