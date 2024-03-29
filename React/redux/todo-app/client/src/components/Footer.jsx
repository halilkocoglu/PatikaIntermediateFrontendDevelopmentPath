import React from 'react'

function Footer() {
  return (
    <footer className="info">
        <p>Created by <a href="https://github.com/halilkocoglu/PatikaIntermediateFrontendDevelopmentPath.git">Halil Koçoğlu</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  )
}

export default React.memo(Footer)
// not rendered every time. content is constant