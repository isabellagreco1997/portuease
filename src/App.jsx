import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import LearningPortuguese from './LearningPortuguese';
import JoinUsBanner from './JoinUsBanner';
import LevelUpBanner from './LevelUpBanner';
import StartForFreeBanner from './StartForFreeBanner';
import CourseList from './CourseList';
import Footer from './Footer';
import Blog from './Blog';
import BlogPost from './BlogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import BlogProvider from './BlogContext';
import CourseProvider from './CourseContext';
import TutorProvider from './TutorContext';
import TutorDetail from './TutorDetail';
import TutorList from './TutorList';
import Support from './SupportComponent';
import QuizProvider from './QuizContext';
import QuizList from './QuizList'
import QuizDetail from './QuizDetail';
import Layout from './Layout';


function App() {
  return (
    <CourseProvider>
      <BlogProvider> 
        <TutorProvider>
        <QuizProvider>
        <Router>
          <Header />
          <Layout>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <JoinUsBanner />
                <Blog />
                <LearningPortuguese />
                <LevelUpBanner />
                <StartForFreeBanner />
                <CourseList />
              </>
            } />
            <Route path="/lessons" element={
              <>
                <CourseList />
                <JoinUsBanner />
              </>
            } />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/tutors" element={<TutorList />} />
              <Route path="/tutor/:id" element={<TutorDetail />} />
              <Route path="/support" element={<Support />} />
              <Route path="/quizzes" element={<QuizList />} />
                <Route path="/quiz/:id" element={<QuizDetail />} />

          </Routes>
          </Layout>
          {/* <Footer /> */}
        </Router>
        </QuizProvider>
      </TutorProvider>
      </BlogProvider>
    </CourseProvider>
  );
}

export default App;