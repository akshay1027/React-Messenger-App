const fs = require('fs');
fs.mkdirSync('react-messenger-app/src/components');
fs.mkdirSync('react-messenger-app/src/pages');
fs.writeFileSync("react-messenger-app/src/pages/Home.js",
"import React from 'react';\n\nconst Home = () => {\n  return (\n    <div>\n      <h1>Home Page</h1>\n    </div>\n  )\n}\n\nexport default Home;");fs.writeFileSync("react-messenger-app/src/pages/NavBar.js", "import React from 'react';\n\nconst NavBar = () => {\n  return (\n    <div>\n      <h1>NavBar Page</h1>\n    </div>\n  )\n}\n\nexport default NavBar;");fs.writeFileSync("react-messenger-app/src/pages/About.js", "import React from 'react';\n\nconst About = () => {\n  return (\n    <div>\n      <h1>About Page</h1>\n    </div>\n  )\n}\n\nexport default About;");fs.writeFileSync("react-messenger-app/src/pages/Contact.js", "import React from 'react';\n\nconst Contact = () => {\n  return (\n    <div>\n      <h1>Contact Page</h1>\n    </div>\n  )\n}\n\nexport default Contact;");fs.writeFileSync("react-messenger-app/src/pages/Layout.js", "import React from 'react';\n\nconst Layout = () => {\n  return (\n    <div>\n      <h1>Layout Page</h1>\n    </div>\n  )\n}\n\nexport default Layout;");fs.writeFileSync("react-messenger-app/src/App.js", "import React from 'react';\nimport './App.css';\n\nimport { BrowserRouter as Router, Switch, Route } from 'react-router-dom';\n\nimport NavBar from './components/NavBar';\nimport Home from './pages/Home';\nimport NavBar from './pages/NavBar';\nimport About from './pages/About';\nimport Contact from './pages/Contact';\nimport Layout from './pages/Layout';\n\nconst App = () => {\n    return (\n        <div>\n            <Router>\n                <NavBar />\n                <Switch>\n                    <Route path='/Home' exact component={Home} />\n                    <Route path='/NavBar' exact component={NavBar} />\n                    <Route path='/About' exact component={About} />\n                    <Route path='/Contact' exact component={Contact} />\n                    <Route path='/Layout' exact component={Layout} />\n                </Switch>\n            </Router>\n        </div>\n    )\n}\n\nexport default App");fs.writeFileSync("react-messenger-app/src/components/NavBar.js", "import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst NavBar = () => {\n    return (\n        <div>\n            <Link to='/Home' >Home</Link>\n            <Link to='/NavBar' >NavBar</Link>\n            <Link to='/About' >About</Link>\n            <Link to='/Contact' >Contact</Link>\n            <Link to='/Layout' >Layout</Link>\n        </div>\n    )\n}\n\nexport default NavBar;");