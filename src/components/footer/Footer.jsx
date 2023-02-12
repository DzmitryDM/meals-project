import React from 'react'

function Footer() {
  return (
         <footer className="page-footer #512da8 deep-purple darken-2">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            </div>
          </div>
        </footer>
  )
}

export default Footer