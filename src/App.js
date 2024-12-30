import React from 'react'
import ReviewForm from './components/ReviewForm'
import ReviewList from './components/ReviewList'

const App = () => {
  return (
    <div>
      <h1>Product Review System</h1>
      <ReviewForm />
      <ReviewList />
    </div>
  );
};

export default App;