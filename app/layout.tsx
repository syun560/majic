import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata: Metadata = {
    title: 'majic',
    description: '麻雀点差計算機',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body>
                <nav className="navbar navbar-dark bg-secondary bg-gradient shadow">
                    <div className="container">
                        <a className="navbar-brand" href="#">麻雀点差計算機</a>
                        <span className="navbar-text">Ver 1.0</span>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    )
}
