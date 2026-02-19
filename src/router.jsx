import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import AnalysisPage from './pages/AnalysisPage';
import ReportPage from './pages/ReportPage';
import DocsPage from './pages/DocsPage';
import DeveloperPage from './pages/DeveloperPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: 'analyze', element: <AnalysisPage /> },
            { path: 'report/:id', element: <ReportPage /> },
            { path: 'docs', element: <DocsPage /> },
            { path: 'developer', element: <DeveloperPage /> },
        ],
    },
]);
