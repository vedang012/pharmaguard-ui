import { Download, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function DownloadButtons({ data, analysisId }) {
    function downloadJson() {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pharmaguard-${analysisId || 'report'}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="flex flex-wrap items-center gap-3">
            <button
                type="button"
                onClick={downloadJson}
                className="btn-secondary"
            >
                <Download className="w-4 h-4" />
                Download JSON
            </button>
            {analysisId && (
                <Link
                    to={`/report/${analysisId}`}
                    state={{ result: data }}
                    className="btn-primary"
                    style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
                >
                    <FileText className="w-4 h-4" />
                    View Full Report
                    <ExternalLink className="w-3.5 h-3.5" />
                </Link>
            )}
        </div>
    );
}

export default DownloadButtons;
