import React from 'react'

const Backend = () => {
  return (
    <>
      <div className='skills__content'>
        <h3 className='skills__title'>Backend Developer</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className='skills__name'>Python</h3>
                    <span className='skills__level'>Basic</span>
                </div>
                </div>

                <div className='skills__data'>
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className='skills__name'>Java</h3>
                    <span className='skills__level'>Basic</span>
                </div>
                </div>

                {/* HERE IF I WANT TO ADD MORE SKILLS LIKE LANGUAGES PHP OR MORE */}
                <div className='skills__data'>
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className='skills__name'>PHP</h3>
                    <span className='skills__level'>Basic</span>
                </div>
                </div>
            </div>


            {/* THIS IS ALSO SKILLS CONTENT FOR OTHERS LIKE IF I WANT TO ADD MYSQL, FIREBASE, ETC */}

            <div className='skills__group'>
                <div className='skills__data'>
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className='skills__name'>MYSQL</h3>
                    <span className='skills__level'>Basic</span>
                </div>
                </div>

                {/* <div className='skills__data'>
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className='skills__name'>Firebase</h3>
                    <span className='skills__level'>Basic</span>
                </div>
                </div> */}

                {/* <div className='skills__data'>
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className='skills__name'>Node Js</h3>
                    <span className='skills__level'>Basic</span>
                </div>
                </div> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default Backend
