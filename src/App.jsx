import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useTheme } from './ThemeContext';

function App() {
    const { theme } = useTheme();

    return (
        <>
            <div className={`bg-mesh ${theme === 'dark' ? 'bg-mesh--dark' : 'bg-mesh--light'}`} aria-hidden="true" />
            <Navbar />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
