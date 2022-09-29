import { useEffect, useState } from 'react'
import './App.css'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import data from './data'

function App() {
  const [review, setReview] = useState(data[0])
  const [value, setValue] = useState(0)

  const { id, image, name, job, text } = review

  const changeValue = (delta) => {
    const newValue = (delta + data.length) % data.length
    setValue(newValue)
    console.log(value)
  }

  useEffect(() => {
    setReview(data[value])
  }, [changeValue])

  return (
    <main>
      <div className='title'>
        <h1>Our Reviews</h1>
        <div className='underline'></div>
      </div>
      <article className='review'>
        <img src={image} alt='' />
        <h4 className='name'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <p>
          <ArrowLeft
            className='btn'
            onClick={() => changeValue(value - 1)}
          ></ArrowLeft>
          <ArrowRight
            className='btn'
            onClick={() => changeValue(value + 1)}
          ></ArrowRight>
        </p>
      </article>
    </main>
  )
}
export default App
