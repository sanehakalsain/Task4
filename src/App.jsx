
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import MyWork from "./components/MyWork.jsx";
import Gallery from "./components/Gallery.jsx";
import Subscribe from "./components/Subscribe.jsx";
import ArticleSection from "./components/ArticleSection.jsx";
import TutorialSection from "./components/TutorialSection.jsx";
import Contact from "./components/Contact.jsx";

import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <MyWork />
            <Gallery />
            
            <ArticleSection />
            <TutorialSection />
            <Contact />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col">
                    <Navbar />

                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
