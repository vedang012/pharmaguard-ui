import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Mail, Heart } from 'lucide-react';

function Footer() {
    return (
        <footer
            className="no-print"
            style={{ background: 'linear-gradient(135deg, var(--color-slate-900), var(--color-primary-900))' }}
        >
            <div className="container-app" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}>
                <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 'var(--space-3xl)' }}>
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2.5" style={{ marginBottom: 'var(--space-xl)' }}>
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ background: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600))' }}
                            >
                                <Shield className="w-4 h-4 text-white" strokeWidth={2.2} />
                            </div>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', color: 'white' }}>
                                PharmaGuard
                            </span>
                        </div>
                        <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '28rem', margin: 0 }}>
                            AI-powered precision pharmacogenomics platform. Analyze patient genotypes against drug interactions
                            with confidence-scored clinical guidance.
                        </p>
                        <div className="flex items-center" style={{ gap: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
                            {[Github, Twitter, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        color: 'rgba(148,163,184,0.8)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                        e.currentTarget.style.color = 'rgba(148,163,184,0.8)';
                                    }}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform links */}
                    <div>
                        <h4 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', marginBottom: 'var(--space-lg)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: 0 }}>
                            Platform
                        </h4>
                        <div className="flex flex-col" style={{ gap: 'var(--space-md)' }}>
                            {[
                                { to: '/analyze', label: 'Analysis' },
                                { to: '/docs', label: 'Documentation' },
                                { to: '/developer', label: 'Developer API' },
                            ].map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className="text-sm no-underline transition-colors"
                                    style={{ color: 'rgba(148,163,184,0.8)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148,163,184,0.8)')}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', marginBottom: 'var(--space-lg)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: 0 }}>
                            Resources
                        </h4>
                        <div className="flex flex-col" style={{ gap: 'var(--space-md)' }}>
                            {['CPIC Guidelines', 'PharmGKB', 'ClinVar Database'].map((label) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="text-sm no-underline transition-colors"
                                    style={{ color: 'rgba(148,163,184,0.8)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148,163,184,0.8)')}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-between"
                    style={{
                        marginTop: 'var(--space-4xl)',
                        paddingTop: 'var(--space-xl)',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        gap: 'var(--space-lg)',
                    }}
                >
                    <p className="text-xs m-0" style={{ color: 'rgba(148,163,184,0.6)' }}>
                        © 2026 PharmaGuard. Research & educational use only. Not for clinical diagnosis.
                    </p>
                    <p className="text-xs flex items-center gap-1 m-0" style={{ color: 'rgba(148,163,184,0.6)' }}>
                        Built with <Heart className="w-3 h-3" style={{ color: 'var(--color-danger)' }} /> for precision medicine
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
