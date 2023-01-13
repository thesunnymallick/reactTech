import React from 'react'
import {Link} from 'react-router-dom'
function Fotter() {
  return (
    <div className="footer">
        <div>
            <div>
                <h2>reactTech</h2>
                <p>Copyright ©2023 All rights reserved || react Tech</p>
            </div>

            <div>
              <Link to="#">Facebook</Link>
              <Link to="#">Youtube</Link>
              <Link to="#">Instagram</Link>
              <Link to="#">Github</Link>
            </div>
        </div>
    </div>
  )
}

export default Fotter