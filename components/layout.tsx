import TopicDropdown from '@/components/ui/TopicDropdown';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col bg-gray-900 space-y-4 items-center">
      <header className="sticky top-0 z-40 bg-gray-900 text-gray-200 w-full">
        <div className="h-16 border-b border-b-slate-600 py-4">
          <nav className="flex items-center">
            <div className="w-full mx-auto">
              <TopicDropdown />
            </div>
          </nav>
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col overflow-hidden text-white bg-gray-900">
        {children}
      </main>
    </div>
  );
}
