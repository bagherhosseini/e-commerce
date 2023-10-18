"use client"
import Navbar from '../../components/Navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <header className='sticky top-0 z-50'>
      <Navbar />
    </header>
    {children}
  </>;
}
