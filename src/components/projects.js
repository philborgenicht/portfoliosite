import React, {Component} from 'react'

import ReactPlayer from 'react-player'

class Projects extends Component {
  render(){
    return(
<div className='container'>
<br/><hr/>
<div className='row justify-content-center'>
<h1>Projects</h1>
</div>

<div className="row justify-content-center project-video">
<h2>Quarter 1 - Better Call Saul </h2>
<p></p>
<ReactPlayer url='https://www.youtube.com/watch?v=zxXvqyKywyE' />
</div>

<div className='row justify-content-left'>
A basic website, using primarily HTML, CSS, and JavaScript. Encompassed what I had learned in the first quarter of my program, including the aforementioned 3 languages, and topics such as DOM Manipulation, Event Listeners, and Local Storage.
</div>

<br/>
<hr/>


<div className="row justify-content-center project-video">
<h2>Quarter 3 - Bus To Show </h2>
<p></p>
<ReactPlayer url='https://www.youtube.com/watch?v=d7HP8_Gjm6I' />
</div>

<div className='row justify-content-left'>
</div>

<br/>
<hr/>


<div className="row justify-content-center project-video">
<h2>Quarter 3 - Bus To Show </h2>
<p></p>
<ReactPlayer url='https://www.youtube.com/watch?v=YmwKrAc9Vcw&t=1s' />
</div>

<div className='row justify-content-left'>
</div>

<br/>
<hr/>

<div className="row justify-content-center project-video">
<h2>Quarter 4 - Teamsters </h2>
<p></p>
<ReactPlayer url='https://www.youtube.com/watch?v=DVICjXvdVsc' />
</div>

<div className='row justify-content-left'>
</div>

<br/>
<hr/>

</div>





    )
  }
}

export default Projects
