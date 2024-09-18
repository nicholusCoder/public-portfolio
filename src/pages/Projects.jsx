export default function Projects() {
  return <>
    <h1>Projects</h1>
    <ul className='Projects'>
      <a href='#' className='link'>
       <li className='Project'>
        <h3 className='title'>Project 1</h3>
        <p className='description'>Description of Project 1</p>
        <p className='footer'>footer of Project 1</p>
       </li>
      </a>
      <a href='#' className='link'>
        <li className='Project'>
          <h3 className='title'>Project 2</h3>
          <p className='description'>Description of Project 2</p>

          <p className='footer'>footer of Project 2</p>
        </li>
      </a>
      <a href='#' className='link'>
        <li className='Project'>
          <h3 className='title'>Project 3</h3>
          <p className='description'>Description of Project 3</p>

          <p className='footer'>footer of Project 3</p>
        </li>
      </a>
      <a href='#' className='link'>
        <li className='Project'>
          <h3 className='title'>Project 4</h3>
          <p className='description'>Description of Project 4</p>

          <p className='footer'>footer of Project 4</p>
        </li>
      </a>
    </ul>
  </>
}