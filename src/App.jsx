import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import CourseCategories from './pages/CourseCategories';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Outlet />}>
          <Route index element={<CourseCategories />} />
          <Route path=":category" element={<CourseDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
