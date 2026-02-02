
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Impact from './components/sections/Impact';
import Profile from './components/sections/Profile';
import Trajectory from './components/sections/Trajectory';
import Proposals from './components/sections/Proposals';
import JoinTeam from './components/sections/JoinTeam';
import Voting from './components/sections/Voting';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="antialiased bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Impact />
      <Profile />
      <Trajectory />
      <Proposals />
      <JoinTeam />
      <Voting />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

